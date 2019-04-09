// vv_load_UF_DF_page_01b.js


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
	+'parent.U.document.UF.name_button_id'+sN+'.value=document.DF.name_button_id'+sN+'.value;'
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
	+'document.DF.name_button_id'+sN+'.value=parent.U.document.UF.name_button_id'+sN+'.value;'
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
