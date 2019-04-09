

//vv_decompose_tags.js used by page_reload.htm
//The functions in vv_decompose_tags.js 
//support page_reload.htm 
//and are not used anywhere else


//function generate_file_list_tiff_reload from 
//function generate_file_list_tiff() in page_begin.htm
//but not exactly the same


var DATE = new Date();

function generate_file_list_tiff_reload() {
var str = new String();

var N = 0;

//only load N if you have a good value
if (!isNaN(parent.U.document.UF.numConstituentsTIFF.value ) ) {
    N = Number(parent.U.document.UF.numConstituentsTIFF.value);
}else{
	parent.U.document.UF.numConstituentsTIFF.value = "0";
	return("");
}
var base = parent.U.document.UF.XMLBASE.value;
var append = new String();
var j=0, chop=0;
for ( i=0; i<N; i++ ) {
	j= i+1;
	append = "0000"+String(j);
	chop = append.length -4;
	append=append.substring(chop);
	///alert("tiff file: "+base+append);
	str += ","+base+append;
}
str = str.substring(1);
return str;
}//end function generate_file_list_tiff_reload() 

//global variables defined in vv_decompose_tags.js
var xmlAll = new String();
var xmlCursor = 0;
var localCursor = 0;


///useage: show_xmlCursor(xmlCursor,0);
///debug only
function show_xmlCursor(num,count) {
alert(count+" -- xmlCursor="+num);
return;
}


//get data between tags
/// <mods:title>xxx</mods:title>  return xxx
/// strTagDelim must be UNAMBIGUOUS
/// for example "<mods:title" can mean either <mods:title> or <mods:titleInfo>
/// the mods:something must be complete -- not mods:someth
/// if the entity is sans properties, then use both <mods:something> LT, GT tagdelimiters
/// if the entity contains properties, then must have at least one white space "<mods:something "
///     or show a property '<mods:something type="smooth"'
/// do not whine to me about single vs double quotes 
/// there are no single quotes in xml, get over it!

function getEntityData ( strTagDelim, strBlock ) {

var sHead = new String("getEntityData("+strTagDelim+","+strBlock+")\n\n");

var B = new String(strBlock);
    B = B.substring(localCursor);

//alert( sHead +"\nB=\n\n"+B)

if ( B.indexOf(strTagDelim) < 0 ) {
	//no change to localCursor;
	return ("");
	}

var tagOpen = new String(strTagDelim);
var tagClose = new String("");

var indexOfBlank = tagOpen.indexOf(" ");

if (indexOfBlank < 0 ) {
        tagClose = "</"+ tagOpen.substring(1);
}else{
        tagClose = "</"+ tagOpen.substring(1,indexOfBlank) +">";

        if ( tagOpen.indexOf(">") < 0 ) {
                var bTagOpen = new String(B); // already adjusted for local cursor ***IMPORTANT****
                bTagOpen = bTagOpen.substring(bTagOpen.indexOf(tagOpen));
                bTagOpen = bTagOpen.substring(0,bTagOpen.indexOf(">")+1 );
                //alert(sHead+ "bTagOpen=\n"+bTagOpen);
                tagOpen = bTagOpen;
                }
}


var D = new String("");//data between tags


var startD= B.indexOf(tagOpen)+tagOpen.length;
var endD  = B.indexOf(tagClose);
//alert(sHead+"B=\n"+B+"\n\nlocalCursor="+localCursor);
    D     = B.substring(startD, endD)


localCursor += endD+tagClose.length;

/*
alert("END "+sHead+"\n\nreturn value D=\n"+D
	+ "\n\nlocalCursor="+localCursor
	+ "\n\ntagOpen=\n"+tagOpen
	+ "\n\ntagClose=\n"+tagClose
	);
*/

return(D);


}//end function getEntityData ( strTagDelim, strBlock ) 


function getSubstring(s1, s2, strBlock, startIndex) {

var sHead = new String( "getSubstring("+s1+",\n\n"+s2+",\n\n"+strBlock+",\n\nstartIndex="+startIndex+"\n)\n\n ");

var B = new String(strBlock);
var D = new String("");

var startD = B.indexOf(s1);
var endD   = B.indexOf(s2)//do not include s2 in return string

D = B.substring(startD, endD);

//alert(sHead+"D=\n"+D);

return(D);


}//end function getSubstring


