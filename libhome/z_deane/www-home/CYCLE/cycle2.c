/* cycle.c program to keep cycling*/
#include <stdio.h>
FILE *thisfile;
int main()
{
int count=0;
int i;
char name[32];
while (1) {
thisfile=fopen("cycle.c","r");
for(i=0;i<15;i++) {
fscanf(thisfile,"%s",name);
printf("\n cycle: %d",count++);
fclose(thisfile);
sleep(60);
}
system("ps");
sleep (60);
}

}/* end main*/
