/* LineCheck.c -- use fgets*/
/*
-----------------------------------------------------------------
SYNOPSIS
     #include <stdio.h>

     char *gets(char *s);

     char *fgets(char *s, int n, FILE *stream);

DESCRIPTION
     The gets() function reads characters from the standard input
     stream  (see  intro(3)), stdin, into the array pointed to by
     s, until a newline character is read or an end-of-file  con-
     dition  is  encountered.  The newline character is discarded
     and the string is terminated with a null character.

     The fgets() function reads characters from the  stream  into
     the array pointed to by s, until n-1 characters are read, or
     a newline character is read and  transferred  to  s,  or  an
     end-of-file  condition  is  encountered.  The string is then
     terminated with a null character.
-----------------------------------------------------------------
*/
#include<stdio.h>
#include<stdlib.h>
#include<strings.h>
FILE *infile, *outfile;

int main (int argc, char* argv[]) {
int i;
int NL; /*num lines*/
int NC; /*num char one line*/
int NMAX; /*limit on lines to read*/
char *buff;
int buffsum[600];

buff=(char *)malloc(600*sizeof(char));

for(i=0;i<600;i++) { buffsum[i]=0; }
infile =fopen(argv[1],"r");
outfile=fopen(argv[2],"w");
NMAX=getNum(argv[3]);
printf("\n NMAX=%d\n",NMAX);
fprintf(outfile,"\nNMAX=%d",NMAX);

NL=0;NC=1;
while( NC > 0) {
fgets(buff,600,infile);
for(i=0;i<600;i++) { if(!buff[i])break; }
NC=i;
buffsum[NC]++;
NL++; 
if (NL==NMAX) break;
free(buff);
buff=(char *)malloc(600*sizeof(char));
}

for(i=0;i<600;i++) {
 if (buffsum[i]>0) { fprintf(outfile,"\n buffsum[%d]=%d",i,buffsum[i]); }
 }

fclose(infile);
fclose(outfile);
}/*end main*/

int getNum(char *str) {

char *alphanum="0123456789";

int i,j,k,ret;
ret=0;
k=strlen(str)-1;
j=1;
while(k> -1) {
 for (i=0;i<10;i++) {
 if (str[k] == alphanum[i]) {
   ret=ret + (j*i);
   break;
   }
 } 
 j=j*10;
 k--;
}
return(ret);
}/*end getNum(char *str) */

