//file: SetChecksumParameters.java
//============================================================
//Introduction to Class SetChecksumParameters=================
//copyright Cricket Haygood Deane, 1998=======================
/*============================================================
Th class SetChecksumParameters calculates the checksums 
for protocol segments displayed in the scrollpane across the 
bottom of the applet.

This includes Layer4 (tcp/udp), Layer3(ipv4),
andLayer1(eth/fddi).

The corresponding templates are updated.
The final display at the bottom is updated.

The function determines which checksum to calculate
for a layer (for example: tcp OR udp??) by checking
the value from the choice button.

Before any checksums are calculated, all checksum
values are set to ZERO.  This follows standard
protocol rules.

The order of checksum calculation is Layer4, Layer3,
Layer1 because the lower protocols will encapsulate
upper protocols and the newly calculated checksum
becomes part of the "data" field for the underlying
layer.

This checksum operation is performed in the method 
getCheckSum().  The algorithm to calculate checksum is 
a 16-bit block checksum stored in a 32-bit JAVA integer.
For MAC protocols, the 32-bit integer is returned
from getCheckSum().  For IPv4, UDP, and TCP a 16-bit
checksum is needed.  The 32-bit JAVA integer is folded 
into 2 16-bit integers (by bit shifting) which are
added together.  If there is any carry-over, the 
foldover process is repeated.  Then getCheckSum() 
returns a 32-bit integer that has 0's in the
leftmost 16 bits.  The rightmost 16 bits of this return
value are then converted to a string that is sent
to the template. 
============================================================*/     

import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;

public class SetChecksumParameters implements ItemListener {

        private StringBuffer apptemplate=new StringBuffer();
        private StringBuffer tcptemplate;
	private StringBuffer udptemplate;
	private StringBuffer ipv4template;
	private StringBuffer ipv6template;
	private StringBuffer ddltemplateE;
	private StringBuffer ddltemplateT;
	private StringBuffer ddltemplateF;
	private StringBuffer ethtemplate;
	private StringBuffer ethTtemplate;
	private StringBuffer toktemplate;
	private StringBuffer tokTtemplate;
	private StringBuffer fdditemplate;
	private StringBuffer fddiTtemplate;
	private TextArea f1,f2,f3,f4,f5,f6;
	private Choice ch1,ch2,ch3,ch4,ch5;
	private String b1,b1a,b2,b2a,b3,b3a,b4,b4a,b5,b6,b6a;
	private int Jtcp,Judp,Jipv4,Jeth,Jfddi;
        int ipLENindex;
        int ethLENindex;


