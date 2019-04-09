//file: SetTCPfields.java
//============================================================
//Introduction to Class SetTCPfields==========================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================

The class SetTCPfields sets a single TCP option field.

This class is called by class PBconstr in response to a
mouse-click event on one of the Choice buttons listed below.

	Choice Chf7:  sequence number (32 bits)
	Choice Chf8:  ack number (32 bits)
	Choice Chf9:  window size (16 bits)
	Choice Chf10: urgent pointer (16 bits)


The target option is determined in a switch statement 
inside the constructor for this class.

The TCPtemplate is updated in the itemStateChanged 
method for this class. Row 1 and Row 2 of the final 
display are taken care of by a switch statement within
the itemStateChanged method. 

Row 3 of the final display is taken care of by
calculating the binary value that corresponds to
the numeric option value (using  bit shifting),
in the method int2BinaryOctet3.

The UDPtemplate is passed to this function, because if
UDP is the protocol on display in the final panel, the
update must reflect this.

==============================================================*/
import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

class SetTCPfields implements ItemListener {
	private int Nfield;// 470=seq, 480=ack, 490=windowSize, 450=urgptr
	private StringBuffer tcptemplate;
        private StringBuffer udptemplate;
	private TextArea f4;
	private int index,indexSum;
	private int Noctets;
	private int i;

	private int jf;// fix index
	private int jb;// bin index
	private String FIXword;
	private String BINword;
	private String FIXdword;//dataOffset
	private String BINdword;//dataOffset
	private int fieldnumber;//numeric value of field
        private String       f4update;
        private Choice       ch4;

        //Constructor for Seq/Ack/WindowSize
	public  SetTCPfields(Choice CH4,StringBuffer TCPtemplate,
        StringBuffer UDPtemplate, TextArea F4, int N) {

		Nfield = N;
                ch4=CH4;
		tcptemplate=TCPtemplate;
                udptemplate=UDPtemplate; 
		f4=F4;

		switch (Nfield) {

		//jb = 227+230;//source host tcp bin index  diff=230
		case 470: {//seqnum
		jf = 269; //tcp seqnum field fix index
		jb = 269+230; //tcp seqnum field bin index
		Noctets=4;
		break;}

		case 480: {//acknum
		jf = 312; //tcp acknum field fix index
		jb = 312+230; //tcp acknum field bin index
		Noctets=4;
		break;}

		case 490: {//windowSize
		jf = 394; //tcp windowSize field fix index
		jb = 394+233; //tcp windowSize field bin index
		Noctets=2;
		break;}

		case 450: {//urgent data
	    	jf = 436;
		jb = 436+233;
		Noctets=2;
		break;
		}


		}//end switch (Nfield)

    }//end constructor for Seq/Ack/Window/UrgentPtr


//===============================================================
	public void itemStateChanged (ItemEvent e) {
		Choice choice = (Choice) e.getItemSelectable();
		index=choice.getSelectedIndex();
        indexSum=index+Nfield;

	switch(indexSum) {

	//TCP Sequence number (32 bits)
	case 470: {//value= 0 , default
	FIXword = new String("0_______   ________   ________   ________ \t");
	fieldnumber=0;
	break;}

	case 471: {//value= 139
	FIXword = new String("139_____   ________   ________   ________ \t");
	fieldnumber=139;
	break;}

        case 472: {//value= 140
	FIXword = new String("140_____   ________   ________   ________ \t");
	fieldnumber=140;
	break;}

        case 473: {//value= 141
	FIXword = new String("141_____   ________   ________   ________ \t");
	fieldnumber=141;
	break;}

        case 474: {//value= 0 , clear
	FIXword = new String("0_______   ________   ________   ________ \t");
	fieldnumber=0;
	break;}

	//TCP Ack number (32 bits)
	case 480: {//value= 0 , default
	FIXword = new String("0_______   ________   ________   ________ \t");
	fieldnumber=0;
	break;}

        case 481: {//value= 138
	FIXword = new String("138_____   ________   ________   ________ \t");
	fieldnumber=138;
	break;}

	case 482: {//value= 139
	FIXword = new String("139_____   ________   ________   ________ \t");
	fieldnumber=139;
	break;}

        case 483: {//value= 140
	FIXword = new String("140_____   ________   ________   ________ \t");
	fieldnumber=140;
	break;}

	case 484: {//value= 0 , clear
	FIXword = new String("0_______   ________   ________   ________ \t");
	fieldnumber=0;
	break;}

	//TCP WindowSize  (16 bits)
	case 490: {//value= 0 , default
	FIXword = new String("0_______   ________");
	fieldnumber=0;
	break;}

	case 491: {// value= 1
	FIXword = new String("1_______   ________");
	fieldnumber=1;
	break;}

	case 492: {// value= 2
	FIXword = new String("2_______   ________");
	fieldnumber=2;
	break;}

	case 493: {// value= 3
	FIXword = new String("3_______   ________");
	fieldnumber=3;
	break;}

	case 494: {// value= 4
	FIXword = new String("4_______   ________");
	fieldnumber=4;
	break;}

	case 495: {// value= 6
	FIXword = new String("6_______   ________");
	fieldnumber=6;
	break;}

	case 496: {// value= 8
	FIXword = new String("8_______   ________");
	fieldnumber=8;
	break;}

   	case 497: {// value= 10
	FIXword = new String("10______   ________");
	fieldnumber=10;
	break;}

	case 498: {// value= 12
	FIXword = new String("12______   ________");
	fieldnumber=12;
	break;}


    //TCP urgentPointer, set index of last byte of urgent data

	case 450: {// default = 0
	FIXword = new String("0_______   ________");
	fieldnumber=0;
	break;}

	case 451: {// no bytes of urgent data
	FIXword = new String("0_______   ________");
	fieldnumber=0;
	break;}

	case 452: {// 4 bytes of urgent data
	FIXword = new String("4_______   ________");
	fieldnumber=4;
	break;}

	case 453: {// 8 bytes of urgent data
	FIXword = new String("8_______   ________");
	fieldnumber=8;
	break;}

	case 454: {// 12 bytes of urgent data
	FIXword = new String("12______   ________");
	fieldnumber=12;
	break;}

	case 455: {// 16 bytes of urgent data
	FIXword = new String("16______   ________");
	fieldnumber=16;
	break;}

	case 456: {// 20 bytes of urgent data
	FIXword = new String("20______   ________");
	fieldnumber=20;
	break;}


	}//end switch(indexSum)

        int LEN=FIXword.length();
        for (i=0;i<LEN;i++) {
	tcptemplate.setCharAt(jf+i,FIXword.charAt(i));
	}
	BINword= new String(int2BinaryOctet3(fieldnumber,Noctets));

        LEN=BINword.length();
	for (i=0;i<LEN;i++) {
        tcptemplate.setCharAt(jb+i,BINword.charAt(i));
	}

        if(ch4.getSelectedIndex()==2) f4update=new String(udptemplate);
        else                          f4update=new String(tcptemplate);
        f4.setText(f4update);

}//end itemEvent




//===============================================================
public String int2BinaryOctet3(int NUM,int NOCTETS) {

//Not quite the same as int2BinaryOctet2(int,int)
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

j=A.length();
A.setLength(j-2);
A.append('\t');

String octet = new String ();
octet = octet + A;
return(octet);

}//end method int2BinaryOctet3(String NUM,int NOCTETS)



}//end SetTCPfields
