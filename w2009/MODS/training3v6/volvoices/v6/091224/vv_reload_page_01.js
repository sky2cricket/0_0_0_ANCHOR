//vv_reload_page_01.js

//vv_compose_page_01.js from vv_compose_tags.js    Dec 8 2009
//accounting for new definitions in page_upper_091130.htm
//written in conjunction with vv_reload_page_01.js
//and called by page_01b.htm
//as part of w2009 workbook


//vv_reload_page01.js
//from vv_regex.js
//for page_reload_REGEX.htm
//full dev file at zStash/vv_regex_091130.js

var Q = new String('"');

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

dataStr=dataStr.substring(dataStr.indexOf(str1));

/*
alert("extract_tag_data\nstr=\n"+str
+"\n\ndataStr=\n"+dataStr
+"\n\nstr1=\n"+str1+"\n\nstr2="+str2);
*/


dataStr=dataStr.substring(dataStr.indexOf(s1)+Ls1,dataStr.indexOf(s2));

dataStr="\""+dataStr+"\"";
//alert("extract_tag_data:\n\nstr=\n"+str+"\n\ndataStr=\n"+dataStr);
return(dataStr);
}



/*----------------------------------------------------------
see for mods:name input:
http://diglib.lib.utk.edu/~cdeane/w2009/MODS/training3v6/volvoices/v6/mods_name.txt
-----------------------------------------------------*/
//pull data and metadata from <mods:tname> to </mods:tname>
//and populate appropriate fields in upper frame page_upper_091130.htm




