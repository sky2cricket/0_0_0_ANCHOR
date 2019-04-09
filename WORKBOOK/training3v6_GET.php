
<html>
<head>
<title>w2009_GET</title>
<?php


$input_str = $_GET[admindb_data];
if ($input_str ==""){
	$input_str="0037_000052_000200";
	}
$input_fullname = $_GET[adb_fullname];

$test_data = $_REQUEST[test];

$test_itemdescr    = $_GET[itemdescr];  


$str_instname     = ereg_replace("\r\n"," ",$_GET[instname]);
$str_instadd      = ereg_replace("\r\n"," ",$_GET[instadd]);
$str_instcity     = ereg_replace("\r\n"," ",$_GET[instcity]);
$str_instcounty   = ereg_replace("\r\n"," ",$_GET[instcounty]);
$str_inststate    = ereg_replace("\r\n"," ",$_GET[inststate]); 
$str_instzip      = ereg_replace("\r\n"," ",$_GET[instzip]);  
$str_collidn      = ereg_replace("\r\n"," ",$_GET[collidn]);
$str_collidndes   = ereg_replace("\r\n"," ",$_GET[collidndes]);
$str_collname     = ereg_replace("\r\n"," ",$_GET[collname]); 
$str_colldes      = ereg_replace("\r\n"," ",$_GET[colldes]);  
$str_collextent   = ereg_replace("\r\n"," ",$_GET[collextent]); 
$str_itempname    = ereg_replace("\r\n"," ",$_GET[itempname]);
$str_itemfbname   = ereg_replace("\r\n"," ",$_GET[itemfbname]);  
$str_itemtitle    = ereg_replace("\r\n"," ",$_GET[itemtitle]);      
$str_itemdate     = ereg_replace("\r\n"," ",$_GET[itemdate]);      
$str_itemdescr    = ereg_replace("\r\n"," ",$_GET[itemdescr]);  
$str_itemtype     = ereg_replace("\r\n"," ",$_GET[itemtype]);     
$str_itemgenre    = ereg_replace("\r\n"," ",$_GET[itemgenre]); 
$str_itemdim      = ereg_replace("\r\n"," ",$_GET[itemdim]);     
$str_itemrights   = ereg_replace("\r\n"," ",$_GET[itemrights]);   
$str_itemlocation = ereg_replace("\r\n"," ",$_GET[itemlocation]);  
$str_admindb_data = ereg_replace("\r\n"," ",$_GET[admindb_data]);   
$str_adb_fullname = ereg_replace("\r\n"," ",$_GET[adb_fullname]);   




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
##print "/* ";
print "var dlc_software_id =\"University of Tennesse Libraries Digital Library Center Workbook Version 1.0\"; \n";
print "var mytest='$input_str';\n";
print "var admindb_data='$input_str';\n";
print "var adb_fullname='$str_adb_fullname';\n";
print "var check_test = '$test_data';\n";

print "//===============12142006=============================\n";


print "var adb_test_itemdescr = \"$test_itemdescr\";\n";  
print $test_itmedescr;
print "\n";
print "var adb_username = 'cricket.deane';";

print "var adb_instname = '$str_instname';\n";
print "var adb_instadd = '$str_instadd';\n";
print "var adb_instcity = '$str_instcity';\n";
print "var adb_instcounty = '$str_instcounty';\n";
print "var adb_inststate = '$str_inststate';\n"; 
print "var adb_instzip = '$str_instzip';\n";  
print "var adb_collidn = '$str_collidn';\n";
print "var adb_collidndes = '$str_collidndes';\n";
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

print "var adb_institution_id = new String (adb_admindb_data); \n";
print "    adb_institution_id = adb_institution_id.substring(0,4); \n";
##print "*/ ";
print "var adb_institution_id = new String('9999'); \n";
print "var adb_project_name  = 'w2009: Draft'; \n";
print "var adb_project_id  = 'w2009'; \n";
print "var adb_background_class = 'backgroundVV';\n";
print "var adb_background_color = '#99aabb';\n";//vol voices color
print "var adb_background_color = '#bbccdd';\n";//w2009 color
print "if ( adb_institution_id == '0012' ) { \n";
print "		adb_project_name = 'Special Collections';  \n";
print "		adb_project_id = 'SC';  \n";
print "		adb_background_color = '#d0d0d0';  \n";
print "		adb_background_class = 'backgroundSC';  \n";
print "		} \n";
print "var adb_today_verbose=new String(Date());\n";
print "var adb_today_numeric=new String();\n";

print "//=====================================================\n";


print "\n";

print "</script>";

?>

</head>

<script language="javascript">
alert("training3v6_GET.php"
	+"\n\nadmindb_data="+admindb_data
	+"\nadb_username="+adb_username
	+"\nadb_fullname="+adb_fullname);
</script>




<!----------------------------
ORIGINAL DIRECTORY: /home/cdeane/public_html/w2009/MODS/training3v6/
ORIGINAL URL: http://diglib.lib.utk.edu/~cdeane/w2009/MODS/training3v6/training3v6_GET.php?admindb_data=0037_000052_000200&adb_fullname=Cricket_w2009&test=test_w2009

<frameset cols="90,*"  border="01" name="P">
	<frame name="T" src="volvoices/v6/page_links.htm" >
	<frameset rows="50,150,15,50,*" >
		<frame name="V" src="volvoices/v6/training3v6_GET.htm" >
		<frame name="U" src="volvoices/v6/page_upper_091130.htm"  >
		<frame name="L" src="volvoices/v6/page_lower.htm" >
		<frame name="I" src="volvoices/v6/RELOAD/mods_examples/mods_all.txt" scrolling="yes">
		<frame name="D" src="volvoices/v6/page_reload_REGEX.htm" scrolling="yes">
	</frameset>
</frameset>

CURRENT DIRECTORY: /home/cdeane/public_html/WORKBOOK/
CURRENT URL: http://diglib.lib.utk.edu/~cdeane/WORKBOOK/training3v6_GET.php?admindb_data=0037_000052_000200&adb_fullname=Cricket_w2009&test=test_w2009
--------------------------->


<frameset cols="90,*"  border="01" name="P">
	<frame name="T" src="../w2009/MODS/training3v6/volvoices/v6/page_links.htm" >
	<frameset rows="50,150,15,50,*" >
		<frame name="V" src="../w2009/MODS/training3v6/volvoices/v6/training3v6_GET.htm" >
		<frame name="U" src="../w2009/MODS/training3v6/volvoices/v6/page_upper_091130.htm"  >
		<frame name="L" src="../w2009/MODS/training3v6/volvoices/v6/page_lower.htm" >
		<frame name="I" src="../w2009/MODS/training3v6/volvoices/v6/RELOAD/mods_examples/mods_all.txt" scrolling="yes">
		<frame name="D" src="../w2009/MODS/training3v6/volvoices/v6/page_reload_REGEX.htm" scrolling="yes">
	</frameset>
</frameset>



</html>



