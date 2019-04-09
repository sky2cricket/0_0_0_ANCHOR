//vv_build_tags_melanie.js copied from vv_build_tags.js
//end changes 2/2/2007 3:35 pm


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

//// & &amp;  >>> &#038;
//// & &amp; ///has to be first or will replace "&" in the replacements shown below!
//// ' &apos; >>> &#039;
//// " &quot; >>> &#034;
//// < &lt;   >>> &#060;
//// > &gt;   >>> &#062;

var strA = new String(str);

var amper = new RegExp("&","g");
    strA = strA.replace(amper, "&#038;");
var apos = new RegExp("'","g");
    strA = strA.replace(apos,"&#039;");
var openB = new RegExp('<',"g");
    strA = strA.replace(openB,"&#060;");
var closB = new RegExp('>',"g");
    strA = strA.replace(closB,"&#062;");
var quote = new RegExp('"',"g");
    strA = strA.replace(quote,"&#034;");

//alert("after replace all:\nstr="+str+"\nstrA="+strA);
return(strA);
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
	var commentFilename = new String(parent.U.document.UF.VVcomment_01.value);
	var commentNumTiffs = new String(parent.U.document.UF.VVcomment_02.value);
	var commentDate     = new String(parent.U.document.UF.VVcomment_03.value);
	var commentValidate = new String(parent.U.document.UF.VVcomment_04.value);

	//alert("commentFilename=\n"+commentFilename);
	//alert("commentDate=\n"+commentDate);
	//alert("commentNumTiffs="\n"+commentNumTiffs);
	if ( num >0 ) {
        	//commentFilename = commentFilename.replace(/\</g,"&lt;");
        	//commentDate     = commentDate.replace(/\</g,"&lt;");
        	commentFilename   = commentFilename.replace(/\</g,"&#060;");
        	commentNumTiffs   = commentNumTiffs.replace(/\</g,"&#060;");
        	commentDate       = commentDate.replace(/\</g,"&#060;");
        	commentValidate   = commentValidate.replace(/\</g,"&#060;");
		}



var ps=new Array();


/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n'); 

/////////////////////////////////////////////////////header <mods:mods

ps[ps.length] = new String(obrak +'?xml version="1.0" encoding="UTF-8"  ?>\r\n'); 
ps[ps.length] = new String(obrak +'mods:mods xmlns:mods="http://www.loc.gov/mods/v3" \r\n' 
	+' xmlns:xlink="http://www.w3.org/1999/xlink" \r\n'
	+' xmlns="http://www.loc.gov/mods/v3" \r\n' 
	+' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \r\n'
	+' xsi:schemaLocation="http://www.loc.gov/mods/v3 \r\n'
	+' http://www.loc.gov/standards/mods/v3/mods-3-2.xsd"\r\n'
	+'  ID="MODS" version="3.2" >\r\n'
	//+' C:/DOCUMENTS*/reichert/Desktop/VVsamples/mods-3-2.xsd">\r\n'
       	//+' C:\DOCUME~1\reichert\Desktop\VVsamples\mods-3-2.xsd">\r\n'
        /////+' http://diglib.lib.utk.edu/dlc/standards/mods/v3.2/v3_mods-3-2.xsd">\r\n'
	/////////+' xsi:schemaLocation="http://diglib.lib.utk.edu/dlc/standards/mods/v3.2/v3_mods-3-2.xsd">\r\n'
	);
ps[ps.length] = new String(obrak +'!-- Volunteer Voices MODS profile \r\n'	
	+' released 24 November 2006 by Melanie Feltner-Reichert -->\r\n'
	);


ps[ps.length] = new String(obrak+'!-- Volunteer Voices Web Form Programming \r\n'
        +' provided by University of Tennessee Libraries Digital Library Center \r\n'
        +' (programmer Christine Haygood Deane)  -->\r\n'
	);



//ps[ps.length] = new String(parent.U.document.UF.VVcomment_01.value +" \r\n");
//ps[ps.length] = new String(parent.U.document.UF.VVcomment_02.value +" \r\n");

ps[ps.length] = new String(commentFilename+" \r\n"); 
ps[ps.length] = new String(commentNumTiffs+" \r\n"); 
ps[ps.length] = new String(commentDate+" \r\n"); 
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


ps[ps.length]= new String(obrak+'/mods:mods>\r\n');

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
///////////////////////////////////////////////////// <mods:title>
//////////////////////////////////////////////////////////// <mods:titleInfo>DATA</mods:titleInfo>
///////////////////////////////////////////////////// </mods:title>
  
 


