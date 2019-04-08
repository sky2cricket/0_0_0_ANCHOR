
<html>
<head>
<title>WORKBOOK</title>
<?php

$input_str = $_POST[admindb_data];

$test_data = $_REQUEST[test];


$test_itemdescr    = $_POST[itemdescr];  


$str_username     = ereg_replace("\r\n"," ",$_POST[username]);
$str_fullname     = ereg_replace("\r\n"," ",$_POST[fullname]);
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
$str_itempname    = ereg_replace("\r\n"," ",$_POST[itempname]);
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
$str_itemcreator  = ereg_replace("\r\n"," ",$_POST[itemcreator]);   




$str_itemdescr    = ereg_replace("%5C","\\\\",$str_itemdescr); ##thank Paul Hethmon... must be first 
$str_itemdescr    = ereg_replace("%26","&",$str_itemdescr);//&#038;//do second  
$str_itemdescr    = ereg_replace("%23","#",$str_itemdescr);//do third  

$str_itemdescr    = ereg_replace("%40","@",$str_itemdescr);
$str_itemdescr    = ereg_replace("%60","`",$str_itemdescr);

$str_itemdescr    = ereg_replace("\+"," ",$str_itemdescr); 
$str_itemdescr    = ereg_replace("%21","!",$str_itemdescr); 
$str_itemdescr    = ereg_replace("%22","\"",$str_itemdescr);//&#034;
$str_itemdescr    = ereg_replace("%24","$",$str_itemdescr); 
$str_itemdescr    = ereg_replace("%25","%",$str_itemdescr); 
$str_itemdescr    = ereg_replace("%27","\'",$str_itemdescr);//&#039;
$str_itemdescr    = ereg_replace("%28","(",$str_itemdescr);
$str_itemdescr    = ereg_replace("%29",")",$str_itemdescr);
$str_itemdescr    = ereg_replace("%2A","*",$str_itemdescr);
$str_itemdescr    = ereg_replace("%2B","\+",$str_itemdescr);
$str_itemdescr    = ereg_replace("%2C",",",$str_itemdescr);
$str_itemdescr    = ereg_replace("%2F","/",$str_itemdescr);

$str_itemdescr    = ereg_replace("%3C","<",$str_itemdescr);
$str_itemdescr    = ereg_replace("%3D","\=",$str_itemdescr);
$str_itemdescr    = ereg_replace("%3E",">",$str_itemdescr);
$str_itemdescr    = ereg_replace("%3F","?",$str_itemdescr);



$str_itemdescr    = ereg_replace("%5B","[",$str_itemdescr);
$str_itemdescr    = ereg_replace("%5D","]",$str_itemdescr);

$str_itemdescr    = ereg_replace("%7B","{",$str_itemdescr);
$str_itemdescr    = ereg_replace("%7C","|",$str_itemdescr);
$str_itemdescr    = ereg_replace("%7D","}",$str_itemdescr);
$str_itemdescr    = ereg_replace("%7E","~",$str_itemdescr);





print "<script language='javascript'>\n";
print "var dlc_software_id =\"University of Tennesse Libraries Digital Library Center Workbook Version 1.0\"; \n";
print "var mytest='$input_str';\n";
print "var admindb_data='$input_str';\n";
print "var check_test = '$test_data';\n";
print "//===============12142006=============================\n";


print "var adb_test_itemdescr = \"$test_itemdescr\";\n";  
print $test_itmedescr;
print "\n";

print "var adb_username = 'demo_username';\n";
print "var adb_fullname = 'demo_fullname';\n";
print "var adb_instname = 'University of Tennessee Special Collections Library';\n";
print "var adb_instadd = 'James D. Hoskins Library, Room 200';\n";
print "var adb_instcity = 'Knoxville';\n";
print "var adb_instcounty = 'Knox';\n";
print "var adb_inststate = 'Tennessee';\n"; 
print "var adb_instzip = '37996-4006';\n";  
print "var adb_collidn = '2933';\n";
print "var adb_collidndes = 'manuscriptNumber';\n";
print "var adb_collname = 'Ephemera Collection';\n"; 
print "var adb_colldes = 'This collection is currently being processed.  It consists of hundreds of ephemeral items relating to many aspects of American and Tennessee history.';\n";  
print "var adb_collextent = 'unknown';\n"; 
print "var adb_itempname = 'VV';\n";
print "var adb_itemfbname = '0012_000051_000200';\n";  
print "var adb_itemtitle = 'Board of Aid to Land Ownership, London. Cumberland Table-Land';\n";      
print "var adb_itemdate = '';\n";      
print "var adb_itemdescr = 'This is a demonstration of how the DCL_MODS Workbook is used.';\n";  
print "var adb_itemtype = 'text';\n";     
print "var adb_itemgenre = '$str_itemgenre';\n"; 
print "var adb_itemdim = '$str_itemdim';\n";     
print "var adb_itemrights = '$str_itemrights';\n";   
print "var adb_itemlocation = '$str_itemlocation';\n";  
print "var adb_admindb_data = '0012_000051_000200';\n";   
print "var adb_itemcreator  = 'The name of the author of this work.';\n";   

