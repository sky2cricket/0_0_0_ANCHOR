<!--
    This code is issued under the GNU General Public License, 
    version 3, 29 June 2007.

    The DLC-MODS Workbook provides a series of web pages to help you 
    generate a MODS metadata record that follows the Digital Library 
    Federation Implementation Guidelines for Shareable MODS Records, 
    as described in the DLF Aquifer Guidlines November 2006.  These 
    Guidelines and the specific MODS Profile are documented on the 
    MODS Profile Page of the DLC-MODS Workbook.

    Copyright (C) 2007 
    Christine Haygood Deane 
    University of Tennessee Libraries
    Digital Library Center
 

    This program is free software: you can redistribute it and/or modify    
    it under the terms of the GNU General Public License as published by    
    the Free Software Foundation, version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see http://www.gnu.org/licenses/
-->

<html>
<head>
<title>WB 1.1</title>
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




$str_itemdescr    = ereg_replace("%5C","\\\\",$str_itemdescr); ## must be first 
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
print "var dlc_software_id =\"University of Tennessee Libraries Digital Library Center MODS Workbook Version 1.1\"; \n";
print "var mytest='$input_str';\n";
print "var admindb_data='$input_str';\n";
print "var check_test = '$test_data';\n";
print "//===============12142006=============================\n";


print "var adb_test_itemdescr = \"$test_itemdescr\";\n";  
print $test_itmedescr;
print "\n";

print "var adb_username = '$str_username';\n";
print "var adb_fullname = '$str_fullname';\n";
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
print "var adb_itemcreator  = '$str_itemcreator';\n";   

print "var adb_institution_id = new String (adb_admindb_data); \n";
print "    adb_institution_id = adb_institution_id.substring(0,4); \n";

print "var adb_project_name  = 'The University of Tennessee Libraries<br>Digital Library Center<br>MODS Workbook 1.1<br> '; \n"; 
print "var adb_project_id  = 'WB'; \n";
print "var adb_background_class = 'backgroundSC';\n";
print "var adb_background_color = '#e0e0e0';\n";

print "//=====================================================\n";


print "</script>";

?>

</head>

<!---------------------------->
<frameset cols="160,*"  border="0" name="P">
	<frame name="T" src="page_links.htm" >
	<frameset rows="0,0,*" >
		<frame name="U" src="page_10_upper.htm"  >
		<frame name="L" src="page_11_lower.htm" >
		<frame name="D" src="page_welcome.htm" scrolling="yes">
	</frameset>
</frameset>
<!--------------------------->


</html>



