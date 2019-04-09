
/*
<!--
    This code is issued under the GNU General Public License, 
    version 3, 29 June 2007.

     -MODS Workbook provides a series of web pages to help you 
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

//  thisDocument alias is set to either
//  parent.L.thisDocument = parent.D.document; //for input pages
//  parent.L.thisDocument = parent.U.document; //for upper page final submission

var thisDocument = parent.L.thisDocument;

//original with alerts added

//add NI ( Nindex)

//alert("vv_compose_tags.js - got to here 0");

var BFONT = new Array();
var EFONT = new Array();
var SPACE = new Array();
var OBRAK = new Array();
var BRTAG = new Array();

var bfont= new String();
var efont= new String();
var obrak= new String();
var brtag= new String(); //for page_04 <subject>

BFONT[0] = new String("");
BFONT[1] = new String('<font color="a00000"><b>');
EFONT[0] = new String("");
EFONT[1] = new String('</b></font>');
BRTAG[0] = new String("\r\n");
BRTAG[1] = new String("&lt;br>");

SPACE[0] = new String("");
SPACE[1] = new String(' ');

OBRAK[0] = '<';
OBRAK[1] = '&lt;';

//=================================================================
//=================================================================
function set_output_option(N) {

	//N=0 no red, use '<' in xml tag -- for final out.xml file
	//N>0 insert red use '&lt;' in xml tag to make html viewable

	var NI = 0;
	if ( N == "0" ) { NI=0; } else { NI=1; }

	
	bfont= BFONT[NI];
	efont= EFONT[NI];
	obrak= OBRAK[NI];
	brtag= BRTAG[NI];


}//end function set_output_option

//=================================================================
//=================================================================
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
}//end function replace_apos


//=================================================================
//=================================================================
function buildTagsArray_header(N){

	//alert("buildTagsArray_header vv_compose_tags.js");

set_output_option(N);

	var num = new Number(N);
	var commentFilename    			= new String(parent.U.document.UF.VVcomment_01.value);
	var commentReloadDate  			= new String(parent.U.document.UF.VVcomment_03.value);
	var commentContributor 			= new String(parent.U.document.UF.VVcomment_03c.value);
	var commentProject     			= new String(parent.U.document.UF.VVcomment_03p.value);
	var commentDate        			= new String(parent.U.document.UF.VVcomment_03d.value);
	var commentValidate    			= new String(parent.U.document.UF.VVcomment_04.value);
	var commentIterate    			= new String(parent.U.document.UF.VVcomment_05.value);

	//var commentFilename    			= new String(parent.D.document.DF.VVcomment_01.value);
	//var commentContributor 			= new String(parent.D.document.DF.VVcomment_03c.value);
	//var commentProject     			= new String(parent.D.document.DF.VVcomment_03p.value);

	//alert("commentFilename=\n"+commentFilename);
	//alert("commentDate=\n"+commentDate);
	//alert("commentNumTiffs="\n"+commentNumTiffs);
	if ( num >0 ) {
        	commentFilename     		= commentFilename.replace(/\</g,"&#060;");
        	commentReloadDate   		= commentReloadDate.replace(/\</g,"&#060;");
        	commentContributor  		= commentContributor.replace(/\</g,"&#060;");
        	commentProject      		= commentProject.replace(/\</g,"&#060;");
        	commentDate         		= commentDate.replace(/\</g,"&#060;");
        	commentValidate     		= commentValidate.replace(/\</g,"&#060;");
        	commentIterate     		= commentIterate.replace(/\</g,"&#060;");
		}



var ps=new Array();


ps[ps.length] = new String(obrak +'?xml version="1.0" encoding="UTF-8"  ?>\r\n'); 


ps[ps.length] = new String(obrak +'mods:mods xmlns:mods="http://www.loc.gov/mods/v3" \r\n' 
	+' xmlns:xlink="http://www.w3.org/1999/xlink" \r\n'
	+' xmlns="http://www.loc.gov/mods/v3" \r\n' 
	+' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \r\n'
	+' xsi:schemaLocation="http://www.loc.gov/mods/v3 \r\n'
	+' http://www.loc.gov/standards/mods/v3/mods-3-2.xsd" ID="MODS" version="3.2">'
	);


ps[ps.length]= new String(obrak+ '!-- DLC-MODS Workbook version 1.2 released 6 November 2007 by University Of Tennessee Libraries Digital Library Center: Melanie Feltner-Reichert, Metadata Librarian, and Christine Haygood Deane, Software Developer --> \r\n'); 

ps[ps.length] = new String(commentContributor+" \r\n"); 
ps[ps.length] = new String(commentProject+" \r\n"); 
ps[ps.length] = new String(commentDate+" \r\n"); 
ps[ps.length] = new String(commentReloadDate+" \r\n"); 
ps[ps.length] = new String(commentFilename+" \r\n"); 
ps[ps.length] = new String(commentIterate+" \r\n"); 
ps[ps.length] = new String(commentValidate+" \r\n"); 


return(ps);


}///end function buildTagsArray_header()




//=================================================================
//=================================================================
function buildTagsArray_closer(N){

	//alert("buildTagsArray_closer");

set_output_option(N);

var ps=new Array();


ps[ps.length]= new String(obrak+'/mods:mods>');

return(ps);

}///end function buildTagsArray_closer()


//=================================================================
//=================================================================
function buildTagsArray_titleInfo(N){
//alert("buildTagsArray_titleInfo");

set_output_option(N);

var ps=new Array();
var str = new String(thisDocument.forms[0].ti_block_list.value);
if (str.length ==0) return(ps);
//alert("buildTagsArray_titleInfo \n ti_block_list str=\n"+str);
var Ati = new Array();
    Ati = str.split(parent.U.split_token);
var m = 0;//counter for Ati
var m = 0;//test counter
var numTI = get_block_iteration("titleInfo");


var msg=new String('Ati:');

for (i=0;i<numTI;i++) {

n=m;
nn=n+7;

msg='m='+m+'  n='+n+'  Ati:';
/*
for (j=n;j<nn;j++){
	msg+= "\n Ati["+j+"]="+Ati[j];
	}
alert(msg);
*/

