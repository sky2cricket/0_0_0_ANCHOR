
//usage onblur="checkRequired('title','Title')" 
function checkRequired(form_var,alert_name) {


var FORM_VAR = new String (form_var);
var ALERT_NAME = new String(alert_name);

var FORM_VAR_VALUE = new String();
    FORM_VAR_VALUE = eval("document.forms[0]."+FORM_VAR+".value");
    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);

    FORM_VAR_VALUE = FORM_VAR_VALUE.replace(/ /gi,'');

    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);


var this_focus = new String();
    this_focus = "document.forms[0]."+FORM_VAR+".focus();";


/////alert("this_focus="+this_focus );

///if ( eval(value_length) == 0 ) {
    if (FORM_VAR_VALUE.length == 0 ) {
	alert("You must enter a value for "+alert_name+".");
	eval(this_focus);
	return false;
	}else {
	return true;
	}

}//end function


function checkRequired_for_one_of_two(form_var,alert_name,form_var2, alert_name2) {


var FORM_VAR = new String (form_var);
var ALERT_NAME = new String(alert_name);

var FORM_VAR2 = new String (form_var2);
var ALERT_NAME2 = new String(alert_name2);


var FORM_VAR_VALUE = new String();
    FORM_VAR_VALUE = eval("document.forms[0]."+FORM_VAR+".value");
    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);

    FORM_VAR_VALUE = FORM_VAR_VALUE.replace(/ /gi,'');

    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);


var this_focus = new String();
    this_focus = "document.forms[0]."+FORM_VAR+".focus();";


var FORM_VAR2_VALUE = new String();
    FORM_VAR2_VALUE = eval("document.forms[0]."+FORM_VAR2+".value");
    //alert(FORM_VAR2_VALUE+"\nFORM_VAR2_VALUE.length="+FORM_VAR2_VALUE.length);

    FORM_VAR2_VALUE  = FORM_VAR2_VALUE.replace(/ /gi,'');

 



/////alert("this_focus="+this_focus );


    if (FORM_VAR_VALUE.length == 0 && FORM_VAR2_VALUE.length == 0 ) {
	alert("You must enter a value for one of the two fields: \n\n"+alert_name+"\n\nor " +alert_name2+ ".");
	eval(this_focus);
	return false;
	}else {
	return true;
	}

}//end function


function checkRequired_for_two_of_two(form_var,alert_name,form_var2, alert_name2) {


var FORM_VAR = new String (form_var);
var ALERT_NAME = new String(alert_name);

var FORM_VAR2 = new String (form_var2);
var ALERT_NAME2 = new String(alert_name2);


var FORM_VAR_VALUE = new String();
    FORM_VAR_VALUE = eval("document.forms[0]."+FORM_VAR+".value");
    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);

    FORM_VAR_VALUE = FORM_VAR_VALUE.replace(/ /gi,'');

    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);


var this_focus = new String();
    this_focus = "document.forms[0]."+FORM_VAR+".focus();";


var FORM_VAR2_VALUE = new String();
    FORM_VAR2_VALUE = eval("document.forms[0]."+FORM_VAR2+".value");
    //alert(FORM_VAR2_VALUE+"\nFORM_VAR2_VALUE.length="+FORM_VAR2_VALUE.length);

    FORM_VAR2_VALUE  = FORM_VAR2_VALUE.replace(/ /gi,'');

 



/////alert("this_focus="+this_focus );


    if (FORM_VAR_VALUE.length == 0 || FORM_VAR2_VALUE.length == 0 ) {
	alert("You must enter a value for both of the two fields: \n\n"+alert_name+"\n\nand " +alert_name2+ ".");
	eval(this_focus);
	return false;
	}else {
	return true;
	}

}//end function

//for CollectionIdNumber, CollectionIdNumberType
function checkOneDependsOnTwo(form_var,alert_name,form_var2, alert_name2) {

var FORM_VAR = new String (form_var);
var ALERT_NAME = new String(alert_name);
var FORM_VAR2 = new String (form_var2);
var ALERT_NAME2 = new String(alert_name2);


var this_focus = new String();
    this_focus = "document.forms[0]."+FORM_VAR2+".focus();";

var FORM_VAR_VALUE = new String();
    FORM_VAR_VALUE = eval("document.forms[0]."+FORM_VAR+".value");
    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);

