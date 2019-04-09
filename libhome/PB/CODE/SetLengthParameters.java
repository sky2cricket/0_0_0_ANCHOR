// file: SetLengthParameters.java
//============================================================
//Introduction to Class SetLengthParameters===================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================

The purpose of class SetLengthParameters is to determine the 
length parameters for the udp header, the ipv4 header, the
ipv6 header, and the ethernet bus header.  

   UDP:  UDP Length (16 bits)
         Length in octets of UDP header + application data
         rounded up to nearest even number.
         (If application data is an odd number of octets,
         one octet of padding is added to the data segment.)
   IPv4: Total Length (16 bits)
         Length in octets of IPv4 header + data segment
   IPv6: Payload Length (16 bits)
         Length in octets of the rest of the packet
         that comes after the IPv6 header 
   Ethernet Bus: Data Length (16 bits)
         Length in octets of the entire packet not 
         counting the preamble, start frame delimeter,
         and frame checksum.

This class is called by class PBconstr in response to a
mouse-click event on the Choice button Ch5, Ch4, or Ch3.  
Because length depends upon encapsulated data, all of 
these length parameters are reset every time the class 
SetLengthParameters is called. 

In PacketBuilder, the message choices are static, so
the length parameters can be determined from the Choice 
button information passed from the calling class (PBconstr).

The length calculation tree is shown below.


                     EthHdr[22 octets]
                        |
                     LLCHdr[8 octets]
                      /  \
                     /    \             
      ipv6Hdr[40octets]   ipv4Hdr[20 octets]
         /    \                  /    \
        /      \                /      \
     tcpHdr   udpHdr         tcpHdr   udpHdr
   [20 oct]   [8 oct]      [20 oct]   [8 oct]
    |  |  |   |  |  |      |  |  |    |  |  |
    |  |  |   |  |  |      |  |  |    |  |  |
   eng |  |  eng |  |     eng |  |   eng |  |
  [20] |  | [20] |  |    [20] |  |  [20] |  |
      fr  |     fr  |        fr  |      fr  |
     [22] |    [22] |       [22] |     [22] |
         rus       rus          rus        rus
         [24]      [24]         [24]       [24]


The length parameters are determined in two switch 
statements in the itemStateChanged() method below.

    switch(UDPindex) takes care of UDP length

    switch(index) takes care of ipv4 total length, 
     ipv6 payload length, and ethernet data length.

============================================================*/

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

class SetLengthParameters implements ItemListener {

	//Method to set the udpLength, when the
	//user makes a choice of appData (CH5)
        //The udpLength = length in octets of 
        //    udpHeader + userAppData

	//The display strings (FIX and BIN) are written
        //to the udptemplate 


        Choice ch5;
        Choice ch4;
        Choice ch3;
        Choice ch1;
        StringBuffer udptemplate;
	StringBuffer ipv4template;
	StringBuffer ipv6template;
	StringBuffer ethtemplate;
	TextArea f4;
	TextArea f3;
	TextArea f1;

	//constructor for SetLengthParameters
        public  SetLengthParameters(Choice CH5,Choice CH4,
        Choice CH3, Choice CH1, 
        StringBuffer UDPtemplate,
        StringBuffer IPV4template,
        StringBuffer IPV6template,
        StringBuffer ETHtemplate,
        TextArea F4, TextArea F3, TextArea F1) {

                ch5=CH5;
                ch4=CH4;
                ch3=CH3;
                ch1=CH1;
                udptemplate=UDPtemplate; 
		ipv4template=IPV4template;
		ipv6template=IPV6template;
		ethtemplate=ETHtemplate;
                f4=F4;
		f3=F3;
                f1=F1;

		}//end constructor for SetLengthParameters


