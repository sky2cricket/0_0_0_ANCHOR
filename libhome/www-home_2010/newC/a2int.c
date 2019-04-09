/*----------------------------------------------------------------
   program ascii2integer.c 
   written by cricket haygood deane
   returns ascii value of keyboard input characters
   the carriage return=10, tab=9 , backspace (cntl-V,cntl-H)=8
   It takes 2 keyboard characters pressed down at once to do
   most meta-characters such as the backspace.
   The carriage return metacharacter is (cntl-V,cntl-M)
   and backspaces over itself and returns: 
       =13ff[0]=
   note:  buff holds 20 characters

   to exit this program: cntl-D
-----------------------------------------------------------------*/
#include<stdio.h>
#define clearbuff  for(j=0;j<20;j++)buff[j]='\0';
main(){
char buff[20];
int i,j;
clearbuff;
printf("\n ascii/integers>> ");
while(fgets(buff,20,stdin)) {
for(i=0;i<strlen(buff)-1;i++)
printf("\n buff[%d]=%c=%d",i,buff[i],buff[i]);
clearbuff;
printf("\n\n prompt>> ");
}
}


