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



//original with alerts added

//add NI ( Nindex)

//alert("vv_compose_tags.js - got to here 0");

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


function buildTagsArray_header(N){


	//alert("buildTagsArray_header");

	//N=0 no red, use '<' in xml tag
	//N>0 insert red use '&lt;' in xml tag to make html viewable

	var NI = 0;
	if ( N == "0" ) { NI=0; } else { NI=1; }

	
	var bfont= new String(BFONT[NI]);
	var efont= new String(EFONT[NI]);
	var obrak= new String(OBRAK[NI]);
	var num = new Number(N);
	var commentFilename    		= new String(parent.U.document.UF.VVcomment_01.value);
	var commentNumRelatedItems	= new String(parent.U.document.UF.VVcomment_02.value);
	var commentNumIdentifiers    	= new String(parent.U.document.UF.VVcomment_02a.value);
	var commentNumSubjectBlocks    	= new String(parent.U.document.UF.VVcomment_02b.value);
	var commentNumNameBlocks    	= new String(parent.U.document.UF.VVcomment_02c.value);
	var commentReloadDate  		= new String(parent.U.document.UF.VVcomment_03.value);
	var commentContributor 		= new String(parent.U.document.UF.VVcomment_03c.value);
	var commentProject     		= new String(parent.U.document.UF.VVcomment_03p.value);
	var commentDate        		= new String(parent.U.document.UF.VVcomment_03d.value);
	var commentValidate    		= new String(parent.U.document.UF.VVcomment_04.value);

	//alert("commentFilename=\n"+commentFilename);
	//alert("commentDate=\n"+commentDate);
	//alert("commentNumTiffs="\n"+commentNumTiffs);
	if ( num >0 ) {
        	commentFilename     	= commentFilename.replace(/\</g,"&#060;");
        	commentNumRelatedItems  = commentNumRelatedItems.replace(/\</g,"&#060;");
        	commentNumIdentifiers 	= commentNumIdentifiers.replace(/\</g,"&#060;");
        	commentNumSubjectBlocks = commentNumSubjectBlocks.replace(/\</g,"&#060;");
        	commentNumNameBlocks    = commentNumNameBlocks.replace(/\</g,"&#060;");
        	commentReloadDate   	= commentReloadDate.replace(/\</g,"&#060;");
        	commentContributor  	= commentContributor.replace(/\</g,"&#060;");
        	commentProject      	= commentProject.replace(/\</g,"&#060;");
        	commentDate         	= commentDate.replace(/\</g,"&#060;");
        	commentValidate     	= commentValidate.replace(/\</g,"&#060;");
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
/*
ps[ps.length] = new String(obrak +'!-- Volunteer Voices MODS profile \r\n'	
	+' released 14 December 2006 by Melanie Feltner-Reichert -->\r\n'
	);
*/
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
ps[ps.length] = new String(obrak+'!-- Volunteer Voices Workbook \r\n'
        +' version 1.0 released 6 February 2007 by Christine Haygood Deane  -->\r\n'
	);

-----------nov 24 2006 header------------------------------------------------------------------*/


ps[ps.length] = new String(obrak+'!-- DLC-MODS Workbook \r\n'
        +' version 1.2 released 16 September 2007 by Christine Haygood Deane  -->\r\n'
	);


ps[ps.length] = new String(commentContributor+" \r\n"); 
ps[ps.length] = new String(commentProject+" \r\n"); 
ps[ps.length] = new String(commentDate+" \r\n"); 
ps[ps.length] = new String(commentReloadDate+" \r\n"); 
ps[ps.length] = new String(commentFilename+" \r\n"); 
ps[ps.length] = new String(commentNumRelatedItems+" \r\n"); 
ps[ps.length] = new String(commentNumIdentifiers+" \r\n"); 
ps[ps.length] = new String(commentNumSubjectBlocks+" \r\n"); 
ps[ps.length] = new String(commentNumNameBlocks+" \r\n"); 
ps[ps.length] = new String(commentValidate+" \r\n"); 


return(ps);


}///end function buildTagsArray_header()




function buildTagsArray_closer(N){

	//alert("buildTagsArray_closer");


	//N=0 no red, use '<' in xml tag
	//N>0 insert red use '&#060;' (prev '&lt;') in xml tag to make html viewable

	var NI = 0;
	if ( N == "0" ) { NI=0; } else { NI=1; }

	
	var bfont= new String(BFONT[NI]);
	var efont= new String(EFONT[NI]);
	var obrak= new String(OBRAK[NI]);


var ps=new Array();


ps[ps.length]= new String(obrak+'/mods:mods>');

return(ps);

}///end function buildTagsArray_closer()




function buildTagsArray_page_01(N){

//alert("buildTagsArray_page_01");



	//N=0 no red, use '<' in xml tag
	//N>0 insert red use '&lt;' in xml tag to make html viewable

	var NI = 0;
	if ( N == "0" ) { NI=0; } else { NI=1; }

	
	var bfont= new String(BFONT[NI]);
	var efont= new String(EFONT[NI]);
	var obrak= new String(OBRAK[NI]);

var ps=new Array();



////////////////////////////////////////////////////////////////////////////////////		
///////////////////////// MODS TITLE BLOCK /////////////////////////////////////////
///////////////////////////////////////////////////// <mods:titleInfo>
//////////////////////////////////////////////////////////// <mods:nonsort>DATA</mods:nonSort>
//////////////////////////////////////////////////////////// <mods:title>DATA</mods:title>
//////////////////////////////////////////////////////////// <mods:subTitle>DATA</mods:subTitle>
//////////////////////////////////////////////////////////// <mods:partNumber>DATA</mods:partNumber>
//////////////////////////////////////////////////////////// <mods:partName>DATA</mods:partName>
///////////////////////////////////////////////////// </mods:titleInfo>
  

ps[ps.length]=new String(obrak+'mods:titleInfo>\r\n');

//do not create mods:nonSort for empty input
if (document.forms[0].title_non_sort.value != "") {
	ps[ps.length] = new String(obrak +'mods:nonSort>'
	+ bfont +replace_apos(document.forms[0].title_non_sort.value) + efont 
	+ obrak +'/mods:nonSort>\r\n'
	);
}

//title is required
	ps[ps.length] = new String(obrak +'mods:title>'
	+ bfont +replace_apos(document.forms[0].title.value) + efont 
	+ obrak +'/mods:title>\r\n'
	);

	
//do not create mods:subTitle for empty input
if (document.forms[0].title_sub_title.value != "") {
	ps[ps.length] = new String(obrak +'mods:subTitle>'
	+ bfont +replace_apos(document.forms[0].title_sub_title.value) + efont 
	+ obrak +'/mods:subTitle>\r\n'
	);
}



//do not create mods:partNumber for empty input
if (document.forms[0].title_part_number.value != "") {
	ps[ps.length] = new String(obrak +'mods:partNumber>'
	+ bfont +replace_apos(document.forms[0].title_part_number.value) + efont 
	+ obrak +'/mods:partNumber>\r\n'
	);
}

//do not create mods:partName for empty input
if (document.forms[0].title_part_name.value != "") {
	ps[ps.length] = new String(obrak +'mods:partName>'
	+ bfont +replace_apos(document.forms[0].title_part_name.value) + efont 
	+ obrak +'/mods:partName>\r\n'
	);
}



ps[ps.length]=new String(obrak+'/mods:titleInfo>\r\n');


var brtag = new String("&lt;br>");
if (N==0) {brtag="\r\n";}

var split_token = new String(parent.U.split_token);
var str = new String(parent.U.document.UF.name_block_list.value);
    //str = str.replace(/:::::/g,"");
var numNB = new Number(parent.U.document.UF.numNameBlocks.value);

var Anb = new Array();
    Anb = str.split(split_token);
var m = 0;//counter for Anb array

if (Anb[0] == "" ) { return; }

/*
for (i=0;i<Anb.length; i++) {
	alert("Anb["+i+"]="+Anb[i]);
	}
*/

///each name block has 9 elements
///Anb[m] is either true value or "empty_string"

var thisNameType = new String("");
var thisNameAuth = new String("");
var thisNameLast = new String("");
var thisNameGivn = new String("");
//var thisNameFirs = new String("");
//var thisNameMidd = new String("");
var thisNameToad = new String("");
var thisNameRole = new String("");
var thisNameYdob = new String("");
var thisNameYdod = new String("");
var thisEndNameB = new String("");

var strNameAuth = new String("");
var strNameGivn = new String("");
//var strFirsMidd = new String("");
var strNameYrbd = new String("");
var strNameRole = new String("");
var aNameRole   = new Array();

    for (j=0;j<numNB;j++){
	thisNameType= Anb[m++];
	thisNameAuth= Anb[m++];
	thisNameLast= Anb[m++];
	thisNameGivn= Anb[m++];
	//thisNameFirs= Anb[m++];
	//thisNameMidd= Anb[m++];
	thisNameToad= Anb[m++];
	thisNameRole= Anb[m++];
	thisNameYdob= Anb[m++];
	thisNameYdod= Anb[m++];
	thisEndNameB= Anb[m++];
	
	if (thisNameLast != "empty_string") {

	strNameAuth="";
	if (thisNameAuth != "none") {
		strNameAuth = ' authority="'+thisNameAuth+'"';
		}

	ps[ps.length]=new String(obrak+'mods:name type="'+thisNameType+'"'+  strNameAuth+ '>\r\n');

	if (thisNameLast != "empty_string") {
		if (thisNameType == "personal") {
		ps[ps.length]=new String(obrak+'mods:namePart type="family">'+bfont+thisNameLast+efont+obrak+'/mods:namePart>\r\n');
		}else{//corp, conf
		ps[ps.length]=new String(obrak+'mods:namePart>'+bfont+thisNameLast+efont+obrak+'/mods:namePart>\r\n');
		}
	}
	
	/* ---------------------------------------------------------------------------
	strFirsMidd = new String("");
	if (thisNameType == "personal") {
	   if (thisNameFirs != "empty_string" || thisNameMidd != "empty_string" ){
		strFirsMidd = thisNameFirs+" "+thisNameMidd;
		strFirsMidd = strFirsMidd.replace(/ empty_string/g,"");
		strFirsMidd = strFirsMidd.replace(/empty_string /g,"");
		ps[ps.length]=new String(obrak+'mods:namePart type="given">'+bfont+strFirsMidd+efont+obrak+'/mods:namePart>\r\n');
	   }
	}
	--------------------------------------------------------------------------------- */

 	strNameGivn = new String("");
	if (thisNameType == "personal"){
	if (thisNameGivn != "") {
		strNameGivn = thisNameGivn;
		ps[ps.length]=new String(obrak+'mods:namePart type="given">'+bfont+strNameGivn+efont+obrak+'/mods:namePart>\r\n');
		}
	}
	

	if (thisNameToad != "empty_string" && thisNameType == "personal") {
		ps[ps.length]=new String(obrak+'mods:namePart type="termsOfAddress">'+bfont+thisNameToad+efont+obrak+'/mods:namePart>\r\n');
	}

	if (thisNameType == "personal") {
	if (thisNameYdob != "empty_string" || thisNameYdod != "empty_string" ) {
		strNameYrbd = thisNameYdob +"-"+thisNameYdod;
		strNameYrbd = strNameYrbd.replace(/empty_string/g,"");//keep the dash
		strNameYrbd = strNameYrbd.replace(/living/g,"");//keep the dash 
		strNameYrbd = strNameYrbd.replace(/not available/g,"");//keep the dash
		ps[ps.length]=new String(obrak+'mods:namePart type="date">'+bfont+strNameYrbd+efont+obrak+'/mods:namePart>\r\n');
	}
	}


	if (thisNameRole != "empty_string"  ) {
		strNameRole=thisNameRole;
		aNameRole  = strNameRole.split(";");
		ps[ps.length] = new String(obrak+'mods:role>\r\n');		
		for (i=0;i<aNameRole.length;i++) {
			ps[ps.length] = new String(obrak +'mods:roleTerm authority="marcrelator" type="text">'
			+ bfont +aNameRole[i] + efont 
			+ obrak +'/mods:roleTerm>\r\n');			
			}
		ps[ps.length] = new String(obrak +'/mods:role>\r\n');
	}


	}//end if ( thisNameLast != "empty_string")	
	ps[ps.length] = new String(obrak+'/mods:name>\r\n');
    }///end for
	



///////////////////////////////////////////////////////////////////////////////////// chd
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 


return(ps);


}///end function buildTagsArray_page_01()





///returns the ps array
function buildTagsArray_page_02(N){
	//alert("buildTagsArray_page_02");


	//N=0 no red, use '<' in xml tag
	//N>0 insert red use '&#060;' (prev '&lt;')  in xml tag to make html viewable

	var NI = 0;
	if ( N == "0" ) { NI=0; } else { NI=1; }

	
	var bfont= new String(BFONT[NI]);
	var efont= new String(EFONT[NI]);
	var obrak= new String(OBRAK[NI]);

var ps=new Array();


/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n'); 




///////////////////////////////////////////////////// <mods:originInfo
///////////////////////////////////////////////////////////// <mods:dateCreated
///////////////////////////////////////////////////////////// <mods:place
///////////////////////////////////////////////////////////////////// <mods:placeTerm
///////////////////////////////////////////////////////////// <mods:publisher



ps[ps.length] = new String(obrak+'mods:originInfo>\r\n');


var keyDateDone=0;

if ( document.forms[0].date_created.value != "" ) {//use date_created
var str_date_createdQ = new String('');
if ( document.forms[0].date_createdQ.value != 'none' && document.forms[0].date_createdQ.value != "" ) {
    str_date_createdQ = 'qualifier="'+bfont+ document.forms[0].date_createdQ.value +efont+'"';
    }
keyDateDone++;
var str_date_created = new String();
    str_date_created = document.forms[0].date_created.value;
    str_date_created = str_date_created.replace(/[a-z]/gi,'');
ps[ps.length] = new String(obrak+'mods:dateCreated '+ str_date_createdQ+' keyDate="yes"  encoding="w3cdtf">'
	+ bfont + str_date_created + efont 
	+ obrak+'/mods:dateCreated>\r\n'
	);

}else{// date range tags

//document.forms[0].date_created.value   = document.forms[0].date_created_begin.value;
//document.forms[0].date_createdQ.value  = document.forms[0].date_created_beginQ.value;


var str_date_created_begin = new String();
    str_date_created_begin = document.forms[0].date_created_begin.value;
    str_date_created_begin = str_date_created_begin.replace(/[a-z]/gi,'');
    str_date_created_begin = str_date_created_begin.replace(/ /gi,'');
if ( str_date_created_begin.length > 0 ) {
var str_date_created_beginQ = new String('');
if ( document.forms[0].date_created_beginQ.value != 'none' && document.forms[0].date_created_beginQ.value != "" ) {
    str_date_created_beginQ = 'qualifier="'+bfont+ document.forms[0].date_created_beginQ.value +efont +'"';
    }
keyDateDone++;
ps[ps.length] = new String(obrak+'mods:dateCreated '+ str_date_created_beginQ+'  keyDate="yes" encoding="w3cdtf" point="start">'
	+ bfont + str_date_created_begin + efont
	+ obrak+'/mods:dateCreated>\r\n'
	);
}



var str_date_created_end = new String();
    str_date_created_end = document.forms[0].date_created_end.value;
    str_date_created_end = str_date_created_end.replace(/[a-z]/gi,'');
    str_date_created_end = str_date_created_end.replace(/ /gi,'');
if ( str_date_created_end.length > 0 ) {
var str_date_created_endQ = new String('');
if ( document.forms[0].date_created_endQ.value != 'none' && document.forms[0].date_created_endQ.value != "" ) {
    str_date_created_endQ = 'qualifier="'+bfont+ document.forms[0].date_created_endQ.value +efont+'"';
    }
ps[ps.length] = new String(obrak+'mods:dateCreated '+ str_date_created_endQ+' encoding="w3cdtf" point="end">'
	+ bfont + str_date_created_end + efont 
	+ obrak+'/mods:dateCreated>\r\n'
	);
}

}//end date range tags


///is this a required field - only when radio button yes is clicked
if ( document.forms[0].date_issued.value.length > 0 ) {
var str_date_issuedQ = new String('');

if ( document.forms[0].date_issuedQ.value != 'none' && document.forms[0].date_issuedQ.value != "") {
    str_date_issuedQ = 'qualifier="'+bfont+ document.forms[0].date_issuedQ.value+efont +'"';
    }

var str_date_issued = new String();
    str_date_issued = document.forms[0].date_issued.value;
    str_date_issued = str_date_issued.replace(/[a-z]/gi,'');
var str_keyDate = new String("");
if ( keyDateDone == 0 ) {
	str_keyDate = ' keyDate="yes" ';
	}
ps[ps.length] = new String(obrak+'mods:dateIssued '+ str_date_issuedQ+str_keyDate+' encoding="w3cdtf">'
	+ bfont + str_date_issued + efont
	+ obrak+'/mods:dateIssued>\r\n'
	);
}


//do not make tag for empty form vars
if ( document.forms[0].place_of_origin.value != "" ) {
ps[ps.length]= new String(obrak+'mods:place>\r\n');

var origin_authority=new String("");

if ( !document.forms[0].place_of_origin_option[0].selected ) {
	if (document.forms[0].place_of_origin_option[1].selected ) {
		origin_authority=" type=\"text\" authority=\"marccountry\" ";
	}else if (document.forms[0].place_of_origin_option[2].selected ) {
		origin_authority=" type=\"code\" authority=\"marccountry\" ";
	}else if (document.forms[0].place_of_origin_option[3].selected ) {
		origin_authority=" type=\"text\" authority=\"iso1366\" ";
	}else if (document.forms[0].place_of_origin_option[4].selected ) {
		origin_authority=" type=\"code\" authority=\"iso1366\" ";
	}
}
	


ps[ps.length]= new String(obrak+'mods:placeTerm'+origin_authority+'>'
	+ bfont + replace_apos(document.forms[0].place_of_origin.value) + efont 
	+ obrak+'/mods:placeTerm>\r\n'
	);
	
ps[ps.length]= new String(obrak+'/mods:place>\r\n');
}
	


//do not make unneeded comma
var myComma =new String("");
var myPubName = new String(document.forms[0].publisher_name.value);
var myPubAddr = new String(document.forms[0].publisher_address.value);

myPubName = myPubName.replace(/ /g,'');
myPubAddr = myPubAddr.replace(/ /g,'');

if ( myPubName.length > 0 && myPubAddr.length > 0 ) {
	myComma = ", ";
	}


//do not make tag for empty form vars
if ( document.forms[0].publisher_name.value.length > 0 || document.forms[0].publisher_address.value.length > 0 ) {
var publisherNameAddress = new String();
    publisherNameAddress = document.forms[0].publisher_name.value+myComma+document.forms[0].publisher_address.value;
ps[ps.length]= new String(obrak+'mods:publisher>'
	+ bfont + replace_apos(publisherNameAddress) + efont
	+ obrak +'/mods:publisher>\r\n'
	);
}


ps[ps.length]= new String(obrak+'/mods:originInfo>\r\n');

	





///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// close mods


/////////////ps[ps.length]= new String(obrak+'/mods:mods>\r\n');

///////////////////////////////////////////////////////////////////////////////////// chd
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 


return(ps);


}///end function buildTagsArray_page_02()



///returns the ps array
function buildTagsArray_page_03(N){
//alert("buildTagsArray_page_03");


//N=0 no red, use '<' in xml tag
//N>0 insert red use '&#060;' (prev '&lt;')  in xml tag to make html viewable

var NI = 0;
if ( N == "0" ) { NI=0; } else { NI=1; }


var bfont= new String(BFONT[NI]);
var efont= new String(EFONT[NI]);
	var obrak= new String(OBRAK[NI]);

var ps=new Array();

//ps[ps.length] = new String("<-- page_03 -->");

/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n'); 


	

///////////////////////////////////////////////////// <mods:language
///////////////////////////////////////////////////////////// <mods:languageTerm


ps[ps.length]= new String(obrak+'mods:language>\r\n');


ps[ps.length]= new String(obrak+'mods:languageTerm type="code" authority="iso639-2b">'
	+ bfont +document.forms[0].language.value + efont 
	+ obrak +'/mods:languageTerm>\r\n'
	);

ps[ps.length]= new String(obrak+'/mods:language>\r\n');
	
///////////////////////////////////////////////////// <mods:typeOfResource


//type_of_resource_all is required, each item converts to one xml element

var sTor = new String(document.forms[0].type_of_resource_all.value);
var aTor = sTor.split(";");
var eTor = new Array(
 new String('')
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



///////////////////////////////////////////////////// <mods:subject
///////////////////////////////////////////////////////////// <mods:genre


var genre_authority_tag_display = new String("");

if (document.forms[0].mods_genre_radio[0].checked) {
   	genre_authority_tag_display = 'authority="'+bfont+'aat'+efont+'"';
}else if (document.forms[0].mods_genre_radio[1].checked) {
   	genre_authority_tag_display = 'authority="'+bfont+'nmc'+efont+'"';
}else if (document.forms[0].mods_genre_radio[2].checked) {
	genre_authority_tag_display = 'authority="'+bfont+'marcgt'+efont+'"';
}




ps[ps.length]= new String(obrak+'mods:genre '+ genre_authority_tag_display + '>'
	+ bfont + replace_apos(document.forms[0].mods_genre.value) + efont 
	+ obrak +'/mods:genre>\r\n'
	);

	




///////////////////////////////////////////////////// <mods:physicalDescription
///////////////////////////////////////////////////////////// <mods:form type="technique"
///////////////////////////////////////////////////////////// <mods:form type="medium"  
///////////////////////////////////////////////////////////// <mods:digitalOrigin
///////////////////////////////////////////////////////////// <mods:internetMediaType
///////////////////////////////////////////////////////////// <mods:extent 
///////////////////////////////////////////////////////////// <mods:note 



ps[ps.length]= new String(obrak+'mods:physicalDescription>\r\n');



///form_type_technique
///do not build empty tag
if ( document.forms[0].museum_form_type_technique.value.length > 0 ) {

var strTechAuth = new String("");
if (document.forms[0].technique_authority[1].selected == true ) {
	strTechAuth=' authority="aat"';
	}

ps[ps.length]= new String(obrak+'mods:form type="technique"'+strTechAuth+'>'
	+ bfont + replace_apos(document.forms[0].museum_form_type_technique.value) + efont
	+ obrak+'/mods:form>\r\n'
	);

}///end if

///form_type_medium
///do not build empty tag
if ( document.forms[0].museum_form_type_medium.value.length > 0 ) {

var strMedAuth = new String("");
if (document.forms[0].medium_authority[1].selected == true) {
	strMedAuth=' authority="aat"';
	}

ps[ps.length]= new String(obrak+'mods:form type="medium"'+strMedAuth+'>'
	+ bfont + replace_apos(document.forms[0].museum_form_type_medium.value) + efont 
	+ obrak+'/mods:form>\r\n'
	);
}//end if


//mods_digital_origin required
var strModsDigitalOrigin = new String();
for (i=0;i<5;i++) {
	if (document.forms[0].mods_digital_origin[i].selected == true ) {
		strModsDigitalOrigin = document.forms[0].mods_digital_origin[i].value;
		break;
	}
}

ps[ps.length]= new String(obrak+'mods:digitalOrigin>'
	+ bfont + strModsDigitalOrigin+ efont 
	+ obrak+'/mods:digitalOrigin>\r\n'
	);

////THIS USED TO BE A HIDDEN FIELD THAT DOES NOT DISPLAY ON THE WEB FORM
ps[ps.length]= new String(obrak+'mods:internetMediaType>'
	+ bfont + document.forms[0].internetmediatype.value + efont 
	+ obrak+'/mods:internetMediaType>\r\n'
	);


///////do not generate an empty tag for extent
if ( document.forms[0].mods_extent.value.length > 0 ) {
var  strExtent =  new String(document.forms[0].mods_extent.value);

ps[ps.length]= new String(obrak+'mods:extent>'
	+ bfont + replace_apos(strExtent) + efont 
	+ obrak+'/mods:extent>\r\n'
	);
}
			

///////////////////////////////////////////////////// <mods:note

///////do not generate an empty tag for note 
if ( document.forms[0].mods_note_physdesc.value != "" ) {

var strNote = new String(document.forms[0].mods_note_physdesc.value);
    strNote = strNote.replace(/\%0D\%0A/gi,"");
    document.forms[0].mods_note_physdesc.value=strNote;
ps[ps.length]= new String(obrak+'mods:note>'
	+ bfont + replace_apos(document.forms[0].mods_note_physdesc.value) + efont 
	+ obrak+'/mods:note>\r\n'
	);
	parent.U.document.UF.mods_note_physdesc.value = document.forms[0].mods_note_physdesc.value;
}
	

	
ps[ps.length]= new String(obrak+'/mods:physicalDescription>\r\n');


///////////////////////////////////////////////////// <mods:abstract


///////do not generate an empty tag for abstract
if ( document.forms[0].mods_genre_abstract.value != "" ) {

var strAbstract = new String(document.forms[0].mods_genre_abstract.value);
    strAbstract = strAbstract.replace(/\%0D\%0A/gi,"");
    document.forms[0].mods_genre_abstract.value=strAbstract;
ps[ps.length]= new String(obrak+'mods:abstract>'
	+ bfont + replace_apos(document.forms[0].mods_genre_abstract.value) + efont 
	+ obrak+'/mods:abstract>\r\n'
	);
	parent.U.document.UF.mods_genre_abstract.value = document.forms[0].mods_genre_abstract.value;
}
	



///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// close mods


//////////////ps[ps.length]= new String(obrak+'/mods:mods>\r\n');

///////////////////////////////////////////////////////////////////////////////////// chd
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 


return(ps);


}///end function buildTagsArray_page_03()




///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////MULTIPLE subject blocks
function buildTagsArray_page_04(N){
//alert("buildTagsArray_page_04");


//N=0 no red, use '<' in xml tag
//N>0 insert red use '&#060;' (prev '&lt;')  in xml tag to make html viewable

var NI = 0;
if ( N == "0" ) { NI=0; } else { NI=1; }


var bfont= new String(BFONT[NI]);
var efont= new String(EFONT[NI]);
var obrak= new String(OBRAK[NI]);

var ps=new Array();

//ps[ps.length] = new String("<-- page_04_new -->");

/////////BEGIN PAGE 4 NEW
/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n');

var brtag = new String("&lt;br>");
if (N==0) {brtag="\r\n";}

var newStr = new String();
var str = new String(parent.U.document.UF.subject_block_list.value);

var A = new Array();
    A =  str.split(split_token);

var j = 0;
var k = 0;


for (i=0;i<A.length;i++) {
	//alert("A["+i+"]="+A[i]);
	if (A[i]=="empty_string" ) {//no subelement block, no tags
		j=i-1;
		k=i+1;
		A[i] = "";
		A[j] = "";
		A[k] = "";
		}
}

for ( i=0; i<A.length; i++ ) {
	if (A[i].length > 0 ) {
		newStr += split_token + A[i];
		}
}




    str = newStr;
    str = str.replace(/:::::/g,"");

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
str = str.replace(/&lt;mods:geographicCode authority="marcgac">/g,'&lt;mods:geographicCode authority="marcgac"><font color="a00000"><b>');
str = str.replace(/&lt;mods:geographicCode authority="marccountry">/g,'&lt;mods:geographicCode authority="marccountry"><font color="a00000"><b>');
str = str.replace(/&lt;mods:geographicCode authority="iso3166">/g,'&lt;mods:geographicCode authority="iso3166"><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:geographicCode>/g,'</b></font>&lt;\/mods:geographicCode>');

//genr
str = str.replace(/&lt;mods:genre>/g,'&lt;mods:genre><font color="a00000"><b>');
str = str.replace(/&lt;mods:genre authority="aat">/g,'&lt;mods::genre authority="aat"><font color="a00000"><b>');
str = str.replace(/&lt;mods:genre authority="gsafd">/g,'&lt;mods:genre authority="gsafd"><font color="a00000"><b>');
str = str.replace(/&lt;mods:genre authority="lcsh">/g,'&lt;mods:genre authority="lcsh"><font color="a00000"><b>');
str = str.replace(/&lt;mods:genre authority="marcgt">/g,'&lt;mods:genre authority="marcgt"><font color="a00000"><b>');
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
str = str.replace(/&lt;mods:namePart type="family">/g,'&lt;mods:namePart type="family"><font color="a00000"><b>');
str = str.replace(/&lt;mods:namePart type="given">/g,'&lt;mods::namePart type="given"><font color="a00000"><b>');
str = str.replace(/&lt;mods:namePart type="termsOfAddress">/g,'&lt;mods:namePart type="termsOfAddress"><font color="a00000"><b>');
str = str.replace(/&lt;mods:namePart type="date">/g,'&lt;mods:namePart type="date"><font color="a00000"><b>');
str = str.replace(/&lt;mods:namePart>/g,'&lt;mods:namePart><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:namePart>/g,'</b></font>&lt;\/mods:namePart>');

//occupation
str = str.replace(/&lt;mods:occupation>/g,'&lt;mods:occupation><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:occupation>/g,'</b></font>&lt;\/mods:occupation>');

//temporal
str = str.replace(/&lt;mods:temporal encoding="w3dctf">/g,'&lt;mods:temporal encoding="w3dctf"><font color="a00000"><b>');
str = str.replace(/&lt;\/mods:temporal>/g,'</b></font>&lt;\/mods:temporal>');

//title
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


/*
alert("buildTagsArrayPage_04\n"
	+"parent.U.document.UF.subject_block_list.value=\n"
	+ parent.U.document.UF.subject_block_list.value
	+"\n\nstr=\n"+str
	+"\n\n N="+N
	);
*/

ps[ps.length]= new String(str);
/*------------------------------------------------------------------------------
ps[ps.length]= new String("\r\n---------------str2--------------------\r\n");

var str2 = new String(parent.U.document.UF.subject_block_list.value);
**
str2 = str2.replace(/<mods:/g,"\r\n<mods:");
str2 = str2.replace(/<\/mods:subject>/g,"\r\n<\/mods:subject>");
str2 = str2.replace(/<\/mods:cartographics>/g,"\r\n<\/mods:cartographics>");
str2 = str2.replace(/<\/mods:hierarchicalGeographic>/g,"\r\n<\/mods:hierarchicalGeographic>"); 
str2 = str2.replace(/<\/mods:name>/g,"\r\n<\/mods:name>");
str2 = str2.replace(/<\/mods:titleInfo>/g,"\r\n<\/mods:titleInfo>");
str2 = str2.replace(/<\/mods:/g,"\r\n<\/mods:");
**
    //str2 = str2.replace(/</g, "&lt;");
    str2 = str2.replace(/:::::/g,"");
    str2 = str2.replace(/<br>/gi,"");
ps[ps.length]=new String(str2);

-------------------------------------------------------------------------------------------*/



return(ps);

}//end function

///page_04  with multiple subject blocks

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//aps = buildTagsArray_page_05(num);

///returns the ps array
function buildTagsArray_page_05(N){

//N=0 no red, use '<' in xml tag
//N>0 insert red use '&#060;' (prev '&lt;')  in xml tag to make html viewable

var NI = 0;
if ( N == "0" ) { NI=0; } else { NI=1; }


var bfont= new String(BFONT[NI]);
var efont= new String(EFONT[NI]);
var obrak= new String(OBRAK[NI]);

var ps=new Array();

///ps[ps.length] = new String("< -- page_05_dev -- >");

/////////BEGIN PAGE 5 DEV 
/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n');

var brtag = new String("&lt;br>");
if (N==0) {brtag="\r\n";}

var str = new String(parent.U.document.UF.ri_block_list.value);
var Ari = new Array();
    Ari = str.split(parent.U.split_token);

//for (i=0;i<Ari.length;i++){
//	alert("Ari["+i+"]="+Ari[i]);
//	}

var numRI = new Number(parent.U.document.UF.numRelatedItems.value);
var attr_dlab = new String(""); //attribute displayLabel
var attr_type = new String(""); //attribute type
var attr_url = new String(""); //attribute xlink:href
var dlab = new String(""); //attribute displayLabel
var type = new String(""); //attribute type
var url = new String(""); //attribute xlink:href
var m = 0; //counter for Ari array

for (i=0;i<numRI;i++) {
if (Ari[m].indexOf("END_RI_BLOCK")>-1){ m++; }
attr_dlab="";
dlab = Ari[m++];
	if ( dlab != "" ) {
	attr_dlab = ' displayLabel="'+dlab+'"';
	}
attr_type="";
type = Ari[m++];
	if ( type != "none" && type != "" ) {
	attr_type = ' type="'+type+'"';
	}

attr_url="";
url  = Ari[m++];
	if ( url != "" ) {
        attr_url = ' xlink:href="'+bfont+url+efont+'"';
	}
ps[ps.length]= new String(obrak+'mods:relatedItem'+attr_dlab+attr_type+attr_url+' />\r\n');/////+obrak+'/mods:relatedItem>\r\n');

}//end for



////////////Identifiers
var strid = new String(parent.U.document.UF.id_block_list.value);
var Aid = new Array();
    Aid = strid.split(parent.U.split_token);

var numID = new Number(parent.U.document.UF.numIdentifiers.value);

var attr_id_dlab    = new String(""); //attribute id displayLabel
var attr_id_type    = new String(""); //attribute id type
var attr_id_invalid = new String(""); //attribute id invalid
var attr_id_url     = new String(""); //attribute id url
var id_dlab    = new String(""); //attribute id displayLabel
var id_type    = new String(""); //attribute id type
var id_invalid = new String(""); //attribute id invalid
var id_url     = new String(""); //attribute id url
var m = 0; //counter for Aid array

for (i=0;i<numID;i++) {
if (Aid[m].indexOf("END_ID_BLOCK")>-1){ m++; }
attr_id_dlab="";
id_dlab = Aid[m++];
	if ( id_dlab != "" ) {
	attr_id_dlab = ' displayLabel="'+id_dlab+'"';
	}
attr_id_invalid="";
id_invalid = Aid[m++];
	if ( id_invalid == "yes" ) {
	attr_id_invalid = ' invalid="yes"';
	}
attr_id_type="";
id_type = Aid[m++];
	if ( id_type != "" ) {
	attr_id_type = ' type="'+id_type+'"';
	}
attr_id_url="";
id_url  = Aid[m++];
	if ( id_url != "" ) {
	attr_id_url = id_url;
	}

ps[ps.length]= new String(obrak+'mods:identifier'+attr_id_dlab+attr_id_invalid+attr_id_type+'>'+bfont+attr_id_url+efont+obrak+'/mods:identifier>\r\n');


}//end for


return(ps);

}//end function builtTagsArray_page_05(N)






///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**/



///returns the ps array
function buildTagsArray_page_06_orig(N){
//alert("buildTagsArray_page_06");


//N=0 no red, use '<' in xml tag
//N>0 insert red use '&#060;' (prev '&lt;')  in xml tag to make html viewable

var NI = 0;
if ( N == "0" ) { NI=0; } else { NI=1; }


var bfont= new String(BFONT[NI]);
var efont= new String(EFONT[NI]);
	var obrak= new String(OBRAK[NI]);


var ps=new Array();

//ps[ps.length] = new String("<-- page_06 -->");

/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n'); 





///////////////////////////////////////////////////////////// <mods:location
///////////////////////////////////////////////////////////// <mods:physicalLocation type="repository"
///////////////////////////////////////////////////////////// <mods:physicalLocation type="city" 
///////////////////////////////////////////////////////////// <mods:physicalLocation type="state" 
///////////////////////////////////////////////////////////// <mods:physicalLocation type="county" 
///////////////////////////////////////////////////////////// <mods:physicalLocation type="collection" -- collection name 
///////////////////////////////////////////////////////////// <mods:physicalLocation type= ONE OF 5 CHOICES including "manuscriptNumber" 
///////////////////////////////////////////////////////////// <mods:physicalLocation type="detail" 
///////////////////////////////////////////////////////////// <mods:url


ps[ps.length]= new String(obrak+'mods:location>\r\n');



//////location_url_00 usage="primary display" link to digital resource required
var access_00 = new String("");
    access_00 = document.forms[0].access_00.value;
    if (access_00 != "none") {
        access_00 =  ' access="'+access_00+'"';
   }else{
        access_00 = "";
   }
ps[ps.length]= new String(obrak+'mods:url usage="primary display"'+access_00+'>'
        + bfont + document.forms[0].location_url_00.value + efont
        + obrak+'/mods:url>\r\n'
        );

//////location_url_01 link to digital resource not required
if (document.forms[0].location_url_01.value != "" ) {
var access_01 = new String("");
    access_01 = document.forms[0].access_01.value;
    if (access_01 != "none") {
        access_01 =  ' access="'+access_01+'"';
   }else{
        access_01 = "";
   }
ps[ps.length]= new String(obrak+'mods:url'+access_01+'>'
        + bfont + document.forms[0].location_url_01.value + efont
        + obrak+'/mods:url>\r\n'
        );
}

//////location_url_02 link to digital resource not required
if (document.forms[0].location_url_02.value != "" ) {
var access_02 = new String("");
    access_02 = document.forms[0].access_02.value;
    if (access_02 != "none") {
        access_02 =  ' access="'+access_02+'"';
   }else{
        access_02 = "";
   }
ps[ps.length]= new String(obrak+'mods:url'+access_02+'>'
        + bfont + document.forms[0].location_url_02.value + efont
        + obrak+'/mods:url>\r\n'
        );
}

//////location_url_03 link to digital resource not required
if (document.forms[0].location_url_03.value != "" ) {
var access_03 = new String("");
    access_03 = document.forms[0].access_03.value;
    if (access_03 != "none") {
        access_03 =  ' access="'+access_03+'"';
   }else{
        access_03 = "";
   }
ps[ps.length]= new String(obrak+'mods:url'+access_03+'>'
        + bfont + document.forms[0].location_url_03.value + efont
        + obrak+'/mods:url>\r\n'
        );
}



//do not make empty physical_location_repository
if ( document.forms[0].physical_location_repository.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:physicalLocation type="repository">'
	+ bfont + replace_apos(document.forms[0].physical_location_repository.value) + efont 
	+ obrak+'/mods:physicalLocation>\r\n'
	);
}

/*
//do not make empty physical_location_detail
if ( document.forms[0].physical_location_detail.value.length > 0 ) {

ps[ps.length]= new String(obrak+'mods:physicalLocation type="detail">'
	+ bfont + replace_apos(document.forms[0].physical_location_detail.value) + efont 
	+ obrak+'/mods:physicalLocation>\r\n'
	);
}///end if
*/



//do not make empty physical_location_city
if ( document.forms[0].physical_location_city.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:physicalLocation type="city">'
	+ bfont + replace_apos(document.forms[0].physical_location_city.value) + efont 
	+ obrak+'/mods:physicalLocation>\r\n'
	);
}

//do not make empty physical_location_state
if ( document.forms[0].physical_location_state.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:physicalLocation type="state">'
	+ bfont + replace_apos(document.forms[0].physical_location_state.value) + efont 
	+ obrak+'/mods:physicalLocation>\r\n'
	);
}

//do not make empty physical_location_county
if ( document.forms[0].physical_location_county.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:physicalLocation type="county">'
	+ bfont + document.forms[0].physical_location_county.value + efont 
	+ obrak+'/mods:physicalLocation>\r\n'
	);

}



////////////////collection_id_name not required

///do not make empty tag
if ( document.forms[0].collection_id_name.value != "" ) {
//alert("document.forms[0].collection_id_name.value=\n"+document.forms[0].collection_id_name.value);
ps[ps.length]= new String(obrak+'mods:physicalLocation type="collection">'
	+ bfont + replace_apos(document.forms[0].collection_id_name.value) +efont
	+ obrak+'/mods:physicalLocation>\r\n'
	);
}


//////location_url_00 usage="primary display" link to digital resource required
var access_00 = new String("");
    access_00 = document.forms[0].access_00.value;
    if (access_00 != "none") {
	access_00 =  ' access="'+access_00+'"'; 
   }else{
	access_00 = "";
   }
ps[ps.length]= new String(obrak+'mods:url usage="primary display"'+access_00+'>'
	+ bfont + document.forms[0].location_url_00.value + efont 
	+ obrak+'/mods:url>\r\n'
	);

//////location_url_01 link to digital resource not required
if (document.forms[0].location_url_01.value != "" ) {
var access_01 = new String("");
    access_01 = document.forms[0].access_01.value;
    if (access_01 != "none") {
	access_01 =  ' access="'+access_01+'"'; 
   }else{
	access_01 = "";
   }
ps[ps.length]= new String(obrak+'mods:url'+access_01+'>'
	+ bfont + document.forms[0].location_url_01.value + efont 
	+ obrak+'/mods:url>\r\n'
	);
}

//////location_url_02 link to digital resource not required
if (document.forms[0].location_url_02.value != "" ) {
var access_02 = new String("");
    access_02 = document.forms[0].access_02.value;
    if (access_02 != "none") {
	access_02 =  ' access="'+access_02+'"'; 
   }else{
	access_02 = "";
   }
ps[ps.length]= new String(obrak+'mods:url'+access_02+'>'
	+ bfont + document.forms[0].location_url_02.value + efont 
	+ obrak+'/mods:url>\r\n'
	);
}

//////location_url_03 link to digital resource not required
if (document.forms[0].location_url_03.value != "" ) {
var access_03 = new String("");
    access_03 = document.forms[0].access_03.value;
    if (access_03 != "none") {
	access_03 =  ' access="'+access_03+'"'; 
   }else{
	access_03 = "";
   }
ps[ps.length]= new String(obrak+'mods:url'+access_03+'>'
	+ bfont + document.forms[0].location_url_03.value + efont 
	+ obrak+'/mods:url>\r\n'
	);
}

////////////////collection_id_number not required
////////////////collection_id_num_type, only required when colidn is not blank

if ( document.forms[0].collection_id_number != "" ) {

var colidn_type = new String("");

for ( i=0; i<6; i++ ) {
	if (document.forms[0].collection_id_num_type[i].selected == true) {
		colidn_type = document.forms[0].collection_id_num_type.value;
		}
}

if (colidn_type != "none" ) {
ps[ps.length]= new String(obrak+'mods:physicalLocation type="'+bfont+colidn_type+efont+'">'
	+ bfont + replace_apos(document.forms[0].collection_id_number.value) +efont /// function _06
	+ obrak+'/mods:physicalLocation>\r\n'
	);
}//end if collection_id_number_type.text != "none";
}//end if collection_id_number != ""


///detail, do not make empty tag
if ( document.forms[0].physical_location_detail.value.length > 0 ) {

ps[ps.length]= new String(obrak+'mods:physicalLocation type="detail">'
	+ bfont + replace_apos(document.forms[0].physical_location_detail.value) + efont 
	+ obrak+'/mods:physicalLocation>\r\n'
	);
}///end if

ps[ps.length]= new String(obrak+'/mods:location>\r\n');



///////////////////////////////////////////////////// <mods:recordInfo
///////////////////////////////////////////////////////////// <mods:recordContentSource
///////////////////////////////////////////////////////////// <mods:recordInfo
///////////////////////////////////////////////////////////// <mods:recordCreationDate encoding="w3cdtf"
///////////////////////////////////////////////////////////// <mods:languageOfCataloging
///////////////////////////////////////////////////////////////////// <mods:languageTerm type="code" authority="iso639-2b"


ps[ps.length]= new String(obrak+'mods:recordInfo>\r\n');


var rcs_auth = new String("");
if ( document.forms[0].rcs_authority[0].selected == false ) {
	rcs_auth = ' authority="'+document.forms[0].rcs_authority.value+'"';
	} 
ps[ps.length]= new String(obrak+'mods:recordContentSource'+rcs_auth+'>'
	+ bfont + replace_apos(document.forms[0].record_content_source.value) + efont 
	+ obrak+'/mods:recordContentSource>\r\n'
	);

//do not make empty tag for recordOrigin
if (document.forms[0].record_info_origin.value != "" ) {
ps[ps.length]= new String(obrak+'mods:recordOrigin>'
	+ bfont + document.forms[0].record_info_origin.value + efont 
	+ obrak+'/mods:recordOrigin>\r\n'
	);
}



//do not make empty tagl record_creation_date  
if ( document.forms[0].record_creation_date.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:recordCreationDate encoding="w3cdtf">'
	+ bfont + document.forms[0].record_creation_date.value + efont 
	+ obrak+'/mods:recordCreationDate>\r\n'
	);
}

ps[ps.length]= new String(obrak+'mods:languageOfCataloging>\r\n');

ps[ps.length]= new String(obrak+'mods:languageTerm type="code" authority="iso639-2b">'
	+ bfont + document.forms[0].language_of_cataloging.value + efont 
	//+ bfont + "eng" + efont 
	+ obrak+'/mods:languageTerm>\r\n'
	);

ps[ps.length]= new String(obrak+'/mods:languageOfCataloging>\r\n');


ps[ps.length]= new String(obrak+'/mods:recordInfo>\r\n');


///////////////////////////////////////////////////// <mods:accessCondition type="useAndReproduction"

//// < &lt;   >>> &#060;
//// > &gt;   >>> &#062;
var url_sp=new String("http://idserver.utk.edu/?id=200600000001198");
var url_vv=new String("http://idserver.utk.edu/?id=200600000001200");

var str_use_and_repro = new String("");

if ( parent.adb_institution_id == "0012" ) {
	str_use_and_repro = url_sp;
}else{
	str_use_and_repro = url_vv;
}

var acType = new String("");
    acType = document.forms[0].access_condition_type.value;
ps[ps.length]= new String(obrak+'mods:accessCondition type="'+acType+'">'
	+ bfont + document.forms[0].access_condition_text.value + efont 
	+ obrak+'/mods:accessCondition>\r\n'
	);


/*----------------------------------------------------------
ps[ps.length]= new String(obrak+'mods:accessCondition type="useAndReproduction">'
	//+ bfont + document.forms[0].use_and_reproduction.value + efont 
	+ bfont + str_use_and_repro +" CUSTOM CODE DEPRECATED"+ efont 
	+ obrak+'/mods:accessCondition>\r\n'
	);
-----------------------------------------------------------------------*/



///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// close mods


////////////ps[ps.length]= new String(obrak+'/mods:mods>\r\n');

///////////////////////////////////////////////////////////////////////////////////// chd
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 


return(ps);


}///end function buildTagsArray_page_06_orig()




