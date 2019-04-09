/* $Id: papi.c,v 1.36 1999/03/31 07:39:07 mucci Exp $ */
/* $Id: papi.c,v 1.37 1999/04/09 20:05:16 mucci Exp $ */
/* REARRANGE ORDER OF FUNCTIONS -- PAPI2.c*/

/* === papi.c*/
#include <stdio.h>
#include <malloc.h>
#include <stdlib.h>
#include <sys/types.h>
#include <signal.h>
#include <string.h>
#include <strings.h>
#include <errno.h>
#include <unistd.h>

#include "papi.h"
#include "papi_internal.h"
#include "papiStdEventDefs.h"

/* Static prototypes */

static int initialize(void);
static int expand_dynamic_array(DynamicArray *);
static EventSetInfo *deploy_EventSet(void);
static EventSetInfo *allocate_EventSet(void);
static int add_EventSet(EventSetInfo *);
static int add_event(EventSetInfo *ESI,int Event);
static int add_pevent(EventSetInfo *ESI, int pEventCode, void *inout);
static int remove_one_event_by_index(EventSetInfo *ESI, int EventIndex);
static int remove_one_event_by_code(EventSetInfo *ESI, int EventCode);
static int remove_event(EventSetInfo *ESI,int EventCode); 
static int remove_EventSet(EventSetInfo *);
static void free_EventSet(EventSetInfo *);
static int handle_error(int, char *);
static char *get_error_string(int);
static EventSetInfo *lookup_EventSet(int eventset);

static int num_counters(EventSetInfo *ESI);
static int event_is_in_eventset(int event, EventSetInfo *ESI);
static int set_defdomain(PAPI_option_t *ptr);
int PAPI_set_domain(int domain);
static int set_defgranularity(PAPI_option_t *ptr);
static int set_multiplex(PAPI_option_t *ptr);
static int set_overflow(PAPI_option_t *ptr);
static int set_domain(PAPI_option_t *ptr);
int PAPI_set_granularity(PAPI_option_t *ptr);
static int set_granularity(PAPI_option_t *ptr);
static int get_overflow(PAPI_option_t *ptr);
static int get_multiplex(PAPI_option_t *ptr);
static int get_domain(PAPI_option_t *ptr);
static int get_defdomain(PAPI_option_t *ptr);
static int get_granularity(PAPI_option_t *ptr);
static int get_defgranularity(PAPI_option_t *ptr);

int _papi_hwd_setopt(int code, EventSetInfo *value, PAPI_option_t *option);
int _papi_hwd_getopt(int code, EventSetInfo *value, PAPI_option_t *option);

/* Global variables */
/* These will eventually be encapsulated into per thread structures. */ 

/* Our integer to EventSetInfo * mapping */

DynamicArray PAPI_EVENTSET_MAP = { 0, };    
int          PAPI_GLOBAL_START = 0; /* test for initialization*/

/* Behavior of handle_error(). 
   Changed to the default behavior of PAPI_QUIET in PAPI_init
   after initialization is successful. */

int PAPI_ERR_LEVEL = PAPI_VERB_ESTOP; 

/* should be in  papi.h or papi_internal.h*/
/*int PAPI_init(void);*/

/* global values for testing only---------------------------*/
char dummy;         /* for testing only*/
int PAPI_HWD_VALUE; /* for testing only*/
#define  WANT_TO_CONTINUE printf("\n continue? press any key,\
 then hit return:");scanf(" %c",&dummy);

/*========================================================================*/
/*========================================================================*/
/*========================================================================*/
/*========================================================================*/
/*

   I have formatted this file with cntl-L print control meta-character 

    [ looks like two characters  ^ , then  L ]

   so that I can have functions starting at top of a page.  
   
   If you print this with:  enscript -2r PAPI2.c

   it takes 18 pages.   This is how I like to print, but others
 
   may not.

   To get rid of the cntl-L [page feed] characters with vi text editor:

   in command mode: 

   %s /^L//g

   Then everything will be crammed together again.

                                                                          */
/*========================================================================*/
/*========================================================================*/
/*========================================================================*/
/*========================================================================*/

/*  papi.c  func___ 01  */ 
/*========================================================================*/
/* begin function:                                                        */    
/* static int initialize(void);                                           */
/*                                                                        */
/* This function can only be called by PAPI_init(); ONCE.                 */
/*                                                                        */
/* This function performs all initializations to set up PAPI environment. */
/* The user selects the level of error handling here.                     */
/* Failure of this function should shutdown the PAPI tool.                */
/*                                                                        */
/* The DynamicArray data structure is defined in papi_internal.h.         */
/*                                                                        */
/* Initialize PAPI_ERR_LEVEL.                                             */
/* The user selects error handling with ERROR_LEVEL_CHOICE.               */
/* ERROR_LEVEL_CHOICE may have one of two values:                         */
/*   a. PAPI_VERB_ECONT [print error message, then continue processing ]  */
/*   b. PAPI_VERB_ESTOP [print error message, then shutdown ]             */
/*========================================================================*/
static int initialize(void)
{
   int errorCode;
   EventSetInfo  EventSetZero; /* not a ptr, no alloc needed*/
   EventSetInfo  *ESI;

   printf("\n PAPI_GLOBAL_START=%d",PAPI_GLOBAL_START);

   /* check if initialization is needed */
   if( PAPI_GLOBAL_START == 0 ) { /* just in case... */

   memset(&PAPI_EVENTSET_MAP,0x00,sizeof(PAPI_EVENTSET_MAP));

   printf("\n in initialize(): PAPI_INIT_SLOTS=%d\n",PAPI_INIT_SLOTS);

   PAPI_EVENTSET_MAP.dataSlotArray=
    (void **)malloc(PAPI_INIT_SLOTS*sizeof(void *)); 
   if(!PAPI_EVENTSET_MAP.dataSlotArray)
     return(handle_error(PAPI_ENOMEM,"Initialization failed."));
   memset(PAPI_EVENTSET_MAP.dataSlotArray,0x00,
           PAPI_INIT_SLOTS*sizeof(void *));
   PAPI_EVENTSET_MAP.totalSlots      = PAPI_INIT_SLOTS;
   PAPI_EVENTSET_MAP.availSlots      = PAPI_INIT_SLOTS - 1;
   PAPI_EVENTSET_MAP.fullSlots       = 1;
   PAPI_EVENTSET_MAP.lowestEmptySlot = 1;
   PAPI_HWD_VALUE    = 100;/*dummy value for testing only*/
   PAPI_ERR_LEVEL    = PAPI_QUIET;
   PAPI_GLOBAL_START = 1;

   /* ZERO.machdep=??? done in _papi_hwd_init*/
   EventSetZero.EventSetIndex=0;
   errorCode=_papi_hwd_init(&EventSetZero);
   if(errorCode<PAPI_OK) {
        printf("\n failure on EventSetZero initialization");
        return(handle_error(PAPI_EBUG,"failure on EventSetZERO initialization"));
        }
   PAPI_EVENTSET_MAP.dataSlotArray[0]=&EventSetZero;
   ESI=PAPI_EVENTSET_MAP.dataSlotArray[0];
   }
   else {
   printf("\n initialization has already been done.");
   }
   return(PAPI_OK);
}/* end static int initialize(void) */

/*  papi.c  func___ 02  */ 
/*========================================================================*/
/* begin function:                                                        */    
/*  int PAPI_init(void);                                                  */
/*  NOT STATIC.  This is the only function that can call initialize().    */
/*========================================================================*/
int PAPI_init(void) 
{
int errorCode;
if (PAPI_GLOBAL_START==0) {
	errorCode=initialize();
        return(errorCode);
        }
return(PAPI_OK);
} /* end int PAPI_init(void) */

/*   papi.c  func___ 03   */ 
/*========================================================================*/
/* begin function:                                                        */
/*  int free_EventSet(EventSetInfo *);                                    */
/*                                                                        */
/* If (!ESI) no action, no penalty.                                       */
/*                                                                        */
/* This function frees memory for                                         */
/*   1. ptrs in the ESI structure                                         */
/*   2. the main ptr to the ESI structure                                 */
/*                                                                        */
/* This function does not touch the global table.                         */
/*========================================================================*/
static void free_EventSet(EventSetInfo *ESI) 
{
  if (ESI->EventCodeArray) free(ESI->EventCodeArray);
  if (ESI->machdep)        free(ESI->machdep);
  if (ESI->start)          free(ESI->start);
  if (ESI->stop)           free(ESI->stop);
  if (ESI->latest)         free(ESI->latest);
  free(ESI);
  return(void);
}/* end static void free_EventSet(EventSetInfo *ESI)*/

