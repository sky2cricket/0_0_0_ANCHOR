//file: SetLLCParameters.java
//============================================================
//Introduction to Class SetLLCParameters======================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================

The purpose of the class SetLLCParameters is to select
the correct templates for the final display Panel F2
(llc header).

The class SetLLCParameters is called by class PBconstr 
in response to a mouse-click event on the Choice button Ch2.
In this mode a protocol template is selected. 

SetLLCParameters is also called by PBconstr in response
to a mouse-click event on Choice button Ch2a, which
causes selection of ethertype value.

Selection of protocol template (eth, tok, or fddi) is
accomplished by means of a switch statement inside 
the method itemStateChanged.  

Selection of ethertype value is also done in the same
switch statement as above.  In the calling class (PBconstr),
one of the arguments passed is N.  This N is a simple integer
that controls the switch statement in class SetLLCParameters. 

==============================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

class SetLLCParameters implements ItemListener {

	private TextArea ta;	   // Layer 5 panel TextArea display
        private TextArea f2;       // F2, final display for Layer 2

        private StringBuffer dlltemplateE;
        private StringBuffer dlltemplateT;
        private StringBuffer dlltemplateF;
	private String       FIXword;//b-display (FIX)
	private String       BINword;//c-display (BIN)

	private int Nlayer;// 5=500,4=400,3=300,2=200,1=100
	private int index;
	private int indexSum;
	private int jf;//fix index for ethertype
	private int jb;//bin index for ethertype
	private StringBuffer xa = new StringBuffer();
    	private StringBuffer xb = new StringBuffer();
    	private StringBuffer xc = new StringBuffer();
	private String dlla;
	private String updateta;
	private String update;
        Choice ch2;
        Choice ch2a;

	//Constructor to SetLLCParameters
	public  SetLLCParameters(TextArea Ta, TextArea F2,
        Choice CH2, Choice CH2a,
	StringBuffer DLLtemplateE,
	StringBuffer DLLtemplateT,
	StringBuffer DLLtemplateF,
        int N) {
		ta = Ta;
		f2 = F2;
                ch2 = CH2;
                ch2a = CH2a;
		dlltemplateE = DLLtemplateE;
		dlltemplateT = DLLtemplateT;
		dlltemplateF = DLLtemplateF;
		Nlayer = N;
		jf=163;
		jb=256;
		}//end constructor

	public void itemStateChanged (ItemEvent e) {
	Choice choice = (Choice) e.getItemSelectable();
	index=choice.getSelectedIndex();
        indexSum=index+Nlayer;

	switch(indexSum) {


        case 200: {//nothing chosen, Ethernet Bus dll default
        updateta = new String("LLC for Ethernet Bus described in IEEE 802.2");
        update = new String (dlltemplateE);
        break;}


        case 201: {//Ethernet Bus dll 
        updateta = new String("LLC for Ethernet Bus described in IEEE 802.2");
        update = new String (dlltemplateE);
        break;}

        case 202: {//Ethernet Token Ring -- uses IEEE 802.5
        updateta = new String("LLC for Ethernet Token Ring described in IEEE 802.5");
        update = new String (dlltemplateT);
        break;}

        case 203: {//FDDI -- uses IEEE 802.2
        updateta = new String("LLC for FDDI described in IEEE 802.2");
        update = new String (dlltemplateF);
        break;}

        //-------------------------------------------------------------
        //ETHERTYPE

	case 210: {//nothing chosen yet default is 2048
        //this is already set in SetInitialParameters
	break;}

	case 211: {///Data Link #1,ethertype=2048= ipv4
        FIXword=new String("2048_______________ ");
	BINword=new String("00001000   00000000 ");
	int i; for (i=0;i<19;i++) {
	dlltemplateE.setCharAt(jf+i,FIXword.charAt(i));//out of range
	dlltemplateE.setCharAt(jb+i,BINword.charAt(i));//line 137
	dlltemplateF.setCharAt(jf+i,FIXword.charAt(i));//out of range
	dlltemplateF.setCharAt(jb+i,BINword.charAt(i));//line 137
	}
	break;}

        case 212: {// Data Link #2,ethertype=34525= ipv6
        FIXword=new String("34525______________ ");
	BINword=new String("10000110   11011101 ");
	int i; for (i=0;i<19;i++) {
	dlltemplateE.setCharAt(jf+i,FIXword.charAt(i));//out of range
	dlltemplateE.setCharAt(jb+i,BINword.charAt(i));//line 146
	dlltemplateF.setCharAt(jf+i,FIXword.charAt(i));//out of range
	dlltemplateF.setCharAt(jb+i,BINword.charAt(i));//line 146
	}
	break;}


	}//end switch

	if(Nlayer<210){
         ta.setText(updateta);
         StringBuffer dllupdate = new StringBuffer(update);
	 f2.setText(dllupdate.toString());
         }
        else {//(Nlayer>210)--no case needed for token ring
         if(ch2.getSelectedIndex()==1)f2.setText(dlltemplateE.toString());
         else                         f2.setText(dlltemplateF.toString());
         }
    
	}//end itemEvent

}//end SetLLCParameters
