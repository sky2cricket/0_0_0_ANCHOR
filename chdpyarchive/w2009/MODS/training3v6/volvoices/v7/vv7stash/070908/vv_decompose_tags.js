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




    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see http://www.gnu.org/licenses/
-->
*/


//vv_decompose_tags.js used by page_reload.htm
//The functions in vv_decompose_tags.js 
//support page_reload.htm 
//and are not used anywhere else



var DATE = new Date();

//==================================================================
//==================================================================
//==================================================================
//===========functions feb 08 2007==================================
//==================================================================
//==================================================================
//==================================================================


var mods_header = new String();
var mods_posta_header = new String();//titleInfo to physicalDescription
var mods_postb_header = new String();//physicalDescription to end
var mods_titleInfo=new String();
var mods_name_blocks = new String();
var mods_originInfo = new String();
var mods_language = new String();
var mods_typeOfResource_all = new String();
var mods_genre = new String();
var mods_physicalDescription = new String();
var mods_abstract = new String();
var mods_subject_blocks = new String();
var mods_relatedItem_blocks = new String();
var mods_identifier_blocks = new String();
var mods_constituent_files = new String();
var mods_uri = new String();
var mods_location = new String();
var mods_note = new String();
var mods_recordInfo = new String();
var mods_accessCondition = new String();

