
<html>
<head>
<title>WORKBOOK</title>
<?php


$test_data = 'aaaaa_test_data';


$test_itemdescr    = $_POST[itemdescr];  
$test_itemtitle    = $_POST[itemtitle];

$str_username     = $_POST[username];
$str_fullname     = $_POST[fullname];
$str_itemtitle    = $_POST[itemtitle];
/*========================================*/
$str_instname     = $_POST[instname];
$str_instid	  = $_POST[instid];
$str_instadd      = $_POST[instadd];
$str_instcity     = $_POST[instcity];
$str_instcounty   = $_POST[instcounty];
$str_inststate    = $_POST[inststate];
$str_instzip      = $_POST[instzip];
$str_collidn      = $_POST[collidn];
$str_collidndes   = $_POST[collidndes];
$str_collname     = $_POST[collname];
$str_colldes      = $_POST[colldes];
$str_collextent   = $_POST[collextent];
$str_itempname    = $_POST[itempname];
$str_itemfbname   = $_POST[itemfbname];
#####$str_itemtitle    = $_POST[itemtitle];
$str_itemdate     = $_POST[itemdate];
$str_itemdescr    = $_POST[itemdescr];
$str_itemtype     = $_POST[itemtype];
$str_itemgenre    = $_POST[itemgenre];
$str_itemdim      = $_POST[itemdim];
$str_itemrights   = $_POST[itemrights];
$str_itemlocation = $_POST[itemlocation];
$str_admindb_data = $_POST[admindb_data];
$str_itemcreator  = $_POST[itemcreator];
$str_itemdescr    = $_POST[itemdescr]; 
/*========================*/

/*==================================================================
$str_username     = ereg_replace("\r\n"," ",$_POST[username]);
$str_fullname     = ereg_replace("\r\n"," ",$_POST[fullname]);
$str_instname     = ereg_replace("\r\n"," ",$_POST[instname]);
$str_instid       = ereg_replace("\r\n"," ",$_POST[instid]);
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

#$str_itemtitle    = ereg_replace("\\\'","&apos;",$_POST[itemtitle]);      
#$str_itemtitle    = ereg_replace("\"","&quot;",$_POST[itemtitle]);      
#$str_itemtitle = addslashes($str_itemtitle);
#$str_itemtitle = htmlentities($str_itemtitle,ENT_QUOTES);

$str_itemdate     = ereg_replace("\r\n"," ",$_POST[itemdate]);      
$str_itemdescr    = ereg_replace("\r\n"," ",$_POST[itemdescr]);  
$str_itemtype     = ereg_replace("\r\n"," ",$_POST[itemtype]);     
$str_itemgenre    = ereg_replace("\r\n"," ",$_POST[itemgenre]); 
$str_itemdim      = ereg_replace("\r\n"," ",$_POST[itemdim]);     
$str_itemrights   = ereg_replace("\r\n"," ",$_POST[itemrights]);   
$str_itemlocation = ereg_replace("\r\n"," ",$_POST[itemlocation]);  
$str_admindb_data = ereg_replace("\r\n"," ",$_POST[admindb_data]);   
$str_itemcreator  = ereg_replace("\r\n"," ",$_POST[itemcreator]);   
$str_itemdescr    = ereg_replace("\r\n"," ",$_POST[itemdescr]);   




$str_itemdescr    = ereg_replace("%5C","\\\\",$str_itemdescr); ##must be first 
$str_itemdescr    = ereg_replace("%26","&",$str_itemdescr);//&#038;//do second  
$str_itemdescr    = ereg_replace("%23","#",$str_itemdescr);//do third  

$str_itemdescr    = ereg_replace("%0D"," ",$str_itemdescr);//ascii 13 carriage return
$str_itemdescr    = ereg_replace("%0A"," ",$str_itemdescr);//ascii 10 linefeed
#***************************
$str_itemdescr    = ereg_replace("%E2%80%A6","...",$str_itemdescr);//msElipse
$str_itemdescr    = ereg_replace("%E2%80%99","`",$str_itemdescr);//msApos

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

$str_itemdescr    = ereg_replace("%3A",":",$str_itemdescr);
$str_itemdescr    = ereg_replace("%3B",";",$str_itemdescr);
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
#**********************
=================================================================*/
?>

<? php


print "<script language='javascript'>\n";
print "var dlc_software_id ='University of Tennesse Libraries Digital Library Center Workbook Version 1.0'; \n";

