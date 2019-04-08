#dlwork: /home/cdeane/extra/fromroot

#pwd: /home/cdeane/pubact/COMMONS/Islandora/HELPFILES/150302chd/TDH/py/a1
#t0.py
#chd 120727
#
#purpose:
#    convert 
#http://www.imagemagick.org/script/convert.php
#$ convert rose.jpg -resize 50% rose.png
#  convert rose.tif -resize 3000x3000 rose.jpg

#command line:
#python pgm   source_dir target_dir
#python t0.py TIFFS 	 JPGS
#
#python convert_t0.py /d1/area2/tdh/tiffs/jm  jpegs/jm

import sys, os

pgm	      = sys.argv[0] #name of pgm
if (len(sys.argv)<3):
	print "usage: python "+pgm+" source_dir target_dir "
	sys.exit(0)
	#
	#
source_dir   = sys.argv[1] #name of input dir 
target_dir   = sys.argv[2] #name of output dir  ###target_pass

if (os.path.isdir(source_dir) == False) :
	print "source_dir: no such directory: "+source_dir
	print "usage: python "+pgm+" source_dir target_dir "
	sys.exit(0)
	#
	#
if (os.path.isdir(target_dir) == False) :
	print "target_dir: no such directory: "+target_dir
	print "usage: python "+pgm+" source_dir target_dir "
	sys.exit(0)
	#
	#

cmdline="python"
for item in sys.argv:
	s=item
	cmdline = cmdline +" "+item
	#
	#

dList00 = os.listdir(source_dir) #input files 
print "files in "+source_dir+": "+str(len(dList00))

for item in dList00:
	tname=item #name of tif
	i=tname.find(".")
	jname=tname[0:i]+'.jpg'
	
	#jname = tname.replace('tif','jpg') #name of jpg
	#jname = tname.replace('TIF','jpg')
	tif = source_dir+"/" +tname
	jpg = target_dir+"/" +jname
	#revise per bds: cmd = "convert "+tif+ " -resize 3000x3000 "+jpg
	cmd = "convert "+tif+ " -resize 1000x1000 "+jpg
	os.system(cmd)
	#
	#

dList01 = os.listdir(target_dir) #output files 
print "files in "+source_dir+": "+str(len(dList00))
print "files in "+target_dir+": "+str(len(dList01))
print cmdline
print "fini\n\n"
