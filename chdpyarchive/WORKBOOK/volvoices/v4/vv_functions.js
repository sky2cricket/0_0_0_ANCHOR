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


