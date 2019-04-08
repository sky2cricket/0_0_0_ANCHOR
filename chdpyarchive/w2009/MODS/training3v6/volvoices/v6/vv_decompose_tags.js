

//vv_decompose_tags.js used by page_reload.htm
//The functions in vv_decompose_tags.js 
//support page_reload.htm 
//and are not used anywhere else



var DATE = new Date();
var reload_debug = false;//true;

//==================================================================
//==================================================================
//==================================================================
//===========functions feb 08 2007==================================
//==================================================================
//==================================================================
//==================================================================


var mods_header = new String();
var mods_titleInfo=new String();
var mods_name_01  =new String();
var mods_name_02  =new String();
var mods_name_03  =new String();
var mods_originInfo = new String();
var mods_language = new String();
var mods_typeOfResource_all = new String();
var mods_genre = new String();
var mods_physicalDescription = new String();
var mods_abstract = new String();
var mods_subject_auth_lcsh = new String();
var mods_subject_auth_tgm = new String();
var mods_subject_auth_vv = new String();
var mods_subject_auth_spc = new String();
var mods_subject_auth_none = new String();
var mods_constituent_files = new String();
var mods_uri = new String();
var mods_location = new String();
var mods_note = new String();
var mods_recordInfo = new String();
var mods_accessCondition = new String();

//this function called from T3 button on 02_reload.htm
//this function called from bChomp button on page_reload.htm
function testData3(NUM) {
alert("testData3 in vv_decompose.js");

parent.U.document.UF.reset(); //clear cached values
build_mods_element_strings();

//alert("after build_mods_element_strings()\nmods_header=\n"+mods_header);
//alert("mods_header=\n"+mods_header);


var good_header = 1;
good_header = parent.L.process_header(mods_header,mods_constituent_files);
if (good_header){
parent.L.process_title(mods_titleInfo);
parent.L.process_name(mods_name_01,1);
parent.L.process_name(mods_name_02,2);
parent.L.process_name(mods_name_03,3);
parent.L.process_originInfo(mods_originInfo);
parent.L.process_language(mods_language);
parent.L.process_typeOfResource(mods_typeOfResource_all);
parent.L.process_genre(mods_genre);
parent.L.process_physicalDescription(mods_physicalDescription);
parent.L.process_abstract(mods_abstract);
parent.L.process_subject_lcsh(mods_subject_auth_lcsh);
parent.L.process_subject_tgm(mods_subject_auth_tgm);
parent.L.process_subject_vv(mods_subject_auth_vv);
parent.L.process_subject_spc(mods_subject_auth_spc);
parent.L.process_subject_none(mods_subject_auth_none);
parent.L.process_location(mods_location);
parent.L.process_note(mods_note);
parent.L.process_recordInfo(mods_recordInfo);
if(NUM != "0" ) alert("Processing data input is complete.")
}
}

//this function called from bChompb button on page_reload.htm
function testData4(NUM) {
alert("testData4 in vv_decompose.js");

parent.U.document.UF.reset(); //clear cached valuesbuild_mods_element_strings();
//alert("after build_mods_element_strings()\nmods_header=\n"+mods_header);
//alert("mods_header=\n"+mods_header);


var good_header = 1;
good_header = parent.L.process_header(mods_header,mods_constituent_files);
if (good_header){
parent.L.process_title(mods_titleInfo);
parent.L.process_name(mods_name_01,1);
parent.L.process_name(mods_name_02,2);
parent.L.process_name(mods_name_03,3);
parent.L.process_originInfo(mods_originInfo);
parent.L.process_language(mods_language);
parent.L.process_typeOfResource(mods_typeOfResource_all);
parent.L.process_genre(mods_genre);
parent.L.process_physicalDescription(mods_physicalDescription);
parent.L.process_abstract(mods_abstract);
parent.L.process_subject_lcsh(mods_subject_auth_lcsh);
parent.L.process_subject_tgm(mods_subject_auth_tgm);
parent.L.process_subject_vv(mods_subject_auth_vv);
parent.L.process_subject_spc(mods_subject_auth_spc);
parent.L.process_subject_none(mods_subject_auth_none);
parent.L.process_location(mods_location);
parent.L.process_note(mods_note);
parent.L.process_recordInfo(mods_recordInfo);
if(NUM != "0" ) alert("Processing data input is complete.")
}
}




