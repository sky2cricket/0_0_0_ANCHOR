// SetLayer5Parameters.java
// This method sets the TextFields for the host panels,
// based upon ChoiceButton selections.
//============================================================
//Introduction to Class SetLayer5Parameters===================
/*============================================================
==============================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

class SetLayer5Parameters implements ItemListener {

	private TextArea ta;	   // Layer 5 panel TextArea display
        private TextArea f5;       // F5, final display for Layer 5

        private String       saSTR= new String();//a-display (text)
	private String       sbSTR= new String();//b-display (FIX)
	private String       scSTR= new String();//c-display (BIN)

	private int Nlayer;// 5=500,4=400,3=300,2=200,1=100
	private int index;
	private int indexSum;

	//Constructor to setLayer5arameters
	public  SetLayer5Parameters(TextArea Ta, TextArea F5, int N) {
		ta = Ta;
		f5 = F5;
		Nlayer = N;
		}//end constructor

	public void itemStateChanged (ItemEvent e) {
		Choice choice = (Choice) e.getItemSelectable();
		index=choice.getSelectedIndex();
        indexSum=index+Nlayer;

	switch(indexSum) {

	case 500: {//default
	ta.setText( ">>>Hello PacketBuilder!<<< This data can be sent over"
	           +"the TCP or UDP transport layer.");
	saSTR=( "-application-layer---user-data---application-layer---us"
               +"er-data---application-layer---user-data---application-l"
               +"ayer---application-layer---user-data---application-laye"
               +"r---user-data---application-layer---user-data------- \n");  
	sbSTR=( "H_______   e_______   l_______   l_______   o_______   "
	       +"sp______   P_______   a_______   c_______   k_______   "
	       +"e_______   t_______   B_______   u_______   i_______   "
	       +"l_______   d_______   e_______   r_______   !_______   "
	       +"\n");
	scSTR=( "01001000   01100101   01101100   01101100   01101111   "
	       +"00100000   01010000   01100001   01100011   01101011   "
               +"01100101   01110100   01000010   01110101   01101001   "
               +"01101100   01100100   01100101   01110010   00100001   ");
	break;}

	case 501: {///English
	ta.setText( ">>>Hello PacketBuilder!<<< This data can be sent over"
	           +"the TCP or UDP transport layer.");
	saSTR=( "-application-layer---user-data---application-layer---us"
               +"er-data---application-layer---user-data---application-l"
               +"ayer---application-layer---user-data---application-laye"
               +"r---user-data---application-layer---user-data------- \n");  
	sbSTR=( "H_______   e_______   l_______   l_______   o_______   "
	       +"sp______   P_______   a_______   c_______   k_______   "
	       +"e_______   t_______   B_______   u_______   i_______   "
	       +"l_______   d_______   e_______   r_______   !_______   "
	       +"\n");
	scSTR=( "01001000   01100101   01101100   01101100   01101111   "
	       +"00100000   01010000   01100001   01100011   01101011   "
               +"01100101   01110100   01000010   01110101   01101001   "
               +"01101100   01100100   01100101   01110010   00100001   ");

	break;}


	case 502: {//French
	ta.setText( ">>>Bonjour PacketBuilder!<<< This data can be sent" 
                   +"over the TCP or UDP transport layer.  Thanks to "
                   +"Philippe Hanset for help with French.");
	saSTR=( "--application-layer---user-data---application-layer---"
               +"user-data---application-layer---user-data---applicatio"
               +"n-layer---user-data---application-layer---user-data---"
               +"application-layer---user-data---application-layer---us"
               +"er-data---application--\n");  

	sbSTR=( "B_______   o_______   n_______   j_______   o_______   "
	       +"u_______   r_______   "
	       +"sp______   P_______   a_______   c_______   k_______   "
	       +"e_______   t_______   B_______   u_______   i_______   "
	       +"l_______   d_______   e_______   r_______   !_______   "
	       +"\n");
	scSTR=( "01000010   01101111   01101110   01101010   01101111   "
	       +"01110101   01110010   "
	       +"00100000   01010000   01100001   01100011   01101011   "
               +"01100101   01110100   01000010   01110101   01101001   "
               +"01101100   01100100   01100101   01110010   00100001   ");

	break;}
 //Zdravstvuy   
    case 503: {//Russian
	ta.setText( ">>>Zdravstvuy PacketBuilder<<< This data can be sent "
                   +"over the TCP or UDP transport layer.  Thanks to Irina "
                   +"Kolesnikova for help with Russian.");
	saSTR=( "--application-layer---user-data---application-layer---us"
               +"er-data---application-layer---user-data---application-l"
               +"ayer---user-data---application---user-data---applicatio"
               +"n-layer---user-data---application-layer---user-data-app"
               +"lication-layer---user-data---application   \n");  

	sbSTR=( "Z_______   d_______   r_______   a_______   v_______   "
	       +"s_______   t_______   v_______   u_______   y_______   "
	       +"sp______   P_______   a_______   c_______   k_______   "
	       +"e_______   t_______   B_______   u_______   i_______   "
	       +"l_______   d_______   e_______   r_______   \n");
	scSTR=( "01011010   01100100   01110010   01100001   01110110   "
	       +"01110011   01110100   01110110   01110101   01111001   "
	       +"00100000   01010000   01100001   01100011   01101011   "
               +"01100101   01110100   01000010   01110101   01101001   "
               +"01101100   01100100   01100101   01110010   ");
	break;}

	}//end switch

	//Build the string for f5.setText();

	f5.setText(saSTR + sbSTR + scSTR);

	}//end itemEvent
}//end SetHostParameters