/////////do not make empty tag for <titleInfo>
var startTitleInfo =0;
if(
   (Ati[n+2] == "empty_string") 
&& (Ati[n+3] == "empty_string") 
&& (Ati[n+4] == "empty_string") 
&& (Ati[n+5] == "empty_string") 
&& (Ati[n+6] == "empty_string") 
  ) { 
	startTitleInfo=0;
}else{
startTitleInfo =1;

//need p and q here because m misbehaves if you do m++ here
var p = m;
var q = m+1;

var dtemp = new String('');
    dtemp = Ati[p];
var temp = new String('');
    temp = Ati[q];
var attr = new String('');

//alert("dtemp="+dtemp+"\ntemp="+temp);
 
if ( temp=="_zero" ) {attr=="";}
if ( temp=="abbreviated_dnlm" ){ attr=' type="'+bfont+'abbreviated'+efont+'" authority="'+bfont+'dnlm'+efont+'"'; }
if ( temp=="abbreviated_hlasja" ){ attr=' type="'+bfont+'abbreviated'+efont+'" authority="'+bfont+'hlasja'+efont+'"'; }
if ( temp=="translated_no" ){ attr=' type="'+bfont+'translated'+efont+'"'; }
if ( temp=="alternative_no" ){ attr=' type="'+bfont+'alternative"'+efont+''; }
if ( temp=="uniform_naf" ){ attr=' type="'+bfont+'uniform'+efont+'" authority="'+bfont+'naf'+efont+'"'; }
if ( temp=="uniform_sanb" ){ attr=' type="'+bfont+'uniform'+efont+'" authority="'+bfont+'sanb'+efont+'"'; }

//alert("attr="+attr);


if (dtemp=="empty_string") { dtemp=""; }
else {
dtemp = ' displayLabel="'+bfont+dtemp+efont+'"';
}

ps[ps.length]=new String(obrak+'mods:titleInfo'+dtemp+attr+'>\r\n');
}m=m+2;




//do not create mods:nonSort for empty input
if (Ati[m] != "empty_string") {
        ps[ps.length] = new String(obrak +'mods:nonSort>'
        + bfont +replace_apos(Ati[m]) + efont
        + obrak +'/mods:nonSort>\r\n'
        );
}m++;

//do not create mods:title for empty input
if (Ati[m] != "empty_string") {
        ps[ps.length] = new String(obrak +'mods:title>'
        + bfont +replace_apos(Ati[m]) + efont
        + obrak +'/mods:title>\r\n'
        );
}m++;


//do not create mods:subTitle for empty input
if (Ati[m] != "empty_string") {
        ps[ps.length] = new String(obrak +'mods:subTitle>'
        + bfont +replace_apos(Ati[m]) + efont
        + obrak +'/mods:subTitle>\r\n'
        );
}m++;



//do not create mods:partNumber for empty input
if (Ati[m] != "empty_string") {
        ps[ps.length] = new String(obrak +'mods:partNumber>'
        + bfont +replace_apos(Ati[m]) + efont
        + obrak +'/mods:partNumber>\r\n'
        );
}m++;

//do not create mods:partName for empty input
if (Ati[m] != "empty_string") {
        ps[ps.length] = new String(obrak +'mods:partName>'
        + bfont +replace_apos(Ati[m]) + efont
        + obrak +'/mods:partName>\r\n'
        );
}m++;

if (startTitleInfo==1){
ps[ps.length]=new String(obrak+'/mods:titleInfo>\r\n');
}

}//end for


return(ps);

}//end function builtTagsArray_titleInfo



//=================================================================
//=================================================================
function buildTagsArray_name(N){
//alert("buildTagsArray_name");

set_output_option(N);	

var ps=new Array();


var split_token = new String(parent.U.split_token);
var str = new String(parent.U.document.UF.name_block_list.value);
if (str.length ==0) return(ps);
var numNB = get_block_iteration("name");

var Anb = new Array();
    Anb = str.split(split_token);
var m = 0;//counter for Anb array

if (Anb[0] == "" ) { return; }


///each name block has 9 elements
///Anb[m] is either true value or "empty_string"

var thisNameType = new String("");
var thisNameAuth = new String("");
var thisNameLast = new String("");
var thisNameGivn = new String("");
var thisNameToad = new String("");
var thisNameRole = new String("");
var thisNameYdob = new String("");
var thisNameYdod = new String("");
var thisEndNameB = new String("");

var strNameType = new String("");
var strNameAuth = new String("");
var strNameGivn = new String("");
var strNameYrbd = new String("");
var strNameRole = new String("");
var aNameRole   = new Array();

    for (j=0;j<numNB;j++){
        thisNameType= Anb[m++];
        thisNameAuth= Anb[m++];
        thisNameLast= Anb[m++];
        thisNameGivn= Anb[m++];
        thisNameToad= Anb[m++];
        thisNameRole= Anb[m++];
        thisNameYdob= Anb[m++];
        thisNameYdod= Anb[m++];
        thisEndNameB= Anb[m++];

        if (thisNameLast != "empty_string") {


        strNameType="";
        if (thisNameType != "empty_string") {
                strNameType = ' type="'+bfont+thisNameType+efont+'"';
        }else{
		strNameType = ' type="'+bfont+'personal'+efont+'"';
	} 



        strNameAuth="";
        if (thisNameAuth != "_zero") {
                strNameAuth = ' authority="'+bfont+thisNameAuth+efont+'"';
                }

        ps[ps.length]=new String(obrak+'mods:name '+strNameType+  strNameAuth+ '>\r\n');

        if (thisNameLast != "empty_string") {
                if (thisNameType == "personal") {
                ps[ps.length]=new String(obrak+'mods:namePart type="'+bfont+'family'+efont+'">'+bfont+thisNameLast+efont+obrak+'/mods:namePart>\r\n');
                }else{//corp, conf
                ps[ps.length]=new String(obrak+'mods:namePart>'+bfont+thisNameLast+efont+obrak+'/mods:namePart>\r\n');
                }
        }

        strNameGivn = new String("");
        if (thisNameType == "personal"){
        if (thisNameGivn != "empty_string") {
                strNameGivn = thisNameGivn;
                ps[ps.length]=new String(obrak+'mods:namePart type="'+bfont+'given'+efont+'">'+bfont+strNameGivn+efont+obrak+'/mods:namePart>\r\n');
                }
        }


        if (thisNameToad != "empty_string" && thisNameType == "personal") {
                ps[ps.length]=new String(obrak+'mods:namePart type="'+bfont+'termsOfAddress'+efont+'">'+bfont+thisNameToad+efont+obrak+'/mods:namePart>\r\n');
        }

        if (thisNameType == "personal") {
        if (thisNameYdob != "empty_string" || thisNameYdod != "empty_string" ) {
                strNameYrbd = thisNameYdob +"-"+thisNameYdod;
                strNameYrbd = strNameYrbd.replace(/empty_string/g,"");//keep the dash
                strNameYrbd = strNameYrbd.replace(/living/g,"");//keep the dash
                strNameYrbd = strNameYrbd.replace(/not available/g,"");//keep the dash
                ps[ps.length]=new String(obrak+'mods:namePart type="'+bfont+'date'+efont+'">'+bfont+strNameYrbd+efont+obrak+'/mods:namePart>\r\n');
        }
        }


        if (thisNameRole != "empty_string"  ) {
                strNameRole=thisNameRole;
                aNameRole  = strNameRole.split("; ");
                ps[ps.length] = new String(obrak+'mods:role>\r\n');
                for (i=0;i<aNameRole.length;i++) {
                        ps[ps.length] = new String(obrak +'mods:roleTerm authority="'+bfont+'marcrelator'+efont+'" type="'+bfont+'text'+efont+'">'
                        + bfont +aNameRole[i] + efont
                        + obrak +'/mods:roleTerm>\r\n');
                        }
                ps[ps.length] = new String(obrak +'/mods:role>\r\n');
        }


        ps[ps.length] = new String(obrak+'/mods:name>\r\n');
        }//end if ( thisNameLast != "empty_string")
    }///end for


return(ps);


}///end function buildTagsArray_name()


