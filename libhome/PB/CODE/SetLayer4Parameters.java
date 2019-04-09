//file: SetLayer4Parameters.java
//============================================================
//Introduction to Class SetLayer4Parameters===================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================

The purpose of the class SetLayer4Parameters is to select
the correct templates for the final display Panels F4
(transport protocol header).

This class is called by class PBconstr in response to a
mouse-click event on the Choice button Ch4.  

Selection of protocol template (tcp or udp) is
accomplished by means of a switch statement inside 
method itemStateChanged.
==============================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

class SetLayer4Parameters implements ItemListener {

	private TextArea ta;	   // Layer 4 panel TextArea display
	private TextArea f4;       // F4, final display for Layer 4


	private int Nlayer;// 5=500,4=400,3=300,2=200,1=100
	private int index;
	private int indexSum;
	private int kf; // fix index for StringBuffer udptemplate
	private int kb; // bin index for StringBuffer udptemplate
        int i;

	private StringBuffer tcptemplate;
	private StringBuffer udptemplate;
    	private String       templatechoice;
        private Choice       ch4;
        private String       f4update;


	//Constructor for SetLayer4Parameters
	public  SetLayer4Parameters(Choice CH4,
        TextArea Ta,TextArea F4, StringBuffer TCPtemplate,
        StringBuffer UDPtemplate, int N) {

                ch4=CH4;
	    	ta = Ta;//Layer 4 Panel
		f4=F4;//Final Text area for Layer 4
		Nlayer = N;
		tcptemplate=TCPtemplate;
		udptemplate=UDPtemplate;

		}//end constructor
//==================================================================
//==================================================================