print "var adb_institution_id = new String (adb_admindb_data); \n";
print "    adb_institution_id = adb_institution_id.substring(0,4); \n";
print "var adb_collection_id = new String (adb_admindb_data); \n";
print "    adb_collection_id = adb_collection_id.substring(5,11); \n";
print "var adb_item_id = new String (adb_admindb_data); \n";
print "    adb_item_id = adb_item_id.substring(12,18); \n";
print "var adb_XMLBASE = new String(); \n";
print "    adb_XMLBASE = adb_institution_id+'_'+adb_collection_id+'_'+adb_item_id+'_' \n";


print "var adb_project_name  = 'Volunteer Voices'; \n";
print "var adb_project_id  = 'VV'; \n";
print "var adb_background_class = 'backgroundVV';\n";
print "var adb_background_color = '#99aabb';\n";
print " if (adb_institution_id.length == 0 ) { adb_institution_id = '0012'; }";
print "if ( adb_institution_id == '0012' ) { \n";
print "		adb_project_name = 'UT Libraries DLC/MODS';  \n";
print "		adb_project_id = 'SC';  \n";
print "		adb_background_color = '#d0d0d0';  \n";
print "		adb_background_class = 'backgroundSC';  \n";
print "		} \n";

print "//=====================================================\n";

print "Location_01= new String('<frameset cols=\"90,*\"  border=\"0\"> '
                +'<frame name=\"T\" src=\"workbook/vv/page_links.htm\" > '
                +'<frameset rows=\"0,*\" >'
                +'<frame name=\"U\" src=\"workbook/vv/page_upper.htm\"  > '
                +'<frame name=\"D\" src=\"workbook/vv/page_welcome.htm\" scrolling=\"yes\">'
                +'</frameset>'
                +'</frameset>' );" ;

print "\n";
print "Location_02= new String('<frameset cols=\"90,*\"  border=\"0\"> '
                +'<frame name=\"T\" src=\"workbook/ww/page_links.htm\" > '
                +'<frameset rows=\"0,*\" >'
                +'<frame name=\"U\" src=\"workbook/ww/page_upper.htm\"  > '
                +'<frame name=\"D\" src=\"workbook/ww/page_welcome.htm\" scrolling=\"yes\">'
                +'</frameset>'
                +'</frameset>' );" ;

print "\n";
print "Location_03= new String('<frameset cols=\"90,*\"  border=\"0\"> '
                +'<frame name=\"T\" src=\"volvoices/vv/page_links.htm\" > '
                +'<frameset rows=\"0,*\" >'
                +'<frame name=\"U\" src=\"volvoices/vv/page_upper.htm\"  > '
                +'<frame name=\"D\" src=\"volvoices/vv/page_welcome.htm\" scrolling=\"yes\">'
                +'</frameset>'
                +'</frameset>' );" ;

print "\n";
print "Location_04= new String('<frameset cols=\"90,*\"  border=\"0\"> '
                +'<frame name=\"T\" src=\"volvoices/ww/page_links.htm\" > '
                +'<frameset rows=\"0,*\" >'
                +'<frame name=\"U\" src=\"volvoices/ww/page_upper.htm\"  > '
                +'<frame name=\"D\" src=\"volvoices/ww/page_welcome.htm\" scrolling=\"yes\">'
                +'</frameset>'
                +'</frameset>' );" ;


print "\n";

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


<!----------------------------
<frameset cols="90,*"  border="0">
	<frame name="T" src="volvoices/ww/page_links.htm" >
	<frameset rows="0,0,*" >

		<frame name="U" src="volvoices/ww/page_upper.htm"  >
		<frame name="L" src="volvoices/ww/page_lower.htm"  >
		<frame name="D" src="volvoices/ww/page_welcome.htm" scrolling="yes">
	</frameset>
</frameset>
--------------------------->

<!--------------------------->

<frameset cols="90,*"  border="0" >
        <frame name="T" src="volvoices/v2/page_links.htm" >
        <frameset rows="0,0,*" >
                <frame name="U" src="volvoices/v2/page_upper.htm"  >
                <frame name="L" src="volvoices/v2/page_lower.htm" >
                <frame name="D" src="volvoices/v2/page_welcome.htm" scrolling="yes">
        </frameset>
</frameset>


<!----------------------------->


<?php
##print "<script language='javascript'>";
##print "if ( check_test == 'NEW' ) {";
##print "document.write(Location_01); '
##print "} else {";
##print "document.write(Location_04); '
##print "} ";
##print "</script>";
?>

</html>