//this function called from T3 button on 02_reload.htm
function testData3(NUM,str) {

var chompStr= new String(str);

alert("vv_decompose_tags.js\nfunction testData3\nchompStr=\n"+chompStr.substring(0,500));
parent.U.document.UF.reset(); //clear cached values
build_mods_element_strings(chompStr);

//alert("after build_mods_element_strings()\nmods_header=\n"+mods_header);
//alert("mods_header=\n"+mods_header);


var good_header = 1;
if (!confirm("Continue?")) return;
//deprecate process_header???
//good_header = parent.L.process_header(mods_header,mods_constituent_files);
if (good_header){
parent.L.process_title_non_sort(mods_titleInfo);
parent.L.process_title(mods_titleInfo);
parent.L.process_title_sub_title(mods_titleInfo);
parent.L.process_title_part_number(mods_titleInfo);
parent.L.process_title_part_name(mods_titleInfo);
////////////???????????????????parent.L.getNameBlocks(chompStr);
parent.L.process_originInfo(mods_originInfo);
parent.L.process_language(mods_language);
parent.L.process_typeOfResource(mods_typeOfResource_all);
parent.L.process_genre(mods_genre);
parent.L.process_physicalDescription(mods_physicalDescription);
parent.L.process_abstract(mods_abstract);
parent.L.getSubjectBlocks(chompStr);
parent.L.getRIBlocks(chompStr);
parent.L.getIDBlocks(chompStr);
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



function build_mods_element_strings(str) {

// function get_MODS_element_block3(entityName,attribute,SentinelTag,fromString,startIndex){
//var chompStr = new String(parent.D.document.forms[0].chomp.value);
var chompStr = new String(str);

chompStr = clean_01(chompStr);//replace encodings for &amp;,&gt;,&lt;,&apos;,&quot;
alert("vv_decompose_tags.js\nfunction build_mods_element_strings\nchompStr=\n"+chompStr.substring(0,500));

    chompStr = chompStr.replace(/ >/g,">");
    chompStr = chompStr.replace(/  /g," ");
    xmlAll = chompStr;


mods_posta_header = chompStr.substring(chompStr.indexOf("<mods:titleInfo"),chompStr.indexOf("<mods:physicalDescription"));
mods_postb_header = chompStr.substring(chompStr.indexOf("<mods:physicalDescription"));
    
	

var MEB_cursor=0;
mods_header = get_MODS_header_block('<?xml','<mods:titleInfo',chompStr,MEB_cursor);
//alert("vv_decompose_tags.js \nfunction testData3(NUM=1) calls \nfunction build_mods_element_strings()\nmods_header=\n"+mods_header);
//alert("vv_decompose_tags.js \nfunction testData3(NUM=1) calls \nfunction build_mods_element_strings()\nmods_posta_header=\n"+mods_posta_header);
//alert("vv_decompose_tags.js \nfunction testData3(NUM=1) calls \nfunction build_mods_element_strings()\nmods_postb_header=\n"+mods_postb_header);

//mods_header=get_MODS_element_block3('header','x','<mods:titleInfo',chompStr,MEB_cursor);

    MEB_cursor = chompStr.indexOf(mods_header)+mods_header.length;
    mods_titleInfo=get_MODS_element_block3('mods:titleInfo','x','<mods:name',chompStr,MEB_cursor);
alert("got to here mods_titleInfo=\n"+mods_titleInfo);
    MEB_cursor += mods_titleInfo.length;
    mods_name_blocks=parent.L.getNameBlocks(chompStr);
alert("got to here mods_name_blocks=\n"+mods_name_blocks);

    mods_originInfo = get_MODS_element_block3('mods:originInfo','x','<mods:language',chompStr,MEB_cursor);
    MEB_cursor += mods_originInfo.length;
    mods_language = get_MODS_element_block3('mods:language','x','<mods:typeOfResource',chompStr,MEB_cursor);
    MEB_cursor += mods_language.length;
    mods_typeOfResource_all = get_MODS_element_block5('mods:typeOfResource',chompStr);
    //alert("mods_typeOfResource_all=\n"+mods_typeOfResource_all);
    MEB_cursor += mods_typeOfResource_all.length;
    mods_genre = get_MODS_element_block3('mods:genre','authority','<mods:physicalDescription',chompStr,MEB_cursor);
    MEB_cursor += mods_genre.length;


    mods_subject_blocks = parent.L.getSubjectBlocks(chompStr);
alert("got to here mods_subject_blocks=\n"+mods_subject_blocks);
    mods_relatedItem_blocks = parent.L.getRIBlocks(chompStr);
alert("got to here mods_relatedItem_blocks=\n"+mods_relatedItem_blocks);
    mods_identifier_blocks = parent.L.getIDBlocks(chompStr);
alert("got to here mods_identifier_blocks=\n"+mods_identifier_blocks);



    mods_physicalDescription = get_MODS_element_block3('mods:physicalDescription','x','<mods:abstract',chompStr,MEB_cursor);
    MEB_cursor += mods_physicalDescription.length;
    mods_abstract = get_MODS_element_block3('mods:abstract','x','<mods:subject',chompStr,MEB_cursor);
    MEB_cursor += mods_abstract.length;
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
//// mods_header = get_MODS_header_block('<?xml','<mods:titleInfo',chompStr,MEB_cursor);
function get_MODS_header_block(startTag,endTag,fromString,StartIndex){
var DATE = new Date();
var B = new String(fromString);
var endMEB = B.indexOf('<mods:title')-1;
var MEB = new String(B.substring(0,endMEB));
var A = new Array();
    A = MEB.split(":");
var B = new Array();
    B = MEB.split("<");
var msgA = new String("msgA:");
var msgB = new String("msgB:");

for (i=0;i<A.length;i++) {
	msgA += "\nA["+i+"]="+A[i];
	}
for (i=0;i<B.length;i++) {
	B[i] = "<"+B[i];
	msgB += "\nB["+i+"]= "+B[i];
	}

//alert(msgA);
//alert(msgB);

var contributorName = new String(A[12]);
    contributorName = contributorName.substring(0,contributorName.indexOf(" -->"));
var institutionName = new String(A[13]);
    institutionName = institutionName.substring(0,institutionName.indexOf(" -->"));
var XMLmaster_simple= new String(A[17]);
    XMLmaster_simple= XMLmaster_simple.substring(0,XMLmaster_simple.indexOf(" -->"));

parent.U.document.UF.VVcomment_01.value   = B[8];
parent.U.document.UF.VVcomment_02.value   = B[9];
parent.U.document.UF.VVcomment_02a.value  = B[10];
parent.U.document.UF.VVcomment_02b.value  = B[11];
parent.U.document.UF.VVcomment_02c.value  = B[12];
/////parent.U.document.UF.VVcomment_03.value   = B[13];//reload date
parent.U.document.UF.VVcomment_03.value   = "<!-- Reload Date: "+DATE+" -->";
parent.U.document.UF.VVcomment_03c.value  = B[5];
parent.U.document.UF.VVcomment_03p.value  = B[6];
parent.U.document.UF.VVcomment_03d.value  = B[7];
parent.U.document.UF.VVcomment_04.value   = B[14];

parent.U.document.UF.contributorName.value    = contributorName; 
parent.U.document.UF.institutionName.value    = institutionName;
parent.U.document.UF.XMLmaster_simple.value   = XMLmaster_simple;
parent.U.document.UF.numRelatedItems.value    = A[18];
parent.U.document.UF.numIdentifiers.value     = A[20];
parent.U.document.UF.numSubjectBlocks.value   = A[22];
parent.U.document.UF.numNameBlocks.value      = A[24];

parent.U.document.UF.validate_page_begin.value= A[27];
parent.U.document.UF.validate_page_01.value   = A[28];
parent.U.document.UF.validate_page_02.value   = A[29];
parent.U.document.UF.validate_page_03.value   = A[30];
parent.U.document.UF.validate_page_04.value   = A[31];
parent.U.document.UF.validate_page_05.value   = A[32];
parent.U.document.UF.validate_page_06.value   = A[33];

////////////alert("get_MODS_header_block new: header: MEB=\n"+MEB); 
return(MEB);
}

///========================================================================



//return entire MODS Element Block
function get_MODS_element_block3(elementName,attribute,SentinelTag,fromString,startIndex){

//if ( elementName == "header" ) this is the header block

if ( elementName == "header") {
	var B = new String(fromString);
	var endMEB = B.indexOf(SentinelTag)-1;
var MEB = new String(B.substring(0,endMEB));
return(MEB);
}

if (elementName == "mods:typeOfResource" ) {
	alert("mods:typeOfResource\nSentinelTag=\n"+SentinelTag+"\nfromString=\n"+fromString);

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


function get_MODS_element_block4(elementName,attribute,SentinelTag,fromString,startIndex){
//typeOfResource

	//test how many type of resource tags you have
	var secondTypeOfRescource=0;
	var thirdTypeOfRescource=0;
	var test = new String(fromString);
	    test_index = test.indexOf("<mods:typeOfResource");//first occurrence is required
	    test_index = test_index+20;
	    test = test.substr(test_index);
	    test_index = test.indexOf("<mods:typeOfResource");//second occurrence is not required
	if (test_index > -1 ) {
		secondTypeOfResource = 1;
	    	test_index = test_index+20;
	    	test = test.substr(test_index);
	        test_index = test.indexOf("<mods:typeOfResource");//third occurrence is not required
		if (test_index > -1) {
			thirdTypeOfResource=1;
			}
		}
	alert("secondTypeOfResource="+secondTypeOfResource
	     +"\nthirdTypeOfResource="+thirdTypeOfResource);
	

var strTor = new String(fromString);
var strTor2 = new String("");
var strTor3 = new String("");

var startTor = strTor.indexOf('mods:typeOfResource');
var  endTor1   = strTor.indexOf('/mods:typeOfResource')+21;

var endTor = endTor1;


if ( secondTypeOfResource==1 ) {
	var strTor2 = strTor.substr(endTor1);
        var endTor2 = strTor2.indexOf('/mods:typeOfResource')+21;
	endTor = endTor2;
	}
if ( thirdTypeOfResource ==1 ) {
	var strTor3 = new String(strTor.substr(endTor2));
        var endTor3 = strTor3.indexOf('/mods:typeOfResource')+21;
	endTor=endTor3;
	}

var calcTor = strTor.length + strTor2.length+strTor3.length+9;
//endTor - startTor;
	


    strTor = strTor.substr(startTor,calcTor);
    alert("strTor=\n"+strTor);

return(strTor);

}//end function


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
//eof