///returns the ps array
function buildTagsArray_page_06(N){
//alert("buildTagsArray_page_06");


//N=0 no red, use '<' in xml tag
//N>0 insert red use '&#060;' (prev '&lt;')  in xml tag to make html viewable

var NI = 0;
if ( N == "0" ) { NI=0; } else { NI=1; }


var bfont= new String(BFONT[NI]);
var efont= new String(EFONT[NI]);
        var obrak= new String(OBRAK[NI]);


var ps=new Array();

//ps[ps.length] = new String("<-- page_06 -->");

/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n');





///////////////////////////////////////////////////////////// <mods:location
///////////////////////////////////////////////////////////// <mods:url usage="primary display" access="whatever" -- required
///////////////////////////////////////////////////////////// <mods:url access="whatever" -- up to 3 since static
///////////////////////////////////////////////////////////// <mods:physicalLocation type="repository"
///////////////////////////////////////////////////////////// <mods:physicalLocation type="city"
///////////////////////////////////////////////////////////// <mods:physicalLocation type="state"
///////////////////////////////////////////////////////////// <mods:physicalLocation type="county"
///////////////////////////////////////////////////////////// <mods:physicalLocation type="collection" -- collection name
///////////////////////////////////////////////////////////// <mods:physicalLocation type= ONE OF 5 CHOICES including "manuscriptNumber"
///////////////////////////////////////////////////////////// <mods:physicalLocation type="detail"
///////////////////////////////////////////////////////////// <mods:url


ps[ps.length]= new String(obrak+'mods:location>\r\n');



//////location_url_00 usage="primary display" link to digital resource required
var access_00 = new String("");
    access_00 = document.forms[0].access_00.value;
    if (access_00 != "none") {
        access_00 =  ' access="'+access_00+'"';
   }else{
        access_00 = "";
   }
ps[ps.length]= new String(obrak+'mods:url usage="primary display"'+access_00+'>'
        + bfont + document.forms[0].location_url_00.value + efont
        + obrak+'/mods:url>\r\n'
        );

//////location_url_01 link to digital resource not required
if (document.forms[0].location_url_01.value != "" ) {
var access_01 = new String("");
    access_01 = document.forms[0].access_01.value;
    if (access_01 != "none") {
        access_01 =  ' access="'+access_01+'"';
   }else{
        access_01 = "";
   }
ps[ps.length]= new String(obrak+'mods:url'+access_01+'>'
        + bfont + document.forms[0].location_url_01.value + efont
        + obrak+'/mods:url>\r\n'
        );
}

//////location_url_02 link to digital resource not required
if (document.forms[0].location_url_02.value != "" ) {
var access_02 = new String("");
    access_02 = document.forms[0].access_02.value;
    if (access_02 != "none") {
        access_02 =  ' access="'+access_02+'"';
   }else{
        access_02 = "";
   }
ps[ps.length]= new String(obrak+'mods:url'+access_02+'>'
        + bfont + document.forms[0].location_url_02.value + efont
        + obrak+'/mods:url>\r\n'
        );
}

//////location_url_03 link to digital resource not required
if (document.forms[0].location_url_03.value != "" ) {
var access_03 = new String("");
    access_03 = document.forms[0].access_03.value;
    if (access_03 != "none") {
        access_03 =  ' access="'+access_03+'"';
   }else{
        access_03 = "";
   }
ps[ps.length]= new String(obrak+'mods:url'+access_03+'>'
        + bfont + document.forms[0].location_url_03.value + efont
        + obrak+'/mods:url>\r\n'
        );
}





//do not make empty physical_location_repository
if ( document.forms[0].physical_location_repository.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:physicalLocation type="repository">'
        + bfont + replace_apos(document.forms[0].physical_location_repository.value) + efont
        + obrak+'/mods:physicalLocation>\r\n'
        );
}



