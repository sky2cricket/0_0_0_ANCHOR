#preview_bookprep.py
# 161106
#from
#t4.py
# Cricket Deane nov 6 2016

# bookprep_preview.py
# purpose: make sure input data in the correct format
# .........BEFORE you run book prep

#commandline:
# python argv[0]                         argv{1]                  > output_file
# python pgm                             source_directory         > you_name_this.txt
# python fullpath/bookprep_preview.py    fullpath/bookprep_target > fullpath/preview.txt


###############################FUNCTION###########################
# nPrint=0 #no print option for create_previewList
# nPrint=1 #yes print option for create_preview List
def create_PreviewList(nPrint):
	previewList=[]
	ct = 0
	while ct <9:
		ct= ct+1
		previewList.append("_000" +str(ct) +".")
		#
		#
	while ct<99:
		ct=ct+1
		previewList.append("_00" +str(ct) +".")
		#
		#
	while ct<999:
		ct=ct+1
		previewList.append("_0" +str(ct) + ".")
		#
		#
	while ct<9999:
		ct=ct+1
		previewList.append("_" +str(ct) + ".")
		#
		#

	ct2 = 0
	if nPrint>0:
		for item in previewList:
			s= item
			print "previewList["+str(ct2)+"]="+s
			ct2=ct2+1
			#
			#
		#
		#
	return(previewList)
	#
	#

##################################MAIN############################
import sys, os
import datetime #for datetime
timestamp0=datetime.datetime.now()

pgm           = sys.argv[0] #name of pgm
if (len(sys.argv)<2):
        print "usage: python "+pgm+" source_dir " ##target_dir "
        sys.exit(0)
        #
        #
source_dir   = sys.argv[1] #name of input dir


cmdline="python"
for item in sys.argv:
        s0=item
        cmdline = cmdline +" "+s0
        #
        #

PreviewList=[]
PreviewList=create_PreviewList(0)
#print cmdline
#sys.exit(0)

if (os.path.isdir(source_dir) == False) :
        print "source_dir: no such directory: "+source_dir
        print "usage: python "+pgm+" source_dir " ##target_dir "
        sys.exit(0)
        #
        #

Flist=os.listdir(source_dir)
Flist.sort()
xmlList =[]
GdirList =[]
print "\nMODS XML FILES AND DIRECTORIES\n"
for item in Flist:
	s=item
	G = source_dir+"/"+s
	if G.find("xml")>-1:
		xmlList.append(G)
		print "mods: "+G
	else:
		GdirList.append(G)
		print "Gdir: "+G
		#
		#
	#
	#

Flist.sort()
for item in Flist:
	s = item
	G = source_dir+"/"+s
	if G.find("xml")<0:
		print "\nFILES IN THIS DIRECTORY"
		print G
		Glist=os.listdir(G)
		Glist.sort()
		ct = -1
		for item in Glist:
			ct=ct+1
			t = item
			T= G+"/"+t
			compare= PreviewList[ct]
			outcome = "okay"
			custom_msg = " "
			if t.find(compare)<0:
				outcome="mismatch"
				#
				#
			if t.find("MODS.xml")>-1:
				custom_msg = "\n\t MODS -- REMOVE - indicates previous failed run of bookprep, check for rogue directories"
				#
				#
			if t.find(".txt")>-1:
				custom_msg = "\n\t REMOVE ALL TEXT FILES they prevent creation of HOCR"
				#
				#
			if t.find(".pdf")>-1:
				custom_msg = "\n\t PDF.pdf files are okay, other.pdf are probably not"
				#
				#
			print G+"/"+t+" -- "+compare +" ct="+str(ct)+"  "+outcome+custom_msg
			#	
			#end for
		#
		#end if
	#
	#end for




print "len(GdirList)): " +str(len(GdirList))
print "len(xmlList)): "  +str(len(xmlList))

#final print of book_dir, number of pages
print "\nList books and pages."
Flist.sort()
for item in Flist:
	s = item
	G = source_dir+"/"+s
	Glist = os.listdir(G)
	pages = len(Glist) 
	print "Book: " +G+"\t pages: " +str(pages)+" pages"
	#
	#
print "\n"

timestamp1=datetime.datetime.now()
duration=timestamp1-timestamp0
print "       begin time: "+str(timestamp0)
print "         end time: "+str(timestamp1)
print "         duration: "+str(duration)

print "\n"+cmdline
