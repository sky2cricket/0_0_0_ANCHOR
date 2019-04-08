#makeRisRth.py
#all input  filenames end with '.xml'
#all output filenames are built by replacing the input name '.xml' with '.ris'

#including Ken and Anne's requests

#THIS IS CUSTOM FOR RTH DATA
#Special processing: 
#All the xml input files contain
#<dc:description>The University of Tennessee Libraries (Knoxville, Tennessee) is the digital publisher.</dc:description>
#Some files also contain <dc:description>some other data</dc:description>
#This second description information needs to be added to the docOrigFormat part of docBlock when it exists.
#see:   docBlock  = '\nN2  - <ul>'+docOrigFormat+docDates+docDocId+'</ul>'
#In this collection, the original format refers to the photographic parameters of original material.

#Y1 Date is loaded




#command line:
#python makeRisRth.py source_dir  target_dir >> redirectText
#python makeRisRth.py rthIN       rthOUT    >> optionalLog.txt

#use a log file instead of print to screen.

#commonalities for rth files

# TY  - FIGURE  because <dc:type>Image</dc:type>
# TI  - <dc:title>...</dc:title>
# T2  - secondary title "Thompson Brothers Digital Photograph Collection"
# PY  - 1943 
# Y1  - June 26  (Y1) derive from date of photo creation 1943-06-26
# CY  - (source) The University of Tennessee Digital Initiatives #constant value
# PB  - (Collection Name):  Albert Gordon "Dutch" Roth Digital Photograph Collection
# AU  - (Authors): Albert Gordon "Dutch" Roth
# KW  - (Subjects): keywords
# N2  - (Description): <dc:description>not Doc ID</dc:description>
# UR  - (URL): http://something
# UR from: <dc:identifier>http://idserver.utk.edu/?id=201000000000044</dc:identifier>
# ER -



#########MAIN###############################
import os, sys

showFall = 0 # showFall=1 for debug, 0 for skip debug
testTitlePost = "" #" - 130802 docBlock4 RTH "

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
	myNote      = ""
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
		myDateY1  ="\nY1  - none "
		myDatePY  ="\nPY  - none "
		dateOfPhotoCreation=""
		#
		#
	for item in Flines:
		s = item
		#lstrip will strip left leading white space
		s0 = s.lstrip(" ") 
		if s0.find("<dc:date>")>-1:
			s1 = s0.replace('<dc:date>',"")
			s2 = s1.replace('</dc:date>\n',"")
			s3 = s2.lstrip(' ')
			s3a= s3.rstrip(' ')
			s4 = s3a[0:4]
			s4 = s3a.split("-")
			s5yr = ''
			s5mo = ''
			s5da = ''
			s6mo = ''
			s6da = 0
			displayY1 = ''
			if len(s4)>2:
				s5yr = s4[0]
				s5mo = s4[1]
				s5da = s4[2]
				s6mo = Amonth[int(s5mo)]
				s6da = int(s5da)
				displayY1 = s6mo+str(s6da)+', '+s5yr+' '
				myDateY1 = "\nY1  - "+displayY1
				myDatePY = "\nPY  - "+s5yr +"  "
			elif len(s4)>1:
				s5yr = s4[0]
				s5mo = s4[1]
				s6mo = Amonth[int(s5mo)]
				displayY1 = s6mo +', ' +s5yr+' '
				myDateY1 = "\nY1  - "+displayY1
				myDatePY = "\nPY  - "+s5yr +"  "
			elif len(s4)>0:
				s5yr = s4[0]
				myDateY1 = "\nY1  - "+s5yr+"  "
				myDatePY = "\nPY  - "+s5yr +"  "
			dateOfPhotoCreation = "<li>Date of Photo Creation: "+s3a+"</li>" #docBlock
		elif s0.find("<dc:creator>")>-1:
			s1 = s0.replace("<dc:creator>","")
			s2 = s1.replace("</dc:creator>\n","")
			s3 = s2.lstrip(' ')
			s4 = s3.rstrip(' ')
			s4 = 'Albert Gordon "Dutch" Roth'
			myAuthor = '\nAU  - '+s4
		elif s0.find("<dc:source>")>-1:
			s1 = s0.replace("<dc:source>","")
			s2 = s1.replace("</dc:source>\n","")
			s3 = s2.lstrip(" ")
			docOrigFormat ='<li>Original Format: '+s3+'</li>'  #docBlock
			print filename+"\ndocOrigFormat: "+docOrigFormat
		elif s0.find("<dc:title>")>-1:
			s1 = s0.replace("<dc:title>","")
			s2 = s1.replace("</dc:title>\n","")
			s3 = s2.lstrip(" ")
			s4 = s3.replace('"','',10)
			s4a= s4.replace('Dutch','"Dutch"')
			s5 = s4a #+testTitlePost #tag at end for testing
			myTitle = '\nTI  - '+s5+' '
		elif s0.find("<dc:description>")>-1:
			if s0.find("<dc:description>Document ID:")>-1:
				s1 = s0.replace("<dc:description>","")
				s2 = s1.replace("</dc:description>\n","")
				s3 = s2.lstrip(" ")
				docDocId = '<li>'+s3+'</li>'
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
	if myAuthor.find("Roth")>100000: #remedy for chopped name
		myAuthor = "\nAU  - Albert Gordon Roth, 1890-1974 "
		#
		#
	myKeywords = myK

	#myKeywords = myK.replace('\nKW  - ','',1)

        #constants for RTH############################
	myRisType   = "\nTY  - FIGURE " # all rth are images
	mySource    = "\nCY  - The University of Tennessee Libraries Digital Collections "  #constant
	##myDatePY    = '\nPY  - 2003 '  #keep
	myPublisher = '\nPB  - Albert Gordon "Dutch" Roth Digital Photograph Collection '
	dateOfDigitalPublication  = '<li>Date of Digital Publication: 2003</li>'

        #docBlock for RIS#############################
	if Fall.find("<dc:source>")<0:
		docOrigFormat = "" #for when it is missing
		print "docOrigFormat missing"
		#
		#
	if Fall.find("<dc:description>Document ID")<0:
		docDocId      = ""
		#
		#

	docDates = dateOfPhotoCreation ############+dateOfDigitalPublication
	#docDetails - too much information! dump!
	docBlock  = '\nN2  - <ul>'+docOrigFormat+docDates+docDocId+'</ul>'


	#print "myKeywords:\n"+myKeywords
	myLastLine = "\nER  -  \n"
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

