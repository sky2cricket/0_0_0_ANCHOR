// file matrixPrint.c a program in c++
// some simple i/o with c++
// enter and display a 4 x 4 matrix

#include<iostream.h>
#include<stdlib.h>
#include<stdio.h>
void print_a_row(int [4][4],int,int);
void print_all_rows(int [4][4],int,int);
void print_one_element(int [4][4],int,int);
void read_a_row(int [4][4],int, int );
void read_first_row(int [4][4],int ,int *);
//class one_row{
//              int row[4];
//              int read_one_row(int [4],int);
//             }
int main()
{
char *end_message={"\n\n normal termination mat50.c \n good day\n\n"};
char *begin_message={"\n welcome to program mat50.c \n"};
char reply;
int row[4],mrow[4][4],n,nncols,done=0,thisrow,thiscol;
int  nrows=4;
int  ncols=4;

cout << begin_message;

  read_first_row(mrow,0,&ncols);
  cout << "\n in main ncols="<<ncols<< endl;
  //print_a_row(mrow,0,ncols);
  done=0;

for (int loop1=1;loop1<nrows;loop1++)
{      read_a_row(mrow,loop1,ncols);
    //   print_a_row(mrow,loop1,ncols);
}
  print_all_rows(mrow,nrows,ncols);
  print_one_element(mrow,nrows,ncols);

  cout << end_message;

} //end main
void print_a_row(int mrow[4][4],int thisrow,int ncols)
{
// the purpose of function print_a_row is to 
// print one row (called thisrow) of the matrix
  
     for(int n=0;n<ncols;n++) cout << " "<< mrow[thisrow][n];
}
void read_a_row(int mrow[4][4],int thisrow,int ncols)
{
// the purpose of function read_a_row is to read a
// single row of mrow array identified as thisrow
// using the ncols value obtained in read_first_row
   char *msg1={"\n begin read_a_row"};
  int n=0,newcols,done=0,one=0;
  char reply;
 
  //cout << msg1<< endl;
  cout << "\n Please enter "<<ncols<<" integer values for row "<<thisrow<<endl;
  for(int j=0;j<ncols;j++) cin>>mrow[thisrow][j];
}
void print_all_rows(int mrow[4][4],int nrows,int ncols)
{
// the purpose of function print_all_rows is to
// print the rows in a block
   cout <<"\n      print_all_rows\n";

   for(int thisrow=0;thisrow<nrows;thisrow++)
    { 
      cout << "\n      ";
      print_a_row(mrow,thisrow,ncols);
    }
      cout << "\n ";
}
void print_one_element(int mrow[4][4],int nrows,int ncols)
{
// the purpose of function print_one_element is
// to select a single element of array and print

   int thisrow,thiscol,done=0;
   while(!done)
          {done=1;
           cout << "\n thisrow can equal from 0 to "<< nrows-1;
           cout << "\n Please enter value for thisrow:  ";
           cin  >> thisrow;
           if (thisrow>nrows-1)
            { cout << "\n thisrow value out of range, nrows = "<<nrows; 
              cout << "\n thisrow can equal from 0 to "<< nrows-1;
              done=0;}
          }
   done=0;
   while(!done)
          {done=1;
           cout << "\n thiscol can equal from 0 to "<< ncols-1;
           cout << "\n Please enter value for thiscol:  ";
           cin  >> thiscol;
           if (thiscol>ncols-1)
            { cout << "\n thiscol value out of range, ncols = "<<ncols; 
              cout << "\n thiscol can equal from 0 to "<< ncols-1;
              done=0;}
          }

   cout << "   mrow["<<thisrow<<"]["<<thiscol<<"]="<<mrow[thisrow][thiscol];
}

void read_first_row(int mrow[4][4],int thisrow,int *ncols)
{
// the purpose of function read_first_row is to read a
// single row of mrow array identified as thisrow
// while(scanf(" %d",&number[a++])); from stat4.c
// uses the scanf return value to count ncols     
//while(scanf(" %d",&number[a++]));
//cout << "\n a=" << --a;
//for(n=0;n<a;n++)cout << "\n number["<<n<<"]="<<number[n];
//cout << end_msg;
   char *msg1={"\n begin read_first_row"};
   char *msg2={"\n Please enter three values for row zero. "};
   char *msg3={"\n End scanf with any alpha character, such as j.\n"};
   char *msg4={"\n Do you wish to keep these values? (y/n)"};
  int n=0,newcols,done=0,one=0;
  char reply;
 
  //cout << msg1 <<  endl;
  cout << msg2 << msg3 << endl;
  while(!done)
        {done=1;
         while(scanf(" %d",&mrow[thisrow][n++]));
         *ncols=n-1;
         cout<< "\n ncols=" <<*ncols<<endl;
         //print_a_row(mrow,0,*ncols);
         cout << "\n Do you wish to continue with these values? (y/n):  "; 
         cin  >> reply;
         if (reply=='n'){done=0; cout<< "try again"<< endl;}
        }
}
