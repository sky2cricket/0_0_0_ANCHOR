//vv_compose_page_01.js from vv_compose_tags.js    Dec 8 2009
//accounting for new definitions in page_upper_091130.htm
//written in conjunction with vv_reload_page_01.js
//and called by page_01b.htm
//as part of w2009 workbook
//vv_compose_tags.js copied from vv_build_tags.js  2/2/2007 3:35 pm


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



function buildTagsArray_page_01(N){//line 200

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
///////////////////////////////////////////////////// <mods:title>
//////////////////////////////////////////////////////////// <mods:titleInfo>DATA</mods:titleInfo>
///////////////////////////////////////////////////// </mods:title>
  
 


ps[ps.length]=new String(obrak+'mods:titleInfo>\r\n'
	+ obrak +'mods:title>'
	+ bfont +replace_apos(document.forms[0].title.value) + efont 
	+ obrak +'/mods:title>\r\n'
	+ obrak +'/mods:titleInfo>\r\n'
	);
		

////////////////////////////////////////////////////////////////////////////////////		
///////////////////////// MODS:NAME START //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

var name_authority_01_display = new String("");
var name_type_01_display = new String("");//this does not correspond to a formvar, but helps keep track of radio buttons

if (!document.forms[0].name_authority_01_radio[0].checked) {
   name_authority_01_display = ' authority="'+bfont+document.forms[0].name_authority_01.value+efont+ '"';
}

if ( document.forms[0].creator_radio_01[0].checked == true ) {
	name_type_01_display = ' type="'+bfont+'personal'+efont+'"';
}else if ( document.forms[0].creator_radio_01[1].checked==true ) {
	name_type_01_display = ' type="'+bfont+'corporate'+efont+'"';
}else if (document.forms[0].creator_radio_01[2].checked == true ) {
	name_type_01_display = '';
}else if (document.forms[0].creator_radio_01[3].checked == true ) {
	name_type_01_display = '';
}

//start mods:name 1
ps[ps.length]=new String(obrak+'mods:name '+name_type_01_display+ name_authority_01_display+ '>\r\n');


////////////////////////////////////////////////////////////////////////////////////		
///////////////////////// PRIMARY NAME BLOCK ///////////////////////////////////////
///////////////////////////////////////////////////// <mods:name>
///////////////////////////////////////////////////////////// <mods:namePart>DATA</mods:namePart>
///////////////////////////////////////////////////////////// <mods:description>DATA</mods:description>
///////////////////////////////////////////////////////////// <mods:role>
///////////////////////////////////////////////////////////////////// <mods:roleTerm>DATA</mods:roleTerm>
///////////////////////////////////////////////////////////// </mods:role>
///////////////////////////////////////////////////// </mods:name>

///creator can be personal, corporate, unknown, or anonymous


if ( document.forms[0].creator_radio_01[0].checked ==true) {//personal
alert("complex_01="+document.forms[0].creator_complexname_01.value
	+"\nlength="+document.forms[0].creator_complexname_01.value.length
	+"\ncreator_firstname_01="+document.forms[0].creator_firstname_01.value
	+"\nlength="+document.forms[0].creator_firstname_01.value.length)

	//check for complex-personal-name first
	if (document.forms[0].creator_complexname_01.value.length != 0 ) { 
		ps[ps.length]=new String(obrak+'mods:namePart>'
			+ bfont + replace_apos(document.forms[0].creator_complexname_01.value) + efont
			+ obrak +'/mods:namePart>\r\n'
			);
	}else if (document.forms[0].creator_complexname_01.value == 0 ){//do traditional family-first-middle name

		ps[ps.length]=new String(obrak+'mods:namePart type="family">'
			+ bfont + replace_apos(document.forms[0].creator_lastname_01.value) + efont
			+ obrak +'/mods:namePart>\r\n'
			);

	var creator_given_name_01 = new String();
	var space_01 = new String("");

	if ( document.forms[0].creator_firstname_01.value.length>0 && document.forms[0].creator_middlename_01.value.length>0 ) {
		space_01 = " ";
		}

	if ( document.forms[0].creator_firstname_01.value.length>0 || document.forms[0].creator_middlename_01.value.length>0 ) {
		creator_given_name_01 += document.forms[0].creator_firstname_01.value +space_01+document.forms[0].creator_middlename_01.value;
	        creator_given_name_01 = creator_given_name_01.replace(/  /gi," ");//collapsing 2 white space to 1 white space

		ps[ps.length]=new String(obrak+'mods:namePart type="given">'
			+ bfont + replace_apos(creator_given_name_01) + efont
			+ obrak +'/mods:namePart>\r\n'
			);
 		}
	}//end building traditional family-first-middle type name

	var vitalDates_dob_01 = new String(document.forms[0].creator_dob_01.value);
   	    vitalDates_dob_01 = vitalDates_dob_01.replace(/[a-z]/gi,'H');
	var vitalDates_dod_01 = new String(document.forms[0].creator_dod_01.value);
   	    vitalDates_dod_01 = vitalDates_dod_01.replace(/[a-z]/gi,'H');
	var vitalDates_01 = new String("");

	    if ( vitalDates_dob_01.indexOf("H") == -1 ) {
			vitalDates_01 += vitalDates_dob_01;
			}
	    vitalDates_01 += "-";
	    if ( vitalDates_dod_01.indexOf("H") == -1 ) {
			vitalDates_01 += vitalDates_dod_01;
			}

       //alert("vitalDates_01="+vitalDates_01+"\nvitalDates_dob_01="+vitalDates_dob_01+"\nvitalDates_dod_01="+vitalDates_dod_01);

	if ( vitalDates_01.length > 2 ) {
		ps[ps.length]=new String(obrak+'mods:namePart type="date">'
			+ bfont + vitalDates_01 + efont
			+ obrak +'/mods:namePart>\r\n'
			);
 			}
}else {//not personal

var creator_name_01 = new String();

if ( document.forms[0].creator_radio_01[2].checked ==true) {//unknown	
	creator_name_01 = "unknown";
} else if ( document.forms[0].creator_radio_01[3].checked == true ) {//anonymous
	creator_name_01 = "anonymous";
} else if ( document.forms[0].creator_radio_01[1].checked == true) {//corporate
	creator_name_01 = document.forms[0].creator_lastname_01.value;
}

    
ps[ps.length]=new String(obrak+'mods:namePart>'
	+ bfont + replace_apos(creator_name_01) + efont 
	+ obrak +'/mods:namePart>\r\n'
	);

}//end not personal




//do not make empty tag for creator_description_01
if ( document.forms[0].creator_description_01.value != "" ) {
ps[ps.length]=new String(obrak+'mods:description>'
	+ bfont + replace_apos(document.forms[0].creator_description_01.value) + efont
	+ obrak +'/mods:description>\r\n'
	);
}		

//do not make empty tag for creator_role_01
if ( document.forms[0].creator_role_01.value != "" ) {
ps[ps.length] = new String(obrak+'mods:role>\r\n'		
	+ obrak +'mods:roleTerm authority="marcrelator">'
	+ bfont +document.forms[0].creator_role_01.value + efont 
	+ obrak +'/mods:roleTerm>\r\n'			
	+ obrak +'/mods:role>\r\n'
	);
}//end role tag
		
///end mods:name 1
ps[ps.length] = new String(obrak+'/mods:name>\r\n');

////////////////////////////////////////////////////////////////////////////////////		
//////////////////////////////// END ///////////////////////////////////////////////		
///////////////////////// PRIMARY NAME BLOCK ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////		

////////////////////////////////////////////////////////////////////////////////////		
///////////////////////// SECOND NAME BLOCK ////////////////////////////////////////
///////////////////////////////////////////////////// <mods:name>
///////////////////////////////////////////////////////////// <mods:namePart>DATA</mods:namePart>
///////////////////////////////////////////////////////////// <mods:description>DATA</mods:description>
///////////////////////////////////////////////////////////// <mods:role>
///////////////////////////////////////////////////////////////////// <mods:roleTerm>DATA</mods:roleTerm>
///////////////////////////////////////////////////////////// </mods:role>
///////////////////////////////////////////////////// </mods:name>


if ( document.forms[0].creator_radio_02[0].checked  ) {
/////// ps[ps.length] = obrak+"!-- mods:name creator_radio_02[0].checked -->\r\n";
}
else if ( !document.forms[0].creator_radio_02[0].checked  ) {
///////////NO mods:name tags created for second name if document.forms[0].creator_radio_02[0].checked == true )

var name_authority_02_display = new String("");
var name_type_02_display = new String("");//this does not correspond to a formvar, but helps keep track of radio buttons

if (!document.forms[0].name_authority_02_radio[0].checked) {
   name_authority_02_display = ' authority="'+bfont+document.forms[0].name_authority_02.value+efont+ '"';
}

if ( document.forms[0].creator_radio_02[1].checked == true ) {
	name_type_02_display = ' type="'+bfont+'personal'+efont+'"';
}else if ( document.forms[0].creator_radio_02[2].checked==true ) {
	name_type_02_display = ' type="'+bfont+'corporate'+efont+'"';
}else {
	name_type_02_display = '';
}

//start mods:name 2
ps[ps.length]=new String(obrak+'mods:name '+name_type_02_display+ name_authority_02_display+ '>\r\n');


//unknown, anonymous are not valid here

///creator can be person or corporate

if ( document.forms[0].creator_radio_02[1].checked == true ) {//personal

	//check for complex-personal-name first
	if (document.forms[0].creator_complexname_02.value.length != 0 ) { 
		ps[ps.length]=new String(obrak+'mods:namePart>'
			+ bfont + replace_apos(document.forms[0].creator_complexname_02.value) + efont
			+ obrak +'/mods:namePart>\r\n'
			);
	}else if (document.forms[0].creator_complexname_02.value.length == 0) {//do traditional family-first-middle name

                ps[ps.length]=new String(obrak+'mods:namePart type="family">'
                        + bfont + replace_apos(document.forms[0].creator_lastname_02.value) + efont 
                        + obrak +'/mods:namePart>\r\n'
                        );

        var creator_given_name_02 = new String();
	var space_02 = new String("");

	if ( document.forms[0].creator_firstname_02.value.length>0 && document.forms[0].creator_middlename_02.value.length>0 ) {
		space_02 = " ";
		}

        if ( document.forms[0].creator_firstname_02.value.length>0 || document.forms[0].creator_middlename_02.value.length>0 ) {
                creator_given_name_02 += document.forms[0].creator_firstname_02.value +space_02+document.forms[0].creator_middlename_02.value;
                creator_given_name_02 = creator_given_name_02.replace(/  /gi," ");//collapsing 2 white space to 1 white space
                ps[ps.length]=new String(obrak+'mods:namePart type="given">'
                        + bfont + replace_apos(creator_given_name_02) + efont 
                        + obrak +'/mods:namePart>\r\n'
                        );
                }

	}//end building traditional family-first-middle type name


	var vitalDates_dob_02 = new String(document.forms[0].creator_dob_02.value);
   	    vitalDates_dob_02 = vitalDates_dob_02.replace(/[a-z]/gi,'H');
	var vitalDates_dod_02 = new String(document.forms[0].creator_dod_02.value);
   	    vitalDates_dod_02 = vitalDates_dod_02.replace(/[a-z]/gi,'H');
        var vitalDates_02 = new String("");

            if ( vitalDates_dob_02.indexOf("H") == -1 ) {
                        vitalDates_02 += vitalDates_dob_02;
                        }
            vitalDates_02 += "-";
            if ( vitalDates_dod_02.indexOf("H") == -1 ) {
                        vitalDates_02 += vitalDates_dod_02;
                        }

	//alert("vitalDates_02="+vitalDates_02+"\nvitalDates_dob_02="+vitalDates_dob_02+"\nvitalDates_dod_02="+vitalDates_dod_02);
        if ( vitalDates_02.length > 2 ) {
                ps[ps.length]=new String(obrak+'mods:namePart type="date">'
                        + bfont + vitalDates_02 + efont
                        + obrak +'/mods:namePart>\r\n'
                        );
                        }






} else if ( document.forms[0].creator_radio_02[2].checked == true) {//corporate
	ps[ps.length]=new String(obrak+'mods:namePart>'
	+ bfont + replace_apos(document.forms[0].creator_lastname_02.value) + efont 
	+ obrak +'/mods:namePart>\r\n'
	);

}

//do not make empty tag for creator_description_02
if ( document.forms[0].creator_description_02.value != "" ) {
ps[ps.length]=new String(obrak+'mods:description>'
	+ bfont + replace_apos(document.forms[0].creator_description_02.value) + efont
	+ obrak +'/mods:description>\r\n'
	);
		
}
//do not make empty tag for creator_role_02

if ( document.forms[0].creator_role_02.value != "" ) {

ps[ps.length] = new String(obrak+'mods:role>\r\n'		
	+ obrak +'mods:roleTerm authority="marcrelator">'
	+ bfont +document.forms[0].creator_role_02.value + efont 
	+ obrak +'/mods:roleTerm>\r\n'			
	+ obrak +'/mods:role>\r\n'
	);
}//end role tags
		
///end mods:name 2
ps[ps.length] = new String(obrak+'/mods:name>\r\n');

}//end if you have checked to have a value for creator # 2

////////////////////////////////////////////////////////////////////////////////////		
//////////////////////////////// END ///////////////////////////////////////////////		
///////////////////////// Second NAME BLOCK ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////		
///////////////////////// THIRD NAME BLOCK /////////////////////////////////////////
///////////////////////////////////////////////////// <mods:name
///////////////////////////////////////////////////////////// <mods:namePart
///////////////////////////////////////////////////////////// <mods:description
///////////////////////////////////////////////////////////// <mods:role
///////////////////////////////////////////////////////////////////// <mods:roleTerm

if ( document.forms[0].creator_radio_03[0].checked  ) {
///////	ps[ps.length] = obrak+"!-- mods:name creator_radio_03[0].checked -->\r\n";
}
else if ( !document.forms[0].creator_radio_03[0].checked  ) {
///////////NO mods:name tags created for second name if document.forms[0].creator_radio_02[0].checked == true )

var name_authority_03_display = new String("");
var name_type_03_display = new String("");//this does not correspond to a formvar, but helps keep track of radio buttons

if (!document.forms[0].name_authority_03_radio[0].checked) {
   name_authority_03_display = ' authority="'+bfont+document.forms[0].name_authority_03.value+efont+ '"';
}

if ( document.forms[0].creator_radio_03[1].checked == true ) {
	name_type_03_display = ' type="'+bfont+'personal'+efont+'"';
}else if ( document.forms[0].creator_radio_03[2].checked==true ) {
	name_type_03_display = ' type="'+bfont+'corporate'+efont+'"';
}else {
	name_type_03_display = '';
}

/////start mods:name 3
ps[ps.length]=new String(obrak+'mods:name '+name_type_03_display+ name_authority_03_display+ '>\r\n');


//unknown, anonymous are not valid here

///creator can be person or not a person


if ( document.forms[0].creator_radio_03[1].checked == true ) {//personal

	//check for complex-personal-name first
	if (document.forms[0].creator_complexname_03.value.length != 0 ) { 
		ps[ps.length]=new String(obrak+'mods:namePart>'
			+ bfont + replace_apos(document.forms[0].creator_complexname_03.value) + efont
			+ obrak +'/mods:namePart>\r\n'
			);
	}else if (document.forms[0].creator_complexname_03.value.length ==0 ){//do traditional family-first-middle name

                ps[ps.length]=new String(obrak+'mods:namePart type="family">'
                        + bfont + replace_apos(document.forms[0].creator_lastname_03.value) + efont 
                        + obrak +'/mods:namePart>\r\n'
                        );

        var creator_given_name_03 = new String();
	var space_03 = new String("");

	if ( document.forms[0].creator_firstname_03.value.length>0 && document.forms[0].creator_middlename_03.value.length>0 ) {
		space_03 = " ";
		}

        if ( document.forms[0].creator_firstname_03.value.length>0 || document.forms[0].creator_middlename_03.value.length>0 ) {
                creator_given_name_03 += document.forms[0].creator_firstname_03.value +space_03+document.forms[0].creator_middlename_03.value;
                creator_given_name_03 = creator_given_name_03.replace(/  /gi," ");//collapsing 2 white space to 1 white space
                ps[ps.length]=new String(obrak+'mods:namePart type="given">'
                        + bfont + replace_apos(creator_given_name_03) + efont 
                        + obrak +'/mods:namePart>\r\n'
                        );
                }
	}//end building traditional family-first-middle type name


        var vitalDates_dob_03 = new String(document.forms[0].creator_dob_03.value);
            vitalDates_dob_03 = vitalDates_dob_03.replace(/[a-z]/gi,'H');
        var vitalDates_dod_03 = new String(document.forms[0].creator_dod_03.value);
            vitalDates_dod_03 = vitalDates_dod_03.replace(/[a-z]/gi,'H');

        var vitalDates_03 = new String("");
            if ( vitalDates_dob_03.indexOf("H") == -1 ) {
                        vitalDates_03 += vitalDates_dob_03;
                        }
            vitalDates_03 += "-";
            if ( vitalDates_dod_03.indexOf("H") == -1 ) {
                        vitalDates_03 += vitalDates_dod_03;
                        }
       //alert("vitalDates_03="+vitalDates_03+"\nvitalDates_dob_03="+vitalDates_dob_03+"\nvitalDates_dod_03="+vitalDates_dod_03);

        if ( vitalDates_03.length > 2 ) {
                ps[ps.length]=new String(obrak+'mods:namePart type="date">'
                        + bfont + vitalDates_03 + efont
                        + obrak +'/mods:namePart>\r\n'
                        );
                        }



} else if ( document.forms[0].creator_radio_03[2].checked == true) {//corporate
        ps[ps.length]=new String(obrak+'mods:namePart>'
        + bfont + replace_apos(document.forms[0].creator_lastname_03.value) + efont 
        + obrak +'/mods:namePart>\r\n'
        );

}

//do not make empty tag for creator_description_03
if ( document.forms[0].creator_description_03.value != "" ) {
ps[ps.length]=new String(obrak+'mods:description>'
	+ bfont + replace_apos(document.forms[0].creator_description_03.value) + efont 
	+ obrak +'/mods:description>\r\n'
	);
}
		
//do not make empty tag for creator_role_03

if ( document.forms[0].creator_role_03.value != "" ) {
ps[ps.length] = new String(obrak+'mods:role>\r\n'		
	+ obrak +'mods:roleTerm authority="marcrelator">'
	+ bfont +document.forms[0].creator_role_03.value + efont 
	+ obrak +'/mods:roleTerm>\r\n'			
	+ obrak +'/mods:role>\r\n'
	);
}//end role tag
		
/////////end mods:name 3
ps[ps.length] = new String(obrak+'/mods:name>\r\n');

}//end if you have checked to have a value for creator # 3

////////////////////////////////////////////////////////////////////////////////////		
//////////////////////////////// END ///////////////////////////////////////////////		
///////////////////////// THIRD NAME BLOCK /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////		
///////////////////////// MODS:NAME END ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/////ps[ps.length] = new String(obrak+'/mods:name>\r\n');
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// close mods


////ps[ps.length]= new String(obrak+'/mods:mods>\r\n');

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


}///end function buildTagsArray_page_01() //line 692





