/////////////functions to support the form pages


/////////////radio buttons in vv_functions_radio.js

////////////validation in vv_validation.js

function checkDataLengthMin(sbox,N) {
var num = Number(N);
var len = sbox.value.length;
if (num > len ) {
	alert("You must have "+N+" characters in this field.");
	sbox.focus();
	return false;
}else{return true;}
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

//alert(sTarget+",\"helpWindow\",\""+wDef+"\"")

window.open(sTarget,"helpWindow",wDef);



}//end function





function selectPN(sbox,W,H) 
{
///alert("vv_functions.js: sBox.name="+sbox.name)
var sTarget = new String();
    sTarget = "vv_popupPN.htm?sbox_name="+sbox.name;

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;

//alert(sTarget+",\"helpWindow\",\""+wDef+"\"")

window.open(sTarget,"helpWindow",wDef);



}//end function


function selectPN(sbox,W,H) 
{
///alert("vv_functions.js: sBox.name="+sbox.name)
var sTarget = new String();
    sTarget = "TSLA/PN_frame.htm?sbox_name="+sbox.name;

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;

//alert(sTarget+",\"helpWindow\",\""+wDef+"\"")

window.open(sTarget,"helpWindow",wDef);



}//end function


function selectPN_AG(sbox,W,H) 
{
///alert("vv_functions.js: sBox.name="+sbox.name)
var sTarget = new String();
    sTarget = "vv_popupPN_AG.htm?sbox_name="+sbox.name;
    sTarget = "TSLA/PN_frame.htm?sbox_name="+sbox.name;

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;

//alert(sTarget+",\"helpWindow\",\""+wDef+"\"")

window.open(sTarget,"helpWindow",wDef);



}//end function


function selectPN_HP(sbox,W,H) 
{
///alert("vv_functions.js: sBox.name="+sbox.name)
var sTarget = new String();
    sTarget = "vv_popupPN_HP.htm?sbox_name="+sbox.name;

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;

//alert(sTarget+",\"helpWindow\",\""+wDef+"\"")

window.open(sTarget,"helpWindow",wDef);



}//end function

function selectPN_QZ(sbox,W,H) 
{
///alert("vv_functions.js: sBox.name="+sbox.name)
var sTarget = new String();
    sTarget = "vv_popupPN_QZ.htm?sbox_name="+sbox.name;

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;

//alert(sTarget+",\"helpWindow\",\""+wDef+"\"")

window.open(sTarget,"helpWindow",wDef);



}//end function








function selectCA(sbox,W,H) 
{
///alert("vv_functions.js: sBox.name="+sbox.name)
var sTarget = new String();
    //sTarget = "vv_popupCA.htm?sbox_name="+sbox.name;
    sTarget = "TSLA/CA_frame.htm?sbox_name="+sbox.name;

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;

//alert(sTarget+",\"helpWindow\",\""+wDef+"\"")

window.open(sTarget,"helpWindow",wDef);

}//end function


function selectGEO(sbox,W,H) 
{
///alert("vv_functions.js: sBox.name="+sbox.name)
var sTarget = new String();
    //sTarget = "vv_popupGeo.htm?sbox_name="+sbox.name;
    sTarget = "TSLA/GE_frame.htm?sbox_name="+sbox.name;

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;

//alert(sTarget+",\"helpWindow\",\""+wDef+"\"")

window.open(sTarget,"helpWindow",wDef);

}//end function



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
    elementName =  "document.forms[0]."+formvar+".value";

eval(elementName+"=\'\';");

if (num == 1) return;


var elementDisplay =  new String();
    elementDisplay =  "document.forms[0]."+formvar+"_display.value";
if ( typeof (eval(elementDisplay)) != 'undefined') {
	eval (elementDisplay+"=\'\'");
	}

if (num == 2) return;

var elementHDisplay =  new String();
    elementHDisplay =  "document.forms[0].H"+formvar+"_display.value";
    eval(elementHDisplay+"=\'\'");
if ( typeof (eval(elementHDisplay)) != 'undefined') {
	eval(elementHDisplay+"=\'\'");
	}

//alert("formvar="+formvar+"\nformvar_disp="+formvar_disp);
//alert("vv_functions.js: sBox.name="+sbox.name);

}



function clearDate(sbox) {

///alert(sbox.name);

var formvar  = new String()
   ,formvarQ = new String;

var formvar = sbox.name;
    formvar = formvar.substr(1);

var formvarQ = formvar;
    formvarQ = formvarQ +"Q";

    eval("document.forms[0]."+formvar +".value=\"\"")
    eval("document.forms[0]."+formvarQ+".value=\"\"")
return;

}

function xclearVitalDate(sbox) {//no qualifiers

var formvar  = new String();
    formvar = sbox.name;
    formvar = formvar.substr(1);
    eval("document.forms[0]."+formvar +".value=\"\"")
    
return;

}

function clearDateNoQual(sbox) {//no qualifiers

var formvar  = new String();
    formvar = sbox.name;
    formvar = formvar.substr(1);
    eval("document.forms[0]."+formvar +".value=\"\"")
    
return;

}


function getTodaysDate(sbox) {

alert("sbox.name="+sbox.name)

var d= new Date();

alert("d="+d);

}




