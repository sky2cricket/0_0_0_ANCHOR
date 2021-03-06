# exec_ingest_book_dlwork.py
# from t0.py
# from
# generic_shell.py
# /gwork/cdeane/vpy/generic_shell.py
#MUST BE EXECUTED FROM $DRUPAL_HOME
#COPY TO /gwork/cdeane/000PY/

# chd nov 5 2016


#discussion by Paul:  https://wiki.lib.utk.edu/display/DI/Ingesting
#discussion by Paul:  https://wiki.lib.utk.edu/display/DI/Book+Object+Ingest+Process

# purpose:  exec ingest with TIMING
#drush -v   --parent=chd2016:cdf  --namespace=cdf  --user=cdeane  --uri=http://localhost ibbp  --type=directory  --content-models=islandora:bookCModel  --strict=0    --scan_target=/gwork/cdeane/CDF2016/cdf_test/0116_000050_000290/  ;

#ibbp no longer exist

#drush -v   --parent=chd2016:cdf  --namespace=cdf  --user=cdeane  --uri=http://localhost ibsp  --type=directory  --content-models=islandora:bookCModel  --strict=0    --scan_target=/gwork/cdeane/CDF2016/cdf_test/0116_000050_000290/  ;

#drush -v   --user=cdeane  --uri=http://localhost islandora_batch_ingest ;

#source_dir = /gwork/cdeane/CDF2016/cdf_test/0116_000050_000290/ 


#commandline 
#           argv[0]   argv[1]                                               argv[2] 
# python    t0.py     source_dir
# python    t0.py     /gwork/cdeane/CDF2016/cdf_test/0116_000050_000290/    LIVE

#python     /gwork/cdeane/000PY/t0.py  /gwork/cdeane/CDF2016/cdf_test/0116_000050_000290/
#python     /gwork/cdeane/000PY/exec_ingest_book_dlwork.py /gwork/cdeane/CDF2016/cdf_test/0116_000050_000290/


##################################MAIN############################
import sys, os
import datetime #for datetime
timestamp0=datetime.datetime.now()

pgm           = sys.argv[0] #name of pgm
if (len(sys.argv)<2):
        print "usage: python "+pgm+" source_dir " 
        sys.exit(0)
        #
        #
source_dir   = sys.argv[1] #name of input dir
live_exec    = "NOT_LIVE"
if (len(sys.argv)>2):
	live_exec = sys.argv[2]
	#
	#
print "len(sys.argv)="+str(len(sys.argv))



#collpid      = sys.argv[2] #collection pid



if (os.path.isdir(source_dir) == False):
        print "source_dir: no such directory: "+source_dir
        print "usage: python "+pgm+" source_dir "
        sys.exit(0)
        #
        #

Prefix         = " drush -v  --user=cdeane  --uri=http://localhost ibbp  --type=directory  --strict=0  "
#Prefix         = " drush -v  --user=admin  --uri=http://localhost ibbp  --type=directory  --strict=0  "
ContentModels  = " --content-models=islandora:bookCModel,islandora:sp_large_image_cmodel,islandora:pageCModel    "
ContentModels  = " --content-models=islandora:bookCModel  "
Namespace      = " --parent=chd2016:cdf  --namespace=cdf  "
Target         = " --scan_target="+source_dir  



ingestCommand01 = Prefix + ContentModels + Namespace + Target
ingestCommand02 = " drush -v   --user=cdeane  --uri=http://localhost islandora_batch_ingest "

if (live_exec == "LIVE"):
	print "\nTHIS IS LIVE"
	print "\n"+ingestCommand01+"\n"
	os.system(ingestCommand01)
	print "\n"+ingestCommand02+"\n"
	os.system(ingestCommand02)
else:
	print "\nTHIS IS NOT LIVE -- REVIEW YOUR COMMANDS"
	print "\ningestCommand01:\n"+ingestCommand01 +"\n"
	print "ingestCommand02:\n"+ingestCommand02 +"\n"

	print "\n----------What is in your ingest target directory?\n"
	ls_source_dir= "ls "+source_dir +"/* | more "
	print ls_source_dir
	os.system(ls_source_dir)


	print "\n----------ALSO, check your directory PATH for drush! "
	print "hostname"
	os.system("hostname")
	print "pwd "
	os.system("pwd")
	print "----------on DLWORK should be: /vhosts/dlwork/web/dev"
	print "----------on DIGITAL should be: /vhosts/digital/web/collections\n"
	print "\n THIS EXEC IS FOR DLWORK ONLY."
	#
	#


cmdline="\npython"
for item in sys.argv:
        s0=item
        cmdline = cmdline +" "+s0
        #
        #




timestamp1=datetime.datetime.now()
duration=timestamp1-timestamp0
print "\n\n"
print "       begin time: "+str(timestamp0)
print "         end time: "+str(timestamp1)
print "         duration: "+str(duration)
print "\n"+cmdline
