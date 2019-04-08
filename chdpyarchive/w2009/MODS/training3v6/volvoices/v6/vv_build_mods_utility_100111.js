//vv_build_mods_utility.js from vv_build_mods_flextags.js

//ps[ps.length]=new String(obrak+'mods:namePart type="family">'                        
//	+ bfont + replace_apos(document.forms[0].creator_lastname_01.value) + efont
//       + obrak +'/mods:namePart>\r\n'

//definitions from vv_compose_w2009.js to put in vv_built_mods_flextags.js:

//function get_build_mods_definitions(nChoice){
//alert("get_build_mods_definitions(nChoice="+nChoice+") in vv_build_mods_utility.js");

//define XML COMMENT wrappers
//var BXMLC = new String("<!-- ");//begin XML comment
//var EXMLC = new String(" --->");//end   XML comment


//define global arrays
var BFONT = new Array();
var EFONT = new Array();
var SPACE = new Array();
var OBRAK = new Array();
var BRTAG = new Array();
var BXMLC = new Array();//begin XML comment
var EXMLC = new Array;//end   XML comment

BFONT[0] = new String("");
BFONT[1] = new String('<font color="a00000"><b>');
EFONT[0] = new String("");
EFONT[1] = new String('</b></font>');

SPACE[0] = new String("");
SPACE[1] = new String(' ');

OBRAK[0] = '<';
OBRAK[1] = '&lt;';

BRTAG[0] = new String("");
BRTAG[1] = new String('<BR>');

BXMLC[0] = new String("<!-- ");
BXMLC[1] = new String("&lt!-- ");
EXMLC[0] = new String("--->");
EXMLC[1] = new String("--->");


/*
var NI = 1;//make html viewable for testing NI=0 for text download;

NI = new Number(nChoice);

NI=0;//test download -- here pass outputN, oN

//You cannot determine values for bfont, efont, etc until after 
//the function is called.  See these function calls: 
// function buildTagsArray_header(downloadTypeN){
// function buildTagsArray_closer(downloadTypeN){
// function buildTagsArray_page_01(downloadTypeN,strN){

var bfont= new String(BFONT[NI]);
var efont= new String(EFONT[NI]);
var obrak= new String(OBRAK[NI]);
var brtag= new String(BRTAG[NI]);
var space= new String(SPACE[NI]);
*/

//}//end function get_build_mods_definitions(){


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

