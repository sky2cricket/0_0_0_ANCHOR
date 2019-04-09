//vv_regex.js
//for page_reload_REGEX.htm
//full dev file at zStash/vv_regex_091130.js

//see cma_regex.txt in dlxs14/blnt

//sz=sz.replace(/-[^,],*/gi,"");
//before replacement
//sz="001-abc,002-1*3b,3,4-,5-alksj;lasdfk";
//after replacement
//sz="001,002,3,4,5";
//English wording of the replacement:
//Remove the dash and all that follows up to the next comma.


//Given input string
//<mods:name type="personal" authority="ULAN">J > < Smith</mods:name>
//harvest the data
//J > < Smith
function tag_data_display_06(tname){
var t= new String(document.DF.chomp.value);
var s= new String();
var u= new String();
alert("INITIAL chomp.value, t=\n"+t);//result: <mods:name type="personal">J > <  Smith</mods:name>
s=t.replace(/<mods:[^>]*/gi,"");
alert("after replace 1, s=\n"+s); //result:   >J > < Smith</mods:name>  
s=s.replace(/<\/mods:[^>]*/gi,"");
alert("after replace 2, s=\n"+s); //result:   >J > < Smith>  
s=s.substring(s.indexOf(">")+1,s.lastIndexOf(">"));
alert("after replace 3, s=\n"+s); //result:   >J > < Smith>  
u=t+"\n\n"+s;
document.DF.chomp.value=u;
}//end function tag_data_display_06(tname){

function extract_tag_data(str,str1,str2){
var dataStr= new String(str);
var s1 = new String(str1);
var Ls1 = s1.length;
var s2 = new String(str2);
var Ls2 = s2.length;

    dataStr=dataStr.substring(dataStr.indexOf(s1)+Ls1,dataStr.indexOf(s2));

alert("extract_tag_data:\n\nstr=\n"+str+"\n\ndataStr=\n"+dataStr);
return(dataStr);
}



/*----------------------------------------------------------
see for mods:name input:
http://diglib.lib.utk.edu/~cdeane/w2009/MODS/training3v6/volvoices/v6/mods_name.txt
-----------------------------------------------------*/
//pull data and metadata from <mods:tname> to </mods:tname>
//and populate appropriate fields in upper frame

function mods_name(){//create mods_name_object
	var mods_name_type 	 = new String("");
	var mods_name_auth 	 = new String("");
	var mods_name_value	 = new String("");//corp, complxpers
	var mods_namePart_family = new String("");//if name_value is blank
	var mods_namePart_given  = new String("");//if name_value is blank
	var mods_namePart_date   = new String("");//combine dob-dod
	var mods_name_desc 	 = new String("");
	var mods_role_auth	 = new String("");//roleTerm
	var mods_role_valuea	 = new String("");//roleTerm
	var mods_role_valueb	 = new String("");//roleTerm
	var mods_role_valuec	 = new String("");//roleTerm
	}

// populate_mods_name(s1,"01");
// targets are parent.U.document.UF.varname.value
function populate_mods_name(str,strnum){
alert("function populate_mods_name num="+strnum
	+"\nstr=\n"+str);
var name_type_val = new String("parent.U.document.UF.name_type_");
var name_auth_val = new String("parent.U.document.UF.name_authority_");
var namepart_family = new String("parent.U.document.UF.namepart_family_");
var creator_lastname_val = new String("parent.U.document.UF.creator_lastname_");
var namepart_given = new String("parent.U.document.UF.namepart_given_");
var creator_givenname_val = new String("parent.U.document.UF.creator_givenname_");
var namepart_date = new String("parent.U.document.UF.namepart_date_");
var name_dob_val  = new String("parent.U.document.UF.creator_dob_");
var name_dod_val  = new String("parent.U.document.UF.creator_dod_");
var name_desc_val = new String("parent.U.document.UF.creator_description_");
var name_role_auth = new String("parent.U.document.UF.name_role_auth_");
var name_rola_val = new String("parent.U.document.UF.creator_rolea_");
var name_rolb_val = new String("parent.U.document.UF.creator_roleb_");
var name_rolc_val = new String("parent.U.document.UF.creator_rolec_");

if (str.indexOf("type=\"personal\"")>-1){
	name_type_val=name_type_val+strnum+".value=\"personal\";";
	alert (name_type_val);
	eval(name_type_val);
}else if (str.indexOf("type=\"corporate\"")>-1){
	name_type_val=name_type_val+strnum+".value=\"corporate\";";
	eval(name_type_val);
	alert (name_type_val);
}else {
	name_type_val=name_type_val+strnum+".value=\"\";";
	eval(name_type_val);
}
if (str.indexOf("LCNAF")>-1){
	name_auth_val=name_auth_val+strnum+".value=\"LCNAF\";";
	eval(name_auth_val);
}else if (str.indexOf("ULAN")>-1){
	name_auth_val=name_auth_val+strnum+".value=\"ULAN\";";
	eval(name_auth_val);
}else {
	name_auth_val=name_auth_val+strnum+".value=\"\";";
	eval(name_auth_val);
}
alert("got to here");

/*---do not use else, tags not mutually exclusive------*/
if (str.indexOf("<mods:namePart>")>-1) {
	alert("got to <mods:namePart>");
	namepart_family = namepart_family+strnum+".value=\"\";";
	eval(namepart_family);
	creator_lastname_val=creator_lastname_val+strnum+".value="+extract_tag_data(str,"<mods:namePart>","</mods:namePart>");
	eval(name_last_val);
} 

/*
if (str.indexOf("<mods:namePart type=\"family\">") >-1){
	namepart_family = namepart_family+strnum+".value="family";
	eval(namepart_family);
	creator_lastname_val=creator_lastname_val+strnum+".value="+extract_tag_data(str,"<mods:namePart type=\"family\">","</mods:namePart>");
	eval(creator_lastname_val);
} 
if (str.indexOf("<mods:namePart type=\"given\">") >-1){
	namepart_given=namepart_given+strnum+".value="given";
	eval(namepart_given);
	creator_givenname_val=creator_givenname_val+strnum+".value="+extract_tag_data(str,"<mods:namePart type=\"given\">","</mods:namePart>");
	eval(creator_given_name_val);

} 
*/

/*-------------------------------------------
if (str.indexOf("<mods:namePart type=\"date\">") >-1){
	namepart_date=namepart_date+strnum+".value="date";
	eval(namepart_date);
	var fulldatestr= new String(extract_tag_data(str,"<mods:namePart type=\"date\">","</mods:namePart>"));
	name_dob_val=name_dob_val+strnum+".value="+fulldatestr.substring(0,fulldatestr.indexOf("-")-1);
	name_dod_val=name_dob_val+strnum+".value="+fulldatestr.substring(fulldatestr.indexOf("-"));
}
-----------------------------------------*/

}//end function populate_mods_name(str,strnum){


	

