#step_92.py
# usage: python step_92.py base_file_name
# example of base file name:  0014_000063_000203
# first 18 chars of a vv filename
# purpose: send refugees from 080416 to 080418
# This is a custom program written for these custom directories.
# Easily modified to a generic version, but this one is custom.

#ddir='/area2/volvoices2008/vvImport/'+sys.argv[1]
 
# 080416/03 and 080418/03/ both contain subdirectories
#    JPEG/
#    minithumbs/
#    orig_tei.xml_files/
#    Recieve0/
#    thumbs/
#    tif/
#    txt/
#    xml/
#    xml_workbook/

import os, sys
commandline = "python"
Alen=len(sys.argv)
if (Alen< 2):
	print "usage python "+sys.argv[0]+" base_file_name \n"
	sys.exit(0)
	#
	#end if
i=0
while (i<Alen):
	commandline += " "+sys.argv[i]
	i+=1
	#
	#end while

commandline += "\n"
print commandline

#inndir = '/area2/volvoices2008/vvImport/080416/03'
#outdir = '/area2/volvoices2008/vvImport/080418/03'
####TEST
inndir = '/area2/volvoices2008/vvImport/080444_chd_test/03'
outdir = '/area2/volvoices2008/vvImport/080445_chd_test/03'
 
dJPEG 		= inndir +'/JPEG/'
dmini	 	= inndir +'/minithumbs/'
dotei		= inndir +'/orig_tei.xml_files/'
dReci		= inndir +'/Receive0/'
dthum		= inndir +'/thumbs/'
dtiff		= inndir +'/tif/'
dtxtf		= inndir +'/txt/'
dxmlf 		= inndir +'/xml/'
dxmlw		= inndir +'/xml_workbook/'

eJPEG 		= outdir +'/JPEG/'
emini	 	= outdir +'/minithumbs/'
eotei		= outdir +'/orig_tei.xml_files/'
eReci		= outdir +'/Receive0/'
ethum		= outdir +'/thumbs/'
etiff		= outdir +'/tif/'
etxtf		= outdir +'/txt/'
exmlf		= outdir +'/xml/'
exmlw		= outdir +'/xml_workbook/'

error_count=0
base=sys.argv[1]
Ab = base.split("_")

if (len(Ab)<3 or len(Ab[0])!=4 or len(Ab[1])!=6 or len(Ab[2])!=6 or len(sys.argv[1])!=18):
	error_count+=1
	#
	#

if(    Ab[0].isdigit()==False 
    or Ab[1].isdigit()==False
    or Ab[2].isdigit()==False  ):
	error_count+=1
	#
	#



print base +"\n"

print "len(sys.argv[1])="+str(len(sys.argv[1]))

if (error_count>0 ):
	print "The base entered is: "+base+"\n"
	print "It  should  be like: 0014_000016_000203\n"
	sys.exit()
	#
	#end if



#use something like
#step_10/readbyfile_replace.py:  mv_command = 'mv '+wname+' '+fname
#step_10/readbyfile_replace.py:  os.system(mv_command)

m1 = 'mv '+dJPEG+sys.argv[1]+"* "+eJPEG
m2 = 'mv '+dmini+sys.argv[1]+"* "+emini
m3 = 'mv '+dotei+sys.argv[1]+"* "+eotei
m4 = 'mv '+dReci+sys.argv[1]+"* "+eReci
m5 = 'mv '+dthum+sys.argv[1]+"* "+ethum
m6 = 'mv '+dtiff+sys.argv[1]+"* "+etiff
m7 = 'mv '+dtxtf+sys.argv[1]+"* "+etxtf
m8 = 'mv '+dxmlf+sys.argv[1]+"* "+exmlf
m9 = 'mv '+dxmlw+sys.argv[1]+"* "+exmlw

if (1==2):
	os.system(m1)
	os.system(m2)
	os.system(m3)
	os.system(m4)
	os.system(m5)
	os.system(m6)
	os.system(m7)
	os.system(m8)
	os.system(m9)
	#
	#end if



print m1+"\n\n"+m2+"\n\n"+m3+"\n\n"+m4+"\n\n"+m5+"\n\n"
print m6+"\n\n"+m7+"\n\n"+m8+"\n\n"+m9+"\n\n"
print commandline
