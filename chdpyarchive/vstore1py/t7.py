#location Feb 10 2010
#/home/cdeane/public_html/
# vhosts_bk_cdeane/public_html/vvProcess/py_from_store1_vvProcess/t7.py
#print 'usage: python d06.py input_dir output_dir'
#>>python d06.py 080201/03/txt r1
import os, sys
print ">> python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2]+"\n\n"

ddir='/area2/volvoices2008/vvImport/'+sys.argv[1]
edir= ddir+'/'+sys.argv[2] ##force location of output_dir

print 'os.path.isdir('+ddir+')='+str(os.path.isdir(ddir))
print 'os.path.isdir('+edir+')='+str(os.path.isdir(edir))
if (os.path.isdir(edir) == False) :
	os.mkdir(edir,0777)
	
	
	#end if

d= os.listdir(ddir) #get list of files in directory named ddir
#print d             #sanity check 
LEN = len(d)	     #how many files in d
print "\nLEN ="+str(LEN)
i=0;
s1="<mods:subject>"
s2="<mods:topic>Tennessee History</mods:topic>"
s3="</mods:subject>"
s4=s3+s1+s2+s3
print "\ns4="+s4

while(i<LEN):
	if (os.path.isfile(fname)):
		fname = ddir+'/'+d[i]
		wname = edir+'/'+d[i]
		print "fname: "+fname +"\nwname: "+wname+"\n"
		
		
		#end if (os.path.isfile(fname))


i=i+1
#end while


print LEN +" Replacement files are writen in "+edir+ "\n"
print ">> python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2]+"\n\n"