function getSubstring2(s1, s2, strBlock, startIndex) {

var sHead = new String( "getSubstring("+s1+",\n\n"+s2+",\n\n"+strBlock+",\n\nstartIndex="+startIndex+"\n)\n\n ");

var B = new String(strBlock);
var D = new String("");

var startD = B.indexOf(s1);
var endD   = B.indexOf(s2)+s2.length//DO include s2 in return string

D = B.substring(startD, endD);

//alert(sHead+"D=\n"+D);

return(D);

}//end function getSubstring2



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////extract_page_begin(strBlock)
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function extract_page_begin(strBlock) {

//alert( "begin extract_page_begin");

var B = new String(strBlock);

//alert("B=\n"+B);

if ( B.indexOf("FILENAME:") > -1 ) {
	var startComment_01 = B.indexOf("FILENAME:");
	var Bfilename = new String("<!-- "+B.substring(startComment_01));
	var endComment_01 = Bfilename.indexOf("-->")+3;

	//alert("Comment_01:\n"+B.substring(startComment_01,endComment_01));
	var comment_01Block = new String(Bfilename.substring(0, endComment_01));
	parent.U.document.UF.VVcomment_01.value=comment_01Block;

}else{
	parent.U.document.UF.VVcomment_01.value="<!-- FILENAME ERROR comment_01Block -->";
}

if (comment_01Block.indexOf("Scan")>-1) {
	parent.U.document.UF.new_xmlfile_radio[0].checked = true;
	parent.U.document.UF.new_xmlfile_radio[1].checked = false;
}else{
	parent.U.document.UF.new_xmlfile_radio[0].checked = false;
	parent.U.document.UF.new_xmlfile_radio[1].checked = true;
}

var m01start = comment_01Block.indexOf("xml")+4;
var m01end = m01start+4;
var XMLmaster_01 = new String(comment_01Block.substring(m01start,m01end));
if (!isNaN(XMLmaster_01)) {
	parent.U.document.UF.XMLmaster_01.value=XMLmaster_01;
}else {
	parent.U.document.UF.XMLmaster_01.value="error";
}

var m02start = m01end+1;
var m02end = m02start+6;
var XMLmaster_02 = new String(comment_01Block.substring(m02start,m02end));
if (!isNaN(XMLmaster_02)) {
	parent.U.document.UF.XMLmaster_02.value=XMLmaster_02;
}else {
	parent.U.document.UF.XMLmaster_02.value="error";
}

var m03start = m02end+1;
var m03end = m03start+6;
var XMLmaster_03 = new String(comment_01Block.substring(m03start,m03end));
if (!isNaN(XMLmaster_03)) {
	parent.U.document.UF.XMLmaster_03.value=XMLmaster_03;
}else {
	parent.U.document.UF.XMLmaster_03.value="error";
}

//chdchd
parent.U.document.UF.XMLBASE.value = XMLmaster_01+"_"+XMLmaster_02+"_"+XMLmaster_03+"_";


var ii = 0;
if ( comment_01Block.indexOf("Scan/00") > -1 ) {
	ii=1;
	parent.U.document.UF.XMLPATH.value = "Scan/00";
	parent.U.document.UF.XMLPATHFULL.value = "C:/Scan/00/xml/";
}else if ( comment_01Block.indexOf("Scan/01") > -1 ) {
	ii=2;
	parent.U.document.UF.XMLPATH.value = "Scan/01";
	parent.U.document.UF.XMLPATHFULL.value = "C:/Scan/01/xml/";
}else if ( comment_01Block.indexOf("Scan/02") > -1 ) {
	ii=3;
	parent.U.document.UF.XMLPATH.value = "Scan/02";
	parent.U.document.UF.XMLPATHFULL.value = "C:/Scan/02/xml/";
}else if ( comment_01Block.indexOf("Scan/03") > -1 ) {
	ii=4;
	parent.U.document.UF.XMLPATH.value = "Scan/03";
	parent.U.document.UF.XMLPATHFULL.value = "C:/Scan/03/xml/";
}else if ( comment_01Block.indexOf("Scan/04") > -1 ) {
	ii=5;
	parent.U.document.UF.XMLPATH.value = "Scan/04";
	parent.U.document.UF.XMLPATHFULL.value = "C:/Scan/04/xml/";
}else if ( comment_01Block.indexOf("Reworked/00") > -1 ) {
	ii=6;
	parent.U.document.UF.XMLPATH.value = "Reworked/00";
	parent.U.document.UF.XMLPATHFULL.value = "C:/Reworked/00/xml/";
}else if ( comment_01Block.indexOf("Reworked/01") > -1 ) {
	ii=7;
	parent.U.document.UF.XMLPATH.value = "Reworked/01";
	parent.U.document.UF.XMLPATHFULL.value = "C:/Reworked/01/xml/";
}else if ( comment_01Block.indexOf("Reworked/02") > -1 ) {
	ii=8;
	parent.U.document.UF.XMLPATH.value = "Reworked/02";
	parent.U.document.UF.XMLPATHFULL.value = "C:/Reworked/02/xml/";
}else if ( comment_01Block.indexOf("Reworked/03") > -1 ) {
	ii=9;
	parent.U.document.UF.XMLPATH.value = "Reworked/03";
	parent.U.document.UF.XMLPATHFULL.value = "C:/Reworked/03/xml/";
}else if ( comment_01Block.indexOf("Reworked/04") > -1 ) {
	ii=10;
	parent.U.document.UF.XMLPATH.value = "Reworked/04";
	parent.U.document.UF.XMLPATHFULL.value = "C:/Reworked/04/xml/";
}
parent.U.document.UF.selectXMLPATH[ii].selected = true;



var strComment_02 = new String("");
var comment_02Block = new String("");

if ( B.indexOf("NUMBER_OF_CONSTITUTENT_FILES") > -1 ) {

	var startComment_02 = B.indexOf("NUMBER_OF_CONSTITUENT_FILES")-5;
	strComment_02 = B.substring(startComment_02);
	var endComment_02 = strComment_02.indexOf("-->")+3;
	strComment_02 = B.substring(0,endComment_02);

	//alert("Comment_02:\n"+B.substring(startComment_02,endComment_02));
	comment_02Block = strComment_02;

	var beginNumTiffs = comment_02Block.indexOf(":") +1;
	var endNumTiffs = comment_02Block.lastIndexOf(":");
	var numTiffsBlock = comment_02Block.substring(beginNumTiffs, endNumTiffs);
	//alert(numTiffsBlock);
	parent.U.document.UF.numConstituentsTIFF.value = numTiffsBlock; //chdchd
	parent.U.document.UF.VVcomment_02.value=comment_02Block;
}else{//missing comment, have to count
	if ( xmlAll.indexOf("<mods:relatedItem ") == -1 ) {
		alert("no tiff list");
	}else{
		var strIdentifiers = new String(getSubstring2("<mods:relatedItem ","</mods:relatedItem",xmlAll,0));
		//alert("000. strIdentifiers=\n"+strIdentifiers);
		var countTiffs = 0;
		var nextIndexStart = 0;

		while( strIdentifiers.indexOf("<mods:identifier") > -1 ){
			//alert('strIdentifiers.indexOf("<mods:identifier")='+strIdentifiers.indexOf("<mods:identifier") )
			nextIndexStart=strIdentifiers.indexOf("<mods:identifier")+10;
			//alert("countTiffs="+countTiffs+"\nnextIndexStart="+nextIndexStart+"\nstrIdentifiers=\n"+strIdentifiers);
			countTiffs++;
			if (nextIndexStart == -1 ) break;
			//if(!confirm("countTiffs ="+countTiffs +"\n strIdentifiers =\n"+strIdentifiers))return;
			strIdentifiers = strIdentifiers.substring(nextIndexStart);
		}//end while
	parent.U.document.UF.VVcomment_02.value = "<!-- NUMBER_OF_CONSTITUENTS_FILES: "+countTiffs+" -->";
	parent.U.document.UF.numConstituentsTIFF.value = countTiffs;
	}//end else

}//end else for missing comment






//	parent.U.document.UF.VVcomment_02.value="<!-- ERROR comment_02Block -->";
//}

///chdchd
parent.U.document.UF.file_list_tiff.value=generate_file_list_tiff_reload() ;


/* --- deprecated ----------------------------------
//////Workbook Version number
var comment_03Block = new String("");
if (B.indexOf("!-- Software:") > -1 ) {
	var startComment_03 = B.indexOf("Software:")-5;
	var strComment_03 = B.substring(startComment_03);
	//alert("strComment_03=\n"+strComment_03);
	var endComment_03 = strComment_03.indexOf("-->")+3;
	comment_03Block = strComment_03.substring(0, endComment_03);
} else {
	comment_03Block = "<!-- Software: "+parent.dlc_software_id+" -->";
}
----------------------------------------------------------------*/


/*---------------------------------------------------------------------------
////If old style tag, will have comment like

<!--  Created by Volunteer Voices Workbook Thu Jan 4 15:30:42 CST 2007 -->	
or
<!--  Created by Special Collections Workbook Thu Jan 4 15:30:42 CST 2007 -->	

In this case ( xmlAll.indexOf("<!--  Created by") > -1 )
need to pull out PROJECT NAME and DATE from this tag.

The Content Contributor information will come from page 6

	getEntityData("<mods:recordContentSource>",xmlAll);
---------------------------------------------------------------------*/
////// alert("Comment_03Block:\n"+comment_03Block);
///parent.U.document.UF.VVcomment_03.value = comment_03Block; //deprecated version comment


//////Contributor Full Name
if ( B.indexOf("!-- Content Contributor:")>0) {
	var startComment_03c = B.indexOf("Content Contributor")-5;
	var strComment_03c = new String(B.substring(startComment_03c));
	var endComment_03c = strComment_03c.indexOf("-->")+3;
	var comment_03cBlock = new String(strComment_03c.substring(0, endComment_03c));
}else {
	var contentContributorName = new String(getEntityData("<mods:recordContentSource>",xmlAll));
        var comment_03cBlock="<!-- Content Contributor: "+contentContributorName+" -->";
}




//alert("Comment_03cBlock:\n"+comment_03cBlock);
parent.U.document.UF.VVcomment_03c.value = comment_03cBlock;

//////Project Name
if ( B.indexOf("!-- Project:")> -1 ) {
	var startComment_03p = B.indexOf("Project")-5;
	var strComment_03p = new String(B.substring(startComment_03p));
	var endComment_03p = strComment_03p.indexOf("-->")+3;
	var comment_03pBlock = new String(strComment_03p.substring(0, endComment_03p));
}else  if ( B.indexOf("Created by" ) > -1 ){//Project: comment from old style tags
	var startProjectName = B.indexOf("Created by") +10;
	var projectName = new String(B.substring(startProjectName));
            projectName = projectName.substring(projectName.indexOf("with"));
            projectName = projectName.substring(5,projectName.indexOf("Workbook") );
	var comment_03pBlock = new String("<!-- Project: "+projectName+" -->");
}else {
	var comment_03Block = new String("<!-- Project: -->");
}


/////alert("Comment_03pBlock:\n"+comment_03pBlock);
parent.U.document.UF.VVcomment_03p.value = comment_03pBlock;



//////Date
var comment_03dBlock = new String("");
if ( B.indexOf("<!-- Created by" ) > -1 ){//build Date: comment from old style tags
	var Bdate = new String (B.substring(B.indexOf("<!-- Created by")));
        var endBdate = Bdate.indexOf("-->"); // +3; crop off "-->"
	Bdate = Bdate.substring(0,endBdate);

	var startDS = new Array(
	 Bdate.indexOf("Sun")
	,Bdate.indexOf("Mon")
	,Bdate.indexOf("Tue")
	,Bdate.indexOf("Wed")
	,Bdate.indexOf("Thu")
	,Bdate.indexOf("Fri")
	,Bdate.indexOf("Sat")
	);

	var cropDate = new String(Bdate);//so it will be obvious is this fails
	for ( i=0; i<startDS.length; i++ ) {
	    if(startDS[i]> -1 ) {
		cropDate = Bdate.substring(startDS[i]);
		break;
		}
	}//end for

	comment_03dBlock = "<!-- Date: "+cropDate+" -->";
///alert("from old tags --Comment_03dBlock:\n"+comment_03dBlock);
	
}else  if ( B.indexOf("!-- Date:")>0) {//build Date: comment from new style tags
	var startComment_03d = B.indexOf("Date:")-5;
	var strComment_03d = new String(B.substring(startComment_03d));
	var endComment_03d = strComment_03d.indexOf("-->")+3;
	comment_03dBlock = strComment_03d.substring(0, endComment_03d);
////alert("from new tags: Comment_03dBlock:\n"+comment_03dBlock);
}else {
	comment_03dBlock = "<!-- Date: "+DATE+" -->";
///alert("no prev tag: Comment_03dBlock:\n"+comment_03dBlock);
}


//alert("Comment_03dBlock:\n"+comment_03dBlock);
parent.U.document.UF.VVcomment_03d.value = comment_03dBlock;

//////PAGE VALIDATION
var strComment_04 = new String("");
var comment_04Block = new String("");

if (B.indexOf("<!-- PAGE VALIDATION") == -1 ) {
	comment_04Block="<!-- PAGE VALIDATION :1:1:1:1:1:1:1: -->";
	strComment_04 = "<!-- PAGE VALIDATION :1:1:1:1:1:1:1: -->";
}else {
	var startComment_04 = B.indexOf("<!-- PAGE VALIDATION");
	    strComment_04 = B.substring(startComment_04);
	var endComment_04 = strComment_04.indexOf("-->")+3;
	    comment_04Block = strComment_04.substring(0,endComment_04);
}//end else
//////alert("comment_04Block=\n"+comment_04Block);

var a04 = new Array();
    a04 = comment_04Block.split(":");

parent.U.document.UF.validate_page_begin.value = a04[1];
parent.U.document.UF.validate_page_01.value    = a04[2];
parent.U.document.UF.validate_page_02.value    = a04[3];
parent.U.document.UF.validate_page_03.value    = a04[4];
parent.U.document.UF.validate_page_04.value    = a04[5];
parent.U.document.UF.validate_page_05.value    = a04[6];
parent.U.document.UF.validate_page_06.value    = a04[7];

parent.U.document.UF.VVcomment_04.value = comment_04Block;



///}//end FINAL VALIDATION


//alert("end extract_page_begin(strBlock)");
}//end function extract_page_begin()


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////extract_page_01(strBlock)
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function extract_page_01(strBlock) {

//alert("begin extract_page_01()");

var B = new String(strBlock);//page_01 block
//alert("B=\n"+B);
var B01 = new String(B.replace(/name>/g, "name>THE_END::::"));//page_01 block with markers added

B01 += "caboose";

//alert ("B01=\n"+B01);
var arrayB01 = new Array();
//alert("before filling the array with things: arrayB01.length="+arrayB01.length);
    arrayB01 = B01.split("::::");


//alert("arrayB01.length="+arrayB01.length);

//for (i=0;i<arrayB01.length;i++) {
//alert("arrayB01["+i+"]=\n"+arrayB01[i]);
//}

var nameBlock_01 = new String("empty");
var nameBlock_02 = new String("empty");
var nameBlock_03 = new String("empty");

if ( arrayB01.length > 1 ) {
	if (arrayB01[0].indexOf("THE_END") > 0 ) { nameBlock_01 = arrayB01[0]; }
}
if ( arrayB01.length > 2 ) {
	if (arrayB01[1].indexOf("THE_END") > 0 ) { nameBlock_02 = arrayB01[1]; }
}
if ( arrayB01.length > 3 ) {
	if (arrayB01[2].indexOf("THE_END") > 0 ) { nameBlock_03 = arrayB01[2]; }
}

 
if (nameBlock_01 != "empty" ) {

localCursor = 0;//cursor for nameBlock_01
parent.U.document.UF.title.value=getEntityData("<mods:title>", nameBlock_01);

//if (!confirm("continue?? next is name1")){return;}
//alert("nameBlock_01=\n"+nameBlock_01);


		//name authority applies as follows:
		//LCNAF - personal or corporate
		//ULAN - personal
		//filtering this taken care of in vv_functions_radio.js
		if (nameBlock_01.indexOf('authority="LCNAF"')>-1){
			parent.U.document.UF.name_authority_01.value="LCNAF";
			parent.U.document.UF.name_authority_01_radio[1].checked=true;
		}else if(nameBlock_01.indexOf('authority="ULAN"')>-1){
			parent.U.document.UF.name_authority_01.value="ULAN";
			parent.U.document.UF.name_authority_01_radio[2].checked=true;
		}else {
			parent.U.document.UF.name_authority_01.value="NONE";
			parent.U.document.UF.name_authority_01_radio[0].checked=true;
		}


	if(nameBlock_01.indexOf('type="personal"') > -1) {

		parent.U.document.UF.creator_lastname_01.value=getEntityData('<mods:namePart type="family">',nameBlock_01);
                var givenName_01a = new String(getEntityData('<mods:namePart type="given">',nameBlock_01));
                var gIndex_01 = givenName_01a.indexOf(" ");

		parent.U.document.UF.creator_firstname_01.value=givenName_01a.substring(0,gIndex_01++);
		parent.U.document.UF.creator_middlename_01.value=givenName_01a.substring(gIndex_01);

		var vital_dates_01 = new String(getEntityData('<mods:namePart type="date">',nameBlock_01));
		var dIndex_01 = vital_dates_01.indexOf("-");
		parent.U.document.UF.creator_dob_01.value = vital_dates_01.substring(0,dIndex_01++);
		parent.U.document.UF.creator_dod_01.value = vital_dates_01.substring(dIndex_01); 

		parent.U.document.UF.creator_radio_01[0].checked = true;

	}else if (nameBlock_01.indexOf('type="corporate"') > -1 ) {
		parent.U.document.UF.creator_lastname_01.value=getEntityData('<mods:namePart>',nameBlock_01);
		parent.U.document.UF.creator_radio_01[1].checked = true;
	}else if (nameBlock_01.indexOf("unknown") > -1 ) {
		parent.U.document.UF.creator_lastname_01.value="unknown";
		parent.U.document.UF.creator_radio_01[2].checked = true;
	}else if (nameBlock_01.indexOf("anonymous") > -1 ) {
		parent.U.document.UF.creator_lastname_01.value="anonymous";
		parent.U.document.UF.creator_radio_01[3].checked = true;
	}

	parent.U.document.UF.creator_description_01.value = getEntityData('<mods:description>',nameBlock_01);
	parent.U.document.UF.creator_role_01.value = getEntityData('<mods:roleTerm ',nameBlock_01);

}//end nameBlock_01

//if (!confirm("continue?? next is name2")){return;}
localCursor = 0;//cursor for nameBlock_02
//alert("nameBlock_02=\n"+nameBlock_02);

if (nameBlock_02 != "empty" ) {

		//name authority applies as follows:
		//LCNAF - personal or corporate
		//ULAN - personal
		//filtering this taken care of in vv_functions_radio.js
		if (nameBlock_02.indexOf('authority="LCNAF"')>-1){
			parent.U.document.UF.name_authority_02.value="LCNAF";
			parent.U.document.UF.name_authority_02_radio[1].checked=true;
		}else if(nameBlock_02.indexOf('authority="ULAN"')>-1){
			parent.U.document.UF.name_authority_02.value="ULAN";
			parent.U.document.UF.name_authority_02_radio[2].checked=true;
		}else {
			parent.U.document.UF.name_authority_02.value="NONE";
			parent.U.document.UF.name_authority_02_radio[0].checked=true;
		}


     	if(nameBlock_02.indexOf('type="personal"') > -1) {

                parent.U.document.UF.creator_lastname_02.value=getEntityData('<mods:namePart type="family">',nameBlock_02);
                var givenName_02a = new String(getEntityData('<mods:namePart type="given">',nameBlock_02));
		var gIndex_02 = givenName_02a.indexOf(" ");
		parent.U.document.UF.creator_firstname_02.value=givenName_02a.substring(0,gIndex_02++);
		parent.U.document.UF.creator_middlename_02.value=givenName_02a.substring(gIndex_02);

		var vital_dates_02 = new String(getEntityData('<mods:namePart type="date">',nameBlock_02));
		var dIndex_02 = vital_dates_02.indexOf("-");
		parent.U.document.UF.creator_dob_02.value = vital_dates_02.substring(0,dIndex_02++);
		parent.U.document.UF.creator_dod_02.value = vital_dates_02.substring(dIndex_02); 

                parent.U.document.UF.creator_radio_02[1].checked = true;
        }else if (nameBlock_02.indexOf('type="corporate"') > -1 ) {
                parent.U.document.UF.creator_lastname_02.value=getEntityData('<mods:namePart>',nameBlock_02);
                parent.U.document.UF.creator_radio_02[2].checked = true;
        }

	parent.U.document.UF.creator_description_02.value = getEntityData('<mods:description>',nameBlock_02);
	parent.U.document.UF.creator_role_02.value = getEntityData('<mods:roleTerm ',nameBlock_02);


}//end if (nameBlock_02 != "empty" ) 


if (nameBlock_03 != "empty" ) {
//if (!confirm("continue next is name3??")){return;}
localCursor = 0;//cursor for nameBlock_03
//alert("nameBlock_03=\n"+nameBlock_03);

		//name authority applies as follows:
		//LCNAF - personal or corporate
		//ULAN - personal
		//filtering this taken care of in vv_functions_radio.js
		if (nameBlock_03.indexOf('authority="LCNAF"')>-1){
			parent.U.document.UF.name_authority_03.value="LCNAF";
			parent.U.document.UF.name_authority_03_radio[1].checked=true;
		}else if(nameBlock_03.indexOf('authority="ULAN"')>-1){
			parent.U.document.UF.name_authority_03.value="ULAN";
			parent.U.document.UF.name_authority_03_radio[2].checked=true;
		}else {
			parent.U.document.UF.name_authority_03.value="NONE";
			parent.U.document.UF.name_authority_03_radio[0].checked=true;
		}

     	if(nameBlock_03.indexOf('type="personal"') > -1) {

                parent.U.document.UF.creator_lastname_03.value=getEntityData('<mods:namePart type="family">',nameBlock_03);

                var givenName_03a = new String(getEntityData('<mods:namePart type="given">',nameBlock_03));
		var gIndex_03 = givenName_03a.indexOf(" ");
		parent.U.document.UF.creator_firstname_03.value=givenName_03a.substring(0,gIndex_03++);
		parent.U.document.UF.creator_middlename_03.value=givenName_03a.substring(gIndex_03);

		var vital_dates_03 = new String(getEntityData('<mods:namePart type="date">',nameBlock_03));
		var dIndex_03 = vital_dates_03.indexOf("-");
		parent.U.document.UF.creator_dob_03.value = vital_dates_03.substring(0,dIndex_03++);
		parent.U.document.UF.creator_dod_03.value = vital_dates_03.substring(dIndex_03); 

                parent.U.document.UF.creator_radio_03[1].checked = true;
        }else if (nameBlock_03.indexOf('type="corporate"') > -1 ) {
                parent.U.document.UF.creator_lastname_03.value=getEntityData('<mods:namePart>',nameBlock_03);
                parent.U.document.UF.creator_radio_03[2].checked = true;
        }

	parent.U.document.UF.creator_description_03.value = getEntityData('<mods:description>',nameBlock_03);
	parent.U.document.UF.creator_role_03.value = getEntityData('<mods:roleTerm ',nameBlock_03);


}//end if (nameBlock_02 != "empty" ) 

//alert("end extract_page_01()");


}//end function extract_page_01()


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////extract_page_02(strBlock)
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function extract_page_02(strBlock) {

var B = new String(strBlock);

B=B.substring(B.indexOf("<mods:dateCreated"));//chop off <mods:originInfo>

localCursor = 0;


//mods:dateCreated (single or point="start") is REQUIRED and you only get one of these 
//hence if()elseif() on B01

var B01_cursor=0;
var B01 = new String(getSubstring2("<mods:dateCreated ","</mods:dateCreated>",B,B01_cursor));

//alert("B01=\n"+B01);

if ( B01.indexOf('point="start"') < 0 ) { //single date of creation is required -OR-
        if ( B01.indexOf('dateCreated qualifier="q') > -1 ) {
                parent.U.document.UF.date_createdQ.value="questionable";
        }else if ( B01.indexOf('dateCreated qualifier="i') > -1 ) {
                parent.U.document.UF.date_createdQ.value="inferred";
        }else if ( B01.indexOf('dateCreated qualifier="a') > -1 ) {
                parent.U.document.UF.date_createdQ.value="approximate";
        }else {//none
                parent.U.document.UF.date_createdQ.value="";
        }
	parent.U.document.UF.date_created.value = getEntityData("<mods:dateCreated ",B01);

} else { // -OR- date range begin is required 

        if ( B01.indexOf('dateCreated qualifier="q') > -1 ) {
                parent.U.document.UF.date_created_beginQ.value="questionable";
        }else if ( B01.indexOf('dateCreated qualifier="i') > -1 ) {
                parent.U.document.UF.date_created_beginQ.value="inferred";
        }else if ( B01.indexOf('dateCreated qualifier="a') > -1 ) {
                parent.U.document.UF.date_created_beginQ.value="approximate";
        }else {//none
                parent.U.document.UF.date_created_beginQ.value="";
        }
	parent.U.document.UF.date_created_begin.value = getEntityData("<mods:dateCreated ",B01);

}//date range begin

	var B02 = new String(B.substring(B01_cursor));
if (  B.indexOf('point="end"') > 0) { // date range end is not required 

	B01_cursor = B01.length;
	//alert("B.substring(B01_cursor)=\n\n"+B.substring(B01_cursor) );
       
	//var B02 = new String(getSubstring2( "<mods:dateCreated","</mods:dateCreated>",B,B01_cursor));
        localCursor=0;
	//var B02 = new String(B.substring(B01_cursor));
	//alert("B02=\n"+B02);

        if ( B02.indexOf('dateCreated qualifier="q') > -1 ) {
                parent.U.document.UF.date_created_endQ.value="questionable";
        }else if ( B02.indexOf('dateCreated qualifier="i') > -1 ) {
                parent.U.document.UF.date_created_endQ.value="inferred";
        }else if ( B02.indexOf('dateCreated qualifier="a') > -1 ) {
                parent.U.document.UF.date_created_endQ.value="approximate";
        }else {//none
                parent.U.document.UF.date_created_endQ.value="";
        }
	parent.U.document.UF.date_created_end.value = getEntityData("<mods:dateCreated ",B02);

}//end date range  end


//if ( !confirm("next is dateIssued B=\n"+B) ) return;

if ( B.indexOf("dateIssued") > 0 ) {
localCursor=0;
var B03 = new String(getSubstring2("<mods:dateIssued ","</mods:dateIssued>",B,0));
//alert("1.  B03="+B03);
	parent.U.document.UF.date_issued.value = getEntityData("<mods:dateIssued ", B03);

        if ( B03.indexOf('dateIssued qualifier="q') > -1 ) {
                parent.U.document.UF.date_issuedQ.value="questionable";
        }else if ( B03.indexOf('dateIssued qualifier="i') > -1 ) {
                parent.U.document.UF.date_issuedQ.value="inferred";
        }else if ( B03.indexOf('dateIssued qualifier="a') > -1 ) {
                parent.U.document.UF.date_issuedQ.value="approximate";
        }else {//none
                parent.U.document.UF.date_issuedQ.value="none";
	}
//alert("2. B03="+B03);
}//end date issued

var B04 = new String(B);
//alert("B04="+B04);

if ( B04.indexOf("mods:placeTerm") < 0 || B04.indexOf("mods:publisher") < 0 ) {
	parent.U.document.UF.publisher_name_radio[1].checked = true; //NO
}else{
	parent.U.document.UF.publisher_name_radio[0].checked = true; //YES
}

// try to fill in data anyway, you may have part of it
localCursor=0;
if (B04.indexOf("mods:placeTerm") > 0 ) {
	parent.U.document.UF.place_of_origin.value = getEntityData("<mods:placeTerm>", B04);
}

if (B04.indexOf("mods:publisher") > 0 ) {
	var pubNameAddr = new String(getEntityData("<mods:publisher>",B04));
       	var pnaIndex = pubNameAddr.indexOf(",");
	parent.U.document.UF.publisher_name.value = pubNameAddr.substring(0,pnaIndex++);
	parent.U.document.UF.publisher_address.value = pubNameAddr.substring(++pnaIndex);
}

//alert("end extract_page_02(strBlock) ");
} //end function extract_page_02(strBlock);


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////extract_page_03(strBlock)
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function extract_page_03(strBlock){

//alert("extract_page_03");

var B = new String(strBlock);
localCursor = 0;

//alert("0. localCursor="+localCursor+"\n\nB.substring(localCursor)=\n"+B.substring(localCursor));

	parent.U.document.UF.language.value = getEntityData("<mods:languageTerm ", B);
	parent.U.document.UF.language_display.value = parent.L.getDesc(parent.L.aLanguage,parent.U.document.UF.language.value);

//alert("1. localCursor="+localCursor+"\n\nB.substring(localCursor)=\n"+B.substring(localCursor));

	parent.U.document.UF.type_of_resource_01.value = getEntityData("<mods:typeOfResource>", B);
//alert("2. localCursor="+localCursor+"\n\nB.substring(localCursor)=\n"+B.substring(localCursor));

	parent.U.document.UF.type_of_resource_02.value = getEntityData("<mods:typeOfResource>", B);
//alert("3. localCursor="+localCursor+"\n\nB.substring(localCursor)=\n"+B.substring(localCursor));

	parent.U.document.UF.type_of_resource_03.value = getEntityData("<mods:typeOfResource>", B);
//alert("4. localCursor="+localCursor+"\n\nB.substring(localCursor)=\n"+B.substring(localCursor));

if ( B.indexOf("mods:genre") > 0 ) {

	if (B.indexOf('mods:genre authority="a') > 0 ) {
		parent.U.document.UF.mods_genre_radio[0].checked = true;
		parent.U.document.UF.mods_genre_authority.value = "aat"; /// marc
	}else if ( B.indexOf('mods:genre authority="n') > 0 ) {
		parent.U.document.UF.mods_genre_radio[1].checked = true;
		parent.U.document.UF.mods_genre_authority.value = "nmc"; //chenhall
	}else if ( B.indexOf('mods:genre authority="m') > 0 ) {
		parent.U.document.UF.mods_genre_radio[2].checked = true;
		parent.U.document.UF.mods_genre_authority.value = "marcgt"; //chenhall
	}
	
	parent.U.document.UF.mods_genre.value = getEntityData("<mods:genre ", B);

//alert("5. genre -- localCursor="+localCursor+"\n\nB.substring(localCursor)=\n"+B.substring(localCursor));
}

	parent.U.document.UF.museum_form_type_technique.value = getEntityData("<mods:form ", B);
//alert("6. museum_form_type_technique localCursor="+localCursor+"\n\nB=\n"+B);
	parent.U.document.UF.museum_form_type_medium.value = getEntityData("<mods:form ", B);
//alert("6. museum_form_type_medium localCursor="+localCursor+"\n\nB=\n"+B);

////////FIXED VALUE SKIP///parent.U.document.UF.digital_origin.value = getEntityData("<mods:digitalOrigin>", B);
////////alert("6. digital_origin localCursor="+localCursor+"\n\nB.substring(localCursor)=\n"+B.substring(localCursor));

var strExtent = getEntityData("<mods:extent>",B);
var aExtent = new Array();
    aExtent = strExtent.split(";");
	var aExtent0 = new String(aExtent[0]);
	    aExtent0 = aExtent0.replace(/digital images/g,"");//because vv_compose adds this phrase back in
	parent.U.document.UF.extent_pages.value = aExtent0;//required
	parent.U.document.UF.extent_number_of_objects.value = aExtent[1];//required
	if ( aExtent.length == 3) {
	parent.U.document.UF.extent_dimensions.value = aExtent[2];//not required
	}

//alert("7. extent -- localCursor="+localCursor+"\n\nB.substring(localCursor)=\n"+B.substring(localCursor));

	parent.U.document.UF.abstract.value = getEntityData("<mods:abstract>", B);
//alert("8. abstract -- localCursor="+localCursor+"\n\nB.substring(localCursor)=\n"+B.substring(localCursor));

//alert(" end function extract_page_03(strBlock)");
	
} //end function extract_page_03(strBlock);

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////extract_page_04(strBlock)
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function extract_page_04 (strBlock) {

//alert("extract_page_04");

var B = new String(strBlock);
//alert ("page_04 B=\n"+B);

if ( B.indexOf('<mods:subject authority="lcsh">') > -1 ) {
	var indexLcsh = B.indexOf('<mods:subject authority="lcsh">')
	var B1 = new String(B.substring(indexLcsh));
	//alert ("B.substring("+indexLcsh+")="+B1);
	strLcsh =getSubstring2('<mods:subject authority="lcsh">','</mods:subject>',B1,0);
	//alert("strLcsh=\n"+strLcsh);
	localCursor=0;
	parent.U.document.UF.subject_topic_lcsh_01.value = getEntityData('<mods:topic>',strLcsh);
	parent.U.document.UF.subject_topic_lcsh_02.value = getEntityData('<mods:topic>',strLcsh);
	parent.U.document.UF.subject_topic_lcsh_03.value = getEntityData('<mods:topic>',strLcsh);
	parent.U.document.UF.subject_geographic_lcsh_01.value = getEntityData('<mods:geographic>',strLcsh);
	parent.U.document.UF.subject_geographic_lcsh_01_display.value = parent.U.document.UF.subject_geographic_lcsh_01.value; 
	parent.U.document.UF.subject_geographic_lcsh_02.value = getEntityData('<mods:geographic>',strLcsh);
	parent.U.document.UF.subject_geographic_lcsh_02_display.value = parent.U.document.UF.subject_geographic_lcsh_02.value; 
	parent.U.document.UF.subject_name_lcsh_01.value = getEntityData('<mods:namePart>',strLcsh);
	parent.U.document.UF.subject_name_lcsh_02.value = getEntityData('<mods:namePart>',strLcsh);
	parent.U.document.UF.subject_temporal_lcsh_01.value = getEntityData('<mods:temporal>',strLcsh);
	parent.U.document.UF.subject_temporal_lcsh_02.value = getEntityData('<mods:temporal>',strLcsh);

}

if (  B.indexOf('<mods:subject authority="tgm">') > -1 ) {
	var indexTgm = B.indexOf('<mods:subject authority="tgm">')
	var B1 = new String( B.substring(indexTgm));
	//alert ("B.substring("+indexTgm+")="+B1);
	strTgm =getSubstring2('<mods:subject authority="tgm">','</mods:subject>',B1,0);
	//alert("strTgm=\n"+strTgm);
	localCursor = 0;
	parent.U.document.UF.subject_topic_tgm_01.value = getEntityData('<mods:topic>',strTgm);
	parent.U.document.UF.subject_topic_tgm_02.value = getEntityData('<mods:topic>',strTgm);
	parent.U.document.UF.subject_topic_tgm_03.value = getEntityData('<mods:topic>',strTgm);
}


if ( B.indexOf('<mods:subject authority="vv">') > -1 ) {
        //temporal_vv_01 is required
	var indexVV = B.indexOf('<mods:subject authority="vv">')
	var B1 = new String( B.substring(indexVV));
	//alert ("B.substring("+indexVV+")="+B1);
	strVV =getSubstring2('<mods:subject authority="vv">','</mods:subject>',B1,0);
	///alert("strVV=\n"+strVV);
	localCursor = 0;
	parent.U.document.UF.subject_temporal_vv_01.value = getEntityData('<mods:temporal>',strVV);
	var fixTemporal = new String(parent.U.document.UF.subject_temporal_vv_01.value);
	    fixTemporal = fixTemporal.replace(/B/g,"A");
	parent.U.document.UF.subject_temporal_vv_01.value = fixTemporal;
	parent.U.document.UF.subject_temporal_vv_01_display.value = parent.L.getDesc(parent.L.aVVtemporal,parent.U.document.UF.subject_temporal_vv_01.value);

	//There can be from zero to 5 topic_vv entities, none are requried
	//The first 2 draw from aVVtopic array ( prefix A or B )
	//Then next 3 draw from aVVbroadtopic array ( prefix D )
	//getEntityData munches through the string and gets them in order
	// until it runs out of a match for '<mods:topic>' in strVV
	//In the case of no tag match, getEntityData returns ""

	//topic_vv_01 can have B or D
	//topic_vv_02 can have B or D
	//topic_vv_03 can have B or D
	//topic_vv_04 can have B or D
	//topic_vv_05 can have D


	//localCursor=0;
	cursor_topic_vv_01 = localCursor;
	var topic_vv_01 = new String(getEntityData('<mods:topic>',strVV));
	cursor_topic_vv_02 = localCursor;
	var topic_vv_02 = new String(getEntityData('<mods:topic>',strVV));
	cursor_topic_vv_03 = localCursor;
	var topic_vv_03 = new String(getEntityData('<mods:topic>',strVV));
	cursor_topic_vv_04 = localCursor;
	var topic_vv_04 = new String(getEntityData('<mods:topic>',strVV));
	cursor_topic_vv_05 = localCursor;
	var topic_vv_05 = new String(getEntityData('<mods:topic>',strVV));

	/*
	alert("strVV=\n"+strVV
	     +"\n\ntopic_vv_01=>>"+topic_vv_01 
		+"<< -----cursor_topic_vv_01="+cursor_topic_vv_01
	     +"\ntopic_vv_02=>>"+topic_vv_02
		+"<< -----cursor_topic_vv_02="+cursor_topic_vv_02
	     +"\ntopic_vv_03=>>"+topic_vv_03
		+"<< -----cursor_topic_vv_03="+cursor_topic_vv_03
	     +"\ntopic_vv_04=>>"+topic_vv_04
		+"<< -----cursor_topic_vv_04="+cursor_topic_vv_04
	     +"\ntopic_vv_05=>>"+topic_vv_05
		+"<< -----cursor_topic_vv_05="+cursor_topic_vv_05
		)
	*/
	   


	
 	if ( topic_vv_01.length > 0 ) {
	    if (topic_vv_01.indexOf("D.") == -1 ) {
		parent.U.document.UF.subject_topic_vv_01.value = topic_vv_01;
		var fixTopic_01 = new String(topic_vv_01);
	    	fixTopic_01 = fixTopic_01.replace(/A/g,"B");
		parent.U.document.UF.subject_topic_vv_01.value = fixTopic_01;
		parent.U.document.UF.subject_topic_vv_01_display.value = parent.L.getDesc(parent.L.aVVtopic,parent.U.document.UF.subject_topic_vv_01.value);
	    }else {
		parent.U.document.UF.subject_topic_vv_03.value = topic_vv_01;
		parent.U.document.UF.subject_topic_vv_03_display.value = parent.L.getDesc(parent.L.aVVbroadtopic,parent.U.document.UF.subject_topic_vv_03.value);
	    }
	}//end if ( topic_vv_01.length > 0 ) 

        
 	if ( topic_vv_02.length > 0 ) {
	    if (topic_vv_02.indexOf("D.") == -1 ) {
		var fixTopic_02 = new String(topic_vv_02);
	    	fixTopic_02 = fixTopic_02.replace(/A/g,"B");
		parent.U.document.UF.subject_topic_vv_02.value = fixTopic_02;
		parent.U.document.UF.subject_topic_vv_02_display.value = parent.L.getDesc(parent.L.aVVtopic,parent.U.document.UF.subject_topic_vv_02.value);
	    }else {
		if (parent.U.document.UF.subject_topic_vv_03.value == "" ) {
			parent.U.document.UF.subject_topic_vv_03.value = topic_vv_02;
			parent.U.document.UF.subject_topic_vv_03_display.value = parent.L.getDesc(parent.L.aVVbroadtopic,parent.U.document.UF.subject_topic_vv_03.value);
		}else{
			parent.U.document.UF.subject_topic_vv_04.value = topic_vv_02;
			parent.U.document.UF.subject_topic_vv_04_display.value = parent.L.getDesc(parent.L.aVVbroadtopic,parent.U.document.UF.subject_topic_vv_04.value);
		}
	    }
	}//end if ( topic_vv_02.length > 0 ) 

 	if ( topic_vv_03.length > 0 ) {
	    if (parent.U.document.UF.subject_topic_vv_03.value == "" ) {
		parent.U.document.UF.subject_topic_vv_03.value = topic_vv_03;
		parent.U.document.UF.subject_topic_vv_03_display.value = parent.L.getDesc(parent.L.aVVbroadtopic,parent.U.document.UF.subject_topic_vv_03.value);
	    }else if (parent.U.document.UF.subject_topic_vv_04.value == "" ) {
		parent.U.document.UF.subject_topic_vv_04.value = topic_vv_03;
		parent.U.document.UF.subject_topic_vv_04_display.value = parent.L.getDesc(parent.L.aVVbroadtopic,parent.U.document.UF.subject_topic_vv_04.value);
	    }else if (parent.U.document.UF.subject_topic_vv_05.value == "" ) {
		parent.U.document.UF.subject_topic_vv_05.value = topic_vv_03;
		parent.U.document.UF.subject_topic_vv_05_display.value = parent.L.getDesc(parent.L.aVVbroadtopic,parent.U.document.UF.subject_topic_vv_05.value);
	   }
	}//end if ( topic_vv_03.length > 0 ) 

 	if ( topic_vv_04.length > 0 ) {
	    if (parent.U.document.UF.subject_topic_vv_04.value == "" ) {
		parent.U.document.UF.subject_topic_vv_04.value = topic_vv_04;
		parent.U.document.UF.subject_topic_vv_04_display.value = parent.L.getDesc(parent.L.aVVbroadtopic,parent.U.document.UF.subject_topic_vv_04.value);
	    }else if (parent.U.document.UF.subject_topic_vv_05.value == "" ) {
		parent.U.document.UF.subject_topic_vv_05.value = topic_vv_04;
		parent.U.document.UF.subject_topic_vv_05_display.value = parent.L.getDesc(parent.L.aVVbroadtopic,parent.U.document.UF.subject_topic_vv_05.value);
	   }
	}//end if ( topic_vv_04.length > 0 ) 


 	if ( topic_vv_05.length > 0 ) {
		parent.U.document.UF.subject_topic_vv_05.value = topic_vv_05;
		parent.U.document.UF.subject_topic_vv_05_display.value = parent.L.getDesc(parent.L.aVVbroadtopic,parent.U.document.UF.subject_topic_vv_05.value);
	}//end if ( topic_vv_05.length > 0 ) 


	parent.U.document.UF.subject_geographic_vv_01.value = getEntityData('<mods:geographic>',strVV);
	parent.U.document.UF.subject_geographic_vv_01_display.value = parent.L.getDesc(parent.L.aVVcounty,parent.U.document.UF.subject_geographic_vv_01.value);
	parent.U.document.UF.subject_geographic_vv_02.value = getEntityData('<mods:geographic>',strVV);
	parent.U.document.UF.subject_geographic_vv_02_display.value = parent.L.getDesc(parent.L.aVVcounty,parent.U.document.UF.subject_geographic_vv_02.value);
}


if ( B.indexOf('<mods:subject authority="spc">') > -1 ) {
	var indexSpc = B.indexOf('<mods:subject authority="spc">')
	var B1 = new String( B.substring(indexSpc));
	//alert ("SPC B.substring("+indexSpc+")="+B1);
	strSpc=getSubstring2('<mods:subject authority="spc">','</mods:subject>',B1,0);
	//alert("SPC strSpc=\n"+strSpc);
	localCursor=0;
	parent.U.document.UF.subject_topic_spc_01.value = getEntityData('<mods:topic>',strSpc);
	parent.U.document.UF.subject_topic_spc_01_display.value = parent.L.getDesc(parent.L.aSPCtopic,parent.U.document.UF.subject_topic_spc_01.value);
	parent.U.document.UF.subject_topic_spc_02.value = getEntityData('<mods:topic>',strSpc);
	parent.U.document.UF.subject_topic_spc_02_display.value = parent.L.getDesc(parent.L.aSPCtopic,parent.U.document.UF.subject_topic_spc_02.value);
	parent.U.document.UF.subject_topic_spc_03.value = getEntityData('<mods:topic>',strSpc);
	parent.U.document.UF.subject_topic_spc_03_display.value = parent.L.getDesc(parent.L.aSPCtopic,parent.U.document.UF.subject_topic_spc_03.value);
}
if ( indexNone = B.indexOf('<mods:subject >') > 0 ) {
	var indexNone = B.indexOf('<mods:subject >')
	var B1 = new String( B.substring(indexNone));
	//alert ("B.substring("+indexNone+")="+B1);
	strNone =getSubstring2('<mods:subject >','</mods:subject>',B1,0);
	//alert("strNone=\n"+strNone);
	localCursor = 0;
	parent.U.document.UF.subject_topic_none_01_desc.value = getEntityData('<mods:topic>',strNone);
	parent.U.document.UF.subject_name_none_01_desc.value = getEntityData('<mods:namePart>',strNone);
	parent.U.document.UF.subject_geographic_none_01.value = getEntityData('<mods:geographic>',strNone);
	parent.U.document.UF.subject_temporal_none_01_desc.value = getEntityData('<mods:temporal>',strNone);
}

//alert("end extract_page_04(strBlock)");

} //end function extract_page_04(strBlock);


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////extract_page_06(strBlock)
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

