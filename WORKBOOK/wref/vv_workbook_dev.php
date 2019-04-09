
<html>
<head>
<title>WORKBOOK</title>
<?php

$input_str = $_POST[admindb_data];

$test_data = $_REQUEST[test];


$str_instname = $_POST[instname];
$str_instadd = $_POST[instadd];
$str_instcity = $_POST[instcity];
$str_instcounty = $_POST[instcounty];
$str_inststate = $_POST[inststate]; 
$str_instzip = $_POST[instzip];  
$str_collidn = $_POST[collidn];
$str_collname = $_POST[collname]; 
$str_colldes = $_POST[colldes];  
$str_collextent = $_POST[collextent]; 
$str_itempname = $_POST[itempname];
$str_itemfbname = $_POST[itemfbname];  
$str_itemtitle = $_POST[itemtitle];      
$str_itemdate = $_POST[itemdate];      
$str_itemdescr = $_POST[itemdescr];  
$str_itemtype = $_POST[itemtype];     
$str_itemgenre = $_POST[itemgenre]; 
$str_itemdim = $_POST[itemdim];     
$str_itemrights = $_POST[itemrights];   
$str_itemlocation = $_POST[itemlocation];  
$str_admindb_data = $_POST[admindb_data];   



print "<script language='javascript'>\n";
print "var dlc_software_id =\"University of Tennesse Libraries Digital Library Center Workbook Version 1.0\"; \n";
print "var mytest='$input_str';\n";
print "var admindb_data='$input_str';\n";
print "var check_test = '$test_data';\n";
print "//===============12142006=============================\n";


print "var adb_instname = '$str_instname';\n";
print "var adb_instadd = '$str_instadd';\n";
print "var adb_instcity = '$str_instcity';\n";
print "var adb_instcounty = '$str_instcounty';\n";
print "var adb_inststate = '$str_inststate';\n"; 
print "var adb_instzip = '$str_instzip';\n";  
print "var adb_collidn = '$str_collidn';\n";
print "var adb_collname = '$str_collname';\n"; 
print "var adb_colldes = '$str_colldes';\n";  
print "var adb_collextent = '$str_collextent';\n"; 
print "var adb_itempname = '$str_itempname';\n";
print "var adb_itemfbname = '$str_itemfbname';\n";  
print "var adb_itemtitle = '$str_itemtitle';\n";      
print "var adb_itemdate = '$str_itemdate';\n";      
print "var adb_itemdescr = '$str_itemdescr';\n";  
print "var adb_itemtype = '$str_itemtype';\n";     
print "var adb_itemgenre = '$str_itemgenre';\n"; 
print "var adb_itemdim = '$str_itemdim';\n";     
print "var adb_itemrights = '$str_itemrights';\n";   
print "var adb_itemlocation = '$str_itemlocation';\n";  
print "var adb_admindb_data = '$str_admindb_data';\n";   

print "//=====================================================\n";

print "</script>";

?>

</head>
<!----------------------------

<frameset cols="90,*"  border="0">
	<frame name="T" src="workbook/vv/page_links.htm" >
	<frameset rows="0,*" >

		<frame name="U" src="workbook/vv/page_upper.htm"  >
		<frame name="D" src="workbook/vv/page_welcome.htm" scrolling="yes">
	</frameset>
</frameset>
--------------------------->


<!----------------------------
<frameset cols="90,*"  border="0">
	<frame name="T" src="workbook/ww/page_links.htm" >
	<frameset rows="0,*" >

		<frame name="U" src="workbook/ww/page_upper.htm"  >
		<frame name="D" src="workbook/ww/page_welcome.htm" scrolling="yes">
	</frameset>
</frameset>

--------------------------->


<!----------------------------
<frameset cols="90,*"  border="0">
	<frame name="T" src="volvoices/vv/page_links.htm" >
	<frameset rows="0,*" >

		<frame name="U" src="volvoices/vv/page_upper.htm"  >
		<frame name="D" src="volvoices/vv/page_welcome.htm" scrolling="yes">
	</frameset>
</frameset>
--------------------------->


<!---------------------------->
<frameset cols="90,*"  border="0">
	<frame name="T" src="volvoices/ww/page_links.htm" >
	<frameset rows="0,*" >

		<frame name="U" src="volvoices/ww/page_upper.htm"  >
		<frame name="D" src="volvoices/ww/page_welcome.htm" scrolling="yes">
	</frameset>
</frameset>
<!--------------------------->



</html>



