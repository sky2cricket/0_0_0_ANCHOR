#makeRisTho.py
#all input  filenames end with '.xml'
#all output filenames are built by replacing the input name '.xml' with '.ris'

#THIS IS CUSTOM FOR THO DATA
#Special processing: 
#All the xml input files contain
#<dc:description>The University of Tennessee Libraries (Knoxville, Tennessee) is the digital publisher.</dc:description>
#Some files also contain <dc:description>some other data</dc:description>
#This second description information needs to be added to the docOrigFormat part of docBlock when it exists.
#see:   docBlock  = '\nN2  - <ul>'+docOrigFormat+docDates+docDocId+'</ul>'

#PY publication year is needed for searching


#command line:
#python makeRisTho.py source_dir  target_dir >> redirectText
#python makeRisTho.py thoIN       thoOUT     >> optionalLog.txt

#use a log file instead of print to screen.

#commonalities for tho files

# TY  - FIGURE  because <dc:type>Image</dc:type>
# TI  - <dc:title>...</dc:title>
# T2  - secondary title "Thompson Brothers Digital Photograph Collection"
# Y1  - 2009 (Y1)
# PY  - 2009  
# CY  - (source) The University of Tennessee Digital Initiatives #constant value
# PB  - (Collection Name):  Thompson Brothers Digital Photograph Collection
# AU  - (Authors):  Tho Bros Comm Photographers, 1920-1940
# KW  - (Subjects): keywords
# N2  - (Description): <ul><li>Date of Photo Creation: 1920-1940</li><li>Date of Digital Publication: 2009</li></ul>
# UR  - (URL): http://something
# UR from: <dc:identifier>http://idserver.utk.edu/?id=201000000000044</dc:identifier>



#########MAIN###############################
import os, sys

showFall = 0 # showFall=1 for debug, 0 for skip debug
testTitlePost = "" ## " - 130806 docBlock6 THO"

pgm           = sys.argv[0] #name of pgm
if len(sys.argv)<3:
        print "usage: python "+pgm+" source_dir target_dir "
        sys.exit(0)
        #
        #
source_dir    = sys.argv[1] #name of source dir     ###F  
target_dir    = sys.argv[2] #name of output dir     ###G  

cmdline=">> python"
for item in sys.argv:
        s=item
        cmdline = cmdline +" "+item
        #
        #

if (os.path.isdir(source_dir) == False) :
        print "source_dir: no such dir: "+source_dir
        print "usage: "+cmdline
        sys.exit(0)
        #
        #
if (os.path.isdir(target_dir) == False) :
	print "target_dir: no such dir: "+target_dir
	print "usage: "+cmdline
	sys.exit(0)
	#
	#
	

Flist=os.listdir(source_dir) #get list of source_dir/*
Flist.sort()
Flen = len(Flist)
#print "source_Sub: len(Flist)="+str(len(Flist))

#sys.exit(0)
Amonth = []
Amonth.append("zero")
Amonth.append("January ")
Amonth.append("February ")
Amonth.append("March ")
Amonth.append("April ")
Amonth.append("May ")
Amonth.append("June ")
Amonth.append("July ")
Amonth.append("August ")
Amonth.append("September ")
Amonth.append("October ")
Amonth.append("November ")
Amonth.append("December ")