//do not make empty physical_location_city
if ( document.forms[0].physical_location_city.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:physicalLocation type="city">'
        + bfont + replace_apos(document.forms[0].physical_location_city.value) + efont
        + obrak+'/mods:physicalLocation>\r\n'
        );
}



//do not make empty physical_location_state
if ( document.forms[0].physical_location_state.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:physicalLocation type="state">'
        + bfont + replace_apos(document.forms[0].physical_location_state.value) + efont
        + obrak+'/mods:physicalLocation>\r\n'
        );
}

//do not make empty physical_location_county
if ( document.forms[0].physical_location_county.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:physicalLocation type="county">'
        + bfont + document.forms[0].physical_location_county.value + efont
        + obrak+'/mods:physicalLocation>\r\n'
        );

}

/*
//do not make empty physical_location_detail
if ( document.forms[0].physical_location_detail.value.length > 0 ) {

ps[ps.length]= new String(obrak+'mods:physicalLocation type="detail">'
        + bfont + replace_apos(document.forms[0].physical_location_detail.value) + efont
        + obrak+'/mods:physicalLocation>\r\n'
        );
}///end if
*/

////////////////collection_id_name not required

///do not make empty tag
if ( document.forms[0].collection_id_name.value != "" ) {
//alert("document.forms[0].collection_id_name.value=\n"+document.forms[0].collection_id_name.value);
ps[ps.length]= new String(obrak+'mods:physicalLocation type="collection">'
        + bfont + replace_apos(document.forms[0].collection_id_name.value) +efont
        + obrak+'/mods:physicalLocation>\r\n'
        );
}