if (FORM_VAR_VALUE == ""){ return true; }//no collection_id_number, escape here


var FORM_VAR2_VALUE = new String();
    FORM_VAR2_VALUE = eval("document.forms[0]."+FORM_VAR2+".value");
    //alert(FORM_VAR2_VALUE+"\nFORM_VAR2_VALUE.length="+FORM_VAR2_VALUE.length);

if (FORM_VAR2_VALUE =="none" ) {
	alert("You have entered a value for : \n\n"+alert_name+"\n\nYou must also select " +alert_name2+ ".");
	eval(this_focus);
	return false;
	}else {
	return true;
	}

}//end function checkOneDependsOnTwo

function checkAllRequiredElements_Page_01() {
parent.U.document.UF.validate_page_01.value="0";//no caching from previous validation

if (!checkRequired("title","Title") ) return false;
if (!checkRequired("creator_lastname_01","Last Name/Corporate Name for Primary") ) return false;
////if (!checkRequired("creator_description_01", "Description for Primary Name" ) ) return false;///desc not req
if (!checkRequired("creator_role_01","Role for Primary") ) return false;
if (!document.forms[0].creator_radio_02[0].checked ) {
	if (!checkRequired("creator_lastname_02","Last Name/Corporate Name for Second Name\nbecause you checked YES for Second Name Type") ) return false;
	}
if (!document.forms[0].creator_radio_03[0].checked ) {
	if (!checkRequired("creator_lastname_03","Last Name/Corporate Name for Third Name\nbecause you checked YES for Third Name Type") ) return false;
	}

//alert ("Page 01 validate true"); 
parent.U.document.UF.validate_page_01.value="1";
return true;
}


function checkAllRequiredElements_Page_02() {
parent.U.document.UF.validate_page_02.value="0";//no caching from previous validation

//check em
////alert("checkAllRequiredElements_Page_02()");

if  (!checkRequired_for_one_of_two("date_created","Creation Date","date_created_begin","Creation Date Begin Range")  
    )    return false;

///if  (!checkRequired_for_two_of_two("date_created","Creation Date","date_created_begin","Creation Date Begin Range")  
    ///)    return false;

if ( !document.forms[0].publisher_name_radio[1].checked ) {///publisher_name publisher_address
	if (!checkRequired("publisher_name","Name of Publisher\n\nbecause you selected YES for Previously Published") ) return false;
	if (!checkRequired("publisher_address","Address of Publisher\n\nbecause you selected YES for Previously Published") ) return false;
	if (!checkRequired("date_issued","Publication Year") ) return false;
	}

///if (!checkRequired("place_of_origin","Place of Origin") ) return false;

parent.U.document.UF.validate_page_02.value="1";
return true;
}

function checkAllRequiredElements_Page_03() {
parent.U.document.UF.validate_page_03.value="0";//no caching from previous validation

//check em
//alert("checkAllRequiredElements_Page_03()");
if (!checkRequired("language","Language") ) return false;
if (!checkRequired("type_of_resource_01","Type of Resource #1") ) return false;
if (!checkRequired("mods_genre_authority","Genre Language Authority")) return false;
if (!checkRequired("mods_genre","Genre") ) return false;
if (!checkRequired("extent_pages","Extent (number of digital images)") ) return false;
if (!checkRequired("extent_number_of_objects","Extent (number of physical objects)") ) return false;
//if (!checkRequired("extent_dimensions","Extent (dimensions)") ) return false;

parent.U.document.UF.validate_page_03.value="1";
return true;
}

function checkAllRequiredElements_Page_04() {
parent.U.document.UF.validate_page_04.value="0";//no caching from previous validation
///alert(parent.adb_institution_id);

//check em
///alert("checkAllRequiredElements_Page_04()");

//if (!checkRequired("subject_topic_lcsh_01","LCSH Topic 1") ) return false;
//if (!checkRequired("subject_topic_vv_01","VV Topic 1") ) return false;
if (!checkRequired("subject_temporal_vv_01","VV Temporal 1") ) return false;
if (parent.adb_institution_id == "0012" ) {
////////if (!checkRequired("subject_topic_spc_01","SPC Topic 1") ) return false;
}

parent.U.document.UF.validate_page_04.value="1";

return true;
}

