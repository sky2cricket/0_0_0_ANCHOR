

/////////////functions to support the form page radio buttons

function creator_radio_01_pop(sbox) {//called by creator_radio_01
  
        if ( sbox.value=='N' ) { 
	document.forms[0].creator_lastname_01.value = "unknown";
	document.forms[0].creator_firstname_01.value = "";
	document.forms[0].creator_middlename_01.value = "";
	////document.forms[0].creator_title_01.value = "";
	if (!document.forms[0].name_authority_01_radio[0].checked) {
		alert("You may not specify a Name Authority unless the creator is a person.");
	}
	document.forms[0].name_authority_01_radio[0].checked = true;//can be specific to _01 here
	document.forms[0].name_authority_01.value = "NONE"; //because the primary name type selection only available for _01
	}

	if ( sbox.value=='A' ) {
	document.forms[0].creator_lastname_01.value = "anonymous";
	document.forms[0].creator_firstname_01.value = "";
	document.forms[0].creator_middlename_01.value = "";
	////document.forms[0].creator_title_01.value = "";
	if (!document.forms[0].name_authority_01_radio[0].checked ) {
		alert("You may not specify a Name Authority unless the creator is a person.");
	}
	document.forms[0].name_authority_01_radio[0].checked = true;//can be specific to _01 here
	document.forms[0].name_authority_01.value = "NONE"; //because the primary name type selection only available for _01
	}

	if ( sbox.value == 'C' ) {
	if (  ( document.forms[0].creator_lastname_01.value == "unknown")
            ||( document.forms[0].creator_lastname_01.value == "anonymous")
	   ) {
		document.forms[0].creator_lastname_01.value = "";
	     }
	document.forms[0].creator_firstname_01.value = "";
	document.forms[0].creator_middlename_01.value = "";
	////document.forms[0].creator_title_01.value = "";
	if (!document.forms[0].name_authority_01_radio[0].checked ) {
		alert("You may not specify a Name Authority unless the creator is a person.");
	}
	document.forms[0].name_authority_01_radio[0].checked = true;//can be specific to _01 here
	document.forms[0].name_authority_01.value = "NONE"; //because the primary name type selection only available for _01
	}


	if ( sbox.value=='Y' ) {
		if (  ( document.forms[0].creator_lastname_01.value == "unknown")
            	||( document.forms[0].creator_lastname_01.value == "anonymous")
	   	) {
			document.forms[0].creator_lastname_01.value = "";
	     	}
	
	}///end if



}///end function creator_radio_01_Pop


function creator_radio_02_pop(sbox) {//called by creator_radio_02

if ( document.forms[0].creator_radio_02[0].checked ) {//no second name tags
	alert("No Mods tags for the second name.");
		document.forms[0].name_authority_02_radio[0].checked = true;
		document.forms[0].name_authority_02_radio[1].checked = false;
		document.forms[0].name_authority_02_radio[2].checked = false;
		document.forms[0].name_authority_02.value="NONE";
		document.forms[0].creator_lastname_02.value = "";
		document.forms[0].creator_firstname_02.value = "";
		document.forms[0].creator_middlename_02.value = "";
		////document.forms[0].creator_title_02.value = "";
		document.forms[0].creator_dob_02.value = "";
		document.forms[0].creator_dod_02.value = "";
		document.forms[0].creator_description_02.value = "";
		document.forms[0].creator_role_02.value = "";
}//end no third name tags


	
if ( document.forms[0].creator_radio_02[2].checked ) {//second name not a person

	///REQUIRED document.forms[0].creator_lastname_02.value = "";
	     
	document.forms[0].creator_firstname_02.value = "";
	document.forms[0].creator_middlename_02.value = "";
	////document.forms[0].creator_title_02.value = "";
	if (!document.forms[0].name_authority_02_radio[0].checked ) {
		alert("You may not specify a Name Authority unless the creator is a person.");
		document.forms[0].name_authority_02_radio[0].checked = true;
		document.forms[0].name_authority_02_radio[1].checked = false;
		document.forms[0].name_authority_02_radio[2].checked = false;
		document.forms[0].name_authority_02.value="NONE";
	}
	
}//end third name not a person

if (  document.forms[0].creator_radio_02[1].checked) {//yes, a person
	///REQUIRED document.forms[0].creator_lastname_02.value = "";
	
}///yes, a person



}///end function creator_radio_02_Pop


