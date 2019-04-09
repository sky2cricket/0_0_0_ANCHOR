//vv_load_UF_DF_strings.js

function get_page_begin_b_load_UF_strings(strN){
var street_instaddr = new String(parent.adb_instadd);
    street_instaddr = street_instaddr.replace(parent.adb_instname,'');
var sN = new String(strN);
var s0 = new String(" ");
	s0 = s0
	+'parent.U.document.UF.VVcomment_03c.value=parent.adb_fullname;'
	//page_01b
	+'parent.U.document.UF.creator_lastname_01.value=parent.adb_itemcreator;'
	+'parent.U.document.UF.title.value=parent.adb_itemtitle;'
	+'parent.U.document.UF.creator_exist_01.value="yes";'
	+'parent.U.document.UF.creator_lastname_01.value=parent.adb_itemcreator;'

	//page_06
	+'parent.U.document.UF.VVcomment_03i.value=parent.adb_instname;'
	+'parent.U.document.UF.physical_location_repository.value=parent.adb_instname;'
	+'parent.U.document.UF.physical_location_street_addr.value=parent.adb_instadd;'
	+'parent.U.document.UF.physical_location_city.value=parent.adb_instcity;'
	+'parent.U.document.UF.physical_location_state.value=parent.adb_inststate;'
	+'parent.U.document.UF.physical_location_county_display.value=parent.adb_instcounty;'
	+'parent.U.document.UF.physical_location_county.value=parent.L.getCountyCode(parent.L.aVVcounty,parent.U.document.UF.physical_location_county_display.value);'
	+'parent.U.document.UF.collection_id_number.value=parent.adb_collidn;'
	+'parent.U.document.UF.collection_id_name.value=parent.adb_collname;'

	;
/*
DEFINITIONS FROM vv_workbook.php

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
print "var adb_project_name  = 'w2009 Beta'; \n"; //was 'Volunteer Voices'
print "var adb_project_id  = 'w2009'; \n"; //was 'VV'
print "var adb_background_class = 'backgroundSC';\n";//was 'backgroundVV'
print "var adb_background_color = '#d0d0d0';\n";     //was '#99aabb'
print " if (adb_institution_id.length == 0 ) { adb_institution_id = '0012'; }";
print "if ( adb_institution_id == '0012' ) { \n";
print "		adb_project_name = 'DLC-MODS';  \n";
print "		adb_project_id = 'SC';  \n";
print "		adb_background_color = '#d0d0d0';  \n";
print "		adb_background_class = 'backgroundSC';  \n";
print "		} \n";


*/
return(s0);
}//end function get_page_begin_b_load_UF_strings(strN)

//call with eval(get_page_01_load_UF_strings("_01"));
function get_page_01_load_UF_strings(strN){
var sN = new String(strN);
var s0 = new String(" ");
if (sN=="_01"){
	s0 = s0
	+'parent.U.document.UF.title.value=document.DF.title.value;';
	}
    s0 = s0	
	+'parent.U.document.UF.creator_exist'+sN+'.value=document.DF.creator_exist'+sN+'.value;'
	+'parent.U.document.UF.name_type'+sN+'.value = document.DF.name_type'+sN+'.value;'
	+'parent.U.document.UF.name_authority'+sN+'.value = document.DF.name_authority'+sN+'.value;'
	+'parent.U.document.UF.namepart_family'+sN+'.value = document.DF.namepart_family'+sN+'.value;'
	+'parent.U.document.UF.creator_lastname'+sN+'.value = document.DF.creator_lastname'+sN+'.value;'
	+'parent.U.document.UF.namepart_given'+sN+'.value = document.DF.namepart_given'+sN+'.value;'
	+'parent.U.document.UF.creator_givenname'+sN+'.value = document.DF.creator_givenname'+sN+'.value;'
	+'parent.U.document.UF.namepart_date'+sN+'.value = document.DF.namepart_date'+sN+'.value;'
	+'parent.U.document.UF.creator_fulldatestr'+sN+'.value = document.DF.creator_fulldatestr'+sN+'.value;'
	+'parent.U.document.UF.creator_description'+sN+'.value = document.DF.creator_description'+sN+'.value;'
	+'parent.U.document.UF.creator_rolea_auth'+sN+'.value = document.DF.creator_rolea_auth'+sN+'.value;'
	+'parent.U.document.UF.creator_rolea'+sN+'.value = document.DF.creator_rolea'+sN+'.value;'
	+'parent.U.document.UF.creator_roleb_auth'+sN+'.value = document.DF.creator_roleb_auth'+sN+'.value;'
	+'parent.U.document.UF.creator_roleb'+sN+'.value = document.DF.creator_roleb'+sN+'.value;'
	+'parent.U.document.UF.creator_rolec_auth'+sN+'.value = document.DF.creator_rolec_auth'+sN+'.value;'
	+'parent.U.document.UF.creator_rolec'+sN+'.value = document.DF.creator_rolec'+sN+'.value;';
return(s0);
}//end function get_page_01_load_UF_strings(strN)

//call with eval(get_page_01_load_DF_strings("_01"));
function get_page_01_load_DF_strings(strN){
var sN = new String(strN);
var s0 = new String(" ");
if (sN=="_01"){
	//load title
	if ( parent.U.document.UF.title.value == "" ) {
        	document.DF.title.value = parent.adb_itemtitle;
		}else{
        	document.DF.title.value = parent.U.document.UF.title.value ;
		}
	s0 = s0 + 'document.DF.title.value=parent.U.document.UF.title.value;';
	}
    s0 = s0
	+'document.DF.creator_exist'+sN+'.value=parent.U.document.UF.creator_exist'+sN+'.value ;'
	+'document.DF.name_type'+sN+'.value = parent.U.document.UF.name_type'+sN+'.value ;'
	+'document.DF.name_authority'+sN+'.value = parent.U.document.UF.name_authority'+sN+'.value ;'
	+'document.DF.namepart_family'+sN+'.value = parent.U.document.UF.namepart_family'+sN+'.value ;'
	+'document.DF.creator_lastname'+sN+'.value = parent.U.document.UF.creator_lastname'+sN+'.value ;'
	+'document.DF.namepart_given'+sN+'.value = parent.U.document.UF.namepart_given'+sN+'.value ;'
	+'document.DF.creator_givenname'+sN+'.value = parent.U.document.UF.creator_givenname'+sN+'.value ;'
	+'document.DF.namepart_date'+sN+'.value = parent.U.document.UF.namepart_date'+sN+'.value ;'
	+'document.DF.creator_fulldatestr'+sN+'.value = parent.U.document.UF.creator_fulldatestr'+sN+'.value ;'
	+'document.DF.creator_description'+sN+'.value = parent.U.document.UF.creator_description'+sN+'.value ;'
	+'document.DF.creator_rolea_auth'+sN+'.value = parent.U.document.UF.creator_rolea_auth'+sN+'.value ;'
	+'document.DF.creator_rolea'+sN+'.value = parent.U.document.UF.creator_rolea'+sN+'.value ;'
	+'document.DF.creator_roleb_auth'+sN+'.value = parent.U.document.UF.creator_roleb_auth'+sN+'.value ;'
	+'document.DF.creator_roleb'+sN+'.value = parent.U.document.UF.creator_roleb'+sN+'.value ;'
	+'document.DF.creator_rolec_auth'+sN+'.value = parent.U.document.UF.creator_rolec_auth'+sN+'.value ;'
	+'document.DF.creator_rolec'+sN+'.value = parent.U.document.UF.creator_rolec'+sN+'.value ;'
return(s0);
}//end function get_page_01_load_DF_strings(strN)
