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

//treat the document.write strings in vv_popupSubjects.htm as CONSTANTS
//load into page_lower

//var select_id="xx";

/*
function getString_cart(str) {
	var select_id= new String(str);
//var str_popup_auth = new String(
	document.write(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td class="popcell_12">\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
        +'<tr><td colspan="3" class="popcell_12">\r\n'
        +'<b>Select Subject Authority</b> \r\n'
 	+'<br>The list below is a complete list of Subject Authority codes from the Library of Congress.\r\n'
	+'<br>Code explanations have been shortened for display in the list box.\n\n'
	+'<br>For full information go to <a href="http://www.loc.gov/marc/sourcecode/subject/subjectsource.html" target="_blank">Source Codes for Subjects</a>\r\n'
	+'<br>Network Development and MARC Standards Office Library of Congress.\r\n'
	+'</td></tr>\r\n'
	+'<tr><td colspan="3" class="popcell_12">\r\n'
	+'<select name="selectAuth" size="15" onchange="subject_auth_pop()">\r\n'
	+window.opener.parent.L.getSelectList(window.opener.parent.L.aSubjectAuthority,-1)
	//+'<option value="none" >none</option>\r\n'
	//+'<option value="lcsh">lcsh</option>\r\n'
	//+'<option value="tgm">tgm</option>\r\n'
	//+'<option value="local">local</option>\r\n'
	//+'<option value="other">other</option>\r\n'
	+'</select>'
	+'<br>Your selection code:&nbsp;<input type="text" size="8" name="subject_auth" value="">\r\n'
	+'<tr><td colspan="3">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="3" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Initial Text" onclick="createTextInit()"><p>\r\n'
	+'<input type="hidden" name="firstLine" value="">\r\n'
        );
}//end function
*/

