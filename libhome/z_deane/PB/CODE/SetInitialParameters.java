//file: SetInitialParameters.java
//============================================================
//Introduction to Class SetInitialParameters==================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================

The purpose of class SetInitial Parameters is to assign
initial values to all the Data Anchors (StringBuffer 
templates for each protocol layer). 

This class is called by class PBinit in response to a
mouse-click event on the active Button Con.  The same
mouse-click event also calls up the class PBconstr, the
Construction Window.

Class SetInitialParameters is only called once, when the
Construction Window is first invoked.

The actionEvent from the PBinit window is passed to
the itemStateChanged() method in SetInitialParameters.

The code in itemStateChanged() consists of assigning
String values to StringBuffer templates.  Each template
carries all three rows of a protocol final display.

Row 1.  Label information for the protocol items
Row 2.  The numeric value for the protocol items  
Row 3.  The binary value for the protocol items

The templates have to be StringBuffer objects rather than  
String objects, because StringBuffer objects can be
updated.  String objects in JAVA, once created, cannot
be changed except for adding additional characters to
the end.   

==============================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;


class SetInitialParameters implements ActionListener {

	private int Ntype;
	private int index;
	private int indexSum;

//Data Anchors
	private StringBuffer tcptemplate;
	private StringBuffer udptemplate;
	private StringBuffer ipv4template;
	private StringBuffer ipv6template;
	private StringBuffer dlltemplateE;
	private StringBuffer dlltemplateT;
	private StringBuffer dlltemplateF;
	private StringBuffer ethtemplate;
	private StringBuffer ethTtemplate;
	private StringBuffer toktemplate;
	private StringBuffer tokTtemplate;
	private StringBuffer fdditemplate;
	private StringBuffer fddiTtemplate;

	private String tcpa  = new String();
	private String udpa  = new String();
	private String ipv4a = new String();
	private String ipv6a = new String();
	private String dlla  = new String();
	private String dllTa  = new String();
	private String etha  = new String();
	private String ethTa = new String();
	private String toka  = new String();
	private String tokTa = new String();
	private String fddia = new String();
	private String fddiTa= new String();

	private StringBuffer xa = new StringBuffer();
    	private StringBuffer xb = new StringBuffer();
    	private StringBuffer xc = new StringBuffer();

