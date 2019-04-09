/*
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
*/

//  thisDocument alias is set to either
//  parent.L.thisDocument = parent.D.document; //for input pages
//  parent.L.thisDocument = parent.U.document; //for upper page final submission

var thisDocument = parent.L.thisDocument;


//=================================================================
//=================================================================
//usage onblur="checkRequired('title','Title')" 
function checkRequired(form_var,alert_name) {

//alert("checkRequired: \nform_var="+form_var+"\nalert_name=\n"+alert_name);

var FORM_VAR = new String (form_var);
var ALERT_NAME = new String(alert_name);

var FORM_VAR_VALUE = new String();
    FORM_VAR_VALUE = eval("parent.D.document.forms[0]."+FORM_VAR+".value");
    //alert("checkRequired:\nFORM_VAR_VALUE=\n"+FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);

    FORM_VAR_VALUE = FORM_VAR_VALUE.replace(/ /gi,'');

    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);


var this_focus = new String();
    this_focus = "parent.D.document.forms[0]."+FORM_VAR+".focus();";


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

//=================================================================
//=================================================================
//usage (!checkRequired2(elementIdentType, elementIdentTypeMsg,"none")) return false; 
function checkRequired2(form_var,alert_name,stopword) {

//alert("checkRequired2: \nform_var="+form_var+"\nalert_name=\n"+alert_name+"\nstopword="+stopword);

var FORM_VAR = new String (form_var);
var ALERT_NAME = new String(alert_name);
var STOPWORD = new String(stopword);

var FORM_VAR_VALUE = new String();
    FORM_VAR_VALUE = eval("parent.D.document.forms[0]."+FORM_VAR+".value");
    //alert("checkRequired2:\nFORM_VAR_VALUE=\n"+FORM_VAR_VALUE+"\nSTOPWORD="+STOPWORD);

    FORM_VAR_VALUE = FORM_VAR_VALUE.replace(/ /gi,'');

    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);


var this_focus = new String();
    this_focus = "parent.D.document.forms[0]."+FORM_VAR+".focus();";


/////alert("this_focus="+this_focus );

///if ( eval(value_length) == 0 ) {
    //if (FORM_VAR_VALUE.length == 0 ) {
    if (FORM_VAR_VALUE == STOPWORD ) {
	alert("You must enter a valid value for "+alert_name+".");
	eval(this_focus);
	return false;
	}else {
	return true;
	}

}//end function

//=================================================================
//=================================================================
function checkRequired_for_one_of_two(form_var,alert_name,form_var2, alert_name2) {


var FORM_VAR = new String (form_var);
var ALERT_NAME = new String(alert_name);

var FORM_VAR2 = new String (form_var2);
var ALERT_NAME2 = new String(alert_name2);


var FORM_VAR_VALUE = new String();
    FORM_VAR_VALUE = eval("parent.D.document.forms[0]."+FORM_VAR+".value");
    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);

    FORM_VAR_VALUE = FORM_VAR_VALUE.replace(/ /gi,'');

    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);


var this_focus = new String();
    this_focus = "parent.D.document.forms[0]."+FORM_VAR+".focus();";


var FORM_VAR2_VALUE = new String();
    FORM_VAR2_VALUE = eval("parent.D.document.forms[0]."+FORM_VAR2+".value");
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


//=================================================================
//=================================================================
function checkRequired_for_two_of_two(form_var,alert_name,form_var2, alert_name2) {


var FORM_VAR = new String (form_var);
var ALERT_NAME = new String(alert_name);

var FORM_VAR2 = new String (form_var2);
var ALERT_NAME2 = new String(alert_name2);


var FORM_VAR_VALUE = new String();
    FORM_VAR_VALUE = eval("parent.D.document.forms[0]."+FORM_VAR+".value");
    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);

    FORM_VAR_VALUE = FORM_VAR_VALUE.replace(/ /gi,'');

    //alert(FORM_VAR_VALUE+"\nFORM_VAR_VALUE.length="+FORM_VAR_VALUE.length);


var this_focus = new String();
    this_focus = "parent.D.document.forms[0]."+FORM_VAR+".focus();";


var FORM_VAR2_VALUE = new String();
    FORM_VAR2_VALUE = eval("parent.D.document.forms[0]."+FORM_VAR2+".value");
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