function tag_data_display_07(tname){
var t  = new String(document.DF.chomp.value);
var s  = new String();
var u  = new String();
alert("INITIAL chomp.value, t=\n"+t);//result: <mods:name type="personal">J > <  Smith</mods:name>
s=t.replace(/<mods:[^>]*/gi,"");
alert("after replace 1, s=\n"+s); //result:   >J > < Smith</mods:name>  
s=s.replace(/<\/mods:[^>]*/gi,"");
alert("after replace 2, s=\n"+s); //result:   >J > < Smith>  
s=s.substring(s.indexOf(">")+1,s.lastIndexOf(">"));
alert("after replace 3, s=\n"+s); //result:   >J > < Smith>  
u=t+"\n\n"+s;


document.DF.chomp.value=u;
}//end function tag_data_display_07(tname){

function tag_data_display_08(tname){
var t= new String(document.DF.chomp.value);
var s= new String();
var s0 = new String();
var s1 = new String();
var s2 = new String();
var s3 = new String();
var s4 = new String();
var u= new String();
alert("INITIAL chomp.value, t=\n"+t);//result: <mods:title>...</mods:originInfo>
s=t.substring(t.lastIndexOf("mods:titleInfo>")+15,t.indexOf("<mods:originInfo>") );
alert("pass #1, s="+s);
s0=s;
if (s0.length>2){
	//alert("s0.length="+s0.length);
	s1=s0.substring(0,s0.indexOf("<\/mods:name>")+13);
	alert("s1=\n"+s1);
	populate_mods_name(s1,"01");
	var s1a = new mods_name();
	s0=s0.replace(s1,"");
	}
if (s0.length>2){
	//alert("s0.length="+s0.length);
	s2=s0.substring(0,s0.indexOf("<\/mods:name>")+13);
	alert("s2=\n"+s2);
	populate_mods_name(s2,"02");
	s0=s0.replace(s2,"");
	}
if (s0.length>2){
	//alert("s0.length="+s0.length);
	s3=s0.substring(0,s0.indexOf("<\/mods:name>")+13);
	alert("s3=\n"+s3);
	populate_mods_name(s3,"03");
	s0=s0.replace(s3,"");
	}
if (s0.length>2){
	//alert("s0.length="+s0.length);
	s4=s0.substring(0,s0.indexOf("<\/mods:name>")+13);
	alert("s4=\n"+s4);
	s0=s0.replace(s4,"");
	}
if (s0.length>2){
	//alert("s0.length="+s0.length);
	s5=s0.substring(0,s0.indexOf("<\/mods:name>")+13);
	alert("s5=\n"+s5);
	s0=s0.replace(s5,"");
	}
if (s0.length>2){
	//alert("s0.length="+s0.length);
	s6=s0.substring(0,s0.indexOf("<\/mods:name>")+13);
	alert("s6=\n"+s6);
	s0=s0.replace(s6,"");
	}
//alert("s0.length="+s0.length+"\ns0=\n>>"+s0+"<<");


u=t+"\n\n"+s;
//document.DF.chomp.value=u;
}//end function tag_data_display_08(tname){