function creator_radio_03_pop(sbox) {//called by creator_radio_03

if ( document.forms[0].creator_radio_03[0].checked ) {//no third name tags
	alert("No Mods tags for the third name.");
		document.forms[0].name_authority_03_radio[0].checked = true;
		document.forms[0].name_authority_03_radio[1].checked = false;
		document.forms[0].name_authority_03_radio[2].checked = false;
		document.forms[0].name_authority_03.value="NONE";
		document.forms[0].creator_lastname_03.value = "";
		document.forms[0].creator_firstname_03.value = "";
		document.forms[0].creator_middlename_03.value = "";
		////document.forms[0].creator_title_03.value = "";
		document.forms[0].creator_dob_03.value = "";
		document.forms[0].creator_dod_03.value = "";
		document.forms[0].creator_description_03.value = "";
		document.forms[0].creator_role_03.value = "";
}//end no third name tags


	
if ( document.forms[0].creator_radio_03[2].checked ) {//third name not a person

	///REQUIRED document.forms[0].creator_lastname_03.value = "";
	     
	document.forms[0].creator_firstname_03.value = "";
	document.forms[0].creator_middlename_03.value = "";
	////document.forms[0].creator_title_03.value = "";
	if (!document.forms[0].name_authority_03_radio[0].checked ) {
		alert("You may not specify a Name Authority unless the creator is a person.");
		document.forms[0].name_authority_03_radio[0].checked = true;
		document.forms[0].name_authority_03_radio[1].checked = false;
		document.forms[0].name_authority_03_radio[2].checked = false;
		document.forms[0].name_authority_03.value="NONE";
	}
	
}//end third name not a person

if (  document.forms[0].creator_radio_03[1].checked) {//yes, a person
	///REQUIRED document.forms[0].creator_lastname_03.value = "";
	
}///yes, a person



}///end function creator_radio_03_Pop



///creator_radio_01[0] : yes
///creator_radio_01[1] : yes, but not a person
///creator_radio_01[2] : unknown
///creator_radio_01[3] : anonymous




function name_authority_01_radio_pop(sbox) {//called by name_authority_01_radio
///alert("radioPop1 \n document.forms[0].creator_lastname_01.value="+document.forms[0].creator_lastname_01.value)
     

if ( !document.forms[0].creator_radio_01[0].checked) {
	if ( !document.forms[0].name_authority_01_radio[0].checked ) {
		alert("You may not specify a Name Authority unless the creator is a person.");
		document.forms[0].name_authority_01_radio[0].checked = true;
		document.forms[0].name_authority_01_radio[1].checked = false;
		document.forms[0].name_authority_01_radio[2].checked = false;
		document.forms[0].name_authority_01.value="NONE";
		}
	}

if (document.forms[0].name_authority_01_radio[0].checked == true ) {
	document.forms[0].name_authority_01.value="NONE";
}else if (document.forms[0].name_authority_01_radio[1].checked == true 	) {
	document.forms[0].name_authority_01.value="LCNAF";

} else { 
	document.forms[0].name_authority_01.value="ULAN";
}
		
}///end function



///creator_radio_02[0] : no mods tags for second name
///creator_radio_02[1] : yes
///creator_radio_02[2] : yes, but not a person


function name_authority_02_radio_pop(sbox) {//called by name_authority_02_radio
///alert("radioPop1 \n document.forms[0].creator_lastname_02.value="+document.forms[0].creator_lastname_02.value)
     

if ( !document.forms[0].creator_radio_02[1].checked) {
	if ( !document.forms[0].name_authority_02_radio[0].checked ) {
		alert("You may not specify a Name Authority unless the creator is a person.");
		document.forms[0].name_authority_02_radio[0].checked = true;
		document.forms[0].name_authority_02_radio[1].checked = false;
		document.forms[0].name_authority_02_radio[2].checked = false;
		document.forms[0].name_authority_02.value="NONE";
		}
	}

if (document.forms[0].name_authority_02_radio[0].checked == true ) {
	document.forms[0].name_authority_02.value="NONE";
}else if (document.forms[0].name_authority_02_radio[1].checked == true 	) {
	document.forms[0].name_authority_02.value="LCNAF";

} else { 
	document.forms[0].name_authority_02.value="ULAN";
}
		
}///end function


///creator_radio_03[0] : no mods tags for third name
///creator_radio_03[1] : yes
///creator_radio_03[2] : yes, but not a person

