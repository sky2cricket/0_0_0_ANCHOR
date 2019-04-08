
<html>
<head>
<title>
page_reload
</title>
<link href="vv_workbook.css" type="text/css" rel="stylesheet">

<!--
<script language=javascript src="02_vv_decompose_tags.js"></script>
<script language=javascript src="vv_validation.js"></script>
-->
<script language=javascript src="vv_decompose_tags.js"></script>

<script>




//alert("parent.L.RELOAD = "+parent.L.RELOAD);

</script>


</head>

<script>document.write('<body   bgcolor="'+parent.adb_background_color+'" >');</script>

<font face="arial" size="3">
<center><font face="arial">

<h2> <script> document.write(parent.adb_project_name); </script>
 Workbook OCR Page</h2>
<p>
<a href="http://diglib.lib.utk.edu/~cdeane/atest/charset/c.htm">reference</a>
</center>

<script>

//global variables defined in vv_decompose_tags.js
///var xmlAll = new String();
///var xmlCursor = 0;
///var localCursor = 0;

function loadFile() {

alert("begin file: "+document.forms[0].begin_file.value
+"\nend file: "+document.forms[0].end_file.value);

}

function clearData() {
document.forms[0].chomp.value = "";
document.forms[0].chomp2.value = "";
//parent.U.document.UF.reset();
return;
}

function filterChomp(option_num) {

//alert("filterChomp()");
var strChomp = new String(document.forms[0].chomp.value);

var strChomp2 = new String("z");
var numReplace = 0;
var numNotReplace =0;
for (i=0;i<strChomp.length;i++){

	if ( option_num == "1") {
		if (!confirm("strChomp.charAt(i)="+strChomp.charAt(i)+"\nstrChomp.charCodeAt(i)="+strChomp.charCodeAt(i) ) ) {
			break;
			}
		}

	if ( option_num == "2" && (strChomp.charCodeAt(i) > 127 || strChomp.charCodeAt(i) < 10) ) {
		if (!confirm("strChomp.charAt(i)="+strChomp.charAt(i)+"\nstrChomp.charCodeAt(i)="+strChomp.charCodeAt(i) ) ) {
			break;
			}
		}

	if ( strChomp.charCodeAt(i) == 10 ) {
		strChomp2 += "";
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 13 ) {
		strChomp2 += "EURO:";
		numReplace++;

	}else if ( strChomp.charCodeAt(i) == 8364 ) {
		strChomp2 += "EURO:";
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
		strChomp2 += "";//replace modifier letter circumflex accent with empty string
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
		strChomp2 += "'"; //replace left double quotation mark with simple double quotation mark 
	}else if ( strChomp.charCodeAt(i) == 8221 ) {
		strChomp2 += "'"; //replace right double quotation mark with simple double quotation mark 
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8226 ) {
		strChomp2 += "*"; //replace bullet  with star 
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8211 ) {
		strChomp2 += "-";
		numReplace++;
	}else if ( strChomp.charCodeAt(i) == 8212) {
		strChomp2 += "--";
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
	}else if ( strChomp.charCodeAt(i) > 127) {
		alert("strChomp.charAt(i)="+strChomp.charAt(i)+"\nstrChomp.charCodeAt(i)="+strChomp.charCodeAt(i) );
		//strChomp2 += "***"+strChomp.charAt(i)+"***"; //strip these out
		strChomp2 += "";
		numNotReplace++;
	}else{
		strChomp2 += strChomp.charAt(i);
	}
}//end if

	if (numNotReplace > 100 || numReplace > 100) i=strChomp.length;
	alert( "filterChomp()\n\nNumber of Replacements = "+numReplace+"\n\nNumber not able to replace = "+numNotReplace);
document.forms[0].chomp2.value = strChomp2.substr(1);//remove initial z 
}//end function

</script>

<form name="DF"  action="new.xml">


<!---table border="1" cellpadding="2" cellspacing="0" width="98%" bgcolor="ddeeff"--->
<table  class="bgINNER"  border="0" cellpadding="2" cellspacing="1" width="98%" xbgcolor="99aabb">

<tr class="bgstandard" ><td colspan="3">
The purpose of this page is to upload an existing OCR txt file.
<br>So the file can be prepared for UTF-8 format.
<p>Cut and paste the entire ocr file into the text area below.
<p><font face="arial" size="2">
<script>
var base = new String(parent.adb_admindb_data);
document.write("You have generated this workbook from Admin DB location: input");
document.write("<br>Your output filename should be: output");
</script>
</font>
</td></tr>


<tr class="bgstandard" ><td colspan="1" class="label12u">
Enter<br>Filenames
</td><td class="value10nou">
begin_file <input type="text" name="begin_file" size="104" value="" >
end_file&nbsp;&nbsp;&nbsp; <input type="text" name="end_file" size="104" value="">
<br>
<br>
<input type="button" name="b1" value="Load the file named above." onclick="loadFile()" >
&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>


<tr class="bgstandard" ><td colspan="1" class="label12u">
begin_file<br>data
</td><td class="value10nou">
<textarea name="chomp" rows="8" cols="80" value=""></textarea>
<br>
&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>

<tr class="bgstandard" ><td colspan="1" class="label12u">
end_file<br>data
</td><td class="value10nou">
<!-- textarea: document.DF.chomp.value<br-->
<textarea name="chomp2"
rows="8" cols="80"></textarea>
<br>

&nbsp;</td>

<td>&nbsp;</td>
</tr>
<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>




<tr class="bgstandard" ><td colspan="3" align="left">
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;

<input type="button" name ="bChomp0" onclick="filterChomp(0);" value="Process option 0">
&nbsp;
&nbsp;
<input type="button" name ="bChomp1" onclick="filterChomp(1);" value="Process option 1">
&nbsp;
&nbsp;
<input type="button" name ="bChomp1" onclick="filterChomp(2);" value="Process option 2">
&nbsp;
&nbsp;
<input type="button" name ="bClear" onclick="clearData();" value="Clear TextArea">
&nbsp;
&nbsp;
&nbsp;


</td></tr>


<tr class="bgstandard" >
<td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
</tr>

<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>

</table>

</form name="forms[0]">

</body>
</html>

