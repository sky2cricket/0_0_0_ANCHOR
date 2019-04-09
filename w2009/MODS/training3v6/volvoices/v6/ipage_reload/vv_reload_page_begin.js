//    vv_reload_page_begin.js
/*
The function tag_data_display_header is called on page_reload_REGEX.htm by button:
<input type="button" name ="Regex06" onclick='tag_data_display_header();' value="pbegin_00">&nbsp;


This function COUNTS the number of times the string <mods:constituent type="local"> 
is found in the mods record.
The original value of numConstuentsTIFF is ignored.

INPUT RAW DATA AT TOP:
----------------------------------
<!-- begin admin db input -->
<!-- Volunteer Voices MODS profile released 14 December 2006 by Melanie Feltner-Reichert --> 
<!-- Volunteer Voices Workbook version 1.0 released 6 February 2007 by Christine Haygood Deane --> 
<!-- Content Contributor: Christine Deane --> 
<!-- Project: Volunteer Voices --> 
<!-- Record Creation Date: Thu Dec 17 17:17:12 EST 2009 --> 
<!-- FILENAME: 0037_000052_000200_0000.xml --> 
<!-- NUMBER_OF_CONSTITUENT_FILES: 1: --> 
<!-- Reload: none --> 
<!-- PAGE VALIDATION :1:1:0:0:0:1:0: --> 

<!-- end admin db input -->
-----------------------------------

GLOBAL XML COMMENT VARIABLES from vv_reload_util.js
var BXMLC = new String("<!-- ");//begin XML comment
var EXMLC = new String(" --->");//end   XML comment

*/