function name_authority_03_radio_pop(sbox) {//called by name_authority_03_radio
///alert("radioPop1 \n document.forms[0].creator_lastname_03.value="+document.forms[0].creator_lastname_03.value)
     

if ( !document.forms[0].creator_radio_03[1].checked) {
	if ( !document.forms[0].name_authority_03_radio[0].checked ) {
		alert("You may not specify a Name Authority unless the creator is a person.");
		document.forms[0].name_authority_03_radio[0].checked = true;
		document.forms[0].name_authority_03_radio[1].checked = false;
		document.forms[0].name_authority_03_radio[2].checked = false;
		document.forms[0].name_authority_03.value="NONE";
		}
	}

if (document.forms[0].name_authority_03_radio[0].checked == true ) {
	document.forms[0].name_authority_03.value="NONE";
}else if (document.forms[0].name_authority_03_radio[1].checked == true 	) {
	document.forms[0].name_authority_03.value="LCNAF";

} else { 
	document.forms[0].name_authority_03.value="ULAN";
}
		
}///end function




function date_created_radio_pop(sbox) {

if ( document.forms[0].date_created_radio[0].checked ) {
	alert("You have chosen to use the Creation Date field.\n"
	+"Please enter a value for Creation Date.\n"
	+"Values already entered in Creation Date/Range will be discarded.\n"
	);
	document.forms[0].date_created_begin.value = "";
	document.forms[0].date_created_beginQ.value = "";
	document.forms[0].date_created_end.value = "";
	document.forms[0].date_created_endQ.value = "";
}else if ( document.forms[0].date_created_radio[1].checked ) {
	alert("You have chosen to use the Creation Date/Range fields.\n"
	+"Please enter a value for either Creation Date Begin Range or Creation Date End Range or both.\n"
	+"Values already entered in Date Created will be discarded.\n"
	);
	document.forms[0].date_created.value = "";
	document.forms[0].date_createdQ.value = "";
}

}//end function




function mods_genre_radio_pop() {

if ( document.forms[0].mods_genre_radio[0].checked ) {
	document.forms[0].mods_genre_authority.value = "aat";
} else if ( document.forms[0].mods_genre_radio[1].checked ) {
	document.forms[0].mods_genre_authority.value  = "nmc";
}else {
	if ( document.forms[0].mods_genre_authority.value != "marcgt" ) {
	document.forms[0].mods_genre_authority.value  = "marcgt";
	document.forms[0].mods_genre.value = "";
	}//else no action
}

}//end function



function new_xmlfile_radio_pop(sbox) {

var s = sbox.value;

if ( s == "Y") {
	alert("You have chosen to enter a new xml file."
		+"\n\nPlease select a Directory Full Path from C:\\Scan." );
}else {
	alert("You have chosen to rework a previously submitted xml file."
		+"\n\nPlease select a Directory Full Path from C:\\Reworked." );

}
return;
}

function record_content_source_radio_pop(sbox) {

var dig_ctr_addr = new Array(
 "University of Tennessee Special Collections Library (Knoxville)"
,"Tennessee State Library and Archives (Nashville)"
,"Memphis Public Library and Information Center (Memphis)"
,""
);

if ( sbox.value=='EAST' ) { 
	document.forms[0].record_content_source.value = dig_ctr_addr[0];
}else if ( sbox.value=='MIDDLE' ) {
	document.forms[0].record_content_source.value = dig_ctr_addr[1];
}else if ( sbox.value=='WEST' ) {
	document.forms[0].record_content_source.value = dig_ctr_addr[2];
}else if ( sbox.value=='OTHER' ) {
	document.forms[0].record_content_source.value = dig_ctr_addr[3];
}


return;

}//end function



//this is not used but save for reference
function radioPop2(sbox) {//called by name_authority_XX_radio
// take care of document.forms[0].name_authority_01, document.forms[0].name_authority_02, document.forms[0].name_authority_03
var strName=sbox.name;
    strName= strName.replace(/_radio/,'');
//alert("strName="+strName);

var strElement="document.forms[0]."+strName+".value ";
var strElementN= strElement +"= \"NONE\" ;";
var strElementL= strElement +"= \"LCNAF\" ;";
var strElementU= strElement +"= \"ULAN\" ;";


        if ( sbox.value=='N' ) {
	eval( strElementN );
	}
        if ( sbox.value=='L' ) {
	eval ( strElementL );
	}
        if ( sbox.value=='U' ) {
	eval( strElementU );
	}

}//end radio_pop2