// populate_mods_name(s1,"01");
// targets are parent.U.document.UF.varname.value
function populate_mods_name(str,strnum){
//alert("function populate_mods_name num="+strnum +"\nstr=\n"+str);

var name_type_attr = new String("parent.U.document.UF.name_type_");
if (str.indexOf("type=\"personal\"")>-1){
	name_type_attr=name_type_attr+strnum+".value=\"personal\";";
}else if (str.indexOf("type=\"corporate\"")>-1){
	name_type_attr=name_type_attr+strnum+".value=\"corporate\";";
}else {
	name_type_attr=name_type_attr+strnum+".value=\"\";";
}
eval(name_type_attr);

var name_auth_attr = new String("parent.U.document.UF.name_authority_");
if (str.indexOf("LCNAF")>-1){
	name_auth_attr=name_auth_attr+strnum+".value=\"LCNAF\";";
}else if (str.indexOf("ULAN")>-1){
	name_auth_attr=name_auth_attr+strnum+".value=\"ULAN\";";
}else {
	name_auth_attr=name_auth_attr+strnum+".value=\"\";";
}
eval(name_auth_attr);

var namepart_family_attr = new String("parent.U.document.UF.namepart_family_");
var creator_lastname_val = new String("parent.U.document.UF.creator_lastname_");
if (str.indexOf("<mods:namePart>")>-1) {
	namepart_family_attr = namepart_family_attr+strnum+".value=\"\";";
	creator_lastname_val=creator_lastname_val+strnum+".value="+extract_tag_data(str,"<mods:namePart>","</mods:namePart>");
}else if  (str.indexOf("<mods:namePart type=\"family\">") >-1){
	namepart_family_attr = namepart_family_attr+strnum+".value=\"family\";";
	creator_lastname_val=creator_lastname_val+strnum+".value="+extract_tag_data(str,"<mods:namePart type=\"family\">","</mods:namePart>");
} 
eval(namepart_family_attr);
//alert("creator_lastname_val=\n"+creator_lastname_val);
eval(creator_lastname_val);

var namepart_given_attr = new String("parent.U.document.UF.namepart_given_");
var creator_givenname_val = new String("parent.U.document.UF.creator_givenname_");

if (str.indexOf("<mods:namePart type=\"given\">") >-1){
	namepart_given_attr=namepart_given_attr+strnum+".value=\"given\";";
	eval(namepart_given_attr);
	creator_givenname_val=creator_givenname_val+strnum+".value="+extract_tag_data(str,"<mods:namePart type=\"given\">","</mods:namePart>");
	eval(creator_givenname_val);
} 

var namepart_date_attr = new String("parent.U.document.UF.namepart_date_");
var fulldatestr_val = new String("parent.U.document.UF.creator_fulldatestr_");
if (str.indexOf("<mods:namePart type=\"date\">") >-1){
	namepart_date_attr=namepart_date_attr+strnum+".value=\"date\";";
	eval(namepart_date_attr);
	var fulldatestr= new String();
        fulldatestr=extract_tag_data(str,"<mods:namePart type=\"date\">","</mods:namePart>");
	fulldatestr_val = fulldatestr_val+strnum+".value="+fulldatestr;
	eval(fulldatestr_val);
	}

var name_desc_val = new String("parent.U.document.UF.creator_description_");
if (str.indexOf("<mods:description>") >-1){
	name_desc_val = name_desc_val +strnum+".value="+extract_tag_data(str,"<mods:description>","</mods:description>");
	eval(name_desc_val);
	}


var name_rolea_auth_attr = new String("parent.U.document.UF.creator_rolea_auth_");
var name_rolea_val = new String("parent.U.document.UF.creator_rolea_");
var name_roleb_auth_attr = new String("parent.U.document.UF.creator_roleb_auth_");
var name_roleb_val = new String("parent.U.document.UF.creator_roleb_");
var name_rolec_auth_attr = new String("parent.U.document.UF.creator_rolec_auth_");
var name_rolec_val = new String("parent.U.document.UF.creator_rolec_");
var all_roleTerms  = new String();
var roleTermA  = new String();
var roleTermB  = new String();
var roleTermC  = new String();

//get all roleTerm values
if (str.indexOf("<mods:role>") >-1){
	all_roleTerms=str.substring(str.indexOf("<mods:roleTerm"));
	while (all_roleTerms.indexOf(";")>-1){
		all_roleTerms=all_roleTerms.replace(";","<\/mods:roleTerm><mods:roleTerm authority=\"marcrelator\">");
		}//end while
	if (all_roleTerms.indexOf("<mods:roleTerm")>-1){
		roleTermA=all_roleTerms.substring(0,all_roleTerms.indexOf("</mods:roleTerm>")+16);
		if(roleTermA.indexOf("marcrelator")>-1){
			name_rolea_auth_attr=name_rolea_auth_attr+strnum+".value=\"marcrelator\";";
			eval(name_rolea_auth_attr);
			}
		all_roleTerms=all_roleTerms.replace(roleTermA,"");
		roleTermA=roleTermA.replace(" authority=\"marcrelator\"","");
		name_rolea_val=name_rolea_val+strnum+".value="+extract_tag_data(roleTermA,"<mods:roleTerm>","</mods:roleTerm>");
		eval(name_rolea_val);
		}
	if (all_roleTerms.indexOf("<mods:roleTerm")>-1){
		roleTermB=all_roleTerms.substring(0,all_roleTerms.indexOf("</mods:roleTerm>")+16);
		if(roleTermB.indexOf("marcrelator")>-1){
			name_roleb_auth_attr=name_roleb_auth_attr+strnum+".value=\"marcrelator\";";
			eval(name_roleb_auth_attr);
			}
		all_roleTerms=all_roleTerms.replace(roleTermB,"");
		roleTermB=roleTermB.replace(" authority=\"marcrelator\"","");
		name_roleb_val=name_roleb_val+strnum+".value="+extract_tag_data(roleTermB,"<mods:roleTerm>","</mods:roleTerm>");
		eval(name_roleb_val);
		}
	if (all_roleTerms.indexOf("<mods:roleTerm")>-1){
		roleTermC=all_roleTerms.substring(0,all_roleTerms.indexOf("</mods:roleTerm>")+16);
		if(roleTermC.indexOf("marcrelator")>-1){
			name_rolec_auth_attr=name_rolec_auth_attr+strnum+".value=\"marcrelator\";";
			eval(name_rolec_auth_attr);
			}
		all_roleTerms=all_roleTerms.replace(roleTermC,"");
		roleTermC=roleTermC.replace(" authority=\"marcrelator\"","");
		name_rolec_val=name_rolec_val+strnum+".value="+extract_tag_data(roleTermC,"<mods:roleTerm>","</mods:roleTerm>");
		eval(name_rolec_val);
		}
	}//end if (str.indexOf("<mods:role>") >-1){

}//end function populate_mods_name(str,strnum){