function tag_data_display_header(){
if (!confirm("vv_reload_page_begin.js:\n\ntag_data_display_header()\ncontinue?"))return;


var t= new String(document.DF.chomp.value);
var u= new String();
var v= new String();
var w= new String();
var x= new String();
var y= new String();
var z= new String();


/*------------------------------------------------------------
	old style FILENAME:
<!-- FILENAME:  C:/Scan/01/xml/0012_000033_000044_0000.xml --> 

   	new style FILENAME:
<!-- FILENAME: 0037_000052_000200_0000.xml -->

Because of the problem UNIX "/" vs. Microsoft "\", 
use the xml required directory name to parse on.
--------------------------------------------------------------*/


parent.U.document.UF.admindb_data.value=parent.admindb_data;
if(!confirm("continue?\nRELOAD_SWITCH="+parent.U.document.UF.RELOAD_SWITCH.value))return;

//var str_admindb_data = new String();
//    str_admindb_data = parent.admindb_data;



var today_numeric = new String(parent.U.document.UF.today_numeric.value);
var today_verbose = new String(parent.U.document.UF.today_verbose.value);//set by function get_today_numeric()


alert("vv_reload_page_begin.js:\nfunction tag_data_display_header()"
	+"\n\nparent.admindb_data="+parent.admindb_data
	+"\ntoday_verbose="+today_verbose
	+"\ntoday_numeric="+today_numeric
	);


//PARSE: <!-- FILENAME: 0037_000052_000200_0000.xml -->

var iv0 = t.indexOf("<!-- FILENAME: ")+15;
    u   = t.substring(iv0);
var iv1 = u.indexOf(" -->");
    v   = u.substring(0,iv1);
if(!confirm("vv_reload_page_begin.js:\nfunction tag_data_display_header()"
	//+"\n u=\n"+u
	+"\nVVcomment_01.value (FILENAME: ) = >>"+v+"<<"))return;
parent.U.document.UF.VVcomment_01.value=v;

//PARSE: <!-- NUMBER_OF_CONSTITUENT_FILES: 1: --> 
//This has been wrong so many times, we now count them.

var iv0 = t.indexOf("<mods:identifier");
var iv1 = t.indexOf("</mods:relatedItem");
v=t.substring(iv0,iv1);
//alert("v=\n"+v);
//count constituent files
var ct=0;
while( v.indexOf("local")>-1){
	iv0=v.indexOf("local")+5;
	ct++;
	v=v.substring(iv0);
	}

//alert("ct="+ct);
strCt = new String(ct);
parent.U.document.UF.numConstituentsTIFF.value=strCt;
//alert("VVcomment_02.value (num constit files: ) = >>"+strCt+"<<");
parent.U.document.UF.VVcomment_02.value=strCt;



//PARSE: <!-- Record Creation Date: Thu Dec 17 17:17:12 EST 2009 --> 
//This is the first date this record was worked on.
var D = new Date();
var strD = new String(D);
//alert("strD.length="+strD.length);


var iv0 = t.indexOf("<!-- Record Creation Date: ");
if (iv0 == -1 ){
	v = D;
}else{
	iv0 +=27;
    	u   = t.substring(iv0);
	var iv1 = u.indexOf(" -->");
    	v   = u.substring(0,iv1);
	if (v.length < strD.length) {
		v = strD;
		}
}
//alert("VVcomment_03b.value (Begin Record Creation Date:) = >>"+v+"<<");
parent.U.document.UF.VVcomment_03b.value=v;

//PARSE: <!-- Most Recent Record Creation Date: Tue Jan 5 13:23:48 EST 2010 --> 
//not parsed, just use Date() function

//alert("VVcomment_03d.value (Most Recent Record Creation Date:) = >>"+D+"<<");
parent.U.document.UF.VVcomment_03d.value=D;


//PARSE: <!-- Reload Status: yes --> 
//       <!-- Reload Status: no -->
// not parsed, just compare VVcoment_03b and Date()
// Comparing dates is bogus.  Hard code RELOAD_SWITCH above.
/*------------------------------------------------
if (v == D){
	z="no";
	//parent.U.document.UF.VVcomment_03r.value == "no";
}else{
	z="yes";
	//parent.U.document.UF.VVcomment_03r.value == "yes";
}

parent.U.document.UF.VVcomment_03r.value =z;
//alert("VVcomment_03r.value (Reload:) = >>"+z+"<<");
-------------------------------------------------*/

parent.U.document.UF.VVcomment_03r.value =parent.U.document.UF.RELOAD_SWITCH.value;


//PARSE: <!-- Content Contributor: Christine Deane --> 

var iv0 = t.indexOf("<!-- Content Contributor: ")+26;
    u   = t.substring(iv0);
var iv1 = u.indexOf(" -->");
    v   = u.substring(0,iv1);
//alert("VVcomment_03c.value (Content Contributor:) = >>"+v+"<<");
parent.U.document.UF.VVcomment_03c.value=v;


//PARSE: <!-- Project: Volunteer Voices --> 

var iv0 = t.indexOf("<!-- Project: ")+14;
    u   = t.substring(iv0);
var iv1 = u.indexOf(" -->");
    v   = u.substring(0,iv1);
//alert("VVcomment_03p.value (Project:) = >>"+v+"<<");
parent.U.document.UF.VVcomment_03p.value=v;

//PARSE: <!-- Institution: University of Tennessee, Knoxville -->

var iv0 = t.indexOf("<!-- Institution: ");
if (iv0<0) {//old way
		iv0= t.indexOf("<!-- FILENAME: ")+15;
	    	u   = t.substring(iv0);
    		v   = u.substring(0,4);
}else{//new way
    iv0 = iv0+18;
    u   = t.substring(iv0);
var iv1 = u.indexOf(" -->");
    v   = u.substring(0,iv1);
}

//alert("VVcomment_03i.value (Institution:) = >>"+v+"<<");
parent.U.document.UF.VVcomment_03i.value=v;


//PARSE: <!-- PAGE VALIDATION :1:1:0:0:0:1:0: --> 
//PARSE: <!-- PAGE VALIDATION :1:1:0:0:0:1:0: --> 


//var iv0 = t.indexOf("PAGE VALIDATION")+38;
var iv0 = t.indexOf("<!-- PAGE VALIDATION ")+21;
    u   = t.substring(iv0);
var iv1 = u.indexOf(" -->");
    v   = u.substring(0,iv1);
//if (!confirm("VVcomment_04.value (PAGE VALIDATION:) = >>"+v+"<<"))return;
parent.U.document.UF.VVcomment_04.value=v;




//get XMLFILENAME  and XMLBASE
var iw0 = u.indexOf("FILENAME:")+9;
w = u.substring(iw0);
//alert("0. w=\n"+w);
var iw1 = w.indexOf(" -->");
w = w.substring(0,iw1);
w = w.replace(" ","");
//alert("1. w=\n >>"+w+"<<");

if (w.indexOf("C:")>-1){
	iw0=w.indexOf("xml")+4;
	w = w.substring(iw0);
	}
//alert("2. w=\n >>"+w+"<<");
w=w.replace(" ","");
//alert("3. w=\n >>"+w+"<<");


parent.U.document.UF.XMLFILENAME.value=w;
w = w.replace("0000.xml","");
parent.U.document.UF.XMLBASE.value=w;

if(!confirm("END function tag_data_display_header()\n_vv_reload_page_begin.js"))return;

}//end function tag_data_display_header(){

