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

<html>
<head>
<title>
page_01
</title>
<link href="vv_workbook.css" type="text/css" rel="stylesheet">

<script>
parent.L.thisDocument = parent.U.document;

//document.forms[0].VVcomment_04.value HIDDEN  VVcomment_04 validation string

var VVcomment_04 = new String('');
    VVcomment_04 = "<!-- PAGE VALIDATION :";
    VVcomment_04 += parent.U.document.UF.validate_page_begin.value+":";
    VVcomment_04 += parent.U.document.UF.validate_page_01.value+":";
    VVcomment_04 += parent.U.document.UF.validate_page_02.value+":";
    VVcomment_04 += parent.U.document.UF.validate_page_03.value+":";
    VVcomment_04 += parent.U.document.UF.validate_page_04.value+":";
    VVcomment_04 += parent.U.document.UF.validate_page_05.value+":";
    VVcomment_04 += parent.U.document.UF.validate_page_06.value+":";
    VVcomment_04 += " -->";

var STATUS = new Array(
	"-----Incomplete-----"
	,"Complete"
	);

function checkValStatusBegin() {
	document.write(STATUS[parent.U.document.UF.validate_page_begin.value]);
}//end function

function checkValStatus1() {
	document.write(STATUS[parent.U.document.UF.validate_page_01.value]);
}//end function

function checkValStatus2() {
	document.write(STATUS[parent.U.document.UF.validate_page_02.value]);
}//end function

function checkValStatus3() {
	document.write(STATUS[parent.U.document.UF.validate_page_03.value]);
}//end function

function checkValStatus4() {
	document.write(STATUS[parent.U.document.UF.validate_page_04.value]);
}//end function

function checkValStatus5() {
	document.write(STATUS[parent.U.document.UF.validate_page_05.value]);
}//end function

function checkValStatus6() {
	document.write(STATUS[parent.U.document.UF.validate_page_06.value]);
}//end function



</script>


</head>


<script>document.write('<body onload="load_DF_form();"  bgcolor="'+parent.adb_background_color+'" >');</script>

<font face="arial" size="3">
<center><font face="arial">
<h2> <script> document.write(parent.adb_project_name); </script>
 Final Page </h2>
</center>

<form name="DF"  action="xml_save.php" method="POST">

<script>
document.write('<input type="hidden"  name="VVcomment_04" value="'+VVcomment_04+'" >');
</script> 

<table class="bgINNER"  border="0" cellpadding="2" cellspacing="1" width="98%" xbgcolor="ddeeff">
<tr class="bgstandard"><td colspan="3">

This is where we will submit the final form when all pages are Complete.


</td></tr>
<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>



<tr class="bgstandard">
<td><font face="arial" size="2" color="000000" ><b></u>
&nbsp;
</td>
<td>&nbsp;
&nbsp;</td>
<td>&nbsp</td>
</tr>
<tr class="bgstandard">
<td valign="top"><font face="arial" size="2" color="000000" ><b></u>
Page
</td>
<td><font face="arial" size="2" color="000000" ><b></u>
Validation Status <br>All pages should be in status Complete.
<br>Incomplete may indicate that  you have not saved that particular page.
</td>

<td>&nbsp</td>
</tr>


<tr class="bgstandard">
<td><font face="arial" size="2" color="000000" ><b></u>
Begin
</td>
<td><font face="arial" size="2" color="000000" ><b></u>
<script>
checkValStatusBegin()
</script>
&nbsp;</td>
<td>&nbsp</td>
</tr>

<tr class="bgstandard">
<td><font face="arial" size="2" color="000000" ><b></u>
Page 1
</td>
<td><font face="arial" size="2" color="000000" ><b></u>
<script>
checkValStatus1()
</script>
&nbsp;</td>
<td>&nbsp</td>
</tr>

<tr class="bgstandard">
<td><font face="arial" size="2" color="000000" ><b></u>
Page 2
</td>
<td><font face="arial" size="2" color="000000" ><b></u>

<script>
checkValStatus2();
</script>
&nbsp;</td>
<td>&nbsp</td>
</tr>

<tr class="bgstandard">
<td><font face="arial" size="2" color="000000" ><b></u>
Page 3
</td>
<td><font face="arial" size="2" color="000000" ><b></u>
<script>
checkValStatus3();
</script>
&nbsp;</td>
<td>&nbsp</td>
</tr>

