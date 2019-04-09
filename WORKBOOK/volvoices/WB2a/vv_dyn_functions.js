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


////////////functions to support building dynamic form pages


/*
function update_page_validation(str_pagename,alpha) {
function get_page_validation(str_pagename) {
function update_block_iteration(str_blockname, iteration_amount) {
function get_block_iteration(str_blockname) {
function returnElementIndex(n,str) {
function populate_DF_webform_from_UF_blocklist(block_list_name,filter_str){
function populate_DF_blocklist_from_DF_webform(block_list_name,filter_str ) {
function populate_UF_blocklilst_from_DF_blocklist(block_list_name) {
*/

var MODS_TAGS = new Array(
 "zero"
,"header"
,"titleInfo" 		
,"name"
,"typeOfResource" 
,"genre"
,"originInfo"
,"language"
,"physicalDescription"
,"abstract"
,"tableOfContents"
,"targetAudience"
,"note"
,"subject"
,"classification"
,"relatedItem"
,"identifier"
,"location"
,"accessCondition"
,"part"
,"extension"
,"recordInfo"
,"theEnd"
);

//=====================================================================
//=====================================================================
function check_vv_dyn_functions(){
alert("this function vv_dyn_functions.js");
}


//=====================================================================
//=====================================================================
//////PAGE VALIDATION//////if you dynamically write this, it must be done last
//A= uppercase page is valid
//a= lowercase page is not valid
//use update_page_validation('titleInfo',"B")
//use update_page_validation('name',"C")
function update_page_validation(str_pagename,alpha) {

var n = 0;
var s = new String(str_pagename);

var A = new Array();
    A = MODS_TAGS;

for (i=0;i<A.length;i++) {
	if (A[i]==s) {n=i;}
	}
//alert("s = "+s+"\n n="+n);


var comment_04Block = new String(parent.U.document.UF.VVcomment_04.value);

//alert("parent.U.document.UF.VVcomment_04.value=\n"+ parent.U.document.UF.VVcomment_04.value);

if ( comment_04Block == "" ) {//some reload records do not have this
        comment_04Block = "<!-- PAGE VALIDATION :a:b:c:d:e:f:g:h:i:j:k:l:m:n:o: -->";//not validated
     ///comment_04Block = "<!-- PAGE VALIDATION :A:B:C:D:E:F:G:H:I:J:K:L:M:N:O: -->";//validated
     ///comment_04Block = "<!-- PAGE VALIDATION :0:0:0:0:0:0:0:0:0:0:0:0:0:0:0: -->";//old not validated
     ///comment_04Block = "<!-- PAGE VALIDATION :1:1:1:1:1:1:1:1:1:1:1:1:1:1:1: -->";//old validated
     ///0,1 is easier to code, alphabets are easier to see...
	}


var a04 = new Array();
    a04 = comment_04Block.split(":");

var retstr = new String("");


var msg = new String("comment_04Block=\n");
    msg += comment_04Block+"\n";


a04[n]=alpha;
//alert("update_page_validation: a04["+n+"]="+a04[n]);
    
//retstr =   " <!-- PAGE VALIDATION ";
for (i=0;i<a04.length;i++) {
	msg += "\na04["+i+"]="+a04[i];
	retstr += ":" +a04[i];
	}
retstr=retstr.substring(1);
parent.U.document.UF.VVcomment_04.value = retstr; 
//alert("comment_04Block=\n"+comment_04Block+"\n\n"+msg +"\n\nretstr=\n"+retstr
//+"\n\nparent.U.document.UF.VVcomment_04.value=\n"+parent.U.document.UF.VVcomment_04.value);



parent.U.document.UF.VVcomment_04.value = retstr; 
}//end function update_page_validation


//=====================================================================
//=====================================================================
//returns the alpha indicator of status of page validation for str_pagename
//usage get_page_validation("titleInfo")
function get_page_validation(str_pagename) {

var n = 0;
var s = new String(str_pagename);
var alpha = new String();

var A = new Array();
    A = MODS_TAGS;

for (i=0;i<A.length;i++) {
        if (A[i]==s) {n=i;}
        }

var comment_04Block = new String(parent.U.document.UF.VVcomment_04.value);
//alert("s = "+s+"\n n="+n+"\n\ncomment_04Block ="+comment_04Block);

var a04 = new Array();
    a04 = comment_04Block.split(":");

var retNum = new Number(0);
var msg = new String("");
retstr =   " <!-- PAGE VALIDATION ";
for (i=0;i<a04.length;i++) {
        msg += "\na04["+i+"]="+a04[i];
        if ( n == i) { alpha = a04[i]; msg += " *** " }
        }
//alert(msg);

return(alpha);

}



