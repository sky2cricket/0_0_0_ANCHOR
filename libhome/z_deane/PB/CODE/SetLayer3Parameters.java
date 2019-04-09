//file: SetLayer3Parameters.java
//============================================================
//Introduction to Class SetLayer3Parameters===================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================

The purpose of the class SetLayer3Parameters is to select
the correct template for the final display Panel F3
(ip header).

This class is called by class PBconstr in response to a
mouse-click event on the Choice button Ch3.  

Selection of protocol template (ipv4 or ipv6) is
accomplished by means of a switch statement inside 
method itemStateChanged.

==============================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

class SetLayer3Parameters implements ItemListener {
	private TextArea ta;      // Layer 5 panel TextArea display
        private TextArea f3;       // F3, final display for Layer 3

        private StringBuffer ipv4template;
	private StringBuffer ipv6template;
	private String       FIXword= new String();//b-display (FIX)
	private String       BINword= new String();//c-display (BIN)
	private String  update;
	private String  updateta;

	private int Nlayer;// 5=500,4=400,3=300,2=200,1=100
	private int index;
	private int indexSum;


	//Constructor to setLayer3Parameters
	public  SetLayer3Parameters(TextArea Ta, TextArea F3,
	StringBuffer IPV4template,
	StringBuffer IPV6template,int N) {
		ta = Ta;
		f3 = F3;
		ipv4template = IPV4template;
		ipv6template = IPV6template;
		Nlayer = N;
		}//end constructor



	public void itemStateChanged (ItemEvent e) {
		Choice choice = (Choice) e.getItemSelectable();
		index=choice.getSelectedIndex();
        indexSum=index+Nlayer;

	switch(indexSum) {

	//default to IPv4 header
	case 300: {
        updateta = new String("IP layer makes IP address decisions.");
	update = new String(ipv4template);
	break;}


	// Set IPv4 header
	case 301: {
        updateta = new String("IPv4 addresses are 32 bits long.");
	update = new String(ipv4template);
	break;}

	// Set IPv6 header
	case 302: {
        updateta = new String("IPv6 addresses are 128 bits long.");
        update =new String(ipv6template);
	break;}


	}//end switch(indexSum)


    ta.setText(updateta);
    f3.setText(update);

	}//end itemEvent
}//end SetLayer3Parameters
