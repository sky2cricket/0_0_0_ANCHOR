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



//original with alerts added

//vv_build_tags3.js.txt change the strings bfont, efont,space to arrays
//add NI ( Nindex)


var BFONT = new Array();
var EFONT = new Array();
var SPACE = new Array();
var OBRAK = new Array();

BFONT[0] = new String("");
BFONT[1] = new String('<font color="a00000"><b>');
EFONT[0] = new String("");
EFONT[1] = new String('</b></font>');

SPACE[0] = new String("");
SPACE[1] = new String(' ');

OBRAK[0] = '<';
OBRAK[1] = '&lt;';



function replace_apos(str) {

//// & &amp;  >>> &#038;  >>>HEX &#x0026;
//// & &amp; ///has to be first or will replace "&" in the replacements shown below!
//// ' &apos; >>> &#039;  >>>HEX &#x0027;
//// " &quot; >>> &#034;  >>>HEX &#x0022;
//// < &lt;   >>> &#060;  >>>HEX &#x003C;
//// > &gt;   >>> &#062;  >>>HEX &#x003E;

var strA = new String(str);
var strB = new String(str);//HEX

var amper = new RegExp("&","g");
    strA = strA.replace(amper, "&#038;");
    strB = strB.replace(amper, "&#x0026;");
var apos = new RegExp("'","g");
    strA = strA.replace(apos,"&#039;");
    strB = strB.replace(apos,"&#x0027;");
var openB = new RegExp('<',"g");
    strA = strA.replace(openB,"&#060;");
    strB = strB.replace(openB,"&#x003C;");
var closB = new RegExp('>',"g");
    strA = strA.replace(closB,"&#062;");
    strB = strB.replace(closB,"&#x003E;");
var quote = new RegExp('"',"g");
    strA = strA.replace(quote,"&#034;");
    strB = strB.replace(quote,"&#x0022;");

//alert("after replace all:\nstr="+str+"\nstrA="+strA);
return(strB);
}



//var ps=new Array();

/*---this function causes an error!!
function buildTagsArray_subject_authority(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);

var strAuth = new String(document.forms[0].subject_auth.value);

alert("strAuth="+strAuth);
if ( strAuth=="none") {
	ps[ps.length] = new String(obrak + 'subject>\r\n');
}else{
	ps[ps.length] = new String(obrak + 'subject authority="'+strAuth'">\r\n');
}

alert("ps[0]="+ps[0]);


return (ps);

}//end function
*/

function buildTagsArray_cart(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);

ps[ps.length]= new String(obrak +'cartographics>\r\n');

//cartographics child coordinates
if( document.forms[0].subElement_cart_coordinates.value != ""){
ps[ps.length] = new String(obrak+'coordinates>'
	+bfont+document.forms[0].subElement_cart_coordinates.value+efont
	+obrak+'/coordinates>\r\n');
}


//cartographics child scale
if( document.forms[0].subElement_cart_scale.value != ""){
ps[ps.length] = new String(obrak+'scale>'
	+bfont+document.forms[0].subElement_cart_scale.value+efont
	+obrak+'/scale>\r\n');
}

//cartographics child projection
if( document.forms[0].subElement_cart_projection.value != ""){
ps[ps.length] = new String(obrak+'projection>'
	+bfont+document.forms[0].subElement_cart_projection.value+efont
	+obrak+'/projection>\r\n');
}

ps[ps.length] = new String(obrak +'/cartographics>\r\n');

return(ps);

}//end function


function buildTagsArray_cgeo(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);

var strAuth=new String();
for(i=0;i<document.forms[0].cgeo_auth.length;i++) {
	if (document.forms[0].cgeo_auth[i].selected == true) {
		strAuth=document.forms[0].cgeo_auth[i].value;
		}
}

ps[ps.length]= new String(obrak +'geographicCode authority="'+strAuth +'">'
	+bfont+document.forms[0].subElement_cgeo.value+efont
	+obrak+'/geographicCode>\r\n');

return(ps);
}

function buildTagsArray_genr(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);

var strAuth=new String();
for(i=0;i<document.forms[0].genr_auth.length;i++) {
	if (document.forms[0].genr_auth[i].selected == true) {
		strAuth=document.forms[0].genr_auth[i].value;
		}
}