////////////////collection_id_number not required
////////////////collection_id_num_type, only required when colidn is not blank

if ( document.forms[0].collection_id_number != "" ) {

	var colidn_type = new String("");

	for ( i=0; i<6; i++ ) {
        if (document.forms[0].collection_id_num_type[i].selected == true) {
                colidn_type = document.forms[0].collection_id_num_type.value;
                }
	}

	if (colidn_type != "none" ) {
		ps[ps.length]= new String(obrak+'mods:physicalLocation type="'+bfont+colidn_type+efont+'">'
        	+ bfont + replace_apos(document.forms[0].collection_id_number.value) +efont  ///function 06_dev
        	+ obrak+'/mods:physicalLocation>\r\n'
        	);
	}//end if collection_id_number_type.text != "none";

}//end if collection_id_number != ""

//do not make empty physical_location_note
if ( document.forms[0].physical_location_note.value.length > 0 ) {

ps[ps.length]= new String(obrak+'mods:physicalLocation type="note">'
        + bfont + replace_apos(document.forms[0].physical_location_note.value) + efont
        + obrak+'/mods:physicalLocation>\r\n'
        );
}///end if

ps[ps.length]= new String(obrak+'/mods:location>\r\n');

return(ps);


}///end function buildTagsArray_page_06_dev()




