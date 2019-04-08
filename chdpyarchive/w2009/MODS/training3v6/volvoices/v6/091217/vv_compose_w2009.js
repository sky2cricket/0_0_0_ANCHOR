
//vv_compose_w2009.js from vv_compose_tags.js    Dec 16 2009
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


	alert("buildTagsArray_header in vv_compose_w2009.js ");

	//N=0 no red, use '<' in xml tag
	//N>0 insert red use '&lt;' in xml tag to make html viewable

	var NI = 0;
	    NI = 1;//make html viewable;
	if ( N == "0" ) { NI=0; } else { NI=1; }

	
	var bfont= new String(BFONT[NI]);
	var efont= new String(EFONT[NI]);
	var obrak= new String(OBRAK[NI]);
	var num = new Number(N);
/*--------------test w2009------------*/
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
/*--------------------------------------*/


var ps=new Array();


///document.write('<?xml version="1.0"  ?>\r\n'); 

/////////////////////////////////////////////////////header <mods:mods

ps[ps.length] = new String(obrak +'?xml version="1.0" encoding="UTF-8"  ?>\r\n'); 


/*---------------dec 14 2006 header-----------------------------------------------*/
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
/*---------------dec 14 2006 header--------------------------------------------*/


ps[ps.length] = new String(obrak+'!-- Volunteer Voices Workbook \r\n'
        +' version 1.0 released 6 February 2007 by Christine Haygood Deane  -->\r\n'
	);

/*------------------test w2009---------------*/

ps[ps.length] = new String(commentContributor+" \r\n"); 
ps[ps.length] = new String(commentProject+" \r\n"); 
ps[ps.length] = new String(commentDate+" \r\n"); 
ps[ps.length] = new String(commentFilename+" \r\n"); 
ps[ps.length] = new String(commentNumTiffs+" \r\n"); 
ps[ps.length] = new String(commentReloadDate+" \r\n"); 
ps[ps.length] = new String(commentValidate+" \r\n"); 
/*-------------------------------------------------*/

ps[ps.length] = new String(obrak +'!-- END Test Header for w2009 Dec 17 2009 chd-->\r\n');


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

///////creator_exist_01 = yes is REQUIRED but never appears in MODS tags

///use parent or display frame??? USE DISPLAY FRAME except for creator_exist
var display_creator_01_tags= new String("NO display_creator_01_tags");
if (parent.U.document.UF.creator_exist_01.value == "yes"){
	display_creator_01_tags=build_page_01_tags("01",NI);
	ps[ps.length]=display_creator_01_tags;
	}

var display_creator_02_tags= new String("NO display_creator_02_tags");
if (parent.U.document.UF.creator_exist_02.value == "yes"){
	display_creator_02_tags=build_page_01_tags("02",NI);
	ps[ps.length]=display_creator_02_tags;
	}

var display_creator_03_tags= new String("NO display_creator_03_tags");
if (parent.U.document.UF.creator_exist_03.value == "yes"){
	display_creator_03_tags=build_page_01_tags("03",NI);
	ps[ps.length]=display_creator_03_tags;
	}

var display_creator_04_tags= new String("NO display_creator_04_tags");
if (parent.U.document.UF.creator_exist_04.value == "yes"){
	display_creator_04_tags=build_page_01_tags("04",NI);
	ps[ps.length]=display_creator_04_tags;
	}
		
/////////end mods:name 3
////ps[ps.length] = new String(obrak+'/mods:name>\r\n');

///}//end if you have checked to have a value for creator # 3

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





