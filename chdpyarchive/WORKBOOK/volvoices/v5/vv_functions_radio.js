

/////////////functions to support the form page radio buttons

function creator_radio_01_pop(sbox) {//called by creator_radio_01
  
        if ( sbox.value=='N' ) { 
	parent.D.document.forms[0].creator_lastname_01.value = "unknown";
	parent.D.document.forms[0].creator_firstname_01.value = "";
	parent.D.document.forms[0].creator_middlename_01.value = "";
	if (!parent.D.document.forms[0].name_authority_01_radio[0].checked) {
		alert("You may not specify Name Authority or Vital Dates if the creator is unknown.");
	}
	parent.D.document.forms[0].name_authority_01_radio[0].checked = true;//can be specific to _01 here
	parent.D.document.forms[0].name_authority_01.value = "NONE"; //because the primary name type selection only available for _01
	parent.D.document.forms[0].creator_dob_01.value = "";
	parent.D.document.forms[0].creator_dod_01.value = "";
	}

	if ( sbox.value=='A' ) {
	parent.D.document.forms[0].creator_lastname_01.value = "anonymous";
	parent.D.document.forms[0].creator_firstname_01.value = "";
	parent.D.document.forms[0].creator_middlename_01.value = "";
	if (!parent.D.document.forms[0].name_authority_01_radio[0].checked ) {
		alert("You may not specify Name Authority or Vital Dates if the creator is anonymous.");
	}
	parent.D.document.forms[0].name_authority_01_radio[0].checked = true;//can be specific to _01 here
	parent.D.document.forms[0].name_authority_01.value = "NONE"; //because the primary name type selection only available for _01
	parent.D.document.forms[0].creator_dob_01.value = "";
	parent.D.document.forms[0].creator_dod_01.value = "";
	}

	if ( sbox.value == 'C' ) {
	if (  ( parent.D.document.forms[0].creator_lastname_01.value == "unknown")
            ||( parent.D.document.forms[0].creator_lastname_01.value == "anonymous")
	   ) {
		parent.D.document.forms[0].creator_lastname_01.value = "";
	     }
	parent.D.document.forms[0].creator_firstname_01.value = "";
	parent.D.document.forms[0].creator_middlename_01.value = "";
	if (parent.D.document.forms[0].name_authority_01_radio[2].checked ) {//corp allowed LCNAF
		alert("You may not specify NameAuthority=ULAN if the creator is corporate.");
		parent.D.document.forms[0].name_authority_01_radio[0].checked = true;//can be specific to _01 here
		parent.D.document.forms[0].name_authority_01.value = "NONE"; //because the primary name type selection only for _01
	}
	parent.D.document.forms[0].creator_dob_01.value = "";
	parent.D.document.forms[0].creator_dod_01.value = "";
	}


	if ( sbox.value=='Y' ) {
		if (  ( parent.D.document.forms[0].creator_lastname_01.value == "unknown")
            	||( parent.D.document.forms[0].creator_lastname_01.value == "anonymous")
	   	) {
			parent.D.document.forms[0].creator_lastname_01.value = "";
	     	}
	
	}///end if



}///end function creator_radio_01_Pop


