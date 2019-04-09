<html>
<head>
<title>WORKBOOK</title>
<?php

require "admindbconn.php";

#from vv_workbook_080612.php, vv_workbook_080613.php

if (isset($_POST[instid])) { $post_instid = $_POST[instid]; }else{ $post_instid	= "not found"; }
if (isset($_POST[collid])) { $post_collid = $_POST[collid]; }else{ $post_collid	= "not found"; }
if (isset($_POST[itemid])) { $post_itemid = $_POST[itemid]; }else{ $post_itemid	= "not found"; }



$str_username     = ereg_replace("\r\n"," ",$_POST[username]);
$str_fullname     = ereg_replace("\r\n"," ",$_POST[fullname]);
$str_admindb_data = ereg_replace("\r\n"," ",$_POST[admindb_data]);


$instid    = $post_instid;
$collid    = $post_collid;
$itemid    = $post_itemid;



/*error log
 tail /var/log/httpd/phperror_log
 tail -f /var/log/httpd/phperror_log
 tail -100 /var/log/httpd/phperror_log
*/

/*mapping
dbname		list	php/javascript 
inst.idn	$?
inst.name	$inam	$str_instname
inst.address	$iadd	$str_instadd 
inst.city	$icit	$str_instcity
inst.county	$icou	$str_instcounty 
inst.state	$ista	$str_inststate 
inst.zip	$izip	$str_instzip
coll.idn	$cidn	$str_collidn
coll.idndes	$cids	$str_collidndes
coll.name	$cnam	$str_collname 
coll.des	$cdes	$str_colldes
coll.extent	$cext	$str_collextent
item.pname	$itpn	$str_itempname
item.fbname	$itfb	$str_itemfbname
item.title	$itti	$str_itemtitle
item.creator	$itcr	$str_itemcreator
item.datecreated$itda	$str_itemdate	
item.descr	$itde	$str_itemdescr
item.type	$itty	$str_itemtype
item.genre	$itge	$str_itemgenre
item.genredes	$itgdes	$str_itemgendes
item.dimensions	$itdi	$str_itemdim 
item.location	$itlo	$str_itemlocation 
*/


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
	while( list($inam,$iadd,$icit,$icou,$ista,$izip,$cidn,$cids,$cnam,$cdes,$cext,$itpn,$itfb,$itti,$itcr,$itda,$itde,$itty,$itge,$itgdes,$itdi,$itlo)=mysql_fetch_row($iresult))
	{

	/*
	$str_instname	 = $inam;   #typed
	$str_instadd 	 = $iadd;   #typed
	$str_instcity	 = $icit;   #typed
	$str_instcounty  = $icou;   #dropdown menu
	$str_inststate 	 = $ista;   #typed
	$str_instzip	 = $izip;   #typed
	$str_collidn	 = $cidn;   #calculated by admin db
	$str_collidndes	 = $cids;   #typed
	$str_collname 	 = $cnam;   #typed
	$str_colldes   	 = $cdes;   #typed
	$str_collextent	 = $cext;   #typed
	$str_itempname	 = $itpn;   #project name, dropdown menu
	$str_itemfbname	 = $itfb;   #file base name, auto-generated
	#$str_itemtitle	 = "itemtitle well behaved";   #typed
	$str_itemtitle	 = $itti;   #typed
		$str_itemtitle = addslashes($str_itemtitle);
		$str_itemtitle = html_entity_decode($str_itemtitle);
		#$str_itemtitle = addslashes($str_itemtitle);#need this line for 0037_000050_000202 
	$str_itemcreator = $itcr;   #typed
	$str_itemdate	 = $itda;   #typed
	#$str_itemdescr	 = "itemdescr well behaved";   #Description typed
	#$str_itemdescr	 = addslashes($itde);   #Description typed

	#$str_itemdescr	 = $itde;   #Description typed
	#$str_itemdescr    = ereg_replace("\r\n"," ",$str_itemdescr);  
	#$str_itemdescr = addslashes($str_itemdescr);#need for 0037_000050_000200

	$str_itemdescr    = addslashes(ereg_replace("\r\n"," ",$itde));  
		#$str_itemdescr = html_entity_decode($str_itemdescr,ENT_QUOTES, UTF-8);
		#$str_itemdescr = htmlentities($str_itemdescr,ENT_QUOTES, UTF-8);
	$str_itemtype	 = $itty;   #dropdown menu
	$str_itemgenre	 = $itge;   #typed
	$str_itemgendes	 = $itgdes; #typed
	$str_itemdim 	 = $itdi;   #typed
	$str_itemlocation= $itlo;   #typed
	*/


	$str_instname	= addslashes(ereg_replace("\r\n"," ",	$inam));
	$str_instadd 	= addslashes(ereg_replace("\r\n"," ",	$iadd));
	$str_instcity	= addslashes(ereg_replace("\r\n"," ",	$icit));
	$str_instcounty = addslashes(ereg_replace("\r\n"," ",	$icou));
	$str_inststate 	= addslashes(ereg_replace("\r\n"," ",	$ista));
	$str_instzip	= addslashes(ereg_replace("\r\n"," ",	$izip));
	$str_collidn	= addslashes(ereg_replace("\r\n"," ",	$cidn));
	$str_collidndes	= addslashes(ereg_replace("\r\n"," ",	$cids));
	$str_collname 	= addslashes(ereg_replace("\r\n"," ",	$cnam));
	$str_colldes	= addslashes(ereg_replace("\r\n"," ",	$cdes));
	$str_collextent	= addslashes(ereg_replace("\r\n"," ",	$cext));
	$str_itempname	= addslashes(ereg_replace("\r\n"," ",	$itpn));
	$str_itemfbname	= addslashes(ereg_replace("\r\n"," ",	$itfb));
	$str_itemtitle	= addslashes(ereg_replace("\r\n"," ",	$itti));
	$str_itemcreator= addslashes(ereg_replace("\r\n"," ",	$itcr));
	$str_itemdate	= addslashes(ereg_replace("\r\n"," ",	$itda));
	$str_itemdescr	= addslashes(ereg_replace("\r\n"," ",	$itde));
	$str_itemtype	= addslashes(ereg_replace("\r\n"," ",	$itty));
	$str_itemgenre	= addslashes(ereg_replace("\r\n"," ",	$itge));
	$str_itemgendes	= addslashes(ereg_replace("\r\n"," ",	$itgdes));
	$str_itemdim 	= addslashes(ereg_replace("\r\n"," ",	$itdi));
	$str_itemlocation= addslashes(ereg_replace("\r\n"," ",	$itlo));

	}
}
/*******************************************************/
	


