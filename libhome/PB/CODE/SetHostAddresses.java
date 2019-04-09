//file: SetHostAddresses.java
//============================================================
//Introduction to Class SetHostAddress========================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================
This class sets the TextFields for the host panels,
based upon ChoiceButton selections.

The purpose of the class SetHostAddress is to update 
various display fields based upon choices made for 
Source Host and Destination Host. 

The updated display fields are:

     T7a: source host ip address
     T7b: source host ethernet address
     T6a: destination host ip address
     T6b: destination host ethernet address
     F3:  ip layer final display
     F1:  mac layer final display

The updated templates are:

     ipv4template
     ipv6template
     ethtemplate
     toktemplate
     fdditemplate 
   

The class SetHostAddress is called by class PBconstr in 
response to a mouse-click event on one of the HostName 
Choice buttons (Ch7 or Ch6).  The determination of 
host address is accomplished by a switch statement 
in method itemStateChanged below. 

Binary values of decimal port numbers are calculated in
method int2BinaryOctet.  Standard JAVA conversion from
decimal to binary was not useful because these data are 
not standard JAVA integers, but dotted decimal and
dotted hex values. 

Other methods in this function are text string 
manipulators to create correct format for the
PacketBuilder 3 row display.

        SetFIXaddr (for row 2 display)
        SetBINaddr (for row 3 display)

This class contains logic to detect and correctly
display loopback address. (Plus logic to detect a change
from loopback to ordinary address format.)

This class contains logic to correctly set (and unset)
the network gateway address for destinations outside
the local network (Ayres Hall).

All addresses are stored statically inside the program,
because of the security limitation of JAVA 1.1.2 that 
prevents access to system parameters by users who do
not "own" the executables. (i.e. users who do not
download all of the executables into their own file
areas.)  The PacketBuilder program is meant for wide  
use and it would be a waste of system resources to
have every single cs100 student download all of the 
PacketBuilder class files.  
============================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;


public class SetHostAddresses implements ItemListener   {

	private TextField t7ip,t7eth,t6ip,t6eth;
	private String ipaddr;
	private String ethaddr;

	private int index;
	private int indexSum;
	private int whichHost;//which host: source=1;destin=2;

    	private int jfs,jfd; // fix index for StringBuffer ipv4template
	private int jbs,jbd; // bin index for StringBuffer ipv4template

	private int kfs,kfd; // fix index for StringBuffer ipv6template
	private int kbs,kbd; // bin index for StringBuffer ipv6template

        private int mfs,mfd; // fix index for StringBuffer ethtemplate
	private int mbs,mbd; // bin index for StringBuffer ethtemplate

        private int ifs,ifd; // fix index for StringBuffer toktemplate
	private int ibs,ibd; // bin index for StringBuffer toktemplate

	private int nfs,nfd; // fix index for StringBuffer fdditemplate
	private int nbs,nbd; // bin index for StringBuffer fdditemplate


	private StringBuffer ipv4template;
	private StringBuffer ipv6template;
	private StringBuffer ethtemplate;
	private StringBuffer toktemplate;
	private StringBuffer fdditemplate;
	private int          loopback=0;
	private TextArea     f1;//eth or fddi or tokring
	private TextArea     f3;//ipv4 or ipv6

    	private Choice ch6;
	private Choice ch7;
        private Choice ch1;
        private Choice ch3;
        String  update3;
        String  update1; 


	//Constructor to set Address parameters