ps[ps.length]= new String(obrak +'genre authority="'+strAuth +'">'
	+bfont+document.forms[0].subElement_genr.value+efont
	+obrak+'/genre>\r\n');

return(ps);
}

function buildTagsArray_geog(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);


ps[ps.length]= new String(obrak +'geographic>'
	+bfont+document.forms[0].subElement_geog_01.value+efont
	+obrak+'/geographic>\r\n');

if (document.forms[0].subElement_geog_02.value !="") {
ps[ps.length]= new String(obrak +'geographic>'
	+bfont+document.forms[0].subElement_geog_02.value+efont
	+obrak+'/geographic>\r\n');
}

if (document.forms[0].subElement_geog_03.value !="") {
ps[ps.length]= new String(obrak +'geographic>'
	+bfont+document.forms[0].subElement_geog_03.value+efont
	+obrak+'/geographic>\r\n');
}

if (document.forms[0].subElement_geog_04.value !="") {
ps[ps.length]= new String(obrak +'geographic>'
	+bfont+document.forms[0].subElement_geog_04.value+efont
	+obrak+'/geographic>\r\n');
}

if (document.forms[0].subElement_geog_05.value !="") {
ps[ps.length]= new String(obrak +'geographic>'
	+bfont+document.forms[0].subElement_geog_05.value+efont
	+obrak+'/geographic>\r\n');
}

if (document.forms[0].subElement_geog_06.value !="") {
ps[ps.length]= new String(obrak +'geographic>'
	+bfont+document.forms[0].subElement_geog_06.value+efont
	+obrak+'/geographic>\r\n');
}

return(ps);
}//end function


function buildTagsArray_hgeo(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);

//do not make empty tag for hierarchical geographic
//if ( document.forms[0].subElement_HGeo[1].selected ) {
//ps[ps.length] = new String(obrak + 'subject authority="lcsh">\r\n'
//	+obrak +'hierarchicalGeographic>\r\n');
ps[ps.length]= new String(obrak +'hierarchicalGeographic>\r\n');

//hierarchical geographic child continent
if( document.forms[0].subElement_hgeo_continent.value != ""){
ps[ps.length] = new String(obrak+'continent>'
	+bfont+document.forms[0].subElement_hgeo_continent.value+efont
	+obrak+'/continent>\r\n');
}

//hierarchical geographic child country
if( document.forms[0].subElement_hgeo_country.value != ""){
ps[ps.length] = new String(obrak+'country>'
	+bfont+document.forms[0].subElement_hgeo_country.value+efont
	+obrak+'/country>\r\n');
}

//hierarchical geographic child province
if( document.forms[0].subElement_hgeo_province.value != ""){
ps[ps.length] = new String(obrak+'province>'
        +bfont+document.forms[0].subElement_hgeo_province.value+efont
        +obrak+'/province>\r\n');
}

//hierarchical geographic child region
if( document.forms[0].subElement_hgeo_region.value != ""){
ps[ps.length] = new String(obrak+'region>'
        +bfont+document.forms[0].subElement_hgeo_region.value+efont
        +obrak+'/region>\r\n');
}

//hierarchical geographic child state
if( document.forms[0].subElement_hgeo_state.value != ""){
ps[ps.length] = new String(obrak+'state>'
        +bfont+document.forms[0].subElement_hgeo_state.value+efont
        +obrak+'/state>\r\n');
}

//hierarchical geographic child territory
if( document.forms[0].subElement_hgeo_territory.value != ""){
ps[ps.length] = new String(obrak+'territory>'
        +bfont+document.forms[0].subElement_hgeo_territory.value+efont
        +obrak+'/territory>\r\n');
}

//hierarchical geographic child county
if( document.forms[0].subElement_hgeo_county.value != ""){
ps[ps.length] = new String(obrak+'county>'
        +bfont+document.forms[0].subElement_hgeo_county.value+efont
        +obrak+'/county>\r\n');
}

//hierarchical geographic child city
if( document.forms[0].subElement_hgeo_city.value != ""){
ps[ps.length] = new String(obrak+'city>'
        +bfont+document.forms[0].subElement_hgeo_city.value+efont
        +obrak+'/city>\r\n');
}

