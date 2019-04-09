/* writeCts.c  */
/* 
 * PerfAPI Tool: hwprof.c 
 * 
 * August 1999. 
 * 
 * Cricket Haygood Deane 
 * Innovative Computing Labs 
 * University of Tennessee, Knoxville 
 * deane@cs.utk.edu 
 * 
 */ 

/*
 * This is a lightweight tool to count
 * a single user selected event with PerfAPI, 
 * and send the results to a java dynamic display.
 *
 * To use this program, install PerfAPI.
 *
 * Compile this program with the standard makefile.
 * 
 * Run this program with:
 *
 * unix> writeCts -t PAPI_FP_INS 
 *
 */


#include <assert.h>
#include <errno.h>
#include <fcntl.h>
#include <malloc.h>
#include <memory.h>
#include <signal.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/resource.h>
#include <sys/time.h>
#include <sys/times.h>
#include <sys/types.h>
#include <sys/utsname.h>
#include <sys/wait.h>
#include <unistd.h>

#include "papiStdEventDefs.h"
#include "papi.h"
#include "papi_internal.h"

#define TESTNUM       10000000
#define TESTNUM1       5000000
#define TESTNUM2       2500000
#define TESTNUM3       1250000
#define EMAX           10000 

double a=6.27;
double b=3.88;
double c=1.0;
double d=-2.15;
double e[EMAX];
int    I=0;
int    tag=0;

/*--------------------------------------------------------------------*/
/* functions to be timed */
void e_init(void) {for(I=0;I<EMAX;I++) {e[I]=(double)I;} }
void e_reset(void){tag=EMAX;for(I=0;I<TESTNUM1;I++) {e[I%EMAX]+=0.019237; }}
void f0(void) { tag=0;for(I=0;I<TESTNUM;I++) { c+=a; } }
void f1(void) {tag=1;for(I=0;I<TESTNUM1;I++) { c=a*b + e[I%987]; }}
void f2(void) {tag=2;for(I=0;I<TESTNUM1;I++) { c=a*b + a/b; }}
void f3(void) {tag=3;for(I=0;I<TESTNUM2;I++) 
                        { c=a*b + a/b +(double)I*a; e[(I+1237)%EMAX]=c*a*b; }}
void f4(void) {tag=4;for(I=0;I<TESTNUM2;I++) { c=a*b + a/b +(double)I*a +(double)I/b; }}
void f5(void) {tag=5;for(I=0;I<TESTNUM2;I++) {if((c>1.0)&&(c<10.0)||(c < e[I%EMAX])) { c=a*b*d - (double)I*d; e[(I+5000)%EMAX]=c;} } }
/*--------------------------------------------------------------------*/


unsigned int check_the_event(char *str) {

/* check to see if this event is spelled right and
   is supported by the local substrate */ 
/* upon success, the value of preset that matches str
   is returned */

int retval,i;
unsigned int EVENT_CODE;
unsigned int e_code=PAPI_NULL; /* this value should be initialized like this*/

/* convert char "<PAPI_STD_EVT>" to numeric*/
retval=PAPI_describe_event(str,&e_code,NULL);
EVENT_CODE=e_code ^ PRESET_MASK;

if(retval<0) 
{
  printf("\n no PAPI Standard Event Definition for: %s\n",str);
  printf("\n Please try again.\n\n");
  exit(0);
}

/* see if events[0] supported on this substrate*/
retval=PAPI_query_event(EVENT_CODE);

if(retval<0)
{
  printf("\n event %s not supported on this substrate\n",str);
  printf("\n Please try again.\n\n");
  exit(0);
}

return(EVENT_CODE);
}


/* 
-------------------------------------------------------------------------
start PAPItimer functions
-------------------------------------------------------------------------
*/