ps[ps.length]=new String(obrak+'mods:titleInfo>\r\n '
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
		ps[ps.length]=new String(obrak+'mods:namePart type="family">'
			+ bfont + replace_apos(document.forms[0].creator_lastname_01.value) + efont
			+ obrak +'/mods:namePart>\r\n'
			);

	var creator_given_name_01 = new String();

	if ( document.forms[0].creator_firstname_01.value.length>0 || document.forms[0].creator_middlename_01.value.length>0 ) {
		creator_given_name_01 += document.forms[0].creator_firstname_01.value +" "+document.forms[0].creator_middlename_01.value;
	        creator_given_name_01 = creator_given_name_01.replace(/  /gi," ");//collapsing 2 white space to 1 white space
		ps[ps.length]=new String(obrak+'mods:namePart type="given">'
			+ bfont + replace_apos(creator_given_name_01) + efont
			+ obrak +'/mods:namePart>\r\n'
			);
 		}


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

                ps[ps.length]=new String(obrak+'mods:namePart type="family">'
                        + bfont + replace_apos(document.forms[0].creator_lastname_02.value) + efont 
                        + obrak +'/mods:namePart>\r\n'
                        );

        var creator_given_name_02 = new String();

        if ( document.forms[0].creator_firstname_02.value.length>0 || document.forms[0].creator_middlename_02.value.length>0 ) {
                creator_given_name_02 += document.forms[0].creator_firstname_02.value +" "+document.forms[0].creator_middlename_02.value;
                creator_given_name_02 = creator_given_name_02.replace(/  /gi," ");//collapsing 2 white space to 1 white space
                ps[ps.length]=new String(obrak+'mods:namePart type="given">'
                        + bfont + replace_apos(creator_given_name_02) + efont 
                        + obrak +'/mods:namePart>\r\n'
                        );
                }



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

                ps[ps.length]=new String(obrak+'mods:namePart type="family">'
                        + bfont + replace_apos(document.forms[0].creator_lastname_03.value) + efont 
                        + obrak +'/mods:namePart>\r\n'
                        );

        var creator_given_name_03 = new String();

        if ( document.forms[0].creator_firstname_03.value.length>0 || document.forms[0].creator_middlename_03.value.length>0 ) {
                creator_given_name_03 += document.forms[0].creator_firstname_03.value +" "+document.forms[0].creator_middlename_03.value;
                creator_given_name_03 = creator_given_name_03.replace(/  /gi," ");//collapsing 2 white space to 1 white space
                ps[ps.length]=new String(obrak+'mods:namePart type="given">'
                        + bfont + replace_apos(creator_given_name_03) + efont 
                        + obrak +'/mods:namePart>\r\n'
                        );
                }


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



ps[ps.length] = new String(obrak+'mods:originInfo>\r\n ');


var keyDateDone=0;

if ( document.forms[0].date_created.value != "" ) {//use date_created
var str_date_createdQ = new String('');
if ( document.forms[0].date_createdQ.value != 'none' && document.forms[0].date_createdQ.value != "" ) {
    str_date_createdQ = 'qualifier="'+ document.forms[0].date_createdQ.value +'"';
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


var str_date_created_begin = new String();
    str_date_created_begin = document.forms[0].date_created_begin.value;
    str_date_created_begin = str_date_created_begin.replace(/[a-z]/gi,'');
    str_date_created_begin = str_date_created_begin.replace(/ /gi,'');
if ( str_date_created_begin.length > 0 ) {
var str_date_created_beginQ = new String('');
if ( document.forms[0].date_created_beginQ.value != 'none' && document.forms[0].date_created_beginQ.value != "" ) {
    str_date_created_beginQ = 'qualifier="'+ document.forms[0].date_created_beginQ.value +'"';
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
if ( document.forms[0].date_created_endQ.value != 'none' ) {
    str_date_created_endQ = 'qualifier="'+ document.forms[0].date_created_endQ.value +'"';
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

if ( document.forms[0].date_issuedQ.value != 'none' ) {
    str_date_issuedQ = 'qualifier="'+ document.forms[0].date_issuedQ.value +'"';
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


ps[ps.length]= new String(obrak+'mods:placeTerm>'
	+ bfont + replace_apos(document.forms[0].place_of_origin.value) + efont 
	+ obrak+'/mods:placeTerm>\r\n '
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

//type_of_resource_01 is required
ps[ps.length]= new String(obrak+'mods:typeOfResource>'
	+ bfont +document.forms[0].type_of_resource_01.value + efont 
	+ obrak +'/mods:typeOfResource>\r\n'
	);
 


//do not make empty tag for type_of_resource_02
if ( document.forms[0].type_of_resource_02.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:typeOfResource>'
	+ bfont +document.forms[0].type_of_resource_02.value + efont 
	+ obrak +'/mods:typeOfResource>\r\n'
	);
}

//do not make empty tag for type_of_resource_03
if ( document.forms[0].type_of_resource_03.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:typeOfResource>'
	+ bfont +document.forms[0].type_of_resource_03.value + efont 
	+ obrak +'/mods:typeOfResource>\r\n'
	);
}




///////////////////////////////////////////////////// <mods:subject
///////////////////////////////////////////////////////////// <mods:genre


var genre_authority_tag_display = new String("");

if (document.forms[0].mods_genre_radio[0].checked) {
   	genre_authority_tag_display = 'authority="'+bfont+'aat'+efont+'" ';
}else if (document.forms[0].mods_genre_radio[1].checked) {
   	genre_authority_tag_display = 'authority="'+bfont+'nmc'+efont+'" ';
}else if (document.forms[0].mods_genre_radio[2].checked) {
	genre_authority_tag_display = 'authority="'+bfont+'marcgt'+efont+'" ';
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
///////////////////////////////////////////////////////////// <mods:extent (pages;dimensions)



ps[ps.length]= new String(obrak+'mods:physicalDescription>\r\n');



///form_type_technique
///input box on museum page, tag built on page 3
///do not build empty tag
if ( document.forms[0].museum_form_type_technique.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:form type="technique" authority="aat">'
	+ bfont + replace_apos(document.forms[0].museum_form_type_technique.value) + efont
	+ obrak+'/mods:form>\r\n'
	);

}///end if

///form_type_medium
///input box on museum page, tag built on page 3
///do not build empty tag
if ( document.forms[0].museum_form_type_medium.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:form type="medium" authority="aat">'
	+ bfont + replace_apos(document.forms[0].museum_form_type_medium.value) + efont 
	+ obrak+'/mods:form>\r\n'
	);
}//end if

ps[ps.length]= new String(obrak+'mods:digitalOrigin>'
	+ bfont + document.forms[0].digital_origin.value + efont 
	+ obrak+'/mods:digitalOrigin>\r\n'
	);

////THIS IS A HIDDEN FIELD THAT DOES NOT DISPLAY ON THE WEB FORM
ps[ps.length]= new String(obrak+'mods:internetMediaType>'
	+ bfont + document.forms[0].internetmediatype.value + efont 
	+ obrak+'/mods:internetMediaType>\r\n'
	);


///////parse extent fields for correct display
var  strExtent =  new String(" ");
var  numExtent = 0;

if ( document.forms[0].extent_pages.value.length > 0 ) {
	strExtent += document.forms[0].extent_pages.value+ " digital images; ";
	numExtent++;
	}

if ( document.forms[0].extent_number_of_objects.value.length > 0 ) {
	strExtent += document.forms[0].extent_number_of_objects.value ;
	numExtent++;
	}


if ( document.forms[0].extent_dimensions.value.length > 0 ) {
	strExtent +=   "; " + document.forms[0].extent_dimensions.value;
	numExtent++;
	}

if ( numExtent < 2 ) {
	strExtent = strExtent.replace(/;/g,'');
	}

///////do not generate an empty tag for extent

if ( numExtent > 0 ) {

ps[ps.length]= new String(obrak+'mods:extent>'
	+ bfont + replace_apos(strExtent) + efont 
	+ obrak+'/mods:extent>\r\n'
	);

}
			
	
ps[ps.length]= new String(obrak+'/mods:physicalDescription>\r\n');


///////////////////////////////////////////////////// <mods:abstract


///////do not generate an empty tag for abstract
if ( document.forms[0].abstract.value != "" ) {
ps[ps.length]= new String(obrak+'mods:abstract>'
	+ bfont + replace_apos(document.forms[0].abstract.value) + efont 
	+ obrak+'/mods:abstract>\r\n'
	);
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




///returns the ps array
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

//ps[ps.length] = new String("<-- page_04 -->");

/////////BEGIN PAGE 4
/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n'); 




///////////////////////////////////////////////////// <mods:subject authority="lcsh"
///////////////////////////////////////////////////////////// <mods:topic - up to 3 
///////////////////////////////////////////////////////////// <mods:geographic - up to 2
///////////////////////////////////////////////////////////// <mods:name - up to 2
///////////////////////////////////////////////////////////// <mods:temporal - up to 2


//////////START LCSH AUTHORITY IF THERE IS DATA

var lcsh_count=0;

if (    document.forms[0].subject_topic_lcsh_01.value != ""
     || document.forms[0].subject_topic_lcsh_02.value != ""
     || document.forms[0].subject_topic_lcsh_03.value != ""
     || document.forms[0].subject_name_lcsh_01.value != ""
     || document.forms[0].subject_name_lcsh_02.value != ""
     || document.forms[0].subject_geographic_lcsh_01.value != ""
     || document.forms[0].subject_geographic_lcsh_02.value != ""
     || document.forms[0].subject_temporal_lcsh_01.value != ""
     || document.forms[0].subject_temporal_lcsh_02.value != ""
   ) {

ps[ps.length]= new String(obrak+'mods:subject authority="'+bfont+'lcsh'+efont+'">\r\n' );
lcsh_count++;
}

////////This tag is not required, cannot be empty

//do not make empty subject_topic_lcsh_01
if ( document.forms[0].subject_topic_lcsh_01.value.length > 0 ) {

ps[ps.length]= new String(  obrak+'mods:topic>'
	+ bfont + replace_apos(document.forms[0].subject_topic_lcsh_01.value) + efont 
	+ obrak+'/mods:topic>\r\n'
	);

}

//do not make empty subject_topic_lcsh_02
if ( document.forms[0].subject_topic_lcsh_02.value.length > 0 ) {

ps[ps.length]= new String(  obrak+'mods:topic>'
	+ bfont + replace_apos(document.forms[0].subject_topic_lcsh_02.value) + efont 
	+ obrak+'/mods:topic>\r\n'
	);
}//end if



//do not make empty subject_topic_lcsh_03
if ( document.forms[0].subject_topic_lcsh_03.value.length > 0 ) {

ps[ps.length]= new String( obrak+'mods:topic>'
	+ bfont + replace_apos(document.forms[0].subject_topic_lcsh_03.value) + efont 
	+ obrak+'/mods:topic>\r\n'
	);

}//end if



//do not make empty subject_geographic_lcsh_01
if ( document.forms[0].subject_geographic_lcsh_01.value.length > 0 ) {
		
ps[ps.length]= new String(  obrak+'mods:geographic>'
	+ bfont + replace_apos(document.forms[0].subject_geographic_lcsh_01.value) + efont 
	+ obrak+'/mods:geographic>\r\n'
	);

}//end if



//do not make empty subject_geographic_lcsh_02
if ( document.forms[0].subject_geographic_lcsh_02.value.length > 0 ) {
		
ps[ps.length]= new String(  obrak+'mods:geographic>'
	+ bfont + replace_apos(document.forms[0].subject_geographic_lcsh_02.value) + efont 
	+ obrak+'/mods:geographic>\r\n'
	);
}//end if



 //do not make empty subject_name_lcsh_01
 if ( document.forms[0].subject_name_lcsh_01.value.length > 0 ) {

 ps[ps.length] = new String( obrak+'mods:name>\r\n'
 	+ obrak+'mods:namePart>'
	+ bfont + replace_apos(document.forms[0].subject_name_lcsh_01.value) + efont 
 	+ obrak+'/mods:namePart>\r\n'
	+ obrak+'/mods:name>\r\n'
	);
 }//end if



 //do not make empty subject_name_lcsh_02
 if ( document.forms[0].subject_name_lcsh_02.value.length > 0 ) {

 ps[ps.length] = new String( obrak+'mods:name>\r\n'
 	+ obrak+'mods:namePart>'
	+ bfont + replace_apos(document.forms[0].subject_name_lcsh_02.value) + efont 
 	+ obrak+'/mods:namePart>\r\n'
	+ obrak+'/mods:name>\r\n'
	);

 }//end if




//do not make empty subject_temporal_lcsh_01
if ( document.forms[0].subject_temporal_lcsh_01.value.length > 0 ) {

ps[ps.length] = new String( obrak+'mods:temporal>'
	+ bfont + replace_apos(document.forms[0].subject_temporal_lcsh_01.value) + efont 
	+ obrak+'/mods:temporal>\r\n'
	);
}//end if



//do not make empty subject_temporal_lcsh_02
if ( document.forms[0].subject_temporal_lcsh_02.value.length > 0 ) {

ps[ps.length] = new String( obrak+'mods:temporal>'
	+ bfont + replace_apos(document.forms[0].subject_temporal_lcsh_02.value) + efont 
	+ obrak+'/mods:temporal>\r\n'
	);

}//end if


if (lcsh_count>0) {
ps[ps.length] = new String( obrak+'/mods:subject>\r\n' );
}
////////////////END LCSH AUTHORITY

///////////////////////////////////////////////////// <mods:subject authority="tgm"
///////////////////////////////////////////////////////////// <mods:topic



//do not make empty mods:subject authority="tgm"
if (   document.forms[0].subject_topic_tgm_01.value.length > 0 
    || document.forms[0].subject_topic_tgm_02.value.length > 0
    || document.forms[0].subject_topic_tgm_03.value.length > 0
    ) {

ps[ps.length]= new String(obrak+'mods:subject authority="'+bfont+'tgm'+efont+'">\r\n');


//do not make empty mods:topic subject_topic_tgm_01 tag
if ( document.forms[0].subject_topic_tgm_01.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:topic>'
	+ bfont + replace_apos(document.forms[0].subject_topic_tgm_01.value) + efont 
	+ obrak+'/mods:topic>\r\n'
	);
}

//do not make empty mods:topic subject_topic_tgm_02 tag
if ( document.forms[0].subject_topic_tgm_02.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:topic>'
	+ bfont + replace_apos(document.forms[0].subject_topic_tgm_02.value) + efont 
	+ obrak+'/mods:topic>\r\n'
	);
}

//do not make empty mods:topic subject_topic_tgm_03 tag
if ( document.forms[0].subject_topic_tgm_03.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:topic>'
	+ bfont + replace_apos(document.forms[0].subject_topic_tgm_03.value) + efont 
	+ obrak+'/mods:topic>\r\n'
	);
}


ps[ps.length]= new String(obrak+'/mods:subject>\r\n');

}///end if

///////////////////////////////////////////////////// <mods:subject authority="vv"
///////////////////////////////////////////////////////////// <mods:temporal
///////////////////////////////////////////////////////////// <mods:topic 
///////////////////////////////////////////////////////////// <mods:geographic ( county )


////BEGIN VV AUTHORITY
ps[ps.length]= new String(obrak+'mods:subject authority="'+bfont+'vv'+efont+'">\r\n');

////////This tag is required, cannot be empty

ps[ps.length]= new String(  obrak+'mods:temporal>'
	+ bfont + document.forms[0].subject_temporal_vv_01.value + efont 
	+ obrak+'/mods:temporal>\r\n'
	);


/* ==============per Tiffanie Conner drop second temporal field==================
//do not make empty subject_temporal_vv_02
if ( document.forms[0].subject_temporal_vv_02.value.length > 0 ) {

ps[ps.length]= new String(  obrak+'mods:temporal>'
	+ bfont + document.forms[0].subject_temporal_vv_02.value + efont 
	+ obrak+'/mods:temporal>\r\n'
	);

}//end if
=================================================================================*/


////////This tag is not required, cannot be empty

//do not make empty subject_topic_vv_01
if ( document.forms[0].subject_topic_vv_01.value.length > 0 ) {
ps[ps.length]= new String(  obrak+'mods:topic>'
	+ bfont + document.forms[0].subject_topic_vv_01.value + efont 
	+ obrak+'/mods:topic>\r\n'
	);	
}


//do not make empty subject_topic_vv_02
if ( document.forms[0].subject_topic_vv_02.value.length > 0 ) {

ps[ps.length]= new String(  obrak+'mods:topic>'
	+ bfont + document.forms[0].subject_topic_vv_02.value + efont 
	+ obrak+'/mods:topic>\r\n'
	);

}//end if


//do not make empty subject_topic_vv_03
if ( document.forms[0].subject_topic_vv_03.value.length > 0 ) {

ps[ps.length]= new String(  obrak+'mods:topic>'
	+ bfont + document.forms[0].subject_topic_vv_03.value + efont 
	+ obrak+'/mods:topic>\r\n'
	);

}//end if

//do not make empty subject_topic_vv_04
if ( document.forms[0].subject_topic_vv_04.value.length > 0 ) {

ps[ps.length]= new String(  obrak+'mods:topic>'
	+ bfont + document.forms[0].subject_topic_vv_04.value + efont 
	+ obrak+'/mods:topic>\r\n'
	);

}//end if


//do not make empty subject_topic_vv_05
if ( document.forms[0].subject_topic_vv_05.value.length > 0 ) {

ps[ps.length]= new String(  obrak+'mods:topic>'
	+ bfont + document.forms[0].subject_topic_vv_05.value + efont 
	+ obrak+'/mods:topic>\r\n'
	);

}//end if



//do not make empty subject_geographic_vv_01
if ( document.forms[0].subject_geographic_vv_01.value.length > 0 ) {

ps[ps.length]= new String(  obrak+'mods:geographic>'
	+ bfont + document.forms[0].subject_geographic_vv_01.value + efont 
	+ obrak+'/mods:geographic>\r\n'
	);

}//end if



//do not make empty subject_geographic_vv_02
if ( document.forms[0].subject_geographic_vv_02.value.length > 0 ) {

		
ps[ps.length]= new String(  obrak+'mods:geographic>'
	+ bfont + document.forms[0].subject_geographic_vv_02.value + efont 
	+ obrak+'/mods:geographic>\r\n'
	);

}//end if


ps[ps.length]= new String(obrak+'/mods:subject>\r\n');//end vv
///END SUBJECT AUTHORITY VV

/////////START SUBJECT AUTHORITY SPC
///////////////////////////////////////////////////// <mods:subject authority="spc"


if (  document.forms[0].subject_topic_spc_01.value != "" 
    ||document.forms[0].subject_topic_spc_02.value != ""
    ||document.forms[0].subject_topic_spc_02.value != "" ) {

ps[ps.length]= new String(obrak+'mods:subject authority="'+bfont+'spc'+efont+'">\r\n');


///////////////if ( document.forms[0].subject_topic_spc_01.value.length > 0 ) {
ps[ps.length]= new String(  obrak+'mods:topic>'
	+ bfont + document.forms[0].subject_topic_spc_01.value + efont 
	+ obrak+'/mods:topic>\r\n'
	);	
/////////////////}


//do not make empty subject_topic_spc_02
if ( document.forms[0].subject_topic_spc_02.value.length > 0 ) {

ps[ps.length]= new String(  obrak+'mods:topic>'
	+ bfont + document.forms[0].subject_topic_spc_02.value + efont 
	+ obrak+'/mods:topic>\r\n'
	);

}//end if


//do not make empty subject_topic_spc_03
if ( document.forms[0].subject_topic_spc_03.value.length > 0 ) {

ps[ps.length]= new String(  obrak+'mods:topic>'
	+ bfont + document.forms[0].subject_topic_spc_03.value + efont 
	+ obrak+'/mods:topic>\r\n'
	);

}//end if


ps[ps.length]= new String(obrak+'/mods:subject>\r\n');//end spc 
}
/////////END SUBJECT AUTHORITY SPC


////////START SUBJECT AUTHORITY NONE

if (   document.forms[0].subject_name_none_01_desc.value.length > 0 
    || document.forms[0].subject_topic_none_01_desc.value.length > 0
    || document.forms[0].subject_geographic_none_01.value.length > 0
    || document.forms[0].subject_temporal_none_01_desc.value.length > 0 ) {

ps[ps.length]= new String(obrak+'mods:subject >\r\n');



//do not make empty subject_topic_none_01_desc
if ( document.forms[0].subject_topic_none_01_desc.value.length > 0 ) {

ps[ps.length]= new String(  obrak+'mods:topic>'
	+ bfont + replace_apos(document.forms[0].subject_topic_none_01_desc.value) + efont 
	+ obrak+'/mods:topic>\r\n'
	);
}//end if


//do not make empty subject_name_none_01_desc
if ( document.forms[0].subject_name_none_01_desc.value.length > 0 ) {

ps[ps.length]= new String( obrak+'mods:name>\r\n'
	+ obrak+'mods:namePart>'
	+ bfont + replace_apos(document.forms[0].subject_name_none_01_desc.value) + efont 
	+ obrak+'/mods:namePart>'
	+ obrak+'/mods:name>\r\n'
	);
}//end if




//do not make empty subject_geographic_none_01
if ( document.forms[0].subject_geographic_none_01.value.length > 0 ) {

ps[ps.length]= new String( obrak+'mods:geographic>'
	+ bfont + replace_apos(document.forms[0].subject_geographic_none_01.value) + efont 
	+ obrak+'/mods:geographic>\r\n'
	);

}//end if


//do not make empty subject_temporal_none_01_desc
if ( document.forms[0].subject_temporal_none_01_desc.value.length > 0 ) {

ps[ps.length]= new String( obrak+'mods:temporal>'
	+ bfont + replace_apos(document.forms[0].subject_temporal_none_01_desc.value) + efont 
	+ obrak+'/mods:temporal>\r\n'
	);

}//end if



ps[ps.length]= new String(obrak+'/mods:subject>\r\n');
////////END SUBJECT AUTHORITY NONE
}//end if


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


}///end function buildTagsArray_page_04()


///returns the ps array
function buildTagsArray_page_05(N){
//alert("buildTagsArray_page_05");


//N=0 no red, use '<' in xml tag
//N>0 insert red use '&#060;' (prev '&lt;')  in xml tag to make html viewable

var NI = 0;
if ( N == "0" ) { NI=0; } else { NI=1; }


var bfont= new String(BFONT[NI]);
var efont= new String(EFONT[NI]);
	var obrak= new String(OBRAK[NI]);

var ps=new Array();


//ps[ps.length] = new String("<-- page_05 -->");

/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n'); 


///////////////////////////////////////////////////// <mods:relatedItem type="constituent">
///////////////////////////////////////////////////////////// <mods:identifier type = "local"


var atiff = new Array();
var alist = new String();
    alist =  parent.U.document.UF.file_list_tiff.value;
    atiff = alist.split(",");
var strCFN = new String();//strConstituentFileName

var numC = atiff.length;///parent.U.document.UF.numConstituentsTIFF.value;



ps[ps.length]= new String(obrak+'mods:relatedItem type="constituent">\r\n');
for(j=0;j<numC; j++) {



strCFN = new String(atiff[j]);
strCFN = strCFN.replace(/ /g,"");
/////alert("j="+j+"   strCFN="+strCFN);

	
if ( strCFN != "undefined" && strCFN != "" ) {
ps[ps.length]= new String(obrak+'mods:identifier type="local">'
	+ bfont+strCFN+efont
	+ obrak+'/mods:identifier>\r\n'
	);
}// end if


}//end for loop


ps[ps.length]= new String(obrak+'/mods:relatedItem >\r\n');

///////////////////////////////////////////////////// <mods:identifier type="uri"



ps[ps.length]= new String(obrak+'mods:identifier type="uri">'
	/////+ bfont + document.FormOne.constituent_file_uri_1.value + efont +' \r\n'
	+ obrak+'/mods:identifier>\r\n'
	);






///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// close mods


////////////////ps[ps.length]= new String(obrak+'/mods:mods>\r\n');

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


}///end function buildTagsArray_page_05()







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



////////////this field is being dropped
///////////////////////////////////////////////////////////// <mods:identifier type="accessionNumber"
///input box on museum page, tag built on page 6


/*-------------------------------------------------------------------
///do not build empty tag
if ( document.forms[0].museum_accession_number.value.length > 0 ) {

ps[ps.length]= new String(obrak+'mods:identifier type="accessionNumber">'
	+ bfont + replace_apos(document.forms[0].museum_accession_number.value) + efont 
	+ obrak+'/mods:identifier>\r\n'
	);

}//end if
----------------------------------------------------------------------*/



///////////////////////////////////////////////////////////// <mods:location
///////////////////////////////////////////////////////////// <mods:physicalLocation type="repository"
///////////////////////////////////////////////////////////// <mods:physicalLocation type="detail" 
///////////////////////////////////////////////////////////// <mods:physicalLocation type="city" 
///////////////////////////////////////////////////////////// <mods:physicalLocation type="state" 
///////////////////////////////////////////////////////////// <mods:physicalLocation type="county" 
///////////////////////////////////////////////////////////// <mods:url


ps[ps.length]= new String(obrak+'mods:location>\r\n');


///required, cannot be empty
ps[ps.length]= new String(obrak+'mods:physicalLocation type="repository">'
	+ bfont + replace_apos(document.forms[0].physical_location_repository.value) + efont 
	+ obrak+'/mods:physicalLocation>\r\n'
	);

//do not make empty physical_location_detail
if ( document.forms[0].physical_location_detail.value.length > 0 ) {

ps[ps.length]= new String(obrak+'mods:physicalLocation type="detail">'
	+ bfont + replace_apos(document.forms[0].physical_location_detail.value) + efont 
	+ obrak+'/mods:physicalLocation>\r\n'
	);
}///end if



///required, cannot be empty
ps[ps.length]= new String(obrak+'mods:physicalLocation type="city">'
	+ bfont + replace_apos(document.forms[0].physical_location_city.value) + efont 
	+ obrak+'/mods:physicalLocation>\r\n'
	);

///required, cannot be empty
ps[ps.length]= new String(obrak+'mods:physicalLocation type="state">'
	+ bfont + replace_apos(document.forms[0].physical_location_state.value) + efont 
	+ obrak+'/mods:physicalLocation>\r\n'
	);

///required, cannot be empty
ps[ps.length]= new String(obrak+'mods:physicalLocation type="county">'
	+ bfont + document.forms[0].physical_location_county.value + efont 
	+ obrak+'/mods:physicalLocation>\r\n'
	);




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
	+ bfont + replace_apos(document.forms[0].collection_id_number.value) +efont
	+ obrak+'/mods:physicalLocation>\r\n'
	);
}//end if collection_id_number_type.text != "none";
}//end if collection_id_number != ""