	public void itemStateChanged (ItemEvent e) {
		Choice choice = (Choice) e.getItemSelectable();
		index=choice.getSelectedIndex();
        	indexSum=index+Nlayer;
		StringBuffer this_selection = new StringBuffer();

	switch(indexSum) {

        case 400: {
	ta.setText( "Transport Layer makes decisions based on "
                  +"port numbers and flags.");
	templatechoice = new String("Transport Layer");
	break;}

	case 401: {
	ta.setText(  "TCP packet.  Needs port numbers and flags."
	           + " The flags are set to zero if ignored.");
	templatechoice = new String(tcptemplate);
	break;}

	case 402: {
	ta.setText(  "UDP packet.  Needs port numbers.  If you "
	            + "set the TCP flags, they are discarded.");
	templatechoice = new String(udptemplate);
	break;}

	}//end switch

        if(ch4.getSelectedIndex()==2) f4update=new String(udptemplate);
        else                          f4update=new String(tcptemplate);
        f4.setText(f4update);

	}//end itemEvent
//==================================================================
//==================================================================

//from SetHostParameters.int2BinaryOctet(int NUM)
public String Int2BinaryOctets(int NUM, int OCTETS) {

//This function calculates the binary string that represents
//The integer NUM by the method of comparing to a bit mask.
//This function returns a string to the calling function.
//Although java has a library function for this, I want
//to control the number of bits of the 32-bit java integer
//to be displayed.


int N=NUM;
int Noctets=OCTETS;//number of octets in the string

int mask=1;
mask<<=(8*Noctets)-1;

//initial   mask= 00000000 00000000 00000000 00000001
//Noctets=1 mask= 00000000 00000000 00000000 10000000
//Noctets=2 mask= 00000000 00000000 10000000 00000000
//Noctets=3 mask= 00000000 10000000 00000000 00000000
//Noctets=4 mask= 10000000 00000000 00000000 00000000

// The StringBuffer A is built in the for loop.
StringBuffer A = new StringBuffer();

int i,j;
for(j=0;j<Noctets;j++) {
for(i=0;i<8;i++) {

  //if N has a 1 at bit[i], A.append( '1' )
  //else                    A.append( '0' )
  A.append((N&mask) ==0 ? '0' : '1');

  //right shift mask 1 place, no sign bit
  mask >>>=1;


}//end for(i)
  A.append("   ");//space between octets
}//end for (j)

  A.append("\t");//tab at end of datafield

String BINoctet = new String ();
BINoctet = BINoctet + A;
return(BINoctet);

}//end method int2BinaryOctets(String NUM)


//==================================================================
//==================================================================
//==================================================================
//==================================================================
//==================================================================
//==================================================================
//==================================================================
//==================================================================


/*
public String Int2BinaryOctets(String SNUM,int INUM,int xNOCTETS){
//
//This method works in one of 2 ways.
//
//   1.  SNUM =      non-empty string
//       INUM =      -1
// 		 xNOCTETS  = number of octets
//
//   2.  SNUM =      an ignored string
//	     INUM =      a positive integer
//		 xNOCTETS  = number of octets
//
//In situation 1:
//The function takes as input a String sNUM that represents
//the int NUM.  This function converts sNUM to NUM. Then it
//follows the same path as case 2.
//
//In situation 2:
//The function takes a input an int NUM and then calculates
//the binary bit string (StringBuffer A) that corresponds to
//the binary value of NUM. StringBuffer A is filled from the left
//most bit to the right most, then copied to the String BINSTRING,
//which is returned to the calling function.
//The binary string BINSTRING is calculated using the method
//of comparing the number (NUM) to a bit mask (mask);

//The number of octets in the returned string is specified
//by the calling argument Noctets.

//This function is similar to INT2BinaryOctet which helps
//calculate the binary representation of ip and ethernet
//bit strings.  This is a more general function that works
//for normal numbers.

int Noctets=xNOCTETS;
int mask=1; //initial   mask= 00000000 00000000 00000000 00000001
            //Noctets=1 mask= 00000000 00000000 00000000 10000000
            //Noctets=2 mask= 00000000 00000000 10000000 00000000
            //Noctets=3 mask= 00000000 10000000 00000000 00000000
            //Noctets=4 mask= 10000000 00000000 00000000 00000000

mask<<=(8*Noctets)-1;

int situation;
int NUM;
//SITUATION 1------------------------------------
situation=INUM;
if(situation<0) {
//To convert String object to Integer object
//make an Integer object and a String object.
Integer xNUM = new Integer(0);
String  sNUM = new String();
sNUM = sNUM + SNUM;

//convert Integer object xNUM to int value NUM
NUM = xNUM.parseInt(sNUM,10);
}
else {
//SITUATION 2------------------------------------
NUM=INUM;
}

// The StringBuffer A is built in the for loop.
StringBuffer A = new StringBuffer();

int i,j;
for(i=0;i<Noctets;i++) {
  for (j=0;j<8;j++) {

    //if NUM has a 1 at bit[(i*8)+j-1], A.append( '1' )
    //else                              A.append( '0' )
    A.append((NUM&mask) ==0 ? '0' : '1');

    //right shift mask 1 place, no sign bit
    mask >>>=1;
    }//end for(j)

    A.append("   "); //space between octets

}//end for(i)

A.append(" \t");//tab at end of datafield

String BINSTRING = new String ();
BINSTRING = BINSTRING + A;
return(BINSTRING);

}//end method Int2BinaryOctets(String NUM, int INUM, int Noctets)
//==================================================================
//==================================================================
*/
public String INT2FixOctets(String SNUM, int INUM, int NOCTETS) {

//This method works in one of 2 ways.
//
//   1.  SNUM =      an ignored string
//	     INUM =      a positive integer
//		 xNOCTETS  = number of octets
//
//   2.  SNUM =      non-empty string
//       INUM =      -1
// 		 xNOCTETS  = number of octets
//
//In situation 1:
//The function receives a positive integer as input.
//This must be converted to a String, then the function
//follows the same path as situation 2.
//
//In situation 2:
//The function receives a String that corresponds to some
//positive integer.  Based on NOCTETS (number of octets)
//a "fix" display string that shows the number followed by
//the correct number of underscores is built.
//
//For example:  Given "13" and NOCTETS=1
//              fix string:  13______
//
//              Given "13" and NOCTETS=2
//              fix string:  13______   ______
//

int Noctets   = NOCTETS;
String sNUM   = new String();
String FixNUM = new String();

Integer jnum = new Integer(0);
int situation;
situation=INUM;
int inum;
inum=INUM;

if(situation>0) {//situation 1
   inum=INUM;
   sNUM = sNUM + jnum.toString(inum);
   }
else {//situation 2
   sNUM = sNUM + SNUM;
   }

int i,j,k,m;
j=sNUM.length();

m=0;
for(i=0;i<Noctets;i++) {

	for(k=0;k<8;k++) {
	if(m<j) FixNUM = FixNUM + sNUM.charAt(m);
	else    FixNUM = FixNUM + '_';
	m++;
	}//end for(k)

	FixNUM=FixNUM + "   ";//spacing between octets

}//end for(i)

FixNUM=FixNUM + " \t";

return(FixNUM);

}//end method INT2FixOctets

//==================================================================
//==================================================================


}//end SetLayer4Parameters