	private int jftcp,jbtcp;  //tcp fix and bin indices
	private int jfudp,jbudp;  //udp
	private int jfipv4,jbipv4;//ipv4
	private int jfeth,jbeth;  //eth
	private int jftok,jbtok;  //tok
	private int jffddi,jbfddi;//fddi
        private int i,j,k,m,n;


//=======================================================
	//Constructor
	public  SetChecksumParameters
	(Choice Ch5,Choice Ch4,Choice Ch3,Choice Ch2,Choice Ch1,
        StringBuffer TCPtemplate,
	StringBuffer UDPtemplate,
	StringBuffer IPv4template,
	StringBuffer IPv6template,
	StringBuffer DDLtemplateE,
	StringBuffer DDLtemplateT,
	StringBuffer DDLtemplateF,
	StringBuffer ETHtemplate,
	StringBuffer ETHTtemplate,
	StringBuffer TOKtemplate,
	StringBuffer TOKTtemplate,
	StringBuffer FDDItemplate,
	StringBuffer FDDITtemplate,
	TextArea F1,TextArea F2,
        TextArea F3,TextArea F4,
        TextArea F5,TextArea F6) {

	     	 tcptemplate  = TCPtemplate;
		 udptemplate  = UDPtemplate;
		 ipv4template = IPv4template;
		 ipv6template = IPv6template;
		 ddltemplateE = DDLtemplateE;
		 ddltemplateT = DDLtemplateT;
		 ddltemplateF = DDLtemplateF;
		 ethtemplate  = ETHtemplate;
		 ethTtemplate = ETHTtemplate;
		 toktemplate  = TOKtemplate;
		 tokTtemplate = TOKTtemplate;
		 fdditemplate = FDDItemplate;
		 fddiTtemplate= FDDITtemplate;

		 ch1=Ch1;ch2=Ch2;ch3=Ch3;ch4=Ch4;ch5=Ch5;
		 f1=F1;f2=F2;f3=F3;f4=F4;f5=F5;f6=F6;

		 jftcp =415;
		 jbtcp =415+233;

		 jfudp =148;
		 jbudp =230+3;

		 jfipv4=335; //need dif=224
		 jbipv4=335+224;

		 jfeth=45;
		 jbeth=90;

                 jftok=77;
                 jbtok=77+76;

		 jffddi=68;
		 jbfddi=135;

                 ipLENindex=335+224-82;
                 ethLENindex=217;

	     }//end constructor

//=======================================================
   public void itemStateChanged (ItemEvent e) {



   //========================================================
   //get app Layer bstring
   apptemplate.setLength(0);
   apptemplate.append(f5.toString());
   b5=getBINstring(apptemplate,0);

   //========================================================
   //Pseudo-IP-header for UDP and TCP checksums.
   //Both transport protocols calculate a pseudo-IP-header
   //to protect themselves from IP errors.
   //This pseudo-IP-header consists of:
   //     32-bit IP source address
   //     32-bit IP destination address
   //     8-bit  ZERO (padding)
   //     8-bit  IP protocol field (tcp or udp)
   //     16-bit transport segment length (hdr + appDataLength)
   //     if udp, appDataLength is 0%2 (rounded up if needed)
   
   //first make ip-header string (ipH)
   String ipH = new String(getBINstring(ipv4template,0));
 
   //construct pseudo-IP-headers for tcp and for udp
   StringBuffer psHtcp = new StringBuffer();
   StringBuffer psHudp = new StringBuffer();
   psHtcp.append(ipH.substring(96,159)); //source addr, dest addr
   psHtcp.append("00000000"); //ZERO

   //psHtcp and psHudp are same except for segment length
   //and protocol id
   psHudp.append(psHtcp.toString()); 

   //protocol id field
   psHtcp.append("00000110");//tcp protocol id=6
   psHudp.append("00010001");//udp protocol id=17

   //segment length in octets
   int appDataLength;//length in octets
   appDataLength=12;//english or default
   if(ch5.getSelectedIndex()==2)appDataLength=16;//french
   if(ch5.getSelectedIndex()==3)appDataLength=14;//russian
   int tsLength = 20 + appDataLength; //tcpSegmentLength
   int usLength = 8 + appDataLength + appDataLength%2; //udpSegLen
    
   psHtcp.append(Integer.toBinaryString(tsLength));
   psHudp.append(Integer.toBinaryString(usLength));
   
   //TCP checksum.  The checksum is applied to 
   //the pseudo-header and the entire tcp segment
   //(including data), with cks set to zero
   //for this computation.

   //set cks to 0 and make the bstring
   for(i=0;i<8;i++) {
         tcptemplate.setCharAt(jbtcp+i,'0');
         tcptemplate.setCharAt(jbtcp+11+i,'0');
         }
   b4=getBINstring(tcptemplate,0);

   //concatenate tcpheader with app-bstring
   b4=b4+b5;//tcp+app

   //concatenate tcp segment to psHtcp
   psHtcp.append(b4);
   String update4=new String
   (doChecksum(tcptemplate,psHtcp.toString(),jftcp,jbtcp,2));


   //========================================================
   //UDP checksum.  The checksum is applied to
   //the pseudo-header and the entire udp segment
   //(including data), with cks set to zero
   //for this computation.

   //set cks to 0 and make the bstring
   for(i=0;i<8;i++) {
         udptemplate.setCharAt(jbudp+i,'0');
         udptemplate.setCharAt(jbudp+11+i,'0');
         }
   b4a=getBINstring(udptemplate,0);

   //concatenate udpheader with app-bstring
   b4a=b4a+b5;//udp+app

   //concatenate udp segment with psHudp
   psHudp.append(b4a);
   String update4a=new String
   (doChecksum(udptemplate,psHudp.toString(),jfudp,jbudp,2));

   if(ch4.getSelectedIndex()==2) f4.setText(update4a);
   else                          f4.setText(update4);

   //========================================================
   //IPv4 checksum.  The checksum is applied to IPv4 Header 
   //only, with checksum set to zero for this computation.
   //Use hdr_b3 for this calculation

   //set ipv4 cks to 0 and make the bstring
   for(i=0;i<8;i++) {
         ipv4template.setCharAt(jbipv4+i,'0');
         ipv4template.setCharAt(jbipv4+11+i,'0');
         }

   //TESTING
   //set ipv4 length 0 in first character.
   //ipv4template.setCharAt(ipLENindex,'0');
 
   String hdr_b3 = new String(getBINstring(ipv4template,0));

   // Calculate Checksum on header only.
   String update3 = new String
   (doChecksum(ipv4template,hdr_b3,jfipv4,jbipv4,2));

   String update3a = new String(ipv6template);//no chksum on ipv6

   //f3.setText(update3);//default display
   if(ch3.getSelectedIndex()==2) f3.setText(update3a);
   else                          f3.setText(update3);

   //========================================================
   //get ipv4 header bstring again, this time with checksum,
   //so you will have correct concatenated b3string for use
   //in MAC frames, which calculate checksum over entire frame. 
   //concatenate ipv4 header with appropriate data field
   //note that the transport layer header is
   //already concatenated with app-data
   if(ch4.getSelectedIndex()==2)b3=hdr_b3+b4a;//ipv4+udp+app
   else                         b3=hdr_b3+b4;//ipv4+tcp+app

   //========================================================
   //get ipv6 header bstring
   //ipv6 has no checksum, but will be in the data field
   //for ethernet or fddi frame.  As in ipv4, you need
   //to append data field depending on value of
   //ch4.getSelectedIndex().

   b3a=getBINstring(ipv6template,0);
   if(ch3.getSelectedIndex()==2)b3a=b3+b4a;//ipv6+udp+app
   else                         b3a=b3+b4;//ipv6+tcp+app

   //========================================================
   //get datalink header bstring
   //datlink has no checksum, but will be in the data field
   //for ethernet or fddi frame.  The datalink header itself 
   //will depend upon the value of ch2.getSelectedIndex().
   //Note that token ring has NO llc field. As in higher layers,
   //you need to append data field depending on value of
   //ch3.getSelectedIndex().

   if(ch2.getSelectedIndex()==1)b2=getBINstring(ddltemplateE,0);
   else if (ch2.getSelectedIndex()==2)b2="";
   else if (ch2.getSelectedIndex()==3)b2=getBINstring(ddltemplateF,0);
   
   //b2=getBINstring(ddltemplate,0);
   if(ch3.getSelectedIndex()==2)b2=b2+b3a;//ddl+ipv6
   else                         b2=b2+b3;//ddl+ipv4

   //========================================================
   //Ethernet checksum.  The checksum is applied to the part
   //of the frame that starts with the Destination Address
   //and ends with the end of the data field.
   //The preamble and start-frame-delimiter are not included.
   //The contents of the trailer (ethTtemplate) are
   //not included in the checksum.  Since the contents of
   //the data portion of the packet have already been
   //multiplexed in the datalink layer, do not need to
   //apply the Choice button ch2 to select the data field.


   //TESTING
   //set eth length 0 in first character.
   //ethtemplate.setCharAt(ethLENindex,'0');

  //make the bstring for ethernet frame
  //Do not need to reset eth cks in ethTtemplate
  //but do need to chop off preamble + SOF in ethtemplate.
  // do this in getBINstring

   //chop off preamble(64)
   b1=getBINstring(ethtemplate,64);
   //concatenate eth header with entire data link frame.
   b1=b1+b2;


   String update1 = new String
   (doChecksum(ethTtemplate,b1,jfeth,jbeth,4));


   String update6 = new String(ethTtemplate);
   //f6.setText(update6);//default display


   //========================================================
   //TokenRing checksum.  The checksum is applied to the part
   //of the frame that starts with the FrameControl and 
   //ends with the end of the data field.
   //The start delimeter is not included.
   //The contents of the trailer (tokTtemplate) are
   //not included in the checksum.  Since the contents of
   //the data portion of the packet have already been
   //multiplexed in the datalink layer, do not need to
   //apply the Choice button ch2 to select the data field.

  //make the bstring for tokenring frame
  //Do not need to reset tok cks in tokTtemplate
  //but do need to chop off SOF in toktemplate.
  // do this in getBINstring.

   //chop off start delimeter(8) and access control(8)
   b1=getBINstring(toktemplate,16);

   //concatenate tok header with entire data link frame.
   b1=b1+b2;


   String update1tok = new String
   (doChecksum(tokTtemplate,b1,jftok,jbtok,4));

   String update6tok = new String(tokTtemplate);
   //f6.setText(update6tok);//default display

   //========================================================
   //FDDI checksum.  The FDDI checksum is applied to the part
   //of the frame that starts with the Frame Control field
   //and ends with the end of the data (Information) field.
   //The preamble and start-frame-delimiter are not included.
   //The FDDI-fcs, the end-delimiter(T), and the frame-status
   //(S/R) in the trailer (fddiTtemplate) are also not included.
   //The chophdr is applied in getBINstring function, to
   //get rid of preamble and sof. Since the contents of
   //the data portion of the packet have already been
   //multiplexed in the datalink layer, do not need to
   //apply the Choice button ch2 to select the data field.


  //make the bstring for FDDI frame
  //do not need to reset FDDI cks in fddiTtemplate
  //but do need to chop off preamble + SOF.

   //chop off preamble(128) 
   b1a=getBINstring(fdditemplate,128);

   //concatenate fddi header with entire data link frame.
   b1a=b1a+b2;


   String update6a = new String
   (doChecksum(fddiTtemplate,b1a,jffddi,jbfddi,4));


   if(ch1.getSelectedIndex()==3)      f6.setText(update6a);
   else if(ch1.getSelectedIndex()==2) f6.setText(update6tok);
   else if(ch1.getSelectedIndex()==1) f6.setText(update6);

    }//itemStateChanged()
//=======================================================




//=======================================================
   public String doChecksum(StringBuffer TEMPLATE,
   String Bstring, int Findex, int bindex, int NOCTETS) {
   //This function does the checksum for one template.

   StringBuffer template;
   String       bstring;
   int          F;
   int          b;
   int          Noctets;
   template=TEMPLATE;
   bstring =Bstring;
   F       =Findex;
   b       =bindex;
   Noctets =NOCTETS;
   int Jsum;
   int LEN;
   int i;

   LEN=19;
   if(Noctets==4)LEN=41;

   Jsum=getCheckSum(bstring,Noctets); 
   StringBuffer FIXword= new StringBuffer();
   FIXword.append(getFixWord(Jsum,Noctets));


   String bINword=int2binaryOctet32(Jsum,Noctets);

   for(i=0;i<LEN;i++){
   template.setCharAt(F+i,FIXword.charAt(i));
   template.setCharAt(b+i,bINword.charAt(i));
   }

   String Tupdate = new String(template);
   return(Tupdate);

   }//end doChecksum()
//=======================================================




//=======================================================
 public StringBuffer getFixWord(int NUM,int Noctets) {
 // This function makes the FIX display for the checksum integer.

 int num,kLen,i;

 num=NUM;

 StringBuffer FIXword = new StringBuffer();
 FIXword.setLength(0);
 FIXword.append("________   ________");
 if (Noctets==4)FIXword.append("   ________   ________");


 StringBuffer numbuff = new StringBuffer(Integer.toString(num));
 kLen=numbuff.length();
 for(i=0;i<kLen;i++)
 FIXword.setCharAt(i,numbuff.charAt(i) );//overwrite FIXword with numbuff

 return(FIXword);

 }//end getFixWord
//=======================================================



//=======================================================
//checksum algorithm
 public int getCheckSum(String S, int Noctets) {
 // This function calculates a checksum on a binary string.
 // Noctets determines the size of the checksum in binary
 // (i.e. 16 bits or 32 bits). The integer value of the
 // checksum is returned.

 // The checksum calculated here is a simplified version
 // of the Internet Checksum, described in Stevens, 1998,
 // pages 671-672. 
 //
 // The 16 bit checksum algorithm is the "Block Checksum"
 // as described in Halsall, page 129.
 // The "fold-over" method for transforming a 32-bit cks
 // into a 16-bit cks is described in Stevens, 1998, page 672.

     int noctets = Noctets; //4 for MAC cks, 2 for ip,tcp,udp cks 

     String origS = new String(S); 
     int LEN = origS.length();

     //work StringBuffer for conversion from int to string
     StringBuffer numBuff = new StringBuffer();

     int Ibeg = 0; //begin Index for substring

     int sum = 0;
     int nextNum = 0;

     //perform 16 bit addition across origS

     while  (Ibeg + 16 < LEN-1) {

     //pick up 16 bit binary string from origS 
     numBuff.setLength(0);
     numBuff.append(origS.substring(Ibeg,Ibeg+16));

     //convert binary string to binary integer, add to sum
     nextNum = Integer.parseInt(numBuff.toString(),2);
     sum += nextNum;
  
     Ibeg += 16;
     }// end while 

     //if any part of origS remains,
     //pick up last binary string from origS 
     if(LEN-1-Ibeg>0) {
     numBuff.setLength(0);
     numBuff.append(origS.substring(Ibeg,LEN-1));

     //convert binary string to binary integer, add to sum
     nextNum = Integer.parseInt(numBuff.toString(),2);
     sum += nextNum;
     }
  
     //sum is a 32 bit java integer
     //if (noctets==4) return the 32 bit integer
     if(noctets==4) return(sum);

     
     //if (noctets==2) need a 16 bit integer
     //chop sum into 2 16-bit binary numbers (a and b)
     //add the two halves together to make smaller sum 
     //in case of carry-over
     //chop the smaller sum into 2 16-bit integers
     //add the two halves together

     numBuff.setLength(0);
     numBuff.append(Integer.toBinaryString(sum));
 
     String finBuff = new String(numBuff);


     int a, b;
     a = sum >> 16;
     b = sum << 16;
     b = b >> 16; 
     sum = a + b;

     //repeat operation in case of carry over

     a = sum >> 16;
     if(a>0) {
     b = sum << 16;
     b = b >> 16; 
     sum = a + b;
     }//end if
 
     if(sum < 0) sum = ~sum;

     
     return (sum);

}//end getCheckSum
//=======================================================


//=======================================================
public String int2binaryOctet32(int NUM,int NOCTETS) {

//This function calculates the binary string that represents
//The integer NUM by the method of comparing to a bit mask.
//This funtion returns a string to the calling function.
//Although java has a library function for this, I just want
//the left most 8 bits of the 32-bit java integer.

int mask=1; //binary:00000001
int N=NUM;
int Noct=NOCTETS;
int Nleftshift;
Nleftshift=(Noct*8)-1;
mask<<=Nleftshift;

//mask<<=7;   //binary:10000000
//mask<<=15;  //binary:10000000 00000000
//mask<<=31;  //binary:10000000 00000000 00000000 00000000


// The StringBuffer A is built in the for loop.
StringBuffer A = new StringBuffer();

int i,j;
for(j=0;j<Noct;j++) {
for(i=0;i<8;i++) {

  //if N has a 1 at bit[i], A.append( '1' )
  //else                    A.append( '0' )
  A.append((N&mask) ==0 ? '0' : '1');

  //right shift mask 1 place, no sign bit
  mask >>>=1;

}//end for(i)
A.append("   ");
}//end for(j);

String octet = new String (A);
return(octet);

}//end method int2binaryOctet32(String NUM)
//=======================================================




//=======================================================
 public String getBINstring (StringBuffer TN, int NCHOP) {
 //This function takes the bINword text from the TextArea FN,
 //strips out all the blanks, and makes a string that is all
 //binary.


	  StringBuffer tN = TN;
	  String fstr = new String(tN);

      int nchop;//how many chars to chop off front of eth, tok, or fddi frame
	  int count=0;
	  int i=0;
	  int j=0;
	  int k=0;
	  String bINstr = new String();
	  k=fstr.length();
	  nchop=NCHOP;

	  //first \n at end of text display
	  //second \n at end of fix display
	  //when count=2, i=index of first bin display character
	  for(i=0;i<k;i++) {
	  if(fstr.charAt(i)=='\n')count++;
	  if(count==2)break;
	  }

	  for(j=i;j<k;j++) {
	  if(fstr.charAt(j)=='0') bINstr=bINstr + '0';
	  if(fstr.charAt(j)=='1') bINstr=bINstr + '1';
	  }//end for

      if(nchop==0)return(bINstr);

   //This is for eth and fddi frames.
   //The Layer 1 checksum does not include preamble or sof.
   //The value of nchop is the length of preamble+sof.
   //This part not caluculated until the bINstr (all binary)
   //is available so you are operating on the simplest
   //type of string.

   StringBuffer chophdr = new StringBuffer(bINstr);
   chophdr.reverse();

   //chop off front by nchop characters
   chophdr.setLength(bINstr.length()-nchop);
   String bINchop= new String(chophdr.reverse());
   return(bINchop);

}//end getBINstring()
//=======================================================

}//end class SetChecksumParameters


