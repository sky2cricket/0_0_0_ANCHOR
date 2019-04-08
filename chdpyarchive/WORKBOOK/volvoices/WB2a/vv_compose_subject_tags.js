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

if (!confirm("strAuth="+strAuth)){return;}
if ( strAuth=="none") {
	ps[ps.length] = new String(obrak + 'subject>\r\n');
}else{
	ps[ps.length] = new String(obrak + 'subject authority="'+bfont+strAuth+efont+'">\r\n');
}

alert("ps[0]="+ps[0]);


return (ps);

}//end function
----------------------------*/


function buildTagsArray_cart(){

var ps=new Array();
	var bfont= new String(BFONT[0]); //was [0]
	var efont= new String(EFONT[0]); //was [0]
	var obrak= new String(OBRAK[0]); //was [0]

ps[ps.length]= new String(obrak+'mods:cartographics>\r\n');

//cartographics child coordinates
if( document.forms[0].subElement_cart_coordinates.value != ""){
ps[ps.length] = new String(obrak+'mods:coordinates>'
	+bfont+document.forms[0].subElement_cart_coordinates.value+efont
	+obrak+'/mods:coordinates>\r\n');
}


//cartographics child scale
if( document.forms[0].subElement_cart_scale.value != ""){
ps[ps.length] = new String(obrak+'mods:scale>'
	+bfont+document.forms[0].subElement_cart_scale.value+efont
	+obrak+'/mods:scale>\r\n');
}

//cartographics child projection
if( document.forms[0].subElement_cart_projection.value != ""){
ps[ps.length] = new String(obrak+'mods:projection>'
	+bfont+document.forms[0].subElement_cart_projection.value+efont
	+obrak+'/mods:projection>\r\n');
}

ps[ps.length] = new String(obrak+'/mods:cartographics>\r\n');

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

ps[ps.length]= new String(obrak+'mods:geographicCode authority="'+strAuth +'">'
	+bfont+document.forms[0].subElement_cgeo.value+efont
	+obrak+'/mods:geographicCode>\r\n');

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

ps[ps.length]= new String(obrak+'mods:genre authority="'+strAuth +'">'
	+bfont+document.forms[0].subElement_genr.value+efont
	+obrak+'/mods:genre>\r\n');

return(ps);
}

function buildTagsArray_geog(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);


ps[ps.length]= new String(obrak+'mods:geographic>'
	+bfont+document.forms[0].subElement_geog_01.value+efont
	+obrak+'/mods:geographic>\r\n');

if (document.forms[0].subElement_geog_02.value !="") {
ps[ps.length]= new String(obrak+'mods:geographic>'
	+bfont+document.forms[0].subElement_geog_02.value+efont
	+obrak+'/mods:geographic>\r\n');
}

if (document.forms[0].subElement_geog_03.value !="") {
ps[ps.length]= new String(obrak+'mods:geographic>'
	+bfont+document.forms[0].subElement_geog_03.value+efont
	+obrak+'/mods:geographic>\r\n');
}

if (document.forms[0].subElement_geog_04.value !="") {
ps[ps.length]= new String(obrak+'mods:geographic>'
	+bfont+document.forms[0].subElement_geog_04.value+efont
	+obrak+'/mods:geographic>\r\n');
}

if (document.forms[0].subElement_geog_05.value !="") {
ps[ps.length]= new String(obrak+'mods:geographic>'
	+bfont+document.forms[0].subElement_geog_05.value+efont
	+obrak+'/mods:geographic>\r\n');
}

