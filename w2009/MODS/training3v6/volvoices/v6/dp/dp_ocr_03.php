<?php

$POSTdirname = $_POST[dir_name0];
$POSTbeginfilename = $_POST[begin_file];

?>
<html>
<head>
<title>
dp_ocr_03
</title>
<link href="dp_workbook.css" type="text/css" rel="stylesheet">

<!---
STORE1\area2
test directory: V:\volvoices\chd\scripts\010101\02\ocr\
this directory:  V:\volvoices\chd\dataprep\
--->

<script language=javascript src="dp_filter.js"></script>


</head>

<script>
document.write('<body   bgcolor="eeeeee" >');
document.write('<font face="arial" size="1" color="a00000"><br>location.href='+location.href+'<br></font>');

</script>

<font face="arial" size="3">
<center><font face="arial">

<h2> <script> document.write("DataPrep"); </script>
 Workbook OCR-03 Page</h2>
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
document.DF.dir_name1.value = document.DF.dir_name0.value;
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

function loadFile() {
//alert("begin file: "+document.forms[0].begin_file.value +"\nend file: "+document.forms[0].end_file.value);

for ( i=0;i<document.DF.dirSelect.length; i++) {
if ( document.DF.dirSelect[i].selected == true ) {
	document.DF.begin_file.value = document.DF.dirSelect[i].text;
	break;
	}
}//end for

document.DF.action = "dp_ocr_03.php";
document.DF.method = "POST";
document.DF.submit();
}//end function
----------------------------------------------------------------*/

function FileToTextArea(){

document.DF.action = "dp_ocr_03.php";
document.DF.method = "POST";
document.DF.submit();
}//end function


</script>

<form name="DF"  xaction="saveOCR.php" xmethod="POST">


<!---table border="1" cellpadding="2" cellspacing="0" width="98%" bgcolor="ddeeff"--->
<table  class="bgINNER"  border="0" cellpadding="2" cellspacing="1" width="98%" xbgcolor="99aabb">

<tr class="bgstandard" ><td colspan="3">
The purpose of the OCR Workbook is to upload an existing OCR txt file.
<br>So the file can be prepared for UTF-8 format.
<p>The file you selected has been loaded into the upper text area below.
<p>The buttons give you process options.  
<p>When done, save the file.  
<p>It will automatically have the same name as your start file, so please put in different directory.
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



<?php

/*---------------------------------------------
echo "$POSTdirname<hr><hr>";
$dir_name = $POSTdirname;
echo "$dir_name";
$dir = opendir($dir_name);

echo "<br>opendir($dir_name)";
                
$file_list = "<ul>"; 
$file_list .= "<li>aaa";
$file_list .= "<li>bbb";
                
while ($file_name = readdir($dir)) {
                echo "<br>$file_name";
                $file_list .= "<li>$file_name";
        }       
$file_list .= "</ul>";
echo "$file_list";

$file_list = "<p><select name='dirSelect' size='20'  ><option selected>none selected</option>"; 

while ($file_name = readdir($dir)) {
		///echo "<br>$file_name";
		if ( $file_name != "." && $file_name != ".." ) {
			$file_list .= "<option>$file_name</option>";
			}
	}
$file_list .= "</select> document.DF.dirSelect "; 
echo "$file_list";



closedir($dir);
        
$file_reader = fopen($POSTbeginfilename,"r");

$file_contents = fread($file_reader, filesize($file_target));

echo "<hr>";
$msg = "$file_contents";
echo "$msg";
echo "<hr>";
fclose($file_reader);
-------------------------------------------------*/

?>      







<tr class="bgstandard" ><td colspan="1" class="label12u">
Filename
</td><td class="value10nou">
<br> <input type="text" name="begin_file" READONLY size="104" value="<?php echo"$POSTbeginfilename"; ?>" > document.DF.begin_file.value
	<input type="hidden" name="myfilename" value="<?php echo"$POSTbeginfilename"; ?>" > 
&nbsp;</td>
<td>&nbsp;</td>
</tr>

<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>
<tr class="bgstandard" ><td colspan="3" class="label12u">

<?php

$fullPathFileName =$POSTdirname;
$fullPathFileName .= $POSTbeginfilename;

$tempFile = "dp_ocr_temp.txt";
$fullPathTempName =$POSTdirname;
$fullPathTempName .= $tempFile;

echo "FullPathFileName - <b>$fullPathFileName</b><br>FullPathTempName - <b>$fullPathTempName</b><br>";

copy($fullPathFileName,$fullPathTempName) or die("copy fail"); #chmod 777 dp_ocr_temp.txt -- this copy statement worked

$file_reader = fopen($fullPathTempName,"rb") or die("Couldn't open file");

echo "$file_reader";

$file_contents = fread($file_reader, filesize($fullPathTempName));

echo "<hr>";
$msg = "$file_contents";
#echo "$msg";
echo "<hr>";
fclose($file_reader);
/*---------------------------------------------------------
-----------------------------------------------------------*/
?>

</td></tr>

<tr class="bgstandard" ><td colspan="1" class="label12u">
begin_file<br>data
</td><td class="value10nou">
<textarea name="chomp" rows="8" cols="80" value=""><?php echo "$msg"; ?></textarea> document.DF.chomp.value
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
<input type="button" name ="bClear" onclick="clearUpperData();" value="Clear Upper TextArea">
&nbsp;
&nbsp;
<input type="button" name ="bClear" onclick="clearLowerData();" value="Clear Lower TextArea">
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




