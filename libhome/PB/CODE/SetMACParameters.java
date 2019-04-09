//file: SetMACParameters.java
//============================================================
//Introduction to Class SetMACParameters======================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================

The purpose of the class SetMACParameters is to select
the correct templates for the final display Panels F1
(mac header) and F6 (mac trailer).

This class is called by class PBconstr in response to a
mouse-click event on the Choice button Ch1.  

Selection of protocol template (eth, tok, or fddi) is
accomplished by means of a switch statement inside 
method itemStateChanged.

==============================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

class SetMACParameters implements ItemListener {
	private TextArea ta;	   // Layer 1 panel TextArea display
    	private TextArea f1;       // F1, final display for Layer 1
	private TextArea f6;       // F6, eth trailer, fddi trailer

        private StringBuffer ethtemplate;
        private StringBuffer toktemplate;
	private StringBuffer fdditemplate;
	private StringBuffer ethTtemplate;
	private StringBuffer tokTtemplate;
	private StringBuffer fddiTtemplate;
	private String       FIXword= new String();//b-display (FIX)
	private String       BINword= new String();//c-display (BIN)
	private String  update; 
	private String  update6;
	private String  updateta;

	private int Nlayer;// 5=500,4=400,3=300,2=200,1=100
	private int index;
	private int indexSum;
	private int jf;//fix index for ethertype
	private int jb;//bin index for ethertype



	//Constructor to SetMACParameters
	//MAC layer
	public  SetMACParameters(TextArea Ta, 
        TextArea F1, TextArea F6,
	StringBuffer ETHtemplate,StringBuffer ETHTtemplate,
	StringBuffer TOKtemplate,StringBuffer TOKTtemplate,
	StringBuffer FDDItemplate,StringBuffer FDDITtemplate,int N) {
		ta = Ta;
		f1 = F1;
		f6 = F6;
		ethtemplate = ETHtemplate;
                toktemplate = TOKtemplate;
		fdditemplate = FDDItemplate;
		ethTtemplate = ETHTtemplate;
		tokTtemplate = TOKTtemplate;
		fddiTtemplate = FDDITtemplate;
		Nlayer = N;
		//jf=163;
		//jb=257;
		}//end constructor


	public void itemStateChanged (ItemEvent e) {
		Choice choice = (Choice) e.getItemSelectable();
		index=choice.getSelectedIndex();
                indexSum=index+Nlayer;

	switch(indexSum) {

	case 100: {//nothing chosen yet
        updateta = new String("MAC Layer makes decisions based on Ethernet Addresses.");
        update = new String(ethtemplate);
	update6= new String(ethTtemplate);
	break;}

	case 101: {//Ethernet bus
        updateta = new String("Ethernet Bus, needs IEEE 802.2 LLC");
        update = new String(ethtemplate);
	update6= new String(ethTtemplate);
	break;}

	case 102: {//Ethernet Token Ring
        updateta = new String("Ethernet Token Ring, needs IEEE 802.5 LLC");
        update = new String(toktemplate);
        update6= new String(tokTtemplate);
	break;}

    	case 103: {//FDDI
        updateta = new String("FDDI, needs IEEE 802.2 LLC");
    	update = new String(fdditemplate);
	update6= new String(fddiTtemplate);
	break;}


	}//end switch


	f1.setText(update);
	f6.setText(update6);
	ta.setText(updateta);

	}//end itemEvent

}//end SetMACParameters