//undo encodings in chompStr
//these will be reinstated as hex-encoding in vv_compose_tags.js
function clean_01(str){

var retstr = new String(str);

var html_amp  = new RegExp("&amp;","g");   ///ampersand global 
var html_apos = new RegExp("&apos;","g");  ///single quote global
var html_quot = new RegExp("&quot;","g");  ///double quote global
var html_lt   = new RegExp("&lt;","g");    ///less than global
var html_gt   = new RegExp("&gt;","g");    ///greater than global

retstr = retstr.replace(html_amp,"&");
retstr = retstr.replace(html_apos,"'");
retstr = retstr.replace(html_quot,'"');
retstr = retstr.replace(html_lt,"<");
retstr = retstr.replace(html_gt,">");


var ascii_amp  = new RegExp("&#038;","g");   ///ampersand global 
var ascii_apos = new RegExp("&#039;","g");  ///single quote global
var ascii_quot = new RegExp("&#034;","g");  ///double quote global
var ascii_lt   = new RegExp("&#060;","g");    ///less than global
var ascii_gt   = new RegExp("&#062;","g");    ///greater than global

retstr = retstr.replace(ascii_amp,"&");
retstr = retstr.replace(ascii_apos,"'");
retstr = retstr.replace(ascii_quot,'"');
retstr = retstr.replace(ascii_lt,"<");
retstr = retstr.replace(ascii_gt,">");


var hex_amp  = new RegExp("&#x0026;","g");   ///ampersand global 
var hex_apos = new RegExp("&#x0027;","g");  ///single quote global
var hex_quot = new RegExp("&#x0022;","g");  ///double quote global
var hex_lt   = new RegExp("&#x003C;","g");    ///less than global
var hex_gt   = new RegExp("&#x003E;","g");    ///greater than global

retstr = retstr.replace(hex_amp,"&");
retstr = retstr.replace(hex_apos,"'");
retstr = retstr.replace(hex_quot,'"');
retstr = retstr.replace(hex_lt,"<");
retstr = retstr.replace(hex_gt,">");

return(retstr);
}//end function clean_01(str)



function build_mods_element_strings() {

//alert("testData3() reload_debug="+reload_debug);
// function get_MODS_element_block3(entityName,attribute,SentinelTag,fromString,startIndex){
var chompStr = new String(parent.D.document.forms[0].chomp.value);

chompStr = clean_01(chompStr);//replace encodings for &amp;,&gt;,&lt;,&apos;,&quot;

    chompStr = chompStr.replace(/ >/g,">");
    chompStr = chompStr.replace(/  /g," ");
    xmlAll = chompStr;
var MEB_cursor=0;
    mods_header = get_MODS_header_block('<?xml','<mods:titleInfo',chompStr,MEB_cursor);
    //mods_header=get_MODS_element_block3('header','x','<mods:titleInfo',chompStr,MEB_cursor);
    MEB_cursor = chompStr.indexOf(mods_header)+mods_header.length;
    mods_titleInfo=get_MODS_element_block3('mods:titleInfo','x','<mods:name',chompStr,MEB_cursor);
    MEB_cursor += mods_titleInfo.length;
    mods_name_01  =get_MODS_element_block3('mods:name','x','<mods:originInfo',chompStr,MEB_cursor);
    MEB_cursor += mods_name_01.length;
    mods_name_02  =get_MODS_element_block3('mods:name','x','<mods:originInfo',chompStr,MEB_cursor);
    MEB_cursor += mods_name_02.length;
    mods_name_03  =get_MODS_element_block3('mods:name','x','<mods:originInfo',chompStr,MEB_cursor);
    MEB_cursor += mods_name_03.length;
    mods_originInfo = get_MODS_element_block3('mods:originInfo','x','<mods:language',chompStr,MEB_cursor);
    MEB_cursor += mods_originInfo.length;
    mods_language = get_MODS_element_block3('mods:language','x','<mods:typeOfResource',chompStr,MEB_cursor);
    MEB_cursor += mods_language.length;
    mods_typeOfResource_all = get_MODS_element_block5('mods:typeOfResource',chompStr);
    MEB_cursor += mods_typeOfResource_all.length;
    mods_genre = get_MODS_element_block3('mods:genre','authority','<mods:physicalDescription',chompStr,MEB_cursor);
    MEB_cursor += mods_genre.length;
    mods_physicalDescription = get_MODS_element_block3('mods:physicalDescription','x','<mods:abstract',chompStr,MEB_cursor);
    MEB_cursor += mods_physicalDescription.length;
    mods_abstract = get_MODS_element_block3('mods:abstract','x','<mods:subject',chompStr,MEB_cursor);
    MEB_cursor += mods_abstract.length;
    mods_subject_auth_lcsh = get_MODS_element_block3('mods:subject', 'authority="lcsh"','<mods:relatedItem',chompStr,MEB_cursor);
    MEB_cursor += mods_subject_auth_lcsh.length;
    mods_subject_auth_tgm = get_MODS_element_block3('mods:subject', 'authority="tgm"','<mods:relatedItem',chompStr,MEB_cursor);
    MEB_cursor += mods_subject_auth_tgm.length;
    mods_subject_auth_vv = get_MODS_element_block3('mods:subject', 'authority="vv"','<mods:relatedItem',chompStr,MEB_cursor);
    MEB_cursor += mods_subject_auth_vv.length;
    mods_subject_auth_spc = get_MODS_element_block3('mods:subject', 'authority="spc"','<mods:relatedItem',chompStr,MEB_cursor);
    MEB_cursor += mods_subject_auth_spc.length;
    mods_subject_auth_none = get_MODS_element_block3('mods:subject','x','<mods:relatedItem',chompStr,MEB_cursor);
    MEB_cursor += mods_subject_auth_none.length;
    mods_constituent_files = get_MODS_element_block3('mods:relatedItem', 'type="constituent"','<mods:location',chompStr,MEB_cursor);
    MEB_cursor += mods_constituent_files.length;
    mods_uri = get_MODS_element_block3('mods:identifier','type="uri"','<mods:location',chompStr,MEB_cursor);
    MEB_cursor += mods_uri.length;
    mods_location = get_MODS_element_block3('mods:location','x','<mods:note',chompStr,MEB_cursor);
    MEB_cursor += mods_location.length;
    mods_note = get_MODS_element_block3('mods:note','type','<mods:recordInfo',chompStr,MEB_cursor);
    MEB_cursor += mods_note.length;
    mods_recordInfo = get_MODS_element_block3('mods:recordInfo','x','<mods:accessCondition',chompStr,MEB_cursor);
    MEB_cursor += mods_recordInfo.length;
    mods_accessCondition = get_MODS_element_block3('mods:accessCondition','x','</mods:mods>',chompStr,MEB_cursor);
    MEB_cursor += mods_accessCondition.length;

//alert("testData3 get_MODS_element_block3: mods elements are complete");


}//end function build_MODS_element_strings