//=====================================================================
//=====================================================================
//usage update_block_iteration("subject","1") add one
//usage update_block_iteration("subject","-1") remove one
//usage update_block_iteration("subject","0") remove all - set to 1, data has been cleared out
function update_block_iteration(str_blockname, iteration_amount) {

var N = new Number(iteration_amount);
var M = new Number(0);
    

var n = 0;
var s = new String(str_blockname);

var A = new Array();
    A = MODS_TAGS;

for (i=0;i<A.length;i++) {
	if (A[i]==s) {n=i;}
	}
//alert("s = "+s+"\n n="+n);


var comment_05Block = new String(parent.U.document.UF.VVcomment_05.value);

var a05 = new Array();
    a05 = comment_05Block.split(":");

var retstr = new String("");


var msg = new String("comment_05Block=\n");
    msg += comment_05Block+"\n";


//alert("1. update_block_iteration: a05["+n+"]="+a05[n]);
M = Number(a05[n]);
if (N == 0) {
	M=1; //write first block sans data (clearPage)
}else{
	M = M+N; // add or subtract a block
}
a05[n]=M;
//alert("2. update_block_iteration: a05["+n+"]="+a05[n]);
    
//retstr =   " <!-- BLOCK ITERATION ";
for (i=0;i<a05.length;i++) {
	msg += "\na05["+i+"]="+a05[i]+" "+A[i];
	retstr += ":" +a05[i];
	}
//alert("update\n"+msg+"\n\nretstr="+retstr);
retstr=retstr.substring(1);
parent.U.document.UF.VVcomment_05.value = retstr; 
//alert("comment_05Block=\n"+comment_05Block+"\n\n"+msg +"\n\nretstr=\n"+retstr
//+"\n\nparent.U.document.UF.VVcomment_05.value=\n"+parent.U.document.UF.VVcomment_05.value);


//do not return retstr, just do the update to parent.U.document.UF.VVcomment_05.value
////return(retstr);

}


//=====================================================================
//=====================================================================
//returns the numeric value of iterations on str_blockname
//usage get_block_iteration("relatedItem")
function get_block_iteration(str_blockname) {

var n = 0;
var s = new String(str_blockname);

var A = new Array();
    A = MODS_TAGS;

for (i=0;i<A.length;i++) {
	if (A[i]==s) {n=i;}
	}

var comment_05Block = new String(parent.U.document.UF.VVcomment_05.value);
//alert("s = "+s+"\n n="+n+"\n\ncomment_05Block ="+comment_05Block);

var a05 = new Array();
    a05 = comment_05Block.split(":");

var retNum = new Number(0);
var msg = new String("");
retstr =   " <!-- BLOCK ITERATION ";
for (i=0;i<a05.length;i++) {
	msg += "\na05["+i+"]="+a05[i] +" "+A[i];
	if ( n == i) { retNum = Number(a05[i]); }
	}
//alert(msg);

return(retNum);

}


//=====================================================================
//=====================================================================
//given name of form[N].elements[i] based on form var name
//usage  val = parent.L.returnElementIndex(0,"sentinel_01");
function returnElementIndex(n,str) {

var N = new Number(n);
var NAME = new String(str);
for (i=0;i<thisDocument.forms[N].elements.length; i++) {
	if (thisDocument.forms[N].elements[i].name == NAME ){
		//alert("document.forms[N]."+NAME+" has an index of "+i);
		return(i);
	}
}
return (-1);
}

//populate DF form vars from UF block list
//how this works:
//	at the beginning of dynamically written form vars put static sentinel_00 form var
//	at the end       of dynamically written form vars put static sentinel_01 form var
//	use returnElementIndex to get the indices of sentinel_00(beg) and sentinel_01(end)
//
//	the array to be populated is thisDocument.forms[0].elements[i] objects where 
//      the index value of i goes from the begin to end of dynamic form vars ( read the code! )
//      then in the block_list you have the same one dim array of values split on split_token
//      match up the 2 one dimensional arrays with for(i=beg;i<end;i++)...
//      this way you do not have to worry about form var names except for sentinel_00 and sentinel_01
//      and I do not have to write that painful custom code for each dynamic page
//      (this function inspired by figuring out I had to write 12 dynamic pages)

