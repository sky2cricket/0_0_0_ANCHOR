
<html>
<head>
<title>
dp_ocr_01
</title>
<link href="dp_workbook.css" type="text/css" rel="stylesheet">

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
 Workbook OCR-01 Page</h2>
<p>
<a href="http://diglib.lib.utk.edu/~cdeane/WORKBOOK/dataprep/d.htm">reference</a>
</center>

<script>




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

</script>

<form name="DF"  xaction="saveOCR.php" xmethod="POST">


<!---table border="1" cellpadding="2" cellspacing="0" width="98%" bgcolor="ddeeff"--->
<table  class="bgINNER"  border="0" cellpadding="2" cellspacing="1" width="98%" xbgcolor="99aabb">

<tr class="bgstandard" ><td colspan="3">
The purpose of this page is to upload an existing OCR txt file.
<br>So the file can be prepared for UTF-8 format.
<p>Enter your target directory below.
<p><font face="arial" size="2">
</font>
</td></tr>


<tr class="bgstandard" ><td colspan="1" class="label12u">
Dirname
</td><td class="value10nou">
dir_name0&nbsp; <input type="text" name="dir_name0" size="104" value="/home/cdeane/public_html/WORKBOOK/volvoices/v6/"> document.DF.dir_name0.value 
<br> /home/cdeane/public_html/WORKBOOK/volvoices/v6/ - this value autopopped for testing - you may change this value
<br>format:  This path must start with <b>/</b> and end with <b>/</b> 
<br>

<p><input type="button" name="b1" value="Load Directory Name" onclick="loadDirName()" >
        
&nbsp;</td>     
<td>&nbsp;</td> 
</tr>

<tr class="bgstandard"><td colspan="3" >&nbsp;</td></tr>




<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>
<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>
<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>
<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>

</table>

</form name="forms[0]">

</body>
</html>




