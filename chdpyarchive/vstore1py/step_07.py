#print 'usage: python d06.py input_dir output_dir'
#>>python d06.py 080201/03/txt r1
#test 080107/00/xml2/0015_000066_000205_0000.xml
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
LEN = len(d)	     #how many file objects in d
file_count=0	     #count filetype=file file objects in d
i=0;
t0='<mods:subject authority="lcsh">'
t1='<mods:subject authority="tgm">'
t2='<mods:subject >'
s0="</mods:subject>"
s1="\n<mods:subject>"
s2="\n<mods:topic>Tennessee History</mods:topic>"
s3="\n</mods:subject>"
s4=s0+s1+s2+s3

#print "LEN = "+str(LEN)+"\ns4="+s4+"\n"

while(i<LEN):
	fname = ddir+'/'+d[i]
	wname = edir+'/'+d[i]
	if (os.path.isfile(fname)):
		file_count+=1
		#print "fname: "+fname +"\nwname: "+wname+"\n"
		F=open(fname,'r')
		W=open(wname,'w')
		all_input = F.read()
		if( (all_input.find(t0)==-1) and (all_input.find(t1)==-1) and (all_input.find(t2)==-1) ):
			all_input = all_input.replace(s0,s4)
			
			
			#
		W.write(all_input)
		F.close()
		W.close()
		
		
		#end if(os.path.isfile(fname))
	i=i+1
	
	
	#end while


print str(file_count) +" Replacement files are writen in "+edir+ "\n"
print ">> python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2]+"\n\n"