/*   papi.c  func___ 04   */ 
/*========================================================================*/
/* low-level function:                                                    */
/* static int remove_EventSet(int eventset)                               */
/* eventset is the index of the ESI in the dataSlotArray                  */
/*                                                                        */
/* This function is called by PAPI_rem_event when the value for           */
/* ESI->NumberOfCounters goes to zero.                                    */
/*========================================================================*/
static int remove_EventSet(EventSetInfo *ESI)
{

   int I;

   /* get value of Index I for this ESI in 
      PAPI_EVENTSET_MAP.dataSlotArray[I]    */
      I=ESI->EventSetIndex;
   

   /* free all the memory from the target EventSet*/ 
      free_EventSet(ESI);


   /* do bookkeeping for PAPI_EVENTSET_MAP */
        PAPI_EVENTSET_MAP.dataSlotArray[I]=NULL;
     if(PAPI_EVENTSET_MAP.lowestEmptySlot < I)
        PAPI_EVENTSET_MAP.lowestEmptySlot = I;
        PAPI_EVENTSET_MAP.availSlots++;
        PAPI_EVENTSET_MAP.fullSlots--;

  return(PAPI_OK);
}/* end static int remove_EventSet(EventSetInfo *ESI)*/

/*  papi.c  func___ 05   */ 
/*========================================================================*/
/* begin function:                                                        */    
/* static void PAPI_shutdown (void);                                      */
/*                                                                        */
/* This function provides a graceful exit to the PAPI tool.               */
/*  a. All memory associated with the PAPI tool is freed.                 */
/*  b. a shutdown message is written to stderr                            */ 
/*                                                                        */
/*========================================================================*/
void PAPI_shutdown(void) 
{
    int i;
    EventSetInfo *ESI;
    /* close all memory pointed to by
       PAPI_EVENTSET_MAP.dataSlotArray[N] elements*/

    /* free all the EventInfo Structures in the
       PAPI_EVENTSET_MAP.dataSlotArray*/

    for(i=0;i<PAPI_EVENTSET_MAP.totalSlots;i++) {
    ESI=PAPI_EVENTSET_MAP.dataSlotArray[i];
        if(ESI) { /* remove_EventSet frees mem, takes ESI off global table*/
           remove_EventSet(ESI);
          }/* end if */
        }/* end for */

        free(PAPI_EVENTSET_MAP.dataSlotArray);

    /* reset value of PAPI_GLOBAL_START   */
    PAPI_GLOBAL_START=0;

    /* shutdown message */
    fprintf(stderr,"\n\n PAPI SHUTDOWN. \n\n");

    return;
} /* end void PAPI_shutdown(void) */

/*   papi.c  func___ 06   */ 
/*========================================================================*/
/* begin function:                                                        */
/* static int handle_error(int PAPI_errorCode, char *errorMessage);       */
/*                                                                        */
/* The function PAPI_error (int, char *) provides error handling for      */
/* both the user and the internal functions.                              */
/*                                                                        */
/* A one line or multiple line error message is printed to stderr.        */ 
/* The first line of the error message will be the character string       */
/* from errStr[N] where N is the absolute value of the PAPI_errorCode     */
/* passed to the function.                                                */  
/* If *errorMessage is set to NULL, there is no further error message.    */
/* If *errorMessage points to a character string, this will be printed    */
/* to stderr.                                                             */
/* The global value PAPI_ERR_LEVEL determines whether this error will     */
/* cause shutdown of the papi tool.                                       */
/* Never call this with PAPI_OK                                           */
/*========================================================================*/
static int handle_error(int PAPI_errorCode, char *errorMessage) 
{
  if (PAPI_ERR_LEVEL) 
    {
      /* print standard papi error message */
      fprintf(stderr, "%s", get_error_string(PAPI_errorCode));

      /* check for failed C library call*/
      if ( PAPI_errorCode==PAPI_ESYS ) perror(errorMessage);

      /* check for user supplied error message */
      if (errorMessage) fprintf(stderr, ": %s", errorMessage);
      fprintf(stderr,"\n");

      if (PAPI_ERR_LEVEL==PAPI_VERB_ESTOP) 
	PAPI_shutdown();
    }
  return(PAPI_errorCode);
}/*end static int handle_error(int PAPI_errorCode, char *errorMessage)*/ 
/*   papi.c  func___ 07   */ 
/*========================================================================*/
static char *get_error_string(int errorCode)
{
static char *papi_errStr[PAPI_NUM_ERRORS] = {
"No error",
"Invalid argument",
"Insufficient memory",
"A System/C library call failed",
"Substrate returned an error",
"Access to the counters was lost or interrupted",
"Internal error, please send mail to the developers",
"Hardware Event does not exist",
"Hardware Event exists, but cannot be counted due to counter resource limits",
"No Events or EventSets are currently counting",
"Unknown error code"
};

  /* set message for PAPI_OK_MPX same as PAPI_OK*/
  if(errorCode>PAPI_OK) errorCode=PAPI_OK;
  errorCode = - errorCode;

  if ((errorCode < 0) || ( errorCode >= PAPI_NUM_ERRORS))
    errorCode = PAPI_EMISC;

  return(papi_errStr[errorCode]);
}/*end static char *get_error_string(int errorCode)*/

/*   papi.c  func___ 08   */ 
/*========================================================================*/
int PAPI_perror(int code, char *destination, int length)
{
  char *foo;

  foo = get_error_string(code);

  if ((destination) && (length >= 0))
    strncpy(destination,foo,length);
  else
    fprintf(stderr,"%s\n",foo);

  return(PAPI_OK);
}/*end int PAPI_perror(int code, char *destination, int length)*/

/*   papi.c  func___ 09   */ 
/*========================================================================*/
/* This function tells you if an EventSetIndex is legal value.            */       
/*========================================================================*/
static EventSetInfo *lookup_EventSet(int eventset)
{
  if ((eventset > 1) && (eventset < PAPI_EVENTSET_MAP.totalSlots))
    return(PAPI_EVENTSET_MAP.dataSlotArray[eventset]);
  else
    return(NULL);
}/* end static EventSetInfo *lookup_EventSet(int eventset)*/

/*  papi.c  func___ 10   */ 
/*========================================================================*/
static int event_is_in_eventset(int event, EventSetInfo *ESI)
{
  int i = ESI->NumberOfCounters;
  int *events_in_set = ESI->EventCodeArray;

  while ((--i) >= 0)
    {
      if (events_in_set[i] == event)
	return(i);
    }
  
  return(handle_error(PAPI_EINVAL,"Event not in EventSet"));
}/* end static int event_is_in_eventset(int event, EventSetInfo *ESI)*/


/*  papi.c  func___ 11  */ 
/*========================================================================*/
/* This function returns the number of counters that a read(ESI->machdep) */
/* returns                                                                */
/*========================================================================*/
static int num_counters(EventSetInfo *ESI)
{
  return(_papi_system_info.num_cntrs);
  /* alternate: return(ESI->NumberOfCounters);*/

}/* end static int num_counters(EventSetInfo *ESI)*/

/*  papi.c  func___ 12   */ 
/* NOT_IN_CURRENT mypapi.c*/
/*========================================================================*/
/* This function returns true and the memory allocated for counters       */
/*========================================================================*/

/*
static unsigned long long *get_space_for_counters(EventSetInfo *ESI)
{
  int num;
  num = num_counters(ESI);
  return((unsigned long long *)malloc(num*sizeof(unsigned long long)));
}
*/

/*   papi.c  func___ 13   */ 
/* probably discard this one*/
/*========================================================================*/
/* begin function:                                                        */
/* int PAPI_get_lowestEmptySlot(void)                                     */
/*                                                                        */
/* This function returns the integer value of                             */
/* PAPI_EVENTSET_MAP.lowestEmptySlot                                      */
/*========================================================================*/
int PAPI_get_lowestEmptySlot(void) 
{
return(PAPI_EVENTSET_MAP.lowestEmptySlot);
}

/*   papi.c  func___ 14  */ 
/*========================================================================*/
/* begin function:                                                        */
/* static int _papi_expandDA(DynamicArray *EM);                           */
/*                                                                        */
/* The function _papi_expandDA expands PAPI_EVENTSET_MAP.dataSlotArray    */
/* when the array has become full.                                        */
/* The function also resets:                                              */
/*       PAPI_EVENTSET_MAP.totalSlots                                     */
/*       PAPI_EVENTSET_MAP.availSlots                                     */
/*       PAPI_EVENTSET_MAP.fullSlots (no change)                          */
/*       PAPI_EVENTSET_MAP.lowestEmptySlot                                */
/* This enables the user to load as many events as needed.                */
/*                                                                        */
/* The DynamicArray data structure is defined in papi_internal.h.         */
/* typedef struct _dynamic_array {                                        */
/*	void   **dataSlotArray; ** ptr to array of ptrs to EventSets      */
/*	int    totalSlots;      ** number of slots in dataSlotArrays      */
/*	int    availSlots;      ** number of open slots in dataSlotArrays */
/*	int    fullSlots;       ** number of full slots in dataSlotArrays */
/*	int    lowestEmptySlot; ** index of lowest empty dataSlotArray    */
/* } DynamicArray;                                                        */
/*                                                                        */
/* Error handling should be done in the calling function.                 */  
/*========================================================================*/