///Link to digital resource - do not show input on page 6
ps[ps.length]= new String(obrak+'mods:url>'
	///+ bfont + document.forms[0].link_to_digital_resource.value + efont 
	+ bfont + "Jody" + efont 
	+ obrak+'/mods:url>\r\n'
	);

ps[ps.length]= new String(obrak+'/mods:location>\r\n');



///////////////////////////////////////////////////// <mods:note type="museumCredits"
///input box on museum page, tag built on page 6


///do not build empty tag
if ( document.forms[0].museum_credit_line.value.length > 0 ) {

ps[ps.length]= new String(obrak+'mods:note type="museumCredits">'
	+ bfont + replace_apos(document.forms[0].museum_credit_line.value) + efont 
	+ obrak+'/mods:note>\r\n'
	);
}//end if

///////////////////////////////////////////////////// <mods:recordInfo
///////////////////////////////////////////////////////////// <mods:recordContentSource
///////////////////////////////////////////////////////////// <mods:recordCreationDate encoding="w3cdtf"
///////////////////////////////////////////////////////////// <mods:languageOfCataloging
///////////////////////////////////////////////////////////////////// <mods:languageTerm type="code" authority="iso639-2b"


ps[ps.length]= new String(obrak+'mods:recordInfo>\r\n');


ps[ps.length]= new String(obrak+'mods:recordContentSource>'
	+ bfont + replace_apos(document.forms[0].record_content_source.value) + efont 
	+ obrak+'/mods:recordContentSource>\r\n'
	);