function creator_radio_02_pop(sbox) {//called by creator_radio_02

if ( parent.D.document.forms[0].creator_radio_02[0].checked ) {//no second name tags
	alert("No Mods tags for the second name.");
		parent.D.document.forms[0].name_authority_02_radio[0].checked = true;
		parent.D.document.forms[0].name_authority_02_radio[1].checked = false;
		parent.D.document.forms[0].name_authority_02_radio[2].checked = false;
		parent.D.document.forms[0].name_authority_02.value="NONE";
		parent.D.document.forms[0].creator_lastname_02.value = "";
		parent.D.document.forms[0].creator_firstname_02.value = "";
		parent.D.document.forms[0].creator_middlename_02.value = "";
		parent.D.document.forms[0].creator_dob_02.value = "";
		parent.D.document.forms[0].creator_dod_02.value = "";
		parent.D.document.forms[0].creator_description_02.value = "";
		parent.D.document.forms[0].creator_role_02.value = "";
}//end no second name tags


	
if ( parent.D.document.forms[0].creator_radio_02[2].checked ) {//second name not a person

	///REQUIRED parent.D.document.forms[0].creator_lastname_02.value = "";
	     
	parent.D.document.forms[0].creator_firstname_02.value = "";
	parent.D.document.forms[0].creator_middlename_02.value = "";
	parent.D.document.forms[0].creator_dob_02.value = "";
	parent.D.document.forms[0].creator_dod_02.value = "";

	if (parent.D.document.forms[0].name_authority_02_radio[2].checked ) {
		alert("You may not specify NameAuthority=ULAN unless the creator is a person.");
		parent.D.document.forms[0].name_authority_02_radio[0].checked = true;
		parent.D.document.forms[0].name_authority_02_radio[1].checked = false;
		parent.D.document.forms[0].name_authority_02_radio[2].checked = false;
		parent.D.document.forms[0].name_authority_02.value="NONE";
		}
	
}//end second name not a person

if (  parent.D.document.forms[0].creator_radio_02[1].checked) {//yes, a person
	///REQUIRED parent.D.document.forms[0].creator_lastname_02.value = "";
	
}///yes, a person



}///end function creator_radio_02_Pop


function creator_radio_03_pop(sbox) {//called by creator_radio_03

if ( parent.D.document.forms[0].creator_radio_03[0].checked ) {//no third name tags
	alert("No Mods tags for the third name.");
		parent.D.document.forms[0].name_authority_03_radio[0].checked = true;
		parent.D.document.forms[0].name_authority_03_radio[1].checked = false;
		parent.D.document.forms[0].name_authority_03_radio[2].checked = false;
		parent.D.document.forms[0].name_authority_03.value="NONE";
		parent.D.document.forms[0].creator_lastname_03.value = "";
		parent.D.document.forms[0].creator_firstname_03.value = "";
		parent.D.document.forms[0].creator_middlename_03.value = "";
		parent.D.document.forms[0].creator_dob_03.value = "";
		parent.D.document.forms[0].creator_dod_03.value = "";
		parent.D.document.forms[0].creator_description_03.value = "";
		parent.D.document.forms[0].creator_role_03.value = "";
}//end no third name tags


	
if ( parent.D.document.forms[0].creator_radio_03[2].checked ) {//third name not a person

	///REQUIRED parent.D.document.forms[0].creator_lastname_03.value = "";
	     
	parent.D.document.forms[0].creator_firstname_03.value = "";
	parent.D.document.forms[0].creator_middlename_03.value = "";
	parent.D.document.forms[0].creator_dob_03.value = "";
	parent.D.document.forms[0].creator_dod_03.value = "";
	if (parent.D.document.forms[0].name_authority_03_radio[2].checked ) {//corp not allow ULAN
		alert("You may not specify Name Authority=ULAN unless the creator is a person.");
		parent.D.document.forms[0].name_authority_03_radio[0].checked = true;
		parent.D.document.forms[0].name_authority_03_radio[1].checked = false;
		parent.D.document.forms[0].name_authority_03_radio[2].checked = false;
		parent.D.document.forms[0].name_authority_03.value="NONE";
	}
	
}//end third name not a person


}///end function creator_radio_03_Pop



///creator_radio_01[0] : yes
///creator_radio_01[1] : yes, but not a person
///creator_radio_01[2] : unknown
///creator_radio_01[3] : anonymous

///name_authority_01_radio[0] : none
///name_authority_01_radio[1] : LCNAMF
///name_authority_01_radio[2] : ULAN


