//vv_flextags.js
//for all dynamically created form tags

///page_01
// call with: var creator_01_hide= new String(get_creator_hide("01"));
function get_creator_hide(strN){
var sN = new String(strN);
//alert("get_creator_hide");

var creator_NN_hide= new String(" ");
    creator_NN_hide += '<input type="hidden" name="name_type_'+sN+'" value="">'
	+'<input type="hidden" name="name_authority_'+sN+'" value="">'
	+'<input type="hidden" name="namepart_family_'+sN+'" value="">'
	+'<input type="hidden" name="creator_lastname_'+sN+'" value="">'
	+'<input type="hidden" name="namepart_given_'+sN+'" value="">'
	+'<input type="hidden" name="creator_givenname_'+sN+'" value="">'
	+'<input type="hidden" name="namepart_date_'+sN+'" value="">'
	+'<input type="hidden" name="creator_fulldatestr_'+sN+'" value="">'
	+'<input type="hidden" name="creator_description_'+sN+'" value="">'
	+'<input type="hidden" name="creator_rolea_auth_'+sN+'" value="">'
	+'<input type="hidden" name="creator_rolea_'+sN+'" value="">'
	+'<input type="hidden" name="creator_roleb_auth_'+sN+'" value="">'
	+'<input type="hidden" name="creator_roleb_'+sN+'" value="">'
	+'<input type="hidden" name="creator_rolec_auth_'+sN+'" value="">'
	+'<input type="hidden" name="creator_rolec_'+sN+'" value="">' ;

//alert(creator_NN_hide);
return(creator_NN_hide);
}//end function get_creator_hide(strN)