function checkAllRequiredElements_Page_05() {//no validation needed
//parent.U.document.UF.validate_page_05.value="0";//no caching from previous validation

//check em
///alert("checkAllRequiredElements_Page_05()");

//parent.U.document.UF.validate_page_05.value="1";

return true;
}

function checkAllRequiredElements_Page_06() {
parent.U.document.UF.validate_page_06.value="0";//no caching from previous validation

//check em
//alert("checkAllRequiredElements_Page_06()");
if (!checkRequired("physical_location_repository","Physical Location: Repository") ) return false;
if (!checkRequired("physical_location_city","Physical Location: City") ) return false;
if (!checkRequired("physical_location_state","Physical Location: State") ) return false;
if (!checkRequired("physical_location_county","Physical Location: County") ) return false;

if  (!checkOneDependsOnTwo("collection_id_number","Collection ID Number","collection_id_num_type","Collection ID Number Type")  )    return false;


if (!checkRequired("record_content_source","Record Content Source") ) return false;

if (!checkRequired("record_creation_date","Record Creation Date") ) return false;


/////language_of_cataloging locked as English, no valication
/////use and reproduction, locked, no validation

parent.U.document.UF.validate_page_06.value="1";
return true;
}

function checkAllRequiredElements_Page_Museum() {
///parent.U.document.UF.validate_page_museum.value="0";//no caching from previous validation

//check em
///no required fields, no validation
///alert("checkAllRequiredElements_Page_Museum()");

///parent.U.document.UF.validate_page_museum.value="1";
return true;
}

function checkAllRequiredElements_Page_08() {
//check em

return true;
}

function checkAllRequiredElements_Page_09() {
//check em

return true;
}

function checkAllRequiredElements_Page_10() {
//check em

return true;
}



function checkAllRequiredElements() {
return true;

if (!checkRequired("title","Title") ) return false;

 

 /*
if (document.forms[0].creator_radio[0].checked==true){
    if (!checkRequired("creator_lastname","Creator Last Name") ) {return false; }
	} 

if (!checkRequired("mods_description","Description") ) return false; 
if (!checkRequired("role","Role") ) return false;
if (!checkRequired("date_created","Date Created") ) return false;

if (!checkRequired("place_of_origin","Place of Origin") ) return false;
if (!checkRequired("publisher","Publisher") ) return false;
if (!checkRequired("language","Language") ) return false;
if (!checkRequired("type_of_resource","Type of Resource") ) return false;
if (!checkRequired("genre","Genre") ) return false;




if (!checkRequired("form_type_technique","Technique") ) return false;
if (!checkRequired("form_type_medium","Medium") ) return false;
if (!checkRequired("digital_origin","Digital Origin") ) return false;
if (!checkRequired("internetmediatype","Internet Media Type") ) return false;
if (!checkRequired("extent_pages","Extent (pages)") ) return false;


if (!checkRequired("extent_dimensions","Extent (dimensions)") ) return false;
/////abstract optional//if (!checkRequired("abstract","Abstract") ) return false;

if (!checkRequired("subject_topic_lcsh_01","Subject: Topical: (LCSH) 1") ) return false;
///if (!checkRequired("subject_topic_lcsh_02","Subject: Topical: (LCSH) 2") ) return false;
///if (!checkRequired("subject_topic_lcsh_03","Subject: Topical: (LCSH) 3") ) return false;

////if (!checkRequired("subject_geographic_lcsh_01","Subject: Geographic: (LCSH) 1") ) return false;
////if (!checkRequired("subject_geographic_lcsh_02","Subject: Geographic: (LCSH) 2") ) return false;
////if (!checkRequired("subject_name_lcsh_01","Subject:  Name: (LCSH) 1") ) return false;
///if (!checkRequired("subject_name_lcsh_02","Subject:  Name: (LCSH) 2") ) return false;

if (!checkRequired("subject_temporal_lcsh_01","Subject: Temporal: (LCSH) 1") )return false;


//if (!checkRequired("subject_temporal_lcsh_02","Subject: Temporal: (LCSH) 2") ) return false;
//if (!checkRequired("subject_topic_tgm_01","Subject: Topical: (TGM) ") ) return false;
if (!checkRequired("subject_temporal_vv_01","Subject: Temporal: (VV) 1") ) return false;
//if (!checkRequired("subject_temporal_vv_02","Subject: Temporal: (VV) 2") ) return false;
if (!checkRequired("subject_topic_vv_01","Subject: Topical: (VV) 1") ) return false;


if (!checkRequired("subject_topic_vv_02","Subject: Topical: (VV) 2") ) return false;
if (!checkRequired("subject_geographic_vv_01","Subject: Geographic: (VV) 1") ) return false;
//if (!checkRequired("subject_geographic_vv_02","Subject: Geographic: (VV) 2") ) return false;
if (!checkRequired("constituent_file_name_1","Constituent File Name: (first)") ) return false;
///constituent_file_uri_1 READONLY


////if (!checkRequired("accession_number","Accession Number") ) return false;

if (!checkRequired("physical_location_repository","Physical Location: Repository") ) return false;

//physical_location_detail not required
//if (!checkRequired("physical_location_detail","Physical Location: Detail") ) return false;

if (!checkRequired("physical_location_city","Physical Location: City") ) return false;
if (!checkRequired("physical_location_state","Physical Location: State") ) return false;
if (!checkRequired("physical_location_state","Physical Location: County") ) return false;

if (!checkRequired("link_to_digital_resource","Link to Digital Resource") ) return false;

//museum credit line not required
//if (!checkRequired("museum_credit_line","Museum Credit Line") ) return false;


if (!checkRequired("record_content_source","Record Content Source") ) return false;
if (!checkRequired("record_creation_date","Record Creation Date") ) return false;

if (!checkRequired("language_of_cataloging","Language of Cataloging") ) return false;

if (!checkRequired("use_and_reproduction","Use and Reproduction") ) return false;
alert("checkRequired return true");
*/
return true;
}///end function