//hierarchical geographic child island
if( document.forms[0].subElement_hgeo_island.value != ""){
ps[ps.length] = new String(obrak+'island>'
        +bfont+document.forms[0].subElement_hgeo_island.value+efont
        +obrak+'/island>\r\n');
}

//hierarchical geographic child area
if( document.forms[0].subElement_hgeo_area.value != ""){
ps[ps.length] = new String(obrak+'area>'
        +bfont+document.forms[0].subElement_hgeo_area.value+efont
        +obrak+'/area>\r\n');
}




ps[ps.length] = new String(obrak +'/hierarchicalGeographic>\r\n');
//ps[ps.length] = new String(obrak +'/subject>\r\n');
//}


return(ps);


}//end function

function buildTagsArray_namp(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);

var strAuth=new String();
for(i=0;i<document.forms[0].namp_auth.length;i++) {
	if (document.forms[0].namp_auth[i].selected == true) {
		strAuth=document.forms[0].namp_auth[i].value;
		}
}



if ( strAuth != "") {
	ps[ps.length]= new String(obrak +'name type="personal" authority="'+strAuth+'">\r\n');
}else{
	ps[ps.length]= new String(obrak +'name type="personal">\r\n');
}


if(document.forms[0].subElement_namp_family.value != "" ){
ps[ps.length]= new String(obrak +'namePart type="family">'
	+bfont+document.forms[0].subElement_namp_family.value+efont
	+obrak+'/namePart>\r\n');
}

if(document.forms[0].subElement_namp_given.value != "" ){
ps[ps.length]= new String(obrak +'namePart type="given">'
	+bfont+document.forms[0].subElement_namp_given.value+efont
	+obrak+'/namePart>\r\n');
}


if(document.forms[0].subElement_namp_date.value != "" ){
ps[ps.length]= new String(obrak +'namePart type="date">'
	+bfont+document.forms[0].subElement_namp_date.value+efont
	+obrak+'/namePart>\r\n');
}


//do not make empty role tags

var numSelected =0;
for(i=0;i<document.forms[0].namp_role.length;i++) {
	if (document.forms[0].namp_role[i].selected == true) {
		numSelected++;
		break;
		}
}
		
if ( numSelected > 0 ) {

ps[ps.length]= new String(obrak +'role>\r\n');


for(i=0;i<document.forms[0].namp_role.length;i++) {
	if (document.forms[0].namp_role[i].selected == true) {
		ps[ps.length] = new String(obrak +'roleTerm authority="marcrelator" type="text">'
		+bfont+document.forms[0].namp_role[i].value+efont
		+obrak+'/roleTerm>\r\n');
		}
}//end for


ps[ps.length]= new String(obrak +'/role>\r\n');

}//end role tags 

ps[ps.length]= new String(obrak +'/name>\r\n');

return(ps);
}

function buildTagsArray_namc(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);

var strAuth=new String();
for(i=0;i<document.forms[0].namc_auth.length;i++) {
	if (document.forms[0].namc_auth[i].selected == true) {
		strAuth=document.forms[0].namc_auth[i].value;
		}
}

if ( strAuth != "") {
	ps[ps.length]= new String(obrak +'name type="corporate" authority="'+strAuth+'">\r\n');
}else{
	ps[ps.length]= new String(obrak +'name type="corporate">\r\n');
}

if(document.forms[0].subElement_namc.value != "" ){
ps[ps.length]= new String(obrak +'namePart>'
	+bfont+document.forms[0].subElement_namc.value+efont
	+obrak+'/namePart>\r\n');
}

//do not make empty role tags

var numSelected =0;
for(i=0;i<document.forms[0].namc_role.length;i++) {
	if (document.forms[0].namc_role[i].selected == true) {
		numSelected++;
		break;
		}
}
		
if ( numSelected > 0 ) {

ps[ps.length]= new String(obrak +'role>\r\n');


for(i=0;i<document.forms[0].namc_role.length;i++) {
	if (document.forms[0].namc_role[i].selected == true) {
		ps[ps.length] = new String(obrak +'roleTerm authority="marcrelator" type="text">'
		+bfont+document.forms[0].namc_role[i].value+efont
		+obrak+'/roleTerm>\r\n');
		}
}//end for


ps[ps.length]= new String(obrak +'/role>\r\n');

}//end role tags 

