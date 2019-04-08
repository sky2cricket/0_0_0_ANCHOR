# from tei2txt.py
# step_01.py
#usage: python tei2txt.py input_dir output_dir
#purpose - strip out illegal chars from ocr and txt files
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


#usage: python tei2txt.py input_dir output_dir

#ddir= sys.argv[1] # test dir
ddir='/area2/volvoices2008/vvImport/'+sys.argv[1]
edir= ddir+'/'+sys.argv[2] ##force location of output_dir
#print 'os.path.isdir('+ddir+')='+str(os.path.isdir(ddir))
#print 'os.path.isdir('+edir+')='+str(os.path.isdir(edir))

if ( ddir.find('ocr') == -1 and ddir.find('txt') == -1 ):
	print "\n\nYOU CAN ONLY USE THIS FOR OCR AND TXT FILES!\n"
	print ">> python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2]+"\n\n"
	print "EXIT"
	ddir = ""
	edir = ""	
	sys.exit()
	#
	#end if




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
		Dall = Dall.replace(s0,t0)
		Dall = Dall.replace(s1,t1)
		Dall = Dall.replace(s2,t2)
		Dall = Dall.replace(s3,t3)
		Dall = Dall.replace(s4,t4)
		E.write(Dall)
		E.close()
		print Ename 
		#
		#end if
	i+=1
	#	
	#end while

print "python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2]
			
		