function buildTagsArray_header(downloadTypeN){

	var oNI=new Number(downloadTypeN);

	//alert("buildTagsArray_header in vv_build_mods_utility.js ");

	//         oNI = 1;//make html viewable for testing 
	//         oNI = 0 for text download;
	//downloadTypeN=0 no red, use '<' in xml tag
	//downloadTypeN>0 insert red use '&lt;' in xml tag to make html viewable

	var NI = 0;//for download text file
	    NI = 1;//make html viewable;
	
	var bfont= new String(BFONT[oNI]);
	var efont= new String(EFONT[oNI]);
	var obrak= new String(OBRAK[oNI]);
	var brtag= new String(BRTAG[oNI]);
        var space= new String(SPACE[oNI]);
        var bxmlc= new String(BXMLC[oNI]);
	var exmlc= new String(EXMLC[oNI]);
	var num = new Number(oNI);
/*--------------test w2009------------*/
	var commentFilename    = new String("");
	var commentNumTiffs    = new String("");
	var commentBeginDate   = new String("");
	var commentRecentDate  = new String("");
	var commentReloadStatus= new String("");
	var commentContributor = new String("");
	var commentInstitution = new String("");
	var commentProject     = new String("");
	var commentValidate    = new String("");

	var commentFilename    = "<!-- FILENAME: " +bfont+ parent.U.document.UF.VVcomment_01.value +efont+ " -->";
	var commentNumTiffs    = "<!-- Number of Constituent Files: " + parent.U.document.UF.VVcomment_02.value + " -->";
	var commentBeginDate   = "<!-- Record Creation Date: " + parent.U.document.UF.VVcomment_03b.value+ " -->";
	var commentRecentDate  = "<!-- Most Recent Record Creation Date: " + parent.U.document.UF.VVcomment_03d.value+ " -->";
	var commentReloadStatus= "<!-- Reload Status: " + parent.U.document.UF.VVcomment_03r.value+ " -->";
	var commentContributor = "<!-- Content Contributor: " + parent.U.document.UF.VVcomment_03c.value+ " -->";
	var commentInstitution = "<!-- Institution: " + parent.U.document.UF.VVcomment_03i.value+ " -->";
	var commentProject     = "<!-- Project: " + parent.U.document.UF.VVcomment_03p.value+ " -->";
	var commentValidate    = "<!-- PAGE VALIDATION " + parent.U.document.UF.VVcomment_04.value + " -->";

/*---------add xml comment wrappers
      
	commentFilename    = obrak+"!-- " + commentFilename     + " --->";
	commentNumTiffs    = bxmlc + commentNumTiffs     + exmlc;
	commentBeginDate   = bxmlc + commentBeginDate    + exmlc;
	commentRecentDate  = bxmlc + commentRecentDate   + exmlc;
	commentReloadStatus= bxmlc + commentReloadStatus + exmlc;
	commentContributor = bxmlc + commentContributor  + exmlc;
	commentInstitution = bxmlc + commentInstitution  + exmlc;
	commentProject     = bxmlc + commentProject      + exmlc;
	commentValidate    = bxmlc + commentValidate     + exmlc;
-----------------------------------*/

	//alert("commentFilename=\n"+commentFilename);
	//alert("commentDate=\n"+commentDate);
	//alert("commentNumTiffs="\n"+commentNumTiffs);
	if ( num >0 ) {
        	commentFilename     = commentFilename.replace(/\</g,"&#060;");
        	commentNumTiffs     = commentNumTiffs.replace(/\</g,"&#060;");
        	commentBeginDate    = commentBeginDate.replace(/\</g,"&#060;");
        	commentRecentDate   = commentRecentDate.replace(/\</g,"&#060;");
        	commentReloadStatus = commentReloadStatus.replace(/\</g,"&#060;");
        	commentContributor  = commentContributor.replace(/\</g,"&#060;");
        	commentInstitution  = commentInstitution.replace(/\</g,"&#060;");
        	commentProject      = commentProject.replace(/\</g,"&#060;");
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


/*
ps[ps.length] = new String(obrak+'!-- Volunteer Voices Workbook \r\n'
        +' version 1.0 released 6 February 2007 by Christine Haygood Deane  -->\r\n'
	);
*/

ps[ps.length] = new String(obrak+'!-- DLI MODS BETA Workbook \r\n'
        +' beta version 1.0 released 2 January 2010 by Christine Haygood Deane  -->\r\n');

/*------------------test w2009---------------*/
/*-------------------------------------------
new workbook form vars in upper frame

 validate_page_final, set to 1 for debug 
 validate_page_begin 
 validate_page_01 
 validate_page_02 
 validate_page_03 
 validate_page_04 
 validate_page_05//no validation needed 
 validate_page_06 
 validate_page_museum//no validation needed 
--------------------------------------------------------------------------------
Begin Page Form Elements 
 VVcomment_01 filename 
 VVcomment_02 # of constit files 
 VVcomment_03 last work date 
 VVcomment_03c cataloger 
 VVcomment_03p admin db institution 
 VVcomment_03d creation date 
 VVcomment_04 validation string 
 XMLBASE 
 XMLFILENAME...................................ADDED FOR NEW................ 
 numConstituentsTIFF default=1.................DEFAULT=1 FOR NEW............ 


---------------------------------------------*/

ps[ps.length] = new String(commentFilename+" \r\n"); 
ps[ps.length] = new String(commentNumTiffs+" \r\n"); 
ps[ps.length] = new String(commentBeginDate+" \r\n"); 
ps[ps.length] = new String(commentRecentDate+" \r\n"); 
ps[ps.length] = new String(commentReloadStatus+" \r\n"); 
ps[ps.length] = new String(commentContributor+" \r\n"); 
ps[ps.length] = new String(commentProject+" \r\n"); 
ps[ps.length] = new String(commentInstitution+" \r\n"); 
ps[ps.length] = new String(commentValidate+" \r\n"); 

/*
ps[ps.length] = new String(commentContributor+" \r\n"); 
ps[ps.length] = new String(commentProject+" \r\n"); 
ps[ps.length] = new String(commentDate+" \r\n"); 
ps[ps.length] = new String(commentFilename+" \r\n"); 
ps[ps.length] = new String(commentNumTiffs+" \r\n"); 
ps[ps.length] = new String(commentReloadDate+" \r\n"); 
ps[ps.length] = new String(commentValidate+" \r\n"); 
*/
/*-------------------------------------------------*/

ps[ps.length] = new String(obrak +'!-- END Test Header for w2009 Dec 17 2009 chd-->\r\n');
//ps[ps.length] = new String(brtag); //this no longer work because vps.length required >4
ps[ps.length]= new String(obrak+'!-- END HEADER --->\r\n'+brtag);


return(ps);


}///end function buildTagsArray_header()




function buildTagsArray_closer(downloadTypeN){

	var oNI=new Number(downloadTypeN);
	//downloadTypeN=0 no red, use '<' in xml tag
	//downloadTypeN>0 insert red use '&lt;' in xml tag to make html viewable

	//alert("buildTagsArray_closer in vv_build_mods_utility.js");


	var bfont= new String(BFONT[oNI]);
	var efont= new String(EFONT[oNI]);
	var obrak= new String(OBRAK[oNI]);
	var brtag= new String(BRTAG[oNI]);
        var space= new String(SPACE[oNI]);


var ps=new Array();

ps[ps.length]= new String(obrak+'!-- BEGIN CLOSER --->\r\n');
ps[ps.length]= new String(obrak+'/mods:mods>');
ps[ps.length]= new String(obrak+'!-- END CLOSER --->\r\n');

return(ps);

}///end function buildTagsArray_closer()





//outputN  [0 for download; 1 for html display