<tr class="bgstandard">
<td><font face="arial" size="2" color="000000" ><b></u>
Page 4
</td>
<td><font face="arial" size="2" color="000000" ><b></u>
<script>
checkValStatus4();
</script>
&nbsp;</td>
<td>&nbsp</td>
</tr>

<tr class="bgstandard">
<td><font face="arial" size="2" color="000000" ><b></u>
Page 5
</td>
<td><font face="arial" size="2" color="000000" ><b></u>
<script>
checkValStatus5();
</script>
&nbsp;</td>
<td>&nbsp</td>
</tr>

<tr class="bgstandard">
<td><font face="arial" size="2" color="000000" ><b></u>
Page 6
</td>
<td><font face="arial" size="2" color="000000" ><b></u>
<script>
checkValStatus6();
</script>
&nbsp;</td>
<td>&nbsp</td>
</tr>


<tr class="bgstandard">
<td><font face="arial" size="2" color="000000" ><b></u>
&nbsp;
</td>
<td>&nbsp;
&nbsp;</td>
<td>&nbsp</td>
</tr>

<tr class="bgstandard">
<td colspan="3">
<input type="button" name="B2" 
value="View MODS TAGS" class="buttonnw"
onclick="buildModsTags(2)">
&nbsp;&nbsp;

<p><input type="button" name="Bx1" 
value="Create Incomplete XML File" class="buttonnw"
onclick="doSaveXML(2)"
>&nbsp;&nbsp;
&nbsp;&nbsp;
 <p><input type="button" name="Bx2" 
value="Create FINAL XML File with validation" class="buttonnw"
onclick="doSaveXML(0)"
>
<!---
&nbsp;&nbsp;
<p><input type="button" name="B2wb" 
value="Display XML as HTML and use View Source to retrieve the XML file" class="buttonnw"
onclick="buildModsTags(0)">
&nbsp;&nbsp;
--->
&nbsp<font face="arial" size="1"></font></td>
</tr>





<tr class="bgstandard">
<td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
</tr>

<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>






<tr class="bgstandard"><td colspan="3" align="left">
To properly save your file to your computer, please use the following:<br>
<script>
////document.write("<br>&nbsp;&nbsp;&nbsp;DIRECTORY: <b>"+parent.U.document.UF.XMLPATHFULL.value+"</b>");
/////document.write("<br>&nbsp;&nbsp;&nbsp;FILENAME: <b>"+parent.U.document.UF.XMLBASE.value+"0000.xml</b>");
document.write("<br>&nbsp;&nbsp;&nbsp;FILENAME: <b>"+parent.U.document.UF.XMLmaster_simple.value+"</b>");
</script>
<!---hidden value for debug purposes--->
<input type="hidden" name="validate_page_final" value="">
<p>Place this file in the directory of your choice. 
<br>If you are unsure about where to save your work, save the file to your desktop and later move it to the proper folder.
<p>If you do not save this file, you will <b>lose</b> your work.
</td></tr>


<tr class="bgstandard"> <td>&nbsp</td><td>&nbsp</td><td>&nbsp</td> </tr>
<tr class="greenrow"><td colspan="3" >&nbsp;</td></tr>
<tr class="bgstandard"> <td>&nbsp</td><td>&nbsp</td><td>&nbsp</td> </tr>
</table>
<!---hidden value for debug purposes--->
<input type="hidden" name="validate_page_final" value="">

<!--- hidden values to be passed to xml_save.php ----------->
<input type="hidden" name="sHeader" value=""> 
<input type="hidden" name="sCloser" value=""> 
<input type="hidden" name="sPage_01" value=""> 
<input type="hidden" name="sPage_02" value=""> 
<input type="hidden" name="sPage_03" value=""> 
<input type="hidden" name="sPage_04" value=""> 
<input type="hidden" name="sPage_05" value=""> 
<input type="hidden" name="sPage_06" value=""> 
<input type="hidden" name="sPage_07" value=""> 
<input type="hidden" name="sPage_08" value=""> 
<input type="hidden" name="sPage_09" value=""> 
<input type="hidden" name="sPage_10" value=""> 
<input type="hidden" name="sPage_11" value=""> 
<input type="hidden" name="sPage_12" value=""> 
<input type="hidden" name="sPage_13" value=""> 
<input type="hidden" name="sPage_14" value=""> 

<input type="hidden" name="myfilename" value="">


</form name="forms[0]">

