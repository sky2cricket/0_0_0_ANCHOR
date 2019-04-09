/* file: safeRemoveByAge.c */

/* CODE by Cricket Haygood Deane 
  
   The purpose of this program is to remove target files 
   from a directory based on time of last file access and 
   the file extension. 

   The target directory is set here with THIS_DIR definition.

   SAFETY FEATURE:
   This program is directory specific and will not be able to 
   be used in a different directory unless the value for 
   THIS_DIR is reset in the code and the code is recompiled. 

   You must run the program in THIS_DIR.
   
   The TIME_LIMIT is set here at 90000 seconds (25 hours).
   
   If you wish to use a different TIME_LIMIT, you must reset
   this in the code and recompile.

   These very specific values are meant to be inconvenient to
   change so that you will not clobber files in the wrong
   directory. 

   It is strongly suggested that you do a few test runs
   (including the print statements currently in comments)
   BEFORE doing a business run of this program, just to 
   make sure that you are 
	1. in the directory that you are supposed to be in
	2. you have set correct file extensions
	3. you have set TIME_LIMIT correctly 

*/


#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <strings.h>
#include <malloc.h>
#include <time.h>

/* TIME_LIMIT=60*60*25  25 hrs */
/* test define  TIME_LIMIT 90 */
#define  TIME_LIMIT 90000


/* THIS_DIR value is where the program must run. */
#define  THIS_DIR  "your/full/path/directory_name/goes/here"

int main (int argc, char *argv[]) {

int i,j,LEN,COMPARE,DIR_TEST;
int thisTest=100;
char *thisFile,*thisStr;
char *COMMAND0="rm -f ";
char *COMMAND1;

char *suffix[3]={".gif",".htm",".log"};

struct stat  thisBuff; /* data structure to hold stat values */
time_t this_st_atime;  /* last access time */
uid_t  this_st_uid;    /* User ID of file owner */
time_t current_time, delta_time;  
int count=0;


COMPARE=0;

/*
printf("\n COMPARE=%d \n",COMPARE);
printf("\n----------------------------------------------------------\n");
for (i=0;i<3;i++) {
printf ("\n suffix[%d]=%s",i,suffix[i]);
} 
*/

/* time() returns the value of time in seconds  
          since  00:00:00 UTC, January 1, 1970.  */

current_time=time(0);
/*
printf ("\n current_time=%d\n",current_time);
printf (" TIME_LIMIT  =%d\n",TIME_LIMIT  );
*/

thisFile=(char *)malloc(64*sizeof(char));
thisStr =(char *)malloc(64*sizeof(char));
COMMAND1=(char *)malloc(64*sizeof(char));


/* LOOK AT EACH FILE IN THE LIST */
for( i=0;i<argc;i++ ) {


/* DETERMINE IF THE FILENAME ENDS IN .gif, .htm, .log */
COMPARE=1;
LEN=strlen(argv[i]);
for(j=0;j<3;j++) {
if (  strcmp(argv[i]+LEN-4,suffix[j]) == 0 ) COMPARE=0;
}
strcpy(thisStr,argv[i]+LEN-4);

/*
printf("\n %s --- %s --- %d",argv[i],thisStr,COMPARE);
*/


strcpy(thisFile,THIS_DIR);
strcat(thisFile,argv[i]);

j=stat( thisFile,&thisBuff );
this_st_atime=thisBuff.st_atime;
delta_time=current_time - this_st_atime; 
/*
PRINT THESE MESSAGES IF NEEDED
printf("\n this_st_atime:%d   delta_time:%-5d",this_st_atime,delta_time);
printf(" %3d file: %s current_time: %d st_time: %d  delta_time:%d\n",
        i,argv[i],current_time,thisBuff.st_atime,delta_time);
*/

/* TEST FOR AGE OF FILE IF AND ONLY IF SUFFIX IS .gif, .htm, .log */
/* IF AGE TEST IS SATISFIED, THEN DELETE */

if (COMPARE  == 0 ) {
if ( delta_time > TIME_LIMIT ) {
	strcpy(COMMAND1,COMMAND0);
	strcat(COMMAND1,thisFile); 
	/*printf("\n COMMAND1 unix> %s",COMMAND1); */
	system(COMMAND1);
        printf("current_time: %d   -- file %s removed\n",current_time,argv[i]);
	count++;
	} 
}
}

printf("\n %d files deleted\n normal termination %s\n\n",count,__FILE__);



} /* end main */


