//dp_filter.js

function clearLowerData() {
//document.forms[0].chomp.value = "";
document.forms[0].chomp2.value = "";
//document.DF.reset();
return;
}


function clearUpperData() {
document.forms[0].chomp.value = "";
//document.forms[0].chomp2.value = "";
//document.DF.reset();
return;
}

function filterChomp_01() {//all chars
var strChomp = new String(document.forms[0].chomp.value);
var numChars = 0;
	for (i=0;i<strChomp.length;i++){
	numChars++;
	if (!confirm("option 1: view each character in the string"
		+"\nstrChomp.charAt("+i+")="+strChomp.charAt(i)+"\nstrChomp.charCodeAt("+i+")="+strChomp.charCodeAt(i) ) ) {
		break;
		}
	}//end for
alert("option 1:\nThe number of out of characters reviewed: "+numChars);
}//end function

function filterChomp_02() {//out of range chars
var strChomp = new String(document.forms[0].chomp.value);
var numOutOfRange=0;
	for (i=0;i<strChomp.length;i++){
		if ( strChomp.charCodeAt(i) > 127 || strChomp.charCodeAt(i) < 9 ) {
			numOutOfRange++;
			if (!confirm("option 2: view each out of range character in the string"
			+"\nstrChomp.charAt("+i+")="+strChomp.charAt(i)+"\nstrChomp.charCodeAt("+i+")="+strChomp.charCodeAt(i) ) ) {
			break;
			}//end inner if
		}//end outer if
	}//end for
alert("option 2:\nThe number of out of out of range characters is: "+numOutOfRange);
}//end function

function filterChomp_03() {//test
var strChomp = new String(document.forms[0].chomp.value);
var numChars = 0;
	for (i=0;i<strChomp.length;i++){
	numChars++;
	if (!confirm("option 3: view each character in the string"
		+"\nstrChomp.charAt("+i+")="+strChomp.charAt(i)+"\nstrChomp.charCodeAt("+i+")="+strChomp.charCodeAt(i) ) ) {
		break;
		}
	}//end for
alert("option 3:\nThe number of out of characters reviewed: "+numChars);
}//end function


function filterChomp() {

//alert("filterChomp()");
var strChomp = new String(document.forms[0].chomp.value);

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

	alert( "filterChomp()\n\nNumber of Replacements (ascii > 127 ) = "+numReplace
		+"\n\nNumber of Replacements ( ascii 9, 10, 13 ) ="+numReplaceLow
		+"\n\nNumber not able to replace = "+numNotReplace);
document.forms[0].chomp2.value = strChomp2.substr(1);//remove initial z 
}//end function


/*------------javascript tidbit-------------------------------------*/
function save_ocr() {

document.DF.action = "saveOCR.php";
document.DF.method = "POST";
document.DF.myfilename.value = document.DF.begin_file.value;
document.DF.submit();

}//end function
/*--------------------------------------------------------------------*/

/*-----------php tidbit--------------------------------------------------------------
#$file_target="/home/cdeane/public_html/WORKBOOK/volvoices/v6/page_museum.htm";
$file_target="/home/cdeane/public_html/WORKBOOK/volvoices/v6/test_06212007.txt";


$file_reader = fopen($file_target,"r");

$file_contents = fread($file_reader, filesize($file_target));

echo "<hr>";
$msg = "$file_contents";
echo "$msg";
echo "<hr>";



fclose($file_reader);
------------------------------------------------------------------------------------*/

function vv_filter(str) {

//alert("vv_filter()");
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

	alert( "filterChomp()\n\nNumber of Replacements (ascii > 127 ) = "+numReplace
		+"\n\nNumber of Replacements ( ascii 9, 10, 13 ) ="+numReplaceLow
		+"\n\nNumber not able to replace = "+numNotReplace);
document.forms[0].chomp2.value = strChomp2.substr(1);//remove initial z 
}//end function vv_filter