//usage parent.L.populate_DF_from_UF_blocklist("ac_block_list");
function populate_DF_webform_from_UF_blocklist(block_list_name,filter_str){

var strFilter = new String("");
if (typeof(filter_str)!= "undefined" ) {
	strFilter = filter_str;
}else{
	strFilter = "dyn_"; 
}
//alert("strFilter="+strFilter);

var beg = returnElementIndex(0,"sentinel_00");
    beg++;
var end = returnElementIndex(0,"sentinel_01");

var BL = new String();
    BL = "parent.U.document.UF."+block_list_name+".value";
var str = new String("");
    str = eval(BL);
//alert("parent.L.populate_DF_webform_from_UF_blocklist:\n\nstrFilter="
//+strFilter+"\n\nparent.U.document.UF."+block_list_name+".value = "+BL+"\n\n"+str);


var A = new Array();
    A = str.split(parent.U.split_token);
var a = 0;
var s = new String("");
var temp = new String("");

//alert("parent.L.populate_DF_webform_from_UF_blocklist:\n\nA.length="+A.length);

for(i=beg;i<end;i++) {
	s = thisDocument.forms[0].elements[i].name;
	if (s.indexOf(strFilter) == 0 ) {
		if(a<A.length) {//when you add a block, you have empty input boxes that cannot be filled from the A array
			temp = A[a++];
			if (temp == "empty_string") { temp = ""; }
			thisDocument.forms[0].elements[i].value = temp;
			//alert("document.forms[0].elements["+i+"].value="+thisDocument.forms[0].elements[i].value);
			}
		}//end if a<A.length
	}

}//end function populate_DF_webform_from_UF_blocklist


//=====================================================================
//=====================================================================
//populate DF blocklist from webform
//how this works:
//pick up all form vars between sentinel_00 and sentinel_01
//filter by element[i].name starting with "dyn_"
//add to blockList string, separated by parent.U.split_token
//usage document.DF.lu_block_list.value = parent.L.populate_DF_blocklist_from_DF_webform("lu_block_list");

function populate_DF_blocklist_from_DF_webform(block_list_name,filter_str ) {

var strFilter = new String("");
if (typeof(filter_str)!= "undefined" ) {
	strFilter = filter_str;
}else{
	strFilter = "dyn_"; 
}
//alert("strFilter="+strFilter);

var beg = returnElementIndex(0,"sentinel_00");
    beg++;
var end = returnElementIndex(0,"sentinel_01");

//alert("populate_DF_blocklist_from_DF_webform\n\nstrFilter="+strFilter+"\nbeg="+beg+"\nend="+end);

var blockList = new String("");

var s = new String("");
var temp = new String("");

for(i=beg;i<end;i++) {
        s = thisDocument.DF.elements[i].name;

        if ( s.indexOf(strFilter) == 0 ) {
                temp = thisDocument.DF.elements[i].value;
                //alert("thisDocument.DF.elements["+i+"].name="+thisDocument.DF.elements[i].name
                 //    +"\nthisDocument.DF.elements["+i+"].value="+thisDocument.DF.elements[i].value);
                if ( temp == "") { temp = "empty_string"; }
                blockList += parent.U.split_token + temp;
                }
}

blockList =blockList.substring(parent.U.split_token.length);
//alert("populate_DF_blocklist_from_DF_webform\n\nblockList = "+blockList);

return(blockList);


}//end function populate_DF_blocklist_from_DF_webform


//=====================================================================
//=====================================================================
function populate_UF_blocklist_from_DF_blocklist(block_list_name) {

var strU = new String("");
var strD = new String("");
var strW = new String("");

strU = "parent.U.document.UF."+block_list_name+".value";
strD = "parent.D.document.DF."+block_list_name+".value";
strW = strU+"="+strD;
//alert("strW=\n"+strW);

}//end function populate_UF_blocklilst_from_DF_blocklist

/*--------------------------------------------------
var str = "1a";
var Astr = new String(str);
    Astr = Astr.replace(/[0-9]/g,"");
var Nstr = new String(str);
    Nstr = Nstr.replace(/[^0-9]/g,"");
//alert ("str="+str+"\nAstr="+Astr+"\nNstr="+Nstr);
// Astr=a, Nstr=1
---------------------------------------------------*/