//clear out form values for page_01 AND set creator_exist_NN = "no" for all.
function page_01_init(){

parent.U.document.UF.title.value="";

parent.U.document.UF.creator_exist_01.value="no";
parent.U.document.UF.name_type_01.value="";
parent.U.document.UF.name_authority_01.value="";
parent.U.document.UF.namepart_family_01.value="";
parent.U.document.UF.creator_lastname_01.value="";
parent.U.document.UF.namepart_given_01.value="";
parent.U.document.UF.creator_givenname_01.value="";
parent.U.document.UF.namepart_date_01.value="";
parent.U.document.UF.creator_fulldatestr_01.value="";
parent.U.document.UF.creator_description_01.value="";
parent.U.document.UF.creator_rolea_auth_01.value="";
parent.U.document.UF.creator_rolea_01.value="";
parent.U.document.UF.creator_roleb_auth_01.value="";
parent.U.document.UF.creator_roleb_01.value="";
parent.U.document.UF.creator_rolec_auth_01.value="";
parent.U.document.UF.creator_rolec_01.value="";

parent.U.document.UF.creator_exist_02.value="no";
parent.U.document.UF.name_type_02.value="";
parent.U.document.UF.name_authority_02.value="";
parent.U.document.UF.namepart_family_02.value="";
parent.U.document.UF.creator_lastname_02.value="";
parent.U.document.UF.namepart_given_02.value="";
parent.U.document.UF.creator_givenname_02.value="";
parent.U.document.UF.namepart_date_02.value="";
parent.U.document.UF.creator_fulldatestr_02.value="";
parent.U.document.UF.creator_description_02.value="";
parent.U.document.UF.creator_rolea_auth_02.value="";
parent.U.document.UF.creator_rolea_02.value="";
parent.U.document.UF.creator_roleb_auth_02.value="";
parent.U.document.UF.creator_roleb_02.value="";
parent.U.document.UF.creator_rolec_auth_02.value="";
parent.U.document.UF.creator_rolec_02.value="";

parent.U.document.UF.creator_exist_03.value="no";
parent.U.document.UF.name_type_03.value="";
parent.U.document.UF.name_authority_03.value="";
parent.U.document.UF.namepart_family_03.value="";
parent.U.document.UF.creator_lastname_03.value="";
parent.U.document.UF.namepart_given_03.value="";
parent.U.document.UF.creator_givenname_03.value="";
parent.U.document.UF.namepart_date_03.value="";
parent.U.document.UF.creator_fulldatestr_03.value="";
parent.U.document.UF.creator_description_03.value="";
parent.U.document.UF.creator_rolea_auth_03.value="";
parent.U.document.UF.creator_rolea_03.value="";
parent.U.document.UF.creator_roleb_auth_03.value="";
parent.U.document.UF.creator_roleb_03.value="";
parent.U.document.UF.creator_rolec_auth_03.value="";
parent.U.document.UF.creator_rolec_03.value="";

parent.U.document.UF.creator_exist_04.value="no";
parent.U.document.UF.name_type_04.value="";
parent.U.document.UF.name_authority_04.value="";
parent.U.document.UF.namepart_family_04.value="";
parent.U.document.UF.creator_lastname_04.value="";
parent.U.document.UF.namepart_given_04.value="";
parent.U.document.UF.creator_givenname_04.value="";
parent.U.document.UF.namepart_date_04.value="";
parent.U.document.UF.creator_fulldatestr_04.value="";
parent.U.document.UF.creator_description_04.value="";
parent.U.document.UF.creator_rolea_auth_04.value="";
parent.U.document.UF.creator_rolea_04.value="";
parent.U.document.UF.creator_roleb_auth_04.value="";
parent.U.document.UF.creator_roleb_04.value="";
parent.U.document.UF.creator_rolec_auth_04.value="";
parent.U.document.UF.creator_rolec_04.value="";

}//end function page_01_init(){