ErrCount=0
Nfiles =0
for item in Flist:
	Gall = ""
	Fall = ""
	myAuthor    = ""
	myTitle     = ""
	myPublisher = ""
	myKeywords  = ""
	rawKeywords = ""
	myURL	    = ""
        filename=item
	risname = filename.replace(".xml",".ris")
        Fname=source_dir+"/"+filename
        Gname=target_dir+"/"+risname
	F = open(Fname,"r")
	Fall = F.read()
	#Flines = F.readlines()
	F.close()
	Fall2  = Fall.replace("</oai_dc:dc>","_XXX_</oai_dc:dc>")
	Fall3  = Fall2.replace("<dc:","_XXX_<dc:")
	Farray = Fall3.split("_XXX_")
	#print Fname+" -- len(Farray)="+str(len(Farray))
	ct=0
	Flines=[]
	while ct<len(Farray):
		Flines.append(Farray[ct])
		ct=ct+1
		#
		#
	#print Fname+" -- len(Flines)="+str(len(Flines))
	if showFall>0:
		print "\nFall:\n------------\n"+Fall+"\n------------\n"
		#
		#
	if Fall.find("<dc:date>")<0:
		DateDetail=""
		myDateY1  ="\nY1  - 1920-1940 "
		myDatePY  ="\nPY  - 1920 "
		dateOfPhotoCreation=""
		#
		#
	for item in Flines:
		s = item
		myRisType = "\nTY  - FIGURE " # all tho are images
		mySource  = "\nCY  - The University of Tennessee Libraries Digital Collections "  #constant

		#lstrip will strip left leading white space
		s0 = s.lstrip(" ") 
		#if   s0.find("<dc:date>")>-1: no dates in tho
		if s0.find("<dc:source>")>-1:
			s1 = s0.replace("<dc:source>","")
			s2 = s1.replace("</dc:source>\n","")
			s3 = s2.lstrip(" ")
			docOrigFormat ='<li>Original Format: '+s3+'</li>'  #docBlock
			print filename+":\n"+s0+docOrigFormat
		elif s0.find("<dc:creator>")>-1:
			s1 = s0.replace("<dc:creator>","")
			s2 = s1.replace("</dc:creator>\n","")
			s3 = s2.replace(", 1920-1940","")
			s4 = s3.lstrip(" ")
			s5 = '\nAU  - '+s4
			myAuthor = s5
		elif s0.find("<dc:title>")>-1:
			s1 = s0.replace("<dc:title>","")
			s2 = s1.replace("</dc:title>\n","")
			s3 = s2.replace('"','',2)
			s4 = s3.lstrip(" ")
			s5 = s4 #+testTitlePost #tag at end for testing
			myTitle = '\nTI  - '+s5+' '
		elif s0.find("<dc:description>")>-1:
			if s0.find("<dc:description>Document ID:")>-1:
				s1 = s0.replace("<dc:description>","")
				s2 = s1.replace("</dc:description>\n","")
				s3 = s2.lstrip(" ")
				docDocId = '<li>'+s3+'</li>' #docBlock
			else:
				s1 = s0.replace("<dc:description>","")
				s2 = s1.replace("</dc:description>\n","")
				s3 = s2.lstrip(" ")
				#
				#
		elif s0.find("<dc:identifier>")>-1:
			s1 = s0.replace("<dc:identifier>","")
			s2 = s1.replace("</dc:identifier>\n","")
			s3 = s2.lstrip(" ")
			myURL = '\nUR  - ' +s3 +' '
		elif s0.find("<dc:subject>")>-1:
			s1 = s0.replace("<dc:subject>","")
			s2 = s1.replace("</dc:subject>\n","")
			s3 = s2.lstrip(" ")
			s4 = s3.rstrip(' ')
			rawKeywords = rawKeywords+s4+"ZZZZ"
			#
			#end if s0.find("<dc:subject>")>-1:
		#
		#end for item in Flines
	#check for missing fields in dc file
	if Fall.find("<dc:creator>")<0:
		myAuthor = '\nAU  - none '
		#
		#
	if Fall.find("<dc:title>")<0:
		myTitle = '\nTI  - none '
		#
		#
	if Fall.find("<dc:publisher>")<0:
		myPublisher = '\nPB  - none ' 
		#
		#
	if Fall.find("<dc:identifier>")<0:
		myURL = '\nUR  - none '
		#
		#
	#process keywords
	myK      = ""
 	keyArray = rawKeywords.split("ZZZZ")
        keyArrayLen = len(keyArray)
        ctK=0
        #print "len(keyArray)="+str(len(keyArray))
	len2 = len(keyArray) -1
        while ctK<len2:
		k0 = keyArray[ctK]
        	#print "keyArray["+str(ctK)+"]="+k0 
		myK = myK+'\nKW  - '+k0+' '
        	ctK=ctK+1
		#
		#
	if Fall.find("<dc:subject>")<0:
		myK = "\nKW  - no keywords "
		#
		#
	myKeywords = myK
	#myKeywords = myK.replace('\nKW  - ','',1)

	#constants for THO############################
	docDates   = '<li>Date of Photo Creation: 1920-1940</li>' ###<li>Date of Digital Publication: 2009</li>'
	myRisType = "\nTY  - FIGURE " #constant
	#NO myDatePY  = '\nPY  - 2009 '     
	myPublisher = '\nPB  - Thompson Brothers Digital Photograph Collection '
	#print "myKeywords:\n"+myKeywords
	myLastLine = "\nER  -  \n"


        #docBlock for THO#############################
	if Fall.find("<dc:source>")<0:
		docOrigFormat = "" #for when it is missing
		#
		#
	if Fall.find("<dc:description>Document ID")<0:
		docDocId      = ""
		#
		#
	docBlock  = '\nN2  - <ul>'+docOrigFormat+docDates+docDocId+'</ul>'

	Gall00  = myRisType
	Gall01  = Gall00+myTitle  
	Gall00  = myRisType
	Gall01  = Gall00+myTitle  
	Gall02  = Gall01+myDatePY+myDateY1
	Gall03  = Gall02+myAuthor 
	Gall04  = Gall03+myPublisher #label Collection Name
	Gall05  = Gall04+mySource 
	Gall06  = Gall05+myKeywords
	Gall07  = Gall06+docBlock
	Gall09  = Gall07+myURL  
	Gall10  = Gall09+myLastLine
	G=open(Gname,"w")
	G.write(Gall10)
	G.close()

	Nfiles = Nfiles+1
        #
        #end for item in Flist

Glist=os.listdir(target_dir) #get list of target_dir/*
Glist.sort()
Glen = len(Glist)
print "target_dir: len(Flist)="+str(len(Flist))
print "Number of files processed: "+str(Nfiles)
print cmdline
print "FINI"

sys.exit(0)