	public  SetHostAddresses
	   (Choice CH1, Choice CH3, Choice CH7, Choice CH6,
	    TextField T7ip,  TextField T6ip,
	    TextField T7eth, TextField T6eth,
	    TextArea F1, TextArea F3, 
	    StringBuffer IPV4template,
	    StringBuffer IPV6template,
	    StringBuffer ETHtemplate,
	    StringBuffer TOKtemplate,
	    StringBuffer FDDItemplate,
	    int WHICHHOST) {

	        t7ip=T7ip;
		t7eth=T7eth;
		t6ip=T6ip;
		t6eth=T6eth;
		whichHost=WHICHHOST;
		f1=F1; 
		f3=F3; 
		ch6=CH6;
		ch7=CH7;
                ch1=CH1;
                ch3=CH3;

		ipv4template=IPV4template;
		ipv6template=IPV6template;
		ethtemplate=ETHtemplate;
		toktemplate=TOKtemplate;
		fdditemplate=FDDItemplate;

	        jfs = 358; //source host ipv4 fix needs diff=224
		jbs = 358+224; //source host ipv4 bin

		kfs=680; //source host ipv6 fix (ipv4 part of addr) needs diff = 451
		kbs=680+451;//source host ipv6 bin (ipv4 part of addr)

		mfs= 327+65;//source host eth fix
		mbs= 567+65;//source host eth bin

		nfs= 513+65;//source host fddi fix
		nbs= 834+65;//source host fddi bin

		jfd=jfs+46; //destin host ipv4 fix
		jbd=jbs+46; //destin host ipv4 bin

		kfd=857; //destin host ipv6 fix
		kbd=857+451;//destin host ipv6 bin //was 454

                ifd = 52 + 180;  //destin host tok fix 
                ibd = ifd + 181; //destin host tok bin
                ifs = ifd + 65;  //source host tok fix
                ibs = ibd + 65;  //source host tok bin 

		mfd = 327;  //destin host eth fix
		mbd = 567;  //destin host eth bin

		nfd = 513; //destin host fddi fix
		nbd = 834; //destin host fddi bin

		}//end constructor

