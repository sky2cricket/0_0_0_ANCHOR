/* cycle.c program to keep cycling*/
#include <stdio.h>
FILE *thisfile;

int main()
{
int count=0;
thisfile=fopen("cycle.c","r");
while (1) {
printf("\n cycle: %d",count++);
fclose(thisfile);
sleep (60);
}

}/* end main*/