ps[ps.length]= new String(obrak +'/name>\r\n');

return(ps);
}


function buildTagsArray_namm(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);

var strAuth=new String();
for(i=0;i<document.forms[0].namm_auth.length;i++) {
	if (document.forms[0].namm_auth[i].selected == true) {
		strAuth=document.forms[0].namm_auth[i].value;
		}
}

if ( strAuth != "") {
	ps[ps.length]= new String(obrak +'name type="conference" authority="'+strAuth+'">\r\n');
}else{
	ps[ps.length]= new String(obrak +'name type="conference">\r\n');
}

if(document.forms[0].subElement_namm.value != "" ){
ps[ps.length]= new String(obrak +'namePart>'
	+bfont+document.forms[0].subElement_namm.value+efont
	+obrak+'/namePart>\r\n');
}

//do not make empty role tags

var numSelected =0;
for(i=0;i<document.forms[0].namm_role.length;i++) {
	if (document.forms[0].namm_role[i].selected == true) {
		numSelected++;
		break;
		}
}
		
if ( numSelected > 0 ) {

ps[ps.length]= new String(obrak +'role>\r\n');


for(i=0;i<document.forms[0].namm_role.length;i++) {
	if (document.forms[0].namm_role[i].selected == true) {
		ps[ps.length] = new String(obrak +'roleTerm authority="marcrelator" type="text">'
		+bfont+document.forms[0].namm_role[i].value+efont
		+obrak+'/roleTerm>\r\n');
		}
}//end for


ps[ps.length]= new String(obrak +'/role>\r\n');

}//end role tags 

ps[ps.length]= new String(obrak +'/name>\r\n');

return(ps);
}


function buildTagsArray_occu(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);


ps[ps.length]= new String(obrak +'occupation>'
	+bfont+document.forms[0].subElement_occu_01.value+efont
	+obrak+'/occupation>\r\n');

if (document.forms[0].subElement_occu_02.value !="") {
ps[ps.length]= new String(obrak +'occupation>'
	+bfont+document.forms[0].subElement_occu_02.value+efont
	+obrak+'/occupation>\r\n');
}

if (document.forms[0].subElement_occu_03.value !="") {
ps[ps.length]= new String(obrak +'occupation>'
	+bfont+document.forms[0].subElement_occu_03.value+efont
	+obrak+'/occupation>\r\n');
}

if (document.forms[0].subElement_occu_04.value !="") {
ps[ps.length]= new String(obrak +'occupation>'
	+bfont+document.forms[0].subElement_occu_04.value+efont
	+obrak+'/occupation>\r\n');
}

if (document.forms[0].subElement_occu_05.value !="") {
ps[ps.length]= new String(obrak +'occupation>'
	+bfont+document.forms[0].subElement_occu_05.value+efont
	+obrak+'/occupation>\r\n');
}

if (document.forms[0].subElement_occu_06.value !="") {
ps[ps.length]= new String(obrak +'occupation>'
	+bfont+document.forms[0].subElement_occu_06.value+efont
	+obrak+'/occupation>\r\n');
}

return(ps);
}//end function



function buildTagsArray_temp(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);

var strDateType = new String();
for (i=0;i<document.forms[0].subElement_temp_date_type.length;i++) {
	if(document.forms[0].subElement_temp_date_type[i].selected == true) {
		strDateType =document.forms[0].subElement_temp_date_type[i].value;
		}
	}

if (strDateType=="singleDate") {
	ps[ps.length]= new String(obrak +'temporal encoding="w3dctf">'
	+bfont+document.forms[0].subElement_temp.value+efont
	+obrak+'/temporal>\r\n');
} else if (strDateType=="beginDate") {
	ps[ps.length]= new String(obrak +'temporal encoding="w3dctf" point="start">'
	+bfont+document.forms[0].subElement_temp.value+efont
	+obrak+'/temporal>\r\n');
} else if (strDateType=="endDate") {
	ps[ps.length]= new String(obrak +'temporal encoding="w3dctf" point="end">'
	+bfont+document.forms[0].subElement_temp.value+efont
	+obrak+'/temporal>\r\n');
}