if (document.forms[0].subElement_geog_06.value !="") {
ps[ps.length]= new String(obrak+'mods:geographic>'
	+bfont+document.forms[0].subElement_geog_06.value+efont
	+obrak+'/mods:geographic>\r\n');
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
//ps[ps.length] = new String(obrak+'mods:subject authority="lcsh">\r\n'
//	+obrak+'mods:hierarchicalGeographic>\r\n');
ps[ps.length]= new String(obrak+'mods:hierarchicalGeographic>\r\n');

//hierarchical geographic child continent
if( document.forms[0].subElement_hgeo_continent.value != ""){
ps[ps.length] = new String(obrak+'mods:continent>'
	+bfont+document.forms[0].subElement_hgeo_continent.value+efont
	+obrak+'/mods:continent>\r\n');
}

//hierarchical geographic child country
if( document.forms[0].subElement_hgeo_country.value != ""){
ps[ps.length] = new String(obrak+'mods:country>'
	+bfont+document.forms[0].subElement_hgeo_country.value+efont
	+obrak+'/mods:country>\r\n');
}

//hierarchical geographic child province
if( document.forms[0].subElement_hgeo_province.value != ""){
ps[ps.length] = new String(obrak+'mods:province>'
        +bfont+document.forms[0].subElement_hgeo_province.value+efont
        +obrak+'/mods:province>\r\n');
}

//hierarchical geographic child region
if( document.forms[0].subElement_hgeo_region.value != ""){
ps[ps.length] = new String(obrak+'mods:region>'
        +bfont+document.forms[0].subElement_hgeo_region.value+efont
        +obrak+'/mods:region>\r\n');
}

//hierarchical geographic child state
if( document.forms[0].subElement_hgeo_state.value != ""){
ps[ps.length] = new String(obrak+'mods:state>'
        +bfont+document.forms[0].subElement_hgeo_state.value+efont
        +obrak+'/mods:state>\r\n');
}

//hierarchical geographic child territory
if( document.forms[0].subElement_hgeo_territory.value != ""){
ps[ps.length] = new String(obrak+'mods:territory>'
        +bfont+document.forms[0].subElement_hgeo_territory.value+efont
        +obrak+'/mods:territory>\r\n');
}

//hierarchical geographic child county
if( document.forms[0].subElement_hgeo_county.value != ""){
ps[ps.length] = new String(obrak+'mods:county>'
        +bfont+document.forms[0].subElement_hgeo_county.value+efont
        +obrak+'/mods:county>\r\n');
}

//hierarchical geographic child city
if( document.forms[0].subElement_hgeo_city.value != ""){
ps[ps.length] = new String(obrak+'mods:city>'
        +bfont+document.forms[0].subElement_hgeo_city.value+efont
        +obrak+'/mods:city>\r\n');
}

//hierarchical geographic child island
if( document.forms[0].subElement_hgeo_island.value != ""){
ps[ps.length] = new String(obrak+'mods:island>'
        +bfont+document.forms[0].subElement_hgeo_island.value+efont
        +obrak+'/mods:island>\r\n');
}

//hierarchical geographic child area
if( document.forms[0].subElement_hgeo_area.value != ""){
ps[ps.length] = new String(obrak+'mods:area>'
        +bfont+document.forms[0].subElement_hgeo_area.value+efont
        +obrak+'/mods:area>\r\n');
}




ps[ps.length] = new String(obrak+'/mods:hierarchicalGeographic>\r\n');
//ps[ps.length] = new String(obrak+'/mods:subject>\r\n');
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
	ps[ps.length]= new String(obrak+'mods:name type="personal" authority="'+strAuth+'">\r\n');
}else{
	ps[ps.length]= new String(obrak+'mods:name type="personal">\r\n');
}


if(document.forms[0].subElement_namp_family.value != "" ){
ps[ps.length]= new String(obrak+'mods:namePart type="family">'
	+bfont+document.forms[0].subElement_namp_family.value+efont
	+obrak+'/mods:namePart>\r\n');
}

if(document.forms[0].subElement_namp_given.value != "" ){
ps[ps.length]= new String(obrak+'mods:namePart type="given">'
	+bfont+document.forms[0].subElement_namp_given.value+efont
	+obrak+'/mods:namePart>\r\n');
}

