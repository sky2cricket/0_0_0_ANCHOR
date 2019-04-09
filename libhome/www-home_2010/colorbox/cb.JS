//////SCRIPT FILE cb.JS
//////called by colorbox.html

//////START SCRIPT<script language="Javascript">

////////////////////////////////////////////////////////////////
//define makeArray function to initialize arrays

var len;

function makeArray(len) {
   for (var i=0;i<len;i++) this[i]=null;
   this.length=len;
   }



////////////////////////////////////////////////////////////////
  function newBg (form) {


var col = new makeArray(17);
    col[0]=17;
    col[1]="1";
    col[2]="2";
    col[3]="3";
    col[4]="4";
    col[5]="5";
    col[6]="6";
    col[7]="7";
    col[8]="8";
    col[9]="9";
    col[10]="a";
    col[11]="b";
    col[12]="c";
    col[13]="d";
    col[14]="e";
    col[15]="f";
    col[16]="0"; 


   c1="ffaaaa";

   T=new Date();
   Ts=T.getTime();
   T0=Ts%1000000;
   T1=T0<<5;
   T1a=T1>>5;

   T2=T0>>1;
   T2a=T2<<4;
   T2b=T2a>>4;

   T3=T0>>2;
   T3a=T3<<3;
   T3b=T3a>>3;

   T4=T0>>3;
   T4a=T4<<2;
   T4b=T4a>>2;

   T5=T0>>4;
   T5a=T5<<1;
   T5b=T5a>>1;

   T6=T0>>5;
    

   T1=T0<<4;
   T1a=T1>>4;
   T2=T0>>2;
   T2a=T2<<2;
   T2b=T2>>2;
   T3=T0>>4;


   r1=(T1a%16)+1;
   r2=(T2b%16)+1;
   g1=(T3b%16)+1;
   g2=(T4b%16)+1;
   b1=(T5b%16)+1;
   b2=(T6%16)+1;

   s1=col[r1];
   s1=s1+col[r2];
   s1=s1+col[g1];
   s1=s1+col[g2];
   s1=s1+col[b1];
   s1=s1+col[b2];


document.write("<HTML>"
	+ "<HEAD>"
	+ "<title>cb.JS</title>"
        + "</HEAD>"
        + "<BODY bgcolor=\"aaeeff\"  Text=\"000000\" >"
        + "<b> test output with newBg(this.form) </b>"
        + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
        + "<a href=\"colorbox.html\"><b>back</b></a>"
	+ "<form>"
        + "<table border=2 width=380 bgcolor="+s1+"cellpadding=25><tr><td>" 
        + "<center>"
	+ "<font color=\"000000\">"
	+ "Current TABLE BGCOLOR:&nbsp;&nbsp;<b>"+s1+"</b>"
	+ "<br><font color=\"ffffff\">"
	+ "Current TABLE BGCOLOR:&nbsp;&nbsp;<b>"+s1+"</b>"
	+ " </td><td> "
        + "<INPUT TYPE=BUTTON VALUE=\"New bgcolor\" onclick=\"newBg(this.form);\">"
	+ "<SCRIPT LANGUAGE=\"Javascript\" SRC=\"cb.JS\">"
	+ "</SCRIPT>"
	+ "<p>&nbsp;"
	+ "</td></tr></table>"
        +"</form>" 
        +"</BODY></HTML>");

   

}

//////end script </script>
