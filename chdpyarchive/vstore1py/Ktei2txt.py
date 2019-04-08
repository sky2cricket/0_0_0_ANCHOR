#Ktei2txt.py
#step_90_tei2txt
#usage: python tei2txt.py input_dir output_dir
#purpose - reformat tei into something Ntei2txt.py can parse
#input dir txt
#	text/0039_000050_000260_0000.txt
#output dir 
#	text/r1/0039_000050_000260_0001.txt
#	text/r1/0039_000050_000260_0002.txt
#       ...
#	text/r1/0039_000050_000260_000N.txt
#	where N is NUMBER_OF_CONSTITUENTS in mods record
#
#format for pb tag  <pb ref="0012_000053_000200_0001" seq="01" n="1"/>


import os, sys
if (len(sys.argv) < 3):
	print "usage: python "+sys.argv[0]+"inputdir outputdir\n\n"
	sys.exit(0)
	#
	# end if
command_line = ">> python "
LENargv = len(sys.argv)
k=0
while (k<LENargv):
	command_line = command_line +" "+sys.argv[k]
	k+=1
	#
	#

LENargv2 = len(sys.argv[2])
spacer= " "
iii=0
while(iii<LENargv2):
	spacer += " "
	iii+=1
	#
	#
ddir= sys.argv[1] # test dir

#ddir='/area2/volvoices2008/vvImport/'+sys.argv[1]
ddir = ddir.replace("/","")
edir= ddir+'/'+sys.argv[2] ##force location of output_dir
#print 'os.path.isdir('+ddir+')='+str(os.path.isdir(ddir))
#print 'os.path.isdir('+edir+')='+str(os.path.isdir(edir))
if (os.path.isdir(edir) == False) :
        os.mkdir(edir,0777)
	#
        #end if
d=os.listdir(ddir) #get list of files in directory named ddir
LENd = len(d)
output_file_count = 0
input_file_count = 0
i=0
while(i<LENd):
	Dname = ddir+'/'+d[i]
	Fname = edir+'/'+d[i]
	Ebase = edir+'/'+d[i][0:19]
	if (os.path.isfile(Dname)):
		print "\n input file: "+spacer+Dname 
		input_file_count +=1
		D=open(Dname,'r')
		Dall = D.read()
		D.close()
		index_tei_end  = Dall.find("</TEI.2>")
		if (index_tei_end == -1):
			print "no end TEI.2 tag for "+DNAME
			sys.exit()
			#
			#

		########get tei header
		index_tei_hdr_end = Dall.find("<div1");
		tei_header = Dall[0:index_tei_hdr_end]
		#print "tei_header[0:100]:\n"
		#print tei_header[0:100]+"\n"
		

		###########reset Dall to cut out tei header
		Dall = Dall[index_tei_hdr_end:index_tei_end]
		#print "\nDall[0:200]:\n"+Dall[0:200]+"\n"
	
	
		######get the FIRST div_type_tag 
		index_divtt_0 = 0
		index_divtt_1 = Dall.find("<",4)
		div_type_tag  = Dall[index_divtt_0:index_divtt_1]
		#print "\ndiv_type_tag="+div_type_tag+"\n"

		######reset Dall to cut out the first div_type_tag
		Dall = Dall[index_divtt_1:index_tei_end]
		#print Dall[0:200]

		######replace (if exist) second div_type_tag with pb tag
		Dall = Dall.replace(div_type_tag,'<pb div1_replace/>')
		#F = open(Fname,"w")
		#F.write(Dall)
		#F.close()

		######find all the pb tags and put into array
		Dall = Dall.replace("<pb","BBBBBB<pb")
		pbArray = Dall.split("BBBBBB")


		########count pb tags
		npb = len(pbArray)
		#print "\nnumber of <pb tags = "+str(npb)

		k=0
		j=1 #this is the Nsnip number for the Ename_suffix - never 0
		while (k < npb):
			pbArrayTemp = pbArray[k]
			#print "len(pbArrayTemp = "+str(len(pbArrayTemp))+"\n"
			if (len(pbArrayTemp)>20):
				if (pbArrayTemp.find("div1_replace") ):
					d0 = 'n="['+str(k)+'] div1_replace"'
					pbArrayTemp=pbArrayTemp.replace("div1_replace",d0)
					#
					#end if
				index_endtag = pbArrayTemp.find(">")+1
				#print "\npbArray["+str(k)+"]: \n"+pbArrayTemp+"\n"
				#print "n=[\""+str(k)+"\"]\n"
				#print "end n="+str(k)+"----------------\n"
				#####strip off <pb tag at beginning
				index_end_pb_tag=pbArrayTemp.find(">",4)+1
				#####strip off </div1 tag at end
				if(pbArrayTemp.find("</div1")>-1):
					index_end_pbArray = pbArrayTemp.find("</div1")
				else:
					index_end_pbArray = len(pbArrayTemp)
					#
					#end if-else
				pbArrayOut=pbArrayTemp[index_end_pb_tag:index_end_pbArray]
				#print "\n========\n"+pbArrayOut+"\n========\n"
				#write pbArrayOut to txtfile Ebase +"000"+figure out the number
				
				#####parse out <pb tag
				Nsnip = str(j) #in case you don't fine pb tag
				################i.e. 0012_0000
				if (pbArrayTemp.find("<pb")):
					index_begin_pb = pbArrayTemp.find("<pb")
					index_end_pb   = pbArrayTemp.find(">")+1
					pb_tag = pbArrayTemp[index_begin_pb:index_end_pb]
					#####parse out the number from the pb 
					print "\npb_tag: "+pb_tag
					Nsnip = pb_tag.replace("[^0-9]","")
					print "Nsnip= "+Nsnip
					#
					#
				#####print to output
				Ename_suffix = "000"+Nsnip+".txt"
				if (len(Nsnip)>1):
					Ename_suffix = "00"+Nsnip+".txt"
					#
					#end if
				Ename = Ebase+Ename_suffix
				print "output file: "+Ename#+"\n"
				E = open(Ename,"w")
				E.write(pbArrayOut)
				E.close()
				j+=1
				output_file_count +=1
			else:
				dummy=1
				#print "DO NOT PROCESS pbArray["+str(k)+"]\n"+pbArrayTemp+"\n"
				#
				#end if-else
			k += 1
			#
			#end while




		#print "\nEND "+Dname ##+"\n" + Ebase
		#textbuff = tei_header +divBuff1 + divBuff2
		#F = open(Fname,'w')
		#F.write(textbuff)
		#F.close()
		#
		#end if
	i += 1
	#
	#end while
print "\n number of input files:  "+str(input_file_count)
print "\n number of output files: "+str(output_file_count)

print "\n"+command_line

