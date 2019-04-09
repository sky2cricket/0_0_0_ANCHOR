<?php

$POSTdirname = $_POST[dir_name0];

?>
<html>
<head>
<title>
dp_ocr_02
</title>
<link href="vv_workbook.css" type="text/css" rel="stylesheet">

<!---
STORE1\area2
test directory: V:\volvoices\chd\scripts\010101\02\ocr\
this directory:  V:\volvoices\chd\dataprep\
--->



</head>

<script>
document.write('<body   bgcolor="eeeeee" >');
document.write('<font face="arial" size="1" color="a00000"><br>location.href='+location.href+'<br></font>');

</script>

<font face="arial" size="3">
<center><font face="arial">

<h2> <script> document.write("DataPrep"); </script>
 Workbook OCR-02 Page</h2>
<p>
<a href="http://diglib.lib.utk.edu/~cdeane/WORKBOOK/dataprep/d.htm">reference</a>
&nbsp;&nbsp;
<a href="http://diglib.lib.utk.edu/~cdeane/WORKBOOK/volvoices/v6/dp_ocr_01.php">back to start</a>
</center>

<script>



/*--------------------------------------------------------------
function loadDirName() {
if ( document.DF.dir_name0.value == "" ) {
        alert("Please enter a directory name");
        return;
        }
var strDir = new String(document.DF.dir_name0.value);
    strDir = strDir.replace(/ /gi,"");
    document.DF.dir_name0.value=strDir;
//document.DF.dir_name1.value = document.DF.dir_name0.value;
document.DF.action = "dp_ocr_02.php";
document.DF.method = "POST";

document.DF.submit();
}

function displayDirectoryContents() {
alert ("displayDirectoryContents()");
}

function save_ocr() {

document.DF.action = "saveOCR.php";
document.DF.method = "POST";
document.DF.myfilename.value = document.DF.begin_file.value;
document.DF.submit();

}//end function
----------------------------------------------------------------*/

function loadFile() {
//alert("begin file: "+document.forms[0].begin_file.value );

for ( i=0;i<document.DF.dirSelect.length; i++) {
if ( document.DF.dirSelect[i].selected == true ) {
	document.DF.begin_file.value = document.DF.dirSelect[i].text;
	break;
	}
}//end for
//document.DF.action = "dp_ocr_03.php";
//document.DF.method = "POST";
//document.DF.submit();


}//end function

function goToPage3 () {
var strF = new String(document.DF.begin_file.value);
if (strF == "" ) {
	alert("Please select a file from the list.");
	return;
	}

if ( strF == "none selected" ) {
	alert("\"none selected\" is not a valid selection.");
	return;
	}

document.DF.action = "dp_ocr_03.php";
document.DF.method = "POST";
document.DF.submit();

}///function

</script>

<form name="DF"  xaction="saveOCR.php" xmethod="POST">


<!---table border="1" cellpadding="2" cellspacing="0" width="98%" bgcolor="ddeeff"--->
<table  class="bgINNER"  border="0" cellpadding="2" cellspacing="1" width="98%" xbgcolor="99aabb">

<tr class="bgstandard" ><td colspan="3">
The purpose of OCR workbook is to upload an existing OCR txt file.
<br>So the file can be prepared for UTF-8 format.
<p>Select a filename from the list below.
<p><font face="arial" size="2">
</font>
</td></tr>


<tr class="bgstandard" ><td colspan="1" class="label12u">
Dirname
</td><td class="value10nou">

<input type="text" READONLY name="dir_name0" size="104" value="<?php
echo "$POSTdirname";
?>">



document.DF.dir_name0.value 
<br>

        
&nbsp;</td>     
<td>&nbsp;</td> 
</tr>

<tr class="bgstandard"><td colspan="3" >&nbsp;</td></tr> 

<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>
<tr class="bgstandard"><td colspan="3" >&nbsp;

<?php

if (file_exists($POSTdirname)) {

#echo "$POSTdirname<hr><hr>";
$dir_name = $POSTdirname;
#echo "$dir_name";
$dir = opendir($dir_name);

echo "<br>\$dir=opendir($dir_name)";
echo "<br>\$dir=$dir";
                
/*---------------------------------------------
$file_list = "<ul>"; 
$file_list .= "<li>aaa";
$file_list .= "<li>bbb";
                
while ($file_name = readdir($dir)) {
                echo "<br>$file_name";
                $file_list .= "<li>$file_name";
        }       
$file_list .= "</ul>";
echo "$file_list";
-------------------------------------------------*/

$file_list = "<p><select name='dirSelect' size='20'  ><option selected>none selected</option>"; 

while ($file_name = readdir($dir)) {
		#///echo "<br>$file_name";
		#if ( $file_name != "." && $file_name != ".." ) {
		if ( preg_match('/.txt/',$file_name) && preg_match('/00*/',$file_name) ) {
			$file_list .= "<option>$file_name</option>";
			}
	}
$file_list .= "</select> document.DF.dirSelect - -  only want text files"; 
echo "$file_list";



closedir($dir);
}else{

echo "The directory <b>$POSTdirname</b> is not found.";
echo "<br>&nbsp;&nbsp;Please try again.";
}
        
?>      



</td></tr> 



<?php


if (file_exists($POSTdirname)) {

echo '<tr class="bgstandard" ><td colspan="1" class="label12u">';
echo 'Filename </td><td class="value10nou">';
echo '<br>begin_file&nbsp;&nbsp; <input type="text" name="begin_file" size="104" value="" > document.DF.begin_file.value';
echo '<br> <br> <input type="button" name="b2" value="Load the file selected above." onclick="loadFile()" >';
echo '&nbsp;&nbsp;&nbsp;<input type="button" name="b2" value="Go to OCR Page 3" onclick="goToPage3()" >';
echo '&nbsp;</td> <td>&nbsp;</td> </tr>';
}
?>



<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>
<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>
<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>

</table>

</form name="forms[0]">

</body>
</html>