if(document.forms[0].subElement_namp_termsOfAddress.value != "" ){
ps[ps.length]= new String(obrak+'mods:namePart type="termsOfAddress">'
	+bfont+document.forms[0].subElement_namp_termsOfAddress.value+efont
	+obrak+'/mods:namePart>\r\n');
}

if(document.forms[0].subElement_namp_date.value != "" ){
ps[ps.length]= new String(obrak+'mods:namePart type="date">'
	+bfont+document.forms[0].subElement_namp_date.value+efont
	+obrak+'/mods:namePart>\r\n');
}


ps[ps.length]= new String(obrak+'/mods:name>\r\n');

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
	ps[ps.length]= new String(obrak+'mods:name type="corporate" authority="'+strAuth+'">\r\n');
}else{
	ps[ps.length]= new String(obrak+'mods:name type="corporate">\r\n');
}

if(document.forms[0].subElement_namc.value != "" ){
ps[ps.length]= new String(obrak+'mods:namePart>'
	+bfont+document.forms[0].subElement_namc.value+efont
	+obrak+'/mods:namePart>\r\n');
}


ps[ps.length]= new String(obrak+'/mods:name>\r\n');

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
	ps[ps.length]= new String(obrak+'mods:name type="conference" authority="'+strAuth+'">\r\n');
}else{
	ps[ps.length]= new String(obrak+'mods:name type="conference">\r\n');
}

if(document.forms[0].subElement_namm.value != "" ){
ps[ps.length]= new String(obrak+'mods:namePart>'
	+bfont+document.forms[0].subElement_namm.value+efont
	+obrak+'/mods:namePart>\r\n');
}


ps[ps.length]= new String(obrak+'/mods:name>\r\n');

return(ps);
}


function buildTagsArray_occu(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);


ps[ps.length]= new String(obrak+'mods:occupation>'
	+bfont+document.forms[0].subElement_occu_01.value+efont
	+obrak+'/mods:occupation>\r\n');

if (document.forms[0].subElement_occu_02.value !="") {
ps[ps.length]= new String(obrak+'mods:occupation>'
	+bfont+document.forms[0].subElement_occu_02.value+efont
	+obrak+'/mods:occupation>\r\n');
}

if (document.forms[0].subElement_occu_03.value !="") {
ps[ps.length]= new String(obrak+'mods:occupation>'
	+bfont+document.forms[0].subElement_occu_03.value+efont
	+obrak+'/mods:occupation>\r\n');
}

if (document.forms[0].subElement_occu_04.value !="") {
ps[ps.length]= new String(obrak+'mods:occupation>'
	+bfont+document.forms[0].subElement_occu_04.value+efont
	+obrak+'/mods:occupation>\r\n');
}

if (document.forms[0].subElement_occu_05.value !="") {
ps[ps.length]= new String(obrak+'mods:occupation>'
	+bfont+document.forms[0].subElement_occu_05.value+efont
	+obrak+'/mods:occupation>\r\n');
}

if (document.forms[0].subElement_occu_06.value !="") {
ps[ps.length]= new String(obrak+'mods:occupation>'
	+bfont+document.forms[0].subElement_occu_06.value+efont
	+obrak+'/mods:occupation>\r\n');
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
	ps[ps.length]= new String(obrak+'mods:temporal encoding="w3dctf">'
	+bfont+document.forms[0].subElement_temp.value+efont
	+obrak+'/mods:temporal>\r\n');
} else if (strDateType=="beginDate") {
	ps[ps.length]= new String(obrak+'mods:temporal encoding="w3dctf" point="start">'
	+bfont+document.forms[0].subElement_temp.value+efont
	+obrak+'/mods:temporal>\r\n');
} else if (strDateType=="endDate") {
	ps[ps.length]= new String(obrak+'mods:temporal encoding="w3dctf" point="end">'
	+bfont+document.forms[0].subElement_temp.value+efont
	+obrak+'/mods:temporal>\r\n');
} else if (strDateType =="altDate") {
	ps[ps.length]= new String(obrak+'mods:temporal>'
	+bfont+document.forms[0].subElement_temp.value+efont
	+obrak+'/mods:temporal>');
	alert("ps=\n"+ps);
}


