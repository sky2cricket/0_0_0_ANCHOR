#print 'usage: python d05.py input_dir output_dir'
import os, sys, codecs
message = ' -- number of out of range characters: '
print ">> python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2]+"\n\n"


#t0 = chr(13) # this was a failure
t0 = "\r"
print t0
print "end"


ddir='/area2/volvoices2008/vvImport/'+sys.argv[1]
edir= ddir+'/'+sys.argv[2] ##force location of output_dir

#print 'os.path.isdir('+ddir+')='+str(os.path.isdir(ddir))
#print 'os.path.isdir('+edir+')='+str(os.path.isdir(edir))
if (os.path.isdir(edir) == False) :
	os.mkdir(edir,0777)
	
	
	#end if

d= os.listdir(ddir) #get list of files in directory named ddir
#print d             #sanity check 
LEN = len(d)	     #how many files in d
global_error=0;
i=0;
dir_count=0
print "\nOnly files with out of range characters are reported.\n"
while(i<LEN):
	fname = ddir+'/'+d[i]
	rname = edir+'/'+d[i]
	#print "fname: "+fname +"\nrname: "+rname+"\n"
	dir_count +=1
	if (os.path.isfile(fname)):
		dir_count -=1
		oor_count=0
		F=codecs.open(fname,encoding='latin-1')
		J = open(rname,'w')
		F.seek(0)  
		for line in F:
                	a=repr(line)
			b=a.replace(t0,'')
                        J.write(b) #print b
			#
			#end for line in F:
		J.close()
		F.close()
		#
		#end if 
	i+=1
	#
	#end while	
file_count = LEN - dir_count 
print "\nChecked "+str(LEN)+" file objects in "+ddir +"\n"
print "Replacement files are writen in "+edir+ "\n"
print ">> python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2]+"\n\n"