	//constructor for SetInitialParameters
	public  SetInitialParameters
	(StringBuffer TCPtemplate,StringBuffer UDPtemplate,
	 StringBuffer IPV4template,StringBuffer IPV6template,
	 StringBuffer DLLtemplateE, 
	 StringBuffer DLLtemplateT, 
	 StringBuffer DLLtemplateF, 
         StringBuffer ETHtemplate,StringBuffer ETHTtemplate,
         StringBuffer TOKtemplate,StringBuffer TOKTtemplate,
	 StringBuffer FDDItemplate,StringBuffer FDDITtemplate,
	 int N) {

                tcptemplate  = TCPtemplate;
		udptemplate  = UDPtemplate;
		ipv4template = IPV4template;
		ipv6template = IPV6template;
		dlltemplateE = DLLtemplateE;
		dlltemplateT = DLLtemplateT;
		dlltemplateF = DLLtemplateF;
		ethtemplate  = ETHtemplate;
		ethTtemplate = ETHTtemplate;
		toktemplate  = TOKtemplate;
		tokTtemplate = TOKTtemplate;
		fdditemplate = FDDItemplate;
		fddiTtemplate = FDDITtemplate;
		Ntype=N;

		}//end constructor


public void actionPerformed (ActionEvent e) {

//This method sets all initial StringBuffer templates.

//==========================================================
//Layer 4 -- tcp
tcptemplate.setLength(0);
xa.setLength(0);
xb.setLength(0);
xc.setLength(0);

xa.append ( "TCPsourceport______ \t"
   	   +"TCPdestinport______ \t"
	   +"TCPseqnum________________________________ \t"
	   +"TCPacknum________________________________ \t"
	   +"Offset     \t" //10chars
	   +"Reserve    \t" //
	   +"Flags      \t" //
	   +"WindowSize_________ \t"
	   +"TCPchecksum________ \t"
	   +"TCPurgentptr_______ \n");

xb.append ( "0_______   ________ \t" //source port number
	   +"0_______   ________ \t" //destin port number
	   +"0_______   ________   ________   ________ \t" //seq
	   +"0_______   ________   ________   ________ \t"//ack
	   +"5___        \t" //Offset 10chars
	   +"0_____      \t"//Reserve 10chars orig F in 14th index
	   +"FLAGS       \t"//Flags   10chars new F in 21th index +7
	   +"0_______   ________ \t"//windowSize
	   +"0_______   ________ \t"//tcpchecksum
	   +"0_______   ________ \n");//urgent pointer

xc.append ( "00000000   00000000 \t" //source port number
	   +"00000000   00000000 \t" //destin port number
	   +"00000000   00000000   00000000   00000000 \t" //seq
	   +"00000000   00000000   00000000   00000000 \t" //ack
	   +"0101         \t" //Offset
	   +"000000       \t" //Reserved
	   +"000000       \t" //Flags
	   +"00000000   00000000 \t" //windowSize
	   +"00000000   00000000 \t" //tcpchecksum
	   +"00000000   00000000 \n");//urgent pointer

tcpa=tcpa + xa + xb + xc;
tcptemplate.append(tcpa);

//==========================================================
//Layer 4 -- udp

udptemplate.setLength(0);
xa.setLength(0);
xb.setLength(0);
xc.setLength(0);

xa.append ( "UDPsourceport______ \t"
	   +"UDPdestinport______ \t"
	   +"UDPlength__________ \t"
           +"UDPchecksum________ \t\n");

xb.append ( "0_______   ________ \t" //source port number
	   +"0_______   ________ \t" //destin port number
	   +"0_______   ________ \t" //UDPlength
	   +"0_______   ________ \t\n");//UDPchecksum

xc.append ( "00000000   00000000 \t" //source port number
	   +"00000000   00000000 \t" //destin port number
           +"00000000   00000000 \t" //UDPlength
           +"00000000   00000000 \t"); //UDPchecksum

udpa=udpa + xa + xb + xc;
udptemplate.append(udpa);

//==========================================================
//Layer 3 -- ipv4
ipv4template.setLength(0);

xa.setLength(0);
xb.setLength(0);
xc.setLength(0);

xa.append ( "Vers \t"
    	   +"HLen \t"
	   +"TOS_____  \t"
	   +"TotalLength________ \t"
	   +"PacketID___________ \t"
	   +"DF/MF/FragOffset___ \t"
	   +"TimeToLive \t"
	   +"Protocol   \t"
	   +"HeaderChecksum_____   \t"
	   +"IPV4source_______________________________    \t"
	   +"IPV4destination__________________________    \n");

xb.append ( "4___ \t" //version
	   +"5___ \t" //hdrlength
	   +"0_______  \t" //tos
	   +"0_______   ________ \t" //totallength
	   +"0_______   ________ \t" //packetid
	   +"0_______   ________ \t" //DF/MF/FragOffset
   	   +"0_______   \t" //timetolive
	   +"0_______   \t" //protocol
	   +"0_______   ________   \t"//headerchecksum
	   +"0_______   0_______   0_______   0_______    \t"  //source
	   +"0_______   0_______   0_______   0_______    \n");//destin

xc.append ( "0100 \t" //version
 	   +"0101 \t" //hdrlength
   	   +"00000000 \t" //tos
	   +"00000000   00000000 \t" //totallength
	   +"00000000   00000000 \t" //packetid
	   +"00000000   00000000 \t" //DF/MF/FragOffset
	   +"00000000   \t" //timetolive
	   +"00000000   \t" //protocol
	   +"00000000   00000000   \t" //headerchecksum
	   +"00000000   00000000   00000000   00000000    \t"  //source
	   +"00000000   00000000   00000000   00000000    \n");//destin

ipv4a=ipv4a + xa + xb + xc;
ipv4template.append(ipv4a);


//==========================================================
//Layer 3 -- ipv6

ipv6template.setLength(0);
xa.setLength(0);
xb.setLength(0);
xc.setLength(0);

xa.append ( "Vers   \t" //version, 4 bits
	   +"Prio   \t" //priority, 4 bits
	   +"FlowLabel_____________________   \t" // 24 bits
	   +"PayloadLength______   \t" //16 bits
	   +"NextHdr_   \t" //8 bits
	   +"HopLimit   \t" //8 bits
	   +"IPv6-Source-Addr------IPv6-Source-Addr------"//pt1
	   +"IPv6-Source-Addr------IPv6-Source-Addr------"//pt2
	   +"IPv6-Source-Addr------IPv6-Source-Addr------"//pt3
	   +"IPv6-Source-Addr------IPv6-Source-Addr---   \t"//pt4
	   +"IPv6-Destin-Addr------IPv6-Destin-Addr------"//pt1
	   +"IPv6-Destin-Addr------IPv6-Destin-Addr------"//pt2
	   +"IPv6-Destin-Addr------IPv6-Destin-Addr------"//pt3
	   +"IPv6-Destin-Addr------IPv6-Destin-Addr---   \n");//pt4

xb.append ( "6___   \t" //version, 4bits
	   +"0___   \t" //priority, 4 bits
	   +"0_______   ________   ________   \t" //flowLabel, 24 bits
	   +"0_______   ________   \t" //payloadLength, 16 bits
	   +"0_______   \t"// nextHeader, 8 bits
	   +"0_______   \t"// hopLimit, 8 bits
	   +"0_______   0_______   0_______   0_______   "//source pt1
	   +"0_______   0_______   0_______   0_______   "//source pt2
	   +"0_______   0_______   0_______   0_______   "//source pt3
	   +"0_______   0_______   0_______   0_______   \t"//source pt4
	   +"0_______   0_______   0_______   0_______   "//destin pt1
	   +"0_______   0_______   0_______   0_______   "//destin pt2
	   +"0_______   0_______   0_______   0_______   "//destin pt3
	   +"0_______   0_______   0_______   0_______   \n");//destin pt4

xc.append ( "0110   \t" // version, 4 bits
	   +"0000   \t" // priority, 4 bits
           +"00000000   00000000   00000000   \t" //flowLabel, 24 bits
    	   +"00000000   00000000   \t" //payloadLength, 16 bits
	   +"00000000   \t" //nextHeader, 8 bits
	   +"00000000   \t" //hopLimit, 8 bits
	   +"00000000   00000000   00000000   00000000   "//source pt1
	   +"00000000   00000000   00000000   00000000   "//source pt2
	   +"00000000   00000000   00000000   00000000   "//source pt3
	   +"00000000   00000000   00000000   00000000   \t"//source pt4
	   +"00000000   00000000   00000000   00000000   "//destin pt1
	   +"00000000   00000000   00000000   00000000   "//destin pt2
	   +"00000000   00000000   00000000   00000000   "//destin pt3
	   +"00000000   00000000   00000000   00000000   \n");//destin pt4

ipv6a=ipv6a + xa + xb + xc;
ipv6template.append(ipv6a);


//==========================================================
//Layer 2 -- dlltemplateE (for ethernet bus)

dlltemplateE.setLength(0);
xa.setLength(0);
xb.setLength(0);
xc.setLength(0);
 
xa.append ( "DSAP____   \t" //Destin Service Access Point Addr
           +"SSAP____   \t" //Source Service Access Point  Addr
           +"Control_   \t" //Control information
           +"Protocol_ID___________________   \t"
           +"Ethertype__________   \n");

xb.append ( "170_____   \t" //dsap
           +"170_____   \t" //ssap
           +"3_______   \t" //control
           +"0_______   ________   ________   \t"//protocol
           +"2048____   ________   \n");//ethertype

xc.append ( "10101010   \t" //dsap
           +"10101010   \t" //ssap
           +"00000011   \t" //control
           +"00000000   00000000   00000000   \t"//protocol ID
           +"00000000   00000000   ");//ethertype

String dllaE=new String(xa); 
dllaE=dllaE + xb + xc;
dlltemplateE.append(dllaE);

//==========================================================
//Layer 2 -- dlltemplateT (for ethernet token ring)

dlltemplateT.setLength(0);
xa.setLength(0);
xb.setLength(0);
xc.setLength(0);

xa.append ("<empty> This is an Ethernet Token Ring Data Frame.  "
          +"If this were a Control Frame,");
xb.append ("\n<empty> this field would contain a control sequence "
          +"and the data field would be empty.");
xc.append ("\n<empty> See Documentation Window for discussion.");

String dllaT=new String(xa); 
dllaT=dllaT + xb + xc;
dlltemplateT.append(dllaT);

//==========================================================
//Layer 2 -- dlltemplateF (for fddi)

dlltemplateF.setLength(0);
xa.setLength(0);
xb.setLength(0);
xc.setLength(0);


xa.append ( "DSAP____   \t" //Destin Service Access Point Addr
           +"SSAP____   \t" //Source Service Access Point  Addr
           +"Control_   \t" //Control information
           +"Protocol_ID___________________   \t"
           +"Ethertype__________   \n");


xb.append ( "170_____   \t" //dsap
	   +"170_____   \t" //ssap
	   +"0_______   \t" //control
	   +"0_______   ________   ________   \t"//protocol id
	   +"2048____   ________   \n");//ethertype


xc.append ( "10101010   \t" //dsap
	   +"10101010   \t" //ssap
	   +"00000000   \t" //control
	   +"00000000   00000000   00000000   \t"//protocol ID
           +"00010000   00000000   ");//ethertype

//ethertype can have value of 2048	00001000 00000000 //ipv4 
//		          or 34525      10000110 11011101 //ipv6

String dllaF=new String(xa); 
dllaF=dllaF + xb + xc;
dlltemplateF.append(dllaF);



//==========================================================
//Layer 1 -- ethernet

ethtemplate.setLength(0);
xa.setLength(0);
xb.setLength(0);
xc.setLength(0);

xa.append
( "Ethernet Preamble (64 bits) Ethernet Preamble (64 bits) Ethernet P"
 +"reamble    SOF_____ \t"
 +"Ethernet destination address___________________________________ \t"
 +"Ethernet source address________________________________________ \t"
 +"Data Length________   \n");

xb.append
( "170_____   170_____   170_____   170_____   170_____   170_____   "
 +"170_____   171_____ \t"//preamble, sof
 +"0_______   0_______   0_______   0_______   0_______   0_______ \t"//ethdestin
 +"0_______   0_______   0_______   0_______   0_______   0_______ \t"//ethsource
 +"0_______   ________   \n");

xc.append
( "10101010   10101010   10101010   10101010   10101010   10101010   "
 +"10101010   10101011 \t"
 +"00000000   00000000   00000000   00000000   00000000   00000000 \t"
 +"00000000   00000000   00000000   00000000   00000000   00000000 \t"
 +"00000000   00000000   ");

etha=etha + xa + xb + xc;
ethtemplate.append(etha);


//==========================================================
//Layer 1 -- ethernetTrailer(32 bit crc)

ethTtemplate.setLength(0);
xa.setLength(0);
xb.setLength(0);
xc.setLength(0);

xa.append("Ethernet-trailer-----Ethernet-trailer----   \n");
xb.append("0_______   ________   ________   ________   \n");
xc.append("00000000   00000000   00000000   00000000   \n");

ethTa=ethTa+xa+xb+xc;
ethTtemplate.append(ethTa);



//==========================================================
//Layer 1 -- tokenring information frame

toktemplate.setLength(0);
xa.setLength(0);
xb.setLength(0);
xc.setLength(0);

xa.append( "StartDelimeter   \tAccessControl   \tFrameControl   \t"
          +"TokenRing destination address__________________________________ \t"
          +"TokenRing source address_______________________________________ \n");
xb.append( "JK0JK0IE         \tPPPTMRRR        \tFFZZZZZZ       \t"
          +"0_______   0_______   0_______   0_______   0_______   0_______ \t"
          +"0_______   0_______   0_______   0_______   0_______   0_______ \n");
xc.append( "10010000         \t00000000        \t00000000       \t"
          +"00000000   00000000   00000000   00000000   00000000   00000000 \t"
          +"00000000   00000000   00000000   00000000   00000000   00000000 ");

toka=toka + xa + xb + xc;
toktemplate.append(toka);


//==========================================================
//Layer 1 -- tokenringTrailer (32 bit crc)


tokTtemplate.setLength(0);
xa.setLength(0);
xb.setLength(0);
xc.setLength(0);

xa.append("TokenRing-crc---TokenRing-crc---TokenRing    \t"
          +"EndDelimeter   \tFrameStatus   \n");
xb.append( "0_______   ________   ________   ________   \t" 
          +"JK1JK100       \tACxxACxx      \n");
xc.append("00000000   00000000   00000000   00000000    \t" 
	  +"10110100       \t10001000   ");
tokTa=tokTa+xa+xb+xc;
tokTtemplate.append(tokTa);


//==========================================================
//Layer 1 -- fddi
fdditemplate.setLength(0);
xa.setLength(0);
xb.setLength(0);
xc.setLength(0);
xa.append
("FDDI Preamble (128 bits) FDDI Preamble (128 bits) FDDI Preamble (12"
+"8 bits) FDDI Preamble (128 bits) FDDI Preamble (128 bits) FDDI Prea"
+"mble (128 bits) FDDI Preamble  SOF_____   \t"
+"FrameControl \t"
+"FDDI destination address_______________________________________ \t"
+"FDDI source address____________________________________________   \n");

xb.append
( "170_____   170_____   170_____   170_____   170_____   170_____   "
 +"170_____   170_____   170_____   170_____   170_____   170_____   "
 +"170_____   170_____   170_____   171_____   \t"
 +"193_____    \t"
 +"0_______   0_______   0_______   0_______   0_______   0_______ \t"
 +"0_______   0_______   0_______   0_______   0_______   0_______   \n");

xc.append
("10101010   10101010   10101010   10101010   10101010   10101010   "
+"10101010   10101010   10101010   10101010   10101010   10101010   "
+"10101010   10101010   10101010   10101011   \t"
+"11000001   \t"//frame control=193
+"00000000   00000000   00000000   00000000   00000000   00000000 \t"
+"00000000   00000000   00000000   00000000   00000000   00000000   ");

fddia = fddia + xa + xb + xc;
fdditemplate.append(fddia);


//==========================================================
//Layer 1 -- fddiTrailer

fddiTtemplate.setLength(0);
xa.setLength(0);
xb.setLength(0);
xc.setLength(0);

xa.append( "FDDI-fcs---FDDI-fcs---FDDI-fcs---FDDI-fcs \t"
          +"EndDelim   \t" //End Delimiter (T)
		  +"FrameStatus \n"); //FrameStatus (S/R)
xb.append( "0_______   ________   ________   ________ \t"
          +"T_______   \t" //end delimiter character
		  +"S_______   \n");  //s=set, true
xc.append( "00000000   00000000   00000000   00000000 \t"
          +"01010100   \t"//T=ascii 84
	  +"01010011   ");//S=ascii 83,R=ascii 82

fddiTa=fddiTa+xa+xb+xc;
fddiTtemplate.append(fddiTa);

//==========================================================


}//end actionPerformed

}//end SetInitialParameters
