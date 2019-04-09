/* file CS112/biorhythm6.c */
/* read in date of birth, date of query; calculate biorhythms */
/* BIO-RHYTHM by Bernard Gittelson, Warner Books, 9th ed.*/

/* DO IT RIGHT FROM DWS */
/* function prototype:   void testf(int *cl, char xarray[]);
   function call:             testf(    &cl,      xarray  );
   functon header:       void testf(int *cl, char xarray[])
   function prototype:   void test2(struct datatag *psdummy);
   function call:             test2 (              subject);
   function header:      void test2(struct datatag *psdummy)
    {in function use names like dummyname.month}p267 c-21 
*/

#include<stdio.h>
#include<math.h>
struct datatag {
   char subname[80]; /*name of subject*/
   int month, day, year;  /*data input by user */
   int dateval;          /* day of year translation of month-day */
   float calcyear, remainder; /*fmod vars to determine leap year */
   int iremainder;  /* index sent to yearlength array for leap year */
   int deltadays;   /* for subject = 365(366) minus dateval of birth */
                   /*  for query = totaldays from query to birth */
               } subject,query;
struct datatag *ps;  /*pointer to structure datatag subject*/
struct datatag *pq;  /*pointer to structure datatag query */
int loop1,loop2,loop3,cont1,continu1,nplace;
int *idate[3];  /* idate[1]=mo, [2]=day, [3]=year */
int dayvalue;  /* day-of-year value, like dateval in datatag */
char alphamonth[10];  /* write month as word */
char *amonth[13]={"xx","January","February","March","April","May","June","July", "August","September","October","November","December"};
int valmonth[13]={0,0,31,59,90,120,151,181,212,243,273,304,334};
void readsubj(struct datatag *ps);
void readquery(struct datatag *pq);
void calctotaldays(struct datatag *ps, struct datatag *pq);
void redate(int *dayv,int *yearv,char pmonth[],int *pz1,int *pz2,int *pz3);
void answer(int *continu1,int *nplace,struct datatag *ps); /*yes or no*/
void xbiocalc(int *xdays,int *xvalday,int *xvalyear);
void xcalc(char title[],int carray[],int *cycle,int *neg,
  int *daysalive,int *nexthi);
int xdays,xvalday,xvalyear,nexthi;
main()
{
printf("\n Welcome to CS112/biorhythm2.c \n");
ps=&subject;
pq=&query;
for (loop1=0; loop1<9; loop1++)
 {
readsubj ( ps );
   for (loop2=0; loop2<9; loop2++)
    {
   readquery( pq ); 
   calctotaldays( ps, pq );
   nplace=loop2;
   cont1=2;
   answer (&cont1,&nplace,ps);
   loop2=nplace;
    } /* end loop2 */
nplace=loop1;
cont1=1;
answer (&cont1, &nplace,ps);
loop1=nplace;
 } /*end loop1*/
/*
printf("\n end program. good-bye \n");
*/
} /*end main*/
void readsubj(struct datatag *ps)
{
  int bdummy;
  int rem[4]={1,0,0,0}; /* leap year remainder=0 as index to array*/
  int yearlength[4]={366,365,365,365};
  int daysleft, daysalive;
  printf ("\n Please enter subject's name: ");
  scanf(" %s",ps->subname);
  printf("\n Please enter %s's date of birth:",ps->subname);
  printf("\n   integer month:");
  scanf("%d",&ps->month);
  printf("     integer day:");
  scanf("%d",&ps->day);
  printf("     integer year (all four digits):");
  scanf("%d",&ps->year);
/*
  printf("%s was born on %s %d, %d.",ps->subname,amonth[ps->month],
    ps->day,ps->year);
*/
  ps->calcyear=ps->year;
  ps->remainder=fmod(ps->calcyear,4.0);
  ps->iremainder=ps->remainder;
  ps->dateval=valmonth[ps->month]+ps->day;
  bdummy=ps->dateval;
  if (bdummy>59) ps->dateval=ps->dateval+rem[ps->iremainder];
/*
  printf("\n  birthdate = %d (day of year value)",ps->dateval);
*/
  daysleft=yearlength[ps->iremainder]-ps->dateval;
  daysalive=daysleft+1;
/*
  printf("\n Daysleft in year after birthdate=%d",daysleft);
  printf("\n In first year of life, subject lives %d days through Dec. 31",
   daysalive);
*/
  ps->deltadays=daysleft;
} /*end readsubject*/

