//file: PBinit.java
//============================================================
//Introduction to PacketBuilder===============================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================

PacketBuilder is software written in JAVA version 1.1.2.
The purpose of PacketBuilder is to provide a user friendly
introduction to the Protocols of the Internet.

The ip stack has (at least) five layers, a new set of data
labels for each layer, and the assumption that anyone who 
might be interested in network protocols is already fluent 
in decimal, hexadecimal, and binary numbers.  The amount 
of information that must be assimilated to fully understand 
internet protocols is daunting.

But the underlying concept of the ip stack is simple and 
straightforward.  

        For each member of the protocol stack:
	1. Line up all the data labels in order
	2. Get the numeric value for each data label
	3. Hammer all the numbers into 0's and 1's

The steps 1, 2, and 3 above correspond to the 3-Row
display used in PacketBuilder.  The user selects options
(by clicking on JAVA Choice buttons) in each protocol
and these choices are reflected in the final display.

PacketBuilder also provides an overall picture of the
protocol suite.  The Construction Window (where choices
are made) presents each protocol layer as a horizontal
JAVA Panel with its own distinct color.  The final 
display (lowermost panel) concatenates the different 
protocol headers in order, followed by application data
and MAC trailer.  The colors in the bottom panel match
colors in the layers above, giving a visual cue to the
user as to how the color blocks work together.

[PacketBuilder has been tested on black and white 
monitors.  The different grey tones are not as dramatic
as full color, but the visual cue still holds.]

PacketBuilder also has a Documentation Window which
provides online reading for those users who wish to
dig deeper immediately.

The PacketBuilder program contains four gui Windows:

	The Initialization Window
        The Construction Window
	The Documentation Window
        The Termination Window

Class PBinit:  	The Initialization Window.

      The purpose of this Window is to provide access to
      all other windows and to initialize the templates
      for all protocols presented in PacketBuilder.

      This window is an Applet.  The html code to run
      this Applet is shown below.
 
	<html>
	<title> PB.java</title>
	<p>
	<body bgcolor="ffffff">
	<h2> My java applet says:
	<APPLET CODE="PBinit.class" 
	        WIDTH=750 
	     	HEIGHT=400 >
	</applet>
	</h2>
	</html>


      PBinit invokes Frame classes to open new windows. 
	Class PBconstr
	Class PBdoc 
	Class PBquit
      
      The mouse click event that calls up PBconstr also calls
      Class SetInitialParameters to initalize all data templates.

Class PBconstr: The Construction Window

      The purpose of this Window is to enable the user to
      select options at each layer and build a simple
      MAC frame (the Packet). 

      PBconstr uses classes to write selected data to templates. 
	Class SetHostAddresses (ip and ethernet addresses)
	Class SetHostPort (port number)
        Class SetLayer5Parameters (set application layer data choice)
	Class SetLayer4Parameters (set transport layer protocol choice)
        Class SetTCPflags (set one-bit tcp flags)
	Class SetTCPfields (set 16 and 32-bit tcp options)
	Class SetLayer3Parameters (set ip layer protocol choice)
	Class SetIPflags (set ip options)
        Class SetLLCParameters (set LLC layer protocol choice)
        Class SetMACParameters (set MAC layer protocol choice)
        Class SetLengthParameters (for udp, ipv4, ipv6, and eth bus)  
        Class SetChecksumParameters (calculate checksum for all layers)

      PBconstr invokes Frame classes to open new windows. 
	Class PBdoc 
	Class PBquit

Class PBdoc:  The Documentation Window	

      The purpose of this window is to display text information 
      about Internet Protocols. PBdoc uses a choice button 
      (DocChoice) to select a display page.

      PBdoc invokes Frame classes to open a new window. 
	Class PBquit

Class PBquit:  The Termination Window

      The purpose of this Window is to give the user a second
      chance after clicking on the Quit Button in another window.
      There is a Question:  "Quit PacketBuilder now???"
      and a choice of answers:
	YES. -- This calls System.exit(0) and ends the program.
	NO.  -- This calls dispose() and destroys the Termination Window.
=========================================================================*/

//

//============================================================
//Introduction to Class PBinit================================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================


