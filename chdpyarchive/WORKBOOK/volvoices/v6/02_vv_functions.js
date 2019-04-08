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

}//end function fixDoublBackSlashes


/*

//found at http://www.jsr.communitech.net/index3.htm
// Author: Martin Webb (martin@irt.org)

*/
//Prevent cut-and-paste which introduces characters that Jody cannot process
//usage:  onmousedown="parent.L.stopCutAndPaste(this,event)"

function stopCutAndPaste(sbox,event) {
//alert("event.button="+event.button+"\n event.ctrlKey="+event.ctrlKey);

if ( event.button == 2 ) {
alert("Cut and paste not allowed here.);
sbox.value="";
return false;
}
return true;
}


//usage:  onfocus="parent.L.stopCntlV(this,event)"
       // onKeyPress="return parent.L.disableCtrlKeyCombination(this,event);"
       // onKeyDown="return parent.L.disableCtrlKeyCombination(this,event);"
function stopCntlV(sbox,event) {
var key;
var isCtrl;
var e = event;

if(window.event) {
   key = window.event.keyCode;     //IE
   if(window.event.ctrlKey){ isCtrl = true; }
   else {isCtrl = false;}
} else {
   key = e.which;     //firefox
   if(e.ctrlKey) {isCtrl = true;}
   else {isCtrl = false;}
}

//if ctrl is pressed check if other key is forbiddenKey
if(isCtrl) {
   alert("Cut and paste is not allowed here.");
   return false;
}
return true;
}//end function stopCntlV



//usage onblue = "parent.L.test_ctrlKey_onBlur(this,event)
function test_ctrlKey_onBlur(sbox,event){

//alert("sbox.value="+sbox.value+"\nevent.button="+event.button+"\n event.ctrlKey="+event.ctrlKey);

}

//usage onkepress="parent.L.testKey(this,event) 
function testKey(sbox, event) {
var ek = new String(event.keyCode);
var ec = new String(event.charCode);
alert( "event.keyCode="+ek
     + "\n event.charCode ="+ec
     + "\n event.ctrlKey  ="+event.ctrlKey
);

return;
}//end function testKey


function stopCNTL(sbox,event) {

alert(event.keyCode);
if ( event.keyCode == 29 ) { alert("keyCode 29") }
if ( event.charCode == 29 ) { alert("charCode 29") }

alert(sbox.value+"\n\n"+event.keyCode);
var msg= new String();

for (i=0;i<sbox.value.length;i++){
msg += "sbox.value["+i+"]="+sbox.value.charAt(i)+"\n";
}
alert(msg);


/*
var e = event;
var c = e.charCode || e.keyCode;

if ( c<32) {alert("c="+c);}

if (e.cntlKey) {
	alert("CNTL");
	sbox.value="";
	return false;
	}
return true;
*/
}



function stopCutAndPaste4(sbox,event) {

if ( event.button == 2 ) {

alert("cut and paste not allowed here.");
return false;
}

//e = sbox.MouseDownEvent;
//button = e.button;



alert("\nnavigator.appName="+navigator.appName +"\n event.button="+event.button);
//if ( event.button == 2 ) return false;
    // +"\n e.which ="+e.which
    // +"\n event.button="+event.button)
var msg = "This is a mousedown event.\n";

if (navigator.appName == 'Netscape' && e.which == 2) {
alert(msg + 'browser: Netscape\ne.which='+e.which+'\nRIGHT CLICK');  
return false;//return false disables the click
}
else if (navigator.appName == 'Netscape' && e.which == 0 ) {
alert(msg + 'browser: Netscape\ne.which='+e.which+'\nLEFT CLICK');  
return true;//return false disables the click
}
else

if (navigator.appName == 'Microsoft Internet Explorer' && event.button==2) {
alert(msg + 'browser: Microsoft IE\nevent.button='+event.button+'\nRIGHT CLICK'); 
return false;//return false disables the click
}
if (navigator.appName == 'Microsoft Internet Explorer' && event.button==1) {
alert(msg + 'browser: Microsoft IE\nevent.button='+event.button+'\nLEFT CLICK'); 
return true;//return false disables the click
}
return true;
}
//document.onmousedown = clickBuster;


// IE LEFT= 1; RIGHT=2;
// NS LEFT=0; RIGHT = 2;
function stopCutAndPaste3(sbox,event) {

//e = sbox.MouseDownEvent;
//button = e.button;

//alert("\nnavigator.appName="+navigator.appName +"\n event.button="+event.button);
    // +"\n e.which ="+e.which
    // +"\n event.button="+event.button)
var msg = "This is a mousedown event.\n";
if ( event.button==2) {
return false;//return false disables the click
}
return true;
}
//document.onmousedown = clickBuster;