	public void itemStateChanged (ItemEvent e) {
	Choice choice = (Choice) e.getItemSelectable();
        int i; //loop counter
	int index; //for switch statement
	int UDPindex; //for switch statement
	int uf;//index for udpLength fixword
	int ub;//index for udpLength binword
	int jf;//index for ipv4Length fixword
	int jb;//index for ipv4Length binword
	int kf;//index for ipv6Length fixword
	int kb;//index for ipv6Length binword
	int mf;//index for ethLength fixword
	int mb;//index for ethLength binword

        String f4update;//update F4 final display
        String f3update;//update F3 final display
        String f1update;//update F1 final display

        //take care of UDP length parameter

	UDPindex=ch5.getSelectedIndex();
        StringBuffer udpLenFIX = new StringBuffer();
        StringBuffer udpLenBIN = new StringBuffer(); 

        switch(UDPindex) {

        case 0: {//default udpLength=8+20
        udpLenFIX.append("28______");
        udpLenBIN.append("00011100");
        }

        case 1: {//english udpLength=8+20
        udpLenFIX.append("28______");
        udpLenBIN.append("00011100");
        }

        case 2: {//french udpLength=8+22
        udpLenFIX.append("30______");
        udpLenBIN.append("00011110");
        }

        case 3: {//Russian udpLength=8+24
        udpLenFIX.append("32______");
        udpLenBIN.append("00100000");
        }

        }//end switch(UDPindex)

        //update udptemplate
	uf = 85+21+21;
	ub = 223;             
	for(i=0;i<8;i++) {
	udptemplate.setCharAt(uf+i,udpLenFIX.charAt(i));
	udptemplate.setCharAt(ub+i,udpLenBIN.charAt(i));
	}//end for

        f4update=new String(udptemplate);
        
        //only update F4 display if udptemplate is on display
        if(ch4.getSelectedIndex()==2)
	f4.setText(f4update);

        

        //take care of IPv4, IPv6, Ethernet bus
        //length parameters

        StringBuffer ipv4LenFIX = new StringBuffer();
        StringBuffer ipv4LenBIN = new StringBuffer(); 
        StringBuffer ipv6LenFIX = new StringBuffer();
        StringBuffer ipv6LenBIN = new StringBuffer(); 
        //use eth-4 with ipv4
        StringBuffer eth4LenFIX = new StringBuffer();
        StringBuffer eth4LenBIN = new StringBuffer(); 
        //use eth-6 with ipv6
        StringBuffer eth6LenFIX = new StringBuffer();
        StringBuffer eth6LenBIN = new StringBuffer(); 

        //calculate ipv4 total length based on choices
        //for application and transport layers

        int appLen, transLen, ipv4Len, ipv6Len, ethLen4, ethLen6;

        appLen = 20; //english
        if(ch5.getSelectedIndex()==2) appLen = 22;//french
        if(ch5.getSelectedIndex()==3) appLen = 24;//russian
        
        transLen = 20;//tcp
        if(ch4.getSelectedIndex()==2) transLen = 8;//udp 

        ipv4Len = 20;//length in octets of ip header

        ipv4Len = ipv4Len + transLen + appLen;

        //results
        // ipv4 - tcp - eng ==> ipv4Len = 60
        // ipv4 - tcp - fr  ==> ipv4Len = 62
        // ipv4 - tcp - rus ==> ipv4Len = 64
        // ipv4 - udp - eng ==> ipv4Len = 48
        // ipv4 - udp - fr  ==> ipv4Len = 50
        // ipv4 - udp - rus ==> ipv4Len = 52

        // ipv6Len = ipv4Len - 20
        // ipv4 includes length of hdr in total length
        // ipv6 includes length of segment following hdr

        // ipv6 minimal header is 40 octets long
        // 8 octets labels, 2 16 octet addresses

        // llc header for eth bus is 8 octets long

        // eth header for eth bus, not counting preamble 
        // is: 6+6+2 (destinAddr+sourceAddr+dataLength)  
        // 14 octets

        // ethernet data length
        // This field contains the length of the entire frame, 
        // not including the preamble or the frame check sequence. 

        // ethernet data length =
        //     l4 octets (length of ethernet hdr)
        //    + 8 octets (length of LLC hdr for ethernet bus)
        //    +20 octets (ipv4 hdr)
        //  or 40 octets (ipv6 hdr)
        //    +20 octets (tcp hdr)
        //  or  8 octets (udp hdr)
        //    +20 octets (english hello)
        //  or 22 octets (french hello)
        //  or 24 octets (russian hello)


        // got it???


        switch(ipv4Len) {

        case 60: {//ipv4-tcp-eng ==> ipv4Len=60
        ipv4LenFIX.append("60______");
        ipv4LenBIN.append("00111100");
        ipv6LenFIX.append("40______");
        ipv6LenBIN.append("00101000");
        eth4LenFIX.append("82______");
        eth4LenBIN.append("01010010");
        eth6LenFIX.append("102_____");
        eth6LenBIN.append("01100110");
        }

        case 62: {//ipv4-tcp-fr  ==> ipv4Len=62
        ipv4LenFIX.append("62______");
        ipv4LenBIN.append("00111110");
        ipv6LenFIX.append("42______");
        ipv6LenBIN.append("00101010");
        eth4LenFIX.append("84______");
        eth4LenBIN.append("01010100");
        eth6LenFIX.append("104_____");
        eth6LenBIN.append("01101000");
        }

        case 64: {//ipv4-tcp-rus ==> ipv4Len=64
        ipv4LenFIX.append("64______");
        ipv4LenBIN.append("01000000");
        ipv6LenFIX.append("44______");
        ipv6LenBIN.append("00101100");
        eth4LenFIX.append("86______");
        eth4LenBIN.append("01010110");
        eth6LenFIX.append("106_____");
        eth6LenBIN.append("01101010");
        }

        case 48: {//ipv4-udp-eng ==> ipv4Len=48
        ipv4LenFIX.append("48______");
        ipv4LenBIN.append("00110000");
        ipv6LenFIX.append("28______");
        ipv6LenBIN.append("00011100");
        eth4LenFIX.append("70______");
        eth4LenBIN.append("01000110");
        eth6LenFIX.append("90______");
        eth6LenBIN.append("01011010");
        }

        case 50: {//ipv4-udp-fr  ==> ipv4Len=50
        ipv4LenFIX.append("50______");
        ipv4LenBIN.append("00110010");
        ipv6LenFIX.append("30______");
        ipv6LenBIN.append("00011110");
        eth4LenFIX.append("72______");
        eth4LenBIN.append("01001000");
        eth6LenFIX.append("92______");
        eth6LenBIN.append("01011100");
        }

        case 52: {//ipv4-udp-rus ==> ipv4Len=52
        ipv4LenFIX.append("52______");
        ipv4LenBIN.append("00110100");
        ipv6LenFIX.append("32______");
        ipv6LenBIN.append("00100000");
        eth4LenFIX.append("74______");
        eth4LenBIN.append("01001010");
        eth6LenFIX.append("94______");
        eth6LenBIN.append("01011110");
        }

    }//end switch(ipv4len)

        //indices for writing to templates
	jf = 311-63;//ipv4 fix total length
	jb = 311+224-63+11;//ipv4 bin total length             
        kf = 524 -23;//ipv6 fix payload length
        kb = 524 +451-12;//ipv6 bin payload length 
        mf = 327+65+65 ;//eth fix data length
        mb = 567+65+65+11 ;//eth bin data length 
	for(i=0;i<8;i++) {
	ipv4template.setCharAt(jf+i,ipv4LenFIX.charAt(i));
	ipv4template.setCharAt(jb+i,ipv4LenBIN.charAt(i));
	ipv6template.setCharAt(kf+i,ipv6LenFIX.charAt(i));
	ipv6template.setCharAt(kb+i,ipv6LenBIN.charAt(i));
	}//end for

        if(ch3.getSelectedIndex()==2) {//ipv6
        f3update=new String(ipv6template);
        //eth data length value reflects ipv6 hdr
	for(i=0;i<8;i++) {
	ethtemplate.setCharAt(mf+i,eth6LenFIX.charAt(i));
	ethtemplate.setCharAt(mb+i,eth6LenBIN.charAt(i));
	}//end for
        }// end if ipv6

        else {//ipv4
        f3update=new String(ipv4template);
        //eth data length value reflects ipv4 hdr
	for(i=0;i<8;i++) {
	ethtemplate.setCharAt(mf+i,eth4LenFIX.charAt(i));
	ethtemplate.setCharAt(mb+i,eth4LenBIN.charAt(i));
	}//end for
        }// end if ipv4

        //update final display for F3
        //f3update already reflects ip protocol choice 
        f3.setText(f3update);

        //update final display for F1, if
        //ethernet bus is selected as MAC protocol
        f1update = new String(ethtemplate);
        if(ch1.getSelectedIndex()<2) f1.setText(f1update);
        

 }//end itemStateChanged

}//end class SetLengthParameters