/*

<!--
?xml version="1.0" encoding="UTF-8"  ?>
 mods:mods xmlns:mods="http://www.loc.gov/mods/v3" 
 xmlns:xlink="http://www.w3.org/1999/xlink" 
 xmlns="http://www.loc.gov/mods/v3" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
 xsi:schemaLocation="http://www.loc.gov/mods/v3 
 http://www.loc.gov/standards/mods/v3/mods-3-2.xsd"
  ID="MODS" version="3.2" >
-->

<!-- begin admin db input -->
<!-- Volunteer Voices MODS profile released 14 December 2006 by Melanie Feltner-Reichert --> 
<!-- Volunteer Voices Workbook version 1.0 released 6 February 2007 by Christine Haygood Deane --> 
<!-- Content Contributor: Christine Deane --> 
<!-- Project: Volunteer Voices --> 
<!-- Record Creation Date: Thu Dec 17 17:17:12 EST 2009 --> 
<!-- FILENAME: 0037_000052_000200_0000.xml --> 
<!-- NUMBER_OF_CONSTITUENT_FILES: 1: --> 
<!-- Reload: none --> 
<!-- PAGE VALIDATION :1:1:0:0:0:1:0: --> 

<!-- end admin db input -->


<!-- original mods_name.txt: This file copied from:
	D:\C_directory\1download\2008_dlxs\090106_xslt\FormWithRules\xmlTemplate\paul_10272006

	mods_all.txt modified with input from admin db Dec 18 2009

     The containing directory for this file now:
	D:\C_directory\1download\2009_wb\MODS\mods_examples

-->

<!-- w2009_Volunteer Voices Web Form Programming 
 provided by University of Tennessee Libraries Digital Library Center 
 (programmer C. H. Deane)  -->
 <!-- w2009_FILENAME: C:/Scan/01/xml/0012_000033_000044_0000.xml  -->  
 <!-- w2009_NUMBER_OF_CONSTITUENT_FILES: 3: -->  
 <!-- w2009_Created by Training Workbook Tue Jan 30 14:37:34 EST 2007 -->  


<!-- START PAGE 01b -->
<mods:titleInfo>
 <mods:title>Test File for w2009</mods:title>
</mods:titleInfo>

...
<mods:relatedItem type="constituent">
<mods:identifier type="local">0012_000033_000044_0001</mods:identifier>
<mods:identifier type="local">0012_000033_000044_0002</mods:identifier>
<mods:identifier type="local">0012_000033_000044_0003</mods:identifier>
</mods:relatedItem >


*/