//copied from vv_regex.js
function tag_data_display_08(tname){
page_01_init();
if (!confirm("continue?"))return;
var t= new String(document.DF.chomp.value);
var t1= new String();
var s= new String();
var s0 = new String();
var s1 = new String();
var s2 = new String();
var s3 = new String();
var s4 = new String();
var s5 = new String();
var s6 = new String();
var u= new String();
//get title -could we used extract_tag_data() here???
parent.U.document.UF.title.value="";
t1=t.substring(t.indexOf("<mods:title>")+12,t.indexOf("<\/mods:title>"));
parent.U.document.UF.title.value=t1;
//if(!confirm("t1=\n"+t1))return;
//alert("INITIAL chomp.value, t=\n"+t);//result: <mods:title>...</mods:originInfo>
s=t.substring(t.lastIndexOf("mods:titleInfo>")+15,t.indexOf("<mods:originInfo>") );
//alert("pass #1, s="+s);

s0=s;
if (s0.length>2){
	//alert("s0.length="+s0.length);
	parent.U.document.UF.creator_exist_01.value="yes";
	s1=s0.substring(0,s0.indexOf("<\/mods:name>")+13);
	alert("s1=\n"+s1);
	populate_mods_name(s1,"01");
	//var s1a = new mods_name(); //this func in vv_regex.js
	s0=s0.replace(s1,"");
	}
if (s0.length>2){
	//alert("s0.length="+s0.length);
	parent.U.document.UF.creator_exist_02.value="yes";
	s2=s0.substring(0,s0.indexOf("<\/mods:name>")+13);
	alert("s2=\n"+s2);
	populate_mods_name(s2,"02");
	s0=s0.replace(s2,"");
	}
if (s0.length>2){
	//alert("s0.length="+s0.length);
	parent.U.document.UF.creator_exist_03.value="yes";
	s3=s0.substring(0,s0.indexOf("<\/mods:name>")+13);
	alert("s3=\n"+s3);
	populate_mods_name(s3,"03");
	s0=s0.replace(s3,"");
	}
if (s0.length>2){
	//alert("s0.length="+s0.length);
	parent.U.document.UF.creator_exist_04.value="yes";
	s4=s0.substring(0,s0.indexOf("<\/mods:name>")+13);
	alert("s4=\n"+s4);
	populate_mods_name(s4,"04");
	s0=s0.replace(s4,"");
	}
if (s0.length>2){
	//alert("s0.length="+s0.length);
	parent.U.document.UF.creator_exist_05.value="yes";
	s5=s0.substring(0,s0.indexOf("<\/mods:name>")+13);
	alert("s5=\n"+s5);
	populate_mods_name(s5,"05");
	s0=s0.replace(s5,"");
	}
if (s0.length>2){
	//alert("s0.length="+s0.length);
	parent.U.document.UF.creator_exist_06.value="yes";
	s6=s0.substring(0,s0.indexOf("<\/mods:name>")+13);
	alert("s6=\n"+s6);
	populate_mods_name(s6,"06");
	s0=s0.replace(s6,"");
	}

//alert("s0.length="+s0.length+"\ns0=\n>>"+s0+"<<");

u=t+"\n\n"+s;
//document.DF.chomp.value=u;
}//end function tag_data_display_08(tname){