/* SOME PAPItimer GLOBALS */
unsigned long long MAX_CT = 0;
int INIT_FLAG=1;
int MAX_HW_CTRS;
int INDEX; /* index of active ctr*/
int PAPI_TIMER_VALUE=0;
int PAPI_INTERVAL=1000;/* default 1000 milliseconds (1 sec) */
unsigned long long *ct; /* array to hold count*/
unsigned long long *ctzero; /* array to hold count reset*/
int *events;            /* array to hold preset event */
int *L_events,L_num;    /* determine how many events have been loaded*/
int EventSet=PAPI_NULL; /* ref num for an EventSet*/


/* This function contains "what happens" each time a signal is caught. */
static void PAPIsig_handler (int s) {
double yval;
PAPI_read(EventSet,ct);
PAPI_reset(EventSet);
if(INIT_FLAG) { MAX_CT=ct[0]*2; INIT_FLAG--; }
if(ct[0]>MAX_CT) MAX_CT *=2;
yval=(double)ct[0]/(double)MAX_CT;
fprintf(stdout,"%d  %llu\n",PAPI_TIMER_VALUE,ct[0]);
fflush(stdout);
PAPI_TIMER_VALUE+=PAPI_INTERVAL;
}


/*set up the PAPIsig_handler handler to catch signal SIGVTALRM */
void init_PAPItimer_interrupt(void) {
  struct sigaction newact;
  newact.sa_handler = PAPIsig_handler;
  newact.sa_flags   = SA_RESTART;
  sigemptyset(&newact.sa_mask);
  sigaction(SIGVTALRM, &newact, NULL);
}

/* set the ITIMER_PROF interval timer for "millisecond" intervals */
void setup_PAPItimer(int SECS, int USECS) {
  struct itimerval value;
  value.it_interval.tv_sec  = SECS;
  value.it_interval.tv_usec = USECS; 
  value.it_value = value.it_interval;
  setitimer(ITIMER_VIRTUAL, &value, NULL);
}

/* You determine the timing interval in milliseconds. */
/* convert milliseconds to SECS, USECS, then start the timer */
/* SECS=ms/1000;  USECS=(ms%1000)*1000; */
void PAPItimer(int milliseconds) {
init_PAPItimer_interrupt();
setup_PAPItimer(milliseconds/1000,(milliseconds%1000)*1000);
return;
}
/*
-------------------------------------------------------------------------
end   PAPItimer functions
-------------------------------------------------------------------------
*/

/* start main*/
int main(int argc, char *argv[]) 
{
  int r, i, n = 0;
  unsigned int EVENT_CODE = PAPI_NULL;
  int PAPI_INTERVAL = 1000; /* default value*/

  /* send synchronization value to java*/
fprintf(stdout,"%d    \n",PAPI_INTERVAL);
fflush(stdout);

  r = PAPI_num_events();
  assert(r>=PAPI_OK);


  if(strcmp(argv[1],"-t") != 0 ) {
	fprintf(stderr,"\n usage:  writeCts -t <PAPI_STD_EVENT> \n");
	exit(0);
	}

  EVENT_CODE=check_the_event(argv[2]);

  if (EVENT_CODE!=PAPI_NULL)
    {
      r=PAPI_add_event(&EventSet, EVENT_CODE);
      if (r >= PAPI_OK)
	n++;
    }
  else {
    printf("\n bad EVENT_CODE for %s\n",argv[2]);
    exit(0);
	}

  /* initialize the global value ct */
  ct = (unsigned long long *)malloc(n*sizeof(unsigned long long));
  assert(ct!=NULL);
  memset(ct,0x00,n*sizeof(unsigned long long));

  r=PAPI_reset(EventSet); assert(r>=PAPI_OK);
  r=PAPI_start(EventSet); assert(r>=PAPI_OK);

/* Start timer right after initialization of counters*/
/* start PAPItimer for PAPI_INTERVAL ms */
   PAPItimer(PAPI_INTERVAL);

/* ENDLESS  LOOP */
   
  e_init();
  while(1) {
  f0();
  f1();
  f2();
  f3();
  f4();
  f5();
  e_reset();
  } /* END ENDLESS LOOP*/

  /* these statements should never be reached*/
  PAPI_shutdown();
  exit(0);
}/* end main*/