	public void itemStateChanged (ItemEvent e) {
		Choice choice = (Choice) e.getItemSelectable();
		index=choice.getSelectedIndex();
		int detectLoopback=0;

        if(ch6.getSelectedIndex()!=ch7.getSelectedIndex())
		detectLoopback=0;

	if(ch6.getSelectedIndex()==ch7.getSelectedIndex())
	        detectLoopback=whichHost;

	if(   (detectLoopback==0)
	   && (t6ip.getText().equals("127.0.0.1"))  ) {
		detectLoopback=3;//need to reset destin to non-loopback
		}


	    indexSum=index+100;

	switch(index) {

	case 0: { //no host selected, need place holders
	ipaddr=new String("0.0.0.0");
	ethaddr=new String("0:0:0:0:0:0");
	break;}

	case 1: { //hydra1a ip
	ipaddr=new String("128.169.94.121");
	ethaddr=new String("8:0:20:1c:5e:c8");
	break;}


	case 2: { //hydra2a ip
	ipaddr=new String("128.169.94.127");
        ethaddr=new String("8:0:20:21:a6:8e");
	break;}

	case 3: { //hydra3a ip
        ipaddr=new String("128.169.94.133");
	ethaddr=new String("8:0:20:1c:5f:62");
	break;}

	case 4: { //hydra4a ip
        ipaddr=new String("128.169.94.90");
	ethaddr=new String("8:0:20:1c:5f:62");
	break;}

    // These 3 are for destination host only.

	case 5: {// cs.umd.edu -- univ maryland cs dept

	ipaddr=new String("128.8.128.8");
	ethaddr=new String("00:00:0c:30:70:42");
	break;}

	case 6: {// uhics.ics.hawaii.edu -- univ hawaii cs dept
	ipaddr=new String("128.171.10.20");
	ethaddr=new String("00:00:0c:30:70:42");
	break;}

	case 7: {// adelaide.edu.au -- univ austrailia
	ipaddr=new String("129.27.40.3");
	ethaddr=new String("00:00:0c:30:70:42");
	break;}

	//case X: {// user enters the ip address
	//ipaddr=new String("128.255.255.255"); break;}

	// outside of Ayres, use gateway machine
        // use netstat -r to get gateway addr info 
	// HOSTNAME: R7SM01E3-0.NS.UTK.EDU
	// IP ADDR:  128.169.92.1
	// ETH ADDR: 00:00:0c:30:70:42
	//String ipaddr=new String("00:00:0c:30:70:42"); break;}

	}//end switch(index)

        int i;
        //detectLoopback: 0=no loopback
	//                1=loopback detected by source,
	//                2=loopback detected by destination
	//                3=reset need detected by source
        //ballfield code: source=1;destin=2
	//for fixaddr and binaddr, Ntype=1(ip), Ntype=2(eth)

	switch(whichHost) {

	case 1: {//source host input

	t7ip.setText(ipaddr);
	t7eth.setText(ethaddr);
	String A = new String(SetFixAddr(ipaddr,100));
	String B = new String(SetBinAddr(ipaddr,100));
	String C = new String(SetFixAddr(ethaddr,200));
	String D = new String(SetBinAddr(ethaddr,200));



	for(i=0;i<A.length();i++){
	ipv4template.setCharAt(jfs+i,A.charAt(i));
	ipv6template.setCharAt(kfs+i,A.charAt(i));
        }

	for(i=0;i<B.length();i++){
	ipv4template.setCharAt(jbs+i,B.charAt(i));
	ipv6template.setCharAt(kbs+i,B.charAt(i));
	}

	for(i=0;i<C.length();i++){
	ethtemplate.setCharAt(mfs+i,C.charAt(i));
	toktemplate.setCharAt(ifs+i,C.charAt(i));
	fdditemplate.setCharAt(nfs+i,C.charAt(i));
        }

	for(i=0;i<D.length();i++){
	ethtemplate.setCharAt(mbs+i,D.charAt(i));
	toktemplate.setCharAt(ibs+i,D.charAt(i));
	fdditemplate.setCharAt(nbs+i,D.charAt(i));
	}

    if(detectLoopback==1) {//source detected Loopback
	t6ip.setText("127.0.0.1");
	String E = new String(SetFixAddr("127.0.0.1",100));
	String F = new String(SetBinAddr("127.0.0.1",100));

	for(i=0;i<E.length();i++){
	ipv4template.setCharAt(jfd+i,E.charAt(i));
	ipv6template.setCharAt(kfd+i,E.charAt(i));
    }

	for(i=0;i<F.length();i++){
	ipv4template.setCharAt(jbd+i,F.charAt(i));
	ipv6template.setCharAt(kbd+i,F.charAt(i));
	}

    }//end if(detectLoopback==1)

	if(detectLoopback==3) {//T6ip is set to "127.0.0.1"
	//but source host has been changed, so eliminate loopback

	String Reset = new String();
	switch(ch6.getSelectedIndex()) {

	case 1: {Reset=new String("128.169.94.121");
	break;}//hydra1a


	case 2: { Reset=new String("128.169.94.127");
	break;} //hydra2a ip

	case 3: { Reset=new String("128.169.94.133");
	break;}//hydra3a ip

	case 4: {Reset=new String("128.169.94.90");
	break;}//hydra4a ip
    }//end switch


	t6ip.setText(Reset);
	String Y = new String(SetFixAddr(Reset,100));
	String Z = new String(SetBinAddr(Reset,100));

	for(i=0;i<Y.length();i++){
	ipv4template.setCharAt(jfd+i,Y.charAt(i));
	ipv6template.setCharAt(kfd+i,Y.charAt(i));
    }

	for(i=0;i<Z.length();i++){
	ipv4template.setCharAt(jbd+i,Z.charAt(i));
	ipv6template.setCharAt(kbd+i,Z.charAt(i));
	}

	}//end if(detectLoopback==3)

	break;}//end case 1: source host input

	case 2: {//destination host input

	StringBuffer Xip = new StringBuffer();
	if(detectLoopback==0) Xip.append(ipaddr);
	if(detectLoopback==3) Xip.append(ipaddr);
	if(detectLoopback==2) Xip.append("127.0.0.1");
	String Destipaddr = new String(Xip);

	t6ip.setText(Destipaddr);
	t6eth.setText(ethaddr);
	String P = new String(SetFixAddr(Destipaddr,100));
	String Q = new String(SetBinAddr(Destipaddr,100));
	String R = new String(SetFixAddr(ethaddr,200));
	String S = new String(SetBinAddr(ethaddr,200));

	for(i=0;i<P.length();i++){
	ipv4template.setCharAt(jfd+i,P.charAt(i));
	ipv6template.setCharAt(kfd+i,P.charAt(i));
        }

	for(i=0;i<Q.length();i++){
	ipv4template.setCharAt(jbd+i,Q.charAt(i));
	ipv6template.setCharAt(kbd+i,Q.charAt(i));
	}

	for(i=0;i<R.length();i++){
	ethtemplate.setCharAt(mfd+i,R.charAt(i));
        toktemplate.setCharAt(ifd+i,R.charAt(i));
	fdditemplate.setCharAt(nfd+i,R.charAt(i));
        }

	for(i=0;i<S.length();i++){
	ethtemplate.setCharAt(mbd+i,S.charAt(i));
        toktemplate.setCharAt(ibd+i,S.charAt(i));
	fdditemplate.setCharAt(nbd+i,S.charAt(i));
	}

	}//end case 2: destin host input

	}//end switch(whichHost)

                                      update3 = new String(ipv4template);
        if(ch3.getSelectedIndex()==2) update3 = new String(ipv6template);
        //else                          update3 = new String(ipv4template);

	                                   update1 = new String(ethtemplate);
        if(ch1.getSelectedIndex()==3)      update1 = new String(fdditemplate);
        else if(ch1.getSelectedIndex()==2) update1 = new String(toktemplate);
	//else if(ch1.getSelectedIndex()==1) update1 = new String(ethtemplate);

	f3.setText(update3);
	f1.setText(update1);

	}//end itemEvent

//===============================================================
//===============================================================
//===============================================================
//===============================================================
// The SetFixAddr() method is to set the "FIX" display strings
// for IP and ETH addresses.
// The args sent to the function are (String ORIGaddr, int N)
//   String ORGIaddr = the dot address
//   int N = the type (ip=100, ethernet=200)
// The return value is a String.

// IP conversion
// IP:         >128.169.41.22<
// FIXaddr:    >128_____   169_____   41______   42______   <

// ETH conversion
// ETH:>c3:0a:26:91:ab:04<
// FIX:>c3______   0a_____  26______   91______   ab______   04______<


public String SetFixAddr
   (String ORIGaddr,int N) {

   String   FIXaddr = new String();//the string built in this method

   int      Ntype2=N;     //100=ip(cch='.'),200=eth(cch=':')
   char     cch;          //compare character for parsing

   if(Ntype2 == 100) cch='.';
   else              cch=':';

   String temp = new String(ORIGaddr + cch);//str to work on

   int i,j,k;
   j=temp.length();

   k=0;

   for (i=0;i<j;i++) {
	 if   (temp.charAt(i)!=cch){
	       FIXaddr=FIXaddr +( temp.charAt(i));
		   k++;
		   }// end if
	 else  {
	       while (k<8) {
		      FIXaddr=FIXaddr +('_');
			  k++;
			  }	//end while
			  if(i<j-1)//do not add last 3 blanks
			  FIXaddr=FIXaddr+("   ");
			  k=0;
		   } // end else

		}//end for
	//FIXaddr=FIXaddr + (" \t");

 return(FIXaddr);//returning a String

 }//end method String SetFixAddress()

//===============================================================
// The SetBinAddr() method is to set the "BIN" display strings
// for IP and ETH addresses. (binary display by octets)
// The args sent to the function are (String ORIGaddr, int N)
//   String ORGIaddr = the dot address
//   int N = the type (ip=100, ethernet=200)
// The return value is a String.

// IP conversion
// IP:  >128.169.41.22<
// FIX: >128_____   169_____   41______   42______   <
// BIN: >10000000   10101001   00101001   00101010   <

// ETH conversion
// ETH:>c3:0a:26:91:ab:04<<<
// FIX:>c3______   0a______  26______   91______   ab______   04______<
// BIN:>10100011   00001010  00100110   10010001   10101011   00000100<
//Constructor  NOT-- THIS IS NOW A METHOD
public String SetBinAddr
   (String ORIGaddr,int N) {

   String   BINaddr = new String();//the string built in this method

   //Parse address into b segments -- String() and int  types
   String   b1 = new String(); Integer B1 = new Integer(0); //segment 1
   String   b2 = new String(); Integer B2 = new Integer(0); //segment 2
   String   b3 = new String(); Integer B3 = new Integer(0); //segment 3
   String   b4 = new String(); Integer B4 = new Integer(0); //segment 4
   String   b5 = new String(); Integer B5 = new Integer(0); //segment 5
   String   b6 = new String(); Integer B6 = new Integer(0); //segment 6

   //declare here for full scope.
   String A1 = new String();
   String A2 = new String();
   String A3 = new String();
   String A4 = new String();
   String A5 = new String();
   String A6 = new String();



   int      Ntype2=N;     //100=ip, 200=eth
   char     cch;          //compare character for parsing
   int      i,j,k;		  // handy integers
   i=0;j=0;k=0;

   //=========================================================line278
   if(Ntype2 == 100){ // ip address
   cch='.';

   String temp = new String(ORIGaddr + cch);//str to work on
   j=temp.length();

   //extract the 4 ip address segments

// String   b1 = new String(); Integer B1 = new Integer(0); //segment 1
//  String A1 = new String();
   for (i=0;i<j;i++) {k=k+1;
   if(temp.charAt(i)==cch)break;
   b1 = b1 + temp.charAt(i);
   }
   int D1 = B1.parseInt(b1,10);
   A1 = A1 + (int2BinaryOctet(D1) + "   ");


   for (i=k;i<j;i++) {k=k+1;
   if(temp.charAt(i)==cch)break;
   b2 = b2 + temp.charAt(i);
   }
   int D2 = B2.parseInt(b2,10);
   A2 = A2 + (int2BinaryOctet(D2) + "   ");


   for (i=k;i<j;i++) {k=k+1;
   if(temp.charAt(i)==cch)break;
   b3 = b3 + temp.charAt(i);
   }
   int D3 = B3.parseInt(b3,10);
   A3 = A3 + (int2BinaryOctet(D3) + "   ");


   for (i=k;i<j;i++) {k=k+1;
   if(temp.charAt(i)==cch)break;
   b4 = b4 + temp.charAt(i);
   }
   int D4 = B4.parseInt(b4,10);
   //A4 = A4 + (int2BinaryOctet(D4) + " \t");
   A4 = A4 + (int2BinaryOctet(D4));

   BINaddr=	BINaddr + A1 + A2 + A3 + A4;

   }//end if(Ntype2==100)
   //==================================================matches=line278

   //=========================================================line323
   if(Ntype2==200){ //extract the 6 ethernet address segments

   cch=':';

   String temp = new String(ORIGaddr + cch);//str to work on
   j=temp.length();


   //extract the 6 ethernet address segments


   for (i=0;i<j;i++) {k=k+1;
   if(temp.charAt(i)==cch)break;
   b1 = b1 + temp.charAt(i);
   }
   int H1 = B1.parseInt(b1,16);
   A1 = A1 + (int2BinaryOctet(H1) + "   ");


   for (i=k;i<j;i++) {k=k+1;
   if(temp.charAt(i)==cch)break;
   b2 = b2 + temp.charAt(i);
   }
   int H2 = B2.parseInt(b2,16);
   A2 = A2 + (int2BinaryOctet(H2) + "   ");


   for (i=k;i<j;i++) {k=k+1;
   if(temp.charAt(i)==cch)break;
   b3 = b3 + temp.charAt(i);
   }
   int H3 = B3.parseInt(b3,16);
   A3 = A3 + (int2BinaryOctet(H3) + "   ");


   for (i=k;i<j;i++) {k=k+1;
   if(temp.charAt(i)==cch)break;
   b4 = b4 + temp.charAt(i);
   }
   int H4 = B4.parseInt(b4,16);
   A4 = A4 + (int2BinaryOctet(H4) + "   ");


   for (i=k;i<j;i++) {k=k+1;
   if(temp.charAt(i)==cch)break;
   b5 = b5 + temp.charAt(i);
   }
   int H5 = B5.parseInt(b5,16);
   A5 = A5 + (int2BinaryOctet(H5) + "   ");

   for (i=k;i<j;i++) {k=k+1;
   if(temp.charAt(i)==cch)break;
   b6 = b6 + temp.charAt(i);
   }
   int H6 = B6.parseInt(b6,16);
   //A6 = A6 + (int2BinaryOctet(H6) + " \t");
   A6 = A6 + (int2BinaryOctet(H6));


   BINaddr=	BINaddr + A1 + A2 + A3 + A4 + A5 + A6;

   }//end if Ntype==200, eth
   //==============================================matches=line323

return(BINaddr);

}//end method SetBinAddr()

public String int2BinaryOctet(int NUM) {

//This function calculates the binary string that represents
//The integer NUM by the method of comparing to a bit mask.
//This function returns a string to the calling function.
//Although java has a library function for this, I just want
//the left most 8 bits of the 32-bit java integer.

int mask=1; //binary:00000001
int N=NUM;

mask<<=7;   //binary:10000000

// The StringBuffer A is built in the for loop.
StringBuffer A = new StringBuffer();

int i;
for(i=0;i<8;i++) {

  //if N has a 1 at bit[i], A.append( '1' )
  //else                    A.append( '0' )
  A.append((N&mask) ==0 ? '0' : '1');

  //right shift mask 1 place, no sign bit
  mask >>>=1;

}//end for

String octet = new String ();
octet = octet + A;
return(octet);

}//end method int2BinaryOctet(String NUM)


}//end class SetHostAddresses{}