static int expand_dynamic_array(DynamicArray *DA)
{
  int  prevTotal;	
  void **new;

  /*realloc existing PAPI_EVENTSET_MAP.dataSlotArray*/
    
  new = (void **)realloc
      (DA->dataSlotArray,DA->totalSlots*sizeof(void *));
  if (new==NULL) 
    return(handle_error(PAPI_ENOMEM,NULL));   

   memset( PAPI_EVENTSET_MAP.dataSlotArray,0x00, 
           PAPI_INIT_SLOTS*sizeof(void *));

  /* Need to assign this value, what if realloc moved it? */
  DA->dataSlotArray = new;
       
  /* bookkeeping to accomodate successful realloc operation*/
  prevTotal           = DA->totalSlots; 
  memset(DA->dataSlotArray[prevTotal],0x00, 
           prevTotal*sizeof(void *));
  DA->totalSlots     += prevTotal;
  DA->availSlots      = prevTotal;
/*DA->fullSlots       = no change;*/
  DA->lowestEmptySlot = prevTotal;

  return(PAPI_OK);
}/*end static int expand_dynamic_array(DynamicArray *DA)*/


/*   papi.c  func___ 15   */ 
/*========================================================================*/
/* static int add_EventSet(EventSetInfo *ESI)                             */
/*                                                                        */
/* This function adds one EventSetInfo struct to the global table         */
/* and performs bookkeeping for PAPI_EVENTSET_MAP.                        */
/*                                                                        */
/* If the global table needs more room, this function calls               */
/* expand_dynamic_array                                                   */
/*                                                                        */
/* Upon success returns PAPI_OK.                                          */
/* Upon faliure returns EINVAL.                                           */
/*========================================================================*/
static int add_EventSet(EventSetInfo *ESI)
{
  int N; /* temp value for bookkeeping */
  int errorCode;

  errorCode=PAPI_OK;

  printf("\n --------------------entering add_EventSet");

  if (PAPI_EVENTSET_MAP.availSlots==0){
     if(PAPI_GLOBAL_START==0) PAPI_init();
     else {
        printf("\n got to here #1");
        errorCode=expand_dynamic_array(&PAPI_EVENTSET_MAP);
        if(errorCode<PAPI_OK) {
            printf("\n ##leaving add_EventSet returning errorCode=%d",
            errorCode);
            return(errorCode);
        }
     }
  }

  N=PAPI_EVENTSET_MAP.lowestEmptySlot;
  ESI->EventSetIndex=N;
  PAPI_EVENTSET_MAP.dataSlotArray[N]=ESI;
 

  /* Update the values for lowestEmptySlot, num of availSlots */

  /* find next lowest empty slot*/
  while(PAPI_EVENTSET_MAP.dataSlotArray[N]!=NULL) N++;
  PAPI_EVENTSET_MAP.lowestEmptySlot=N;
  PAPI_EVENTSET_MAP.availSlots--;
  PAPI_EVENTSET_MAP.fullSlots++;

  printf("\n --------------------leaving  add_EventSet");
  return(PAPI_OK);
}/* end static int add_EventSet(EventSetInfo *ESI)*/

/*   papi.c  func___ 16   */ 
/*========================================================================*/
/* begin function:                                                        */
/*  EventSetInfo *allocate_EventSet(void);                                */
/*                                                                        */
/* This function allocates space for one EventSetInfo structure and for   */
/* all of the pointers in this structure.                                 */
/* Upon success returns *ESI.                                             */
/* Upon failure returns NULL.                                             */
/*                                                                        */
/* In case of failure, this function calls free_EventSet to free any      */
/* malloced memory.                                                       */
/* DO NOT CALL remove_EventSet because that funtion updates global table  */
/* and the ESI here has not yet been added to the global table.           */
/*========================================================================*/
static EventSetInfo *allocate_EventSet(void)
{
  EventSetInfo *ESI,*zeroESI;
  int MaxC;/*max num counters this machine*/
  MaxC=_papi_system_info.num_gp_cntrs+_papi_system_info.num_sp_cntrs;
  MaxC=3;/* test value only*/

  printf("\n ----------------entering allocate_EventSet");
  ESI=(EventSetInfo *)malloc(sizeof(EventSetInfo));

  if (ESI==NULL)
    return(NULL);
  memset(ESI,0x00,sizeof(ESI));

  ESI->machdep   =(void *)malloc(_papi_system_info.size_machdep);

  ESI->start     =(long long *)malloc(MaxC*sizeof(long long));
  ESI->stop      =(long long *)malloc(MaxC*sizeof(long long));
  ESI->latest    =(long long *)malloc(MaxC*sizeof(long long));
  ESI->EventCodeArray = (int *)malloc(MaxC*sizeof(int));

  if ((ESI->machdep        == NULL )  ||
      (ESI->start          == NULL )  ||
      (ESI->stop           == NULL )  ||
      (ESI->latest         == NULL )  ||
      (ESI->EventCodeArray == NULL ))
    { free_EventSet(ESI);
      return(NULL);
    }
  memset(ESI->machdep,       0x00,_papi_system_info.size_machdep);
  memset(ESI->start,         0x00,MaxC*sizeof(long long));
  memset(ESI->stop,          0x00,MaxC*sizeof(long long));
  memset(ESI->latest,        0x00,MaxC*sizeof(long long));
  memset(ESI->EventCodeArray,0x00,MaxC*sizeof(int));

  ESI->EventSetIndex = PAPI_EVENTSET_MAP.lowestEmptySlot;
  ESI->NumberOfCounters=0;
  ESI->MaxCounters=MaxC;
  ESI->state = PAPI_STOPPED;

  /* ptr to hwd_cntl_st structure */
  zeroESI=PAPI_EVENTSET_MAP.dataSlotArray[0];
  ESI->machdep=zeroESI->machdep;

  printf("\n ----------------leaving  allocate_EventSet");
  return(ESI);
}/* end static EventSetInfo *allocate_EventSet(void) */

/*   papi.c  func___ 17   */ 
/*========================================================================*/
/* begin function:                                                        */
/* EventSetInfo *deploy_EventSet                                          */
/*                                                                        */
/* This function is called by PAPI_add_event, PAPI_add_events, and        */
/* PAPI_add_pevent when the first event needs to be added to a            */
/* yet-to-be created EventSet.                                            */
/*                                                                        */
/* inout==NULL   : means regular PAPI_event from papiStdEventDefs         */
/* inout!=NULL   : means user programmed pevent                           */
/*                                                                        */
/* This function calls:                                                   */
/*    0. PAPI_init() [fail-safe check on initialization]                  */
/*    1. allocate_EventSet [malloc space for EventSetInfo struct]         */
/*    2. add_event,add_pevent [add the first event to the ESI]            */
/*    3. add_EventSet [ add *ESI to dataSlotArray]                        */
/*                                                                        */
/* Upon success returns ptr to the target EventSetInfo struct.            */
/* Upon failure, all memory allocated to the point of failure is freed    */
/* and the function returns a ptr to NULL.                                */
/*========================================================================*/
static EventSetInfo *deploy_EventSet(void)
{
EventSetInfo *ESI;
int errorCode=PAPI_OK;

printf("\n ----------entering deploy_EventSet");
PAPI_init();/*check initialization*/

/* allocate_EventSet takes care of mem cleanup in case of failure*/
ESI=allocate_EventSet();
if(!ESI) return(NULL);

/* see if the EventSet can be added to the global table*/
errorCode=add_EventSet(ESI);
if(errorCode<PAPI_OK) {
   remove_EventSet(ESI);
   handle_error(errorCode,"failure on deploy_EventSet");
   return(NULL);
   }
/* successful deploy*/
printf("\n ----------leaving  deploy_EventSet, ESI->EventSetIndex=%d\n",
ESI->EventSetIndex);
return(ESI);
}/* end static EventSetInfo *deploy_EventSet(void)*/