/*----------------------------------------------------------------------------*/
//header gets its own function because it is so different
function get_MODS_header_block(startTag,endTag,fromString,StartIndex){
var B = new String(fromString);
var endMEB = B.indexOf('<mods:title')-1;
var MEB = new String(B.substring(0,endMEB));
////////////alert("get_MODS_header_block new: header: MEB=\n"+MEB); 
return(MEB);
}
/*-----------------------------------------------------------------------------*/


//return entire MODS Element Block
function get_MODS_element_block3(elementName,attribute,SentinelTag,fromString,startIndex){

//if ( elementName == "header" ) this is the header block

if ( elementName == "header") {
	var B = new String(fromString);
	var endMEB = B.indexOf(SentinelTag)-1;
var MEB = new String(B.substring(0,endMEB));
if ( reload_debug ) { alert("new: header: MEB=\n"+MEB); }
return(MEB);
}



///if attribute=="x" it means that attribute is not required

if ( attribute == "x" ) {

	var pre_startTag = new String("<"+elementName);
	var startTag = new String(fromString.substring(startIndex));
	if ( startTag.indexOf(pre_startTag) == -1) { return(""); }
    	    startTag = startTag.substring(startTag.indexOf(pre_startTag));
	var endB     = startTag.indexOf(">")+1;
    	    startTag = startTag.substring(0,endB);

}else{

	var startTag = new String("<" + elementName);
    	    startTag = startTag+" "+attribute; 

	if (fromString.substring(startIndex).indexOf(startTag) == -1 ) { return(""); }
}





var endTag   = new String("</"+elementName+">"); //this works because replace " >" with ">" in chompStr

var sentinelTag = new String(SentinelTag);

var B = new String(fromString.substring(startIndex));


var startMEB = B.indexOf(startTag);
	//alert("get_MODS_element_block3: got to  here startTag=\n"+startTag+"\n\nendTag="+endTag+"\n\nstartMEB="+startMEB);
	if (startMEB == -1) return("");//missing tag, no harm done
var endSearchStr = B.indexOf(sentinelTag);

    B = B.substring(startMEB);
    if (endSearchStr >-1) {
	B = B.substring(0,endSearchStr);//no sentinel found, no harm done
	}

var endMEB   = B.indexOf(endTag)+endTag.length+9; //9 for puff and fluff
    B = B.substring(0,endMEB)

    B=B.substring(0,B.lastIndexOf(">")+1);


    MEB = B;
	//alert("get_MODS_element_block3:\n\nelementName:"+elementName+"\n\nattribute:"+attribute
	//+"\n\nstartTag="+startTag+"\nendTag="+endTag+"\nsentinelTag="+sentinelTag +"\n\nMEB=\n"+MEB);


return(MEB);
}//end function get_MODS_element_block3



//special only for typeOfResource
//These are up to 3 tags that comprise an array of type_of_resource elements 
//They are not enclosed in other tags
function get_MODS_element_block5(elementName,fromString){

var strAll = new String(fromString);
var strTor = new String();

var elementNameLen = elementName.length + 4;

startTor = strAll.indexOf(elementName)-2;
endTor   = strAll.lastIndexOf(elementName) +elementNameLen;
lenTor   = endTor - startTor;

strTor   = strAll.substr(startTor,lenTor);
//alert('strTor=\n'+strTor);
//if(!confirm("Continue?")); return;


var MEB = new String(strTor);
return(MEB);
}//end function





//==================================================================
//==================================================================
//==================================================================
//==================================================================
//==================================================================
//==================================================================
//eof

