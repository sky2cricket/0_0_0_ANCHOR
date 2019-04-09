/* doUtility.c */
/*

Code by Cricket Haygood Deane

This program is an example of using a c program to generate a
shell script.  The shell script will run a unix utility.

Here the utility is the unix diff program, but a script for any 
unix utility may be generated using this approach. 



-------------------------------------------------------------------
The diff program functions best on files under the same home area.

To compare files from foreignHome directory to localHome directory:
	1. Make a new directory localHome/diffTest
	2. Import files from foreignHome int localHome/diffTest.

One way to do this is ftp.

Then you run this program from the directory where localHome files are situated.  

But for simplicity print a message as if diff were extremely well-behaved.

message:  diff localHome/public_html/testpage.htm ~foreignHome/public_html/testpage.htm
reality:  diff testpage.htm ~/diffTest/testpage.htm

This program creates a SHELL SCRIPT to run diff and writes a few lines 
on the final output file so that the shell script can use >> director
everywhere.

prompt>dodiff2 local.csh local.txt *htm*
prompt>local.csh 

final output: local.txt

------------------------------------------------------
   usage:  dodiff  cshFile  txtFile  inpat* 
	where cshfile is argv[1]
	      txtfiel is argv[2]
	      inpat is like *.sas pattern

for example:

run this program in localHome/public_html
with command:
prompt> dodiff local.csh local.txt *htm*

where:
char *preprint0="localHome/public_html/";
char *preprint1="~foreignHome/public_html/";
char *precom0="";
char *precom1="../diffTest/";

makes:
printname0 = "localHome/public_html/*htm*"
printname1 = "foreignHome/public/*htm*"
comname0   = "*htm*"
comname1   = "../difftest/*htm*" 

then run csh program: local.csh

*/
#include <stdio.h>
#include <string.h>
int main (int argc, char *argv[]) {

FILE *f1;
FILE *f2;
int i,j;
char *printname0,*printname1,*comname0,*comname1,*outfileTxt;
char *blank="aa";
char *preprint0="localHome/public_html/";
char *preprint1="~foreginHome/public_html/";
char *precom0="";
char *precom1="../diffTest/";
char *dateStr,*dateStr2;

printname0 =(char *)malloc(64*sizeof(char));
printname1 =(char *)malloc(64*sizeof(char));
comname0 =(char *)malloc(64*sizeof(char));
comname1 =(char *)malloc(64*sizeof(char));
outfileTxt=(char *)malloc(64*sizeof(char));
dateStr=(char *)malloc(64*sizeof(char));
dateStr2=(char *)malloc(64*sizeof(char));

strcpy(dateStr,"date >> ");
strcat(dateStr,argv[1]);

strcpy(dateStr2,"date >> ");
strcat(dateStr2,argv[2]);

f2=fopen(argv[1],"w");
fprintf(f2,"#!/bin/sh \n");
fprintf(f2,"#### This is file %s \n####",argv[1]);
fclose(f2);

system (dateStr);

f2=fopen(argv[1],"a");



f1=fopen(argv[2],"w");
fprintf(f1,"#### This is file %s \n####",argv[2]);
fclose(f1);
system (dateStr2);




for (i=3;i<argc;i++) {

strcpy (printname0,blank);
strcpy (printname1,blank);
strcpy (comname0,blank);
strcpy (comname1,blank);

strcpy (outfileTxt,blank);

strcpy(printname0,argv[i]);
strcpy(printname1,preprint1);
strcat(printname1,argv[i]);


strcpy(comname0,precom0);
strcat(comname0,argv[i]);
strcpy(comname1,precom1);
strcat(comname1,argv[i]);

strcpy(outfileTxt,argv[2]);

strcpy(printname0,preprint0);
strcat(printname0,argv[i]);
strcpy(printname1,preprint1);
strcat(printname1,argv[i]);

fprintf(f2,"\necho  \"-----------------------------------\" >> %s\n",outfileTxt);
fprintf(f2,"\necho  \"-----------------------------------\" >> %s\n",outfileTxt);
fprintf(f2,"\necho  \"-----------------------------------\" >> %s\n",outfileTxt);
fprintf(f2,"\necho  \"-------diff %s %s \" >> %s \n",printname0,printname1,outfileTxt);
fprintf(f2,"\necho  \"-------output for diff below\"  >> %s\n", outfileTxt);
fprintf(f2,"\ndiff  %s %s >> %s;\n",comname0,comname1,outfileTxt);

}/*for*/

fprintf(f2,"\necho  \"-----------------------------------\" >> %s\n",outfileTxt);
fprintf(f2,"\necho  \"-----------------------------------\" >> %s\n",outfileTxt);
fprintf(f2,"\necho  \"-----------------------------------\" >> %s\n",outfileTxt);
fclose(f2);
printf("\n end main output written to %s for %s\n",argv[1],argv[2]);
}