void readquery(struct datatag *pq)
{
  int qdummy;
  int rem[4]={1,0,0,0};
  printf("\n Please enter date of query:");
  printf("\n   integer month:");
  scanf("%d",&pq->month);
  printf("     integer day:");
  scanf("%d",&pq->day);
  printf("     integer year (all four digits):");
  scanf("%d",&pq->year);
/*
  printf("\n Query date is %s %d, %d.",amonth[pq->month],
    pq->day,pq->year);
*/
  pq->dateval=valmonth[pq->month]+pq->day;
  qdummy=pq->dateval;
  pq->calcyear=pq->year;
  pq->remainder=fmod(pq->calcyear,4.0);
  pq->iremainder=pq->remainder;
  if (qdummy>59) {pq->dateval=pq->dateval+rem[pq->iremainder];}
/*
  printf ("\n querydate= %d (day of year value)",pq->dateval);
*/
}
 void answer (int *continu1, int *nplace,struct datatag *ps) 
{
char reply,dummy;
int z, Nplace,Cont1;

Cont1=*continu1;
  if (Cont1==1)
   {printf("\n If you wish to end the program now, type y:  ");
    scanf(" %c",&reply); dummy=getchar();
    if (reply=='y') 
       {printf("\n End biorhythm program.  GOOD-BYE!\n");
        *nplace=99;
       }  
    else {printf("\n Prepare to enter new subject.");}
   }

 if (Cont1==2)
   {printf("\n If you wish to end queries on %s, type y:",ps->subname);
    scanf(" %c",&reply); dummy=getchar();
    if (reply=='y')
    {printf("\n End queries on %s.",ps->subname);
     *nplace=99;
    }
    else {printf("\n Prepare to enter next query on %s.",ps->subname);}
   }
}
void calctotaldays(struct datatag *ps, struct datatag *pq)
{ 
int totalyears,totaldays,daysalive;
int xvalday,xvalyear;
int newiremainder;
double newcalcyear,newremainder;
int y1,y2,y3;
int rem[4]={366,365,365,365};
daysalive=ps->deltadays + 1;
y2=1;
totalyears=pq->year-ps->year-1;
if (pq->year==ps->year)
   {totaldays=pq->dateval-ps->dateval+1;
    y2=0;}

if (pq->year==(ps->year+1))
   {totaldays=daysalive+pq->dateval;
    y2=0;}

if (pq->year==(ps->year+2))
   {newcalcyear=ps->year+1;
    newremainder=fmod(newcalcyear,4.0);
    newiremainder=newremainder;
    totaldays=daysalive+pq->dateval+rem[newiremainder]; 
    y2=0;}

if (pq->year<ps->year)
   {printf("\n  OOPS! Query date before birthdate! Try again!");
    y2=0;}

if (y2==1)
{ /* start y2 loop*/
y1=ps->year+1;
y3=pq->year;
totaldays=daysalive+pq->dateval;
for(loop3=y1;loop3<y3;loop3++)
{
  newcalcyear=loop3;
  newremainder=fmod(newcalcyear,4.0);
  newiremainder=newremainder;
  totaldays=totaldays+rem[newiremainder];
}/*end loop3*/ 
} /*end y2 loop*/
pq->deltadays=totaldays;
printf("\n totaldays= %d, birthdate=%d-%d-%d, querydate=%d-%d-%d",
 totaldays,ps->month,ps->day,ps->year,pq->month,pq->day,pq->year);
xvalday=pq->dateval;
xvalyear=pq->year;
xbiocalc (&totaldays,&xvalday,&xvalyear); 
/*
printf("\n end function calctotaldays \n");
*/
}


/* function redate from file redate2.c 
int qdate,qyear,pz1,pz2,pz3; 
char pmonth[20];
void redate(int *qdate,int *qyear,char pmonth[], int *pz1,int *pz2, int *pz3);
redate (&qdate,&qyear,pmonth,&pz1,&pz2,&pz3);
void redate(int *dayv,int *yearv,char pm[],int *pz1,int *pz2, int *pz3)
*/
void redate(int *dayv,int *yearv,char pm[],int *pz1,int *pz2,int *pz3)
{
/* pz1 integer month
   pz2 integer day
   pz3 integer year */
int leapmonth=2;
int leapday=29;
int loop8, nextmonth, returnz,days,diff,tdays,tyear;
int loop9,xdays;
float cyear,cremainder;
int rday,rmonth,ryear;
int ciremainder=0;
int num[32]={0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
    20,21,22,23,24,25,26,27,28,29,30,31};
char amo[16][20]={"xx","January","February","March","April","May","June","July",    "August","September","October","November","December","January","zz","yy"};
int valmo[16]={0,0,31,59,90,120,151,181,212,243,273,304,334,367,396,400};
char *pmonth;
/*
printf("\n you are inside returndate");
*/
returnz=0; /* returnz=1 when  special case leap year feb 29 */
tdays=*dayv;
tyear=*yearv;
*pz3=*yearv;
/*
  printf("\n *dayv=tdays=%d, *yearv=tyear=%d",tdays,tyear);
*/  
  /*special case:  tdays less than 1*/  
  if (tdays<1)
    {
       if (tdays==0) {tdays=-1;}
     tdays=366+tdays;
     tyear=tyear-1;
     *pz3=tyear;
      returnz=2;
    }

  /*special case:  determine leapyear*/
  if (returnz==0)
  {
  cyear=tyear;
  cremainder=cyear/4.0;
  ciremainder=cyear/4.0;
/*
  printf ("\n cremainder=%6.2f, ciremainder=%d",cremainder,ciremainder);
*/
  cremainder=(cremainder-ciremainder)*4.0;
  ciremainder=cremainder;
/*
  printf ("\n cremainder=%6.2f,ciremainder=%d",cremainder,ciremainder);
  printf("\n cyear=%5.1f, cremainder=%1.1f",cyear,cremainder);
*/
    if (ciremainder==0)
     {
        xdays=tdays;
      { if (tdays==60)
            {
            *pz1= leapmonth;
            *pz2=leapday;
             pm="February";
          /*
             printf ("\n date: %d - %d - %d",*pz1,*pz2,*pz3);
             printf ("\n pm: %s",pm);
          */
              returnz=1;
             }
        } 
        if (xdays>60) {tdays=xdays-1;}
/*
        printf("\n recalc tdays for leapyear=%d",tdays);
*/
      } 
   } 

  /*special case:  tdays greater than 365 (even after leapyear calc)*/
  if (tdays>365)
    {
     tdays=tdays-365;
     tyear=tyear+1;
     *pz3=tyear;
      returnz=2;
    }
   if (returnz==2){returnz=0;}
   if (returnz==0)
         {
  for (loop8=1;loop8<13;loop8++)
  {
   nextmonth=loop8+1;
    if (tdays<valmo[nextmonth])
        { for(loop9=0;loop9<15;loop9++)
           {pm[loop9]=amo[loop8][loop9];}
         *pz1=num[loop8];
         diff=tdays-valmo[loop8];
         *pz2=num[diff];
         loop8=20;}
 } /*end loop8*/
       /*
         printf("\n date: %d - %d - %d",*pz1,*pz2,*pz3);
         printf("\n pm: %s",pm);
         printf("\n  %s %d, %d",pm,*pz2,*pz3);
      */
         } /*end returnz=0 loop */
/*
    printf ("\n end function returndate\n"); 
*/
} /*end function returndate */  