//=================================================================
//=================================================================
function checkAllRequiredElements_Page_titleInfo() {
parent.U.document.UF.validate_page_titleInfo.value="b";//no caching from previous validation
if (!checkRequired("title","Title") ) return false;
parent.U.document.UF.validate_page_titleInfo.value="B";
return true;
}


//=================================================================
//=================================================================
function checkAllRequiredElements_Page_name() {
parent.U.document.UF.validate_page_name.value="c";//no caching from previous validation
/*----this is the code to validate if the lastname is required------------------------
//validation done on the page_003_name for name_type and name_authority
var numNameBlocks = new Number(parent.U.document.UF.numNameBlocks.value);
var elementLastName = new String("");
var elementLastNameMsg = new String("");
var j =0;
for(i=0;i<numNameBlocks;i++) {
j = i+1;//for display value
elementLastName = "dyn_name_lastname_0"+i;
elementLastNameMsg = "the personal lastname OR corporate/conference name for Name # "+j;
if (!checkRequired(elementLastName,elementLastNameMsg) ) return false;
}//end for
-------------------------------------------------------------*/
parent.U.document.UF.validate_page_name.value="C";
return true;
}


//=================================================================
//=================================================================
function checkAllRequiredElements_Page_typeOfResource() {
parent.U.document.UF.validate_page_typeOfResource.value="d";//no caching from previous validation
if (!checkRequired("type_of_resource_all","Type of Resource") ) return false;
parent.U.document.UF.validate_page_typeOfResource.value="D";
return true;
}


//=================================================================
//=================================================================
function checkAllRequiredElements_Page_genre() {
parent.U.document.UF.validate_page_genre.value="e";//no caching from previous validation
//genre not required
//if (!checkRequired("mods_genre","Genre") ) return false;
parent.U.document.UF.validate_page_genre.value="E";
return true;
}



//=================================================================
//=================================================================
function checkAllRequiredElements_Page_originInfo() {
parent.U.document.UF.validate_page_originInfo.value="f";//no caching from previous validation

/////if  (!checkRequired_for_one_of_two("date_created","Single Date of Creation","date_created_begin","Creation Date Range Begin Date")  
    /////)    return false;

///if  (!checkRequired_for_two_of_two("date_created","Creation Date","date_created_begin","Creation Date Begin Range")  
    ///)    return false;
///if (!checkRequired("place_of_origin","Place of Origin") ) return false;

parent.U.document.UF.validate_page_originInfo.value="F";
return true;
}


//=================================================================
//=================================================================
function checkAllRequiredElements_Page_language() {
parent.U.document.UF.validate_page_language.value="g";//no caching from previous validation
///////if (!checkRequired("language","Language") ) return false;
parent.U.document.UF.validate_page_language.value="G";
return true;
}


//=================================================================
//=================================================================
function checkAllRequiredElements_Page_physicalDescription() {
parent.U.document.UF.validate_page_physicalDescription.value="h";//no caching from previous validation
if (!checkRequired("mods_digital_origin","Digital Origin") ) return false;
//internetMediaType validated on page
//if (!checkRequired("mods_extent","Extent ") ) return false;
parent.U.document.UF.validate_page_physicalDescription.value="H";
return true;
}


//=================================================================
//=================================================================
function checkAllRequiredElements_Page_abstract() {
parent.U.document.UF.validate_page_abstract.value="i";//no caching from previous validation
/////abstract not required
//if (!checkRequired("abstract","Abstract") ) return false;
parent.U.document.UF.validate_page_abstract.value="I";
return true;
}


//=================================================================
//=================================================================
function checkAllRequiredElements_Page_subject() {
parent.U.document.UF.validate_page_subject.value="j";//no caching from previous validation
//validation done on page for subject_0X_auth

var numSub = new Number(parent.U.document.UF.numSubjectBlocks.value);
var subjectField = new String("");
var subjectMsg   = new String("");
var j=0;
for (i=0;i<numSub;i++) {
j=i+1;//for display only
subjectField = 'subject_0'+i;
subjectMsg   = 'the subelement code for Subject # '+j;
if (!checkRequired(subjectField, subjectMsg)) return false;
}//end for


parent.U.document.UF.validate_page_subject.value="J";
return true;
}