function mods_genre_rule() {
//alert("mods_genre_rule");
//return true;
if ( !document.forms[0].mods_genre_radio[2].checked ) {
/////alert("chenhall");
	return true;
}else{
	alert("MARC: "
	+"\nThe input box below may not be typed in unless you have selected aat or Chenhall."
	+"\nPlease select an item from the online MARC Genre vocabulary.");
	return false;
}
}

function mods_language_rule() {

	alert("LANGUAGE: "
	+"\nThe input boxes for Language are READONLY."
	+"\nPlease select an item from the online Language vocabulary to enter values.");
	return false;

}


///usage: onKeypress="return testYear(event,this)"
// Only let numbers in the  Year field, max length=4
function xxx_testYear(event,sbox) {//this is example, real function in vv_popups.htm
var e = event;
var KS; //keystroke value
var rmc = 2; //right mouse click IE
   // KS the keystroke entered
  if ( typeof(e.which) != 'undefined' ) {//netscape
	KS = e.which; 
  	rmc = 3; //right mouse click netscape
   }else { 
	KS = e.keyCode; 
   }
//alert("kStroke = " + KS +"\nsbox.value.length="+sbox.value.length);

   if (sbox.value.length >3 ) { 
	alert("You may not type more than 4 digits for the year."); 
	return false; 
	} 

   if ((KS > 47) && (KS < 58)) { return true;} //integer
   if (KS == 8) return true; // Backspace
   if (KS == 9) return true; // Tab
   ////if (KS == 32) return true; //whitespace




   alert("Only integer numbers are allowed in the Year field.");
   return false;
}



///usage: onKeypress="return digits_only_rule(event,this)"
function digits_only_rule (event,sbox) {

var e = event;
var KS; //keystroke value
var rmc = 2; //right mouse click IE
   // KS the keystroke entered
  if ( typeof(e.which) != 'undefined' ) {//netscape
	KS = e.which; 
  	rmc = 3; //right mouse click netscape
   }else { 
	KS = e.keyCode; 
   }

  if ((KS > 47) && (KS < 58)) { return true;} //integer
   if (KS == 8) return true; // Backspace
   if (KS == 9) return true; // Tab
   ////if (KS == 32) return true; //whitespace


   alert("Only integer numbers are allowed in this field.");
   return false;

}///end function

