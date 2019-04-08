#print 'from fix_one_dir.py: open dir, read each file, do regexp stuff, write new file to dir/replace'
#print 'usage: python step_06.py in_directory_name out_directory_name'
#assumes you have subdirectory replace, does not check dir existence yet
#the most difficult part of python for me is you have to tab over for two lines at end of block
#see comments #end if, #end while
#sort of like a makefile

#from: Store1/area2/volvoices2008/vvImport/071215_chd_test/pytest/fix_one_dir.py
#this file is named: step_06.py

import os, sys, codecs


if (len(sys.argv) < 3):
	print "usage: python "+sys.argv[0]+" inputdir outputdir\n"
	sys.exit()
	#
	# end if


dname='/area2/volvoices2008/vvImport/'+sys.argv[1]
gname= dname+"/"+sys.argv[2];
#print 'argv[0]='+sys.argv[0]+ '    argv[1]='+sys.argv[1]+'     argv[2]='+sys.argv[2]+'\n\n'
#print 'gname='+gname+'\n\n'

print 'os.path.isdir('+dname+')='+str(os.path.isdir(dname))
print 'os.path.isdir('+gname+')='+str(os.path.isdir(gname))
if (os.path.isdir(gname) == False) :
	os.mkdir(gname,0777)
	
	
	#end if

d= os.listdir(dname) #get list of files in directory named dname
#print d             #sanity check
#print 'd[0]='+d[0] # more sanity checks
#print 'd[1]='+d[1]
#print 'd[2]='+d[2]
#print 'd[3]='+d[3]
LEN = len(d)
print LEN

t0 = "\r"
t1 = ""
i=0;
while(i<LEN):
        fname = dname+'/'+d[i]
        #if (os.path.isfile(fname) and fname.find('.xml')> 0):
        if (os.path.isfile(fname) ):
                rname = gname+'/'+d[i]
                sys.stdout = open(rname,'w') #redirect sys.stdout to rname
		FF = open(fname)
		FFall = FF.read()
		findex = FFall.find("<mods:titleInfo")
		findex2 = findex-2
		BUFF = FFall[0:findex2]
		BUFF = BUFF.replace(t0,t1)
		print BUFF
		FF.close()
                F=codecs.open(fname,encoding='latin-1')
                F.seek(findex)
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
                                while (yy_count < my_count ) :
                                        my_index=r.index('&#x',jindex,my_len)
                                        z=z+r[jindex:my_index]
                                        my_index2 = my_index+7
                                        my_text = r[my_index:my_index2]+';'
                                        z=z+my_text
                                        jindex=my_index2
                                        yy_count=yy_count+1
                                        if (yy_count == my_count ) :
                                                z=z+r[jindex:my_len]


                                                #end if


                                #end while


                                #end else
			z = z.replace(';;',';')
                        print z


                        #end for

                F.close()


                #end if
        i=i+1


        #end while

#print 'python '+sys.argv[0]+ ' '+ sys.argv[1]+' '+sys.argv[2]+'\n\n the end\n\n'