return(ps);
}//end function
	
function buildTagsArray_titl(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);

var strAuth = new String(document.forms[0].titl_auth.value);
var strType = new String(document.forms[0].titl_type.value);
var strAuthPhrase = new String("");
var strTypePhrase = new String("");

if (strAuth != "none") {
	strAuthPhrase = ' authority="'+strAuth+'"';
	}
if (strType != "none") {
	strTypePhrase = ' type="'+strType+'"';
	}


ps[ps.length]= new String(obrak+'mods:titleInfo'+strAuthPhrase+strTypePhrase+'>\r\n');


if (document.forms[0].subElement_titl_nonSort.value != "") {
ps[ps.length]= new String(obrak+'mods:nonSort>'
	+bfont+document.forms[0].subElement_titl_nonSort.value+efont
	+obrak+'/mods:nonSort>\r\n');
}

if (document.forms[0].subElement_titl_title.value != "") {
ps[ps.length]= new String(obrak+'mods:title>'
	+bfont+document.forms[0].subElement_titl_title.value+efont
	+obrak+'/mods:title>\r\n');
}

if (document.forms[0].subElement_titl_subTitle.value != "") {
ps[ps.length]= new String(obrak+'mods:subTitle>'
	+bfont+document.forms[0].subElement_titl_subTitle.value+efont
	+obrak+'/mods:subTitle>\r\n');
}

if (document.forms[0].subElement_titl_partNumber.value != "") {
ps[ps.length]= new String(obrak+'mods:partNumber>'
	+bfont+document.forms[0].subElement_titl_partNumber.value+efont
	+obrak+'/mods:partNumber>\r\n');
}

if (document.forms[0].subElement_titl_partName.value != "") {
ps[ps.length]= new String(obrak+'mods:partName>'
	+bfont+document.forms[0].subElement_titl_partName.value+efont
	+obrak+'/mods:partName>\r\n');
}

ps[ps.length]= new String(obrak+'/mods:titleInfo>\r\n');

return(ps);

}//end function

function buildTagsArray_topi(){

var ps=new Array();
	var bfont= new String(BFONT[0]);
	var efont= new String(EFONT[0]);
	var obrak= new String(OBRAK[0]);


ps[ps.length]= new String(obrak+'mods:topic>'
	+bfont+document.forms[0].subElement_topi_01.value+efont
	+obrak+'/mods:topic>\r\n');

if (document.forms[0].subElement_topi_02.value !="") {
ps[ps.length]= new String(obrak+'mods:topic>'
	+bfont+document.forms[0].subElement_topi_02.value+efont
	+obrak+'/mods:topic>\r\n');
}

if (document.forms[0].subElement_topi_03.value !="") {
ps[ps.length]= new String(obrak+'mods:topic>'
	+bfont+document.forms[0].subElement_topi_03.value+efont
	+obrak+'/mods:topic>\r\n');
}

if (document.forms[0].subElement_topi_04.value !="") {
ps[ps.length]= new String(obrak+'mods:topic>'
	+bfont+document.forms[0].subElement_topi_04.value+efont
	+obrak+'/mods:topic>\r\n');
}

if (document.forms[0].subElement_topi_05.value !="") {
ps[ps.length]= new String(obrak+'mods:topic>'
	+bfont+document.forms[0].subElement_topi_05.value+efont
	+obrak+'/mods:topic>\r\n');
}

if (document.forms[0].subElement_topi_06.value !="") {
ps[ps.length]= new String(obrak+'mods:topic>'
	+bfont+document.forms[0].subElement_topi_06.value+efont
	+obrak+'/mods:topic>\r\n');
}

return(ps);
}//end function


////end vv_compose_subject_tags.js



