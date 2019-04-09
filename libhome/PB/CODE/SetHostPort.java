//file: SetHostPort.java
//============================================================
//Introduction to Class SetHostPort===========================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================

The purpose of the class SetHostPort is to update the
TCPtemplate and UDPtemplate and the final transport layer
diplay (F4) with host port information based upon the
choice made for host port with Choice button Ch7p (source
host) or Choice button Ch6p (destination host).

The class SetHostPort is called by class PBconstr in 
response to a mouse-click event on one of the HostPort 
Choice buttons (Ch7p or Ch6p).  The determination of 
host port number is accomplished by a switch statement 
in method itemStateChanged below. 

Binary values of decimal port numbers are calculated in
method int2BinaryOctet2.  Standard JAVA conversion from
decimal to binary was not useful because these data are 
not in the standard 32-bit integer JAVA format.
==============================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;


public class SetHostPort implements ItemListener   {


	private String Sta = new String();
	private int Ntype; //which type: port(300)
	private int N2;//which port: source(0), destin(1)
	private int index;
	private int indexSum;
	private int jf; // fix index for StringBuffer tcptemplate
	private int jb; // bin index for StringBuffer tcptemplate
	private int kf; // fix index for StringBuffer udptemplate
	private int kb; // bin index for StringBuffer udptemplate
	private int i;// forloop(i)

	private StringBuffer tcptemplate;
	private StringBuffer udptemplate;
        private String       f4update;

	private String FIXword;
	private String BINword;
	private int portnumber;
        private Choice ch4;

    private TextArea f4;

    //Constructor to set port numbers
    //in the udpTemplate and the tcpTemplate

	public  SetHostPort (Choice CH4,int N, int N2, 
	    StringBuffer TCPtemplate,StringBuffer UDPtemplate,
		TextArea F4) {

                ch4=CH4;
		Ntype = N;
		jf  = 227;//source host tcp fix index
		kf  = 85; //source host udp fix index
		jb = 227+230;//source host tcp bin index  diff=230
		kb = 170;//source host udp bin index
		if(N2==1) {jf=jf+21;//destin host tcp index
		           kf=kf+21;//destin host udp index
				   jb=jb+21;
				   kb=kb+21;
				   }
		tcptemplate=TCPtemplate;
		udptemplate=UDPtemplate;
		f4=F4;
		}//end constructor

	public void itemStateChanged (ItemEvent e) {
		Choice choice = (Choice) e.getItemSelectable();
		index=choice.getSelectedIndex();
        indexSum=index+Ntype;

	switch(indexSum) {

	// cases 300-399 are ports
     	case 300: { // no port selected, need place holders
    	FIXword= new String("0_______");
	portnumber=0;
	break;}


	case 301: { // port number 5555
    	FIXword = new String("5555____");
	portnumber=5555;
	break;}

	case 302: {// port number 5556
    	FIXword= new String("5556____");
	portnumber=5556;
	break;}

	case 303: { // port number 5557
	FIXword= new String("5557____");
	portnumber=5557;
	break;}

	case 304: { // Clear, need place holders
    	FIXword=new String("0_______");
	portnumber=0;
	break;}

	}//end switch

	for (i=0;i<8;i++) {
	tcptemplate.setCharAt(jf+i,FIXword.charAt(i));
	udptemplate.setCharAt(kf+i,FIXword.charAt(i));
	}
	BINword= new String(int2BinaryOctet2(portnumber,2));

	for (i=0;i<19;i++) {
    	tcptemplate.setCharAt(jb+i,BINword.charAt(i));
	udptemplate.setCharAt(kb+i,BINword.charAt(i));
	}

        if(ch4.getSelectedIndex()==2) f4update=new String(udptemplate);
        else                          f4update=new String(tcptemplate);

    	f4.setText(f4update);
	}//end itemEvent

public String int2BinaryOctet2(int NUM,int NOCTETS) {

//This function calculates the binary string that represents
//The integer NUM by the method of comparing to a bit mask.
//This funtion returns a string to the calling function.
//Although java has a library function for this, I just want
//the left most 8 bits of the 32-bit java integer.

int mask=1; //binary:00000001
int N=NUM;
int Noct=NOCTETS;
int Nleftshift;
Nleftshift=(Noct*8)-1;
mask<<=Nleftshift;

//mask<<=7;   //binary:10000000
//mask<<=15;  //binary:10000000 00000000
//mask<<=31;  //binary:10000000 00000000 00000000 00000000


// The StringBuffer A is built in the for loop.
StringBuffer A = new StringBuffer();

int i,j;
for(j=0;j<Noct;j++) {
for(i=0;i<8;i++) {

  //if N has a 1 at bit[i], A.append( '1' )
  //else                    A.append( '0' )
  A.append((N&mask) ==0 ? '0' : '1');

  //right shift mask 1 place, no sign bit
  mask >>>=1;

}//end for(i)
A.append("   ");
}//end for(j);

String octet = new String ();
octet = octet + A;
return(octet);

}//end method int2BinaryOctet2(String NUM,int NOCTETS)

}//end class SetHostPort{}


