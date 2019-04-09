//file: SetIPflags.java
//============================================================
//Introduction to Class SetIPflags============================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================

The class SetIPflags sets a single IP option field or flag.

This class is called by class PBconstr in response to a
mouse-click event on one of the Choice buttons listed below.

	Choice Chg1:  IPv4 precedence (3 bits)
	Choice Chg2:  IPv4 delay (1 bit)
	Choice Chg3:  IPv4 throughput (1 bit)
	Choice Chg4:  IPv4 reliability (1 bit)
	Choice Chg5:  IPv4 cost (1 bit)
	Choice Chg6:  IPv4 time to live (8 bits)
                      or IPv6 hop limit (8 bits)
	Choice Chg7:  IPv4 protocol (8 bits)
                      or IPv6 next header (8 bits)


The target option is determined in a switch statement 
inside the constructor for this class.

The IPv4template is updated in the itemStateChanged 
method for this class. Row 1 and Row 2 and Row 3 of 
the final display are taken care of by a switch 
statement within the itemStateChanged method. 

The Ch3 value is passed to this class so that
repaint of final panel at bottom will reflect current
selection of protocol (ipv4 or ipv6).

==============================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

class SetIPflags implements ItemListener {


	private int Nflag;//delay=1,thruput=2,rely=3,cost=4,reserve=5
        // the last bit in the octet is reserved for future use
	private int Nlen;
	private int index;
	private int indexSum;
	private String FIXword = new String();
	private String BINword = new String();
	private int jf;//index for ipv4template fixword
	private int jb;//index for ipv4template binword
	private int kf;//index for ipv6template fixword
	private int kb;//index for ipv6template binword



	//The display strings (FIX and BIN) for these
	//flags are set in SetLay4Parameters when the
	//TextArea F3 is built.

        Choice       ch3;
	StringBuffer ipv4template;
	StringBuffer ipv6template;
	TextArea f3;
	private int beginIndex;
	private char a,b,c;//3 chars for precedence
        int    anchor; 

	//constructor for SetIPflags
    public  SetIPflags(Choice CH3,StringBuffer IPv4template,
    StringBuffer IPv6template, TextArea F3,int NFLAG, int NLENGTH) {

		Nflag = NFLAG; //ipv4: 100=time2live,200=protocol
                               //ipv6: 100=hopLimit, 200=nextHeader
		Nlen  = NLENGTH;//8
                ch3=CH3;
		ipv4template=IPv4template;
		ipv6template=IPv6template;
		f3=F3;
		jf = 311;//ipv4 fix time2live diff=224
		jb = 311+224;//ipv4 bin time2live
		kf = 536;//ipv6 fix hop Limit  need diff=451
		kb = 536+451;//ipv6 bin hopLimit
		if(Nflag==200) {//ipv4 protocol field
	                jf = 323;//ipv4 fix protocol
	                jb = 323+224;//ipv4 bin protocol
                        kf = 524 ;//ipv6 fix NextHeader
                        kb = 524 +451;//ipv6 bin NextHeader
                        }

        	beginIndex=464;//where ipv4 values begin

		}//end constructor for SetIPflags


	public void itemStateChanged (ItemEvent e) {
		Choice choice = (Choice) e.getItemSelectable();
		index=choice.getSelectedIndex();
        indexSum=index+Nflag;

    if(Nlen<5) {//Take care of short flags

	if(Nflag==0) {//Take care of Precedence

	switch(index) {

	case 0: {a='0';b='0';c='0';break;}
	case 1: {a='0';b='0';c='1';break;}
	case 2: {a='0';b='1';c='0';break;}
	case 3: {a='0';b='1';c='1';break;}
	case 4: {a='1';b='0';c='0';break;}
	case 5: {a='1';b='0';c='1';break;}
	case 6: {a='1';b='1';c='0';break;}
	case 7: {a='1';b='1';c='1';break;}
	}//end switch

	ipv4template.setCharAt(462,a);
	ipv4template.setCharAt(463,b);
	ipv4template.setCharAt(464,c);

	}//end if(Nflag==0)


    else {//Take care of Delay,Thput,Rely,Cost,


	switch(index) {

	case 0: {// flag=0
	ipv4template.setCharAt(beginIndex+Nflag,'0');
	break;}

	case 1: {// flag=1
	ipv4template.setCharAt(beginIndex+Nflag,'1');
	break;}

    }//end switch(index)

	}//end else
    }//end taking care of short flags

    else {//Take care of longer flags (time2live and protocol)

	switch(indexSum) {

	//100=time2live
	//also sets the HopLimit in IPv6

	case 100:{//ttl default 0
	FIXword=("0_______");BINword=("00000000");break;}

	case 101:{//ttl 16
	FIXword=("16______");BINword=("00010000");break;}

	case 102:{//ttl 8
	FIXword=("8_______");BINword=("00001000");break;}

	case 103:{//ttl 4
	FIXword=("4_______");BINword=("00000100");break;}

	case 104:{//ttl 2
	FIXword=("2_______");BINword=("00000010");break;}

	case 105:{//ttl 1
	FIXword=("1_______");BINword=("00000001");break;}

	case 106:{//ttl 0
	FIXword=("0_______");BINword=("00000000");break;}

	//200=Protocol (identify protocol used in transport layer)

	case 200:{//protocol default 0 -- ipv4 & ipv6 use same id numbers
                  //for protocol and nextHeader values
	FIXword=("0_______");BINword=("00000000");break;}

    case 201:{//tcp=6
	FIXword=("6_______");BINword=("00000110");break;}

    case 202:{//udp=17
	FIXword=("17______");BINword=("00010001");break;}

	}// end switch(indexSum)

    int i;
	for(i=0;i<8;i++) {
	ipv4template.setCharAt(jf+i,FIXword.charAt(i));
	ipv4template.setCharAt(jb+i,BINword.charAt(i));
	ipv6template.setCharAt(kf+i,FIXword.charAt(i));
	ipv6template.setCharAt(kb+i,BINword.charAt(i));
	}//end for


	if(Nflag==100) {//Take care of ipv6 hop limit
	for(i=0;i<8;i++) {
	ipv6template.setCharAt(kf+i,FIXword.charAt(i));
	ipv6template.setCharAt(kb+i,BINword.charAt(i));
	}//end for
	}//end if(Nflag==100)


    }//end else take care of longer flags


        StringBuffer f3update = new StringBuffer();
        if(ch3.getSelectedIndex()==2) f3update.append(ipv6template);
        else                          f3update.append(ipv4template);
        
	f3.setText(f3update.toString());

 }//end itemStateChanged

}//end class SetIPflags