//page_01
//call with: var creator_01_show= new String(get_creator_show("01"));
function get_creator_show(strN){

var sN = new String(strN);
//alert("get_creator_show(strN)");

var creator_NN_show= new String(" ");
    creator_NN_show += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
	//+'<tr class="greenrow"><td height="08" colspan="3"></td></tr> '
	+'<tr class="bgstandard"   xbgcolor="bb8844"><td class="label13nou">Name Type Buttons</td><td> '
	+'<input type="button" name="name_01a_callbutton" value="Personal Name " '
	+'onclick="parent.L.populate_name_fields2(1,1,700,600)" class="button120w">&nbsp; '
	+'<input type="button" name="name_01b_callbutton" value="Complex Personal Name" '
	+'onclick="parent.L.populate_name_fields2(1,2,700,600)" class="button140w">&nbsp; '
	+'<input type="button" name="name_01c_callbutton" value="Corporate Name" '
	+'onclick="parent.L.populate_name_fields2(1,3,700,600)" class="button120w">&nbsp; '
	+'<font face="arial" size="2">'
	+' chosen name type: <input type="text" name="chosen_name_type_'+sN+'" value="none" '
	+' size="16"></font>'
	+'</td><td>&nbsp</td></tr> '
	+'<tr class="bgstandard"  xbgcolor="bb8844"> <td class="label13u">'
	+' Name Type / Authority </td> <td valign="top"> &nbsp;&nbsp; '

	+' <input class="requirednw" type="text" size="6" value="" READONLY name="name_type_'+sN+'"> name_type_'+sN+'  '
	+' <input class="notrequirednw" type="text" size="6" value="" READONLY name="name_authority_'+sN+'"> name_authority_'+sN+' '
	+'</td> <td>&nbsp</td> </tr>'
	+' <tr class="bgstandard"   xbgcolor="bb8844"> <td class="label13nou">'
	+' <u>Last Name</u> <br>and Name Parts </td>'
	+'<td valign="top">'
	+'<table border="0" cellpadding="1" cellspacing="0">'
	+'<tr class="bgstandard" ><td colspan="4"><font face="arial" size="1">&nbsp;'
	+'namePart type&nbsp;&nbsp;&nbsp;&nbsp;namePart value<br>&nbsp;'
	+' <input type="text" name="namepart_family_'+sN+'" value="" size="4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
	+'<input type="text" name="creator_lastname_'+sN+'" value="Smith" size="58" '
	+' onmousedown="return parent.L.stopCutAndPaste(this,event)" '
	+' onkeypress="return parent.L.stopCutAndPaste(this,event)" '
	+' onkeydown="return parent.L.stopCutAndPaste(this,event)" '
	+' onblur="clear_complex_name(1);" '
	+' class="requirednw">'
	+' Last Name/Corporate Name/Complex Personal Name </td></tr>'
	+' <tr class="bgstandard" ><td colspan="4"><font face="arial" size="1">&nbsp;'
	+' <input type="text" name="namepart_given_'+sN+'" value="" size="4">&nbsp;&nbsp;&nbsp;&nbsp; '
	+' <input type="text" name = "creator_givenname_'+sN+'" value="" size="58" '
	+' onmousedown="return parent.L.stopCutAndPaste(this,event)" '
	+' onkeypress="return parent.L.stopCutAndPaste(this,event)" '
	+' onkeydown="return parent.L.stopCutAndPaste(this,event)" '
	+' class="notrequirednw"> Given Name (first and middle name for personal only) '
	+' </td></tr></table> '
	+' <td>&nbsp</td> </tr> '
	+' <tr class="bgstandard"   xbgcolor="bb8844"> <td class="label13nou"> '
	+' Vital Dates </td> <td valign="top"> '
	+' <table border="0" cellpadding="1" cellspacing="0"> '
	+' <tr class="bgstandard" ><td valign="middle"><font face="arial" size="1"> &nbsp;'
	+' <input type="text" name="namepart_date_'+sN+'" value="" size="4">&nbsp;&nbsp;&nbsp;&nbsp; '
	+' <input type="text" name = "creator_fulldatestr_'+sN+'" value="" size="10"  class="notrequirednw" xREADONLY> '
	+' &nbsp; use 4 digit year only (birth-death)'
	+' </td> <td rowspan="1" width="20">&nbsp;</td> </tr>'
	+' </table>'
	+' </td> <td>&nbsp</td> </tr> '
	+' <tr class="bgstandard"   xbgcolor="bb8844"> <td class="label13nou">'
	+' Name Description </td> <td>&nbsp;'
	+' <input type="text" name="creator_description_'+sN+'" value="" size="36" class="notrequired300w" '
	+' onmousedown="return parent.L.stopCutAndPaste(this,event)" '
	+' onkeypress="return parent.L.stopCutAndPaste(this,event)" '
	+' onkeydown="return parent.L.stopCutAndPaste(this,event)" >'
	+'<font face="arial" size="1"> &nbsp;&nbsp;&nbsp;Description to distinguish from other names.   Example: American artist, 20th century.</td> '
	+' <td>&nbsp</td> </tr> '
	+' <tr class="bgstandard"  > <td class="label13u">'
	+' Role </td> <td>&nbsp;'
	+' <table border="0" cellpadding="0" cellspacing="0"> '
	+' <tr><td align="left"><font face="arial" size="1">role authority</font></td>'
	+' <td align="left"><font face="arial" size="1">role description</font></td></tr>'
	+' <tr><td>' 
	+'<input type="text" name="creator_rolea_auth_'+sN+'" value="" size="7" > &nbsp; </td><td>'
	+' <input type="text" name="creator_rolea_'+sN+'" value="" size="12" xREADONLY class="required300w"> </td></tr>'
	+' <tr><td>'
	+' <input type="text" name="creator_roleb_auth_'+sN+'" value="" size="7" > &nbsp; </td><td> '
	+' <input type="text" name="creator_roleb_'+sN+'" value="" size="12" xREADONLY class="notrequired300w"> '
	+' </td></tr> <tr><td> '
	+' <input type="text" name="creator_rolec_auth_'+sN+'" value="" size="7" > &nbsp; '
	+' </td><td>'
	+' <input type="text" name="creator_rolec_'+sN+'" value="" size="12" xREADONLY class="notrequired300w"> '
	+'</td></tr> '
	+'</table>'
	+' </td> <td>&nbsp</td> </tr> ' ;

return(creator_NN_show);
}//end function get_creator_show(strN)
