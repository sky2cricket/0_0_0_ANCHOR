// cdtam/A/CB/
// ColorBuilderApplet.java  -- from ColorBuilder.orig.java
// This makes panel for select/build colors
// see page 115, java examples
 

import java.awt.*;
import java.awt.event.*;
import java.applet.*;

public class ColorBuilderApplet extends Applet
	implements ActionListener {

	TextField REDinput,GREENinput,BLUEinput;
	int	  REDnum,  GREENnum,  BLUEnum;
	Color     bcolor;//background color
	Color     fcolor;//foreground color
        int       start;
	
	
  public ColorBuilderApplet () { // constructor
        
        //==========================================
	//set up start values
	  start=1;
	  if (start==1) {
		bcolor=Color.white;
	        fcolor=Color.black;
		}
	  start=0; 

        //==========================================
	//set up layout

	this.setLayout(new GridBagLayout());
	GridBagConstraints c = new GridBagConstraints();
	c.fill = GridBagConstraints.BOTH; 
	c.insets = new Insets(10,10,10,10);
	c.gridwidth  = 3;
	c.gridheight = 6;
        //==========================================


        //==========================================
	//install permanent color buttons

	c.gridx=0; c.gridy=0; c.gridwidth=1; c.gridheight=1;
	Label setbg = new Label ("Set Background");
	this.add(setbg,c);


	c.gridx=1; c.gridy=0; c.gridwidth=1; c.gridheight=1;
	Button yellowButton = new Button("Yellow");
	yellowButton.addActionListener(this);
	this.add(yellowButton,c);

	c.gridx=2; c.gridy=0; c.gridwidth=1; c.gridheight=1;
	Button blueButton = new Button("Blue");
	blueButton.addActionListener(this);
	this.add(blueButton,c);

	c.gridx=3; c.gridy=0; c.gridwidth=1; c.gridheight=1;
	Button redButton = new Button("Red");
	redButton.addActionListener(this);
	this.add(redButton,c);


	c.gridx=0; c.gridy=1; c.gridwidth=1; c.gridheight=1;
	Label setfg = new Label ("Set Foreground");
	this.add(setfg,c);

	c.gridx=1; c.gridy=1; c.gridwidth=1; c.gridheight=1;
	Button blackButton = new Button("Black");
	blackButton.addActionListener(this);
	this.add(blackButton,c);

	c.gridx=2; c.gridy=1; c.gridwidth=1; c.gridheight=1;
	Button whiteButton = new Button("White");
	whiteButton.addActionListener(this);
	this.add(whiteButton,c);

	c.gridx=3; c.gridy=1; c.gridwidth=1; c.gridheight=1;
	Button red2Button = new Button("Red2");
	red2Button.addActionListener(this);
	this.add(red2Button,c);
        //==========================================



        //==========================================
	//install color builder panels

	c.gridx=0; c.gridy=2; c.gridwidth=1; c.gridheight=1;
	Panel RED = new Panel();
	RED.setLayout(new FlowLayout());
	Label b_red = new Label ("RED___VALUE");
	RED.add( b_red );
	REDinput = new TextField("0",3);
	RED.add(REDinput);
	this.add(RED,c);

	c.gridx=0; c.gridy=3; c.gridwidth=1; c.gridheight=1;
	Panel GREEN = new Panel();
	GREEN.setLayout(new FlowLayout());
	Label b_green = new Label ("GREEN_VALUE");
	GREEN.add( b_green );
	GREENinput = new TextField("0",3);
	GREEN.add(GREENinput);
	this.add(GREEN,c);

	c.gridx=0; c.gridy=4; c.gridwidth=1; c.gridheight=1;
	Panel BLUE = new Panel();
	BLUE.setLayout(new FlowLayout());
	Label b_blue = new Label ("BLUE__VALUE");
	BLUE.add( b_blue );
	BLUEinput = new TextField("0",3);
	BLUE.add(BLUEinput);
	this.add(BLUE,c);
        //==========================================


        //==========================================
	//install control buttons

	c.gridx=0; c.gridy=5; c.gridwidth=1; c.gridheight=1;
	Panel CNTL = new Panel();
	CNTL.setLayout(new FlowLayout());
	Button bcButton = new Button("BuildBackground");
	bcButton.addActionListener(this);
        CNTL.add(bcButton);
	Button fcButton = new Button("BuildForeground");
	fcButton.addActionListener(this);
        CNTL.add(fcButton);
	this.add(CNTL,c);

	Panel QUIT = new Panel();
	QUIT.setLayout(new FlowLayout());
	Button qButton = new Button("Quit");
	qButton.addActionListener(this);
	QUIT.add(qButton);
	this.add(QUIT,c);
        //==========================================

        //==========================================
	//add some instructions    
	c.gridx=0; c.gridy=7; c.gridwidth=3; c.gridheight=1;
	Label line1 = new Label ("ColorBuilder uses standard RGB scheme.");
	this.add(line1,c);
	
	c.gridx=0; c.gridy=8; c.gridwidth=3; c.gridheight=1;
	Label line2 = new Label ("RGB values are integers, not hexadecimal.");
	this.add(line2,c);
	
	c.gridx=0; c.gridy=9; c.gridwidth=3; c.gridheight=1;
	Label line3 = new Label ("ColorBuilder by Cricket! Haygood Deane.");
	this.add(line3,c);
	
	c.gridx=0; c.gridy=10; c.gridwidth=3; c.gridheight=1;
	Label line4 = new Label ("April,1998.");
	this.add(line4,c);
        //==========================================

	}// end public ColorBuilder() constructor


  public void actionPerformed (ActionEvent evt) { 
	
	int       redval,  greenval,  blueval;
	//int	  REDnum,  GREENnum,  BLUEnum;
	String arg = evt.getActionCommand();

	REDnum=0;BLUEnum=0;GREENnum=0;

 	if      (arg.equals("Yellow"    )) bcolor = Color.yellow;
	else if (arg.equals("Blue"      )) bcolor = Color.blue;
	else if (arg.equals("Red"       )) bcolor = Color.red;
	else if (arg.equals("Black"     )) fcolor = Color.black;
	else if (arg.equals("White"     )) fcolor = Color.white;
	else if (arg.equals("Red2"      )) fcolor = Color.red;
	else if (arg.equals("BuildBackground")) {                  
		if(REDinput.equals(""))REDnum=0;
		else REDnum=(Integer.parseInt(REDinput.getText()))%256;
		if(GREENinput.equals(""))GREENnum=0;
		else GREENnum=(Integer.parseInt(GREENinput.getText()))%256;
		if(BLUEinput.equals(""))BLUEnum=0;
		else BLUEnum=(Integer.parseInt(BLUEinput.getText()))%256;
		bcolor = new Color(REDnum,GREENnum,BLUEnum);
		}
	else if (arg.equals("BuildForeground")) {                  
		if(REDinput.equals(""))REDnum=0;
		else REDnum=(Integer.parseInt(REDinput.getText()))%256;
		if(GREENinput.equals(""))GREENnum=0;
		else GREENnum=(Integer.parseInt(GREENinput.getText()))%256;
		if(BLUEinput.equals(""))BLUEnum=0;
		else BLUEnum=(Integer.parseInt(BLUEinput.getText()))%256;
		fcolor = new Color(REDnum,GREENnum,BLUEnum);
		}
	else if (arg.equals("Quit")) System.exit(0);

	setBackground(bcolor);
	setForeground(fcolor);
	repaint();                  
	}//end public void actionPerformed (ActionEvent evt)  

  public static void main (String [] args) {
	Applet f = new ColorBuilderApplet();
	f.setLayout(new FlowLayout());
	f.setSize(300,400);
	//f.show();
	f.start();
	}// end main

  }// end class ColorBuilder{}