//=================================================================
//=================================================================
///returns the ps array
function buildTagsArray_typeOfResource(N){
//alert("buildTagsArray_typeOfResource");

set_output_option(N);

var ps=new Array();

var str=(parent.U.document.UF.type_of_resource_all.value);
if (str.length ==0) return(ps);


///////////////////////////////////////////////////// <mods:typeOfResource
//type_of_resource_all is required, each item converts to one xml element

//Do not make empty tag for typeOfResource
if (thisDocument.forms[0].type_of_resource_all.value != "" ) {

var sTor = new String(thisDocument.forms[0].type_of_resource_all.value);
var aTor = sTor.split("; ");
var eTor = new Array(
 new String('')
,new String('')
,new String('')
,new String('')
,new String('')
,new String('')
,new String('')
,new String('')
,new String('')
,new String('')
,new String('')
,new String('')
,new String('')
);
for (i=0;i<aTor.length;i++){
        eTor[i]=aTor[i];
        ps[ps.length]= new String(obrak+'mods:typeOfResource>'
        + bfont +eTor[i] + efont
        + obrak +'/mods:typeOfResource>\r\n'
        );
}

}//end if not empty
return(ps);


}///end function buildTagsArray_typeOfResource()




//=================================================================
//=================================================================
///returns the ps array
function buildTagsArray_genre(N){
//alert("buildTagsArray_genre");

set_output_option(N);

var ps=new Array();

//read gt_block_list array

var gt = new String(thisDocument.forms[0].gt_block_list.value);
if (gt.length ==0) return(ps);
var Agt  = new Array();
    Agt  = gt.split(parent.U.split_token);

var strAAT = Agt[0];
var strNMC = Agt[1];
var strMARC = Agt[2];
var authOTHER = Agt[3];
var  strOTHER = Agt[4];

//Do not make empty tag for genre_aat
if (strAAT != "empty_string") {
genre_authority_tag_display = ' authority="'+bfont+'aat'+efont+'"';

var s = new String(strAAT);

    s = s.replace(/; /g,";");
var a = s.split(";");
var e = new String();
for (i=0;i<a.length;i++) {
	e = a[i];
	if (e.length>0) {
	ps[ps.length]= new String(obrak+'mods:genre '+ genre_authority_tag_display + '>'
	+ bfont + e + efont
        + obrak +'/mods:genre>\r\n'
        );
	}
}//end for
}//end if not empty


//Do not make empty tag for genre_chenhall
if (strNMC != "empty_string") {
genre_authority_tag_display = ' authority="'+bfont+'nmc' +efont+'"';

var s = new String(strNMC);
    s = s.replace(/; /g,";");
var a = s.split(";");
var e = new String();
for (i=0;i<a.length;i++) {
	e = a[i];
	if (e.length>0) {
	ps[ps.length]= new String(obrak+'mods:genre '+ genre_authority_tag_display + '>'
	+ bfont + e + efont
        + obrak +'/mods:genre>\r\n'
        );
	}
}//end for
	
}//end if not empty

//Do not make empty tag for genre (marc)
if (strMARC != "empty_string" ) {
genre_authority_tag_display = ' authority="'+bfont+'marcgt' +efont+'"';

var s = new String(strMARC);
    s = s.replace(/; /g,";");
var a = s.split(";");
var e = new String();
for (i=0;i<a.length;i++) {
	e = a[i];
	if (e.length>0) {
	ps[ps.length]= new String(obrak+'mods:genre '+ genre_authority_tag_display + '>'
	+ bfont + e + efont
        + obrak +'/mods:genre>\r\n'
        );
	}
}//end for
}//end if not empty

//Do not make empty tag for genre (other)
if (strOTHER != "empty_string") {
genre_authority_tag_display = ' authority="'+bfont+authOTHER +efont+'"';
var s = new String(strOTHER);
    s = s.replace(/; /g,";");
var a = s.split(";");
var e = new String();
for (i=0;i<a.length;i++) {
	e = a[i];
	if (e.length>0) {
	ps[ps.length]= new String(obrak+'mods:genre '+ genre_authority_tag_display + '>'
	+ bfont + e + efont
        + obrak +'/mods:genre>\r\n'
        );
	}
}//end for
}//end if not empty




return(ps);


}///end function buildTagsArray_genre()