//=================================================================
//=================================================================
function checkAllRequiredElements_relatedItem() {
parent.U.document.UF.validate_page_relatedItem.value="k";

var numRI = new Number (parent.U.document.UF.numRelatedItems.value);
var elementXpathUrl = new String("");
var elementXpathUrlMsg = new String("");
var j=0;
for (i=0;i<numRI;i++){
j=i+1;//for display value
elementXpathUrl ='dyn_itemURL_0'+i;
elementXpathUrlMsg = ' the URL for Related Item # '+j; 
if (!checkRequired2(elementXpathUrl, elementXpathUrlMsg,"")) return false; 
}

parent.U.document.UF.validate_page_relatedItem.value="K";
return true;
}


//=================================================================
//=================================================================
function checkAllRequiredElements_identifier() {
parent.U.document.UF.validate_page_identifier.value="l";

//dyn_identType_0X evaluated on page_15_dientifier as individual form element
//dyn_identUrl_0X evaluated on page_015_identifier as individual form element

var  numID = new Number(parent.U.document.UF.numIdentifiers.value);
var elementIdentType = new String();
var elementIdentTypeMsg = new String();
var elementIdentUrl = new String();
var elementIdentUrlMsg = new String();
j=0;
for (i=0;i<numID;i++) {
j=i+1;//for display value
elementIdentType = 'dyn_identType_0'+i;
elementIdentTypeMsg = ' the Type for Identifier # '+j;
if (!checkRequired2(elementIdentType, elementIdentTypeMsg,"none")) return false; 
elementIdentUrl='dyn_identifier_0'+i;
elementIdentUrlMsg=" the URL for Identifier # "+j;
if (!checkRequired2(elementIdentUrl, elementIdentUrlMsg,"")) return false; 
}

parent.U.document.UF.validate_page_identifier.value="L";
return true;
}


//=================================================================
//=================================================================
function checkAllRequiredElements_Page_location() {
parent.U.document.UF.validate_page_location.value="m";//no caching from previous validation


//dyn_location_url_0X evaluated on page_016_location as individual form element

var  numLU = new Number(parent.U.document.UF.numLocationUrlBlocks.value);
var elementLocUrl = new String();
var elementLocUrlMsg = new String();
j=0;
for (i=0;i<numLU;i++) {
j=i+1;//for display value
elementLocUrl='dyn_location_url_0'+i;
elementLocUrlMsg=" the Location URL # "+j;
if (!checkRequired2(elementLocUrl, elementLocUrlMsg,"")) return false; 
}
parent.U.document.UF.validate_page_location.value="M";
return true;
}


//=================================================================
//=================================================================
function checkAllRequiredElements_Page_accessCondition() {
parent.U.document.UF.validate_page_accessCondition.value="n";//no caching from previous validation

var numAC = new Number (parent.U.document.UF.numAccessConditionBlocks.value);
var numEL = numAC+numAC;//number of form.elements with input 
var elementACtext = new String("");
var elementACtextMsg = new String("");
var a=0;//counter for blocks
var j=0;
for (i=0;i<numEL;i++){
if (i%2 == 1){
	j=a+1;//for display value
	elementACtext ='dyn_access_condition_text_0'+a;
	elementACtextMsg = ' the URL for Access Condition # '+j;
	a++;
	if (!checkRequired2(elementACtext, elementACtextMsg,"")) return false;
	}//end if "text"
}//end for

parent.U.document.UF.validate_page_accessCondition.value="N";
return true;
}




//=================================================================
//=================================================================
/////language_of_cataloging required, needs  valication
function checkAllRequiredElements_Page_recordInfo() {
parent.U.document.UF.validate_page_recordInfo.value="o";//no caching from previous validation
//if (!checkRequired("record_content_source","Record Content Source") ) return false;//not required
//if (!checkRequired("record_creation_date","Record Creation Date") ) return false;
if (!checkRequired("language_of_cataloging","Language of Cataloging") ) return false;
parent.U.document.UF.validate_page_recordInfo.value="O";
return true;
}



//=================================================================
//=================================================================
function mods_genre_rule() {
//alert("mods_genre_rule");
//return true;
if ( !parent.D.document.forms[0].mods_genre_radio[2].checked ) {
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



//=================================================================
//=================================================================
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



//=================================================================
//=================================================================
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



//=================================================================
//=================================================================
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



//=================================================================
//=================================================================
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
//=================================================================
//=================================================================


//=================================================================
//=================================================================
//the end
