

<html>
<head>
<title>workbook</title>
<?php

###copied from /workbook/ww/defaultDEMO2.php
$input_str = $_POST[admindb_data];

$test_data = $_REQUEST[test];
###$test_data = $_POST[test];
###$test_data = 'NEW';

$str_project_id   = ereg_replace("\r\n"," ",$_POST[project_id]);
$str_instname     = ereg_replace("\r\n"," ",$_POST[instname]);
$str_instadd      = ereg_replace("\r\n"," ",$_POST[instadd]);
$str_instcity     = ereg_replace("\r\n"," ",$_POST[instcity]);
$str_instcounty   = ereg_replace("\r\n"," ",$_POST[instcounty]);
$str_inststate    = ereg_replace("\r\n"," ",$_POST[inststate]);
$str_instzip      = ereg_replace("\r\n"," ",$_POST[instzip]);
$str_collidn      = ereg_replace("\r\n"," ",$_POST[collidn]);
$str_collidndes   = ereg_replace("\r\n"," ",$_POST[collidndes]);
$str_collname     = ereg_replace("\r\n"," ",$_POST[collname]);
$str_colldes      = ereg_replace("\r\n"," ",$_POST[colldes]);
$str_collextent   = ereg_replace("\r\n"," ",$_POST[collextent]);
$str_itemname     = ereg_replace("\r\n"," ",$_POST[itemname]);
$str_itemfbname   = ereg_replace("\r\n"," ",$_POST[itemfbname]);
$str_itemtitle    = ereg_replace("\r\n"," ",$_POST[itemtitle]);
$str_itemdate     = ereg_replace("\r\n"," ",$_POST[itemdate]);
$str_itemdescr    = ereg_replace("\r\n"," ",$_POST[itemdescr]);
$str_itemtype     = ereg_replace("\r\n"," ",$_POST[itemtype]);
$str_itemgenre    = ereg_replace("\r\n"," ",$_POST[itemgenre]);
$str_itemdim      = ereg_replace("\r\n"," ",$_POST[itemdim]);
$str_itemrights   = ereg_replace("\r\n"," ",$_POST[itemrights]);
$str_itemlocation = ereg_replace("\r\n"," ",$_POST[itemlocation]);
$str_admindb_data = ereg_replace("\r\n"," ",$_POST[admindb_data]);
##$str_post_test    = ereg_replace("\r\n"," ",$_POST[post_test]);



print "<script language='javascript'>\n";
print "var mytest='$input_str';\n";
print "var admindb_data='$input_str';\n";
print "var check_test = '$test_data';\n";
print "//===============12142006=============================\n";


print "var adb_project_id    = '$str_project_id';\n";
print "var adb_instname      = '$str_instname';\n";
print "var adb_instadd       = '$str_instadd';\n";
print "var adb_instcity      = '$str_instcity';\n";
print "var adb_instcounty    = '$str_instcounty';\n";
print "var adb_inststate     = '$str_inststate';\n";
print "var adb_instzip       = '$str_instzip';\n";
print "var adb_collidn       = '$str_collidn';\n";
print "var adb_collidndes    = '$str_collidndes';\n";
print "var adb_collname      = '$str_collname';\n";
print "var adb_colldes       = '$str_colldes';\n";
print "var adb_collextent    = '$str_collextent';\n";
print "var adb_itemname      = '$str_itemname';\n";
print "var adb_itemfbname    = '$str_itemfbname';\n";
print "var adb_itemtitle     = '$str_itemtitle';\n";
print "var adb_itemdate      = '$str_itemdate';\n";
print "var adb_itemdescr     = '$str_itemdescr';\n";
print "var adb_itemtype      = '$str_itemtype';\n"; 
print "var adb_itemgenre     = '$str_itemgenre';\n";
print "var adb_itemdim       = '$str_itemdim';\n";   
print "var adb_itemrights    = '$str_itemrights';\n";  
print "var adb_itemlocation  = '$str_itemlocation';\n";
print "var adb_admindb_data  = '$str_admindb_data';\n";

print "var adb_institution_id = new String (adb_admindb_data);\n";
print "    adb_institution_id = adb_institution_id.substring(0,4);\n";

##print "var adb_post_test   = '$str_post_test';\n;
print "var adb_project_name  = 'Volunteer Voices';\n";
print "var adb_background_class = 'backgroundVV';\n";
print "var adb_background_color = '#99aabb';\n";
print "if ( adb_institution_id == '0012' ) { \n";
print "		adb_project_name = 'Special Collections';  \n";
print "		adb_project_id = 'SC';  \n";
print "		adb_background_color = '#d0d0d0';  \n";
print "		adb_background_class = 'backgroundSC';  \n";
print "		} \n";


print "//=====================================================\n";

print "\n";

print "</script>";

?>

<script language="javascript">
///var admindb_data = "0014_000010_000001";

/*
function getBackgroundClass() {
	var BC = new String();
	if ( adb_institution_id == "0012" ) {
		BC = "backgroundSC";
	}else{
		BC = "backgroundVV";
	}
return(BC);
}//end function getBackgroundClass
*/

</script>
</head>
<frameset cols="90,*"  border="1" scrolling="yes">
	<frame name="T" src="page_links.htm" >
	<frameset rows="10,100,*" >
		<frame name="U" src="page_upper.htm" scrolling="yes" >
		<frame name="H" src="page_links_00b.htm">
		<frame name="D" src="page_welcome.htm" scrolling="yes">
	</frameset>
</frameset>
</html>