//=================================================================
//=================================================================
///returns the ps array
function buildTagsArray_originInfo(N){
//alert("buildTagsArray_page_02");

set_output_option(N);

var ps=new Array();

var str = new String(parent.U.document.UF.oi_block_list.value);
if (str.length ==0) return(ps);
var Aoi = new Array();
    Aoi = str.split(parent.U.split_token);
    /// test for valid data
    vtest =0;
    for (i=0;i<Aoi.length;i++){
        if (Aoi[i] != "empty_string" && Aoi[i] != "_zero") vtest++;
        }
    //do not make empty tags for originInfo
    if (vtest == 0 ) { return (ps); }
ps[ps.length] = new String(obrak+'mods:originInfo>\r\n');

var keyDateDone = 0;

//========Aoi[0]===========date_created
//========Aoi[1]===========date_createdQ



if ( Aoi[0] != "empty_string" ) {//use date_created

var str_date_createdQ = new String('');
if ( Aoi[1] !=  "empty_string" && Aoi[1] != "none") {
    str_date_createdQ = 'qualifier="'+bfont+ Aoi[1] +efont+'"';
    }
keyDateDone++;
ps[ps.length] = new String(obrak+'mods:dateCreated '+ str_date_createdQ+' keyDate="'+bfont+'yes'+efont+'"  encoding="'+bfont+'w3cdtf'+efont+'">'
	+ bfont + Aoi[0] + efont 
	+ obrak+'/mods:dateCreated>\r\n'
	);

}else{// date range tags

//==================Aoi[2] date_created_begin
//==================Aoi[3] date_created_beginQ
if ( Aoi[2] != "empty_string" ) {
var str_date_created_beginQ = new String('');
if ( Aoi[3] != "empty_string" && Aoi[3] != "none") {
    str_date_created_beginQ = 'qualifier="'+bfont+ Aoi[3]+efont +'"';
    }
keyDateDone++;
ps[ps.length] = new String(obrak+'mods:dateCreated '+ str_date_created_beginQ+'  keyDate="'+bfont+'yes'+efont+'" encoding="'+bfont+'w3cdtf'+efont+'" point="'+bfont+'start'+efont+'">'
	+ bfont + Aoi[2] + efont
	+ obrak+'/mods:dateCreated>\r\n'
	);
}



//==================Aoi[4] date_created_end
//==================Aoi[5] date_created_endQ
if ( Aoi[4]!="empty_string" ) {
var str_date_created_endQ = new String('');
if ( Aoi[5] != "empty_string" && Aoi[5] != "none" ) {
    str_date_created_endQ = 'qualifier="'+bfont+ Aoi[5] +efont+'"';
    }
ps[ps.length] = new String(obrak+'mods:dateCreated '+ str_date_created_endQ+' encoding="'+bfont+'w3cdtf'+efont+'" point="'+bfont+'end'+efont+'">'
	+ bfont + Aoi[4]+ efont 
	+ obrak+'/mods:dateCreated>\r\n'
	);
}

}//end date range tags

//==================Aoi[9] date_issued
//==================Aoi[10] date_issuedQ

if ( Aoi[10] != "empty_string" ) {
var str_date_issuedQ = new String('');

if ( Aoi[10] != "empty_string" && Aoi[10] != "none") {
    str_date_issuedQ = 'qualifier="'+bfont+ Aoi[10]+efont +'"';
    }
var str_keyDate = new String("");
if ( keyDateDone == 0 ) {
	str_keyDate = ' keyDate="yes" ';
	}

ps[ps.length] = new String(obrak+'mods:dateIssued '+ str_date_issuedQ+str_keyDate+' encoding="'+bfont+'w3cdtf'+efont+'">'
	+ bfont + Aoi[9] + efont
	+ obrak+'/mods:dateIssued>\r\n'
	);
}

//==================Aoi[6] place_of_origin_authority
//==================Aoi[7] place_of_origin 
//do not make tag for empty form vars
if ( Aoi[7] != "empty_string" ) {
ps[ps.length]= new String(obrak+'mods:place>\r\n');

var origin_authority=new String("");

if (Aoi[6] == "MarcCountryText" ) {
	origin_authority=' type="'+bfont+'text'+efont+'" authority="'+bfont+'marccountry'+efont+'"';
}else if (Aoi[6] == "MarcCountryCode" ) {
	origin_authority=' type="'+bfont+'code'+efont+'" authority="'+bfont+'marccountry'+efont+'"';
}else if (Aoi[6] == "ISO3166text" ) {
	origin_authority=' type="'+bfont+'text'+efont+'" authority="'+bfont+'iso1366'+efont+'"';
}else if (Aoi[6] == "ISO3166code" ) {
	origin_authority=' type="'+bfont+'code'+efont+'" authority="'+bfont+'iso1366'+efont+'"';
}

ps[ps.length]= new String(obrak+'mods:placeTerm'+origin_authority+'>'
	+ bfont + replace_apos(Aoi[7]) + efont 
	+ obrak+'/mods:placeTerm>\r\n'
	);
	
ps[ps.length]= new String(obrak+'/mods:place>\r\n');
}
	

//==================Aoi[8] publisher_name_addr
//do not make tag for empty form vars
if ( Aoi[8] != "empty_string"  ) {
ps[ps.length]= new String(obrak+'mods:publisher>'
	+ bfont + replace_apos(Aoi[8]) + efont
	+ obrak +'/mods:publisher>\r\n'
	);
}



ps[ps.length]= new String(obrak+'/mods:originInfo>\r\n');
return(ps);


}///end function buildTagsArray_originInfo()



//=================================================================
//=================================================================
///returns the ps array
function buildTagsArray_language(N){
//alert("buildTagsArray_language");

set_output_option(N);

var ps=new Array();

var str = new String(parent.U.document.UF.la_block_list.value);
if (str.length ==0) return(ps);
var Alang = new Array();
    Alang = str.split(parent.U.split_token);
    /// test for valid data 
    vtest =0;
    for (i=0;i<Alang.length;i++){
	if (Alang[i] != "empty_string") vtest++;
	}
    if (vtest == 0 ) { return (ps); }
var a = 0;//counter for Alang
var Nlang = new Number( parent.L.get_block_iteration("language"));
var code = new String("");
var desc = new String("");


for (i=0;i<Nlang;i++){
code = Alang[a++];
desc = Alang[a++];

	ps[ps.length]= new String(obrak+'mods:language>\r\n');
	if ( code != "" && code != "empty_string" ){
		ps[ps.length]= new String(obrak+'mods:languageTerm type="'+bfont+'code'+efont+'" authority="'+bfont+'iso639-2b'+efont+'">'
		+ bfont + code + efont 
		+ obrak +'/mods:languageTerm>\r\n'
		);
	}
	if ( desc != "" && desc != "empty_string" ){
		ps[ps.length]= new String(obrak+'mods:languageTerm type="'+bfont+'text'+efont+'" >'
		+ bfont + desc + efont 
		+ obrak +'/mods:languageTerm>\r\n'
		);
	}
	ps[ps.length]= new String(obrak+'/mods:language>\r\n');
}//end for


//ps[ps.length]= new String(obrak+'/mods:language>\r\n');


return(ps);

}///end function buildTagsArray_language() 