ps[ps.length]= new String(obrak+'mods:recordCreationDate encoding="w3cdtf">'
	+ bfont + document.forms[0].record_creation_date.value + efont 
	+ obrak+'/mods:recordCreationDate>\r\n'
	);

ps[ps.length]= new String(obrak+'mods:languageOfCataloging>\r\n');

ps[ps.length]= new String(obrak+'mods:languageTerm type="code" authority="iso639-2b">'
	//+ bfont + document.forms[0].language_of_cataloging.value + efont 
	+ bfont + "eng" + efont 
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


/*----------------------------------------------------------*/
ps[ps.length]= new String(obrak+'mods:accessCondition type="useAndReproduction">'
	//+ bfont + document.forms[0].use_and_reproduction.value + efont 
	+ bfont + str_use_and_repro + efont 
	+ obrak+'/mods:accessCondition>\r\n'
	);
/*-----------------------------------------------------------------------*/



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


}///end function buildTagsArray_page_06()





///returns the ps array
function buildTagsArray_page_museum(N){
//alert("buildTagsArray_page_museum");
//N=0 no red, use '<' in xml tag
//N>0 insert red use '&#060;' (prev '&lt;')  in xml tag to make html viewable

var NI = 0;
if ( N == "0" ) { NI=0; } else { NI=1; }


var bfont= new String(BFONT[NI]);
var efont= new String(EFONT[NI]);
	var obrak= new String(OBRAK[NI]);

var ps=new Array();

//ps[ps.length] = new String("<-- page_07 -->");

/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n'); 




	

///////////////////////////////////////////////////// <mods:relatedItem type="constituent">
///////////////////////////////////////////////////// <mods:physicalDescription
///////////////////////////////////////////////////////////// <mods:form type="technique"
///////////////////////////////////////////////////////////// <mods:form type="medium"  

ps[ps.length]= new String(obrak+'mods:physicalDescription>\r\n');


ps[ps.length]= new String(obrak+'mods:form type="technique" authority="aat">'
	+ bfont + replace_apos(document.forms[0].museum_form_type_technique.value) + efont 
	+ obrak+'/mods:form>\r\n'
	);


ps[ps.length]= new String(obrak+'mods:form type="medium" authority="aat">'
	+ bfont + replace_apos(document.forms[0].museum_form_type_medium.value) + efont
	+ obrak+'/mods:form>\r\n'
	);


ps[ps.length]= new String(obrak+'/mods:physicalDescription>\r\n');

////////This field is being dropped
///////////////////////////////////////////////////// <mods:identifier type="accessionNumber"

/*-------------------------------------------------------------------------------------------
ps[ps.length]= new String(obrak+'mods:identifier type="accessionNumber">'
	+ bfont + replace_apos(document.forms[0].museum_accession_number.value) + efont
	+ obrak+'/mods:identifier>\r\n'
	);
---------------------------------------------------------------------------------------------*/

///////////////////////////////////////////////////// <mods:note type="museumCredits"


ps[ps.length]= new String(obrak+'mods:note type="museumCredits">'
	+ bfont + replace_apos(document.forms[0].museum_credit_line.value) + efont 
	+ obrak+'/mods:note>\r\n'
	);



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


}///end function buildTagsArray_page_museum()