function buildTagsArray_page_07(N){
alert("buildTagsArray_page_07");


//N=0 no red, use '<' in xml tag
//N>0 insert red use '&#060;' (prev '&lt;')  in xml tag to make html viewable

var NI = 0;
if ( N == "0" ) { NI=0; } else { NI=1; }


var bfont= new String(BFONT[NI]);
var efont= new String(EFONT[NI]);
        var obrak= new String(OBRAK[NI]);


var ps=new Array();



///////////////////////////////////////////////////// <mods:recordInfo
///////////////////////////////////////////////////////////// <mods:recordContentSource
///////////////////////////////////////////////////////////// <mods:recordInfo
///////////////////////////////////////////////////////////// <mods:recordCreationDate encoding="w3cdtf"
///////////////////////////////////////////////////////////// <mods:languageOfCataloging
///////////////////////////////////////////////////////////////////// <mods:languageTerm type="code" authority="iso639-2b"


ps[ps.length]= new String(obrak+'mods:recordInfo>\r\n');


var rcs_auth = new String("");
if ( document.forms[0].rcs_authority[0].selected == false ) {
        rcs_auth = ' authority="'+document.forms[0].rcs_authority.value+'"';
        }
ps[ps.length]= new String(obrak+'mods:recordContentSource'+rcs_auth+'>'
        + bfont + replace_apos(document.forms[0].record_content_source.value) + efont
        + obrak+'/mods:recordContentSource>\r\n'
        );

//do not make empty tag for recordOrigin
if (document.forms[0].record_info_origin.value != "" ) {
ps[ps.length]= new String(obrak+'mods:recordOrigin>'
        + bfont + document.forms[0].record_info_origin.value + efont
        + obrak+'/mods:recordOrigin>\r\n'
        );
}



//do not make empty tagl record_creation_date
if ( document.forms[0].record_creation_date.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:recordCreationDate encoding="w3cdtf">'
        + bfont + document.forms[0].record_creation_date.value + efont
        + obrak+'/mods:recordCreationDate>\r\n'
        );
}

