//file: PBquit.java
//============================================================
//Introduction to Class PBquit================================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================

The class PBquit is the Termination Window.

This class is called by class PBinit, or class PBconstr,
or class PBdoc in response to a mouse-click event on an
active Button named Quit.  

The Termination Window is very simple.

There is one inactive button for the title display. 

There is one Label String:  "Quit PacketBuilder now???"

There are two active Buttons:  "Yes"  and  "No"

The purpose of PBquit is to give the user a chance to 
change his mind after clicking on a Quit Button.

The message at the bottom (how to exit PacketBuilder
if the "Yes" Button does not work) is to take care of
a limitation of JAVA 1.1.2.  If the user of the program
does not "own" the class executable files (i.e. has
not down-loaded files to his own area), no System
commands can be executed.  The exit command for 
PacketBuilder is System.exit(0), a System command.   

I wrote this window the day I hit the Quit Button
instead of the Documentation Button and lost the packet
I had just built.  

============================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

public class PBquit extends Frame implements  ActionListener {


    //===========================================================
    //The use of base class constructor adapted from
    //Deitel and Deitel, "JAVA How to Program", 1997, page 602

    //constructor for PBquit
    public PBquit (String NameForThisWindow) {
	//call base class constructor
	  super(NameForThisWindow);
          setSize(900,350);//width,height

    //add WindowCloser, since Frame has 
    //no automatic window closer
	  addWindowListener(new CloseWindow());

   //set window parameters
        Color pearl = new Color (201,216,255); //italian lavender
        Color cwhite = new Color(255,255,255);
        Color cdarkblue= new Color(0,0,90);
	Font f20=new Font("Monospaced",Font.BOLD,20);//prefer BOLD,10
        setLayout(new FlowLayout(0,9,9));
        setBackground(pearl);
    
    //===========================================================
    //Build Header Panel.
    Panel Phdr = new Panel();
	  Phdr.setLayout(new FlowLayout(0,9,9));
          Phdr.setBackground(pearl);
     
    //===========================================================
    //Build Second Panel.
    Panel Psec = new Panel();
 	  Psec.setLayout(new FlowLayout(0,9,9));
          Psec.setBackground(pearl);
     
    //===========================================================
    //Build Third Panel.
    Panel Pthird = new Panel();
 	  Pthird.setLayout(new FlowLayout(0,9,9));
          Pthird.setBackground(pearl);

    //===========================================================
    //Build Fourth Panel.
    Panel Pfourth = new Panel();
	  Pfourth.setLayout(new FlowLayout(0,9,9));
          Pfourth.setBackground(pearl);

    //===========================================================
    //Build Fifth Panel.
    Panel Pfifth = new Panel();
  	  Pfifth.setLayout(new FlowLayout(0,9,9));
          Pfifth.setBackground(pearl);

    //===========================================================
    //Build header
    Button TITLE = new Button 
       (" PacketBuilder by Cricket Haygood Deane Copyright 1998 ");
           TITLE.setBackground(cdarkblue);
           TITLE.setForeground(cwhite);
           TITLE.setFont(f20); 

    //===========================================================
    //Build query
    Label QUERY = new Label(" QUIT PacketBuilder Now??? ");
          QUERY.setFont(f20);
          QUERY.setForeground(cdarkblue);

        
    //===========================================================
    //Build YES Button
    Button YES = new Button(" YES ");
           YES.setBackground(cdarkblue);
           YES.setForeground(cwhite);
           YES.setFont(f20);
           YES.addActionListener(this);

    //===========================================================
    //Build NO Button
    Button NO = new Button(" NO  ");
           NO.setBackground(cdarkblue);
           NO.setForeground(cwhite);
           NO.setFont(f20);
           NO.addActionListener(this);

    //===========================================================
    //Build MESSAGE, MESSAG2, MESSAGE3

    Label MESSAGE = new Label
          (" Click on NO to eliminate this window. ");
          MESSAGE.setFont(f20);
          MESSAGE.setForeground(cdarkblue);
     
    Label MESSAGE2 = new Label
          (" If YES does not work, type CNTL-c in the same window ");
          MESSAGE2.setFont(f20);
          MESSAGE2.setForeground(cdarkblue);
        
    Label MESSAGE3 = new Label
          (" where you executed the runPB command.");
          MESSAGE3.setFont(f20);
          MESSAGE3.setForeground(cdarkblue);

    //===========================================================
    //Build the display.
      
    Phdr.add(TITLE);
    Psec.add(YES);
    Psec.add(QUERY);
    Pthird.add(NO);
    Pthird.add(MESSAGE);
    Pfourth.add(MESSAGE2);
    Pfifth.add(MESSAGE3);

    add(Phdr);
    add(Psec);
    add(Pthird); 
    add(Pfourth);
    add(Pfifth);
  
}//end constructor for PBquit

//==========================================================
   public void actionPerformed (ActionEvent e) {
   // response to quit button 

	String s = e.getActionCommand();

        if(s.equals(" YES ")) System.exit(0);  
        if(s.equals(" NO  "))  dispose();


        }

//==========================================================
//WindowCloser method adapted from Deitel and Deitel, 1997
//"JAVA How to Program", page 603.

public class CloseWindow extends WindowAdapter {
  public void windowClosing(WindowEvent e) {
  e.getWindow().setVisible(false);
  }//end method windowClosing()
}//end class CloseWindow


}//end PBquit class
