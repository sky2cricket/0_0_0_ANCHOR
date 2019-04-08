#print 'usage: python d05.py input_dir output_dir'
import os, sys, codecs
message = ' -- number of out of range characters: '
#print ">> python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2]+"\n\n"

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
	dir_count +=1
	if (os.path.isfile(fname)):
		dir_count -=1
		oor_count=0
		F=codecs.open(fname,encoding='latin-1')
		F.seek(0)  
		for line in F:
                	a=repr(line)
			b=a
			c=b
			if (a.find("xml")==-1):
				b=a.replace('\\x','&#x00',100)
                		c=b.replace('\\u','&#x',100)
				
				
				#end if
                	my_len_c =len(str(c))
                	oor_count+=str(c).count('&#x',0,my_len_c)
			
			
			#end for line in F:

		F.close()
		if (oor_count > 0) :
			prMsg = sys.argv[1]+'/'+d[i]
			prMsg = prMsg.replace('//','/',100)
			#print sys.argv[1]+'/'+d[i] + message + str(oor_count)
			print prMsg + message + str(oor_count)
			#-------------------------start  code block goes here
                	#sys.stdout = open(rname,'w') #redirect sys.stdout to rname
			J = open(rname,'w')
                	H=codecs.open(fname,encoding='latin-1')
                	H.seek(0);
                	for line in H:
                        	t=repr(line)
				u=t
				w=u
				if (t.find("xml")==-1):
                        		u=t.replace('\\x','&#x00',100)
                        		w=u.replace('\\u','&#x',100)
				else:
					w=w.replace('\\\\','\\',100)
					#print "test: "+w+"\n"
					
					
					#end if
                        	x=w
                        	x=x.replace('u','',1)
                        	#x=x.replace('\\r\\n','',1)
                        	x=x.replace('\\r\\n','\n',1)
                        	x=x.strip("'")
                        	x=x.strip('"')
                        	xLEN = len(x)
                        	r=str(x);
                        	my_len =len(r)
                        	jindex=0
                        	my_index=0
                        	my_count=r.count('&#x',0,my_len)
                        	yy_count=0
                        	z=''
                        	if (my_count == 0) :
                                	z=x
                        	else:
					global_error +=1
					z=' '; # replace out-of-range-char with whitespace
					
					
                                	#end else
                        	J.write(z) #print z
				
				
                        	#end for

                	H.close()
			J.close()
			#-------------------------finish code block goes here
			
			
			#end if
			
		
		#end if 
	i+=1
	
	
	#end while	
file_count = LEN - dir_count 
print "\nChecked "+str(LEN)+" file objects in "+ddir +"\n"
print str(dir_count) + " of these file objects are directories\n"
print str(file_count) + " of these file objects are files\n"
print str(global_error) + " errors found in this directory\n"
print "Replacement files are writen in "+rname+ "\n"
print ">> python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2]+"\n\n"
