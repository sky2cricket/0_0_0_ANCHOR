#review_page_headers.py
#from
#t4d.py
#from
#t4c.py
#from
#t4b.py
#from t4a.py
#t4a.py
#from
#t3_grab_title.py
#from
#t2_grab_title.py
#from
#t1_grab_title.py
#from
#t0_grab_title.py

#/gwork/cdeane/VANVACTOR/py/at/t1_grab_title.py

# generic_shell.py
# /gwork/cdeane/vpy/generic_shell.py

# chd nov 5 2016

# chd sep 11 2018

# purpose:  pull title out of top level MODS.xml file
#           to replace in page level MODS.xml file.
#           page level errors continue to be mysterious.
#
# chd dec 3 2018
#           IMPROVE the t1-t2 version by keeping : page N </mods:title>
#           ONLY REPLACE title_phrase from top leve MODS
#
#for example:  0012_003979_000026/MODS.xml --------------------------top level mods
#              <title>La alegria profunda</title>   (comment modified because of illegal character, see about.txt
#              title_phrase is: La alegria profunda  ditto
#
#              0012_003979_000026/1/MODS.xml ------------------------page level mods
#              <mods:title>La alegr&iacute;a profunda : page 1</mods:title>
#              prefix is: <mods:title>
#	       suffix is: : page 1</mods:title>
#
#              REPLACEMENT IS prefix + title_phrase + suffix
#              This strategy preserves the page number for each child 
#
#              Correction is done one directory at a time for now.
#
#		MAKE FUNCTION FOR DOING EACH TASK
#		t4b.py works
#               t4c for cleanup


# cmdline: python t4c.py testok


###############################FUNCTION###########################

def do_something(arg):
	#this is a function
	print "this is a function: "+arg
	N=4
	return(N)
	#
	#

def get_object_level_filename(object_dir):
	dir00 = str(object_dir)
	dir01 = dir00.replace("/","")
	object_level_filename = dir01+"/MODS.xml"
	return(object_level_filename)
	#
	#


def get_titleline_prefix(fullpath_object_level_filename):
	Fname = str(fullpath_object_level_filename)
	F     = open(Fname,"r")
	Flist = F.readlines()
	F.close()
	
	for item in Flist:
		fline00 = str(item)
		fline01 = fline00.replace("\n","")
		if fline01.find("<title>") > -1:
			title_full_line = fline01
			break;
			#
			#
		#
		#

	#print "title_full_line="+title_full_line
	title_phrase_00 = title_full_line.replace("<title>","")
	title_phrase_01 = title_phrase_00.replace("</title>","")
	title_phrase_02 = title_phrase_01.lstrip(" ")
	title_phrase    ="    <mods:title>"+title_phrase_02
	#print "title_phrase="+title_phrase
	print "\nPROCESSING "+ Fname
	return(title_phrase)
	#
	#


def print_sanity_check (list,listname):
	Elist = list
	Elistname =str(listname)
	ect   =0
	print "\n SANITY CHECK for LIST: "+Elistname+" \n"
	for item in Elist:
		e00 = str(item)
		e01 = e00.replace("\n","")
		print Elistname+"["+str(ect)+"]="+Elist[ect]
		ect=ect+1
		#
		#
	print "\n\n"
	return (Elistname)
	#
	#


def get_PAGElist_list(fullpath_local_source_dir):
	FULLPATH_LOCAL_SOURCE_DIR=str(fullpath_local_source_dir)
	Flist = os.listdir(fullpath_local_source_dir)
	ft =0
	PAGElist=[]
	for item in Flist:
		f00 = str(item)
		f01 = f00.replace("\n","")
		#print "Flist["+str(ft)+"] = "+f01
		if f01.isdigit():
			PAGElist.append (FULLPATH_LOCAL_SOURCE_DIR+"/"+str(f01)+"/MODS.xml")
		else:
			a=2
			#print "f01 NaN : Flist["+str(ft)+"] = "+f01
			#
			#
		ft = ft+1
		#
		#

	return (PAGElist)
	#
	#

