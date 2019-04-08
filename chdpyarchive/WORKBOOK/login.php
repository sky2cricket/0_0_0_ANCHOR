<?php

$uname = $_POST[uName];

$pwd  = $_POST[pWord];

?>
<html>
<head>
<title>test_01</title>
<link href="workbook/vv_workbook.css" type="text/css" rel="stylesheet">
</head>
<body class="background">
<font face="arial" size="3" ><b>
<p>&nbsp;
<center>
<?php

if ( $pwd =="chd" || $pwd == "pc" || $pwd == "pinky" ) {

print " Volunteer Voices Workbook Login Page ";
print '<hr>';
print '<form name="formOne" method="POST" action="vv_workbook.php">';
print '<input type="text" size="20" value="0014_000010_000001" name="admindb_data">';
print '<br><input type="button" value="Please click here to open the VV workbook" onclick="submit()">';
print '</form>';
print '<HR>';
print 'This goes to the live version ( directory: vv )<br>';
print '<form name="formTwo" method="POST" action="vv_workbookVV.php">';
print '<input type="text" size="20" value="0014_000010_000001" name="admindb_data">';
print '<br><input type="button" value="Please click here to open the VV workbook (directory vv)" onclick="submit()">';
print '</form>';
print '<HR>';

print "<BR>Enter an XML identifier in the same format <br>as the File provided by the Admin Database.";
print "<br>In the example shown below, that would be:&nbsp;&nbsp;&nbsp;&nbsp;<b>0001_000052_000200</b>";
print '<P><img src="workbook/images/PAULS_GO_TO_WORKBOOK_BUTTON.JPG" border="1">';

}else{

print "Sorry, a login is needed to access this page.";
}
?>
</body>
</html>