function name_authority_01_radio_pop(sbox) {//called by name_authority_01_radio
///alert("radioPop1 \n parent.D.document.forms[0].creator_lastname_01.value="+parent.D.document.forms[0].creator_lastname_01.value)

if ( parent.D.document.forms[0].name_authority_01_radio[1].checked ) { //LCNAF
	if (    parent.D.document.forms[0].creator_radio_01[2].checked //unknown
	    ||  parent.D.document.forms[0].creator_radio_01[3].checked //anonymous 
	){
		alert("You may not specify NameAuthority=LCNAF for unknown or anonymous.");
		parent.D.document.forms[0].name_authority_01_radio[0].checked = true;
		parent.D.document.forms[0].name_authority_01_radio[1].checked = false;
		parent.D.document.forms[0].name_authority_01_radio[2].checked = false;
		parent.D.document.forms[0].name_authority_01.value="NONE";
	}
}//end LCNAF filter

if ( parent.D.document.forms[0].name_authority_01_radio[2].checked ) { //ULAN
	if (    parent.D.document.forms[0].creator_radio_01[1].checked //corporate
	    ||  parent.D.document.forms[0].creator_radio_01[2].checked //unknown
	    ||  parent.D.document.forms[0].creator_radio_01[3].checked //anonymous 
	){
		alert("You may not specify NameAuthority=ULAN for corporate, unknown or anonymous.");
		parent.D.document.forms[0].name_authority_01_radio[0].checked = true;
		parent.D.document.forms[0].name_authority_01_radio[1].checked = false;
		parent.D.document.forms[0].name_authority_01_radio[2].checked = false;
		parent.D.document.forms[0].name_authority_01.value="NONE";
	}
}//end ULAN filter

if (parent.D.document.forms[0].name_authority_01_radio[0].checked == true ) {
	parent.D.document.forms[0].name_authority_01.value="NONE";
}else if (parent.D.document.forms[0].name_authority_01_radio[1].checked == true 	) {
	parent.D.document.forms[0].name_authority_01.value="LCNAF";

} else { 
	parent.D.document.forms[0].name_authority_01.value="ULAN";
}
		
}///end function



///creator_radio_02[0] : no mods tags for second name
///creator_radio_02[1] : yes
///creator_radio_02[2] : yes, but not a person

///name_authority_02_radio[0] : none
///name_authority_02_radio[1] : LCNAF
///name_authority_02_radio[2] : ULAN


function name_authority_02_radio_pop(sbox) {//called by name_authority_02_radio
///alert("radioPop1 \n parent.D.document.forms[0].creator_lastname_02.value="+parent.D.document.forms[0].creator_lastname_02.value)
     
if ( parent.D.document.forms[0].name_authority_02_radio[2].checked ) { //ULAN
	if (    parent.D.document.forms[0].creator_radio_02[2].checked //corporate
	){
		alert("You may not specify NameAuthority=ULAN for corporate.");
		parent.D.document.forms[0].name_authority_02_radio[0].checked = true;
		parent.D.document.forms[0].name_authority_02_radio[1].checked = false;
		parent.D.document.forms[0].name_authority_02_radio[2].checked = false;
		parent.D.document.forms[0].name_authority_02.value="NONE";
	}
}//end ULAN filter

if (parent.D.document.forms[0].name_authority_02_radio[0].checked == true ) {
	parent.D.document.forms[0].name_authority_02.value="NONE";
}else if (parent.D.document.forms[0].name_authority_02_radio[1].checked == true 	) {
	parent.D.document.forms[0].name_authority_02.value="LCNAF";

} else { 
	parent.D.document.forms[0].name_authority_02.value="ULAN";
}
		
}///end function


///creator_radio_03[0] : no mods tags for third name
///creator_radio_03[1] : yes
///creator_radio_03[2] : yes, but not a person