///usage: onKeypress="return digits_only_rule_max(event,this, max)"
function digits_only_rule_max (event,sbox,max) {

var n = new Number(max);
    n = n-1;
var e = event;
var KS; //keystroke value
var rmc = 2; //right mouse click IE
   // KS the keystroke entered
  if ( typeof(e.which) != 'undefined' ) {//netscape
	KS = e.which; 
  	rmc = 3; //right mouse click netscape
   }else { 
	KS = e.keyCode; 
   }


   if (sbox.value.length >n ) { 
	alert("You may not type more than "+max+" digits for this field."); 
	return false; 
	} 


  if ((KS > 47) && (KS < 58)) { return true;} //integer
   if (KS == 8) return true; // Backspace
   if (KS == 9) return true; // Tab
   ////if (KS == 32) return true; //whitespace


   alert("Only integer numbers are allowed in this field.");
   return false;

}///end function


function leftPadZerosRule (sbox,minn) {
var n = new Number(minn);

if (sbox.value.length == n || sbox.value.length == 0) { return; }

var str = new String(sbox.value);

while ( str.length < n ) {
    str = "0" +str;
	//////alert("str="+str);
	}

sbox.value=str;

return;
}

		
///fdg();//funnction in vv_validation.js

function fdg() {
//return;

var BEGINFORM = 0;
var ENDFORM   = document.forms.length;

document.write("<div id='formdebug' align='left'><font face='arial' size='1' color='a00000'>");
for ( jj=BEGINFORM; jj<ENDFORM; jj++ ) {
document.write('<hr> document.forms['+jj+'].name='+document.forms[jj].name+'<br>');
document.write(' document.forms['+jj+'].method='+document.forms[jj].method+'<br>');
document.write(' document.forms['+jj+'].action='+document.forms[jj].action+'<br>');

for(i=0;i<document.forms[jj].length;i++)
{
document.write( 'document.forms['+jj+']::'+ document.forms[jj].name+".elements["+i+"]::"
			  +' ------name: '+document.forms[jj].elements[i].name
			  +' ------type: '+document.forms[jj].elements[i].type
			  +' -----value: '+document.forms[jj].elements[i].value
			  )
			  if ( typeof(document.forms[jj].elements[i].tabindex) != 'undefined') {
			  document.write( ' -----tabindex: '+ document.forms[jj].elements[i].tabindex )
			  }
			  if ( typeof(document.forms[jj].elements[i].onblur) != 'undefined') {
			  document.write( ' -----onblur: '+ document.forms[jj].elements[i].onblur )
			  }
			  if ( document.forms[jj].elements[i].type == 'button' ) {
			  document.write( ' -----onclick: '+ document.forms[jj].elements[i].onclick )
			  }
			  if ( document.forms[jj].elements[i].type == 'radio' ) {
			  document.write( ' -----checked: '+ document.forms[jj].elements[i].checked )
			  }
document.write('<br>')
			  
			  }}




document.write("<HR>");
document.write(	" location.href = "+location.href+"<BR>");
document.write('document.location.href='+document.location.href+'<BR>');
document.write(	" parent.location.href = "+parent.location.href+"<BR>");
if ( typeof( parent.parent) != 'undefined' ) {
document.write(	" parent.parent.location.href = "+parent.parent.location.href+"<BR>");
}
document.write("<HR>");
document.write('parent.name='+parent.name+'<BR>');

document.write('parent.frames.length='+parent.frames.length+'<BR>');
document.write(	" parent.location.href = "+parent.location.href+"<P>");


for ( i=0; i<parent.frames.length; i++ ) 
{
document.write(	" parent.frames["+i+"] :: "
			+ " ------name: "+parent.frames[i].name
			+ " ------location.href: "+ parent.frames[i].location.href
			+ "<br>"
			);
			}

document.write("<HR>");
if ( typeof(parent.parent) != 'undefined') {
document.write('parent.parent.name='+parent.parent.name+'<BR>');
document.write('parent.parent.frames.length='+parent.parent.frames.length+'<BR>');
document.write(	" parent.parent.location.href = "+parent.parent.location.href+"<P>");


for ( i=0; i<parent.parent.frames.length; i++ ) 
{
document.write(	" parent.parent.frames["+i+"] :: "
			+ " ------name: "+parent.parent.frames[i].name
			+ " ------location.href: "+ parent.parent.frames[i].location.href
			+ "<br>"
			);
			}

}
document.write("</font></div>");

}///end function formvardebug()




