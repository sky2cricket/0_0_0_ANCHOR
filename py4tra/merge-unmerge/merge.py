# merge.py
# copied from ../a1/merge01.py
# copied from t0.py
#  copied from generic_shell.py
# /gwork/cdeane/vpy/generic_shell.py

# chd nov 29, 2017

#TRAC-959 merge the directories for Robert

####################################################################
#commandline
#
#       arg[0]        arg[1]                                  arg[2]               
#python t1.py         fullpath_BASE_dir                       fullpath_ARCH_dir   
#python merge01.py    /gwork/cdeane/test104c/utk_gradthes     /gwork/cdeane/bpstuff/utk_gradthes

#Test directories:
#BASE_dir: /gwork/cdeane/test104/utk_gradthes
#ARCH_DIR: /gwork/cdeane/bpstuff/utk_gradthes

#The BASE_dir will be modified by this program.
#The BASE_dir holds sub-directories that are item level collection objects

#When BASE_dir is test104c, missing data is introduced for testing

#The ARCH_dir holds sub-directories that are item level reference objects
#The ARCH_dir is NOT modified by this program.

#BASE_dir example:
#FULLPATH:  data.lib.utk.edu:/arc1/TRACE/TRACE/utk_gradthes
#All of the directories under utk_gradthes are item level collection objects.

#ARCH_dir example:
#FULLPATH:  data.lib.utk.edu:/arch2/bpstuff/utk_gradthes/articles
#All of the directories under utk_gradthes are item level reference objects.

#To relate the BASE_dir/item to the ARCH_dir item, we need to look at 
#BASE_dir/BBBB/metadata.xml
#specifically the line: <articleid>HOOK</articleid>

#This program extracts the HOOK from the metadata.xml file and
#copies ARCH_dir/HOOK  into the item level BBBB directory.

# In Robert's example, he starts with the BASE_dir 
# data.lib.utk.edu:/arc1/TRACE/TRACE/utk_gradthes

# The item level sub-directory is 1446.
# The tree at the item level looks like this:


#  /TRACE/TRACE/utk_gradthes/1446
#  +-- fulltext.pdf
#  +-- metadata.xml

# Note the metadata.xml file.
# It contains the reference:  <articleid>2788</articleid>
# The HOOK is 2788.

# The full path for the ARCH_dir is
# data.lib.utk.edu:/arc2/bpstuff/utk_gradthes/articles

# The item level reference sub-directory is 2788.
# The tree at the item level looks like this:

#  /arc2/bpstuff/utk_gradthes/articles/2788
#  +-- text.pdf.1367952894
#  +-- text.pdf.1367952894.stamped

# The script below will work on each sub-directory in the BASE_dir and
#   1. identify the HOOK in the metadata.xml file
#   2. generate the full path to the corresponding ARCH_dir/HOOK location
#   3. merge the information by copying the HOOK directory into the
#      item level collection sub-directory.

# The resulting output for the merged item level data looks like this:
#  /TRACE/TRACE/utk_gradthes/1446
#  +-- fulltext.pdf
#  +-- metadata.xml
#  +-- 2788
#      +-- text.pdf.1367952894
#      +-- text.pdf.1367952894.stamped

# Error checking
#
#  0. Incomplete command line
#       result: error message, program exit
#  1. No such directory BASE_dir (argv[1])
#       result: error message, program exit
#  2. No such directory ARCH_dir (argv[2])
#       result: error message, program exit
#  3. Detect no "<articleid>" in metadata.xml
#	result: Write message and move on to next item
#  4. Detect no HOOK directory in ARCH_dir 
#       could be caused by missing directory or misspelled HOOK
#	result: Write message and move on to next item
#  5. No check for detect no files in HOOK directory

##################################MAIN############################
import sys, os
import datetime #for datetime
timestamp0=datetime.datetime.now()

pgm           = sys.argv[0] #name of pgm
if (len(sys.argv)<3):
        print "usage: python "+pgm+" BASE_dir ARCH_dir "
        sys.exit(0)
        #
        #
BASE_dir    = sys.argv[1] #fullpath_BASE_dir
ARCH_dir    = sys.argv[2] #fullpath_ARCH_dir



if (os.path.isdir(BASE_dir) == False) :
        print "BASE_dir: no such directory: "+BASE_dir
        print "usage: python "+pgm+" BASE_dir ARCH_dir "
        sys.exit(0)
        #
        #

if (os.path.isdir(ARCH_dir) == False) :
        print "ARCH_dir: no such directory: "+ARCH_dir
        print "usage: python "+pgm+" BASE_dir ARCH_dir "
        sys.exit(0)
        #
        #


cmdline=">> python"
for item in sys.argv:
        s0=item
        cmdline = cmdline +" "+s0
        #
        #


Blist = os.listdir(BASE_dir) #input files 

for item in Blist:
	s0 = item
	s1 = s0.replace("\n","")
	s2 = BASE_dir+"/"+s1
	s3 = s2+"/metadata.xml"
	if (os.path.isfile(s3) == False) :
        	print "s3: no such file: "+s3
	else:
		F = open(s3,"r")
		Fall = F.read()
		F.close()
        	#
        	#
	if Fall.find("<articleid>")<0:
		print "No HOOK value in "+s3
	else:
		Farray  = Fall.split("<articleid>")
		Fall2   = Farray[1]
		Farray2 = Fall2.split("</articleid>")
		h00    = Farray2[0]
		h01  = ARCH_dir+"/"+h00
		HOOK = h00
		if (os.path.isdir(h01) == False) :
        		print "h01: no such directory: "+h01
		else:
        		h1cmd   = "cp -r "+h01+" "+s2+"/"
			#print "command: "+h1cmd #live code no print
			os.system(h1cmd)
			#
			#
		#
		#
	#
	#



timestamp1=datetime.datetime.now()
duration=timestamp1-timestamp0
print "       begin time: "+str(timestamp0)
print "         end time: "+str(timestamp1)
print "         duration: "+str(duration)
print "     command line: \n"+cmdline+"\n"