/*   papi.c  func___ 18   */ 
/*========================================================================*/
/* begin function:                                                        */
/* static int add_event(EventSetInfo *ESI, int EventCode)                 */
/*                                                                        */ 
/* This function is called by                                             */
/*     1. PAPI_add_event                                                  */
/*     2. PAPI_add_events.                                                */ 
/*                                                                        */ 
/* Those functions take care of check for valid *ESI and valid EventCode. */ 
/*                                                                        */ 
/* First this function checks for "good" hardware event by calling        */
/* _papi_hwd_add_event.  Possible cause of failure could be               */
/*   PAPI_ENOEVNT -- hwd event not supported on this platform             */
/*   PAPI_ENCFLCT -- ran out of counters for this ESI                     */ 
/*                                                                        */
/* if good hardware event:                                                */
/* This function adds the EventCode to the "lowest open slot" in the      */
/* ESI->EventCodeArray and sets the corresponding counters for start,     */
/* stop, and latest equal to zero.                                        */
/*========================================================================*/
static int add_event(EventSetInfo *ESI, int EventCode)
{
  int i,k;
  int hwd_errorCode=PAPI_OK;
 
  printf("\n ----------entering add_event  ESI->NumberOfCounters=%d",
  ESI->NumberOfCounters);

  /* Now find the index of first available counter. */
  /* EventSetArray[k]=0 means empty counters at k.  */
  k=-1;
  for(i=0;i<ESI->MaxCounters;i++){
  if (ESI->EventCodeArray[i]==0) {k=i;break;}
  }
  if (k==-1) {
  printf("\n attempt to add event to full eventset, index=%d",
  ESI->EventSetIndex);
  return(handle_error(PAPI_ECNFLCT,"fail in add_event"));
  }

  printf("\n in add_event: first avail counter : k=%d",k);
  /* abcdef abcdef */

  /* successful addition of papi_hwd_add_event means go
     ahead and start the counters for index k.*/

  /* add the eventCode and initialize its counters*/
  ESI->EventCodeArray[k] = EventCode;
  ESI->start[k]          = 0;
  ESI->stop[k]           = 0;
  ESI->latest[k]         = 0;
  ESI->NumberOfCounters++;

  printf("\n ----------in add_event ESI->EventCodeArray[%d]=",k);
  printf(" %x ",ESI->EventCodeArray[k]);
  printf("\n ----------leaving  add_event  ESI->NumberOfCounters=%d",
  ESI->NumberOfCounters);
  /*WANT_TO_CONTINUE*/
  return(hwd_errorCode);
}/* end static int add_event(EventSetInfo *ESI, int EventCode)  */

/* papi.c  func___ 19   */ 
/*========================================================================*/
static int add_pevent(EventSetInfo *ESI, int pEventCode, void *inout)
{ /*stub*/ return(PAPI_OK); }

/*   papi.c  func___ 20   */ 
/*========================================================================*/
/* begin function:                                                        */
/* int PAPI_add_event(int *EventSetIndex,int EventCode)                  */
/*                                                                        */
/* This function determines if *EventSetIndex refers to an existing ESI   */
/* or to a yet-to-be created ESI.  Either way, the target ESI will be     */
/* PAPI_EVENTSET_MAP.dataSlotArray[*EventSetIndex].                       */
/*                                                                        */
/* If a new one is needed, call deploy_EventSet which makes new ESI.      */
/* Then                                                                   */
/* This function calls _papi_hwd_add_event and add_event on the ESI.      */
/*                                                                        */
/* The attempt to add a conflicting event to an event set will cause      */
/* return of error unless PAPI_SETA_MPXRES has been set.                  */
/*                                                                        */
/* A value of 0 for *EventSetIndex is reserved for internal use.          */
/*========================================================================*/
int PAPI_add_event(int *EventSetIndex, int EventCode)
{
  int add_errorCode;
  int hwd_returnCode;
  int errorCode;
  EventSetInfo *ESI;

  printf("\n -----entering PAPI_add_event *EventSetIndex=%d",*EventSetIndex);

  /* initialize error codes */
  add_errorCode=PAPI_OK;  /*for add_event          */
  hwd_returnCode=PAPI_OK; /*for _papi_hwd_add_event*/
  errorCode=PAPI_OK;

   /* Adding an event to a yet-to-be-created [new] EventSet*/
   if(*EventSetIndex==PAPI_NULL) {/*need new ESI*/
   /* deploy does allocate_eventSet, add_EventSet, returns null if anything fails */
        printf("\n in PAPI_add_event: need new ESI, need to call deploy");
        /*WANT_TO_CONTINUE*/
        ESI=deploy_EventSet();
        if(!ESI) {/* deploy takes care of mem cleanup if failure*/
        return(handle_error(PAPI_ENOMEM,"failure on deploy_EventSet"));
        }
        *EventSetIndex=ESI->EventSetIndex; /* index in global table*/
        printf("\n ESI=PAPI_EVENTSET_MAP.dataSlotArray[%d] ", *EventSetIndex);
        printf(" has been allocated and added to global table.");
        /*WANT_TO_CONTINUE*/
        }
    else { /* already have one*/
        ESI=PAPI_EVENTSET_MAP.dataSlotArray[*EventSetIndex];
        }

   /* Check if one more event can be added to this ESI*/
   if( (ESI->NumberOfCounters+1) > ESI->MaxCounters ) {
      if( ESI->NumberOfCounters==0 ) {/* fail on newly deployed*/
          remove_EventSet(ESI);
          return(handle_error(PAPI_EBUG,NULL));
          }
      return(handle_error(PAPI_ECNFLCT,"ran out of counters"));
      }

   /* See if this hardware event can be implemented on this machine.     */
   printf("\n got to here #1\n");
   errorCode=_papi_hwd_add_event(ESI, EventCode);
   printf("\n got to here #2\n");
   if( errorCode  < PAPI_OK ) {
        printf("\n EventCode %x not supported.", EventCode);
        if ( ESI->NumberOfCounters==0 ) remove_EventSet(ESI);/* newly deployed*/
        return(handle_error(PAPI_ENOEVNT,"EventCode not exist here."));
        }

  /* see if this  event can be added to the EventSet*/
   add_errorCode=add_event(ESI,EventCode);

   if(add_errorCode<PAPI_OK){ /*fail*/
       printf("\n failed on add_event to ESI->EventSetIndex=%d",
       ESI->EventSetIndex);
       _papi_hwd_rem_event(ESI,EventCode);
       if ( ESI->NumberOfCounters==0 ) remove_EventSet(ESI);/* newly deployed*/
       printf("\n -----leaving  PAPI_add_event");
       WANT_TO_CONTINUE
       return(handle_error(add_errorCode,"failed on add_event"));
       }
       else { /*success*/
       printf("\n -----leaving  PAPI_add_event");
        WANT_TO_CONTINUE
       }
       return(hwd_returnCode);/*leave with success*/
} /* end int PAPI_add_event(int *EventSetIndex, int EventCode) */


