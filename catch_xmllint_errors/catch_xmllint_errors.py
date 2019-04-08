#catch_xmllint_errors.py
#Python 2.7.5
#Cricket Deane
#July 29,2016

#purpose: run xmllint --nout on an entire directory of xml files


#########MAIN###############################
import os, sys


pgm           = sys.argv[0] #name of pgm
if len(sys.argv)<2:
	print "usage: python "+pgm+" source_dir "
	sys.exit(0)
	#
	#
source_dir    = sys.argv[1] #name of source directory

#remove trailing slash
a = len(source_dir)
if source_dir.endswith("/"):
	b=a-1
	source_dir = source_dir[0:b]
	#
	#


error_file    = "REPORT_"+source_dir+".txt"

cmdline=">> python catch_xmllint_errors.py "+source_dir
print "cmdline: " + cmdline

if (os.path.isdir(source_dir) == False) :
        print "source_dir: no such dir: "+source_dir
        print "usage: "+cmdline
        sys.exit(0)
        #
        #

HDR = "To obtain dc:identifier information for a file with an error:\n"
HDR = HDR +"  a. View that file with your text editor.\n"
HDR = HDR +"  b. Find <identifier>...</identifier>.  This contains the dc:identifier value.\n"
HDR = HDR +"  c. If <identifier> is missing, find <title>...</title>.  Copy the title value.\n"
HDR = HDR +"  d. In a browser, go to http://trace.tennessee.edu/ \n"
HDR = HDR +"  e. Enter the title value into the search box.  This will take you to a list of approximate matches.\n"
HDR = HDR +"  f. Click on the link to the EXACT match.  This will take you to the page for the broken xml file.\n"
HDR = HDR +"  g. Scroll to the bottom to find the dc:identifier.\n"
HDR = HDR +"  h. It will look like this: http://trace.tennessee.edu/utk_graddiss/3011/\n\n"
HDR = HDR +"You will have to do this for each file on the list.\n\n"
HDR = HDR + "Results saved at: " +error_file+"\n"
HDR = HDR + "-------------------------------------------------------------------------\n\n"
HDR = HDR + cmdline +"\n"
print "Results saved at: " +error_file+"\n"


Slist=os.listdir(source_dir) #get list of source_dir/*
Slist.sort()
Slen = len(Slist)
print "len(Slist)="+str(len(Slist))


ErrorList =""
ErrorList = ErrorList+HDR


ErrCount=0
for item in Slist:
        filename=item
        Fname=source_dir+"/"+filename
        cmd = "xmllint --noout "+Fname
        ReturnCode = os.system(cmd)
        if ReturnCode > 0:
                ErrCount = ErrCount+1
                ErrorList = ErrorList+"fileName: "+Fname+"; \treturnCode: "+str(ReturnCode)+"\n"
                #
                #
        #
        #

ErrorList = ErrorList+"\nNumber of files processed: "+str(len(Slist))
ErrorList = ErrorList+"\nNumber of files containing errors: "+str(ErrCount)

Ename = error_file
E = open(Ename,"w")
E.write(ErrorList)
E.close()

print cmdline
print "Number of files processed: "+str(len(Slist))
print "Number of files containing errors: "+str(ErrCount)
#print "FINI"

sys.exit(0)