def process_page_header(title_prefix,Pname):
	TITLE_PREFIX=str(title_prefix)
	PNAME=str(Pname)
	#print "process_page_header for "+PNAME
	STR_01 = "process_page_header for "+PNAME

	pt=0
	P = open(PNAME,"r")
	Plist = P.readlines()
	P.close()
	P2all = ""
	REPLACE=0
	linect = 0
	for item in Plist:
		Pline00 = str(item)
		Pline01 = Pline00.replace("\n","")
		if Pline01.find("<") > -1:
			linect = linect+1
			if Pline01.find("<mods:title>") > -1 :
				Aline=Pline01.split(" : page")
				#print "Aline[0]="+Aline[0]
				#print "Aline[1]="+Aline[1]
				Aline_new = TITLE_PREFIX+" : page"+Aline[1]
				print STR_01+ " :  "+Aline_new
				P2all = P2all+Aline_new+"\n"
			else:
				P2all= P2all+ (Pline01) +"\n"
				#
				#
			#
			#
		pt=pt+1
		P2 = open(PNAME,"w")
		P2.write(P2all)
		#time.sleep(2)
		P2.close()
		#time.sleep(2)
		#
		#	
	return("success")
	#
	#

##################################MAIN############################
import sys, os
import datetime #for datetime
import time #for sleep(N) n in seconds
#sys.setdefaultencoding(UTF-8)
timestamp0=datetime.datetime.now()

pgm           = sys.argv[0] #name of pgm
if (len(sys.argv)<2):
        print "usage: python "+pgm+" source_dir   "
        sys.exit(0)
        #
        #
source_dir00  = str(sys.argv[1]).replace("\n","") #name of input dir
source_dir    = source_dir00.replace("/","")
print "source_dir="+source_dir



if (os.path.isdir(source_dir) == False) :
        print "source_dir: no such directory: "+source_dir
        print "usage: python "+pgm+" source_dir "
        sys.exit(0)
        #
        #



cmdline="python"
for item in sys.argv:
        s0=item
        cmdline = cmdline +" "+s0
        #
        #
print cmdline


#ReturnValue=do_something("example of a function")


print "sys.getfilesystemencoding()=" +sys.getfilesystemencoding()


Elist = []
Dlist = os.listdir(source_dir)
for item in Dlist:
	D00 = str(item)
	D01 = D00.replace("\n","")
	if D01.find(".xml")<0:
		Elist.append(D01)
		#
		#
	#
	#

E2list=[]
PAGElist=[]
for item in Elist:
	E00=str(item)
	E01=E00.replace("\n","")
	object_level_filename=get_object_level_filename(E01)
	#print "object_level_filename="+object_level_filename
	fullpath_object_level_filename = source_dir+"/"+object_level_filename
	#print "fullpath_object_level_filename="+fullpath_object_level_filename
	E2list.append(fullpath_object_level_filename)
	titleline_prefix = get_titleline_prefix(fullpath_object_level_filename)
	fullpath_local_source_dir= source_dir+"/"+E01
	#print "PROCESS fullpath_local_source_dir="+fullpath_local_source_dir
	#print "PROCESS: "+fullpath_local_source_dir
	PAGElist=get_PAGElist_list(fullpath_local_source_dir)
	pct =0
	for item in PAGElist:
		p00 = str(item)
		p01 = p00.replace("\n","")
		Pname= p01
		#print "PAGElist["+str(pct)+"]: Pname="+Pname
		status=process_page_header(titleline_prefix, Pname)
		#print "status="+status+" : "+Pname
		pct=pct+1
		#
		#
	
		

	#
	#

	#print_sanity_check(Flist,"Flist")
	#print_sanity_check(Elist,"Elist")
	#print_sanity_check(E2list,"E2list")
	#print_sanity_check(PAGElist,"PAGElist")


timestamp1=datetime.datetime.now()
duration=timestamp1-timestamp0
print "\n\n"
print "       begin time: "+str(timestamp0)
print "         end time: "+str(timestamp1)
print "         duration: "+str(duration)
print cmdline



########### 
sys.exit(0)


