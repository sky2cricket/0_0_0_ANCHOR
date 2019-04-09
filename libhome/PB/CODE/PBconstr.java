//file: PBconstr.java
//===============================================================
//Introduction to Class PBconstr=================================
//copyright Cricket Haygood Deane, 1998==========================
/*===============================================================

The class PBconstr is the PacketBuilder Construction Window.

The class PBconstr is called by class PBinit in 
response to a mouse-click event on the active Button Con.  
The same mouse-click event also calls up the class 
SetInitialParameters, the class which initializes all
the Data Anchors (discussed below).

The Construction Window is organized as a series of  
horizontal Panel() objects, with

   one upper Panel() object for title information 
   ten selection Panel() objects for user choices
   one display Panel() object to show the final display.

In this manner, the user sees Internet Protocol information  
organized layer by layer.  The bottom Panel() contains a
"final" ScrollPane() object which displays the entire
packet (really an MAC frame) in ScrollPane format.  All the 
data is keyed by color.
    
The Construction Window contains the following Panel objects:
     P8:   Header Panel
     P7:   Source Host Panel
     P6:   Destination Host Panel
     P5:   Application Layer Panel
     P4:   Transport Layer Panel
     P4f:  TCP Flags Panel
     P3:   IP Layer Panel
     P3g:  IP Flags Panel
     P2:   Logical Link Control Layer Panel
     P2f:  LLC Flags Panel (checksum here)
     P1:   Medium Access Control Layer Panel 
     P0:   Panel containing the Final ScrollPane Display
   
The display scheme on the Final ScrollPane Display is 
designed to show the relationship between input "numbers"
and the binary code that carries the information in an
internet packet.  I expect that most users of this program
will not have an instinctive grasp of the mapping from
a decimal number to a binary octet.  I expect that most
users of this program will not have much experience in
using hexadecimal numbers.  This software is specifically
designed to introduce these users to these concepts in
a way that is meaningful and (I hope) fun.

All of the information on the panels is presented in a
3-row format that links the name of the protocol field
to the numeric value of the field (hex or decimal) to
the binary representation of that number broken up 
into octects.


For example (simple decimal data):

The tcp windowSize is selected by the user.
Say the user selects 8, this would make a
"numeric" value of 8.  The tcp windowSize is
a 16 bit field on the tcp header, so the
display must be for 2 octets.

Row 1 :    >>WindowSize_________<<
Row 2 :    >>8_______   ________<<
Row 3 :    >>00000000   00001000<<


For example (dotted decimal information):

Given IP address:    >>128.169.94.4<< 
Row 1 :    >>IPsource___________________________<<
Row 2 :    >>128_____ 169_____ 94______ 4_______<<
Row 3 :    >>10000000 10101001 01011110 00000100<<


For example (dotted hexadecimal information):

Given Ethernet address: >>8:0:22:5f:c2:a1<<
Row 1 :  >>ETHsource____________________________________________<<
Row 2 :  >>8_______ 0_______ 22______ 5f______ c2______ a1______<<
Row 3 :  >>00001000 00000000 00100010 01011111 11000010 10100001<<



The StringBuffer templates listed below are "data anchors" for 
all information that appears in the PacketBuilder Construction
Window.  These templates are initialized by the class   
SetInitialParameters.

   StringBuffer TCPtemplate:    for tcp header
   StringBuffer UDPtemplate:    for udp header
   StringBuffer IPv4template:   for ipv4 header
   StringBuffer IPv6template:   for ipv6 header
   StringBuffer DLLtemplateE:   for llc header (ethernet)
   StringBuffer DLLtemplateT:   for llc header (token ring)
   StringBuffer DLLtemplateF:   for llc header (fddi)
   StringBuffer ETHtemplate:    for ethernet bus header
   StringBuffer ETHTtemplate:   for ethernet bus trailer
   StringBuffer TOKtemplate:    for token ring header
   StringBuffer TOKTtemplate:   for token ring trailer
   StringBuffer FDDItemplate:   for fddi header
   StringBuffer FDDITtemplate:  for fddi trailer

In the Initialization Window (class PBinit), there is a
button labelled "Start PacketBuilder Construction Window".  
The mouse-click event on this button does 2 things in the
order shown below:
    1. triggers a call to SetInitialParameters
    2. turns on "visible" for the Construction Window
The initialized template values are passed from the class
PBinit to the class PBconstr as part of the argument list.

In the Construction Window (class PBconstr), the user selects
protocol options with Choice buttons.  Each selection is
written to the appropriate template using the setCharAt()
method of the StringBuffer class.  This allows any number
of characters to be written.  So the same approach for
writing to a template may be used with any protocol component,
be it a one-bit tcp flag or a 48-bit ethernet address.

=================================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

public class PBconstr extends Frame implements ActionListener{

   //==============================================================
   //Data Anchors==================================================
   StringBuffer TCPtemplate   = new StringBuffer();//for tcp hdr
   StringBuffer UDPtemplate   = new StringBuffer();//for udp hdr
   StringBuffer IPv4template  = new StringBuffer();//for ipv4 hdr
   StringBuffer IPv6template  = new StringBuffer();//for ipv6 hdr
   StringBuffer DLLtemplateE  = new StringBuffer();//for llc (eth)
   StringBuffer DLLtemplateT  = new StringBuffer();//for llc (tok)
   StringBuffer DLLtemplateF  = new StringBuffer();//for llc (fddi)
   StringBuffer ETHtemplate   = new StringBuffer();//for eth hdr
   StringBuffer ETHTtemplate  = new StringBuffer();//for eth trlr
   StringBuffer TOKtemplate   = new StringBuffer();//for tokring hdr
   StringBuffer TOKTtemplate  = new StringBuffer();//for tokring trlr
   StringBuffer FDDItemplate  = new StringBuffer();//for fddi hdr
   StringBuffer FDDITtemplate = new StringBuffer();//for fddi trlr

   //==============================================================
   //PacketBuilder Window Objects that can be called
   //by clicking on a Button in the Construction Window
   //Note that these are in the Global Declarations
   //of the class PBconstr so that they can be accessed by
   //the actionPerformed() method.
 
   private PBdoc    PacketBuilderDoc;     //documentation window
   private PBquit   PacketBuilderQuit;    //quit window

   //==============================================================
   //Base class constructor adapted from Deitel and Deitel, 1997,
   //"JAVA How to Program",  page 602.
   //Note that all templates are initialized when
   //PBinit calls up the Construction Window.
   //Then template values are passed to PBconstr.
          
   //==============================================================
   //This is the constructor for class PBconstr.===================
    public PBconstr (String NameForThisWindow,
	StringBuffer xTCPtemplate,
	StringBuffer xUDPtemplate,
	StringBuffer xIPv4template,
	StringBuffer xIPv6template,
	StringBuffer xDLLtemplateE,
	StringBuffer xDLLtemplateT,
	StringBuffer xDLLtemplateF,
	StringBuffer xETHtemplate,
	StringBuffer xETHTtemplate,
	StringBuffer xTOKtemplate,
	StringBuffer xTOKTtemplate,
	StringBuffer xFDDItemplate,
	StringBuffer xFDDITtemplate) { 


    //==============================================================
    //The code for the base class constructor adapted from 
    //Deitel and Deitel, 1997, "JAVA How to Program",  page 602.
    //The argument NameForThisWindow provides a String label 
    //for the PBconstr window.

    super(NameForThisWindow);


    //==============================================================
    //These are the data anchor values initialized by 
    //SetInitialParameters and passed from PBinit to PBconstr
    //via the argument list.

     TCPtemplate   = xTCPtemplate;
     UDPtemplate   = xUDPtemplate;
     IPv4template  = xIPv4template;
     IPv6template  = xIPv6template;
     DLLtemplateE  = xDLLtemplateE;
     DLLtemplateT  = xDLLtemplateT;
     DLLtemplateF  = xDLLtemplateF;
     ETHtemplate   = xETHtemplate;
     TOKTtemplate  = xTOKTtemplate;
     TOKtemplate   = xTOKtemplate;
     ETHTtemplate  = xETHTtemplate;
     FDDItemplate  = xFDDItemplate;
     FDDITtemplate = xFDDITtemplate;


     //==============================================================
     //add WindowCloser Frame has no automatic window closing
     addWindowListener(new CloseWindow());


     //==============================================================
     //Three font sizes are provided.================================
     //Although flagfont and mainfont have the same definition here,
     //they may not if I rewrite the code for display on a web page.
     //Therefore, the distinction stands.
     Font mainfont=new Font("Monospaced",Font.BOLD,16); //standard
     Font flagfont=new Font("Monospaced",Font.BOLD,16); //tcp flags
     Font bigfont =new Font("Monospaced",Font.BOLD,20); //gui header

       
     //==============================================================
     //set colors====================================================
     //Each protocol Layer has a distinct color.=====================
     //These are to provide visual links from information at the
     //selection area of the window to display information in the
     //final scrollPane display at the bottom. 


     //colors for use over entire gui================================
     Color cwhite = new Color (255,255,255);//white text            
     Color cblack = new Color (0,0,0);//black text
     Color pearl = new Color (201,216,255);//window background color
     Color vdarkblue = new Color(0,0,90);//text & button background   

     //colors to identify a single protocol layer====================

     //source host color (layer 7)
     Color darkred = new Color(120,0,0);

     //destination host color (layer 6)
     Color darkgreen = new Color(0,40,0);  

     //application layer color (layer 5)
     Color appOliveDrab = new Color (200,200,0);//olive drab 

     //transport layer color (layer 4)
     Color tcpTurquoise = new Color(0,255,255); 

     //ip layer color (layer 3)
     Color ipBlue = new Color (100,200,255);//darkgreyblue 

     //logicial link control layer color (layer2)
     Color dllYellow = new Color(255,255,0);//bright yellow   

     //medium access control layer color (layer1)
     Color macGreen = new Color(0,255,0);//green
     //==============================================================




     //==============================================================
     //Set some overall window properties============================  
     setLayout(new FlowLayout(0,9,4));
     setFont(mainfont);
     setBackground(pearl); //background for Construction Window
     setSize(1150,800);//width,height
     //==============================================================




     //==============================================================
     //There are 6 Final TextArea Objects============================
     //contained in the Final ScrollPane Display.====================
     //TextAreas:  F1, F2, F3, F4, F5, and F6========================


	TextArea F1 = new TextArea ("Final Display TextArea F1 "
                 +"\nMedia Access Control Part of DataLink Layer", 
                 4,66,2);
	         F1.setBackground(macGreen);
	         F1.setEditable(false);

	TextArea F2 = new TextArea ("Final Display TextArea F2 "
                 +"\nLogical Link Control Part of DataLink Layer", 
                 4,32,2);
	         F2.setBackground(dllYellow);
	         F2.setEditable(false);

        TextArea F3 = new TextArea ("Final Display TextArea F3 "
                 +"\nIP (internet protocol) Layer", 4,44,2);
	         F3.setBackground(ipBlue);
	         F3.setEditable(false);

	TextArea F4 = new TextArea ("Final Display TextArea F4 "
                 +"\nTransport Layer (tcp)", 4,44,2);
	         F4.setBackground(tcpTurquoise);
	         F4.setEditable(false);

	TextArea F5 = new TextArea ("Final Display TextArea F5 "
                 +"\nApplication Layer", 4,32,2);
	         F5.setBackground(appOliveDrab);
	         F5.setEditable(false);

	TextArea F6 = new TextArea ("Final Display TextArea F6 "
                 +"\nMAC Trailer with checksum (crc)",4,44,2);
	         F6.setBackground(macGreen);
	         F6.setEditable(false);
     //==============================================================

     //==============================================================
     //BEGIN BUILDING PANELS FOR THE CONSTRUCTION WINDOW
     //==============================================================


     //==============================================================
     //Panel P8 for Header information==============================

        Panel P8 = new Panel();
	P8.setLayout(new FlowLayout(0,9,4));

           Button Title =new Button
           (" PacketBuilder by Cricket Haygood Deane Copyright 1998 ");
           Title.setFont(bigfont);
           Title.setForeground(cwhite);
           Title.setBackground(vdarkblue);
           
           
           Button Docs = new Button (" Documentation ");
           Docs.setBackground(vdarkblue);
           Docs.setForeground(cwhite);
           Docs.setFont(bigfont);
           Docs.addActionListener(this);
 
           Button Quit = new Button (" Quit ");
           Quit.setBackground(vdarkblue);
           Quit.setForeground(cwhite);
           Quit.setFont(bigfont);
           Quit.addActionListener(this);


           P8.add(Title);
           P8.add(Docs);
           P8.add(Quit);
           add(P8);
     //=============================================================


     //=============================================================
     //Panel P7 for Source Host information========================

     Panel P7 = new Panel();
     P7.setLayout(new FlowLayout(0,9,4));

     TextField T7 = new TextField("Source Host",20);
	       T7.setBackground(darkred);
               T7.setForeground(cwhite);
	       T7.setEditable(false);

      Choice Ch7 = new Choice();
             Ch7.setBackground(darkred);
             Ch7.setForeground(cwhite);
	     Ch7.add("hostname");
             Ch7.add("hydra1a");
	     Ch7.add("hydra2a");
             Ch7.add("hydra3a");
	     Ch7.add("hydra4a.cs.utk.edu  ");

      TextField T7a = new TextField("ipv4 address",15); 
                T7a.setBackground(darkred);
		T7a.setForeground(cwhite);
		T7a.setEditable(false);

      TextField T7b = new TextField("ethernet address",17); 
                T7b.setBackground(darkred);
		T7b.setForeground(cwhite);
		T7b.setEditable(false);


       //Port numbers
       //Originally, Port numbers had their own TextField.
       //Now, the display for port numbers is confined
       //to the Choice Button for port numbers 
       //because I ran out of real estate on the gui. 
       

       Choice Ch7p = new Choice();
              Ch7p.setBackground(darkred);
	      Ch7p.setForeground(cwhite);
	      Ch7p.add("HostPort");Ch7p.add("port=5555");
	      Ch7p.add("port=5556");Ch7p.add("port=5557");



	//Assemble the Panel and add it to the display.
	P7.add(T7);
	P7.add(Ch7);
	P7.add(T7a);
	P7.add(T7b);
	P7.add(Ch7p);
	add(P7);
     //==============================================================



     //=============================================================
     //Panel P6 for Destination Host information====================

     Panel P6 = new Panel();
           P6.setLayout(new FlowLayout(0,9,4));


     TextField T6 = new TextField("Destination Host",20);
               T6.setBackground(darkgreen);
       	       T6.setForeground(cwhite);
               T6.setEditable(false);

      Choice Ch6 = new Choice();
             Ch6.setBackground(darkgreen);
	     Ch6.setForeground(cwhite);
	     Ch6.add("hostname");Ch6.add("hydra1a");
             Ch6.add("hydra2a");Ch6.add("hydra3a");
	     Ch6.add("hydra4a.cs.utk.edu  ");
             Ch6.add("cs.umd.edu");
	     Ch6.add("uhics.ics.hawaii.edu");
             Ch6.add("adelaide.edu.au");


      TextField T6a = new TextField("ipv4 address",15); //was 20
                T6a.setBackground(darkgreen);
		T6a.setForeground(cwhite);
		T6a.setEditable(false);

      TextField T6b = new TextField("ethernet address",17);//was 20
       		T6b.setBackground(darkgreen);
		T6b.setForeground(cwhite);
	        T6b.setEditable(false);



    //Port number objects
    //The display is limited to Ch6p choice button.

       Choice Ch6p = new Choice();
	      Ch6p.setBackground(darkgreen);
	      Ch6p.setForeground(cwhite);
              Ch6p.add("HostPort");
              Ch6p.add("port=5555");
	      Ch6p.add("port=5556");
              Ch6p.add("port=5557");


	//Assemble the Panel and add it to the display.
	P6.add(T6);
	P6.add(Ch6);
	P6.add(T6a);
	P6.add(T6b);
	P6.add(Ch6p);
	add(P6);
     //==============================================================



     //==============================================================
     //Panel P5 for Application Layer information====================

	Panel P5 = new Panel();
	P5.setLayout(new FlowLayout(0,9,4));

	TextField T5 = new TextField("Application Layer",20);
	          T5.setBackground(appOliveDrab);
	          T5.setEditable(false);

        // Choice button to choose user data field
	Choice Ch5 = new Choice();
               Ch5.setBackground(appOliveDrab);
	       Ch5.add("Layer 5   ");
               Ch5.add("English");
	       Ch5.add("French");
               Ch5.add("Russian");

	//Scrolling TextArea to display the chosen user message
	TextArea Ta5 = new TextArea("Application Layer (Layer 5)",
                 1,60,2);
	         Ta5.setBackground(appOliveDrab);
		 Ta5.setEditable(false);

	//Assemble the Panel and add it to the display.
	P5.add(T5);
	P5.add(Ch5);
	P5.add(Ta5);

	add(P5);
     //==============================================================





     //==============================================================
     //Panel P4 for Transport Layer information======================

	Panel P4 = new Panel();
	P4.setLayout(new FlowLayout(0,9,4));


	TextField T4 = new TextField("Transport Layer",20);
	          T4.setBackground(tcpTurquoise);
	          T4.setEditable(false);

	// Choice button to choose transport protocol 
	Choice Ch4 = new Choice();
	       Ch4.setBackground(tcpTurquoise);
	       Ch4.add("Layer  4  ");
               Ch4.add("TCP");
	       Ch4.add("UDP");

	//Scrolling TextArea to display the chosen protocol message
	TextArea Ta4 = new TextArea ("Transport Layer makes decisions"
                 +"based on port numbers and flags.",1,60,2);
		 Ta4.setBackground(tcpTurquoise);
		 Ta4.setEditable(false);


	//Assemble the Panel and add it to the display.
	P4.add(T4);
	P4.add(Ch4);
	P4.add(Ta4);
	add(P4);
     //==============================================================




     //==============================================================
     //Panel P4f for TCP Flags=======================================

     //==============================================================
     //Panel P4f contains:===========================================
     //     1-bit flags (urg,ack,psh,rst,syn,fin)====================
     //     16-bit flags (windowSize, urgentPointer)================= 
     //     32-bit flags (sequence and ack numbers)==================


	Panel P4f = new Panel();
	P4f.setLayout(new FlowLayout(0,9,4));

	TextField T4f = new TextField("TCP Flags",9);
                  T4f.setBackground(tcpTurquoise);
                  T4f.setEditable(false);

     Choice Chf1 = new Choice(); 
            Chf1.setBackground(tcpTurquoise);
            Chf1.setFont(flagfont);
            Chf1.add("URG"); Chf1.add("U=0");Chf1.add("U=1");

     Choice Chf2 = new Choice(); 
            Chf2.setBackground(tcpTurquoise);
            Chf2.setFont(flagfont);
            Chf2.add("ACK"); Chf2.add("A=0");Chf2.add("A=1");

     Choice Chf3 = new Choice(); 
            Chf3.setBackground(tcpTurquoise);
            Chf3.setFont(flagfont);
            Chf3.add("PSH"); Chf3.add("P=0");Chf3.add("P=1");
 
     Choice Chf4 = new Choice(); 
            Chf4.setBackground(tcpTurquoise);
            Chf4.setFont(flagfont);
            Chf4.add("RST"); Chf4.add("R=0");Chf4.add("R=1");

     Choice Chf5 = new Choice(); 
            Chf5.setBackground(tcpTurquoise);
            Chf5.setFont(flagfont);
            Chf5.add("SYN"); Chf5.add("S=0");Chf5.add("S=1");

     Choice Chf6 = new Choice(); 
            Chf6.setBackground(tcpTurquoise);
            Chf6.setFont(flagfont);
            Chf6.add("FIN"); Chf6.add("F=0");Chf6.add("F=1");

    //WindowSize (16-bit field) is set by SetTCPfields,
    //based upon choice button Chf9.
	Choice Chf9 = new Choice();
               Chf9.setBackground(tcpTurquoise);
               Chf9.setFont(mainfont);
	       Chf9.add("WinSiz");
               Chf9.add("WS=1");
	       Chf9.add("WS=2"); 
               Chf9.add("WS=3");
               Chf9.add("WS=4"); 
               Chf9.add("WS=6");
               Chf9.add("WS=8"); 
               Chf9.add("WS=10");
               Chf9.add("WS=12");

    //UrgentPtr (16-bit field) is set by SetTCPfields,
    //based upon choice button Chf10.
	Choice Chf10 = new Choice();
               Chf10.setBackground(tcpTurquoise);
               Chf10.setFont(mainfont);
	       Chf10.add("UrgPtr");
               Chf10.add("UP=0");
	       Chf10.add("UP=4");
	       Chf10.add("UP=8");
	       Chf10.add("UP=12");
	       Chf10.add("UP=16");
	       Chf10.add("UP=20");

 
    //Sequence Number (32-bit field) is set by SetTCPfields,
    //based upon choice button Chf7.
	Choice Chf7 = new Choice(); 
               Chf7.setBackground(tcpTurquoise);
               Chf7.setFont(mainfont);
	       Chf7.add("SeqNum");
               Chf7.add("Seq=139");
	       Chf7.add("Seq=140");
               Chf7.add("Seq=141");

    //Ack Number (32-bit field) is set by SetTCPfields,
    //based upon choice button Chf8.
	Choice Chf8 = new Choice(); 
               Chf8.setBackground(tcpTurquoise);
               Chf8.setFont(mainfont);
	       Chf8.add("AckNum");
               Chf8.add("Ack=138");
	       Chf8.add("Ack=139");
               Chf8.add("Ack=140");


    //Assemble the Panel and add it to the display
	P4f.add(T4f);
	P4f.add(Chf1);//urg
        P4f.add(Chf2);//ack
        P4f.add(Chf3);//psh
        P4f.add(Chf4);//rst
        P4f.add(Chf5);//syn
        P4f.add(Chf6);//fin
	P4f.add(Chf9);//windowSize
	P4f.add(Chf10);//tcp urgent ptr
	P4f.add(Chf7);//seqnum
	P4f.add(Chf8);//acknum

	add(P4f);
     //==============================================================




     //==============================================================
     //Panel P3 for IP Layer information=============================


	Panel P3 = new Panel();
	P3.setLayout(new FlowLayout(0,9,4));

	TextField T3 = new TextField("Internet Layer",20);
	          T3.setBackground(ipBlue);
	          T3.setEditable(false);

    // Choice button to choose IP protocol field
	Choice Ch3 = new Choice();
	       Ch3.setBackground(ipBlue);
	       Ch3.add("Layer 3   ");
               Ch3.add("IPv4");
	       Ch3.add("IPv6");


    //Scrolling TextArea to display the chosen protocol message
	TextArea Ta3 = new TextArea("IP Layer makes IP "
                 +"address decisions.",1,60,2);
		 Ta3.setBackground(ipBlue);
		 Ta3.setEditable(false);

	 //Assemble the Panel and add it to the display.
	 P3.add(T3);
	 P3.add(Ch3);
	 P3.add(Ta3);
	 add(P3);
     //==============================================================




     //==============================================================
     //Panel P3g for IPv4 Flags======================================

     //==============================================================
     //Panel P3g contains:===========================================
     //     3-bit flag (precedence)================================== 
     //     1-bit flags (delay,reliability,throughput,cost)==========
     //     8-bit data(timeToLive,protocol)==========================
     //     note: ipv4 timeToLive field == ipv6 hopLimit field=======
     //     note: ipv4 protocol field == ipv6 nextHeader field=======

	Panel P3g = new Panel();
	P3g.setLayout(new FlowLayout(0,9,4));

	TextField T3g = new TextField("IP Flags",9);
                  T3g.setBackground(ipBlue);
                  T3g.setEditable(false);


        //precedence
	Choice Chg1 = new Choice();
               Chg1.setBackground(ipBlue);
	       Chg1.add("Prec=0");
               Chg1.add("Prec=1");
	       Chg1.add("Prec=2");
               Chg1.add("Prec=3");
	       Chg1.add("Prec=4");
               Chg1.add("Prec=5");
	       Chg1.add("Prec=6");
               Chg1.add("Prec=7");

        //delay
	Choice Chg2 = new Choice();
               Chg2.setBackground(ipBlue);
	       Chg2.add("Delay=0");
               Chg2.add("Delay=1");
        
        //throughput
	Choice Chg3 = new Choice();
               Chg3.setBackground(ipBlue);
	       Chg3.add("ThPut=0");
               Chg3.add("ThPut=1");

        //reliability 
        Choice Chg4 = new Choice();
               Chg4.setBackground(ipBlue);
	       Chg4.add("Rely=0");
               Chg4.add("Rely=1");

        //cost
	Choice Chg5 = new Choice();
               Chg5.setBackground(ipBlue);
	       Chg5.add("Cost=0");
               Chg5.add("Cost=1");

	//int PREC,DELAY,THPUT,RELY,COST;
	//PREC=0;DELAY=1;THPUT=2;RELY=3;COST=4;


        //Time to live field (in ipv6: hopLimit)
        Choice Chg6 = new Choice(); 
               Chg6.setBackground(ipBlue);
               Chg6.add("Time2Live");
               Chg6.add("TTL=16");
	       Chg6.add("TTL=8");
               Chg6.add("TTL=4");
	       Chg6.add("TTL=2");
               Chg6.add("TTL=1");
  	       Chg6.add("TTL=0");
      
        //Protocol field (in ipv6: nextHeader)
        Choice Chg7 = new Choice(); 
               Chg7.setBackground(ipBlue);
	       Chg7.add("Protocol");
	       Chg7.add("TCP");//code for tcp is 6
               Chg7.add("UDP");//code for udp is 17


    //Assemble the Panel and add it to the display
	P3g.add(T3g);
	P3g.add(Chg1);//precedence
    	P3g.add(Chg2);//delay
    	P3g.add(Chg3);//reliability
    	P3g.add(Chg4);//throughput
    	P3g.add(Chg5);//cost
	P3g.add(Chg6);//timeToLive
	P3g.add(Chg7);//protocol

	add(P3g);
     //==============================================================



     //==============================================================
     //Panel P2 for Logical Link Control Layer information===========

	Panel P2 = new Panel();
	P2.setLayout(new FlowLayout(0,9,4));

	TextField T2 = new TextField("Data Link LLC Layer",20);
	          T2.setBackground(dllYellow);
                  T2.setEditable(false);

    //Choice button to choose llc protocol
	Choice Ch2 = new Choice();
	       Ch2.setBackground(dllYellow);
	       Ch2.add("Logical Link Control   ");
               Ch2.add("Ethernet Bus LLC");
	       Ch2.add("Ethernet Token Ring LLC");
               Ch2.add("FDDI LLC");

     //Scrolling TextArea to display the chosen protocol message
	TextArea Ta2 = new TextArea ("LLC provides interface "
                 +"from MAC Layer to IP Layer.",1,50,2);
		 Ta2.setBackground(dllYellow);
		 Ta2.setEditable(false);

	 //Assemble the Panel and add it to the display.
	 P2.add(T2);
	 P2.add(Ch2);
	 P2.add(Ta2);
	 add(P2);
     //==============================================================



     //==============================================================
     //Panel P2f for LLC Flag information============================
     //This Panel contains:==========================================
     //     16-bit data (ethertype)================================== 
     //     the button to call checksum calculation==================
     //         (checksum calculated for all layers,=================
     //         and returns 16 bit value to tcp, udp, and ip=========
     //         and returns 32 bit value to mac layer protocols)===== 


	Panel P2f = new Panel();
	P2f.setLayout(new FlowLayout(0,9,4));

	TextField T2f = new TextField("LLC Flags ",9);
	          T2f.setBackground(dllYellow);
                  T2f.setEditable(false);

        //ethertype
        Choice Ch2a = new Choice();
	       Ch2a.setBackground(dllYellow);
	       Ch2a.add("Ethertype");
               Ch2a.add("Etype=IPv4");
	       Ch2a.add("Etype=IPv6");

       //Have to use a Choice Button instead of a simple button
       //because SetChecksumParameters implements ItemListener 
       //(not ActionListener) and uses itemStateChanged to set 
       //checksum values in templates
       Choice Chcksum  = new Choice(); 
              Chcksum.setBackground(darkred);
              Chcksum.setForeground(cwhite);
              Chcksum.add(" Calculate CheckSum for all Layers "
              +"-- Do This Last ");
        
	 //Assemble the Panel and add it to the display.
	 P2f.add(T2f);
	 P2f.add(Ch2a);
         P2f.add(Chcksum);
	 add(P2f);
     //==============================================================




     //==============================================================
     //Panel P1 for MAC Layer information============================
     
	Panel P1 = new Panel();
	P1.setLayout(new FlowLayout(0,9,4));

	TextField T1 = new TextField("Data Link MAC Layer",20);
	          T1.setBackground(macGreen);
	          T1.setEditable(false);

	// Choice button to choose mac protocol field
	Choice Ch1 = new Choice();
	       Ch1.setBackground(macGreen);
	       Ch1.add("Medium Access Control  ");
               Ch1.add("Ethernet Bus");
	       Ch1.add("Ethernet Token Ring");
               Ch1.add("FDDI");


       //Scrolling TextArea to display the chosen protocol message
       TextArea Ta1 = new TextArea ("MAC Layer makes decisions "
                +"based on Ethernet Addresses.",1,50,2);
	        Ta1.setBackground(macGreen);
	        Ta1.setEditable(false);


	 //Assemble the Panel and add it to the display.
	 P1.add(T1);
	 P1.add(Ch1);
	 P1.add(Ta1);

	 add(P1);
     //==============================================================



     
     //==============================================================
     //Panel P0 outer Panel for bottom Layer=========================

     //==============================================================
     //Panel P0 contains: ScrollPane drawPF==========================
     //     ScrollPane drawPF contains: Panel PF===================== 
     //          Panel PF contains: 6 distinct TextAreas=============
     //               TextArea F1: MAC header display================
     //               TextArea F2: LLC header display================
     //               TextArea F3: IP header display=================
     //               TextArea F4: transport header display==========
     //               TextArea F5: application data display==========
     //               TextArea F6: MAC trailer display===============       

     // The TextAreas F1,F2,F3,F4,F5,F6 are created with 
     // SetInitialParameters and are updated each time a 
     // Choice button is pushed.
     // These TextAreas are declared at top of program
     // to give global scope.


	Panel P0 = new Panel();
	P0.setLayout(new FlowLayout(0,10,9));

	Panel PF = new Panel();
	PF.setLayout(new FlowLayout(0,0,1));

    //Assemble the PF Panel() Object
	PF.add(F1);
	PF.add(F2);
	PF.add(F3);
	PF.add(F4);
	PF.add(F5);
	PF.add(F6);

   //Assemble the ScrollPane object
   //The following code for ScrollPane adapted from 
   //Deitel and Deitel, "JAVA How to Program", 1998, page 621 

	ScrollPane drawPF = new ScrollPane(1);
	drawPF.setSize(978,135); //width,height
        drawPF.setBackground(cwhite);
	drawPF.add(PF);
       
        //Place drawPF ScrollPane inside Panel P0 
        P0.add(drawPF);
        add(P0);
   //==============================================================

   //==============================================================
   //END OF BUILDING PANELS FOR THE CONSTRUCTION WINDOW
   //==============================================================


   //==============================================================
   //Take care of all ItemListeners.===============================
   //This is done last because so many of the ItemListeners========
   //affect display parameters in layers above/below===============
   //the layer containing the specific Choice button.==============

   //==============================================================
   //ItemListeners for Source Host (Panel P7)======================  

   //Set Host Address Parameters
   //based upon Ch7 choice of hostname
     Ch7.addItemListener(new SetHostAddresses(Ch1,Ch3,Ch7,Ch6,
     T7a,T6a,T7b,T6b,F1,F3,IPv4template,IPv6template,
     ETHtemplate,TOKtemplate,FDDItemplate,1));

   // Set Host Port Parameters 
   // based upon Ch7p choice of port number
     Ch7p.addItemListener(new SetHostPort
     (Ch4,300,0,TCPtemplate,UDPtemplate,F4));
   //==============================================================



   //==============================================================
   //ItemListeners for Destination Host (Panel P6)=================  

   //Set Host Address Parameters
   //based upon Ch6 choice of hostname
     Ch6.addItemListener(new SetHostAddresses(Ch1,Ch3,Ch7,Ch6,
     T7a,T6a,T7b,T6b,F1,F3,IPv4template,IPv6template,
     ETHtemplate,TOKtemplate,FDDItemplate,2));


   // Set Host Port Parameters 
   // based upon Ch6p choice of port number
     Ch6p.addItemListener(new SetHostPort
     (Ch4,300,1,TCPtemplate,UDPtemplate,F4));
   //==============================================================



   //==============================================================
   //ItemListeners for Application Layer (Panel P5)================  

   //Set Display Ch5 choice in Ta5 TextArea
   //based upon Ch5 choice of message
     Ch5.addItemListener
     (new SetLayer5Parameters(Ta5,F5,500));

   //Update Length Parameter on udptemplate,
   //ipv4template, ipv6template, and ethtemplate
   //based upon choices in application layer (Ch5),
   //transport layer (Ch4), and ip layer (Ch3).
   Ch5.addItemListener (new SetLengthParameters(Ch5,Ch4,Ch3,Ch1,
   UDPtemplate,IPv4template,IPv6template,ETHtemplate, F4,F3,F1));
   //==============================================================


   //==============================================================
   //ItemListeners for Transport Layer (Panel P4)==================

   //Set Display for TextArea Ta4
   //based upon Ch4 choice of protocol (tcp or udp) 
     Ch4.addItemListener(new SetLayer4Parameters(Ch4,Ta4,F4,
     TCPtemplate,UDPtemplate,400));


   //Update Length Parameter on udptemplate,
   //ipv4template, ipv6template, and ethtemplate
   //based upon choices in application layer (Ch5),
   //transport layer (Ch4), and ip layer (Ch3).
   Ch4.addItemListener (new SetLengthParameters(Ch5,Ch4,Ch3,Ch1,
   UDPtemplate,IPv4template,IPv6template,ETHtemplate, F4,F3,F1));
   //==============================================================


   //==============================================================
   //ItemListeners for TCP Flags and TCP Fields (Panel 4f)=========  
    
   //URG,ACK,PSH,RST SYN,FIN help select TCPtemplate[index]
   //to write flag value directly to the template.
     int URG,ACK,PSH,RST,SYN,FIN;
     URG=1;ACK=2;PSH=3;RST=4;SYN=5;FIN=6;

   //TCP one-bit flags============================================= 

   //urg flag
     Chf1.addItemListener
          (new SetTCPflags(Ch4,TCPtemplate,UDPtemplate,F4,URG));

   //ack flag
     Chf2.addItemListener
          (new SetTCPflags(Ch4,TCPtemplate,UDPtemplate,F4,ACK));

   //psh flag
     Chf3.addItemListener
          (new SetTCPflags(Ch4,TCPtemplate,UDPtemplate,F4,PSH));

   //rst flag
     Chf4.addItemListener
          (new SetTCPflags(Ch4,TCPtemplate,UDPtemplate,F4,RST));

   //syn flag
     Chf5.addItemListener
          (new SetTCPflags(Ch4,TCPtemplate,UDPtemplate,F4,SYN));

   //fin flag
     Chf6.addItemListener
          (new SetTCPflags(Ch4,TCPtemplate,UDPtemplate,F4,FIN));
 
   //TCP fields====================================================

   //sequence number
     Chf7.addItemListener 
          (new SetTCPfields(Ch4,TCPtemplate,UDPtemplate,F4,470));

   //ack number
     Chf8.addItemListener 
          (new SetTCPfields(Ch4,TCPtemplate,UDPtemplate,F4,480));

   //windowSize
     Chf9.addItemListener
          (new SetTCPfields(Ch4,TCPtemplate,UDPtemplate,F4,490));

   //urgent pointer
     Chf10.addItemListener
          (new SetTCPfields (Ch4,TCPtemplate,UDPtemplate,F4,450));
   //==============================================================


   //==============================================================
   //ItemListeners for IP Layer  (Panel P3)========================
  
   //Set Display for TextArea Ta3
   //based upon Ch3 choice of protocol (ipv4 or ipv6) 
     Ch3.addItemListener
     (new SetLayer3Parameters(Ta3,F3,IPv4template,IPv6template,300));

   //Update Length Parameter on udptemplate,
   //ipv4template, ipv6template, and ethtemplate
   //based upon choices in application layer (Ch5),
   //transport layer (Ch4), and ip layer (Ch3).
   Ch3.addItemListener (new SetLengthParameters(Ch5,Ch4,Ch3,Ch1,
   UDPtemplate,IPv4template,IPv6template,ETHtemplate, F4,F3,F1));
   //==============================================================




   //==============================================================
   //ItemListeners for IP Flags (Panel P3g)========================

   //Set display parameters for individual ip flags
   //based on individual choice buttons (ChgN).
  
   //precedence 3-bit flag
     Chg1.addItemListener
          (new SetIPflags(Ch3,IPv4template,IPv6template,F3,0,1));

   //delay 1-bit flag
     Chg2.addItemListener
          (new SetIPflags(Ch3,IPv4template,IPv6template,F3,1,1));

   //throughput 1-bit flag
     Chg3.addItemListener
          (new SetIPflags(Ch3,IPv4template,IPv6template,F3,2,1));

   //reliability 1-bit flag
     Chg4.addItemListener
          (new SetIPflags(Ch3,IPv4template,IPv6template,F3,3,1));

   //cost 1-bit flag
     Chg5.addItemListener
          (new SetIPflags(Ch3,IPv4template,IPv6template,F3,4,1));

   //timeToLive 8-bit value
     Chg6.addItemListener
          (new SetIPflags(Ch3,IPv4template,IPv6template,F3,100,8));

   //protocol 8-bit value
     Chg7.addItemListener
          (new SetIPflags(Ch3,IPv4template,IPv6template,F3,200,8));
   //==============================================================




   //==============================================================
   //ItemListeners for Logical Link Control Layer (Panel P2)=======
  
   //Set Display for TextArea Ta2
   //based upon Ch2 choice of protocol (eth bus,eth token ring,fddi) 
     Ch2.addItemListener
         (new SetLLCParameters(Ta2,F2,Ch2,Ch2a,DLLtemplateE,
          DLLtemplateT, DLLtemplateF,200));
   //==============================================================




   //==============================================================
   //ItemListeners for LLC Flags (Panel 2f)========================

   //Set Ethertype parameter 
   //based upon Ch2a choice of ethertype
     Ch2a.addItemListener
         (new SetLLCParameters(Ta2,F2,Ch2,Ch2a,DLLtemplateE,
          DLLtemplateT, DLLtemplateF,210));
   //==============================================================




   //==============================================================
   //ItemListeners for Medium Access Control Layer (Panel P1)======

   //Set Display for TextArea Ta1
   //based upon Ch1 choice of protocol 
   //(eth bus, eth token ring, fddi) 
     Ch1.addItemListener(new SetMACParameters(Ta1,F1,F6,
         ETHtemplate,ETHTtemplate,
         TOKtemplate,TOKTtemplate,
         FDDItemplate,FDDITtemplate,100));
   //==============================================================




   //==============================================================
   //ItemListener for Checksum=====================================
   //This itemListener takes templates from all protocol layers
   //and calculates checksums in the correct order to take care
   //of encapsulation of upper layers inside lower layers. 
   //A 16-bit value is written to tcp, udp, and ipv4 templates.
   //A 32-bit value is written to eth, eth-token ring, and 
   //fddi templates.

     Chcksum.addItemListener(new SetChecksumParameters
             (Ch5,Ch4,Ch3,Ch2,Ch1,
              TCPtemplate,UDPtemplate,
	      IPv4template,IPv6template,
	      DLLtemplateE,
              DLLtemplateT,
              DLLtemplateF,
	      ETHtemplate,ETHTtemplate,
              TOKtemplate,TOKTtemplate, 
	      FDDItemplate,FDDITtemplate,
	      F1,F2,F3,F4,F5,F6));
   //==============================================================





   //==============================================================
   //The Construction Window has 2 buttons in the top Panel (P8).
   //The "Documentation" button calls up the Documentation Window.
   //The "Quit" button calls up the Termination Window.

   //These window objects are defined below.
   //The actions from the buttons are handled in the 
   //method actionPerformed() which immediately follows the 
   //after the end of the constructor for class PBconstr.



   //==============================================================
   //Documentation Window==========================================
   //This window can have 2 instances existing at once in the 
   //PacketBuilder program.  DocWindow I is the instance created
   //by clicking the Documentation button in the Initialization
   //Window.  DocWindow II is the instance created by clicking
   //the Documentation button in the Construction Window. 

   //define PacketBuilderDoc PBdoc object 
   PacketBuilderDoc = 
   new PBdoc ("PacketBuilder Documentation Window II  ");



   //==============================================================
   //Termination Window============================================
   //The Termination window was created to give the user a chance
   //to change his mind after clicking on the Quit Button.  There
   //are yes/no options on this window to answer the question:
   //    Quit now???

   //define PacketBuilderQuit PBquit object 
   PacketBuilderQuit = 
   new PBquit ("PacketBuilder Termination Window       ");

   }//end constructor for PBconstr class
   //==============================================================


   //==============================================================
   public void actionPerformed (ActionEvent e){

   //This method handles actionEvents generated by 2 buttons
   //in the top Panel P8.  These buttons are:
   //     the "Documentation" button
   //     the "Quit" button

      String arg = e.getActionCommand();

      if(arg.equals(" Quit "))
             PacketBuilderQuit.setVisible(true);

      else if(arg.equals(" Documentation ")) 
            PacketBuilderDoc.setVisible(true);

           }//end actionPerformed

//==========================================================
//WindowCloser method adapted from Deitel and Deitel, 1997
//"JAVA How to Program", page 603.

public class CloseWindow extends WindowAdapter {
  public void windowClosing(WindowEvent e) {
  e.getWindow().setVisible(false);
  }//end method windowClosing()
}//end class CloseWindow

}//end PBconstr class

