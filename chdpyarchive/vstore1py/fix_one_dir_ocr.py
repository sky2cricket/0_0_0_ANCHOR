print 'fix_one_dir_ocr.py: open dir, read each file, do regexp stuff, write new file to dir/replace'
print 'usage: python fix_one_dir_ocr.py in_directory_name out_directory_name'
# >>> python fix_one_dir_ocr.py bad_ocr replace
#assumes you have subdirectory replace, does not check dir existence yet
#the most difficult part of python for me is you have to tab over for two lines at end of block
#see comments #end if, #end while
#sort of like a makefile

#out of range character replaced by single whitespace character

#from: Store1/area2/volvoices2008/vvImport/071215_chd_test/pytest
#orig file is named: fix_one_dir.py
#this file is named: fix_one_dir_ocr.py

import os, sys, codecs
dname=sys.argv[1]
gname=sys.argv[1]+"/"+sys.argv[2];
#print 'argv[0]='+sys.argv[0]+ '    argv[1]='+sys.argv[1]+'     argv[2]='+sys.argv[2]+'\n\n'
#print 'gname='+gname+'\n\n'

d= os.listdir(dname) #get list of files in directory named dname
print d             #sanity check
#print 'd[0]='+d[0] # more sanity checks
#print 'd[1]='+d[1]
#print 'd[2]='+d[2]
#print 'd[3]='+d[3]
LEN = len(d)
print LEN
i=0;
while(i<LEN):
	fname = dname+'/'+d[i]
	if (os.path.isfile(fname)):
		rname = gname+'/'+d[i]
		sys.stdout = open(rname,'w') #redirect sys.stdout to rname
		F=codecs.open(fname,encoding='latin-1')
		F.seek(0);
		for line in F:
                	t=repr(line)
                	u=t.replace('\\x','&#x00',100)
                	w=u.replace('\\u','&#x',100)
                	x=w
                	x=x.replace('u','',1)
                	x=x.replace('\\r\\n','',1)
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
				z=' ';#replace out-of-range-char with single whitespace
				
				
				#end else
                	print z
			
			
			#end for

		F.close()
		
		
		#end if 
	i=i+1
	
	
	#end while	
	
#print '\n\n the end\n\n'