function extract_page_06(strBlock) {

//alert("extract_page_06");

var B = new String ( strBlock);
//alert("page_06: B=\n"+B);

if ( B.indexOf("<mods:location") > -1) {
	var indexLoc = B.indexOf("<mods:location>");
	B = B.substring(indexLoc);
	var B1 = new String(getSubstring2("<mods:physicalLocation>","</mods:location>", B, 0));
	//alert("START START START\nmods:recordInfo B1 =\n\n"+B1);
	var bstartDetail =B1.indexOf('<mods:physicalLocation type="detail"');

	//alert(" mods:location B1 =\n"+B1+"\n\nbstartDetail="+bstartDetail);
	localCursor="0";
        var getDetail = new String(B1.substring(bstartDetail));
	//alert("getDetail =\n"+getDetail);
	parent.U.document.UF.physical_location_detail.value = getEntityData('<mods:physicalLocation type="detail"',getDetail);
	//alert("parent.U.document.UF.physical_location_detail.value =\n"+parent.U.document.UF.physical_location_detail.value);
	localCursor = 0;
	parent.U.document.UF.physical_location_repository.value = getEntityData('<mods:physicalLocation type="repository"',B1);
	//parent.U.document.UF.physical_location_detail.value = getEntityData('<mods:physicalLocation type="detail"',B1);
	parent.U.document.UF.physical_location_city.value = getEntityData('<mods:physicalLocation type="city"',B1);
	parent.U.document.UF.physical_location_state.value = getEntityData('<mods:physicalLocation type="state"',B1);
	parent.U.document.UF.physical_location_county.value = getEntityData('<mods:physicalLocation type="county"',B1);
	parent.U.document.UF.physical_location_county_display.value = parent.L.getDesc(parent.L.aVVcounty,parent.U.document.UF.physical_location_county.value);
	parent.U.document.UF.collection_id_name.value = getEntityData('<mods:physicalLocation type="collection"',B1);

	//alert("after collection_id_name B1.substring(localCursor)=\n\n"+B1.substring(localCursor));

	var B1a = new String(B1.substring(localCursor));
	localCursor = 0;
	var ii = 0;
        var coliddes = new String();
	if ( B1a.indexOf("manuscriptNumber") > -1 ) { 
		ii = 1;
		coliddes="manuscriptNumber";
	}else if ( B1.indexOf("archiveNumber") > -1 ) {
		ii = 2;
		coliddes="archiveNumber";
	}else if ( B1.indexOf("callNumber") > -1 ) {
		ii = 3;
		coliddes="callNumber";
	}else if ( B1.indexOf("accessionNumber") > -1 ) {
		ii = 4;
		coliddes="accessionNumber";
	}else if ( B1.indexOf("otherIdentificationNumber") > -1 ) {
		ii = 5;
		coliddes="otherIdentificationNumber";
	}
	//alert("B1a=\n"+B1a);
	parent.U.document.UF.collection_id_num_type[ii].selected = true;
	var idStr = new String('<mods:physicalLocation type="'+coliddes+'"');
	parent.U.document.UF.collection_id_number.value = getEntityData(idStr, B1a);
}

//alert("START <mods:recordInfo");
B = strBlock;
	parent.U.document.UF.museum_credit_line.value = getEntityData('<mods:note ',B);
if ( B.indexOf("<mods:recordInfo") > -1) {
	var B1 = new String(B.substring(B.indexOf("<mods:recordInfo")));
	localCursor = 0;
	//alert("START START START\nmods:recordInfo B1 =\n\n"+B1);
	parent.U.document.UF.record_content_source.value = getEntityData("<mods:recordContentSource>", B1);
	var region=new String(parent.U.document.UF.record_content_source.value);
	if ( region.indexOf("University of Tennessee Special Collections Library") > -1 ) {
		parent.U.document.UF.record_content_source_radio[0].checked = true;
	}else if ( region.indexOf("Tennessee State Library and Archives") > -1 ) {
		parent.U.document.UF.record_content_source_radio[1].checked = true;
	}else if ( region.indexOf("Memphis Public Library and Information Center") > -1 ) {
		parent.U.document.UF.record_content_source_radio[2].checked = true;
	}else {
		parent.U.document.UF.record_content_source_radio[3].checked = true;
	}	
	parent.U.document.UF.record_creation_date.value = getEntityData("<mods:recordCreationDate ", B1);
	//language of cataloging is hardcoded
	parent.U.document.UF.language_of_cataloging.value = "eng";
	parent.U.document.UF.language_of_cataloging_display.value = "English";
	//use and reproduction is hardcoded
	parent.U.document.UF.use_and_reproduction.value="<a href='http://diglib.lib.utk.edu/dlc/rights/vv.html' target='_blank'>Use and Reproduction</a>"	


}

//alert("end extract_page_06(strBlock)");
}//end function extract_page_06(strBlock) 