//PBinit contains 3 active Buttons.  The response to a click
//on any of these Buttons is to bring up a new window.
//   Con Button:   brings up the Construction Window
//   Docs Button:  brings up the Documentation Window
//   Quit Button:  brings up the Quit Window

//PBinit also defines the "Data Anchors".  These are the
//StringBuffer templates which carry protocol header
//information, which can be modified by clicking on
//choice buttons in the Construction Window.   

//Before modifications to any template can be made,
//all the templates must be initialized.  A click on the
//Con Button triggers 2 events in the order below.

//  1. A call to class SetInitialParameters, where
//     all templates are initialized.
//  2. A call to class PBconstr, which brings up the
//     Construction Window. 

============================================================== */

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

public class PBinit extends Applet implements  ActionListener {

   private PBconstr PacketBuilder;
   private PBdoc PacketBuilderDoc;
   private PBquit PacketBuilderQuit;
   private Panel Phdr;
   private Panel Psec;
   private Panel Pthird;
   private Panel Pfourth;
   private Panel Pfifth;
   private Panel Psixth;

    //===========================================================
    //Data Anchors
   	StringBuffer TCPtemplate  = new StringBuffer();//for tcp
	StringBuffer UDPtemplate  = new StringBuffer();//for udp
	StringBuffer IPv4template = new StringBuffer();//for ipv4
	StringBuffer IPv6template = new StringBuffer();//for ipv6
	StringBuffer DLLtemplateE = new StringBuffer();//for dll eth
	StringBuffer DLLtemplateT = new StringBuffer();//for dll tok
	StringBuffer DLLtemplateF = new StringBuffer();//for dll fddi
	StringBuffer ETHtemplate  = new StringBuffer();//for eth
	StringBuffer ETHTtemplate = new StringBuffer();//for eth trailer
	StringBuffer TOKtemplate  = new StringBuffer();//for tokring 
	StringBuffer TOKTtemplate = new StringBuffer();//for tokring trailer
	StringBuffer FDDItemplate = new StringBuffer();//for fddi
	StringBuffer FDDITtemplate= new StringBuffer();//for fddi trailer


    //===========================================================
    //Applets must be initialized with the init method        

