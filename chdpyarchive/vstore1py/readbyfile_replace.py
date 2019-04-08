#print 'usage: python readbyfile_replace.py input_dir orig_str replace_str'
#usage >>python readbyfile_replace.py 080201/03/txt aaa bbb

#this does regular expression replace of s_original by s_replace
#overwrites original files!

#special case replace carriage_return with white_space
#usage >>python readbyfile_replace.py 080812/04/Replace0 carriage_return white_space

import os, sys
print ">> python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2]+" "+sys.argv[3]

#previous: ddir='/area2/volvoices2008/vvImport/'+sys.argv[1]
#use full path dir name
ddir = sys.argv[1]

print 'os.path.isdir('+ddir+')='+str(os.path.isdir(ddir))

d= os.listdir(ddir) #get list of files in directory named ddir
#print d             #sanity check 
LEN = len(d)	     #how many file objects in d
file_count=0	     #count filetype=file file objects in d
i=0
s_original = sys.argv[2]
if (sys.argv[2]=='carriage_return'):
	s_original="\r"
	#
	#end if
s_replace  = sys.argv[3]
if (s_replace=='white_space'):
	s_replace = ""
	#
	#end if

print "sys.argv[2]="+sys.argv[2]+"\ts_original="+s_original
print "sys.argv[3]="+sys.argv[3]+"\ts_replace="+s_replace


while(i<LEN):
	fname = ddir+'/'+d[i]
	wname = ddir+'/temp'
	mv_command = 'mv '+wname+' '+fname
	if (os.path.isfile(fname)):
		file_count+=1
		#print "fname: "+fname +"\nwname: "+wname+"\n"
		F=open(fname,'r')
		W=open(wname,'w')
		all_input = F.read()
		all_input = all_input.replace(s_original,s_replace)
		W.write(all_input)
		F.close()
		W.close()
		#
		#end if(os.path.isfile(fname))
	os.system(mv_command)
	i+=1
	#
	#end while


print str(file_count) +" Replacement files \n"
print ">> python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2]+" "+sys.argv[3]+"\n\n"