//=================================================================
//=================================================================
///returns the ps array
function buildTagsArray_physicalDescription(N){
//alert("buildTagsArray_physicalDescription");

set_output_option(N);

var ps=new Array();

//do not make empty <mods:physicalDescription>...</mods:physicalDescription> tags
var str = new String(parent.U.document.UF.pd_block_list.value);

var regexstr=  new String();
    regexstr = "/"+parent.U.split_token+"/g";
//alert("reqexstr =\n"+regexstr);
var RE = new RegExp(eval(regexstr));

var tempStr = new String(str);
    tempStr = tempStr.replace(/empty_string/g,"");
    tempStr = tempStr.replace(/_zero/g,"");
	
	//alert(" 3. physicalDescription  tempStr=\n"+tempStr+"\n tempStr.length="+tempStr.length);
	tempStr = tempStr.replace(RE,"");
	//alert(" 3. physicalDescription  tempStr=\n"+tempStr+"\n tempStr.length="+tempStr.length);


if (tempStr.length == 0) return(ps);

//if (str.length ==0) return(ps);

   ps[ps.length]= new String(obrak+'mods:physicalDescription>\r\n');
   



var Apd = new Array();
    Apd = str.split(parent.U.split_token);

var Amsg = new String("Amsg:");
    /// test for valid data 
    vtest =0;
    //do not test first dropdown (Apd[0]) because always has a value... in a perfect world...
    for (i=0;i<Apd.length;i++){
	if (Apd[i] != "empty_string" && Apd[i] != "_zero") vtest++;
	Amsg += "\n Apd["+i+"]="+Apd[i];
	}
	//if(!confirm(Amsg)) return;

    if (vtest == 0 ) { return (ps); }
var a = 0;//counter for Apd
//var Npd = new Number( parent.L.get_block_iteration("physicalDescription")); //no repeats



///form_type_technique
///do not build empty tag
if ( Apd[2] != "empty_string" ) {

var strTechAuth = new String("");
    strTechAuth = Apd[1];
    if (Apd[1] != "_zero"){
	strTechAuth=' authority="'+bfont+'aat'+efont+'"';
	}

ps[ps.length]= new String(obrak+'mods:form type="'+bfont+'technique'+efont+'"'+strTechAuth+'>'
	+ bfont + replace_apos(Apd[2]) + efont
	+ obrak+'/mods:form>\r\n'
	);

}///end if Apd[2] != empty

///form_type_medium
///do not build empty tag
if ( Apd[4] != "empty_string" ) {

var strMedAuth = new String("");
if (Apd[3] != "_zero") {
	strMedAuth=' authority="'+bfont+'aat'+efont+'"';
	}

ps[ps.length]= new String(obrak+'mods:form type="'+bfont+'medium'+efont+'"'+strMedAuth+'>'
	+ bfont + replace_apos(Apd[4]) + efont 
	+ obrak+'/mods:form>\r\n'
	);
}//end if Apd[4] != empty



///do not build empty tag for internetmediatype
if (Apd[5] != "empty_string" ) {
ps[ps.length]= new String(obrak+'mods:internetMediaType>'
	+ bfont + Apd[5] + efont 
	+ obrak+'/mods:internetMediaType>\r\n'
	);
}//end internetMediaType


///////do not generate an empty tag for extent
if ( Apd[6] != "empty_string" ) {

ps[ps.length]= new String(obrak+'mods:extent>'
	+ bfont + replace_apos(Apd[6]) + efont 
	+ obrak+'/mods:extent>\r\n'
	);
}
			
///////do not generate an empty tag for note
if ( Apd[7] != "empty_string" ) {

ps[ps.length]= new String(obrak+'mods:note>'
	+ bfont + replace_apos(Apd[7]) + efont 
	+ obrak+'/mods:note>\r\n'
	);
}
			
///do not build empty tag for digital_origin
///dropdown menu with option[0] = none selected "_zero"
//mods_digital_origin required
if (Apd[0] != "_zero" && Apd[0] != "empty_string") {
var strModsDigitalOrigin = new String(Apd[0]);
ps[ps.length]= new String(obrak+'mods:digitalOrigin>'
	+ bfont + strModsDigitalOrigin+ efont 
	+ obrak+'/mods:digitalOrigin>\r\n'
	);
}//end mods_digital_origin



ps[ps.length]= new String(obrak+'/mods:physicalDescription>\r\n');

return(ps);


}///end function buildTagsArray_physicalDescription() 


//=================================================================
//=================================================================
///returns the ps array
function buildTagsArray_abstract(N){
//alert("buildTagsArray_abstract");

set_output_option(N);

var ps=new Array();

var str = new String(parent.U.document.UF.ab_block_list.value);
if (str.length ==0) return(ps);
var Aab = new Array();
    Aab = str.split(parent.U.split_token);
    /// test for valid data 
    vtest =0;
    for (i=0;i<Aab.length;i++){
	if (Aab[i] != "empty_string") vtest++;
	}
    if (vtest == 0 ) { return (ps); }
var a = 0;//counter for Alang
var Nab = new Number( parent.L.get_block_iteration("abstract"));
var strAbstract = new String("");


for (i=0;i<Nab;i++){
strAbstract = Aab[a++];

	if ( strAbstract != "" && strAbstract != "empty_string" ){
		ps[ps.length]= new String(obrak+'mods:abstract>'
		+ bfont + strAbstract + efont 
		+ obrak +'/mods:abstract>\r\n'
		);
	}
}//end for


return(ps);


}///end function buildTagsArray_abstract()