$input_str = $_POST[admindb_data];

#$test_data = $_REQUEST[test]; #debug only


#$str_username     = ereg_replace("\r\n"," ",$_POST[username]);
#$str_fullname     = ereg_replace("\r\n"," ",$_POST[fullname]);

/*
$str_instname     = ereg_replace("\r\n"," ",$_POST[instname]);
	$str_instname = addslashes($str_instname);
$str_instid	  = $_POST[instid];
$str_instadd      = ereg_replace("\r\n"," ",$_POST[instadd]);
	$str_instadd = addslashes($str_instadd);
$str_instcity     = ereg_replace("\r\n"," ",$_POST[instcity]);
$str_instcounty   = ereg_replace("\r\n"," ",$_POST[instcounty]);
$str_inststate    = ereg_replace("\r\n"," ",$_POST[inststate]); 
$str_instzip      = ereg_replace("\r\n"," ",$_POST[instzip]);  
$str_collidn      = ereg_replace("\r\n"," ",$_POST[collidn]);
$str_collidndes   = ereg_replace("\r\n"," ",$_POST[collidndes]);
$str_collname     = ereg_replace("\r\n"," ",$_POST[collname]); 
	$str_collname = addslashes($str_collname);
$str_colldes      = ereg_replace("\r\n"," ",$_POST[colldes]);  
	$str_colldes = addslashes($str_colldes);
$str_collextent   = ereg_replace("\r\n"," ",$_POST[collextent]); 
	$str_collextent = addslashes($str_collext);
$str_itempname    = ereg_replace("\r\n"," ",$_POST[itempname]);
$str_itemfbname   = ereg_replace("\r\n"," ",$_POST[itemfbname]);  
$str_itemtitle    = ereg_replace("\r\n"," ",$_POST[itemtitle]);      
	$str_itemtitle = addslashes($str_itemtitle);#need this line for 0037_000050_000202 
$str_itemdate     = ereg_replace("\r\n"," ",$_POST[itemdate]);      
	$str_itemdescr    = ereg_replace("\r\n"," ",$_POST[itemdescr]);  
	$str_itemdescr = addslashes($str_itemdescr);#need for 0037_000050_000200
	$str_itemdescr = html_entity_decode($str_itemdescr);
$str_itemtype     = ereg_replace("\r\n"," ",$_POST[itemtype]);     
$str_itemgenre    = ereg_replace("\r\n"," ",$_POST[itemgenre]); 
	$str_itemgenre = addslashes($str_itemgenre);
$str_itemdim      = ereg_replace("\r\n"," ",$_POST[itemdim]);     
	$str_itemdim = addslashes($str_itemdim);
$str_itemrights   = ereg_replace("\r\n"," ",$_POST[itemrights]);   
$str_itemlocation = ereg_replace("\r\n"," ",$_POST[itemlocation]);  
	$str_itemlocation = addslashes($str_itemlocation);
$str_admindb_data = ereg_replace("\r\n"," ",$_POST[admindb_data]);   
$str_itemcreator  = ereg_replace("\r\n"," ",$_POST[itemcreator]);   
	$str_itemcreator = addslashes($str_itemcreator);
*/



print "<script language='javascript'>\n";
#print "var test_error= new String(\"error\")\n";
print "var dlc_software_id =\"University of Tennesse Libraries Digital Library Center Workbook Version 1.0\"; \n";
print "var mytest='$input_str';\n";
print "var admindb_data='$input_str';\n";
#print "var check_test = '$test_data';\n";
print "//===============12142006=============================\n";


print "var post_instid = '$post_instid';\n";
print "var post_collid = '$post_collid';\n";
print "var post_itemid = '$post_itemid';\n";
print "var post_iquery = '$post_iquery';\n";

print "var adb_username = '$str_username';\n";
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

print "var adb_institution_id  =  '$post_instid';\n";
print "var adb_project_name  = 'Volunteer Voices'; \n";
#print "test_error=adb_project_name\n";
print "var adb_project_id  = 'VV'; \n";
print "var adb_background_class = 'backgroundVV';\n";
print "var adb_background_color = '#99aabb';\n";
print " if (adb_institution_id.length == 0 ) { adb_institution_id = '0012'; }";
print "if ( adb_institution_id == '0012' ) { \n";
print "		adb_project_name = 'DLC-MODS';  \n";
print "		adb_project_id = 'SC';  \n";
print "		adb_background_color = '#d0d0d0';  \n";
print "		adb_background_class = 'backgroundSC';  \n";
print "		} \n";

print "//=====================================================\n";


print "\n";

print "</script>";

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
        	+'<frameset rows="150,100,*" >'
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



