<?php

$uname = $_POST[uName];

$pwd  = $_POST[pWord];

?>
<html>
<head>
<title>form programmers login</title>
<link href="../vv_workbook.css" type="text/css" rel="stylesheet">
</head>
<body class="background">
<font face="arial" size="3" ><b>
<p>&nbsp;
<center>
<?php

if ( $pwd =="simon" || $pwd == "melanie" ) {

print " Volunteer Voices Workbook Login2 Page ";
print '<hr>';

print '<hr>';
print '<form name="formOne" method="POST" action="../vv_workbookDEV2.php">';

print '<table cellpadding="2" cellspacing="0" border="1" bgcolor="ddeeff">';
print '<tr><td align="right">project_id</td><td>';
print '<input type="text" size="50" value="VV" name="project_id">';
print '</td><tr><tr><td colspan="2">volunteer voices VV or special collections SP';
print '</td></tr></table><p>';
print '<table cellpadding="2" cellspacing="0" border="1" bgcolor="ffddee">';
print '<tr><td align="right">admindb_data</td><td>';
print '<input type="text" size="50" value="0012_000010_000001" name="admindb_data">';
print '</td></tr><tr><td align="right"> instname </td><td>';
print '<input type="text" size="50" value="instname" name="instname">';
print '</td></tr><tr><td align="right"> instcity </td><td>';
print '<input type="text" size="50" value="instcity" name="instcity">';
print '</td></tr><tr><td align="right"> instcounty</td><td>';
print '<input type="text" size="50" value="instcounty" name="instcounty">';
print '</td></tr><tr><td align="right"> inststate</td><td>';
print '<input type="text" size="50" value="inststate" name="inststate">';
print '</td></tr><tr><td align="right"> instzip</td><td>';
print '<input type="text" size="50" value="instzip" name="instzip">';
print '</td></tr><tr><td align="right"> collidn</td><td>';
print '<input type="text" size="50" value="collidn" name="collidn">';
print '</td></tr><tr><td align="right"> collidndes</td><td>';
print '<input type="text" size="50" value="collidndes" name="collidndes">';
print '</td></tr><tr><td align="right"> collname</td><td>';
print '<input type="text" size="50" value="collname" name="collname">';
print '</td></tr><tr><td align="right"> colldes</td><td>';
print '<input type="text" size="50" value="colldes" name="colldes">';
print '</td></tr><tr><td align="right"> collextent</td><td>';
print '<input type="text" size="50" value="collextent" name="collextent">';
print '</td></tr><tr><td align="right"> itemname</td><td>';
print '<input type="text" size="50" value="itemname" name="itemname">';
print '</td></tr><tr><td align="right"> itemfbname</td><td>';
print '<input type="text" size="50" value="itemfbname" name="itemfbname">';
print '</td></tr><tr><td align="right"> itemtitle</td><td>';
print '<input type="text" size="50" value="itemtitle" name="itemtitle">';
print '</td></tr><tr><td align="right"> itemdate</td><td>';
print '<input type="text" size="50" value="itemdate" name="itemdate">';
print '</td></tr><tr><td align="right"> itemdescr</td><td>';
print '<input type="text" size="50" value="itemdescr" name="itemdescr">';
print '</td></tr><tr><td align="right"> itemtype</td><td>';
print '<input type="text" size="50" value="itemtype" name="itemtype">';
print '</td></tr><tr><td align="right"> itemgenre</td><td>';
print '<input type="text" size="50" value="itemgenre" name="itemgenre">';
print '</td></tr><tr><td align="right"> itemdim</td><td>';
print '<input type="text" size="50" value="itemdim" name="itemdim">';
print '</td></tr><tr><td align="right"> itemrights</td><td>';
print '<input type="text" size="50" value="itemrights" name="itemrights">';
print '</td></tr><tr><td align="right"> itemlocation</td><td>';
print '<input type="text" size="50" value="itemlocation" name="itemlocation">';
print '</td></tr><tr><td align="right"> post_test</td><td>';
print '<input type="text" size="50" value="NEW" name="post_test">';
print '</td></tr><tr><td align="right"> test</td><td>';
print '<input type="text" size="50" value="NEW" name="test">';
print '</td></tr></table>';
print '<br><input type="button" value="DEV v v --  workbook/vv_workbookDEV2.php" onclick="submit_it(0)">';
print '<br><input type="button" value="DEV v v --  workbook/vv/defaultDEMO2.php" onclick="submit_it(1)">';
print '<br><input type="button" value="DEV w w --  workbook/ww/defaultDEMO2.php" onclick="submit_it(2)">';
print '<HR>';
print '<br><input type="button" value="PROD v v  ++ volvoices/vv/defaultDEMO2.php " onclick="submit_it(5)">';
print '<br><input type="button" value="PROD v v  ++ vv_workbookVV.php " onclick="submit_it(3)">';
print '<br><input type="button" value="PROD w w  ++ volvoices/ww/defaultDEMO2.php " onclick="submit_it(6)">';
print '<br><input type="button" value="PROD w w  ++ vv_workbook.php  " 
style="background: #ffffff;"onclick="submit_it(4)">';
print '</form>';
print '<HR>';

print "<BR>Enter an XML identifier in the same format <br>as the File provided by the Admin Database.";
print "<br>In the example shown below, that would be:&nbsp;&nbsp;&nbsp;&nbsp;<b>0001_000052_000200</b>";
print '<P><img src="../images/PAULS_GO_TO_WORKBOOK_BUTTON.JPG" border="1">';

}else{

print "Sorry, a login is needed to access this page.";
}
?>
<hr>Help- need data???
</center>
<li> Go to admin db and logon
<li> Go to Institution - Collection - Item and press Go to workbook button
<li> This takes you to http: // diglib.lib.utk.edu /~cdeane / WORKBOOK / vv_workbook.php
<li> Do view source on top frame
<li> Values are displayed in the txt file
<li> Copy over to input form on this page ( login2.php )
<hr>
<script language="javascript">

function submit_it(num){

if (num=="0") {
	document.forms[0].action="../vv_workbookDEV2.php";
	document.forms[0].submit();
}else if (num == "1") {
	document.forms[0].action="../vv/defaultDEMO2.php";
	document.forms[0].submit();
}else if (num == "2") {
	document.forms[0].action="../ww/defaultDEMO2.php";
	document.forms[0].submit();
}else if (num == "3") {
	document.forms[0].action="../../vv_workbookVV.php";
	document.forms[0].submit();
}else if (num == "4") {
	document.forms[0].action="../../vv_workbook.php";
	document.forms[0].submit();
}else if (num == "5") {
	document.forms[0].action="../../volvoices/vv/defaultDEMO2.php";
	document.forms[0].submit();
}else if (num == "6") {
	document.forms[0].action="../../volvoices/ww/defaultDEMO2.php";
	document.forms[0].submit();

}

}//end function submit_it()
</script>
</body>
</html>