/*   papi.c  func___ 21   */ 
/*========================================================================*/
/* begin function:                                                        */
/* int PAPI_add_events(int *EventSetIndex, int *EventCodes, int number)  */
/*                                                                        */
/* This function determines if the first argument (int *EventSetIndex)    */
/* refers to an existing PAPI_EVENTSET_MAP.dataSlotArray[*EventSetIndex]  */
/* exists or if it must be created.                                       */
/*                                                                        */
/* Once a valid target ESI is in place, this function goes through the    */
/* loop "number" of times to add EventCodes[k] to  ESI->EventCodeArray.   */
/* If one or more of Events cannot be counted on this platform, then this */
/* call fails and PAPI_ENOEVNT is returned after _all_ of the values in   */
/* the EventCodes array have been checked. In addition, the invalid       */
/* entries in the EventCodes array are set to PAPI_NULL such that the     */
/* user can successfully reissue the call with the revised EventCodes.    */
/*========================================================================*/
int PAPI_add_events(int *EventSetIndex, int *EventCodes, int number)
{
  int add_errorCode,hwd_errorCode,HWD_returnCode, hwd_returnCode;
  EventSetInfo *ESI;
  int  i;

  printf("\n ------------entering PAPI_add_events");

  /* initialize error codes */
  add_errorCode=PAPI_OK; /*for add_event                     */
  hwd_errorCode=PAPI_OK; /*for individual _papi_hwd_add_event*/
  hwd_returnCode=PAPI_OK; /*for individual _papi_hwd_add_event*/
  HWD_returnCode=PAPI_OK; /*for aggregate  _papi_hwd_add_event*/

  if ( EventSetIndex == NULL )
    return(handle_error(PAPI_EINVAL,NULL));

  if ( number <= 0)
    return(handle_error(PAPI_EINVAL,NULL));

  /* add events to PAPI_EVENTSET_MAP.dataSlotArray[*EventSetIndex]*/

  if(*EventSetIndex==PAPI_NULL) {/*-------------------------need new ESI*/
  printf("\n in PAPI_add_events: need new ESI, call deploy");
     ESI=deploy_EventSet();
     if(!ESI) {/* deploy takes care of mem cleanup if failure*/
         return(handle_error(PAPI_ENOMEM,"failure on deploy_EventSet"));
         }/*end if(!ESI)*/
     *EventSetIndex=ESI->EventSetIndex;
     }
  else {/* already have one*/
     ESI=PAPI_EVENTSET_MAP.dataSlotArray[*EventSetIndex];
     }

  if ( (number+ESI->NumberOfCounters) > ESI->MaxCounters ) {
     printf("\n PAPI_add_events: trying to add too many events to single EventSet");
     printf("\n ESI->EventSetIndex=%d",ESI->EventSetIndex);
     if(ESI->NumberOfCounters==0) remove_EventSet(ESI);/* newly deployed*/
     return(handle_error(PAPI_EINVAL,"trying to add too many events to single ESI"));
     }
  /* deploy & number good; now try to add events from EventCodes array */
  for ( i=0; i<number; i++ ) {
  if(EventCodes[i]!=PAPI_NULL) {/* no action if null*/
     /*see if this hardware event can be supported on this machine*/
     hwd_errorCode=_papi_hwd_add_event(ESI, EventCodes[i]);
     if(hwd_errorCode< PAPI_OK) {
        HWD_returnCode=hwd_returnCode;
        EventCodes[i]=PAPI_NULL;
        }
     else {/* good hwd_errorCode, try to add the event*/
        add_errorCode=add_event(ESI,EventCodes[i]);
        if(add_errorCode<PAPI_OK) {
           _papi_hwd_rem_event(ESI,EventCodes[i]);
           HWD_returnCode=add_errorCode;
           EventCodes[i]=PAPI_NULL;
           }
         }/* end else*/
     }/* end if(EventCodes[i]!=PAPI_NULL)*/
  }/*end for*/

 /* NOT successful add of all events in EventCodes for new ESI*/
    if(HWD_returnCode<PAPI_OK) {
    if(ESI->NumberOfCounters==0) { /* remove newly deployed*/
        remove_EventSet(ESI);
        printf("\n ------------leaving  PAPI_add_events, not successful");
           WANT_TO_CONTINUE
        return(handle_error(HWD_returnCode,"fail add_events"));
        }
    else { /* remove the events but leave pre-existing ESI*/
        for ( i=0; i<number; i++ ) {
           if(EventCodes[i]!=PAPI_NULL) /* act only if not PAPI_NULL*/
            _papi_hwd_rem_event(ESI,EventCodes[i]);
            remove_one_event_by_code(ESI,EventCodes[i]);
           }/* end for */
        printf("\n ------------leaving  PAPI_add_events, not successful");
        WANT_TO_CONTINUE
        return(handle_error(HWD_returnCode,"fail add_events"));
        }/* end else */
     }/*end if(HWD_returnCode<PAPI_OK) */

    /* successful attempt to add new events to pre-existing ESI*/
    /* Always return the errorCode from hwd ops */
    printf("\n ------------leaving  PAPI_add_events, successful");
    WANT_TO_CONTINUE
    return(hwd_errorCode);
} /* end int PAPI_add_events(int *EventSetIndex,int *EventCodes,int number) */
/*   papi.c  func___ 22   */ 
/*========================================================================*/
/*  int PAPI_add_pevent(int *EventSetIndex, int p_code, void *inout)     */
/*                                                                        */
/* This function determines if *EventSetIndex refers to an existing ESI   */
/* or to a yet-to-be created ESI.  Either way, the target ESI will be     */
/* PAPI_EVENTSET_MAP.dataSlotArray[*EventSetIndex].                       */
/*                                                                        */
/* If a new one is needed, call deploy_EventSet which takes care of       */
/* everything needed by PAPI_add_event.                                   */
/* else: This function calls add_pevent on the existing ESI.              */
/*                                                                        */
/* The attempt to add a conflicting event to an event set will cause      */
/* return of error unless PAPI_SETA_MPXRES has been set.                  */
/* A value of 0 for *EventSetIndex is reserved for internal use.          */
/*========================================================================*/
int PAPI_add_pevent(int *EventSetIndex, int pEventCode, void *inout)
{
  int add_errorCode,hwd_returnCode;
  EventSetInfo *ESI;
  printf("\n -----entering PAPI_add_pevent *EventSetIndex=%d",
  *EventSetIndex);

  /* initialize error codes */
  add_errorCode=PAPI_OK;  /*for add_event          */
  hwd_returnCode=PAPI_OK; /*for _papi_hwd_add_event*/

  if ( pEventCode <= 0) return(handle_error(PAPI_EINVAL,NULL));

  if(*EventSetIndex==PAPI_NULL) {/*-------------------------need new ESI*/
     printf("\n in PAPI_add_events: need new ESI, call deploy");
     ESI=deploy_EventSet();
     if(!ESI) {/* deploy takes care of mem cleanup if failure*/
         return(handle_error(PAPI_ENOMEM,"failure on deploy_EventSet"));
         }/*end if(!ESI)*/
     *EventSetIndex=ESI->EventSetIndex;
     }
  else {/* already have one*/
     ESI=PAPI_EVENTSET_MAP.dataSlotArray[*EventSetIndex];
     }

   /* Check if one more event can be added to this ESI*/
   if( (ESI->NumberOfCounters+1) > ESI->MaxCounters ) {
      if( ESI->NumberOfCounters==0 ) {/* fail on newly deployed*/
          remove_EventSet(ESI);
          return(handle_error(PAPI_EBUG,"deploy problem"));
          }
      return(handle_error(PAPI_ECNFLCT,"ran out of counters"));
      }

   /* See if this hardware pevent can be implemented on this machine.  */
   hwd_returnCode=_papi_hwd_add_prog_event(ESI, pEventCode, inout);
   if( hwd_returnCode  < PAPI_OK ) {
        printf("\n pEventCode %x not supported.", pEventCode);
        if ( ESI->NumberOfCounters==0 ) remove_EventSet(ESI);/* newly deployed*/
        return(handle_error(hwd_returnCode,"EventCode not exist here."));
        }


 /* Now add the event pointed to by pEventCode to the existing ESI    */

 /* If add_event fails, the Event is not added to the EventSet       */
 /* But not need remove existing ESI unless newly deployed. */
 add_errorCode=add_pevent(ESI,pEventCode,inout);
 if(add_errorCode<PAPI_OK){
    _papi_hwd_rem_event(ESI,pEventCode);
    if ( ESI->NumberOfCounters==0 ) remove_EventSet(ESI);/* newly deployed*/
    printf("\n failed on add_event to existing ESI");
    printf("\n -----leaving PAPI_add_pevent *EventSetIndex=%d",
    *EventSetIndex);
    WANT_TO_CONTINUE
    return(handle_error(add_errorCode,"failed on add_event"));
    }
 printf("\n -----leaving PAPI_add_pevent *EventSetIndex=%d",*EventSetIndex);
 WANT_TO_CONTINUE
 return(hwd_returnCode);/*leave with success*/

} /*end int PAPI_add_pevent(int *EventSetIndex,int pEventCode,void *inout)*/


/*  papi.c func___ 23  */ 
/*========================================================================*/
/* begin function:                                                        */
/* static int remove_event(EventSetInfo *ESI,int EventIndex,int EventCode)*/
/*                                                                        */ 
/* This function is called by                                             */ 
/*   1. remove_one_event_by_index                                         */
/*   2. remove_one_event_by_code                                          */
/* which check for valid *ESI, valid EventCode, and valid EventIndex.     */ 
/*                                                                        */ 
/* This function removes the event from machine dependent structures      */ 
/* by calling _papi_hwd_rem_event.                                        */
/* If the value of ESI->NumberOfCounters goes to zero,                    */ 
/* this function calls remove_EventSet to free memory and                 */ 
/* take the ESI off of the global table.                                  */ 
/*========================================================================*/
static int remove_event(EventSetInfo *ESI,int EventCode) 
{
    int EventIndex,i;
    int hwd_returnCode = PAPI_OK;

 /* Remove Event from machine dependent structures
    hwd_returnCode = _papi_hwd_rem_event(ESI,EventCode);
 */

  /* determine index of target event k */
  EventIndex=-1;
  for(i=0;i<ESI->MaxCounters;i++){
  if(ESI->EventCodeArray[i]==EventCode)
   {EventIndex=i;break;}
  }

  if(EventIndex<0){
    printf("\n EventCode not found in EventCodeArray");
    return(PAPI_EINVAL);
    }

  ESI->EventCodeArray[EventIndex] = 0;
  ESI->start[EventIndex]          = 0;
  ESI->stop[EventIndex]           = 0;
  ESI->latest[EventIndex]         = 0;
  ESI->NumberOfCounters--;

  if(ESI->NumberOfCounters==0)
        remove_EventSet(ESI);

  return(hwd_returnCode); 
}/*end static int remove_event(EventSetInfo *ESI,int EventCode) */

