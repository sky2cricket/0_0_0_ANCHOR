//vv_filter.js


function vv_filter(str) {

//if(!confirm("vv_filter("+str+")")) { return; }
var strChomp = new String(str);

var strChomp2 = new String("z");
var numReplace = 0;
var numReplaceLow =0;
var numNotReplace =0;
for (i=0;i<strChomp.length;i++){

	if ( strChomp.charCodeAt(i) == 9 ) {
		strChomp2 += " ";//replace tab with space
		numReplaceLow++;
	}else if ( strChomp.charCodeAt(i) == 10 ) {
		strChomp2 += " ";//replace \n with space
		numReplaceLow++;
	}else if ( strChomp.charCodeAt(i) == 13 ) {
		strChomp2 += " ";//replace \r with space
		numReplaceLow++;

	}else if ( strChomp.charCodeAt(i) == 8364 ) {
		strChomp2 += " ";//replace euro symbol with whitespace
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 163 ) {
		strChomp2 += " ";//replace pound symbol with whitespace
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8218 ) {
		strChomp2 += "'"; //replace low single quote with single quote
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 402 ) {
		strChomp2 += "f";// replacescript f with simple f
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8222 ) {
		strChomp2 += '"';//replace low double quote with double quote
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8230 ) {
		strChomp2 += "...";//replace horizontal ellipsis with three .
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8224 ) {
		strChomp2 += "*" //replace dagger with *;
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8225 ) {
		strChomp2 += "**"; // replace double dagger with **
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 710 ) {
		strChomp2 += " ";//replace modifier letter circumflex accent with one space
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8240 ) {
		strChomp2 += "per mille"; //replace per mille sign with per mille phrase
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 352 ) {
		strChomp2 += "S"; //replace Latin capital letter S with caron with simple S
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8249 ) {
		strChomp2 += "<"; //replace single left pointing quotation mark (french) with single left pointing angle bracket
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 338 ) {
		strChomp2 += "OE"; //replace Latin Capital ligature OE with simple OE
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 381 ) {
		strChomp2 += "Z"; //replace Latin Capital Z with caron with simple Z 
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8216 ) {
		strChomp2 += "'"; //replace left single quotation mark with simple single quotation mark 
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8217 ) {
		strChomp2 += "'"; //replace right single quotation mark with simple single quotation mark 
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8220 ) {
		strChomp2 += '"'; //replace left double quotation mark with simple double quotation mark 
	}else if ( strChomp.charCodeAt(i) == 8221 ) {
		strChomp2 += '"'; //replace right double quotation mark with simple double quotation mark 
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8226 ) {
		strChomp2 += "*"; //replace bullet  with star 
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8211 ) {
		strChomp2 += "-"; //replace en dash with simple dash
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8212) {
		strChomp2 += "--"; //replace em dash with simple double dash
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 732 ) {
		strChomp2 += '~'; //replace small tilde with  regular tilde
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8482) {
		strChomp2 += "(TM)"; //replace TM symbol with TM letters
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 353) {
		strChomp2 += "S";//replace small s with caron with simple small s
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8250) {
		strChomp2 += ">";//replace single right pointing angle quotation mark (french) with right angle bracket
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 339) {
		strChomp2 += "oe"; //replace latin small ligature oe with reqular oe
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 382) {
		strChomp2 += "z";//replace Latin small z with caron with regular small z
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 376) {
		strChomp2 += "Y";// replace Latin capital letter Y with diaeresis with regurlar Y
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 169) {
		strChomp2 += "(C)";// replace copyright symbol with character string (C)
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 174) {
		strChomp2 += "(R)";// replace R in circle symbol with character string (R)
		numReplace++;
	}else if ( strChomp.charCodeAt(i) > 127) {
		alert("strChomp.charAt(i)="+strChomp.charAt(i)+"\nstrChomp.charCodeAt(i)="+strChomp.charCodeAt(i) );
		//strChomp2 += "***"+strChomp.charAt(i)+"***"; //strip these out
		strChomp2 += " "; //replace with space
		numNotReplace++;
	}else{
		strChomp2 += strChomp.charAt(i);
	}
}//end for


        while (strChomp2.indexOf("  ") > -1 ) {
	strChomp2 = strChomp2.replace(/  /gi," ");//replace multiple whitespace with single whitespace
	}

	/*-------------
	alert( "vv_filter(str)\n\nNumber of Replacements (ascii > 127 ) = "+numReplace
		+"\n\nNumber of Replacements ( ascii 9, 10, 13 ) ="+numReplaceLow
		+"\n\nNumber not able to replace = "+numNotReplace);
	----------------*/
        strChomp2  = strChomp2.substr(1);//remove initial z 
return (strChomp2);
}//end function vv_filter