    public void init() {
          setSize(750,400);//width,height of init window


           Color pearl = new Color (201,216,255);//background
           Color darkblue = new Color(0,0,90);
	   Color cwhite = new Color(255,255,255);
	   Font  f  = new Font("Monospaced",Font.BOLD,20);

           setLayout(new FlowLayout(0,9,9));
           setSize(750,400);//width,height
           setBackground(pearl);
           
           //======================================================
           //build the Phdr Panel() 
           Phdr = new Panel();
           Phdr.setLayout(new FlowLayout());
           Phdr.setBackground(pearl);
           Phdr.setFont(f);

           //======================================================
           //build the Psec Panel() 
           Psec = new Panel();
           Psec.setLayout(new FlowLayout(0,9,9));
           Psec.setBackground(pearl);
           Psec.setFont(f);

           //======================================================
           //build the Pthird Panel() 
           Pthird = new Panel();
           Pthird.setLayout(new FlowLayout(0,9,9));
           Pthird.setBackground(pearl);
           Pthird.setFont(f);

           //======================================================
           //build the Pfourth Panel() 
           Pfourth = new Panel();
           Pfourth.setLayout(new FlowLayout(0,9,9));
           Pfourth.setBackground(pearl);
           Pfourth.setFont(f);

           //======================================================
           //build the Pfifth Panel() 
           Pfifth = new Panel();
           Pfifth.setLayout(new FlowLayout(0,9,9));
           Pfifth.setBackground(pearl);
           Pfifth.setFont(f);

           //======================================================
           //build the Psixth Panel() 
           Psixth = new Panel();
           Psixth.setLayout(new FlowLayout(0,9,9));
           Psixth.setBackground(pearl);
           Psixth.setFont(f);

           //======================================================
           //build the Hdr Button     
           Button Hdr = new Button
           (" PacketBuilder by Cricket Haygood Deane Copyright 1998 ");
	   Hdr.setFont(f);
           Hdr.setForeground(cwhite);
           Hdr.setBackground(darkblue);

           //======================================================
           //build the Con Button     
           Button Con = new Button 
           (" Start PacketBuilder Construction Window               ");
	   Con.setBackground(darkblue);
           Con.setForeground(cwhite);
	   Con.setFont(f);
	   Con.addActionListener(this);

           //======================================================
           //build the Quit Button     
	   Button Quit = new Button 
           (" Quit All PacketBuilder Windows                        ");
	   Quit.setBackground(darkblue);
           Quit.setForeground(cwhite); 
	   Quit.setFont(f);
	   Quit.addActionListener(this);

           //======================================================
           //SetInitialParameters sets values for ALL templates
           //These templates are passed to PBconstr 
           //(the Construction Window)
	   Con.addActionListener(new SetInitialParameters
           (TCPtemplate,UDPtemplate,IPv4template,IPv6template,
            DLLtemplateE, DLLtemplateT, DLLtemplateF,
            ETHtemplate,ETHTtemplate,
            TOKtemplate,TOKTtemplate,
       	    FDDItemplate,FDDITtemplate,800));

           //======================================================
           //build the Docs Button     
	   Button Docs = new Button 
           (" Start PacketBuilder Documentation Window              ");
	   Docs.setBackground(darkblue);
           Docs.setForeground(cwhite); 
	   Docs.setFont(f);
	   Docs.addActionListener(this);

           //======================================================
           Label message = new Label
           (" PacketBuilder software written by Cricket Haygood Deane ");
           message.setFont(f);
           message.setForeground(darkblue);

           //======================================================
           Label messag2 = new Label
           (" Send comments to: deane@cs.utk.edu                    ");
           messag2.setFont(f);
           messag2.setForeground(darkblue);

          
           //======================================================
           //Assemble the display     

           Phdr.add(Hdr);
           Psec.add(Con);
           Pthird.add(Docs);
           Pfourth.add(Quit);
           Pfifth.add(message);
           Psixth.add(messag2);

           add(Phdr);
           add(Psec);
           add(Pthird);
           add(Pfourth);
           add(Pfifth);
           add(Psixth);
           
             
           //define PacketBuilder PBconstr object
	   PacketBuilder = new PBconstr ("PacketBuilder Construction Window      ",
	                   TCPtemplate,  UDPtemplate,
	                   IPv4template, IPv6template,
                           DLLtemplateE, DLLtemplateT, DLLtemplateF,
			   ETHtemplate, ETHTtemplate,
			   TOKtemplate, TOKTtemplate,
			   FDDItemplate,FDDITtemplate );

           //define PacketBuilderHelp PBdoc object 
           PacketBuilderDoc = new PBdoc ("PacketBuilder Documentation Window I   ");

           //define PacketBuilderQuit PBquit object 
           PacketBuilderQuit = new PBquit ("PacketBuilder Termination Window       ");

	   }//end public void init()


   //======================================================
   public void actionPerformed (ActionEvent e){
   //This function defines what action occurs
   //when a button in the Initialization Window 
   //is clicked.

   String arg = e.getActionCommand();
  
      //call up Termination Window
      if(arg.equals(" Quit All PacketBuilder Windows                        ")) 
               PacketBuilderQuit.setVisible(true);
      
      //call up Documentation Window
      else if(arg.equals(" Start PacketBuilder Documentation Window              ")) 
             PacketBuilderDoc.setVisible(true);
     
      //call up Construction Window
      else if(arg.equals(" Start PacketBuilder Construction Window               ")) 
	  PacketBuilder.setVisible(true);
          
   }//end actionPerformed



//==========================================================
//WindowCloser method adapted from Deitel and Deitel, 1997
//"JAVA How to Program", page 603.

//This CloseWindow method is inherited by
//   the Construction Window (class PBconstr)
//   the Documentation Window (class PBdoc)
//   the Termination Window (class PBquit)

public class CloseWindow extends WindowAdapter {
  public void windowClosing(WindowEvent e) {
  e.getWindow().setVisible(false);
  }//end method windowClosing()
}//end class CloseWindow


}//end class PBinit
