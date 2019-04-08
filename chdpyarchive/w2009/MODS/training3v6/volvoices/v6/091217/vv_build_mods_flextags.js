//vv_build_mods_flextags.js
//ps[ps.length]=new String(obrak+'mods:namePart type="family">'                        
//	+ bfont + replace_apos(document.forms[0].creator_lastname_01.value) + efont
//       + obrak +'/mods:namePart>\r\n'

//definitions from vv_compose_w2009.js to put in vv_built_mods_flextags.js:

var BFONT = new Array();
var EFONT = new Array();
var SPACE = new Array();
var OBRAK = new Array();
var BRTAG = new Array();

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

var N  = 1; //this should be passed from func that calls this stuff
var NI = 1;//make html viewable for testing NI=0 for download;
if ( N == "0" ) { NI=0; } else { NI=1; }

NI=0;//test download -- here pass outputN, oN

var bfont= new String(BFONT[NI]);
var efont= new String(EFONT[NI]);
var obrak= new String(OBRAK[NI]);


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

//outputN  [0 for download; 1 for html display
function build_page_01_tags(strN,outputN){

var oNI=new Number(outputN);//was NI

var bfont= new String(BFONT[oNI]);
var efont= new String(EFONT[oNI]);
var obrak= new String(OBRAK[oNI]);
var brtag= new String(BRTAG[oNI]);

var sN=new String(strN);

var sR=new String(brtag+obrak+'mods:name'); //sR =return string

var sT=new String('');//sT temp string
var sU=new String('');//second temp string
    sT='document.forms[0].name_type_'+sN+'.value';

if (eval(sT)!=""){ sR += ' type="' +eval(sT)+'"'; }
    sT='document.forms[0].name_authority_'+sN+'.value';

if (eval(sT)!=""){ sR += ' authority="' +eval(sT)+'"'; }
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
return(sR);
}
