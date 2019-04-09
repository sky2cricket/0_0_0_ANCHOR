//vv_build_mods_page_01.js
//use vv_build_mods_utility.js for header, closer, and global definitions

//ps[ps.length]=new String(obrak+'mods:namePart type="family">'                        
//	+ bfont + replace_apos(document.forms[0].creator_lastname_01.value) + efont
//       + obrak +'/mods:namePart>\r\n'


//called with: aps = buildTagsArray_page_01(num,N);
//downloadTypeN  [0 for download; 1 for html display]
//strN "01","02"..."06"
function buildTagsArray_page_01(downloadTypeN,strN){

//alert("build_page_01_tags in build_mods_page_01.js");

//var oNI=new Number(outputN);//was NI
var oNI=new Number(downloadTypeN);//was NI
//alert("buildTagsArray_page_01 in build_mods_page_01.js\n  oNI="+oNI);


var bfont= new String(BFONT[oNI]);
var efont= new String(EFONT[oNI]);
var obrak= new String(OBRAK[oNI]);
var brtag= new String(BRTAG[oNI]);
var space= new String(SPACE[oNI]);

//alert("got to here in build_mods_page_01.js\n bfont="+bfont);

var sN=new String(strN);
var sR=new String(" ");
if(sN=="01"){
	sR +=obrak+'mods:titleInfo>\r\n'
	+ brtag +obrak +'mods:title>'
	+ bfont +replace_apos(document.forms[0].title.value) + efont 
	+ obrak +'/mods:title>\r\n'
	+ brtag +obrak +'/mods:titleInfo>\r\n'
	;
	}		

sR+=brtag+obrak+'mods:name'; //sR =return string

var sT=new String('');//sT temp string
var sU=new String('');//second temp string
    sT='document.forms[0].name_type_'+sN+'.value';

if (eval(sT)!=""){ sR += ' type="'+bfont +eval(sT)+efont+'"'; }
    sT='document.forms[0].name_authority_'+sN+'.value';

if (eval(sT)!=""){ sR += ' authority="' +bfont+eval(sT)+efont+'"'; }
    sR +=">\r\n";

sT='document.forms[0].creator_lastname_'+sN+'.value';
if (eval(sT)!=""){ 
	sR += brtag+obrak+'mods:namePart'; 
	sU='document.forms[0].namepart_family_'+sN+'.value';
	if (eval(sU)!=""){ sR += ' type="'+bfont+'family'+efont+'"'; }
    	sR +=">";
    	sU='document.forms[0].creator_lastname_'+sN+'.value'
    	sR += bfont+eval(sU)+efont;
    	sR += obrak+'/mods:namePart>\r\n';
	}

sT='document.forms[0].namepart_given_'+sN+'.value';
if (eval(sT)=="given"){ 
	sR += brtag+obrak+'mods:namePart'; 
	sU='document.forms[0].namepart_given_'+sN+'.value';
	if (eval(sU)!=""){ sR += ' type="'+bfont+'given'+efont+'"'; }
    	sR +=">";
    	sU='document.forms[0].creator_givenname_'+sN+'.value'
    	sR += bfont+eval(sU)+efont;
    	sR += obrak+'/mods:namePart>\r\n';
	}

sT='document.forms[0].namepart_date_'+sN+'.value';
if (eval(sT)=="date"){ 
	sR += brtag+obrak+'mods:namePart'; 
	sU='document.forms[0].namepart_date_'+sN+'.value';
	if (eval(sU)!=""){ sR += ' type="'+bfont+'date'+efont+'"'; }
    	sR +=">";
    	sU='document.forms[0].creator_fulldatestr_'+sN+'.value'
    	sR += bfont+eval(sU)+efont;
    	sR += obrak+'/mods:namePart>\r\n';
	}
    
sT='document.forms[0].creator_description_'+sN+'.value';
if (eval(sT)!=""){ 
	sR += brtag+obrak+'mods:description>'; 
	sR += bfont+eval(sT)+efont;
    	sR += obrak+'/mods:description>\r\n';
	}


var roleTermExist=0;//check for at least one
sT='document.forms[0].creator_rolea_'+sN+'.value';
if (eval(sT)!=""){ 
	if (roleTermExist==0){sR+=brtag+obrak+'mods:role>\r\n';}
	roleTermExist++;
	sR += brtag+obrak+'mods:roleTerm'; 
	sU='document.forms[0].creator_rolea_auth_'+sN+'.value';
	if (eval(sU)!=""){ sR += ' type="'+bfont+eval(sU)+efont+'"'; }
    	sR +='>';
    	sR += bfont+eval(sT)+efont;
    	sR += obrak+'/mods:roleTerm>\r\n';
	}

sT='document.forms[0].creator_roleb_'+sN+'.value';
if (eval(sT)!=""){ 
	if (roleTermExist==0){sR+=brtag+obrak+'mods:role>\r\n';}
	roleTermExist++;
	sR += brtag+obrak+'mods:roleTerm'; 
	sU='document.forms[0].creator_roleb_auth_'+sN+'.value';
	if (eval(sU)!=""){ sR += ' type="'+bfont+eval(sU)+efont+'"'; }
    	sR +='>';
    	sR += bfont+eval(sT)+efont;
    	sR += obrak+'/mods:roleTerm>\r\n';
	}

sT='document.forms[0].creator_rolec_'+sN+'.value';
if (eval(sT)!=""){ 
	if (roleTermExist==0){sR+=brtag+obrak+'mods:role>\r\n';}
	roleTermExist++;
	sR += brtag+obrak+'mods:roleTerm'; 
	sU='document.forms[0].creator_rolec_auth_'+sN+'.value';
	if (eval(sU)!=""){ sR += ' type="'+bfont+eval(sU)+efont+'"'; }
    	sR +='>';
    	sR += bfont+eval(sT)+efont;
    	sR += obrak+'/mods:roleTerm>\r\n';
	}

if (roleTermExist>0){
	sR += brtag+obrak+'/mods:role>\r\n';
	}


sR += brtag+obrak+'/mods:name>\r\n';
//alert("buildTagsArray_page_01 in build_mods_page_01.js\n  oNI="+oNI
//+"\n  sN="+sN+"\n\n  sR=\n"+sR);
return(sR);
}//end function build_page_01_tags(strN,outputN){
//function buildTagsArray_page_01(strN){



