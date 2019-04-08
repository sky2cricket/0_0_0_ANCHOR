
<html>
<head>
<title>
page_ocr_
</title>
<link href="vv_workbook.css" type="text/css" rel="stylesheet">

<!---
test directory: V:\volvoices\chd\scripts\010101\02\ocr\
--->

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
 Workbook OCR-01 Page</h2>
<p>
<a href="http://diglib.lib.utk.edu/~cdeane/WORKBOOK/dataprep/d.htm">reference</a>
</center>

<script>

//global variables defined in vv_decompose_tags.js
///var xmlAll = new String();
///var xmlCursor = 0;
///var localCursor = 0;

function loadFile() {
//alert("begin file: "+document.forms[0].begin_file.value +"\nend file: "+document.forms[0].end_file.value);

for ( i=0;i<document.DF.dirSelect.length; i++) {
if ( document.DF.dirSelect[i].selected == true ) {
	document.DF.begin_file.value = document.DF.dirSelect[i].text;
	break;
	}
}//end for

}//end function

function loadDirName() {
if ( document.DF.dir_name0.value == "" ) {
        alert("Please enter a directory name");
	return;
	}
document.DF.dir_name1.value = document.DF.dir_name0.value;
}

function displayDirectoryContents() {

alert ("displayDirectoryContents()");


}


function getDirname() {
var str = new String(document.DF.dir_name1.value)
return(str);
}///end function

function clearData() {
document.forms[0].chomp.value = "";
document.forms[0].chomp2.value = "";
document.DF.reset();
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



function save_ocr() {

document.DF.action = "saveOCR.php";
document.DF.method = "POST";
document.DF.myfilename.value = document.DF.begin_file.value;
document.DF.submit();

}//end function

</script>

<form name="DF"  xaction="saveOCR.php" xmethod="POST">


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
Dirname
</td><td class="value10nou">
dir_name0&nbsp; <input type="text" name="dir_name0" size="104" value=""> document.DF.dir_name0.value - /home/cdeane/public_html/WORKBOOK/volvoices/v6 - V:\volvoices\chd\scripts\010101\02\ocr\

<br>
dir_name0&nbsp; <input type="text" name="dir_name1" size="104" value=""> document.DF.dir_name1.value - V:\volvoices\chd\scripts\010101\02\ocr\
<br>
<?php
##$dir_name = "<script>document.write(document.DF.dir_name1.value)</script>";
#$dir_name = "<script>getDirname();</script>"; 
$dir_name = "/home/cdeane/public_html/WORKBOOK/";
$dir_name = "/home/cdeane/public_html/WORKBOOK/volvoices/v6/";
#$dir_name = "/home/diglib/";
echo "$dir_name"; 
$dir = opendir($dir_name);

echo "<br>opendir($dir_name)";

$file_list = "<p><select name='dirSelect' size='20' ><option selected>none selected</option>"; 

while ($file_name = readdir($dir)) {
		///echo "<br>$file_name";
		if ( $file_name != "." && $file_name != ".." ) {
			$file_list .= "<option>$file_name</option>";
			}
	}
$file_list .= "</select> document.DF.dirSelect "; 
echo "$file_list";
closedir($dir);

#$file_target="/home/cdeane/public_html/WORKBOOK/volvoices/v6/page_museum.htm";
$file_target="/home/cdeane/public_html/WORKBOOK/volvoices/v6/test_06212007.txt";


$file_reader = fopen($file_target,"r");

$file_contents = fread($file_reader, filesize($file_target));

echo "<hr>";
$msg = "$file_contents";
echo "$msg";
echo "<hr>";



fclose($file_reader);

?>
<p><input type="button" name="b1" value="Load Directory Name" onclick="loadDirName()" >
&nbsp;&nbsp;&nbsp;<input type="button" name="b1a" value="Display Directory Contents" onclick="displayDirectoryContents()" >

&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr class="bgstandard" ><td colspan="1" class="label12u">
Enter<br>Filenames
</td><td class="value10nou">
<br>begin_file&nbsp;&nbsp; <input type="text" name="begin_file" size="104" value="" > document.DF.begin_file.value
end_file&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" name="end_file" size="104" value=""> document.DF.end_file.value
<br> <  input type="hidden" name="myfilename" value="" > document.DF.myfilename.value
<input type="hidden" name="myfilename" value="">
<br>
<br>
<input type="button" name="b2" value="Load the file selected above." onclick="loadFile()" >
&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>


<tr class="bgstandard" ><td colspan="1" class="label12u">
begin_file<br>data
</td><td class="value10nou">
<textarea name="chomp" rows="8" cols="80" value=""></textarea> document.DF.chomp.value
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
rows="8" cols="80"></textarea> document.DF.chomp2.value
<br>

&nbsp;</td>

<td>&nbsp;</td>
</tr>
<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>




<tr class="bgstandard" ><td colspan="3" align="left">
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;

<input type="button" name ="bChomp0" onclick="filterChomp(0);" value="Process text">
&nbsp;
&nbsp;
<input type="button" name ="bChomp1" onclick="filterChomp_01();" value="all chars">
&nbsp;
&nbsp;
<input type="button" name ="bChomp1" onclick="filterChomp_02();" value="out-of-range chars">
&nbsp;
&nbsp;
<input type="button" name ="bChomp1" onclick="filterChomp_03();" value="test chars">
&nbsp;
&nbsp;
<input type="button" name ="bChomp1" onclick="save_ocr();" value="save file">
&nbsp;
&nbsp;
<input type="button" name ="bClear" onclick="clearData();" value="Clear TextAreas">
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

