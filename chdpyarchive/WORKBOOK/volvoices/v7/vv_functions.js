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


////////////functions to support the form pages


/////////////radio buttons in vv_functions_radio.js

////////////validation in vv_validation.js

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
);

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


/*
function mods_genre_menu_pop() {//page_03

if ( parent.D.document.forms[0].mods_genre_menu[0].selected ) {
        parent.D.document.forms[0].mods_genre_authority.value = "aat";
        parent.D.document.forms[0].mods_genre.value = "";
} else if ( parent.D.document.forms[0].mods_genre_menu[1].selected ) {
        parent.D.document.forms[0].mods_genre_authority.value  = "nmc";
        parent.D.document.forms[0].mods_genre.value = "";
}else {
        if ( parent.D.document.forms[0].mods_genre_authority.value != "marcgt" ) {
        parent.D.document.forms[0].mods_genre_authority.value  = "marcgt";
        parent.D.document.forms[0].mods_genre.value = "";
        }//else no action


}//end function
*/




function checkDataLengthMin(sbox,N) {
var num = Number(N);
var len = sbox.value.length;
if (num > len ) {
	alert("You must have "+N+" characters in this field.");
	sbox.focus();
	return false;
}else{return true;}
}//end function


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


function selectOneOptionDate(sbox,W,H) 
{
///alert("vv_functions.js: sBox.name="+sbox.name)
var sTarget = new String();
    sTarget = "vv_popupDates.htm?sbox_name="+sbox.name;

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;
    wDef += ",scrollbars=yes"
    wDef += ",resizable"

//alert(sTarget+",\"helpWindow\",\""+wDef+"\"")

window.open(sTarget,"helpWindow",wDef);



}//end function




/*------------------------------------------------------
///bbb
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

if (num == 1) return;


var elementDisplay =  new String();
    elementDisplay =  "parent.D.document.forms[0]."+formvar+"_display.value";
if ( typeof (eval(elementDisplay)) != 'undefined') {
	eval (elementDisplay+"=\'\'");
	}

//alert("vv_functions.js\n\nsbox.name="+sbox.name+"\nelementName="+elementName+"\nelementDisplay="+elementDisplay);
if (num == 2) return;

var elementHDisplay =  new String();
    elementHDisplay =  "parent.D.document.forms[0].H"+formvar+"_display.value";
    eval(elementHDisplay+"=\'\'");
if ( typeof (eval(elementHDisplay)) != 'undefined') {
	eval(elementHDisplay+"=\'\'");
	}

//alert("formvar="+formvar+"\nformvar_disp="+formvar_disp);
//alert("vv_functions.js: sBox.name="+sbox.name);

}
--------------------------------------------------------------------------*/



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


function clearDateNoQual(sbox) {//no qualifiers

var formvar  = new String();
    formvar = sbox.name;
    formvar = formvar.substr(1);
    eval("parent.D.document.forms[0]."+formvar +".value=\"\"")
    
return;

}


function getTodaysDate(sbox) {

alert("sbox.name="+sbox.name)

var d= new Date();

alert("d="+d);

}



////aaa
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

//////PAGE VALIDATION//////if you dynamically write this, it must be done last
/////usage: page_01 is good : update_page_validation(1,1);
/////       page_01 is bad  : update_page_validation(1,0);
function update_page_validation(PAGE,N) {

var n = PAGE+1; 

//////same var name as in vv_decompose_tags.js
var comment_04Block = new String(parent.U.document.UF.VVcomment_04.value);
if ( comment_04Block == "" ) {//some reload records do not have this
	comment_04Block = "<!-- PAGE VALIDATION :0:0:0:0:0:0:0: -->";
	}


var a04 = new Array();
    a04 = comment_04Block.split(":");

var msg = new String("comment_04Block=\n");
    msg += comment_04Block+"\n";

var retstr = new String("");

a04[n]=N;
    
for (i=0;i<a04.length;i++) {
	msg += "\na04["+i+"]="+a04[i];
	retstr += ":" +a04[i];
	}
retstr = retstr.substring(1);
//alert(msg +"\n\nretstr=\n"+retstr);



parent.U.document.UF.validate_page_begin.value = a04[1];
parent.U.document.UF.validate_page_01.value    = a04[2];
parent.U.document.UF.validate_page_02.value    = a04[3];
parent.U.document.UF.validate_page_03.value    = a04[4];
parent.U.document.UF.validate_page_04.value    = a04[5];
parent.U.document.UF.validate_page_05.value    = a04[6];
parent.U.document.UF.validate_page_06.value    = a04[7];

parent.U.document.UF.VVcomment_04.value = retstr; 


}//end function update_page_validation(N)


//This function changes "\\" to "\" in filenames and paths
//If "\\"  not found, the original string is returned.
function fixDoubleBackSlashes( str ) {

var TEST_FILENAME = new String(str);
if (TEST_FILENAME.indexOf("\\\\")== -1) { 
	return(TEST_FILENAME);
}

var TestArray = new Array();
var TestMsg = new String("\n\nTestMsg: ");
var rebuilt_filename = new String();

TestArray = TEST_FILENAME.split("\\");
var prev= new String("x");
for (i=0;i<TestArray.length;i++) {
        TestMsg +="\n TestArray["+i+"]="+TestArray[i];
                if ( TestArray[i]=="" && prev != "" ) {
                rebuilt_filename += "\\";
                }else{
                rebuilt_filename += TestArray[i];
                }
	prev=TestArray[i];
        }
//alert("function fixDoubleBackSlashes(str)\n\nTEST_FILENAME="+TEST_FILENAME+TestMsg+"\n\nrebuilt_filename="+rebuilt_filename);

	return (rebuilt_filename);

}//end function fixDoubleBackSlashes


//Prevent cut-and-paste 
//usage:  onmousedown="parent.L.stopCutAndPaste(this,event)"
//usage: onKeyPress="return parent.L.stopCntlV(this,event);"
//usage: onKeyDown="return parent.L.stopCntlV(this,event);"
//to enable, comment out the return statement at the top of the function
function stopCutAndPaste(sbox,event) {
return;
//alert("event.button="+event.button+"\n event.ctrlKey="+event.ctrlKey);

if ( event.button == 2 ) {//mouse event
    //alert("Cut and paste is not allowed here.");
    //return false;
}
if(window.event) {//key event IE
   if(window.event.ctrlKey || window.event.button ==2){ 
	alert("Cut and paste is not allowed here.");
	sbox.value="";
	return false;
	}
} else {//key event mozilla
   if(event.ctrlKey || event.button == 2) {
	alert("Cut and paste is not allowed here.");
	sbox.value="";
	return false;
	}
}
return true;
}


//usage: onKeyPress="return parent.L.stopCntlV(this,event);"
//usage: onKeyDown="return parent.L.disableCtrlKeyCombination(this,event);"
function stopCntlV(sbox,event) {
var isCtrl;

if(window.event) {
   if(window.event.ctrlKey){ 
	alert("Cut and paste is not allowed here.");
	return false;
	}
} else {
   if(event.ctrlKey) {
	alert("Cut and paste is not allowed here.");
	return false;
	}
}

return true;
}//end function stopCntlV