function name_authority_03_radio_pop(sbox) {//called by name_authority_03_radio
///alert("radioPop1 \n parent.D.document.forms[0].creator_lastname_03.value="+parent.D.document.forms[0].creator_lastname_03.value)
     

if ( parent.D.document.forms[0].name_authority_03_radio[2].checked ) { //ULAN
	if (    parent.D.document.forms[0].creator_radio_03[2].checked //corporate
	){
		alert("You may not specify NameAuthority=ULAN for corporate.");
		parent.D.document.forms[0].name_authority_03_radio[0].checked = true;
		parent.D.document.forms[0].name_authority_03_radio[1].checked = false;
		parent.D.document.forms[0].name_authority_03_radio[2].checked = false;
		parent.D.document.forms[0].name_authority_03.value="NONE";
	}
}//end ULAN filter

if (parent.D.document.forms[0].name_authority_03_radio[0].checked == true ) {
	parent.D.document.forms[0].name_authority_03.value="NONE";
}else if (parent.D.document.forms[0].name_authority_03_radio[1].checked == true 	) {
	parent.D.document.forms[0].name_authority_03.value="LCNAF";

} else { 
	parent.D.document.forms[0].name_authority_03.value="ULAN";
}
		
}///end function




function date_created_radio_pop(sbox) {

if ( parent.D.document.forms[0].date_created_radio[0].checked ) {
	alert("You have chosen to use the Creation Date field.\n"
	+"Please enter a value for Creation Date.\n"
	+"Values already entered in Creation Date/Range will be discarded.\n"
	);
	parent.D.document.forms[0].date_created_begin.value = "";
	parent.D.document.forms[0].date_created_beginQ.value = "";
	parent.D.document.forms[0].date_created_end.value = "";
	parent.D.document.forms[0].date_created_endQ.value = "";
}else if ( parent.D.document.forms[0].date_created_radio[1].checked ) {
	alert("You have chosen to use the Creation Date/Range fields.\n"
	+"Please enter a value for either Creation Date Begin Range or Creation Date End Range or both.\n"
	+"Values already entered in Date Created will be discarded.\n"
	);
	parent.D.document.forms[0].date_created.value = "";
	parent.D.document.forms[0].date_createdQ.value = "";
}

}//end function




function mods_genre_radio_pop() {

if ( parent.D.document.forms[0].mods_genre_radio[0].checked ) {
	parent.D.document.forms[0].mods_genre_authority.value = "aat";
} else if ( parent.D.document.forms[0].mods_genre_radio[1].checked ) {
	parent.D.document.forms[0].mods_genre_authority.value  = "nmc";
}else {
	if ( parent.D.document.forms[0].mods_genre_authority.value != "marcgt" ) {
	parent.D.document.forms[0].mods_genre_authority.value  = "marcgt";
	parent.D.document.forms[0].mods_genre.value = "";
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
 "University of Tennessee Special Collections Library"
,"Tennessee State Library and Archives"
,"Memphis Public Library and Information Center"
,""
);

if ( sbox.value=='EAST' ) {
        parent.D.document.forms[0].record_content_source.value = dig_ctr_addr[0];
}else if ( sbox.value=='MIDDLE' ) {
        parent.D.document.forms[0].record_content_source.value = dig_ctr_addr[1];
}else if ( sbox.value=='WEST' ) {
        parent.D.document.forms[0].record_content_source.value = dig_ctr_addr[2];
}else if ( sbox.value=='OTHER' ) {
        parent.D.document.forms[0].record_content_source.value = dig_ctr_addr[3];
}


return;

}//end function




//this is not used but save for reference
function radioPop2(sbox) {//called by name_authority_XX_radio
// take care of parent.D.document.forms[0].name_authority_01, parent.D.document.forms[0].name_authority_02, parent.D.document.forms[0].name_authority_03
var strName=sbox.name;
    strName= strName.replace(/_radio/,'');
//alert("strName="+strName);

var strElement="parent.D.document.forms[0]."+strName+".value ";
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
