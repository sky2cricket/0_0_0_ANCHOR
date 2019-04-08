#add_pdfs.py
#from
#t6.py

# Cricket Deane nov 7 2016

# add_pdfs.py
# purpose:  take the files in book_pdf/ and copy them into the correct directory in bookprep_done/
#           and RENAME the copy to PDF.pdf


#command_line (from this directory)
# python  pgm          directory_containing_pdfs_only  directory_for_input_after_bookprep.php
# python  add_pdfs.py  /gwork/cdeane/CDF2016/book_pdf  /gwork/cdeane/CDF2016/bookprep_done

##################################MAIN############################
import sys, os
import datetime #for datetime
timestamp0=datetime.datetime.now()

pgm           = sys.argv[0] #name of pgm
if (len(sys.argv)<3):
        print "usage: python "+pgm+" source_dir target" ##target_dir "
        sys.exit(0)
        #
        #
source_dir   = sys.argv[1] #name of input dir
target_dir   = sys.argv[2] #name of target dir



cmdline="python"
for item in sys.argv:
        s0=item
        cmdline = cmdline +" "+s0
        #
        #

print cmdline

if (os.path.isdir(source_dir) == False) :
        print "source_dir: no such directory: "+source_dir
        print "usage: python "+pgm+" source_dir target_dir "
        sys.exit(0)
        #
        #
if (os.path.isdir(target_dir) == False) :
        print "source_dir: no such directory: "+target_dir
        print "usage: python "+pgm+" source_dir target_dir "
        sys.exit(0)
        #
        #


Flist=os.listdir(source_dir)
Flist.sort()


for item in Flist:
	s = item
	G = source_dir+"/"+s
	print G
	t = s.replace(".pdf","")
	H = target_dir+"/"+t+"/"
	copyCmd = "cp "+G+ " "+H+"PDF.pdf"
	print copyCmd
	os.system(copyCmd)
	#
	#


cmdline="python"
for item in sys.argv:
        s0=item
        cmdline = cmdline +" "+s0
        #
        #
print cmdline



timestamp1=datetime.datetime.now()
duration=timestamp1-timestamp0
print "       begin time: "+str(timestamp0)
print "         end time: "+str(timestamp1)
print "         duration: "+str(duration)