<center><font face="arial">
<h2> <script> document.write(parent.adb_project_name); </script></h2>
</center>


<script>

function load_UF_form() {
parent.U.document.UF.validate_page_final.value = document.DF.validate_page_final.value
parent.U.document.UF.VVcomment_04.value = document.DF.VVcomment_04.value
return;
}

function load_DF_form() {
document.DF.validate_page_final.value = parent.U.document.UF.validate_page_final.value
return;
}

function doSaveXML(N){


//N="0" - real file download with validation
//N="2" - incomplete file download with no validation

//alert ("doSaveXML("+N+")" );




//document.forms[0].action ="myphp/test_12_p.php";
///alert ("doSaveXML: document.forms[0].action="+document.forms[0].action );
///num = 0 raw
///num = 1 html
///num = 2 raw but no validation
///num = 10 - Test raw with no validation
var num = new Number(N);


var VALIDATION = 0;

//alert ( "num="+num);

      if (    parent.U.document.UF.validate_page_begin.value=="0" 
	    ||  parent.U.document.UF.validate_page_01.value=="0" 
	    ||  parent.U.document.UF.validate_page_02.value=="0" 
	    ||  parent.U.document.UF.validate_page_03.value=="0" 
	    ||  parent.U.document.UF.validate_page_04.value=="0" 
	    ||  parent.U.document.UF.validate_page_05.value=="0" 
	    ||  parent.U.document.UF.validate_page_06.value=="0" 
	)   {
		VALIDATION = 0;//at least one incomplete
	}else {	
		VALIDATION = 1;//all are complete
	}

if (parent.U.document.UF.validate_page_final.value == 1 ) {//debug short cut
	VALIDATION = 1; //pretend they are all complete
	}

if (num==10) {
	document.forms[0].action = "saveXML_10.php";
	VALIDATION = 1;  //pretend they are all complete
	}

if( num == 0 && VALIDATION == 0 ) {
	alert ("One of your pages is incomplete.\n\nPlease finish your work before saving\n\nor use the \"Create Incomplete XML File\" button\n\nto check your work.");
	return;
} else {

//----------------------------------------------------

var hps= new Array();
var aps_01= new Array();
var aps_02= new Array();
var aps_03= new Array();
var aps_04= new Array();
var aps_05= new Array();
var aps_06= new Array();
var aps_07= new Array();
var aps_08= new Array();
var aps_09= new Array();
var aps_10= new Array();
var aps_11= new Array();
var aps_12= new Array();
var aps_13= new Array();
var aps_14= new Array();
var cps= new Array();

var HPS= new String("");
var APS_01= new String("");
var APS_02= new String("");
var APS_03= new String("");
var APS_04= new String("");
var APS_05= new String("");
var APS_06= new String("");
var APS_07= new String("");
var APS_08= new String("");
var APS_09= new String("");
var APS_10= new String("");
var APS_11= new String("");
var APS_12= new String("");
var APS_13= new String("");
var APS_14= new String("");
var CPS= new String("");

    


    hps = parent.L.buildTagsArray_header(0);
    aps_01 = parent.L.buildTagsArray_titleInfo(0);
    aps_02 = parent.L.buildTagsArray_name(0);
    aps_03 = parent.L.buildTagsArray_originInfo(0);
    aps_04 = parent.L.buildTagsArray_language(0);
    aps_05 = parent.L.buildTagsArray_typeOfResource(0);
    aps_06 = parent.L.buildTagsArray_genre(0);
    aps_07 = parent.L.buildTagsArray_physicalDescription(0);
    aps_08 = parent.L.buildTagsArray_abstract(0);
    aps_09 = parent.L.buildTagsArray_subject(0);
    aps_10 = parent.L.buildTagsArray_relatedItem(0);
    aps_11 = parent.L.buildTagsArray_identifier(0);
    aps_12 = parent.L.buildTagsArray_location(0);
    aps_13 = parent.L.buildTagsArray_recordInfo(0);
    aps_14 = parent.L.buildTagsArray_accessCondition(0);

    cps = parent.L.buildTagsArray_closer(0);


for ( i=0; i< hps.length; i++ ) { HPS += hps[i]; }
for ( i=0; i< aps_01.length; i++ ) { APS_01 += aps_01[i]; }
for ( i=0; i< aps_02.length; i++ ) { APS_02 += aps_02[i]; }
for ( i=0; i< aps_03.length; i++ ) { APS_03 += aps_03[i]; }
for ( i=0; i< aps_04.length; i++ ) { APS_04 += aps_04[i]; /*alert("aps_04["+i+"]="+aps_04[i])*/}
//alert("APS_04=\n"+APS_04);
APS_04 = APS_04.replace(/&lt;br>/g,"\r\n"); 
APS_04 = APS_04.replace(/<br>/g,""); 
//alert("APS_04=\n"+APS_04);
for ( i=0; i< aps_05.length; i++ ) { APS_05 += aps_05[i]; }
for ( i=0; i< aps_06.length; i++ ) { APS_06 += aps_06[i]; }
for ( i=0; i< aps_07.length; i++ ) { APS_06 += aps_07[i]; }
for ( i=0; i< aps_08.length; i++ ) { APS_06 += aps_08[i]; }
for ( i=0; i< aps_09.length; i++ ) { APS_06 += aps_09[i]; }
for ( i=0; i< aps_10.length; i++ ) { APS_06 += aps_10[i]; }
for ( i=0; i< aps_11.length; i++ ) { APS_06 += aps_11[i]; }
for ( i=0; i< aps_12.length; i++ ) { APS_06 += aps_12[i]; }
for ( i=0; i< aps_13.length; i++ ) { APS_06 += aps_13[i]; }
for ( i=0; i< aps_14.length; i++ ) { APS_06 += aps_14[i]; }
for ( i=0; i< cps.length; i++ ) { CPS += cps[i]; }

document.forms[0].sHeader.value= HPS;
document.forms[0].sPage_01.value= APS_01;
document.forms[0].sPage_02.value= APS_02;
document.forms[0].sPage_03.value= APS_03;
document.forms[0].sPage_04.value= APS_04;
document.forms[0].sPage_05.value= APS_05;
document.forms[0].sPage_06.value= APS_06;
document.forms[0].sPage_07.value= APS_07;
document.forms[0].sPage_08.value= APS_08;
document.forms[0].sPage_09.value= APS_09;
document.forms[0].sPage_10.value= APS_10;
document.forms[0].sPage_11.value= APS_11;
document.forms[0].sPage_12.value= APS_12;
document.forms[0].sPage_13.value= APS_13;
document.forms[0].sPage_14.value= APS_14;
document.forms[0].sCloser.value= CPS;


var str_filename= new String();
    str_filename= parent.U.document.UF.XMLmaster_simple.value;/////parent.U.document.UF.XMLBASE.value+"0000.xml";
    document.forms[0].myfilename.value = str_filename;

//alert ("document.forms[0].myfilename.value=\n"+document.forms[0].myfilename.value);
document.forms[0].submit();
}//end if

}//end function





