// file GreatestCommonDenomenator.c
// adapted from Sedgewick, Algorythms in c++ 
// Euclid's algorythm for greatest common denomenator, gcd

/* This is part of a series of programs that go from a very
   simple static version to a more complex interactive version
   of solving Euclid's Algorithm to find Greatest Common Denomenator
   for integers.

   In this version, file i/o is introduced, but not implemented. 
   You need the file library functions (fstream.h).
   

   For exhaustive discussion see Schildt c++: The Complete Reference
   pages 441-465.
   
   In this example I use an explicit call to open for the
   files my_input_file and my_output_file.

   You may also use a constructor function if the system
   supplied default values for your files are okay.
    ifstream my_input_file("test1");
    ofstream my_output_file("test2");

   You use the same cin>> and cout<< for files as for
   keyboard.
 
   Close all files at the end.
*/
#include<iostream.h> 
#include<fstream.h>
ifstream my_input_file;
ofstream my_output_file;
class my_class {
   public:
   get_files(int);
   get_answer(); 
   int gcd(int u, int v);
   char REPLY();
               };
int my_class::gcd(int u, int v)
{if (v==0) return u;
 while (u>0) { if (u<v) {int t=u; u=v; v=t;}
                u=u-v;
              }
  return v;
}
int my_class::get_answer() {
int x=1,y;
  cout<<"\n Please enter an integer for x:  "; cin>>x;
  cout<<"\n Please enter an integer for y:  "; cin>>y;
  if (!x  && !y) return(-1);
  if (!x  || !y) cout<<"\n gcd not valid for zero parameter";
  cout <<"\n x="<<x<<", y="<<y<<", gcd="<<gcd(x,y)<<endl;
  return(gcd(x,y));
}
int  my_class::get_files(int n)
{
/* n=1, beginning of program
   The function get_files explicitly opens
   one input file and one output file.
   A one is returned upon success.
   A zero is returned upon failure.

   n=2, end of program 
   The function get_files closes the files.
*/
ifstream my_input_file;
ofstream my_output_file;

if(n==1)//open files
{
  my_input_file.open("test1",ios::in,0); //specify file for input
  if(!my_input_file){
                     cout<<"\n Cannot open input file.\n";
                     return(0);
                    }
  //my_output_file.open("test2", ios::out |     //specify file for output
  //                           ios::trunc,0); //overwrite existing file
  my_output_file.open("test2", ios::out | ios::trunc,0); 

  return(1);
}
if(n==2)//close files
{
   my_output_file.close();
   my_input_file.close();
   return(1);
}
}

char my_class::REPLY()
{
  char areply;
  cout<<"\n Do you wish to continue? (y/n):  "; cin>>areply;
  return(areply);
}
main()
{
int termination=0;
char reply;
int  done;
my_class a;

 a.get_files(1);

 for (int i=0;i<5;i++)
 {
  cout<<"\n i="<<i;
  done=a.get_answer();
  cout<<"\n done="<<done;
  reply=a.REPLY();
  if(reply=='n') break;
 }

 a.get_files(2);
 
cout<<"\n normal termination sed6.c\n Good day.\n\n";
}
