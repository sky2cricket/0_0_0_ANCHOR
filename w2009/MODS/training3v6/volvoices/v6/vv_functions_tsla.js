/////////////functions to support the form pages

//vv_functions_tsla.js


/////////////radio buttons in vv_functions_radio.js

////////////validation in vv_validation.js





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

function clearSelectionTSLA(sbox,N) {

var num = 0;
    num = Number(N);

var formvar = sbox.name;
    formvar = formvar.substr(1);

var elementName  =  new String();
    elementName  =  "parent.D.document.forms[0]."+formvar+".value";
var elementNameU =  new String();
    elementNameU =  "parent.U.document.forms[0]."+formvar+".value";

eval(elementName+"=\'\';");
eval(elementNameU+"=\'\';");

//alert("vv_functions_tsla.js\n\nsbox.name="+sbox.name+"\nelementName="+elementName);
if (num == 1) return;


var elementDisplay  =  new String();
    elementDisplay  =  "parent.D.document.forms[0]."+formvar+"_display.value";
var elementDisplayU =  new String();
    elementDisplayU =  "parent.U.document.forms[0]."+formvar+"_display.value";
if ( typeof (eval(elementDisplay)) != 'undefined') {
	eval (elementDisplay+"=\'\'");
	eval (elementDisplayU+"=\'\'");
	}

//alert("vv_functions_tsla.js\n\nsbox.name="+sbox.name+"\nelementName="+elementName+"\nelementDisplay="+elementDisplay);
if (num == 2) return;

var elementHDisplay  =  new String();
    elementHDisplay  =  "parent.D.document.forms[0].H"+formvar+"_display.value";
var elementHDisplayU =  new String();
    elementHDisplayU =  "parent.U.document.forms[0].H"+formvar+"_display.value";
    eval(elementHDisplay+"=\'\'");
if ( typeof (eval(elementHDisplay)) != 'undefined') {
	eval(elementHDisplay+"=\'\'");
	eval(elementHDisplayU+"=\'\'");
	}

//alert("formvar="+formvar+"\nformvar_disp="+formvar_disp);
//alert("vv_functions.js: sBox.name="+sbox.name);

}


//for TSLA data
/// 1.  convert to camel case
/// 2.  change single dash to double dash ( but not in date ranges )
function reformatCa(str) {
//alert("reformat\n"+str);

var s =  new String(str);
    s =  s.toLowerCase();
//alert("s="+s);

var a = new Array();
    a = s.split(" ");

var msg = new String();
var msg2 = new String();
var msg3 = new String();
var msg4 = new String();

var t = new String();
var u = new String();

for ( i=0;i<a.length;i++) {
	t = a[i];
	t = t.substring(0,1).toUpperCase();
	u = a[i];
	u = u.substring(1);
	msg += " "+t+u;
	}

msg=msg.substring(1);
//alert("msg:\n"+msg);

a = msg.split("/");

for (i=0;i<a.length;i++){
	t = a[i];
	t = t.substring(0,1).toUpperCase();
	u = a[i];
	u = u.substring(1);
	msg2 += "/"+t+u;
	}
msg2=msg2.substring(1);
//alert("msg2:\n"+msg2);
 
a = msg2.split("(");

for (i=0;i<a.length;i++){
	t = a[i];
	t = t.substring(0,1).toUpperCase();
	u = a[i];
	u = u.substring(1);
	msg3 += "("+t+u;
	}
msg3=msg3.substring(1);
//alert("msg3:\n"+msg3);

/*
msg3=msg3.replace(/ - 16/gi," -- 16");
msg3=msg3.replace(/ - 17/gi," -- 17");
msg3=msg3.replace(/ - 18/gi," -- 18");
msg3=msg3.replace(/ - 19/gi," -- 19");
msg3=msg3.replace(/ - 20/gi," -- 20");
*/
msg3 = msg3.replace(/ - /gi," -- ");
//alert("msg3:\n"+msg3);

return(msg3);



}//end function reformatCa


//for TSLA data
/// 1.  convert to camel case
/// 2.  change single dash to white space ( but not in date ranges )
function reformatPn(str) {
//alert("reformat\n"+str);

var s =  new String(str);
    s =  s.toLowerCase();
//alert("s="+s);

var a = new Array();
    a = s.split(" ");

var msg = new String();
var msg2 = new String();
var msg3 = new String();
var msg4 = new String();

var t = new String();
var u = new String();

for ( i=0;i<a.length;i++) {
	t = a[i];
	t = t.substring(0,1).toUpperCase();
	u = a[i];
	u = u.substring(1);
	msg += " "+t+u;
	}

msg=msg.substring(1);
//alert("msg:\n"+msg);

a = msg.split("/");

for (i=0;i<a.length;i++){
	t = a[i];
	t = t.substring(0,1).toUpperCase();
	u = a[i];
	u = u.substring(1);
	msg2 += "/"+t+u;
	}
msg2=msg2.substring(1);
//alert("msg2:\n"+msg2);
 
a = msg2.split("(");

for (i=0;i<a.length;i++){
	t = a[i];
	t = t.substring(0,1).toUpperCase();
	u = a[i];
	u = u.substring(1);
	msg3 += "("+t+u;
	}
msg3=msg3.substring(1);
//alert("msg3:\n"+msg3);

/*
msg3=msg3.replace(/ - 16/gi," -- 16");
msg3=msg3.replace(/ - 17/gi," -- 17");
msg3=msg3.replace(/ - 18/gi," -- 18");
msg3=msg3.replace(/ - 19/gi," -- 19");
msg3=msg3.replace(/ - 20/gi," -- 20");
*/
msg3 = msg3.replace(/ - /gi," ");
//alert("msg3:\n"+msg3);

return(msg3);



}//end function reformatPn



//for TSLA data - geographic
/// 1.  convert to camel case
/// 2.  change single dash to double dash ( but not in date ranges )






//for TSLA data - geographic
/// 1.  convert to camel case
/// 2.  change single dash to double dash ( but not in date ranges )
function reformatGeo(str) {
//alert("reformat\n"+str);

var s =  new String(str);
    s =  s.toLowerCase();
//alert("s="+s);

var a = new Array();
    a = s.split(" ");

var msg = new String();
var msg2 = new String();
var msg3 = new String();
var msg4 = new String();

var t = new String();
var u = new String();

for ( i=0;i<a.length;i++) {
	t = a[i];
	t = t.substring(0,1).toUpperCase();
	u = a[i];
	u = u.substring(1);
	msg += " "+t+u;
	}

msg=msg.substring(1);
//alert("msg:\n"+msg);

a = msg.split("/");

for (i=0;i<a.length;i++){
	t = a[i];
	t = t.substring(0,1).toUpperCase();
	u = a[i];
	u = u.substring(1);
	msg2 += "/"+t+u;
	}
msg2=msg2.substring(1);
//alert("msg2:\n"+msg2);
 
a = msg2.split("(");

for (i=0;i<a.length;i++){
	t = a[i];
	t = t.substring(0,1).toUpperCase();
	u = a[i];
	u = u.substring(1);
	msg3 += "("+t+u;
	}
msg3=msg3.substring(1);
//alert("msg3:\n"+msg3);

msg3 = msg3.replace(/ - /gi," -- ");

return(msg3);
}//end function reformatGeo
