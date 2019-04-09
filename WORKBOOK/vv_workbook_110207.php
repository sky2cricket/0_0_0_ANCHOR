<html>
<head>
<title>2006 MODS WORKBOOK</title>
<?php


require "admindbconn.php";

if (isset($_POST[instid])) { $instid = $_POST[instid];   }else{ $instid = "not found"; }
if (isset($_POST[collid])) { $collid = $_POST[collid];   }else{ $collid = "not found"; }
if (isset($_POST[itemid])) { $itemid = $_POST[itemid];   }else{ $itemid = "not found"; }

if (isset($_POST[username]))     { $str_username = ereg_replace("\r\n"," ",$_POST[username]); }
if (isset($_POST[fullname]))     { $str_fullname = ereg_replace("\r\n"," ",$_POST[fullname]); }
if (isset($_POST[admindb_data])) { $str_admindb_data = ereg_replace("\r\n"," ",$_POST[admindb_data]); }


/*******************************************************/
$iquery = "SELECT inst.name,inst.address,inst.city,inst.county,";
	$iquery.= "inst.state,inst.zip,";
	$iquery.= "coll.idn,coll.idndes,coll.name,coll.des,coll.extent,";
	$iquery.= "item.pname,item.fbname,item.title,item.creator,item.datecreated,item.descr,";
	$iquery.= "item.type,item.genre,item.genredes,item.dimensions,item.location ";
        $iquery.= " FROM inst,coll,item ";
	$iquery.= " WHERE inst.id='$instid' AND coll.instid='$instid' AND coll.id='$collid' AND item.id='$itemid' AND item.collid='$collid' ";

$post_iquery = $iquery;
$post_iquery = addslashes($post_iquery);

$iresult = mysql_query($iquery, $link) or die ("Error in   query: $iquery. " .  mysql_error());


if (mysql_num_rows($iresult))
 {
	while( list($inam,$iadd,$icit,$icou,$ista,$izip,$cidn,$cids,$cnam,$cdes,$cext,
		    $itpn,$itfb,$itti,$itcr,$itda,$itde,$itty,$itge,$itgdes,$itdi,
		    $itlo)=mysql_fetch_row($iresult))
	{

	$str_instname	  = addslashes(ereg_replace("\r\n"," ",	$inam));
	$str_instadd 	  = addslashes(ereg_replace("\r\n"," ",	$iadd));
	$str_instcity	  = addslashes(ereg_replace("\r\n"," ",	$icit));
	$str_instcounty   = addslashes(ereg_replace("\r\n"," ",	$icou));
	$str_inststate 	  = addslashes(ereg_replace("\r\n"," ",	$ista));
	$str_instzip	  = addslashes(ereg_replace("\r\n"," ",	$izip));
	$str_collidn	  = addslashes(ereg_replace("\r\n"," ",	$cidn));
	$str_collidndes	  = addslashes(ereg_replace("\r\n"," ",	$cids));
	$str_collname 	  = addslashes(ereg_replace("\r\n"," ",	$cnam));
	$str_colldes	  = addslashes(ereg_replace("\r\n"," ",	$cdes));
	$str_collextent	  = addslashes(ereg_replace("\r\n"," ",	$cext));
	$str_itempname	  = addslashes(ereg_replace("\r\n"," ",	$itpn));
	$str_itemfbname	  = addslashes(ereg_replace("\r\n"," ",	$itfb));
	$str_itemtitle	  = addslashes(ereg_replace("\r\n"," ",	$itti));
	$str_itemcreator  = addslashes(ereg_replace("\r\n"," ",	$itcr));
	$str_itemdate	  = addslashes(ereg_replace("\r\n"," ",	$itda));
	$str_itemdescr	  = addslashes(ereg_replace("\r\n"," ",	$itde));
	$str_itemtype	  = addslashes(ereg_replace("\r\n"," ",	$itty));
	$str_itemgenre	  = addslashes(ereg_replace("\r\n"," ",	$itge));
	$str_itemgendes	  = addslashes(ereg_replace("\r\n"," ",	$itgdes));
	$str_itemdim 	  = addslashes(ereg_replace("\r\n"," ",	$itdi));
	$str_itemlocation = addslashes(ereg_replace("\r\n"," ",	$itlo));

	}
}
/*******************************************************/
	