/*
var str_popup_cart = new String(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
        +'<tr><td colspan="3">\r\n'
        +'<b>SUBJECT BLOCK for Cartographics</b> \r\n'
	+'<br>This subelement has no attributes. \r\n'
	+'<br>DLF Aquifer Guidelines, page 57.\r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;coordinates> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_cart_coordinates" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/coordinates> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;scale> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_cart_scale" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/scale> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;projection> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_cart_projection" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/projection> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td colspan="3">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="8" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Text" onclick="createText_cart()"><p>\r\n'
        );


var str_popup_cgeo = new String(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
        +'<tr><td colspan="3">\r\n'
        +'<b>SUBJECT BLOCK for Geographic Code</b> \r\n'
	+'<br>This subelement must have an authority attribute that indicates the encoding scheme.\r\n'
	+'<br>These Guidelines recommend <b>iso3166</b> authority.\r\n'
	+'<br>DLF Aquifer Guidlines, page 57-58.\r\n'
        +'</td></tr>\r\n'
	+'<tr><td colspan="3">\r\n'
	+'<select name="cgeo_auth" size="3">\r\n'
	+'<option value="marcgac">marcgac</option>\r\n'
	+'<option value="marccountry">marccountry</option>\r\n'
	+'<option value="iso3166" selected>iso3166</option>\r\n'
	+'</select>\r\n'
	+'</td></tr>\r\n'
	
	+'<tr><td> \r\n'
        +'&lt;geographicCode> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_cgeo" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/geographicCode> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td colspan="3">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="8" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Text" onclick="createText_cgeo()"><p>\r\n'
        );

var str_popup_geog = new String(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
        +'<tr><td colspan="3">\r\n'
        +'<b>SUBJECT BLOCK for Geographic</b> \r\n'
	+'<br>This subelement has no attributes.\r\n'
	+'<br>If a controlled subject term is used, indicate authority at the subject level.\r\n'
	+'<br>DLF Aquifer Guidlines, page 55.\r\n'
        +'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;geographic> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_geog_01" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/geographic> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;geographic> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_geog_02" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/geographic> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;geographic> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_geog_03" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/geographic> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;geographic> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_geog_04" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/geographic> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;geographic> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_geog_05" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/geographic> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;geographic> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_geog_06" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/geographic> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td colspan="3">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="8" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Text" onclick="createText_geog()"><p>\r\n'
        );

var str_popup_hgeo = new String(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
        +'<tr><td colspan="3">\r\n'
        +'<b>SUBJECT BLOCK for Hierarchical Geographic</b> \r\n'
	+'<br>This subelement has no attributes.\r\n'
	+'<br>The Authority should be specified at the subject level.\r\n'
	+'<br>DLF Aquifer Guidlines, page 56.\r\n'
        +'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;continent> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_hgeo_continent" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/continent> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;country> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_hgeo_country" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/country> \r\n'
	+'</td></tr>\r\n'


	+'<tr><td> \r\n'
        +'&lt;province> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_hgeo_province" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/province> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;region> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_hgeo_region" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/region> \r\n'
	+'</td></tr>\r\n'


	+'<tr><td> \r\n'
        +'&lt;state> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_hgeo_state" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/state> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;territory> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_hgeo_territory" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/territory> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;county> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_hgeo_county" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/county> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;city> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_hgeo_city" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/city> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;island> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_hgeo_island" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/island> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;area> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_hgeo_area" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/area> \r\n'
	+'</td></tr>\r\n'


	+'<tr><td colspan="3">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="8" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Text" onclick="createText_hgeo()"><p>\r\n'
        );

var str_popup_genr = new String(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
        +'<tr><td colspan="3">\r\n'
        +'<b>SUBJECT BLOCK for Genre</b> \r\n'
	+'<br>This subelement must have an authority attribute that indicates the controlled vocabulary.\r\n'
	+'<br>DLF Aquifer Guidlines, page 56 and pages 27-28.\r\n'
        +'</td></tr>\r\n'
	+'<tr><td colspan="3">\r\n'
	+'Genre Authority is Required.\r\n'
	+'<select name="genr_auth" size="5">\r\n'
	+'<option value="none">none</option>\r\n'
	+'<option value="aat">marcgac</option>\r\n'
	+'<option value="gsafd">marccountry</option>\r\n'
	+'<option value="lcsh">lcsh</option>\r\n'
	+'<option value="marcgt">marcgt</option>\r\n'
	+'</select>\r\n'
	+'</td></tr>\r\n'
	
	+'<tr><td> \r\n'
        +'&lt;genre> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_genr" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/genre> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td colspan="3">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="8" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Text" onclick="createText_genr()"><p>\r\n'
        );

var str_popup_namp = new String(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
        +'<tr><td colspan="3" class="popcell_12">\r\n'
        +'<b>SUBJECT BLOCK for Name type="personal"</b> \r\n'
	//+'<font face="arial" size="2">\r\n'
	+'<br>This subelement must have an authority attribute that indicates the controlling authority.\r\n'
	+'<br>DLF Aquifer Guidlines, page 56 and page 14.\r\n'
	//+'</font>\r\n'
        +'</td></tr>\r\n'
	+'<tr><td colspan="3" class="popcell_12">\r\n'
	+'Select authority for name: <br>\r\n'
	+'<select name="namp_auth" size="3">\r\n'
	+window.opener.parent.L.getSelectList(window.opener.parent.L.aSubjectAuthority,-1)
	//+'<option selected value="none">none</option>\r\n'
	//+'<option value="ulan">ulan</option>\r\n'
	//+'<option value="lcnaf">lcnaf</option>\r\n'
	+'</select>\r\n'
        +'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;namePart type="family"> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_namp_family" value="">\r\n'
	+'</td><td>\r\n'
	+'&lt;/namePart>\r\n'
	+'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;namePart type="given"> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_namp_given" value="">\r\n'
	+'</td><td>\r\n'
	+'&lt;/namePart>\r\n'
	+'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;namePart type="date"> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_namp_date" value="">\r\n'
	+'</td><td class="popcell_12">\r\n'
	+'&lt;/namePart>\r\n'
	+'</td></tr>\r\n'

	+'<input type="hidden" name="namp_role" value="">\r\n'

	+'<tr><td colspan="3" class="popcell_12">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="8" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Text" onclick="createText_namp()"><p>\r\n'
        );


var str_popup_namc = new String(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
        +'<tr><td colspan="3">\r\n'
        +'<b>SUBJECT BLOCK for Name type="corporate"</b> \r\n'
	+'<br>This subelement is recommended to have an authority attribute<br>that indicates the controlling authority.\r\n'
	+'<br>DLF Aquifer Guidlines, page 56 and page 14.\r\n'
        +'</td></tr>\r\n'
	+'<tr><td colspan="3">\r\n'
	+'Select authority for name: \r\n'
	+'<select name="namc_auth" size="3">\r\n'
	+'<option selected value="none">none</option>\r\n'
	+'<option value="ulan">ulan</option>\r\n'
	+'<option value="lcnaf">lcnaf</option>\r\n'
	+'</select>\r\n'
        +'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;namePart> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_namc" value="">\r\n'
	+'</td><td>\r\n'
	+'&lt;/namePart>\r\n'
	+'</td></tr>\r\n'


	+'<tr><td colspan="3">&lt;role></td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;roleTerm authority="marcrelator" type="text"> \r\n'
	+'</td><td>\r\n'
	+'<b>Select as many Role Terms as you dare: </b> \r\n'
	+'<select name="namc_role" size="6" multiple> \r\n'
	+window.opener.parent.L.getSelectList(window.opener.parent.L.aRole,-1)
	+'</select> \r\n'
	+'<p>&nbsp;&nbsp;To select more than one Role Term, <br>&nbsp;&nbsp;hold down the <b>CNTL</b> button while you click on terms.<p> \r\n'
	+'&nbsp;&nbsp;Complete Role Descriptions from <a href="http://www.loc.gov/marc/sourcecode/relator/relatorlist.html" target="blank">MARK Relatorlist</a>.<p> \r\n'
	+'</td><td>\r\n'
	+'&lt;/roleTerm>\r\n'
	+'</td></tr>\r\n'

	+'<tr><td colspan="3">&lt;/role></td></tr>\r\n'



	+'<tr><td colspan="3">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="8" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Text" onclick="createText_namc()"><p>\r\n'
        );


var str_popup_namm = new String(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
        +'<tr><td colspan="3">\r\n'
        +'<b>SUBJECT BLOCK for Name type="conference"</b> \r\n'
	+'<br>This subelement is recommended to have an authority attribute<br>that indicates the controlling authority.\r\n'
	+'<br>DLF Aquifer Guidlines, page 56 and page 14.\r\n'
        +'</td></tr>\r\n'
	+'<tr><td colspan="3">\r\n'
	+'Select authority for name: \r\n'
	+'<select name="namm_auth" size="3">\r\n'
	+'<option selected value="none">none</option>\r\n'
	+'<option value="ulan">ulan</option>\r\n'
	+'<option value="lcnaf">lcnaf</option>\r\n'
	+'</select>\r\n'
        +'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;namePart> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_namm" value="">\r\n'
	+'</td><td>\r\n'
	+'&lt;/namePart>\r\n'
	+'</td></tr>\r\n'


	+'<tr><td colspan="3">&lt;role></td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;roleTerm authority="marcrelator" type="text"> \r\n'
	+'</td><td>\r\n'
	+'<b>Select as many Role Terms as you dare: </b> \r\n'
	+'<select name="namm_role" size="6" multiple> \r\n'
	+window.opener.parent.L.getSelectList(window.opener.parent.L.aRole,-1)
	+'</select> \r\n'
	+'<p>&nbsp;&nbsp;To select more than one Role Term, <br>&nbsp;&nbsp;hold down the <b>CNTL</b> button while you click on terms.<p> \r\n'
	+'&nbsp;&nbsp;Complete Role Descriptions from <a href="http://www.loc.gov/marc/sourcecode/relator/relatorlist.html" target="blank">MARK Relatorlist</a>.<p> \r\n'
	+'</td><td>\r\n'
	+'&lt;/roleTerm>\r\n'
	+'</td></tr>\r\n'

	+'<tr><td colspan="3">&lt;/role></td></tr>\r\n'

	+'<tr><td colspan="3">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="8" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Text" onclick="createText_namm()"><p>\r\n'
        );



var str_popup_occu = new String(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
        +'<tr><td colspan="3">\r\n'
        +'<b>SUBJECT BLOCK for Occupation</b> \r\n'
	+'<br>This subelement has no attributes.\r\n'
	+'<br>The Authority should be specified at the subject level.\r\n'
	+'<br>DLF Aquifer Guidlines, page 58.\r\n'
        +'</td></tr>\r\n'
	
	+'<tr><td> \r\n'
        +'&lt;occupation> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_occu_01" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/occupation> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;occupation> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_occu_02" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/occupation> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;occupation> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_occu_03" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/occupation> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;occupation> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_occu_04" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/occupation> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;occupation> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_occu_05" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/occupation> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td> \r\n'
        +'&lt;occupation> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_occu_06" value="">\r\n'
	+'</td><td>\r\n'
        +'&lt;/occupation> \r\n'
	+'</td></tr>\r\n'


	+'<tr><td colspan="3">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="8" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Text" onclick="createText_occu()"><p>\r\n'
        );


var str_popup_titl = new String(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td >\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
        +'<tr><td colspan="3" class="popcell_12">\r\n'
        +'<b>SUBJECT BLOCK for Title Info</b> \r\n'
	+'<br>This subelement must have an authority attribute that indicates the controlling authority.\r\n'
	+'<br>DLF Aquifer Guidlines, page 56 and page 14.\r\n'
        +'</td></tr>\r\n'

	+'<tr><td colspan="3" class="popcell_12">\r\n'
	+'Select authority for titlInfo: <br>\r\n'
	+'<select name="titleInfo_auth" size="3" onchange="titleInfo_auth_pop()">\r\n'
	+'<option value="none">none </option>\r\n'
	+'<option value="naf">naf -- NACO authority file</option>\r\n'
	+'<option value="sanb">sanb -- South African national bibliographic authority file</option>\r\n'
	+'</select>\r\n'
	+'<br>Your selection for authority for titleInfo: <input name="titl_auth" size="24">\r\n'
        +'</td></tr>\r\n'

	+'<tr><td colspan="3" class="popcell_12">\r\n'
	+'Select type for titlInfo: <br>\r\n'
	+'<select name="titleInfo_type" size="5" onchange="titleInfo_type_pop()">\r\n'
	+'<option value="none">none </option>\r\n'
	+'<option value="abbreviated">abbreviated</option>\r\n'
	+'<option value="translated">translated</option>\r\n'
	+'<option value="alternative">alternative</option>\r\n'
	+'<option value="uniform">uniform</option>\r\n'
	+'</select>\r\n'
	+'<br>Your selection for type for titleInfo: <input name="titl_type" size="24">\r\n'
        +'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;nonSort> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_titl_nonSort" value="">\r\n'
	+'</td><td class="popcell_12">\r\n'
        +'&lt;/nonSort> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;title> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_titl_title" value="">\r\n'
	+'</td><td class="popcell_12">\r\n'
        +'&lt;/title> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;subTitle> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_titl_subTitle" value="">\r\n'
	+'</td><td class="popcell_12">\r\n'
        +'&lt;/subTitle> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;partNumber> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_titl_partNumber" value="">\r\n'
	+'</td><td class="popcell_12">\r\n'
        +'&lt;/partNumber> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;partName> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_titl_partName" value="">\r\n'
	+'</td><td class="popcell_12">\r\n'
        +'&lt;/partName> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td colspan="3" class="popcell_12">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="8" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Text" onclick="createText_titl()"><p>\r\n'
        );



var str_popup_topi = new String(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
	+'<tr><td colspan="3" class="popcell_12">\r\n'
        +'<b>SUBJECT BLOCK for Topic</b> \r\n'
	+'<br>This subelement has no attributes.\r\n'
	+'<br>The Authority should be specified at the subject level.\r\n'
	+'<br>DLF Aquifer Guidlines, pages 54-55.\r\n'
        +'</td></tr>\r\n'
	
	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;topic> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_topi_01" value="">\r\n'
	+'</td><td class="popcell_12">\r\n'
        +'&lt;/topic> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;topic> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_topi_02" value="">\r\n'
	+'</td><td class="popcell_12">\r\n'
        +'&lt;/topic> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;topic> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_topi_03" value="">\r\n'
	+'</td><td class="popcell_12">\r\n'
        +'&lt;/topic> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;topic> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_topi_04" value="">\r\n'
	+'</td><td class="popcell_12">\r\n'
        +'&lt;/topic> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;topic> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_topi_05" value="">\r\n'
	+'</td><td class="popcell_12">\r\n'
        +'&lt;/topic> \r\n'
	+'</td></tr>\r\n'

	+'<tr><td class="popcell_12"> \r\n'
        +'&lt;topic> \r\n'
	+'</td><td>\r\n'
        +'<input type="text" size="40" name="subElement_topi_06" value="">\r\n'
	+'</td><td class="popcell_12">\r\n'
        +'&lt;/topic> \r\n'
	+'</td></tr>\r\n'


	+'<tr><td colspan="3" class="popcell_12">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="8" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Text" onclick="createText_topi()"><p>\r\n'
        );


var str_popup_temp = new String(
         '<font color="00ffee">vv_popupSubjects.htm called by '+select_id+' </font>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ddeeff">\r\n'
        +'<tr><td>\r\n'
        +'<table border="1" cellpadding="4" cellspacing="0" width="90%" bgcolor="ffeeff">\r\n'
        +'<tr><td colspan="3">\r\n'
        +'<b>SUBJECT BLOCK for Temporal</b> \r\n'
	+'<br>This subelement has no attributes.\r\n'
	+'<br>The Authority should be specified at the subject level.\r\n'
	+'<br>The supported encoding is w3cdtf (ISO 8601 profile).\r\n'
	+'<br>DLF Aquifer Guidlines, pages 54-55.\r\n'
        +'</td></tr>\r\n'
	+'<tr><td>  \r\n'
	+'<table border="1" cellpadding="8" cellspacing="0" bgcolor="ddeeff">\r\n'
	+'<tr><td valign="top" align="center"><p>Year (must be 4 digits)\r\n'
	+'<br> <input type="text"  name="year" value=""   '
	+'onKeypress="return testYear(event,this)">\r\n'
	+'<p> <input type="button" name="clear_year" value="Clear \nYear" onclick="clearYear()">\r\n'
	+'<p>Type of Date.<br>\r\n'
	+'<select name="subElement_temp_date_type" size="3">\r\n'
	+'<option value="singleDate" selected>Single Date</option>\r\n'
	+'<option value="beginDate">Begin Date</option>\r\n'
	+'<option value="endDate">End Date</option>\r\n'
	+'</select>\r\n'
	+' </td>\r\n'
	
	+'<td><p>Month <br>\r\n'
	+'<select name="month" size="12">\r\n'
	+'	<option value="01" selected>January</option>\r\n'
	+'	<option value="02" >February</option>\r\n'
	+'	<option value="03" >March</option>\r\n'
	+'	<option value="04" >April</option>\r\n'
	+'	<option value="05" >May</option>\r\n'
	+'	<option value="06" >June</option>\r\n'
	+'	<option value="07" >July</option>\r\n'
	+'	<option value="08" >August</option>\r\n'
	+'	<option value="09" >September</option>\r\n'
	+'	<option value="10" >October</option>\r\n'
	+'	<option value="11" >November</option>\r\n'
	+'	<option value="12" >December</option>\r\n'
	+'</select>\r\n'
	+'<td>Day of Month<br>\r\n'
	+'<select name="dayofmonth" size="12" style="width:100px">\r\n'
	+'	<option value="01" selected>1</option>\r\n'
	+'	<option value="02" >2</option>\r\n'
	+'	<option value="03" >3</option>\r\n'
	+'	<option value="04" >4</option>\r\n'
	+'	<option value="05" >5</option>\r\n'
	+'	<option value="06" >6</option>\r\n'
	+'	<option value="07" >7</option>\r\n'
	+'	<option value="08" >8</option>\r\n'
	+'	<option value="09" >9</option>\r\n'
	+'	<option value="10" >10</option>\r\n'
	+'	<option value="11" >11</option>\r\n'
	+'	<option value="12" >12</option>\r\n'
	+'	<option value="13" >13</option>\r\n'
	+'	<option value="14" >14</option>\r\n'
	+'	<option value="15" >15</option>\r\n'
	+'	<option value="16" >16</option>\r\n'
	+'	<option value="17" >17</option>\r\n'
	+'	<option value="18" >18</option>\r\n'
	+'	<option value="19" >19</option>\r\n'
	+'	<option value="20" >20</option>\r\n'
	+'	<option value="21" >21</option>\r\n'
	+'	<option value="22" >22</option>\r\n'
	+'	<option value="23" >23</option>\r\n'
	+'	<option value="24" >24</option>\r\n'
	+'	<option value="25" >25</option>\r\n'
	+'	<option value="26" >26</option>\r\n'
	+'	<option value="27" >27</option>\r\n'
	+'	<option value="28" >28</option>\r\n'
	+'	<option value="29" >29</option>\r\n'
	+'	<option value="30" >30</option>\r\n'	
	+'	<option value="31" >31</option>\r\n'			
	+'</select>\r\n'
	+'</td></tr>\r\n'
	+'<tr><td colspan="3">  \r\n'
	+'&nbsp;&nbsp;<input type="button" name="B11" value="Enter New Date" onclick="getTheDate(this,1)" >\r\n'
	+'&nbsp;&nbsp;<input type="button" name="B13" value="Clear Date" onclick="clearDate()">\r\n'
	+' <input type="hidden" name="datestring" value="" READONLY> \r\n'
	+' <input type="text" name="subElement_temp" value="" READONLY> \r\n'
	

	+'</td></tr>  \r\n'
	+'<tr><td colspan="3">\r\n'
	+'the end\r\n'
        +'</td></tr></table> \r\n'
        +'<input type="hidden" name="hidden_select_id" value="'+select_id+'" > \r\n'
	+'<p>&nbsp;\r\n'
	+'<textarea rows="8" cols="60" name="LOCTA" EADONLY></textarea><br>\r\n'
	+'<input type="button" name="B2" value="Create Text" onclick="createText_temp()"><p>\r\n'
	
	+'</td></tr></table></table> \r\n'
	);

*/

