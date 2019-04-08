# from tei2txt.py
# step_01.py
#usage: python tei2txt.py input_dir output_dir
#purpose - strip out illegal chars from xml files
#write output to directory below input directory

#These characters must be replaced with hexadecimal html encoding.
#        & -- ampersand ----------->> &#x0026;
#        ' -- apostrophe ---------->> &#x0027;
#        " -- double quote -------->> &#x0022;
#        < -- less than ----------->> &#x003C;
#        > -- greater than -------->> &#x003E;


import os, sys
if (len(sys.argv) < 3):
        print "usage: python "+sys.argv[0]+"inputdir outputdir\n\n"
        exit(0)
        #
        # end if

#replacements
s0 = "&"
t0 = "&#x0026;"
s1 = "'"
t1 = "&#x0027;"
s2 = '"'
t2 = "&#x0022;"
s3 = "<"
t3 = "&#x003C;"
s4 = ">"
t4 = "&#x003E;"



#ddir= sys.argv[1] # test dir
ddir='/area2/volvoices2008/vvImport/'+sys.argv[1]
edir= ddir+'/'+sys.argv[2] ##force location of output_dir
#print 'os.path.isdir('+ddir+')='+str(os.path.isdir(ddir))
#print 'os.path.isdir('+edir+')='+str(os.path.isdir(edir))
if (os.path.isdir(edir) == False) :
        os.mkdir(edir,0777)
        #
        #end if
d=os.listdir(ddir) #get list of files in directory named ddir
LENd = len(d)
i=0
while(i<LENd):
        Dname = ddir+'/'+d[i]
	Ename = edir+'/'+d[i]
        if (os.path.isfile(Dname)):
                D=open(Dname,'r')
                Dall = D.read()
                D.close()
		E=open(Ename,'w')
		Dall = Dall.replace("\r","")
		Dall = Dall.replace("<mods:titleInfo","BBBBB<mods:titleInfo")
		BUFF = Dall.split("BBBBB")
		E.write(BUFF[0])
		Dall = BUFF[1]
		Dall = Dall.replace("> ",">")
		Dall = Dall.replace("<mods:","AAAAA<mods:")
		Dall = Dall.replace("</mods:","AAAAA</mods:")
		t = Dall.split("AAAAA")
		LENt = len(t)
		j=0
		line_count=0
		while(j<LENt):
			k=0
			igt = t[j].find(">")
			igt2 = igt+1
			ilen = len(t[j])
			ilen2 = ilen-1
			idiff = ilen - igt
			#E.write("\nilen="+str(ilen)+" igt="+str(igt)+" idiff="+str(idiff)+"\n")
			if ( idiff > 2):
				#E.write(t[j])
				e1 = t[j][0:igt2]
				e2 = t[j][igt2:ilen]
				e2 = e2.replace(s0,t0)
				e2 = e2.replace(s1,t1)
				e2 = e2.replace(s2,t2)
				e2 = e2.replace(s3,t3)
				e2 = e2.replace(s4,t4)
				#t[j]="\n TAG: "+e1+"\nDATA: "+e2
				t[j]=e1+e2
				#
				#
			E.write(t[j])
			line_count+=1
			j+=1
			#
			#
		E.close()
		print Ename +'\nline_count='+str(line_count)
		#
		#end if
	i+=1
	#	
	#end while

print "python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2]
			
		