print "<script language='javascript'>\n";
print "var dlc_software_id =\"University of Tennesse Libraries Digital Library Center Workbook Version 1.0\"; \n";
print "var mytest='$input_str';\n";
print "var admindb_data='$str_admindb_data';\n";
#print "alert(\"admindb_data.substr(0,4)=\"+admindb_data.substr(0,4));\n";
print "//===============12142006=============================\n";


print "var post_instid = '$instid';\n";
print "var post_collid = '$collid';\n";
print "var post_itemid = '$itemid';\n";
print "var post_iquery = '$post_iquery';\n";

print "var adb_username = '$str_username';\n";
##print "alert(\"adb_username=\"+adb_username);\n";
print "var adb_fullname = '$str_fullname';\n";
print "var adb_instname = '$str_instname';\n";
print "var adb_instid   = '$post_instid';\n";
print "var adb_instadd  = '$str_instadd';\n";
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
print "var adb_itemgendes = '$str_itemgendes';\n"; 
print "var adb_itemdim = '$str_itemdim';\n";     
print "var adb_itemlocation = '$str_itemlocation';\n";  
print "var adb_admindb_data = '$str_admindb_data';\n";   
print "var adb_itemcreator  = '$str_itemcreator';\n";   

print "var adb_institution_id  =  admindb_data.substr(0,4);\n";
print "var adb_project_name  = 'DLC-MODS';\n";         //was 'Volunteer Voices'; \n";
print "var adb_project_id  = 'SC';\n";                 //was 'VV'; \n";
print "var adb_background_class = 'backgroundSC';\n";  //was 'backgroundVV';\n";
print "var adb_background_color = '#d0d0d0'\n";        // was '#99aabb';\n";
print " if (adb_institution_id.length == 0 ) { adb_institution_id = '0012'; }";
print "if ( adb_institution_id == '0012' ) { \n";
print "		adb_project_name = 'DLC-MODS';  \n";
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

<script language='javascript'>
var client_side_string="pure_javascript_client_side_string";
</script>

</head>



<!--------------------------->
<script language="javascript">

//===================01062010=================
//change to "xcricket" to enable old workbook
if ( parent.adb_username == "cricket" || parent.adb_username == "xcdeane") {
	alert("testw2009 deprecated 101111");
	document.title="w2009 workbook";
	document.write(  '<frameset cols="90,*"  border="01" name="P" >'
        	+'<frame name="T" src="../w2009/MODS/training3v6/volvoices/v6/page_links.htm" >'
        	//+'<frameset rows="50,150,15,50,*" >'
        	//+'<frameset rows="150,15,50,*" >'
        	+'<frameset rows="350,25,50,*" >'
                +'<frame name="U" src="../w2009/MODS/training3v6/volvoices/v6/page_upper_091130.htm"  >'
                +'<frame name="L" src="../w2009/MODS/training3v6/volvoices/v6/page_lower.htm" >'
                +'<frame name="I" src="../w2009/MODS/training3v6/volvoices/v6/RELOAD/mods_examples/mods_all.txt" scrolling="yes">'
                +'<frame name="D" src="../w2009/MODS/training3v6/volvoices/v6/page_reload_REGEX.htm" scrolling="yes">'
        	+'</frameset>'
		+'</frameset>'
		);

	
//===================01062010=================
/////} else if ( parent.adb_username == "paulc" || parent.adb_username == "bdysonsm" ) {
} else if (   parent.adb_username == "cdeane" || parent.adb_username == "paulc" || parent.adb_username == "bdysonsm"  ) {
alert ("Deprecated. Website under repair. chd 101111");
document.write(  '<frameset cols="90,*"  border="01" >'
        	+'<frame name="T" src="volvoices/v2/page_links_101111.htm" >'
        	+'<frameset rows="150,20,*" >'
                +'<frame name="U" src="volvoices/v2/page_upper.htm"  >'
                //+'<frame name="L" src="volvoices/v2/page_lower.htm" >'
                +'<frame name="L" src="volvoices/v2/page_lower_080501.htm" >'
                +'<frame name="D" src="volvoices/v2/page_welcome_debug.htm" scrolling="yes">'
        	+'</frameset>'
		+'</frameset>'
		);
}else{//public access 
//change page_links.htm to page_links_101111.htm to see earlier version
alert("Sorry.  This site is currently under construction.");
document.write(  '<frameset cols="90,*"  border="0" >'
        	+'<frame name="T" src="volvoices/v2/page_links.htm" >'
        	+'<frameset rows="0,0,*" >'
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



