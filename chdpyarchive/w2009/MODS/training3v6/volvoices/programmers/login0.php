<?php

$uname = $_POST[uName];

$pwd  = $_POST[pWord];

?>
<html>
<head>
<title>programmers login</title>
<link href="../vv_workbook.css" type="text/css" rel="stylesheet">
</head>
<body class="background">
<font face="arial" size="3" ><b>
<p>&nbsp;
<center>
<?php

if ( $pwd =="chd" || $pwd == "pc" || $pwd == "jo" ) {

print " Volunteer Voices Workbook Login Page ";
print '<hr>';
print "<br>Simple Links to Demo Version which allows display of hidden upper frame: ";
print '<br>Working directory vv:  <a  href="../vv/defaultDEMO.htm" target="_blank">vv/defaultDEMO.htm</a> '; 
print '<br>Live directory ww: <a  href="../ww/defaultDEMO.htm" target="_blank">ww/defaultDEMO.htm</a>'; 

print '<hr>';
print 'This goes to the live version ( directory: ww )<br>';
print '<form name="formOne" method="POST" action="../../vv_workbook.php">';
print '<input type="text" size="20" value="0014_000010_000001" name="admindb_data">';
print '<br><input type="button" value="Please click here to open the VV workbook (directory ww)" onclick="submit()">';
print '</form>';
print '<HR>';

print "<BR>Enter an XML identifier in the same format <br>as the File provided by the Admin Database.";
print "<br>In the example shown below, that would be:&nbsp;&nbsp;&nbsp;&nbsp;<b>0001_000052_000200</b>";
print '<P><img src="../images/PAULS_GO_TO_WORKBOOK_BUTTON.JPG" border="1">';

}else{

print "Sorry, a login is needed to access this page.";
}
?>
</body>
</html>