return(ps);
}//end function
	
function buildTagsArray_titl(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);

var strAuth = new String(document.forms[0].titl_auth.value);

if ( strAuth != "") {
	ps[ps.length]= new String(obrak +'titleInfo authority="'+strAuth+'">\r\n');
}else{
	ps[ps.length]= new String(obrak +'titleInfo>\r\n');
}

if (document.forms[0].subElement_titl_nonSort.value != "") {
ps[ps.length]= new String(obrak +'nonSort>'
	+bfont+document.forms[0].subElement_titl_nonSort.value+efont
	+obrak+'/nonSort>\r\n');
}

if (document.forms[0].subElement_titl_title.value != "") {
ps[ps.length]= new String(obrak +'title>'
	+bfont+document.forms[0].subElement_titl_title.value+efont
	+obrak+'/title>\r\n');
}

if (document.forms[0].subElement_titl_subTitle.value != "") {
ps[ps.length]= new String(obrak +'subTitle>'
	+bfont+document.forms[0].subElement_titl_subTitle.value+efont
	+obrak+'/subTitle>\r\n');
}

if (document.forms[0].subElement_titl_partNumber.value != "") {
ps[ps.length]= new String(obrak +'partNumber>'
	+bfont+document.forms[0].subElement_titl_partNumber.value+efont
	+obrak+'/partNumber>\r\n');
}

if (document.forms[0].subElement_titl_partName.value != "") {
ps[ps.length]= new String(obrak +'partName>'
	+bfont+document.forms[0].subElement_titl_partName.value+efont
	+obrak+'/partName>\r\n');
}

ps[ps.length]= new String(obrak +'/titleInfo>\r\n');

return(ps);

}//end function

function buildTagsArray_topi(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);


ps[ps.length]= new String(obrak +'topic>'
	+bfont+document.forms[0].subElement_topi_01.value+efont
	+obrak+'/topic>\r\n');

if (document.forms[0].subElement_topi_02.value !="") {
ps[ps.length]= new String(obrak +'topic>'
	+bfont+document.forms[0].subElement_topi_02.value+efont
	+obrak+'/topic>\r\n');
}

if (document.forms[0].subElement_topi_03.value !="") {
ps[ps.length]= new String(obrak +'topic>'
	+bfont+document.forms[0].subElement_topi_03.value+efont
	+obrak+'/topic>\r\n');
}

if (document.forms[0].subElement_topi_04.value !="") {
ps[ps.length]= new String(obrak +'topic>'
	+bfont+document.forms[0].subElement_topi_04.value+efont
	+obrak+'/topic>\r\n');
}

if (document.forms[0].subElement_topi_05.value !="") {
ps[ps.length]= new String(obrak +'topic>'
	+bfont+document.forms[0].subElement_topi_05.value+efont
	+obrak+'/topic>\r\n');
}

if (document.forms[0].subElement_topi_06.value !="") {
ps[ps.length]= new String(obrak +'topic>'
	+bfont+document.forms[0].subElement_topi_06.value+efont
	+obrak+'/topic>\r\n');
}

return(ps);
}//end function