print "var mytest='abcdefg';\n";
##print "var admindb_data='$input_str';\n";
print "var check_test = '$test_data';\n";
print "//===============12142006=============================\n";


##print "var adb_test_itemdescr = \"$test_itemdescr\";\n";  
##print $test_itemdescr;
print $test_itemtitle;
print "\n";

print "//===============080610===============================\n";
print 'var adb_username = ',$str_username,';\n';
print $str_username;
print '\n';
print "var adb_fullname = '$str_fullname';\n";
print "var adb_itemtitle = '$str_itemtitle';\n";      
/*
print "var adb_instname = '$str_instname';\n";
print "var adb_instid   = '$str_instid';\n";
print "var adb_instadd  = '$str_instadd';\n";
print "var adb_instcity = '$str_instcity';\n";
print "var adb_instcounty = '$str_instcounty';\n";
print "var adb_inststate  = '$str_inststate';\n"; 
print "var adb_instzip    = '$str_instzip';\n";  
print "var adb_collidn    = '$str_collidn';\n";
print "var adb_collidndes = '$str_collidndes';\n";
print "var adb_collname = '$str_collname';\n"; 
print "var adb_colldes = '$str_colldes';\n";  
print "var adb_collextent = '$str_collextent';\n"; 
print "var adb_itempname = '$str_itempname';\n";
print "var adb_itemfbname = '$str_itemfbname';\n";  
#print "var adb_itemtitle = '$str_itemtitle';\n";      

print "var adb_itemdate = '$str_itemdate';\n";      
print "//=====================================================\n";
print "var adb_itemdescr = '$str_itemdescr';\n";  
print "//=====================================================\n";
print "var adb_itemtype = '$str_itemtype';\n";     
print "var adb_itemgenre = '$str_itemgenre';\n"; 
print "var adb_itemdim = '$str_itemdim';\n";     
print "var adb_itemrights = '$str_itemrights';\n";   
print "var adb_itemlocation = '$str_itemlocation';\n";  
print "var adb_admindb_data = '$str_admindb_data';\n";   
print "var admindb_data = 'test admindb_data';\n";   
print "var adb_itemcreator  = '$str_itemcreator';\n";   

print "var adb_institution_id  =  '$str_instid';\n";
*/

print "var adb_project_name  = 'Volunteer Voices'; \n";
print "var adb_project_id  = 'VV'; \n";
print "var adb_background_class = 'backgroundVV';\n";
print "var adb_background_color = '#99aabb';\n";
/*
#print " if (adb_institution_id.length == 0 ) { adb_institution_id = '0012'; }\n";
print "if ( adb_institution_id == '0012' ) { \n";
print "		adb_project_name = 'DLC-MODS';  \n";
print "		adb_project_id = 'SC';  \n";
print "		adb_background_color = '#d0d0d0';  \n";
print "		adb_background_class = 'backgroundSC';  \n";
print "		} \n";

*/

print "//=====================================================\n";

#print "var adb_itemdescr = '$str_itemdescr';\n";  
#print "var adb_itemtitle = '$str_itemtitle';\n";      

print "\n";

print "</script>\n\n\n";




?>
<script language='javascript'>
var client_side_string="javascript_client_side_string";
</script>

</head>



<!--------------------------->
<script language="javascript">

if ( parent.adb_username == "cricket" || parent.adb_username == "paulc"  ) {
document.write(  '<frameset cols="90,*"  border="01" >'
        	+'<frame name="T" src="volvoices/v2/page_links.htm" >'
        	+'<frameset rows="150,20,*" >'
                +'<frame name="U" src="volvoices/v2/page_upper.htm"  >'
                //+'<frame name="L" src="volvoices/v2/page_lower.htm" >'
                +'<frame name="L" src="volvoices/v2/page_lower_080501.htm" >'
                +'<frame name="D" src="volvoices/v2/page_welcome.htm" scrolling="yes">'
        	+'</frameset>'
		+'</frameset>'
		);
}else{
document.write(  '<frameset cols="90,*"  border="0" >'
        	+'<frame name="T" src="volvoices/v2/page_links.htm" >'
        	+'<frameset rows="150,40,*" >'
                +'<frame name="U" src="volvoices/v2/page_upper.htm"  >'
                +'<frame name="L" src="volvoices/v2/page_lower.htm" >'
                +'<frame name="D" src="volvoices/v2/page_welcome.htm" scrolling="yes">'
        	+'</frameset>'
		+'</frameset>'
		);
}
</script>

<!----------------------------->



</html>



