#bookprep_pagecount.py
#from
#t5.py

# Cricket Deane nov 6 2016

# bookprep_pagecount.py
# purpose:  quick list of number of pages in each book
# .........BEFORE AND AFTER you run book prep


#commandline
# python bookprep_pagecount.py source_dir    data_state
# python bookprep_pagecount.py bookprep_done after

###############################FUNCTION###########################
# nPrint=0 #no print option for create_previewList
# nPrint=1 #yes print option for create_preview List
def create_PreviewList(nPrint):
	previewList=[]
	previewList.append("dummy")
	return(previewList)
	#
	#

##################################MAIN############################
import sys, os
import datetime #for datetime
timestamp0=datetime.datetime.now()

pgm           = sys.argv[0] #name of pgm
if (len(sys.argv)<3):
        print "usage: python "+pgm+" source_dir data_state (before or after)" ##target_dir "
        sys.exit(0)
        #
        #
source_dir   = sys.argv[1] #name of input dir
data_state   = sys.argv[2] #before-0 or after-1



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
        print "usage: python "+pgm+" source_dir target_dir "
        sys.exit(0)
        #
        #

file_count_delta = 0
Udata_state = data_state.upper()
if Udata_state.find("AFTER")>-1:
	file_count_delta=2 #do not count MODS.xml or PDF.pdf
	#
	#

Flist=os.listdir(source_dir)
Flist.sort()
xmlList =[]
GdirList =[]
#print "\nMODS XML FILES AND DIRECTORIES\n"


#final print of book_dir, number of pages
print "\nList books and pages "+data_state+" running bookprep.php."
Flist.sort()
total_page_count=0
for item in Flist:
	s = item
	G = source_dir+"/"+s
	if (os.path.isdir(G) == True) :
		Glist = os.listdir(G)
		pages = len(Glist) - file_count_delta
		print "Book: " +G+"\t pages: " +str(pages)+" pages"
		total_page_count = total_page_count + pages
		#
		#
	#
	#

print "\ndata_state: "+data_state+"\tfile_count_delta: "+str(file_count_delta)+"\n"

print "\ntotalpages: "+str(total_page_count)+"\n"

cmdline="python"
for item in sys.argv:
        s0=item
        cmdline = cmdline +" "+s0
        #
        #
print cmdline +"\n"



timestamp1=datetime.datetime.now()
duration=timestamp1-timestamp0
print "       begin time: "+str(timestamp0)
print "         end time: "+str(timestamp1)
print "         duration: "+str(duration)
