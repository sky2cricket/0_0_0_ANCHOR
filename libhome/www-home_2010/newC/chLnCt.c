/*chLnCt.c - count chars per line */
/* //if(A=="¸")break; //if(A=="À")break; */

#include <stdio.h>
#include <stdlib.h>
#define clearbuff for(i=0;i<600;i++)buff[i]="\0";

FILE *infile, *outfile;

int main(int argc, char *argv[]) {

char *A;
int   a;
char buff[600];


int N; /* char in line */
int i,j,k;

A="a";/*init*/
a=(int)*A;
/*printf("a=%d\n",a);*/

infile =fopen("../smallTest.txt","r");
outfile=fopen("smallTestCount.txt","w");

i=0;j=0;k=0;N=0;
while(j<48) {
i=0;N=0;
  while(buff[i++]=getc(infile)) {N++;}
  /*N=fread(buff,600,1,infile);*/

  fprintf(outfile,"\nline no: %d\tNchars: %d\tlastcharC: %c\tlastcharI: %d",i,N,buff[N-1],buff[N-1]);
  printf("\nline no: %d\tNchars: %d\tlastcharC: %c\tlastcharI: %d",i,N,buff[N-1],buff[N-1]);
  j++;
   
}
fprintf(outfile,"\nNumber of Lines: %d",j);
fclose(infile);
fclose(outfile);
}/*end main*/


  







