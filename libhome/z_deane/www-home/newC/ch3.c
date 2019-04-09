/* ch2.c */
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


FILE *infile, *outfile;


int main (int argc, char* argv[]) {
int i;
int NL; /*num lines*/
int NC; /*num char one line*/
char *buff;
int buffsum[600];

buff=(char *)malloc(600*sizeof(char));

for(i=0;i<600;i++) {
buffsum[i]=0;
}
infile =fopen(argv[1],"r");
outfile=fopen(argv[2],"w");

NL=0;NC=1;
while( NC > 0) {

fgets(buff,600,infile);
	for(i=0;i<600;i++) {
	if(!buff[i])break;
	}
NC=i;
buffsum[NC]++;
  /*
  fprintf(outfile,"\nline no: %d\tNC: %d\tlastcharC: %c\tlastcharI: %d",
	NL,NC,buff[NC],buff[NC]);
  
  fprintf(outfile,"\n%s",buff);
  printf("\nline no: %d\tNchars: %d\tlastcharC: %c\tlastcharI: %d",
	NL,NC,buff[NC],buff[NC]);
  */

  NL++;
free(buff);
buff=(char *)malloc(600*sizeof(char));
/*if (NL>48) break;*/


}
for(i=0;i<600;i++) {
 if (buffsum[i]>0) {
 fprintf(outfile,"\n buffsum[%d]=%d",i,buffsum[i]);
 }
 }

fclose(infile);
fclose(outfile);

}/*end main*/


