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


/////////////functions to support the form pages
/////////////dyn functions in vv_dyn_functions.js
/////////////radio buttons in vv_radio_functions.js
////////////validation in vv_validation.js


//===========================================================
//===========================================================
//highlighting links
var A = new Array(
 new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
,new String("bgstandard")
);


//===========================================================
//===========================================================
//highlighting links
function getLH(N,M){

//reset
for(i=0;i<A.length;i++) {
A[i]="bgstandardlink";
}
var n = new Number (N);
var m = new Number (M);

A[n]="bghighlightlink";
//alert("N="+n +"\nA.length="+A.length);

if ( m== 1) {//debug
parent.T.location.replace("page_links_debug_active.htm");
}else{
parent.T.location.replace("page_links_active.htm");
}

}//end function



//===========================================================
//===========================================================
function check_vv_functions(){
alert("this function check_vv_validation in vv_functions.js");
}


//===========================================================
//===========================================================
function checkDataLengthMin(sbox,N) {
var num = Number(N);
var len = sbox.value.length;
if (num > len ) {
	alert("You must have "+N+" characters in this field.");
	sbox.focus();
	return false;
}else{return true;}
}//end function


//===========================================================
//===========================================================
//for popups
function selectOneOptionSubject(sbox,W,H) 
{
///alert("vv_functions.js: selectOneOption:  sBox.name="+sbox.name)
var sTarget = new String();
    ///sTarget = "vv_popups.htm?sbox_name="+sbox.name;
    sTarget = "vv_popupSubjects.htm?sbox_name="+sbox.name;

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;
    wDef += ",scrollbars=yes"
    wDef += ",resizable"


//alert(sTarget+",\"helpWindow\",\""+wDef+"\"")

window.open(sTarget,"helpWindow",wDef);
}//end function


//===========================================================
//===========================================================
//for popups
function selectOneOption(sbox,W,H) 
{
///alert("vv_functions.js: selectOneOption:  sBox.name="+sbox.name)
var sTarget = new String();
    ///sTarget = "vv_popups.htm?sbox_name="+sbox.name;
    sTarget = "vv_popupLists.htm?sbox_name="+sbox.name;

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;
    wDef += ",scrollbars=yes"
    wDef += ",resizable"


//alert(sTarget+",\"helpWindow\",\""+wDef+"\"")

window.open(sTarget,"helpWindow",wDef);
}//end function


//===========================================================
//===========================================================
//for popups
function selectOneOptionDate(sbox,W,H) 
{
//alert("vv_functions.js: sBox.name="+sbox.name)
var sTarget = new String();
    sTarget = "vv_popupDates.htm?sbox_name="+sbox.name;

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;
    wDef += ",scrollbars=yes"
    wDef += ",resizable"

//alert(sTarget+",\"helpWindow\",\""+wDef+"\"" +"\n h="+h)

window.open(sTarget,"helpWindow",wDef);

}//end function




//===========================================================
//===========================================================
//for popups

function clearDate(sbox) {

///alert(sbox.name);

var formvar  = new String()
   ,formvarQ = new String;

var formvar = sbox.name;
    formvar = formvar.substr(1);

var formvarQ = formvar;
    formvarQ = formvarQ +"Q";

    eval("parent.D.document.forms[0]."+formvar +".value=\"\"")
    eval("parent.D.document.forms[0]."+formvarQ+".value=\"\"")
return;

}


//===========================================================
//===========================================================
//for popups
function clearDateNoQual(sbox) {//no qualifiers

var formvar  = new String();
    formvar = sbox.name;
    formvar = formvar.substr(1);
    eval("parent.D.document.forms[0]."+formvar +".value=\"\"")
    
return;

}


//===========================================================
//===========================================================
//for popups
function getTodaysDate(sbox) {

alert("sbox.name="+sbox.name)

var d= new Date();

alert("d="+d);

}



//===========================================================
//===========================================================
//for popups
///usage
///onclick="clearSelection(this,1)" //clear code no display field
///onclick="clearSelection(this,2)" //clear code and display
///onclick="clearSelection(this,3)" //clear code and display and hidden

function clearSelection(sbox,N) {

var num = 0;
    num = Number(N);

var formvar = sbox.name;
    formvar = formvar.substr(1);

var elementName =  new String();
    elementName =  "parent.D.document.forms[0]."+formvar+".value";

eval(elementName+"=\'\';");

//alert("vv_functions.js\n\nsbox.name="+sbox.name);

if (num == 1) return;


var elementDisplay =  new String();
    elementDisplay =  "parent.D.document.forms[0]."+formvar+"_display.value";
if ( typeof (eval(elementDisplay)) != 'undefined') {
	eval (elementDisplay+"=\'\'");
	}

if (num == 2) return;

var elementHDisplay =  new String();
    elementHDisplay =  "parent.D.document.forms[0].H"+formvar+"_display.value";
    eval(elementHDisplay+"=\'\'");
if ( typeof (eval(elementHDisplay)) != 'undefined') {
	eval(elementHDisplay+"=\'\'");
	}

//alert("formvar="+formvar+"\nformvar_disp="+formvar_disp);
//alert("vv_functions.js: sBox.name="+sbox.name);



}//end function clearSelection


//===========================================================
//===========================================================




