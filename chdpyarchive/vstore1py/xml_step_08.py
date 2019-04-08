#print 'usage: python xml_step_08.py input_batch_dir output_dir 00 01 02'
#print 'usage: python xml_step_08.py 080812 r2 00 01 02'

#read input from set of directories, write output file

#test 080303 xml r2  01  01_music 02  03  04 
import os, sys
#xml_list for print
#vv_status, project, full_path_directory_name, full_path_file_name, file_name, file_base, file_type, file_sr, num_constituents
#

vv_status = "st_"+sys.argv[1]
project = "volvoices"
file_type = "xml"
#print vv_status+","+project+","+file_type

nargs=len(sys.argv)
jj=3
command_line = ">>python "+sys.argv[0]+" "+sys.argv[1]+" "+sys.argv[2] +" "
while (jj<nargs):
	command_line = command_line + sys.argv[jj] +" "
	jj=jj+1
	#
	#	
command_line = command_line 
print command_line
top ='/area2/volvoices2008/vvImport/'
s0 = "FILENAME: C:\Scan"
s1 = "FILENAME: C:\Reworked"

j=3

edir= "./"+sys.argv[2]+"_"+file_type ##force location of output_dir
#print 'os.path.isdir('+edir+')='+str(os.path.isdir(edir))
if (os.path.isdir(edir) == False) :
	os.mkdir(edir,0777)
	#
	# end if
wname = edir+"/s8_"+file_type+"_"+sys.argv[1]+".txt"
print "output going to: "+wname+"\n"
W=open(wname,'w')
while (j<nargs):
	ddir= top+sys.argv[1]+'/'+sys.argv[j]+'/xml'
	shortdir = sys.argv[1]+'/'+sys.argv[j]+'/xml'
	#print 'os.path.isdir('+ddir+')='+str(os.path.isdir(ddir))
	d= os.listdir(ddir) #get list of files in directory named ddir
	#print d             #sanity check 
	LEN = len(d)	     #how many file objects in d
	file_count=0	     #count filetype=file file objects in d
	i=0;
	while(i<LEN):
		fname = ddir+'/'+d[i]
		shortfname = shortdir +'/'+d[i]
		if ((os.path.isfile(fname)) and (fname.endswith("xml"))):
			abname=d[i].split("_")
			basename= abname[0]+"_"+abname[1]+"_"+abname[2]
			file_count+=1
			#print "fname: "+fname +"\n"
			F=open(fname,'r')
			F.seek(0)
			a = F.read()
			sr = "undef"
			if (a.find(s0) != -1):
				sr="Scan"
			elif(a.find(s1) != -1):
				sr="Reworked"
			else:
				sr = "Undef"
				#
				#end if
			idx = a.index("NUMBER_OF_CONSTITUENT_FILES:") + 29
			idx2 = a.index(":",idx)
			k=idx+1
			N=a[idx]
			while(k<idx2):
				N=N+a[k]
				k=k+1
				#
				#end while 
			#print shortfname +" : "+sr+ ": "+N+" : "+basename#+"\n"
			xml_list = vv_status+","+project+","+shortdir+","+shortfname+","+d[i]+","+basename+","+file_type+","+sr+","+N+"\n"
			#print xml_list
			W.write(xml_list)
			F.close()
			#
			#end if os.path.file
		i=i+1
		#
		#end while (i<LEN)
	print str(file_count) +"\tfiles in "+ddir#+ "\n"
	j=j+1
	#
	# end while (j<nargs)

W.close()
print "\n"+ command_line