/*   papi.c  func___ 24   */ 
/*========================================================================*/
/* begin function:                                                        */
/*  int remove_one_event_by_index(EventSetInfo *ESI, int EventIndex);     */
/*                                                                        */
/* This function identifies which event to remove by the value of         */
/* of the EventIndex.                                                     */
/*========================================================================*/
static int remove_one_event_by_index(EventSetInfo *ESI, int EventIndex)
{
  int EventCode;
  if(!ESI) return(PAPI_EINVAL);

  if(  ( EventIndex > ESI->MaxCounters ) || ( EventIndex < 0 )   )
    return(PAPI_EINVAL);

  EventCode=ESI->EventCodeArray[EventIndex];

  remove_event(ESI,EventCode);

return(PAPI_OK);
}/*end static int remove_one_event_by_index(EventSetInfo *ESI,int indexTarget)*/

/*  papi.c  func___ 25   */ 
/*========================================================================*/
/* begin function:                                                        */
/*  int remove_one_event_by_code(EventSetInfo *ESI, int EventCode)        */
/*                                                                        */
/* This function identifies which event to remove by the value of         */
/* of the EventCode.                                                      */
/*========================================================================*/
static int remove_one_event_by_code(EventSetInfo *ESI, int EventCode)
{
  if(!ESI) return(PAPI_EINVAL);

  remove_event(ESI,EventCode);

  return(PAPI_OK);
}/*end static int remove_one_event_by_code(EventSetInfo *ESI, int EventCode)*/


/*   papi.c  func___ 26   */ 
/*========================================================================*/
/* low-level function:                                                    */
/* int PAPI_rem_event(int EventSet, int Event)                            */
/*                                                                        */
/*  This function removes the Event from EventSet.                        */
/*  remove_one_event_by_code calls remove_event.                          */
/*                                                                        */
/*  in remove_event:                                                      */    
/*    1. _papi_hwd_rem_event removes the event from hardware              */
/*    2. remove_event removes the event from the ESI                      */
/*    3. if ESI->NumberOfCounters goes to zero, remove_event calls        */
/*       remove_EventSet to free all memory for the ESI                   */
/*       and take the ESI off the global table.                           */
/*========================================================================*/
int PAPI_rem_event(int EventSet, int Event)
{
  EventSetInfo *ESI;
  int errorCode, hwd_errorCode;

  printf("\n ----------------------------entering PAPI_rem_event");
  printf("\n EventSet=%d,  Event=%x",EventSet,Event);

  /* determine target ESI structure, see if it exists */
  ESI = PAPI_EVENTSET_MAP.dataSlotArray[EventSet];
  ESI = lookup_EventSet(EventSet);
  if (ESI == NULL){
    printf("\n ----------------------------leaving  PAPI_rem_event");
    return(handle_error(PAPI_EINVAL,"No such EventSet"));
    }

  /* Remove target Event from machine independent structures */
  /* if ESI->NumberOfCounters=0, the ESI will be removed from global table*/
    printf("\n ESI->NumberOfCounters before remove_one_event_by_code=%d",
    ESI->NumberOfCounters);
    errorCode = remove_one_event_by_code(ESI,Event);
    if(ESI) {
    printf("\n ESI->NumberOfCounters after  remove_one_event_by_code=%d",
    ESI->NumberOfCounters);
    }
    else {
    printf("\n ESI->NumberOfCounters after  remove_one_event_by_code=0");
    printf("\n The ESI was removed.");
    }

     /* Put this statement into remove_event
        Remove Event from machine dependent structures
        hwd_errorCode = _papi_hwd_rem_event(ESI,Event);
        */

         hwd_errorCode=PAPI_HWD_VALUE++;

  if (hwd_errorCode < PAPI_OK) {
    printf("\n hwd_errorCode=%d",hwd_errorCode);
    printf("\n ----------------------------leaving  PAPI_rem_event");
    return(handle_error(hwd_errorCode,NULL));
    }

  /* Always return the hwd_errorCode from hwd ops */

  printf("\n ----------------------------leaving  PAPI_rem_event");
  return(errorCode);
} /* end int PAPI_rem_event(int EventSet, int Event) */


/*   papi.c  func___ 27   */ 
/*========================================================================*/
/* low-level function:                                                    */
/* static int PAPI_rem_events(int EventSet, int *Events, int number)      */
/*                                                                        */
/*  This function performs the same function as PAPI_rem_event,           */
/*  except for a vector of hardware events.                               */ 
/*  number is the number of events to remove.                             */
/*                                                                        */
/*  remove_one_event_by_code calls remove_event.                          */
/*                                                                        */
/*  in remove_event:                                                      */    
/*    1. _papi_hwd_rem_event removes the event from hardware              */
/*    2. remove_event removes the event from the ESI                      */
/*    3. if ESI->NumberOfCounters goes to zero, remove_event calls        */
/*       remove_EventSet to free all memory for the ESI                   */
/*       and take the ESI off the global table.                           */
/*========================================================================*/

int PAPI_rem_events(int EventSet, int *RemEvents, int number)
{
  EventSetInfo *ESI;
  int i, errorCode, ECODE;

  errorCode=PAPI_OK;
  ECODE=PAPI_OK;

  /* determine target ESI structure */
  ESI = PAPI_EVENTSET_MAP.dataSlotArray[EventSet];

  if (( ESI == NULL ) || (number <= 0)) {
    printf("\n ESI is null... oops");
    printf("\n ----------------------------leaving  PAPI_rem_event");
    return(handle_error(PAPI_EINVAL,NULL));
    }


  for (i=0; i<number;i++)
    {
      if(ESI)
      errorCode = remove_one_event_by_code(ESI,RemEvents[i]);
      if( (errorCode < PAPI_OK) && (ESI != NULL)  )
        ECODE=errorCode;
    }

  if(ECODE<PAPI_OK) {
   /* see if the events were freed*/
     printf("\n failure in PAPI_rem_events on at least one event");
   }

  return(ECODE);
} /* end int PAPI_rem_events(int EventSet, int *RemEvents, int number) */

/*   papi.c  func___ 28   */ 
/*========================================================================*/
static int set_multiplex(PAPI_option_t *ptr)
{
  _papi_int_option_t internal_option;
  int retval;

  internal_option.multiplex.ESI = lookup_EventSet(ptr->multiplex.eventset);
  if (!internal_option.multiplex.ESI)
    return(handle_error(PAPI_EINVAL,"No such EventSet"));

  memcpy(&internal_option.multiplex.multiplex,&ptr->multiplex,
         sizeof(PAPI_multiplex_option_t));

  retval = _papi_hwd_ctl(PAPI_SET_MPXRES,&internal_option);
  if (retval < PAPI_OK)
    return(retval);
  else return(PAPI_OK);
}/* end static int set_multiplex(int eventset, PAPI_option_t *ptr) */

/*   papi.c  func___ 29   */ 
/*========================================================================*/
static int get_multiplex(PAPI_option_t *ptr)
{
  EventSetInfo *ESI;

  ESI = lookup_EventSet(ptr->multiplex.eventset);
  if (!ESI)
    return(handle_error(PAPI_EINVAL,"No such EventSet"));

  memcpy(&ptr->multiplex,&ESI->all_options.multiplex,
           sizeof(ESI->all_options.multiplex));
  return(PAPI_OK);
}/* end static int get_multiplex(PAPI_option_t *ptr)*/


/*  papi.c  func___ 30   */ 
/*========================================================================*/
static int overflow_is_active(EventSetInfo *ESI)
{
 /* No overflow active for this EventSet */
  if (ESI->all_options.overflow.eventindex >= 0) 
    return(1);
  else  return(0);
}/* end static int overflow_is_active(EventSetInfo *ESI)*/

/*   papi.c  func___ 31   */ 
/*========================================================================*/
static int set_overflow(PAPI_option_t *ptr)
{
  int retval, ind;
  _papi_int_option_t internal_option;

  internal_option.overflow.ESI = lookup_EventSet(ptr->overflow.eventset);
  if (!internal_option.overflow.ESI)
    return(handle_error(PAPI_EINVAL,"No such EventSet"));

  ind = event_is_in_eventset(ptr->overflow.event, internal_option.overflow.ESI);
  if (ind < PAPI_OK)
    return(ind);

  if (ptr->overflow.threshold < 0)
    return(handle_error(PAPI_EINVAL,"Threshold cannot be less than zero"));

  if (ptr->overflow.threshold > 0)
    if (!ptr->overflow.handler)
      return(handle_error(PAPI_EINVAL,"Overflow handler not specified"));
					
  /* Args are good. Is overflow active? */
  if (    (!overflow_is_active(internal_option.overflow.ESI)) 
       && (ptr->overflow.threshold == 0)  )
    return(PAPI_OK);
    
  retval = _papi_hwd_ctl(PAPI_SET_OVRFLO,&internal_option);
  if (retval < 0)
    return(retval);

  /* ESI->overflow.eventindex = ind;
  ESI->overflow.deadline = ;
  ESI->overflow.milliseconds =;
  memcpy(&ESI->overflow.option,&ptr->overflow,sizeof(ptr->overflow)) */
  return(PAPI_OK);
}/* end static int set_overflow(int eventset, PAPI_option_t *ptr) */