/*-------------saved as example---------------*/
function xxx_buildTagsArray_header(N){


	//alert("buildTagsArray_header");

	//N=0 no red, use '<' in xml tag
	//N>0 insert red use '&lt;' in xml tag to make html viewable

	var NI = 0;
	if ( N == "0" ) { NI=0; } else { NI=1; }

	
	var bfont= new String(BFONT[NI]);
	var efont= new String(EFONT[NI]);
	var obrak= new String(OBRAK[NI]);
	var num = new Number(N);
	var commentFilename    = new String(parent.U.document.UF.VVcomment_01.value);
	var commentNumTiffs    = new String(parent.U.document.UF.VVcomment_02.value);
	var commentReloadDate  = new String(parent.U.document.UF.VVcomment_03.value);
	var commentContributor = new String(parent.U.document.UF.VVcomment_03c.value);
	var commentProject     = new String(parent.U.document.UF.VVcomment_03p.value);
	var commentDate        = new String(parent.U.document.UF.VVcomment_03d.value);
	var commentValidate    = new String(parent.U.document.UF.VVcomment_04.value);

	//alert("commentFilename=\n"+commentFilename);
	//alert("commentDate=\n"+commentDate);
	//alert("commentNumTiffs="\n"+commentNumTiffs);
	if ( num >0 ) {
        	commentFilename     = commentFilename.replace(/\</g,"&#060;");
        	commentNumTiffs     = commentNumTiffs.replace(/\</g,"&#060;");
        	commentReloadDate   = commentReloadDate.replace(/\</g,"&#060;");
        	commentContributor  = commentContributor.replace(/\</g,"&#060;");
        	commentProject      = commentProject.replace(/\</g,"&#060;");
        	commentDate         = commentDate.replace(/\</g,"&#060;");
        	commentValidate     = commentValidate.replace(/\</g,"&#060;");
		}



var ps=new Array();


///document.write('<?xml version="1.0"  ?>\r\n'); 

/////////////////////////////////////////////////////header <mods:mods

ps[ps.length] = new String(obrak +'?xml version="1.0" encoding="UTF-8"  ?>\r\n'); 


/*---------------dec 14 2006 header---------------------------------------------------------*/
ps[ps.length] = new String(obrak +'mods:mods xmlns:mods="http://www.loc.gov/mods/v3" \r\n' 
	+' xmlns:xlink="http://www.w3.org/1999/xlink" \r\n'
	+' xmlns="http://www.loc.gov/mods/v3" \r\n' 
	+' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \r\n'
	+' xsi:schemaLocation="http://www.loc.gov/mods/v3 \r\n'
	+' http://www.loc.gov/standards/mods/v3/mods-3-2.xsd" ID="MODS" version="3.2">'
	);
ps[ps.length] = new String(obrak +'!-- Volunteer Voices MODS profile \r\n'	
	+' released 14 December 2006 by Melanie Feltner-Reichert -->\r\n'
	);
/*---------------dec 14 2006 header---------------------------------------------------------*/

/*-------------------------------------------------------------------------------------------
This header (dec 14 2006) validated on xml spy 07082007 - chd and mfr
<?xml version="1.0" encoding="UTF-8"?> 
<mods:mods xmlns:mods="http://www.loc.gov/mods/v3" 
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns="http://www.loc.gov/mods/v3" 
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
 xsi:schemaLocation="http://www.loc.gov/mods/v3
 http://www.loc.gov/standards/mods/v3/mods-3-2.xsd" ID="MODS" version="3.2">  
---------------------------------------------------------------------------------------------*/

/*---------nov 24 2006 header------------------------------------------------------------------
ps[ps.length] = new String(obrak +'mods:mods xmlns:mods="http://www.loc.gov/mods/v3" \r\n' 
	+' xmlns:xlink="http://www.w3.org/1999/xlink" \r\n'
	+' xmlns="http://www.loc.gov/mods/v3" \r\n' 
	+' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \r\n'
	+' xsi:schemaLocation="http://www.loc.gov/mods/v3 \r\n'
	+' http://www.loc.gov/standards/mods/v3/mods-3-2.xsd"\r\n'
	+'  ID="MODS" version="3.2" >\r\n'
	);
ps[ps.length] = new String(obrak +'!-- Volunteer Voices MODS profile \r\n'	
	+' released 24 November 2006 by Melanie Feltner-Reichert -->\r\n'
	);

-----------nov 24 2006 header------------------------------------------------------------------*/


ps[ps.length] = new String(obrak+'!-- Volunteer Voices Workbook \r\n'
        +' version 1.0 released 6 February 2007 by Christine Haygood Deane  -->\r\n'
	);


ps[ps.length] = new String(commentContributor+" \r\n"); 
ps[ps.length] = new String(commentProject+" \r\n"); 
ps[ps.length] = new String(commentDate+" \r\n"); 
ps[ps.length] = new String(commentFilename+" \r\n"); 
ps[ps.length] = new String(commentNumTiffs+" \r\n"); 
ps[ps.length] = new String(commentReloadDate+" \r\n"); 
ps[ps.length] = new String(commentValidate+" \r\n"); 


return(ps);


}///end function buildTagsArray_header()