function buildModsTags(N) {



var num = new Number();
    num = N;

///num=2 for incomplete tags
if (num < 2 ) {
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//before writing anything, make sure all required fields are populated

if ( parent.U.document.UF.validate_page_begin.value == "0" ) {
	alert("You have not completed required fields on the begin page.");
	return false;
	}
if ( parent.U.document.UF.validate_page_01.value == "0" ) {
	alert("You have not completed required fields on page 1.");
	return false;
	}

if ( parent.U.document.UF.validate_page_02.value == "0" ) {
	alert("You have not completed required fields on page 2.");
	return false;
	}

if ( parent.U.document.UF.validate_page_03.value == "0" ) {
	alert("You have not completed required fields on page 3.");
	return false;
	}

if ( parent.U.document.UF.validate_page_04.value == "0" ) {
	alert("You have not completed required fields on page 4.");
	return false;
	}

if ( parent.U.document.UF.validate_page_05.value == "0" ) {
	alert("You have not completed required fields on page 5.");
	return false;
	}


if ( parent.U.document.UF.validate_page_06.value == "0" ) {
	alert("You have not completed required fields on page 6.");
	return false;
	}


//var tch=true;
//tch = checkAllRequiredElements();
//if (!tch) return;
//if (!confirm("tch="+tch))return;
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

}
if (num==2) num=1;

load_UF_form();

var aps_01= new Array();
var aps_02= new Array();
var aps_03= new Array();
var aps_04= new Array();
var aps_05= new Array();
var aps_06= new Array();
var aps_07= new Array();
var aps_08= new Array();
var aps_09= new Array();
var aps_10= new Array();
var aps_11= new Array();
var aps_12= new Array();
var aps_13= new Array();
var aps_14= new Array();

var hps= new Array();
var cps= new Array();
    
    hps    = parent.L.buildTagsArray_header(num);
    aps_01 = parent.L.buildTagsArray_titleInfo(num);
    aps_02 = parent.L.buildTagsArray_name(num);
    aps_03 = parent.L.buildTagsArray_originInfo(num);
    aps_04 = parent.L.buildTagsArray_language(num);
    aps_05 = parent.L.buildTagsArray_typeOfResource(num);
    aps_06 = parent.L.buildTagsArray_genre(num);
    aps_07 = parent.L.buildTagsArray_physicalDescription(num);
    aps_08 = parent.L.buildTagsArray_abstract(num);
    aps_09 = parent.L.buildTagsArray_subject(num);
    aps_10 = parent.L.buildTagsArray_relatedItem(num);
    aps_11 = parent.L.buildTagsArray_identifier(num);
    aps_12 = parent.L.buildTagsArray_location(num);
    aps_13 = parent.L.buildTagsArray_recordInfo(num);
    aps_14 = parent.L.buildTagsArray_accessCondition(num);
    cps    = parent.L.buildTagsArray_closer(num);

//alert("aps_06=\n"+aps_06);
//=================================================

if (num == "0") {

document.write('header("Content-type: application/html");');
document.write('\n\n');	
document.write('<p>\n\n');
alert("Use View Source in HTML frame to see XML tags."
+"\n\nAt the top of the View Source text file you will see:"
+"\n\n                header(\"Content-type: application/html\");"
+"\n                  (blank line)"
+"\n                  <p> "
+"\n\nDelete these three lines and then save the text file as an xml file.")
}else{


document.write('<input type="button" name="BBACK" onclick="javascript: history.back()" value="BACK"><P>');
document.write('<font face="Elephant" size="3" color="a00000">'+parent.adb_project_name+' Workbook, Final Page <p></font>');
document.write('<font face="Elephant" size="3" color="a00000">PRELIMINARY COPY FOR DEMONSTRATION PURPOSES ONLY</font><p>'
		+"This is the generated xml script.  Values you entered are highlighted in red."
		+"<HR>");


}


var  abreak = new String("");

if (num != "0") {
    abreak = "<BR>";
	}

for (i=0;i<hps.length;i++) {
	var vps = new String(hps[i]);
 	document.write(abreak+vps);
	}





for (i=0;i<aps_01.length;i++) {
	var vps = new String(aps_01[i]);
	document.write(abreak+vps);
	}

for (i=0;i<aps_02.length;i++) {
	var vps = new String(aps_02[i]);
	document.write("<br>"+vps);
	}

for (i=0;i<aps_03.length;i++) {
	var vps = new String(aps_03[i]);
	document.write(abreak+vps);
	}

for (i=0;i<aps_04.length;i++) {
	var vps = new String(aps_04[i]);
	document.write(abreak+vps);
	}

for (i=0;i<aps_05.length;i++) {
	var vps = new String(aps_05[i]);
	document.write("<br>"+vps);
	}


for (i=0;i<aps_06.length;i++) {
	var vps = new String(aps_06[i]);
	document.write(abreak+vps);
	}

for (i=0;i<aps_07.length;i++) {
        var vps = new String(aps_07[i]);
        document.write(abreak+vps);
        }

for (i=0;i<aps_08.length;i++) {
        var vps = new String(aps_08[i]);
        document.write(abreak+vps);
        }

for (i=0;i<aps_09.length;i++) {
        var vps = new String(aps_09[i]);
        document.write(abreak+vps);
        }

for (i=0;i<aps_10.length;i++) {
        var vps = new String(aps_10[i]);
        document.write(abreak+vps);
        }

for (i=0;i<aps_11.length;i++) {
        var vps = new String(aps_11[i]);
        document.write(abreak+vps);
        }

for (i=0;i<aps_12.length;i++) {
        var vps = new String(aps_12[i]);
        document.write(abreak+vps);
        }

for (i=0;i<aps_13.length;i++) {
        var vps = new String(aps_13[i]);
        document.write(abreak+vps);
        }

for (i=0;i<aps_14.length;i++) {
        var vps = new String(aps_14[i]);
        document.write(abreak+vps);
        }


for (i=0;i<cps.length;i++) {
	var vps = new String(cps[i]);
	document.write(abreak+vps);
	}



}//end function




</script>
	


</body>
</html>