/*  papi.c  func___ 32   */ 
/*========================================================================*/
static int get_overflow(PAPI_option_t *ptr)
{
  EventSetInfo *ESI;
  ESI = lookup_EventSet(ptr->overflow.eventset);
  if (!ESI)
    return(handle_error(PAPI_EINVAL,"No such EventSet"));

  memcpy(&ptr->overflow,&ESI->all_options.overflow,
   sizeof(ESI->all_options.overflow));

  return(PAPI_OK);
}/* end static int get_overflow(PAPI_option_t *ptr) */


/*   papi.c  func___ 33   */ 
/*========================================================================*/
static int set_granularity(PAPI_option_t *ptr)
{
  _papi_int_option_t opt;
  int arg, retval;

  /* Check the args */

  if (ptr == NULL)
    return(handle_error(PAPI_EINVAL,"Invalid option pointer"));

  arg = ptr->granularity.granularity;

  if ((arg < PAPI_GRN_MIN) && (arg > PAPI_GRN_MAX))
    return(handle_error(PAPI_EINVAL,"Invalid granularity"));

  /* Lookup the eventset */
  
  opt.granularity.ESI = lookup_EventSet(ptr->granularity.eventset);
  if (opt.granularity.ESI == NULL)
    return(handle_error(PAPI_EINVAL,"No such EventSet"));
  
  /* Fill in the internal structure */
  
  memcpy(&opt.granularity.granularity,&ptr->granularity,
    sizeof(PAPI_granularity_option_t));
  
  /* Do the low level call */

  retval = _papi_hwd_ctl(PAPI_SET_GRANUL,&opt);
  if (retval < PAPI_OK)
    return(retval);

  /* Store this ESI's options if the above is successful */
  
  memcpy(&opt.granularity.ESI->all_options.granularity,&opt.granularity,
   sizeof(_papi_int_granularity_t));
  return(PAPI_OK);
}/* end static int set_granularity(PAPI_option_t *ptr)*/

/*   papi.c  func___ 34   */ 
/*========================================================================*/
static int set_defgranularity(PAPI_option_t *ptr)
{
  return(PAPI_OK);
}/* end static int set_defgranularity(PAPI_option_t *ptr)*/



/*  papi.c  func___ 35   */ 
/*========================================================================*/
static int get_defgranularity(PAPI_option_t *ptr)
{
  return(PAPI_OK);
}

/*   papi.c  func___ 36   */ 
/*========================================================================*/
static int get_granularity(PAPI_option_t *ptr)
{
  return(PAPI_OK);
}

/*   papi.c  func___ 37   */ 
/*========================================================================*/
static int set_domain(PAPI_option_t *ptr)
{
  _papi_int_option_t opt;
  int arg, retval;

  /* Check the args */
  if (ptr == NULL)
    return(handle_error(PAPI_EINVAL,"Invalid option pointer"));

  arg = ptr->domain.domain;

  if ((arg < PAPI_DOM_MIN) && (arg > PAPI_DOM_MAX))
    return(handle_error(PAPI_EINVAL,"Invalid domain"));

  /* Lookup the eventset */
  
  opt.domain.ESI = lookup_EventSet(ptr->domain.eventset);
  if (opt.domain.ESI == NULL)
    return(handle_error(PAPI_EINVAL,"No such EventSet"));
  
  /* Fill in the internal structure */
  
  memcpy(&opt.domain.domain,&ptr->domain,sizeof(PAPI_domain_option_t));
  
  /* Do the low level call */

  retval = _papi_hwd_ctl(PAPI_SET_DOMAIN,&opt);
  if (retval < PAPI_OK)
    return(retval);

  /* Store this ESI's options if the above is successful */
  
  memcpy(&opt.domain.ESI->all_options.domain,&opt.domain,
    sizeof(_papi_int_domain_t));

  return(PAPI_OK);
}/* end static int set_domain(PAPI_option_t *ptr)*/

/*   papi.c  func___ 38   */ 
/*========================================================================*/
static int get_defdomain(PAPI_option_t *ptr)
{ return(PAPI_OK); }

/*   papi.c  func___ 39   */ 
/*========================================================================*/
static int get_domain(PAPI_option_t *ptr)
{
  EventSetInfo *ESI;
  /* Check the args */

  if (ptr == NULL)
    return(handle_error(PAPI_EINVAL,"Invalid option pointer"));

  ESI=PAPI_EVENTSET_MAP.dataSlotArray[ptr->domain.eventset];
  ESI->all_options.domain.domain.domain = ptr->domain.domain; 

  return(PAPI_OK);
}/* end static int get_domain(PAPI_option_t *ptr)*/ 

/*  papi.c  func___ 40   */ 
/*========================================================================*/
static int set_defdomain(PAPI_option_t *ptr)
{
  return(PAPI_OK);
}/* end static int set_defdomain(PAPI_option_t *ptr) */


/*   papi.c  func___ 41   */ 
/*========================================================================*/
/* This is the latest version of PAPI_set_opt written by Phil Mucci.      */
/*========================================================================*/
int PAPI_set_opt(int option, PAPI_option_t *ptr)
{ int errorCode;

  /* check for initialization */
  errorCode = PAPI_init();
  if (errorCode < PAPI_OK) return(handle_error(errorCode,NULL));

  switch (option)
    {
    case PAPI_SET_DEFDOM:
      return(set_defdomain(ptr));
    case PAPI_SET_DOMAIN:
      return(set_domain(ptr));
    case PAPI_SET_DEFGRN:
      return(set_defgranularity(ptr));
    case PAPI_SET_GRANUL:
      return(set_granularity(ptr));
    case PAPI_SET_MPXRES:
      return(set_multiplex(ptr)); 
    case PAPI_SET_OVRFLO:
      return(set_overflow(ptr));
    case PAPI_DEBUG:
      if ((ptr->debug < PAPI_QUIET) || (ptr->debug > PAPI_VERB_ESTOP)) 
	return(handle_error(PAPI_EINVAL,NULL));
      PAPI_ERR_LEVEL = ptr->debug;
      return(PAPI_OK);
    default:
      return(handle_error(PAPI_EINVAL,"No such option"));
    }
}
/* end int PAPI_set_opt(int option, int value, PAPI_option_t *ptr)*/
/*   papi.c  func___ 42   */
/*========================================================================*/
/*
int PAPI_set_opt(int option, PAPI_option_t *ptr)
{ int retval;
  _papi_int_option_t internal;

  switch(option)
  { case PAPI_SET_MPXRES:
    case PAPI_SET_OVRFLO:
    case PAPI_GET_MPXRES:
    case PAPI_GET_OVRFLO:
    case PAPI_SET_DEFDOM:
    case PAPI_SET_DEFGRN:
    case PAPI_SET_DOMAIN:
    { internal.domain.domain.eventset=ptr->domain.eventset;
      internal.domain.domain.domain=ptr->domain.domain;
      internal.domain.ESI=lookup_EventSet(ptr->domain.eventset);
      retval = _papi_hwd_ctl(PAPI_SET_DOMAIN, &internal); 
      return(retval);
    }
    case PAPI_SET_GRANUL:
    case PAPI_GET_DEFDOM:
    case PAPI_GET_DEFGRN:
    case PAPI_GET_DOMAIN:
    case PAPI_GET_GRANUL:
    default:
      return(PAPI_EINVAL);
    }
}*//* end int PAPI_set_opt(int option,  PAPI_option_t *ptr)*/
/*   papi.c  func___ 43   */ 
/*========================================================================*/
int PAPI_get_opt(int option, PAPI_option_t *ptr)
{
  int errorCode;

  /*check for initialization*/
        errorCode=PAPI_init();
        if(errorCode<PAPI_OK)
	   return(handle_error(errorCode,NULL));

 /* check ptr*/
  if (ptr == NULL)
    return(handle_error(PAPI_EINVAL,"Invalid pointer"));


  switch (option)
    {
    case PAPI_GET_MPXRES:
      return(get_multiplex(ptr)); 
    case PAPI_GET_OVRFLO:
      return(get_overflow(ptr));
    case PAPI_GET_DOMAIN:
      return(get_domain(ptr));
    case PAPI_GET_DEFDOM:
      return(get_defdomain(ptr));
    case PAPI_GET_GRANUL:
      return(get_granularity(ptr));
    case PAPI_GET_DEFGRN:
      return(get_defgranularity(ptr));
    case PAPI_DEBUG:
      ptr->debug = PAPI_ERR_LEVEL;
      return(PAPI_OK);
    default:
      return(handle_error(PAPI_EINVAL,"Invalid option"));
    }
} /* end int PAPI_get_opt(int option, int *value, PAPI_option_t *ptr) */