void xbiocalc(int *xdays,int *xvalday,int *xvalyear)
/* developed as file xbio.c */
{  /*line 22*/
int totdays,iremainder;
int daypercent;
float fdays,fremainder;
char titleint[]="intellectual";
char titleemo[]="emotional";
char titlephy[]="physical";
int cycle; /* number of days in cycle: int=33,emo=28,phy=23*/
int negatron; /*number of days from birth to first high: i=9,e=7,p=6*/
int daysalive;
int calcint[34]={100,94,88,82,76,70,64,58,52,46,39,33,27,15,
  9,3,3,9,15,21,27,33,39,46,52,58,64,70,76,82,88,94,100};
int calcphy[24]={100,91,83,74,65,57,48,39,30,22,13,4,4,13,22,
  30,39,48,57,65,74,83,91,100};
int calcemo[29]={100,93,86,79,71,64,57,50,43,36,29,21,14,7,0,7,
  14,21,29,36,43,50,57,64,71,79,86,93,100};
int Xvalday,Xvalyear,nexthi,pz1,pz2,pz3;
char pmonth[20];

Xvalyear=*xvalyear;
daysalive=*xdays;
/* intellectual cycle=33days   negatron=9*/
cycle=33;
negatron=9;
xcalc(titleint,calcint,&cycle,&negatron,&daysalive,&nexthi);
Xvalday=*xvalday+nexthi;
redate(&Xvalday,&Xvalyear,pmonth,&pz1,&pz2,&pz3);
printf("\n The next intellectual high occurs on %s %d, %d.\n",
 pmonth,pz2,pz3);

/* emotional cycle=28  negatron=7 */
cycle=28;
negatron=8;
xcalc(titleemo,calcemo,&cycle,&negatron,&daysalive,&nexthi);
Xvalday=*xvalday+nexthi;
redate(&Xvalday,&Xvalyear,pmonth,&pz1,&pz2,&pz3);
printf("\n The next emotional high occurs on %s %d, %d.\n",
 pmonth,pz2,pz3);


/* physical cycle=23  negatron=6*/
cycle=23;
negatron=6;
xcalc(titlephy,calcphy,&cycle,&negatron,&daysalive,&nexthi);
Xvalday=*xvalday+nexthi;
redate(&Xvalday,&Xvalyear,pmonth,&pz1,&pz2,&pz3);
printf("\n The next physical high occurs on %s %d, %d.\n",
 pmonth,pz2,pz3);

} /*end xbiocalc*/

void xcalc(char title[],int carray[],int *cycle,int *neg,
  int *daysalive,int *nexthi)
{  /*developed as file xbio.c*/
int totdays,iremainder;
int daypercent;
float fdays,fremainder,fcycle;

fdays=*daysalive-*neg;
fcycle=*cycle;
fremainder=fmod(fdays,fcycle);
iremainder=fremainder;
daypercent=carray[iremainder];
printf("\n This is day %d of the %s cycle, a %d day cycle.",
     iremainder,title,*cycle);
/*
printf("\n There are %d days in this cycle.",*cycle);
*/
printf("\n This puts %s's %s capacity at %d percent.",
  ps->subname,title,daypercent);

*nexthi=*cycle - iremainder;   
} /* end xcalc */
