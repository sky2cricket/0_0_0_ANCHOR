//file: SetTCPflags.java
//============================================================
//Introduction to Class SetTCPflags===========================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================

The class SetTCPflags sets a single TCP flag.
Each TCP flag is one bit long, equal to 0 or 1.

This class is called by class PBconstr in response to a
mouse-click event on one of the Choice buttons listed below.

	Choice Chf1: urg flag
	Choice Chf2: ack flag
	Choice Chf3: psh flag
	Choice Chf4: rst flag
	Choice Chf5: syn flag
	Choice Chf6: fin flag

The UDPtemplate is passed to this function, because if
UDP is the protocol on display in the final panel, the
update must reflect this.

============================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

class SetTCPflags implements ItemListener {


	private int Nflag;//urg=1,ack=2,psh=3,rsh=4,syn=5,fin=6
	private int index;
	private int indexSum;

	StringBuffer tcptemplate;
        StringBuffer udptemplate;
	TextArea f4;
	int beginIndex;
        Choice ch4;
        private String       f4update;

    public  SetTCPflags(Choice CH4,StringBuffer TCPtemplate,
        StringBuffer UDPtemplate, TextArea F4,int N) {

		Nflag = N;
                ch4=CH4; 
		tcptemplate=TCPtemplate;
                udptemplate=UDPtemplate;
		f4=F4;
		//jb = 227+230;//source host tcp bin index  diff=230
                //jb = 394+233; //tcp windowSize field bin index
                //this = 394+233-15
		beginIndex=612;

		}//end constructor for individual flag

	public void itemStateChanged (ItemEvent e) {
		Choice choice = (Choice) e.getItemSelectable();
		index=choice.getSelectedIndex();
        indexSum=index+Nflag;

        //this code has been updated to match 3-choice tcp-flags
	switch(index) {

	case 0: {// flag=0
	tcptemplate.setCharAt(beginIndex+Nflag,'0');
	break;}

	case 1: {// flag=0
	tcptemplate.setCharAt(beginIndex+Nflag,'0');
	break;}

	case 2: {// flag=1
	tcptemplate.setCharAt(beginIndex+Nflag,'1');
	break;}
	}// end switch

        if(ch4.getSelectedIndex()==2) f4update=new String(udptemplate);
        else                          f4update=new String(tcptemplate);
        f4.setText(f4update);

 }//end itemStateChanged

}//end class SetTCPflags