/*   papi.c  func___ 44   */ 
/*========================================================================*/

int PAPI_set_domain(int domain)
{ 
  PAPI_option_t opt;

  opt.defdomain.domain = domain;
  return(PAPI_set_opt(PAPI_SET_DEFDOM,&opt));
} /* end int PAPI_set_domain(int domain)*/


/*  papi.c  func___ 45   */ 
/*========================================================================*/
/* This function calls the setopt with the option to set the default      */
/* granularity it doesn't operate on an EventSet.                         */
/*========================================================================*/
int PAPI_set_granularity(PAPI_option_t *ptr)
{ int retval;

  retval = PAPI_set_opt(PAPI_SET_DEFGRN,ptr); 
  if(retval<PAPI_OK) return(handle_error(retval, NULL));
  return(retval);
 /* return(PAPI_OK);*/
}/* end  int PAPI_set_granularity(int granularity)*/


/*   papi.c  func___ 46   */ 
/*========================================================================*/
int PAPI_start(int EventSet)
{ 
  int retval;
  EventSetInfo *ESI;

  ESI = lookup_EventSet(EventSet);
  if(ESI == NULL) return(handle_error(PAPI_EINVAL, NULL));

  retval = _papi_hwd_start(ESI);
  if(retval<PAPI_OK) return(handle_error(retval, NULL));

  DBG((stderr,"PAPI_start returns %d\n",retval));
  return(retval);

}/* end int PAPI_start(int EventSet)*/

/*   papi.c  func___ 47   */ 
/*========================================================================*/
int PAPI_stop(int EventSet, unsigned long long *values)
{ 
  int retval;
  EventSetInfo *ESI;

  ESI = lookup_EventSet(EventSet);
  if(ESI==NULL) return(handle_error(PAPI_EINVAL, NULL));

  retval = _papi_hwd_stop(ESI, values);
  if(retval<PAPI_OK) return(handle_error(retval, NULL));

  retval = _papi_hwd_reset(ESI);
  if(retval<PAPI_OK) return(handle_error(retval, NULL));
  
  #if defined(DEBUG)
   if (values)
      {
       int i;
       for(i=0; i<ESI->NumberOfCounters; i++)
          { if(values[i] >= 0)
             printf("\tCounter %d : %lld\n", i, values[i]); 
          }
     }
  #endif

  return(retval);

}/* end int PAPI_stop(int EventSet, long long *values)*/

/*   papi.c  func___ 48    */ 
/*========================================================================*/
int PAPI_reset(int EventSet)
{ int retval;
  EventSetInfo *ESI;

  ESI = lookup_EventSet(EventSet);
  if(ESI == NULL) return(handle_error(PAPI_EINVAL, NULL));

  retval = _papi_hwd_reset(ESI);
  if(retval<PAPI_OK) return(handle_error(retval, NULL));

  DBG((stderr,"PAPI_reset returns %d\n",retval));
  return(retval);
}/* end int PAPI_reset(int EventSet) */

/*   papi.c  func___ 49   */ 
/*========================================================================*/
int PAPI_read(int EventSet, unsigned long long *values)
{ int retval;
  EventSetInfo *ESI;

  ESI = lookup_EventSet(EventSet);
  if ( ESI == NULL ) return(handle_error(PAPI_EINVAL,NULL));

  retval = _papi_hwd_read(ESI, values);
  if(retval<PAPI_OK) return(handle_error(retval, NULL));

  return(retval);
}/* end int PAPI_read(int EventSet, long long *values)*/

/*   papi.c  func___ 50   */ 
/*========================================================================*/
int PAPI_accum(int EventSet, unsigned long long *values)
{ 
  EventSetInfo *ESI;
  int retval, i, bound;
  unsigned long long a,b,c,*increase;

  ESI = lookup_EventSet(EventSet);
  if ( ESI == NULL ) return(handle_error(PAPI_EINVAL,NULL));

  increase = ESI->latest;
  bound = num_counters(ESI);

  for ( i=0 ; i < bound; i++)
    { 
      a = increase[i];
      b = values[i];
      c = a + b;
      values[i] = c;
    }

  retval = _papi_hwd_read(ESI, increase);
  if (retval < PAPI_OK) return(handle_error(retval,NULL));

  retval = _papi_hwd_reset(ESI);
  if (retval < PAPI_OK) return(handle_error(retval,NULL));
  return(retval);
}/* end int PAPI_accum(int EventSet, long long *values)*/

/*  papi.c  func___ 51   */ 
/*========================================================================*/
int PAPI_write(int EventSet, unsigned long long *values)
{ int retval;
  EventSetInfo *ESI; 

  ESI = lookup_EventSet(EventSet);
  if ( ESI == NULL )
    return(handle_error(PAPI_EINVAL,NULL));

  retval = _papi_hwd_write(ESI, values);
  if(retval<PAPI_OK) return(handle_error(retval, NULL));
  return(retval);
}/* end int PAPI_write(int EventSet, long long *values)*/

/*   papi.c  func___ 52   */ 
/*========================================================================*/
/* begin function:                                                        */
/* int PAPI_state(int EventSetIndex, int *status)                         */
/*                                                                        */
/* EventSetIndex is the index N of PAPI_EVENTSET_MAP.dataSlotArray[N].    */
/* This function checks for valid value of N.                             */
/*   0. N<0 not a legal value for array index in c.                       */
/*   1. N=0 reserved for internal use, not valid.                         */
/*   2. N => PAPI_EVENTSET_MAP.totalSlots, not valid.                     */
/*   3. PAPI_EVENTSET_MAP[N]=NULL, no EventSet for this N.                */
/*                                                                        */
/* This function reports the state of the entire EventSet designated by   */
/* EventSetIndex by setting the value of *status.                         */
/* If the call succeeds, then the value of *status is set to:             */
/*   a.  PAPI_RUNNING=1.                                                  */
/*   b.  PAPI_STOPPED=2.                                                  */
/*                                                                        */
/* The return value of this function tells if the call succeeded.         */
/*   a.  return(PAPI_OK) [success]                                        */
/*   b.  return(PAPI_EINVAL) [invalid argument]                           */
/*========================================================================*/

int PAPI_state(int EventSetIndex, int *status)
{
    EventSetInfo *ESI;

    /* check for good EventSetIndex value*/
    if (   (EventSetIndex < 1)
        || (EventSetIndex >= PAPI_EVENTSET_MAP.totalSlots)
        || (PAPI_EVENTSET_MAP.dataSlotArray[EventSetIndex]==NULL))
           return (handle_error(PAPI_EINVAL,NULL));

   /* if( PAPI_EVENTSET_MAP.dataSlotArray[EventSetIndex]->state )
      is a good value, assign *status */

    ESI=PAPI_EVENTSET_MAP.dataSlotArray[EventSetIndex];
    *status = ESI->state;
     return(PAPI_OK);
}/* end int PAPI_state(int EventSetIndex, int *status)*/

/*   papi.c  func___ 53   */ 
/*========================================================================*/
/* low-level function:                                                    */
/* static int PAPI_list_events(int EventSet,int *EventCodes,int *number)  */
/*                                                                        */
/* This function decomposes EventSet into the hardware                    */
/* Events it contains. number is both an input and output.                */
/* number as input:  total of all events ever added [active + inactive ]  */
/* number as output: total of all active events at this time              */
/*========================================================================*/

int PAPI_list_events(int EventSet, int *EventCodes, int *number)
{
   EventSetInfo *ESI;
   int i,nActive;

  /* determine target ESI structure */
  ESI=lookup_EventSet(EventSet);
  if ( ESI == NULL )
      return(handle_error(PAPI_EINVAL,NULL));

  nActive=0;/*count number of active events*/

  for(i=0;i<*number;i++) {
     EventCodes[i]=0;
     EventCodes[i]=ESI->EventCodeArray[i];
     if(EventCodes[i]>0)nActive++;
  }/* end for i */

  *number=nActive;

   return(PAPI_OK);
}/* end int PAPI_list_events(int EventSet, int *EventCodes, int *number)  */
  

/*end*/
