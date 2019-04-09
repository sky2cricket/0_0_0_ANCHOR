


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
	ps[ps.length] = new String(obrak+'mods:subject>\r\n');
}else{
	ps[ps.length] = new String(obrak+'mods:subject authority="'+strAuth'">\r\n');
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


if(document.forms[0].subElement_namp_date.value != "" ){
ps[ps.length]= new String(obrak+'mods:namePart type="date">'
	+bfont+document.forms[0].subElement_namp_date.value+efont
	+obrak+'/mods:namePart>\r\n');
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

ps[ps.length]= new String(obrak+'mods:role>\r\n');


for(i=0;i<document.forms[0].namp_role.length;i++) {
	if (document.forms[0].namp_role[i].selected == true) {
		ps[ps.length] = new String(obrak+'mods:roleTerm authority="marcrelator" type="text">'
		+bfont+document.forms[0].namp_role[i].value+efont
		+obrak+'/mods:roleTerm>\r\n');
		}
}//end for


ps[ps.length]= new String(obrak+'/mods:role>\r\n');

}//end role tags 

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

//do not make empty role tags

var numSelected =0;
for(i=0;i<document.forms[0].namc_role.length;i++) {
	if (document.forms[0].namc_role[i].selected == true) {
		numSelected++;
		break;
		}
}
		
if ( numSelected > 0 ) {

ps[ps.length]= new String(obrak+'mods:role>\r\n');


for(i=0;i<document.forms[0].namc_role.length;i++) {
	if (document.forms[0].namc_role[i].selected == true) {
		ps[ps.length] = new String(obrak+'mods:roleTerm authority="marcrelator" type="text">'
		+bfont+document.forms[0].namc_role[i].value+efont
		+obrak+'/mods:roleTerm>\r\n');
		}
}//end for


ps[ps.length]= new String(obrak+'/mods:role>\r\n');

}//end role tags 

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

//do not make empty role tags

var numSelected =0;
for(i=0;i<document.forms[0].namm_role.length;i++) {
	if (document.forms[0].namm_role[i].selected == true) {
		numSelected++;
		break;
		}
}
		
if ( numSelected > 0 ) {

ps[ps.length]= new String(obrak+'mods:role>\r\n');


for(i=0;i<document.forms[0].namm_role.length;i++) {
	if (document.forms[0].namm_role[i].selected == true) {
		ps[ps.length] = new String(obrak+'mods:roleTerm authority="marcrelator" type="text">'
		+bfont+document.forms[0].namm_role[i].value+efont
		+obrak+'/mods:roleTerm>\r\n');
		}
}//end for


ps[ps.length]= new String(obrak+'/mods:role>\r\n');

}//end role tags 

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
	ps[ps.length]= new String(obrak+'mods:titleInfo authority="'+strAuth+'">\r\n');
}else{
	ps[ps.length]= new String(obrak+'mods:titleInfo>\r\n');
}

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