//=================================================================
//=================================================================
function buildTagsArray_subject(N){
//alert("buildTagsArray_subject");

set_output_option(N);

var ps=new Array();


/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n');

var newStr = new String();
var str = new String(parent.U.document.UF.subject_block_list.value);
if (str.length ==0) return(ps);
//if (!confirm("subject str=\n"+str)) {return(ps);}


var Asu = new Array();
    Asu =  str.split(parent.U.split_token);

var j = 0;
var k = 0;

var tempAttr = new String("");
var tempA    = new Array();

var sType = ' type="' +bfont;
var sAuth = ' authority="' +bfont;
var eQuot = efont + '">';

for (i=0;i<Asu.length;i++) {
	//alert("Asu["+i+"]="+Asu[i]);
	if (Asu[i]=="empty_string" ) {//no subelement block, no tags
		j=i-1;
		k=i+1;
		Asu[i] = "";
		Asu[j] = "";
		Asu[k] = "";
	} else {//add color to subject authority attribute
		tempAttr= Asu[i];
		tempA = tempAttr.split('"');
		if (tempA[0].indexOf("mods:subject authority=")>-1) {//color the subject authority attribute
			//alert("tempA[0]="+tempA[0]+"\ntempA[1]="+tempA[1]+"\ntempA[2]="+tempA[2]);
			tempA[1]='"'+bfont+tempA[1]+efont+'"';
			//alert("tempA[0]="+tempA[0]+"\ntempA[1]="+tempA[1]+"\ntempA[2]="+tempA[2]);
			Asu[i]=tempA[0]+tempA[1]+tempA[2];	
			//alert("Asu[i]="+Asu[i]);
		}
	}//end else
}//end for

for ( i=0; i<Asu.length; i++ ) {
	if (Asu[i].length > 0 ) {
		newStr += parent.U.split_token + Asu[i];
		}//end if
}//end for


var regexstr=  new String();
    regexstr = "/"+parent.U.split_token+"/g";
//alert("reqexstr =\n"+regexstr);
var RE = new RegExp(eval(regexstr));


    str = newStr;

    str = str.replace(RE,"");

if (N==1) {//html display
str = str.replace(/<mods:/g,"<br>&lt;mods:");
str = str.replace(/<\/mods:subject>/g,"<br>&lt;\/mods:subject>");
str = str.replace(/<\/mods:cartographics>/g,"<br>&lt;\/mods:cartographics>");
str = str.replace(/<\/mods:hierarchicalGeographic>/g,"<br>&lt;\/mods:hierarchicalGeographic>"); 
str = str.replace(/<\/mods:name>/g,"<br>&lt;\/mods:name>");
str = str.replace(/<\/mods:titleInfo>/g,"<br>&lt;\/mods:titleInfo>");
str = str.replace(/<\/mods:/g,"&lt;\/mods:");

//////color the text input/////////////////////////////////////////////////////////////////////

//cart
str = str.replace(/&lt;mods:coordinates>/g,'&lt;mods:coordinates><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:coordinates>/g,'</b></font>&lt;\/mods:coordinates>');
str = str.replace(/&lt;mods:scale>/g,'&lt;mods:scale><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:scale>/g,'</b></font>&lt;\/mods:scale>');
str = str.replace(/&lt;mods:projection>/g,'&lt;mods:projection><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:projection>/g,'</b></font>&lt;\/mods:projection>');

//cgeo
str = str.replace(/&lt;mods:geographicCode authority="marcgac">/g,'&lt;mods:geographicCode authority="<font color=\"a00000\"><b>marcgac</b></font>"><font color="a00000"><b>');
str = str.replace(/&lt;mods:geographicCode authority="marccountry">/g,'&lt;mods:geographicCode authority="<font color=\"a00000\"><b>marccountry</b></font>"><font color="a00000"><b>');
str = str.replace(/&lt;mods:geographicCode authority="iso3166">/g,'&lt;mods:geographicCode authority="<font color=\"a00000\"><b>iso3166</b></font>"><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:geographicCode>/g,'</b></font>&lt;\/mods:geographicCode>');

//genr
str = str.replace(/&lt;mods:genre>/g,'&lt;mods:genre><font color="a00000"><b>');
str = str.replace(/&lt;mods:genre authority="aat">/g,'&lt;mods::genre authority="<font color=\"a00000\"><b>aat</b></font>"><font color="a00000"><b>');
str = str.replace(/&lt;mods:genre authority="gsafd">/g,'&lt;mods:genre authority="<font color=\"a00000\"><b>gsafd</b></font>"><font color="a00000"><b>');
str = str.replace(/&lt;mods:genre authority="lcsh">/g,'&lt;mods:genre authority="<font color=\"a00000\"><b>lcsh</b></font>"><font color="a00000"><b>');
str = str.replace(/&lt;mods:genre authority="marcgt">/g,'&lt;mods:genre authority="<font color=\"a00000\"><b>marcgt</b></font>"><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:genre>/g,'</b></font>&lt;\/mods:genre>');


//geog
str = str.replace(/&lt;mods:geographic>/g,'&lt;mods:geographic><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:geographic>/g,'</b></font>&lt;\/mods:geographic>');


//hgeo
str = str.replace(/&lt;mods:continent>/g,'&lt;mods:continent><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:continent>/g,'</b></font>&lt;\/mods:continent>');
str = str.replace(/&lt;mods:country>/g,'&lt;mods:country><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:country>/g,'</b></font>&lt;\/mods:country>');
str = str.replace(/&lt;mods:province>/g,'&lt;mods:province><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:province>/g,'</b></font>&lt;\/mods:province>');
str = str.replace(/&lt;mods:region>/g,'&lt;mods:region><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:region>/g,'</b></font>&lt;\/mods:region>');
str = str.replace(/&lt;mods:state>/g,'&lt;mods:state><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:state>/g,'</b></font>&lt;\/mods:state>');
str = str.replace(/&lt;mods:territory>/g,'&lt;mods:territory><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:territory>/g,'</b></font>&lt;\/mods:territory>');
str = str.replace(/&lt;mods:county>/g,'&lt;mods:county><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:county>/g,'</b></font>&lt;\/mods:county>');
str = str.replace(/&lt;mods:city>/g,'&lt;mods:city><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:city>/g,'</b></font>&lt;\/mods:city>');
str = str.replace(/&lt;mods:island>/g,'&lt;mods:island><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:island>/g,'</b></font>&lt;\/mods:island>');
str = str.replace(/&lt;mods:area>/g,'&lt;mods:area><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:area>/g,'</b></font>&lt;\/mods:area>');

//namp,namc,namm
str = str.replace(/&lt;mods:namePart type="family">/g,'&lt;mods:namePart type="<font color=\"a00000\"><b>family</b></font>"><font color="a00000"><b>');
str = str.replace(/&lt;mods:namePart type="given">/g,'&lt;mods::namePart type="<font color=\"a00000\"><b>given</b></font>"><font color="a00000"><b>');
str = str.replace(/&lt;mods:namePart type="termsOfAddress">/g,'&lt;mods:namePart type="<font color=\"a00000\"><b>termsOfAddress</b></font>"><font color="a00000"><b>');
str = str.replace(/&lt;mods:namePart type="date">/g,'&lt;mods:namePart type="<font color=\"a00000\"><b>date</b></font>"><font color="a00000"><b>');
str = str.replace(/&lt;mods:namePart>/g,'&lt;mods:namePart><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:namePart>/g,'</b></font>&lt;\/mods:namePart>');

//occupation
str = str.replace(/&lt;mods:occupation>/g,'&lt;mods:occupation><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:occupation>/g,'</b></font>&lt;\/mods:occupation>');

//temporal
str = str.replace(/&lt;mods:temporal encoding="w3dctf">/g,'&lt;mods:temporal encoding="<font color=\"a00000\"><b>w3dctf</b></font>"><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:temporal>/g,'</b></font>&lt;\/mods:temporal>');

//title
str = str.replace(/authority="naf"/g,'authority="<font color=\"a00000\"><b>naf</b></font>"');
str = str.replace(/authority="sanb"/g,'authority="<font color=\"a00000\"><b>sanb</b></font>"');
str = str.replace(/authority="hlasja"/g,'authority="<font color=\"a00000\"><b>hlasja</b></font>"');
str = str.replace(/authority="dnlm"/g,'authority="<font color=\"a00000\"><b>dnlm</b></font>"');
str = str.replace(/authority=""/g,'');
str = str.replace(/type="abbreviated"/g,'authority="<font color=\"a00000\"><b>abbreviated</b></font>"');
str = str.replace(/type="translated"/g,'authority="<font color=\"a00000\"><b>translated</b></font>"');
str = str.replace(/type="alternative"/g,'authority="<font color=\"a00000\"><b>alternative</b></font>"');
str = str.replace(/type="uniform"/g,'authority="<font color=\"a00000\"><b>uniform</b></font>"');
str = str.replace(/type=""/g,'');
str = str.replace(/&lt;mods:nonSort>/g,'&lt;mods:nonSort><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:nonSort>/g,'</b></font>&lt;\/mods:nonSort>');
str = str.replace(/&lt;mods:title>/g,'&lt;mods:title><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:title>/g,'</b></font>&lt;\/mods:title>');
str = str.replace(/&lt;mods:subTitle>/g,'&lt;mods:subTitle><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:subTitle>/g,'</b></font>&lt;\/mods:subTitle>');
str = str.replace(/&lt;mods:partNumber>/g,'&lt;mods:partNumber><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:partNumber>/g,'</b></font>&lt;\/mods:partNumber>');
str = str.replace(/&lt;mods:partName>/g,'&lt;mods:partName><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:partName>/g,'</b></font>&lt;\/mods:partName>');

//topic
str = str.replace(/&lt;mods:topic>/g,'&lt;mods:topic><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:topic>/g,'</b></font>&lt;\/mods:topic>');

}else{//txt download
str = str.replace(/<br><mods:/g,"<mods:");
str = str.replace(/<br><\/mods:/g,"<\/mods:");
}


ps[ps.length]= new String(str);

return(ps);

}//end function buildTagsArray_subject  with multiple subject blocks



//=================================================================
//=================================================================
//aps = buildTagsArray_page_05(num);
///returns the ps array
function buildTagsArray_relatedItem(N){

set_output_option(N);

var ps=new Array();


/////////BEGIN PAGE <relatedItem>
/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n');

var regexstr=  new String();
    regexstr = "/"+parent.U.split_token+"/g";
//alert("reqexstr =\n"+regexstr);
var RE = new RegExp(eval(regexstr));

var str = new String(parent.U.document.UF.ri_block_list.value);
var tempStr = new String(str);
    tempStr = tempStr.replace(/empty_string/g,"");
    tempStr = tempStr.replace(/_zero/g,"");
    tempStr = tempStr.replace(/END_RI_BLOCK_00/g,"");
    tempStr = tempStr.replace(RE,"");
        //alert(" 3. ri  tempStr=\n"+tempStr+"\n tempStr.length="+tempStr.length);
if (tempStr.length ==  0) return(ps);

var Ari = new Array();
    Ari = str.split(parent.U.split_token);


var numRI = get_block_iteration("relatedItem");
var attr_dlab = new String(""); //attribute displayLabel
var attr_type = new String(""); //attribute type
var attr_url = new String(""); //attribute xlink:href
var dlab = new String(""); //attribute displayLabel
var type = new String(""); //attribute type
var url = new String(""); //attribute xlink:href
var end = new String(""); //end of ri block
var m = 0; //counter for Ari array

for (i=0;i<numRI;i++) {
attr_dlab="";
dlab = Ari[m++];
//alert("dlab="+dlab);
	if ( dlab != "" && dlab != "empty_string" ) {
	attr_dlab = ' displayLabel="'+bfont+dlab+efont+'"';
	}
attr_type="";
type = Ari[m++];
//alert("type="+type);
	if ( type != "none" && type != "_zero" ) {
	attr_type = ' type="'+bfont+type+efont+'"';
	}

attr_url="";
url  = Ari[m++];
//alert("url="+url);
	if ( url != "" ) {
        attr_url = ' xlink:href="'+bfont+url+efont+'"';
	}
end = Ari[m++];
//alert("end="+end);
	
ps[ps.length]= new String(obrak+'mods:relatedItem'+attr_dlab+attr_type+attr_url+' />\r\n');

}//end for

return(ps);

}//end function builtTagsArray_relatedItem(N)


//=================================================================
//=================================================================
//aps = buildTagsArray_identifier(num);
///returns the ps array
function buildTagsArray_identifier(N){

set_output_option(N);

var ps=new Array();

////////////Identifiers
var strid = new String(parent.U.document.UF.id_block_list.value);
if (strid.length ==0) return(ps);
var Aid = new Array();
    Aid = strid.split(parent.U.split_token);

var numID = get_block_iteration("identifier");

var attr_id_dlab    = new String(""); //attribute id displayLabel
var attr_id_type    = new String(""); //attribute id type
var attr_id_invalid = new String(""); //attribute id invalid
var attr_id_url     = new String(""); //attribute id url
var id_dlab    = new String(""); //attribute id displayLabel
var id_type    = new String(""); //attribute id type
var id_invalid = new String(""); //attribute id invalid
var id_url     = new String(""); //attribute id url
var id_end     = new String(""); //end id block
var m = 0; //counter for Aid array

for (i=0;i<numID;i++) {
attr_id_dlab="";
id_dlab = Aid[m++];
//alert("id_dlab="+id_dlab);
	if ( id_dlab != "" && id_dlab != "empty_string") {
	attr_id_dlab = ' displayLabel="'+bfont+id_dlab+efont+'"';
	}
attr_id_invalid="";
id_invalid = Aid[m++];
//alert("id_invalid="+id_invalid);
	if ( id_invalid == "yes" ) {
	attr_id_invalid = ' invalid="'+bfont+'yes'+efont+'"';
	}
attr_id_type="";
id_type = Aid[m++];
//alert("id_type="+id_type);
	if ( id_type != "" && id_type != "none") {
	attr_id_type = ' type="'+bfont+id_type+efont+'"';
	}
attr_id_url="";
id_url  = Aid[m++];
//alert("id_url="+id_url);
	if ( id_url != "" ) {
	attr_id_url = id_url;
	}

id_end = Aid[m++];
//alert("id_end="+id_end);

ps[ps.length]= new String(obrak+'mods:identifier'+attr_id_dlab+attr_id_invalid+attr_id_type+'>'
			 +bfont+attr_id_url+efont+obrak+'/mods:identifier>\r\n');


}//end for


return(ps);

}//end function builtTagsArray_identifier(N)

//=================================================================
//=================================================================
//aps=buildTagsArray_location(N)

function buildTagsArray_location(N){

set_output_option(N);

var ps=new Array();


var regexstr=  new String();
    regexstr = "/"+parent.U.split_token+"/g";
//alert("reqexstr =\n"+regexstr);

var RE = new RegExp(eval(regexstr));
var str = new String(parent.U.document.UF.lu_block_list.value);
var tempStr = new String(str);
    tempStr = tempStr.replace(/empty_string/g,"");
    tempStr = tempStr.replace(/_zero/g,"");
	tempStr = tempStr.replace(RE,"");
        //alert(" 3. lu tempStr=\n"+tempStr+"\n tempStr.length="+tempStr.length);
if (tempStr.length == 0) return(ps);

ps[ps.length]= new String(obrak+'mods:location>\r\n');

var Alu = new Array();
      Alu = str.split(parent.U.split_token);

//for (i=0;i<Alu.length;i++){
        //alert("Alu["+i+"]="+Aac[i]);
        //}

var attr_usage = new String('');
var numLU = get_block_iteration("location");
var attr_access = new String(""); //attribute access value
var access = new String(""); //attribute access 
var url = new String(""); //data url
var m = 0; //counter for Alu array

for (i=0;i<numLU;i++) {

	if (i==0) {
		attr_usage = ' usage="'+bfont+'primary display'+efont+'" ';//required once and only once
	}else{
		attr_usage = '';
	}

	attr_access="";
	access = Alu[m++];
	if (access != "_zero") {
		attr_access = ' access="'+bfont+access+efont+'"';
	}

	url  = Alu[m++];
	url = bfont+url+efont;

	ps[ps.length]= new String(obrak+'mods:url'+attr_usage+attr_access+'>'+url+obrak+'/mods:url>\r\n');

}//end for

ps[ps.length]= new String(obrak+'/mods:location>\r\n');
return(ps);

}///end function buildTagsArray_location()


//=================================================================
//=================================================================
//aps=buildTagsArray_accessCondition(N)

function buildTagsArray_accessCondition(N){

set_output_option(N);

var ps=new Array();


var str = new String(parent.U.document.UF.ac_block_list.value);
if (str.length ==0) return(ps);
var Aac = new Array();
      Aac = str.split(parent.U.split_token);

//for (i=0;i<Aac.length;i++){
        //alert("Aac["+i+"]="+Aac[i]);
        //}

var numAC = get_block_iteration("accessCondition");
var attr_type = new String(""); //attribute type
var type = new String(""); //attribute type
var url = new String(""); //data url
var m = 0; //counter for Aac array

for (i=0;i<numAC;i++) {

attr_type="";
type = Aac[m++];
attr_type = ' type="'+bfont+type+efont+'"';

url  = Aac[m++];
//do not make empty tags
if ( url != "empty_string") {
	url = bfont+url+efont;
	ps[ps.length]= new String(obrak+'mods:accessCondition'+attr_type+'>'+url+obrak+'/mods:accessCondition>\r\n');
}

}//end for

return(ps);

}//end function builtTagsArray_accessCondition(N)


//=================================================================
//=================================================================
function buildTagsArray_recordInfo(N){
//alert("buildTagsArray_recordInfo");
var s = new String(parent.U.document.UF.re_block_list.value);
if (s.length ==0) return(ps);

var ML = new Array( //labels for M
 "rcs authority"
,"record_content_source"
,"record_info_origin"
,"record_creation_data"
,"language_of_cataloging"
,"language_of_cataloging_display"
);

var M = new Array();
    M = s.split(parent.U.split_token);
var Mmsg = new String("recordInfo re_block_list Mmsg:");
for(i=0;i<M.length;i++){
	Mmsg += "\n M["+i+"]="+M[i]+" -- " +ML[i];
	}
//////if (!confirm(Mmsg))return;

set_output_option(N);

var ps=new Array();

ps[ps.length]= new String(obrak+'mods:recordInfo>\r\n');

//do not make empty tag for record_content_source
if (M[1] != "empty_string") {
var rcs_auth = new String("");
if ( M[0] != "_zero" ) {
        rcs_auth = ' authority="'+bfont+M[0]+efont+'"';
        }
ps[ps.length]= new String(obrak+'mods:recordContentSource'+rcs_auth+'>'
        + bfont + replace_apos(M[1]) + efont
        + obrak+'/mods:recordContentSource>\r\n'
        );
}//end record_content_source

//do not make empty tag for recordOrigin
if (M[2] != "empty_string" ) {
ps[ps.length]= new String(obrak+'mods:recordOrigin>'
        + bfont + M[2] + efont
        + obrak+'/mods:recordOrigin>\r\n'
        );
}//end recordOrigin



//do not make empty tag record_creation_date
if ( M[3] != "empty_string" ) {
ps[ps.length]= new String(obrak+'mods:recordCreationDate encoding="'+bfont+'w3cdtf'+efont+'">'
        + bfont + M[3] + efont
        + obrak+'/mods:recordCreationDate>\r\n'
        );
}//end record_creation_date


//language_of_cataloging required
ps[ps.length]= new String(obrak+'mods:languageOfCataloging>\r\n');

ps[ps.length]= new String(obrak+'mods:languageTerm type="'+bfont+'code'+efont+'" authority="'+bfont+'iso639-2b'+efont+'">'
        + bfont + M[4] + efont
        + obrak+'/mods:languageTerm>\r\n'
        );

ps[ps.length]= new String(obrak+'mods:languageTerm type="'+bfont+'text'+efont+'" >'
        + bfont + M[5] + efont
        + obrak+'/mods:languageTerm>\r\n'
        );
ps[ps.length]= new String(obrak+'/mods:languageOfCataloging>\r\n');


ps[ps.length]= new String(obrak+'/mods:recordInfo>\r\n');

return(ps);


}///end function buildTagsArray_recordInfo()






