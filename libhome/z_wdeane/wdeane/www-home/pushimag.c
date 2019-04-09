/* pushimag.c  BILL DEANE */

#include <sys/types.h>
#include <unistd.h>
#include <stdlib.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <dirent.h>
#include <stdio.h>

#define HEADER1 "HTTP/1.0 200 OK/r/n"
#define HEADER2 "Content-type: multipart/x-mixed-replace;boundary=aRd4xBloobies\r\n"
#define BOUNDARY "\r\n--aRd4xBloobies\r\n"
#define END_BOUND "\r\n--aRd4xBloobies--\r\n\r\n"
#define CONTENT "Content-type: images/gif\r\n\r\n"
#define IMG_DIR "cgi-bin/img-dir"

int main(int argc, char *argv[])
{
 static char *file;
 char *files[1024], *tmp, buf[127];
 caddr_t fp;
 int fd, i, ndir=0;
 DIR *dirp;
 struct dirent *dp;
 struct stat fi;

 dirp = opendir(IMG_DIR);
 while(((dp=readdir(dirp)) !=NULL) && (ndir < 1024))
   {
    if(strncmp(dp->d_name,".", 1))
      {
       files[ndir] = malloc(strlen(dp->d_name)+1+strlen(IMG_DIR));
       sprintf(files[ndir], "%s/%s", IMG_DIR, dp->d_name);
       ndir++;
      }
   }
 closedir(dirp);

 if(write(STDOUT_FILENO, HEADER1, strlen(HEADER1)) == -1)
   exit(0);

 if(write(STDOUT_FILENO, HEADER2, strlen(HEADER2)) == -1)
   exit(0);

 if(write(STDOUT_FILENO, BOUNDARY, strlen(BOUNDARY)) == -1)
   exit(0);

 for(i=0; i<ndir; i++)
   {
    fprintf(stderr, "Doing output loop -- i=%i\n", i);
    sleep(1);

    if(write(STDOUT_FILENO, CONTENT, strlen(CONTENT)) == -1)
      exit(0);

    if((fd=open(files[i],O_RDONLY))  == -1)
      {
       fprintf(stderr, "Unable to open file %s\n", files[i]);
       continue;
      }

    fstat(fd, &fi);
    tmp=malloc(fi.st_size*sizeof(char));
    read(fd, tmp, fi.st_size);

    if(write(STDOUT_FILENO, tmp, fi.st_size) == -1);
      exit(0);

    free(tmp);
    close(fd);

    if(write(STDOUT_FILENO, BOUNDARY, strlen(BOUNDARY))  == -1)
      exit(0);
   }

 write(STDOUT_FILENO, END_BOUND, strlen(END_BOUND));

 exit(0);
} /* end */