//FROM vv_flextags.js
//for all dynamically created form tags

///page_01
// call with: var creator_01_hide= new String(get_creator_hide("01"));
function xget_creator_hide(strN){
var sN = new String(strN);
//alert("get_creator_hide");

var creator_NN_hide= new String(" ");
    creator_NN_hide += '<input type="hidden" name="name_button_id_'+sN+'" value="">'
	+'<input type="hidden" name="name_type_'+sN+'" value="" >'
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
function xget_creator_show(strN){

var sN = new String(strN);
var nN = new Number(strN);
//alert("get_creator_show(strN)");

var creator_NN_show= new String(" ");
    creator_NN_show += '<tr class="bgstandard"   xbgcolor="bb8844"><td class="label13nou">Name Type Buttons</td><td> '
	+'<input type="button" name="name_01a_callbutton" value="Personal Name " '
	+'onclick="parent.L.populate_name_fields2('+nN+',1,700,600)" class="button120w">&nbsp; '
	+'<input type="button" name="name_01b_callbutton" value="Complex Personal Name" '
	+'onclick="parent.L.populate_name_fields2('+nN+',2,700,600)" class="button140w">&nbsp; '
	+'<input type="button" name="name_01c_callbutton" value="Corporate Name" '
	+'onclick="parent.L.populate_name_fields2('+nN+',3,700,600)" class="button120w">&nbsp; '
	+'<input type="text" name="name_button_id_'+sN+'" value="" size="2">'
	+'<font face="arial" size="1">'
	+' name_button_id_'+sN+'</font>'
	/*
	+'<font face="arial" size="2">'
	+'<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '
	+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '
	+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '
	+' (determined by buttons above) '
	+' chosen name type: <input type="text" name="chosen_name_type_'+sN+'" value="none" '
	+' size="16"></font>'
	*/
	+'</td><td>&nbsp</td></tr> '
	+'<tr class="bgstandard"  xbgcolor="bb8844"> <td class="label13u">'
	+' Name Type / Authority </td> <td valign="top"> &nbsp;&nbsp; '

	+' <input class="requirednw" type="text" size="6" value="" READONLY name="name_type_'+sN+'"> '
	+'<font face="arial" size="1"> name_type_'+sN+' </font> '
	+' <input class="notrequirednw" type="text" size="6" value="" READONLY name="name_authority_'+sN+'">  '
	+'<font face="arial" size="1"> name_authority_'+sN+' </font> '
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
	+'<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '
	+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '
	+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '
	+' &nbsp;&nbsp;&nbsp;Last Name / Corporate Name / Complex Personal Name </td></tr>'
	+' <tr class="bgstandard" ><td colspan="4"><font face="arial" size="1">&nbsp;'
	+'namePart type&nbsp;&nbsp;&nbsp;&nbsp;namePart value<br>&nbsp;'
	+' <input type="text" name="namepart_given_'+sN+'" value="" size="4">&nbsp;&nbsp;&nbsp;&nbsp; '
	+' <input type="text" name = "creator_givenname_'+sN+'" value="" size="58" '
	+' onmousedown="return parent.L.stopCutAndPaste(this,event)" '
	+' onkeypress="return parent.L.stopCutAndPaste(this,event)" '
	+' onkeydown="return parent.L.stopCutAndPaste(this,event)" '
	+' class="notrequirednw">'
	+'<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '
	+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '
	+' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '
	+' &nbsp;&nbsp;&nbsp;Given Name (first and middle name for personal only) '
	+' </td></tr></table> '
	+' <td>&nbsp</td> </tr> '
	+' <tr class="bgstandard"   xbgcolor="bb8844"> <td class="label13nou"> '
	+' Vital Dates </td> <td valign="top"> '
	+' <table border="0" cellpadding="1" cellspacing="0"> '
	+' <tr class="bgstandard" ><td valign="middle"><font face="arial" size="1"> &nbsp;'
	+'namePart type&nbsp;&nbsp;&nbsp;&nbsp;namePart value<br>&nbsp;'
	+' <input type="text" name="namepart_date_'+sN+'" value="" size="4">&nbsp;&nbsp;&nbsp;&nbsp; '
	+' <input type="text" name = "creator_fulldatestr_'+sN+'" value="" size="10"  class="notrequirednw" xREADONLY> '
	+' &nbsp; use 4 digit year(s) only (birth-death)'
	+' </td> <td rowspan="1" width="20">&nbsp;</td> </tr>'
	+' </table>'
	+' </td> <td>&nbsp</td> </tr> '
	+' <tr class="bgstandard"   xbgcolor="bb8844"> <td class="label13nou">'
	+' Name Description </td> <td>&nbsp;'
	+' <input type="text" name="creator_description_'+sN+'" value="" size="36" class="notrequired300w" '
	+' onmousedown="return parent.L.stopCutAndPaste(this,event)" '
	+' onkeypress="return parent.L.stopCutAndPaste(this,event)" '
	+' onkeydown="return parent.L.stopCutAndPaste(this,event)" >'
	+'<font face="arial" size="1"><br> &nbsp;&nbsp;&nbsp;Description to distinguish from other names.   Example: American artist, 20th century.</td> '
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