ps[ps.length]= new String(obrak+'mods:languageOfCataloging>\r\n');

ps[ps.length]= new String(obrak+'mods:languageTerm type="code" authority="iso639-2b">'
        + bfont + document.forms[0].language_of_cataloging.value + efont
        //+ bfont + "eng" + efont
        + obrak+'/mods:languageTerm>\r\n'
        );

ps[ps.length]= new String(obrak+'/mods:languageOfCataloging>\r\n');


ps[ps.length]= new String(obrak+'/mods:recordInfo>\r\n');


///////////////////////////////////////////////////// <mods:accessCondition type="useAndReproduction"

//// < &lt;   >>> &#060;
//// > &gt;   >>> &#062;
var url_sp=new String("http://idserver.utk.edu/?id=200600000001198");
var url_vv=new String("http://idserver.utk.edu/?id=200600000001200");

var str_use_and_repro = new String("");

if ( parent.adb_institution_id == "0012" ) {
        str_use_and_repro = url_sp;
}else{
        str_use_and_repro = url_vv;
}

var acType = new String("");
    acType = document.forms[0].access_condition_type.value;
ps[ps.length]= new String(obrak+'mods:accessCondition type="'+acType+'">'
        + bfont + document.forms[0].access_condition_text.value + efont
        + obrak+'/mods:accessCondition>\r\n'
        );


/*----------------------------------------------------------
ps[ps.length]= new String(obrak+'mods:accessCondition type="useAndReproduction">'
        //+ bfont + document.forms[0].use_and_reproduction.value + efont
        + bfont + str_use_and_repro +" CUSTOM CODE DEPRECATED"+ efont
        + obrak+'/mods:accessCondition>\r\n'
        );
-----------------------------------------------------------------------*/



/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////// close mods


////////////ps[ps.length]= new String(obrak+'/mods:mods>\r\n');

///////////////////////////////////////////////////////////////////////////////////// chd
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


return(ps);


}///end function buildTagsArray_page_07()




