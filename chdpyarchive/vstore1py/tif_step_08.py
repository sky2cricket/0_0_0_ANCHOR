#print 'usage: python tif_step_08.py input_batch_dir output_dir 00 01 02'
#print 'usage: python tif_step_08.py 080812 r1 00 01 02'

#read input from set of directories, write output file to output dir

#test 080303 r1 00  01  01_music 02  03  04 
import os, sys
#tif_list for print
#vv_status, project, full_path_directory_name, full_path_file_name, file_name, file_base, file_type

vv_status = "st_"+sys.argv[1]
project = "volvoices"
file_type = "tif"
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

j=3

edir= "./"+sys.argv[2]+"_"+file_type ##force location of output_dir
#print 'os.path.isdir('+edir+')='+str(os.path.isdir(edir))
if (os.path.isdir(edir) == False) :
	os.mkdir(edir,0777)
	#
	# end if
wname = edir+"/s8_"+file_type+"_"+sys.argv[1]+".txt"
print "output going to: "+wname +"\n"
W=open(wname,'w')
while (j<nargs):
	ddir= top+sys.argv[1]+'/'+sys.argv[j]+'/tif'
	#print 'os.path.isdir('+ddir+')='+str(os.path.isdir(ddir))
	shortdir = sys.argv[1]+'/'+sys.argv[j]+'/tif'
	#print 'os.path.isdir('+ddir+')='+str(os.path.isdir(ddir))
	d= os.listdir(ddir) #get list of files in directory named ddir
	#print d             #sanity check 
	LEN = len(d)	     #how many file objects in d
	file_count=0	     #count filetype=file file objects in d
	i=0;
	while(i<LEN):
		fname = ddir+'/'+d[i]
		shortfname = shortdir +'/'+d[i]
		if ((os.path.isfile(fname)) and (fname.endswith('tif'))):
			abname=d[i].split("_")
			basename= abname[0]+"_"+abname[1]+"_"+abname[2]
			#print shortfname + " : "+basename#+"\n"
			file_count+=1
			tif_list = vv_status+","+project+","+shortdir+","+shortfname+","+d[i]+","+basename+","+file_type+"\n"
			W.write(tif_list)
			#
			#end if os.path.file
		i=i+1
		#
		#end while (i<LEN)
	print str(file_count) +"\tfiles in "+ddir
	j=j+1
	#
	# end while (j<nargs)

W.close()
print "\n"+ command_line
