// file runPBinit.c
//============================================================
//Introduction to runPBinit.c=================================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================
// The purpose of runPBinit.c is to run the appletviewer
// to display PacketBuilder (PBinit.class) with PBinit.html.
// The executable file for this c program is named:
//     runBPinit
==============================================================*/

#include<stdio.h>
#include<string.h>
#include<stdlib.h>

#define NTERM printf("\n normal termination %s %s %s\n",__FILE__,__DATE__,__TIME__);

main(int argc, char *argv[]) {

system("appletviewer PBinit.html");

NTERM;

}//end main
