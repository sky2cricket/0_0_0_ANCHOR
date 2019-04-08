//vv_process.js

//page_lower.htm loaded once, never reloaded
//the arrays on this page are CONSTANTS



//needed in process_header
var DATE = new Date();
//var reload_debug = false;//true;



///========================================================================
///get the index for the SelectXMLPATH - from the filename comment 
//str parent.U.document.UF.VVcomment_01.value=comment_01Block;
///aTupleArray - array of dataTuple objects
///use getFilenameDirectoryIndex ( aSelectXMLPATH_index2a, b5 );
/// aSelectXMLPATH_index2a has correct slashes
function xxxxx_getFilenameDirectoryIndex ( aTupleArray, str ){

var s = new String(str);
/*
var msg = new String();
for(i=0;i<aTupleArray.length;i++){
msg += "\n "+aTupleArray[i].code +" : " +aTupleArray[i].tran;
}
alert("getFilenameDirectoryIndex \n\nstr="+str
+"\n\nmsg=\n"+msg);
*/
var j =0;
for ( j=0; j<aTupleArray.length; j++) {
		//alert("code: "+aTupleArray[j].code+"\n\ntran: "+aTupleArray[j].tran+"\n\ns="+s+"\n\ns.indexOf(aTupleArray[j].tran)="+s.indexOf(aTupleArray[j].tran));
	if (s.indexOf(aTupleArray[j].tran) > -1 ) {
		//alert("FOUND MATCH\n\ncode: "+aTupleArray[j].code+"\n\ntran: "+aTupleArray[j].tran);
		return(j);
		}
	}//end for
//if no match is found, return index=0
return(0);
}//end function getFilenameDirectoryIndex( aTupleArray, code )





///========================================================================
///just to make parsing easier
function getEntityData(str) {

var s = new String(str);
if (s.length > 0) {
    s = s.substring(s.indexOf(">"));
    s = s.substring(1);
    s = s.substring(0, s.indexOf("<"));
    }
return(s);
}

///========================================================================
///just to make parsing easier
function getDateQualifier(str) {

var s = new String(str);
if (s.length == 0) return ("");
if (s.indexOf('qualifier="')== -1) return("none");
    s = s.substring(s.indexOf('qualifier="'));
    s = s.substring(11);
    s = s.substring(0, s.indexOf('"'));
return(s);
}

///========================================================================
///just to make parsing easier
function getAuthority(str) {

var s = new String(str);
if (s.length > 0) {
    s = s.substring(s.indexOf('authority="'));
    s = s.substring(11);
    s = s.substring(0, s.indexOf('"'));
    }
return(s);
}

///========================================================================
///just to make parsing easier
function getType(str) {

var s = new String(str);
if (s.length > 0) {
    s = s.substring(s.indexOf('type="'));
    s = s.substring(6);
    s = s.substring(0, s.indexOf('"'));
    }
return(s);
}



///=========================reload vs. original================
///When Process Data in Text Area Page on Reload Page is clicked,
///RELOAD is set to true;
///get rid of this poor idea!
var RELOAD = false;


//=================================================================
function process_header(str,strConstituents) {
var s = new String(str);

    s = s.replace(/</g,":::<"); 
var a = new Array();
    a = s.split(":::");

var b1  = new String(a[1]);//xml versiion id required
var b2  = new String(a[2]);//mods:mods schema required
var b3  = new String(a[3]);//mods profile from melanie
var b4  = new String(a[4]);//mods workbook from cricket
var b5  = new String('');//FILENAME
var b6  = new String('');//Created by or Content Contributor
var b7  = new String('');//Admin DB Institution
var b8  = new String('');//Date of original record creation
var b9  = new String('');//NUMBER_OF_CONSTITUENT_FILES:
var b10 = new String('');//RELOAD date
var b11 = new String('');//PAGE VALIDATION

var bbb = new Array(
  "first array element"
, "xml version id"
, "mods schema"
, "mods profile comment"
, "mods workbook"
, "Content Contributor/created by"
, "Admin DB Inst/project"
, "Timestamp of orig record creation"
, "FILENAME"
, "Num Const Files"
, "Date of reload"
, "Page Validation"
)


var bba_msg = new String('');
var bbb_msg = new String('');
for(i=0;i<a.length;i++) {
//alert('a['+i+']='+a[i]+"\n\n"+bbb[i]);
bba_msg +="\n a["+i+"]="+a[i];
bbb_msg +="\n bbb["+i+"]="+bbb[i];
//if (a[i].indexOf('version="1.0"') > -1 ) 	b1  = a[i];//hardcoded
//if (a[i].indexOf('mods:mods') > -1)      	b2  = a[i];//hardcoded
//if (a[i].indexOf('MODS profile') > -1 )  	b3  = a[i];//hardcoded
//if (a[i].indexOf('Deane') > -1 && i<5 )  	b4  = a[i];//hardcoded
if (a[i].indexOf('FILENAME') > -1 )      	b5  = a[i];
if (a[i].indexOf('Content Contributor') > -1 
	|| a[i].indexOf('Created') > -1 ) 	b6  = a[i];
//if (a[i].indexOf('Project')> -1 )        	b7  = a[i];//calculate admin db institution
if (a[i].indexOf('Date:') > -1 
|| a[i].indexOf('Timestamp:')>-1 )         	b8  = a[i];
//if(a[i].indexOf('NUMBER_OF_CONSTITUENT')>-1)  b9  = a[i]; always calculate
//if (a[i].indexOf('Reload')>-1 || a[i].indexOf('RELOAD') > -1 ) b10 = a[i];//this function is called by reload, always calculate
if (a[i].indexOf('PAGE VALIDATION') > -1 ) 	b11 = a[i];
}//end for

bba_msg = bba_msg.substring(2);

//alert(bba_msg+"\n"+bbb_msg);

/*
alert("b1  ="+b1 
+"\na[1]="+a[1] 
+"\nbbb[1]="+bbb[1]+"\n" 
+"\nb2  ="+b2  
+"\na[2]="+a[2] 
+"\nbbb[2]="+bbb[2]+"\n" 
+"\nb3  ="+b3 
+"\na[3]="+a[3] 
+"\nbbb[3]="+bbb[3]+"\n" 
+"\nb4  ="+b4 
+"\na[4]="+a[4] 
+"\nbbb[4]="+bbb[4]+"\n" 
+"\nb5  ="+b5 
+"\na[5]="+a[5] 
+"\nbbb[5]="+bbb[5]+"\n" 
+"\nb6  ="+b6 
+"\na[6]="+a[6] 
+"\nbbb[6]="+bbb[6]+"\n" 
+"\nb7  ="+b7 
+"\na[7]="+a[7] 
+"\nbbb[7]="+bbb[7]+"\n" 
+"\nb8  ="+b8 
+"\na[8]="+a[8] 
+"\nbbb[8]="+bbb[8]+"\n" 
+"\nb9  ="+b9 
+"\na[9]="+a[9] 
+"\nbbb[9]="+bbb[9]+"\n" 
+"\nb10 ="+b10 
+"\na[10]="+a[10] 
+"\nbbb[10]="+bbb[10]+"\n" 
+"\nb11 ="+b11
+"\na[11]="+a[11] 
+"\nbbb[11]="+bbb[11]+"\n" 
);
*/

parent.U.document.UF.VVcomment_01.value = parent.L.fixDoubleBackSlashes(b5);
//alert("strConstituents="+strConstituents);

var c = new String(strConstituents);
    c = c.replace(/<mods:identifier/g,":::<mods:identifier");
var d = new Array();
    d = c.split(":::");

var numConstituents = d.length - 1;
b9 = "<!-- NUMBER_OF_CONSTITUENT_FILES: "+numConstituents+": -->";
parent.U.document.UF.VVcomment_02.value = b9;
parent.U.document.UF.numConstituentsTIFF.value=numConstituents;
//parent.U.document.UF.file_list_tiff.value=generate_file_list_tiff_reload() ;

b10 = "<!-- RELOAD: "+DATE+" -->";
parent.U.document.UF.VVcomment_03.value = b10;


var e = new String(b5);
	//alert("b5=e="+e);
    e = e.substring(e.indexOf('xml')+3);
	//alert("1 e="+e);

var e_index = e.indexOf('xml')-1;
var b_index = e_index -23;
          e = e.substring(b_index,e_index);

	//alert("2 e="+e);
var f = new Array();
    f = e.split("_");

//alert('e='+e);
//for (i=0;i<f.length;i++) { alert("f["+i+"]="+f[i]); }

parent.U.document.UF.XMLmaster_01.value=f[0];
parent.U.document.UF.XMLmaster_02.value=f[1];
parent.U.document.UF.XMLmaster_03.value=f[2];
parent.U.document.UF.XMLBASE.value = e.substring(0,19);

var testXMLBASE = new String(parent.U.document.UF.XMLBASE.value);
    testXMLBASE = testXMLBASE.substring(0,testXMLBASE.lastIndexOf("_"));


if ( parent.adb_username == "cricket.deane" || parent.adb_username == "jody"  ) {
	if(!confirm("Reload Check:"
		+"\n\n "+testXMLBASE+" : testXMLBASE from reload file "
		+"\n\n "+parent.adb_admindb_data+" : parent.adb_admindb_data from Admin DB "
		+"\n\n "+parent.U.document.UF.VVcomment_01.value
		+"\n\n The following reset will be performed by default if you click OK."
		+"\n\n parent.adb_admindb_data = testXMLBASE;"
		+"\n\n Do you wish to continue ??") ) {
		parent.U.document.UF.reset();
		return(0);
	}else{
		parent.adb_admindb_data = testXMLBASE;
	}
}


/*
if ( testXMLBASE != parent.adb_admindb_data ) {
if(confirm("Reload Check:"
	+"\n\n "+testXMLBASE+" : testXMLBASE from reload file "
	+"\n\n "+parent.adb_admindb_data+" : parent.adb_admindb_data from Admin DB "
	+"\n\n Do you wish to set parent.abd_admindb_data = testXMLBASE ??") ) {
	parent.U.document.UF.reset();
	parent.adb_admindb_data = testXMLBASE;
	alert(parent.adb_admindb_data+" = parent.adb_admindb_data\n"
             +testXMLBASE+" = testXMLBASE");
}else if(confirm("Reload Check:"
	+"\n\n "+testXMLBASE+" : testXMLBASE from reload file "
	+"\n\n "+parent.adb_admindb_data+" : parent.adb_admindb_data from Admin DB "
	+"\n\n Do you wish to set testXMLBASE = paren.adb_admindb_data??") ) {
	parent.U.document.UF.reset();
 	testXMLBASE= parent.adb_admindb_data;
	alert(parent.adb_admindb_data+" = parent.adb_admindb_data\n"
             +testXMLBASE+" = testXMLBASE");
}else{
	parent.U.document.UF.reset();
	return(0);
}
}
*/

if ( testXMLBASE != parent.adb_admindb_data ) {
	alert("Reload Exception:"
	+"\n\n "+testXMLBASE+" : XMLBASE from reload file "
	+"\n\n "+parent.adb_admindb_data+" : XMLBASE from Admin DB "
	+"\n\nYou must go back to the AdminDB and generate a workbook for your reload file \n\n "+testXMLBASE +"_0000.xml \n\nbefore you may continue.");
	parent.U.document.UF.reset();
	return(0);
}


parent.U.document.UF.file_list_tiff.value=generate_file_list_tiff_reload() ;


//record creation date - do this before changing b6
if (b8.length == 0 ) {//harvest b6 for old style date
var g = new String(b6);
    g = g.substring(g.indexOf("Workbook"));
    g = g.substring(8, g.indexOf("-->"));
    //alert("g="+g);
    b8 = "<!-- Timestamp: "+g+" -->";
}
b8 = b8.replace(/Date/g,"Timestamp");
parent.U.document.UF.VVcomment_03d.value = b8;


//ADMIN DB Institution - used for both b6 and b7
var InstName = new String();
    InstName = getTran(aInstitutionList, f[0]);

///////alert("InstName="+InstName);


////b6;// old style or new style depending on when built
///standardized to Content Contributor format
if ( b6.indexOf("Created")>-1) {
	b6 = "<!-- Content Contributor: "+InstName+" -->";
	}

parent.U.document.UF.VVcomment_03c.value = b6;


    /// change in v7 to 
    /// b7 = "<!-- Institution: "+InstName+" -->";
    b7 = "<!-- Admin DB Institution: "+InstName+" -->";
parent.U.document.UF.VVcomment_03p.value = b7;



var ii = 0;
ii = getFilenameDirectoryIndex ( aSelectXMLPATH_index2a, b5 );
parent.U.document.UF.XMLPATH.value = fixDoubleBackSlashes(aSelectXMLPATH_index2a[ii].tran);
parent.U.document.UF.XMLPATHFULL.value = fixDoubleBackSlashes(aSelectXMLPATH_index2a[ii].tran);
parent.U.document.UF.selectXMLPATH[aSelectXMLPATH_index2a[ii].code].selected = true;

//////PAGE VALIDATION//////if you dynamically write this, it must be done last
var strComment_04 = new String("");
var comment_04Block = new String("");

if (b11.indexOf("<!-- PAGE VALIDATION") == -1 ) {
	comment_04Block="<!-- PAGE VALIDATION :1:1:1:1:1:1:1: -->";
	strComment_04 = "<!-- PAGE VALIDATION :1:1:1:1:1:1:1: -->";
}else {
	var startComment_04 = b11.indexOf("<!-- PAGE VALIDATION");
	    strComment_04 = b11.substring(startComment_04);
	var endComment_04 = strComment_04.indexOf("-->")+3;
	    comment_04Block = strComment_04.substring(0,endComment_04);
}//end else
//////alert("comment_04Block=\n"+comment_04Block);

var a04 = new Array();
    a04 = comment_04Block.split(":");

parent.U.document.UF.validate_page_begin.value = a04[1];
parent.U.document.UF.validate_page_01.value    = a04[2];
parent.U.document.UF.validate_page_02.value    = a04[3];
parent.U.document.UF.validate_page_03.value    = a04[4];
parent.U.document.UF.validate_page_04.value    = a04[5];
parent.U.document.UF.validate_page_05.value    = a04[6];
parent.U.document.UF.validate_page_06.value    = a04[7];

parent.U.document.UF.VVcomment_04.value = comment_04Block;

return(1);
}


//==================================================================
//function generate_file_list_tiff_reload from 
//function generate_file_list_tiff() in page_begin.htm
//but not exactly the same

function generate_file_list_tiff_reload() {
var str = new String();

var N = 0;

//only load N if you have a good value
if (!isNaN(parent.U.document.UF.numConstituentsTIFF.value ) ) {
    N = Number(parent.U.document.UF.numConstituentsTIFF.value);
}else{
	parent.U.document.UF.numConstituentsTIFF.value = "0";
	return("");
}
var base = parent.U.document.UF.XMLBASE.value;
var append = new String();
var j=0, chop=0;
for ( i=0; i<N; i++ ) {
	j= i+1;
	append = "0000"+String(j);
	chop = append.length -4;
	append=append.substring(chop);
	///alert("tiff file: "+base+append);
	str += ","+base+append;
}
str = str.substring(1);
return str;
}//end function generate_file_list_tiff_reload() 


//==================================================================
//==================================================================
//==================================================================

///========================================================================
function process_title(str){
var s = new String(str);
s = s.substring(s.indexOf("mods:title>"));
s = getEntityData(s);
parent.U.document.UF.title.value=s;
return;
}
///========================================================================
function process_name(str,N){

var s = new String(str);
var radioStop = new String("parent.U.document.UF.creator_radio_0"+N+"[0].checked=true;");
//alert("radioStop=\n\n"+radioStop);

//this can only happen for name_02 and name_03
    if ( s.length == 0 ) {
	eval(radioStop);
	return;
	}

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");

//alert("N="+N+"\n\nstr=\n"+str);

var b1 = new String(a[1]);//entity id required
var b2 = new String(a[2]);//lastname required
var b3 = new String();//given name
var b4 = new String();//vital dates
var b5 = new String();//name description
var b6 = new String();//role required for name_01


for ( i=0;i<a.length;i++) {
	alert("function process_name()\na["+i+"]="+a[i]);
	if ( a[i].indexOf('type="given"')>-1 )      b3 = a[i];
	if ( a[i].indexOf('type="date"')>-1)        b4 = a[i];
	if ( a[i].indexOf('mods:description') >-1)  b5 = a[i];
	if ( a[i].indexOf('authority="marcrelator"')>-1) b6 = a[i];
	}


//everything but the name-type radio buttons are amenable to eval 
//because the name-type radio buttons are not same for name_01, name_02, name_03

		if (b1.indexOf(authority='"LCNAF"') > -1 ) {
			eval('parent.U.document.UF.name_authority_0'+N+'.value = "LCNAF"');
			eval('parent.U.document.UF.name_authority_0'+N+'_radio[1].checked= true');
		}else if(b1.indexOf(authority='"ULAN"') > -1 ) {
			eval('parent.U.document.UF.name_authority_0'+N+'.value = "ULAN"');
			eval('parent.U.document.UF.name_authority_0'+N+'_radio[2].checked= true');
		}else {
			eval('parent.U.document.UF.name_authority_01.value = "NONE"');
			eval('parent.U.document.UF.name_authority_0'+N+'_radio[0].checked= true');
		}
				

		if (b1.indexOf('type="personal"')> -1 ) {
			///given name, vital dates only allowed for personal name
			if (b3.length>0){
				b3 = getEntityData(b3);
				/*
				var ng_01 = new Array(); 
				ng_01 = b3.split(" ");
        			if (ng_01[0] != "undefined" ) {eval( 'parent.U.document.UF.creator_firstname_0'+N+'.value  = ng_01[0];'); }
        			if (ng_01[1] != "undefined" ) {eval( 'parent.U.document.UF.creator_middlename_0'+N+'.value = ng_01[1];'); }
        			}*/
				eval ('parent.U.document.UF.creator_firstname_0'+N+'.value = b3;');
				}
			if (b4.length>0){
				b4 = getEntityData(b4);
        			var db_01 = new Array; 
				db_01 = b4.split("-");
        			if (db_01[0] != "undefined" ) { eval('parent.U.document.UF.creator_dob_0'+N+'.value = db_01[0];'); }
        			if (db_01[1] != "undefined" ) { eval('parent.U.document.UF.creator_dod_0'+N+'.value = db_01[1];'); }
        			}
		}

		eval('parent.U.document.UF.creator_lastname_0'+N+'.value = getEntityData(b2);');
		eval('parent.U.document.UF.creator_description_0'+N+'.value = getEntityData(b5);');
		eval('parent.U.document.UF.creator_role_0'+N+'.value = getEntityData(b6);');


//alert("process_name("+str+","+N+")" +"\n b1 = "+b1 +"\n b2 = "+b2 +"\n b3 = "+b3 +"\n b4 = "+b4 +"\n b5 = "+b5 +"\n b6 = "+b6);

switch (N) {
	case 1://name_01
				
		if (b1.indexOf('type="personal"')> -1 ) {
			parent.U.document.UF.creator_radio_01[0].checked = true;
		}else if (b1.indexOf('type="corporate"')>-1 ) {
			parent.U.document.UF.creator_radio_01[1].checked = true;
		}else if (b2.indexOf('>unknown<')>-1 ) {
			parent.U.document.UF.creator_radio_01[2].checked = true;
		}else if (b2.indexOf('>anonymous<')>-1 ) {
			parent.U.document.UF.creator_radio_01[2].checked = true;
		}
		
	break;
	case 2://name_02
				
		if (b1.indexOf('type="personal"')> -1 ) {
			parent.U.document.UF.creator_radio_02[1].checked = true;
		}else if (b1.indexOf('type="corporate"')>-1 ) {
			parent.U.document.UF.creator_radio_02[2].checked = true;
		}

	break;
	case 3://name_03
		if (b1.indexOf('type="personal"')> -1 ) {
			parent.U.document.UF.creator_radio_03[1].checked = true;
		}else if (b1.indexOf('type="corporate"')>-1 ) {
			parent.U.document.UF.creator_radio_03[2].checked = true;
		}
				
	break;
}//end switch

return;
}// function process_name(N)

///========================================================================
function process_originInfo(str) {

//alert("process_originInfo str:\n"+str);
var s = new String(str);
    if ( s.length == 0 ) { return (""); }
    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");



var b1 = new String(a[1]);//entity id required
var b2 = new String(""); //dateCreated
var b3 = new String(""); //dateRange begin
var b4 = new String(""); //dateRange end
var b5 = new String(""); //place of origin
var b6 = new String(""); //dateIssued
var b7 = new String(""); //publisher

for ( i=0;i<a.length;i++) {
	//alert("a["+i+"]="+a[i]);
	if ( a[i].indexOf('mods:dateCreated')>-1 && a[i].indexOf('point=') == -1 )          b2 = a[i];
	if ( a[i].indexOf('mods:dateCreated')>-1 && a[i].indexOf('point="start"') > -1 )    b3 = a[i];
	if ( a[i].indexOf('mods:dateCreated')>-1 && a[i].indexOf('point="end"') > -1 )      b4 = a[i];
	if ( a[i].indexOf('mods:placeTerm')>-1  )                                           b5 = a[i];
	if ( a[i].indexOf('mods:dateIssued')>-1 )                                           b6 = a[i];
	if ( a[i].indexOf('mods:publisher')>-1  )         				    b7 = a[i];
	}


//alert("process_name("+str+")" +"\n b1 = "+b1 +"\n b2 = "+b2 +"\n b3 = "+b3 +"\n b4 = "+b4 +"\n b5 = "+b5 +"\n b6 = "+b6+"\nb7="+b7);

parent.U.document.UF.date_created.value = getEntityData(b2);
parent.U.document.UF.date_createdQ.value = getDateQualifier(b2);
parent.U.document.UF.date_created_begin.value = getEntityData(b3);
parent.U.document.UF.date_created_beginQ.value = getDateQualifier(b3);
parent.U.document.UF.date_created_end.value = getEntityData(b4);
parent.U.document.UF.date_created_endQ.value = getDateQualifier(b4);
parent.U.document.UF.place_of_origin.value = getEntityData(b5)
parent.U.document.UF.date_issued.value = getEntityData(b6);
parent.U.document.UF.date_issuedQ.value = getDateQualifier(b6);

var pub = getEntityData(b7);
if ( pub.length > 0 ) {//there is data for publisher name, addr
	var pubIndex = pub.indexOf(",");//first comma, ignore others
	if ( pubIndex > -1 ) {
		parent.U.document.UF.publisher_name.value = pub.substring(0,pubIndex);
        	pubIndex+=2;
		parent.U.document.UF.publisher_address.value = pub.substring(pubIndex);
	}else {
		parent.U.document.UF.publisher_name.value = pub;
	}
	parent.U.document.UF.publisher_name_radio[0].checked = true;
}else{//no publisher name, set radio button
	parent.U.document.UF.publisher_name_radio[1].checked = true;
}

return;

}//end function process_originInfo


///========================================================================
function process_language(str) {

//alert("process_language str:\n"+str);
var s = new String(str);
    if ( s.length == 0 ) { return (""); }

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");

var b1 = new String(a[1]);//entity id required
var b2 = new String(a[2]); //mods:languageTerm

//alert("process_language(str)\nstr=\n"+str+"\nb1="+b1+"\nb2="+b2)

parent.U.document.UF.language.value= getEntityData(b2);
parent.U.document.UF.language_display.value = getTran(aLanguage,parent.U.document.UF.language.value);

}//end function process_language

///========================================================================

function process_typeOfResource(str){
var strTor = new String(str);
var aTor   = strTor.split('<mods');

//initialize this array so all array elements have a value
var eTor = new Array(
new String('')
,new String('')
,new String('')
,new String('')
);

//put new values into eTor array elements 
for (i=0;i<aTor.length;i++) {
aTor[i]='<mods'+aTor[i];
eTor[i]=getEntityData(aTor[i]);
//alert('aTor['+i+']='+aTor +"\n\neTor["+i+"]="+eTor[i]);
}

parent.U.document.UF.type_of_resource_01.value=eTor[1];
parent.U.document.UF.type_of_resource_02.value=eTor[2];
parent.U.document.UF.type_of_resource_03.value=eTor[3];

}//end function process_typeOfResource


///========================================================================
function process_genre(str) {

//alert("process_genre str:\n"+str);
var s = new String(str);
if ( s.length == 0 ) return;

parent.U.document.UF.mods_genre_authority.value = getAuthority(s);
parent.U.document.UF.mods_genre.value = getEntityData(s);

switch(parent.U.document.UF.mods_genre_authority.value){
	case "aat": 
		parent.U.document.UF.mods_genre_radio[0].checked = true;
	break;
	case "nmc":
		parent.U.document.UF.mods_genre_radio[1].checked = true;
	break;
	case "marcgt":
		parent.U.document.UF.mods_genre_radio[2].checked = true;
	break;
}//end switch
return;
}//end function process_genre


///========================================================================
function process_physicalDescription(str) {

//alert("process_physicalDescription str:\n"+str);
var s = new String(str);

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");

var b1 = new String(a[1]);//entity id required
var b2 = new String('');//mods:form type="technique" museum technique
var b3 = new String('');//mods:form type="medium" museum medium
var b4 = new String('');//mods:digital origin -fixed -do nothing
var b5 = new String('');//mods:internetMediaType -fixed -do nothing
var b6 = new String('');//extent

for(i=2;i<a.length;i++) {

if (a[i].indexOf('type="technique"')> -1 )      b2=a[i];
if (a[i].indexOf('type="medium"')> -1 )         b3=a[i];
if (a[i].indexOf('mods:digitalOrigin')> -1 )    b4=a[i];
if (a[i].indexOf('mods:internetMediaType')>-1 ) b5=a[i];
if (a[i].indexOf('mods:extent')>-1)             b6=a[i];
}

parent.U.document.UF.museum_form_type_technique.value =getEntityData(b2);
parent.U.document.UF.museum_form_type_medium.value    =getEntityData(b3);

b6 = getEntityData(b6);
b6 = b6.replace(/digital images/gi,"");
b6 = b6.replace(/digital image/gi,"");
if (b6.length>0) {
     var db_01 = new Array; 
     db_01 = b6.split(";");
	//alert("db_01.length="+db_01.length);
     if (db_01[0] != "undefined" ) { parent.U.document.UF.extent_pages.value = db_01[0]; }
     if (db_01.length > 1 ) {
     	if (db_01[1] != "undefined" ) { parent.U.document.UF.extent_number_of_objects.value = db_01[1]; }
     }
     if (db_01.length > 2 ) {
     	if (db_01[2] != "undefined" ) { parent.U.document.UF.extent_dimensions.value = db_01[2]; }
     }
}


return;
}//end function process_physicalDescription

///========================================================================
function process_abstract(str) {

//alert("process_abstract str:\n"+str);
var s = new String(str);
    if ( s.length == 0 ) { return (""); }

parent.U.document.UF.mods_genre_abstract.value= getEntityData(s);

}//end function process_abstract


///========================================================================
function process_subject_lcsh(str) {

//alert("process_subject_lcsh str:\n"+str);
var s = new String(str);

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");


//var b1 = new String(a[1]);//entity id required

var btop = new Array();
var bgeo = new Array();
var bnam = new Array();
var btem = new Array();

btop[0] = new String('');//topic 1
btop[1] = new String('');//topic 2
btop[2] = new String('');//topic 3
bgeo[0] = new String('');//geo 1
bgeo[1] = new String('');//geo 2
bnam[0] = new String('');//mods:name - wrapper
bnam[1] = new String('');//name 1
bnam[2] = new String('');//mods:name - wrapper
bnam[3] = new String('');//name 2
btem[0] = new String('');//temporal 1
btem[1] = new String('');//temporal 2

var btopIndex=0;
var bgeoIndex=0;
var bnamIndex=0;
var btemIndex=0;


for(i=0;i<a.length;i++) {
//alert('a['+i+']='+a[i]);

if ( a[i].indexOf('mods:topic')>-1)      btop[btopIndex++]=a[i];
if ( a[i].indexOf('mods:geographic')>-1) bgeo[bgeoIndex++]=a[i];
if ( a[i].indexOf('mods:name')>-1)       bnam[bnamIndex++]=a[i];
if ( a[i].indexOf('mods:temporal')>-1)   btem[btemIndex++]=a[i];
}

parent.U.document.UF.subject_topic_lcsh_01.value = getEntityData(btop[0]);
parent.U.document.UF.subject_topic_lcsh_02.value = getEntityData(btop[1]);
parent.U.document.UF.subject_topic_lcsh_03.value = getEntityData(btop[2]);


parent.U.document.UF.subject_name_lcsh_01.value = getEntityData(bnam[1]);
parent.U.document.UF.subject_name_lcsh_02.value = getEntityData(bnam[3]);


parent.U.document.UF.subject_geographic_lcsh_01.value = getEntityData(bgeo[0]);
parent.U.document.UF.subject_geographic_lcsh_02.value = getEntityData(bgeo[1]);

parent.U.document.UF.subject_temporal_lcsh_01.value = getEntityData(btem[0]);
parent.U.document.UF.subject_temporal_lcsh_02.value = getEntityData(btem[1]);

return;
}//end function process_subject_lcsh(str) 


///========================================================================
function process_subject_tgm(str) {

//alert("process_subject_tgm str:\n"+str);
var s = new String(str);

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");

var b1 = new String(a[1]);//entity id required
var b2 = new String('');//tgm topic 1
var b3 = new String('');//tgm topic 2
var b4 = new String('');//tgm topic 3

for(i=0;i<a.length;i++) {
//alert('a['+i+']='+a[i]);

}

parent.U.document.UF.subject_topic_tgm_01.value = getEntityData(a[2]);
parent.U.document.UF.subject_topic_tgm_02.value = getEntityData(a[3]);
parent.U.document.UF.subject_topic_tgm_03.value = getEntityData(a[4]);


}//end function process_subject_tgm(str) 

///========================================================================
function process_subject_vv(str) {


//alert("process_subject_vv str:\n"+str);
var s = new String(str);

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");

//var b1 = new String(a[1]);//entity id required

var btopB = new Array();
var btopD = new Array();
var bgeo = new Array();
var btem = new Array();
btopB[0] = new String('');//topic B1
btopB[1] = new String('');//topic B2
btopD[0] = new String('');//topic D1
btopD[1] = new String('');//topic D2
btopD[2] = new String('');//topic D3
bgeo[0] = new String('');//geo 1
bgeo[1] = new String('');//geo 2
btem[0] = new String('');//temporal 1
//btem[1] = new String('');//temporal 2
var btopBIndex=0;
var btopDIndex=0;
var bgeoIndex=0;
var btemIndex=0;

for(i=0;i<a.length;i++) {
//alert('a['+i+']='+a[i]);
if ( a[i].indexOf('mods:temporal')>-1 ) btem[btemIndex++]=a[i];
if ( a[i].indexOf('mods:topic')>-1 && a[i].indexOf("D.") == -1) btopB[btopBIndex++] = a[i];
if ( a[i].indexOf('mods:topic')>-1 && a[i].indexOf("D.")  > -1) btopD[btopDIndex++] = a[i];
if ( a[i].indexOf('mods:geographic')>-1 ) bgeo[bgeoIndex++]=a[i];
}


//fixT0, fixB0, fixB1 take care of A<==>B problem in early data
var fixT0 = new String(getEntityData(btem[0]));
if (fixT0.length>0) {
    //if ( fixT0.indexOf ("B.")> -1 ) { fixT0 = "A"+fixT0.substring(1); }
    fixT0 = "A"+fixT0.substring(1); 
parent.U.document.UF.subject_temporal_vv_01.value = fixT0;
parent.U.document.UF.subject_temporal_vv_01_display.value = getTran(aVVtemporal,parent.U.document.UF.subject_temporal_vv_01.value);
}

var fixB0 = new String(getEntityData(btopB[0]));
if (fixB0.length>0) {
    //if ( fixB0.indexOf ("A.")> -1 ) { fixB0 = "B"+fixB0.substring(1); }
    fixB0 = "B"+fixB0.substring(1); 
parent.U.document.UF.subject_topic_vv_01.value = fixB0;
parent.U.document.UF.subject_topic_vv_01_display.value = getTran(aVVtopic,parent.U.document.UF.subject_topic_vv_01.value);
}

var fixB1 = new String(getEntityData(btopB[1]));
if (fixB1.length>0) {
    //if ( fixB1.indexOf ("A.")> -1 ) { fixB1 = "B"+fixB1.substring(1); }
    fixB1 = "B"+fixB1.substring(1); 
parent.U.document.UF.subject_topic_vv_02.value = fixB1; 
parent.U.document.UF.subject_topic_vv_02_display.value = getTran(aVVtopic,parent.U.document.UF.subject_topic_vv_02.value);
}


parent.U.document.UF.subject_topic_vv_03.value = getEntityData(btopD[0]);
parent.U.document.UF.subject_topic_vv_03_display.value = getTran(aVVbroadtopic,parent.U.document.UF.subject_topic_vv_03.value);

parent.U.document.UF.subject_topic_vv_04.value = getEntityData(btopD[1]);
parent.U.document.UF.subject_topic_vv_04_display.value = getTran(aVVbroadtopic,parent.U.document.UF.subject_topic_vv_04.value);

parent.U.document.UF.subject_topic_vv_05.value = getEntityData(btopD[2]);
parent.U.document.UF.subject_topic_vv_05_display.value = "eee";
parent.U.document.UF.subject_topic_vv_05_display.value = getTran(aVVbroadtopic,parent.U.document.UF.subject_topic_vv_05.value);


parent.U.document.UF.subject_geographic_vv_01.value = getEntityData(bgeo[0]);
parent.U.document.UF.subject_geographic_vv_01_display.value = getTran(aVVcounty,parent.U.document.UF.subject_geographic_vv_01.value);

parent.U.document.UF.subject_geographic_vv_02.value = getEntityData(bgeo[1]);
parent.U.document.UF.subject_geographic_vv_02_display.value = getTran(aVVcounty,parent.U.document.UF.subject_geographic_vv_02.value);



return;

}//end function process_subject_vv(str) 

///========================================================================
function process_subject_spc(str) {

//alert("process_subject_spc str:\n"+str);
var s = new String(str);

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");

var b = new Array();
//var b1 = new String(a[1]);//entity id required
b[0] = new String('');//spc topic 1
b[1] = new String('');//spc topic 2
b[2] = new String('');//spc topic 3
var bIndex =0;

for(i=0;i<a.length;i++) {
//alert('a['+i+']='+a[i]);
if (a[i].indexOf('mods:topic')>-1) b[bIndex++]=a[i];
}

parent.U.document.UF.subject_topic_spc_01.value = getEntityData(b[0]);
parent.U.document.UF.subject_topic_spc_01_display.value = getTran(aSPCtopic,parent.U.document.UF.subject_topic_spc_01.value);
parent.U.document.UF.subject_topic_spc_02.value = getEntityData(b[1]);
parent.U.document.UF.subject_topic_spc_02_display.value = getTran(aSPCtopic,parent.U.document.UF.subject_topic_spc_02.value);
parent.U.document.UF.subject_topic_spc_03.value = getEntityData(b[2]);
parent.U.document.UF.subject_topic_spc_03_display.value = getTran(aSPCtopic,parent.U.document.UF.subject_topic_spc_03.value);

return;
}//end function process_subject_spc(str) 


///========================================================================
function process_subject_none(str) {

//alert("process_subject_none str:\n"+str);
var s = new String(str);

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");

var b = new Array();
//var b1 = new String(a[1]);//entity id required
b[0] = new String('');// key topic 1
b[1] = new String('');// key name 
b[2] = new String('');// key geo
b[3] = new String('');// key temporal 

for(i=0;i<a.length;i++) {
//alert('a['+i+']='+a[i]);
if ( a[i].indexOf('mods:topic')      > -1 ) b[0] = a[i];
if ( a[i].indexOf('mods:namePart')   > -1 ) b[1] = a[i];
if ( a[i].indexOf('mods:geographic') > -1 ) b[2] = a[i];
if ( a[i].indexOf('mods:temporal')   > -1 ) b[3] = a[i];
}

parent.U.document.UF.subject_topic_none_01_desc.value    = getEntityData(b[0]);
parent.U.document.UF.subject_name_none_01_desc.value     = getEntityData(b[1]);
parent.U.document.UF.subject_geographic_none_01.value    = getEntityData(b[2]);
parent.U.document.UF.subject_temporal_none_01_desc.value = getEntityData(b[3]);
return;

}//end function process_subject_none(str) 


///========================================================================
function process_location(str) {

//alert("process_location str:\n"+str);
var s = new String(str);

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");

var b1 = new String(''); // repository
var b2 = new String(''); // city
var b3 = new String(''); // state
var b4 = new String(''); // county
var b5 = new String(''); // collection name
var b6 = new String(''); // collection_id_number 
var NT = new String(''); // collection_id_number_type
var b7 = new String(''); // detail 
//var b8 = new String(''); // url



for(i=0;i<a.length;i++) {
//alert('a['+i+']='+a[i]);
if ( a[i].indexOf('type="repository"')> -1 ) b1 = a[i];
if ( a[i].indexOf('type="city"')      > -1 ) b2 = a[i];
if ( a[i].indexOf('type="state"')     > -1 ) b3 = a[i];
if ( a[i].indexOf('type="county"')    > -1 ) b4 = a[i];     
if ( a[i].indexOf('type="collection"')> -1 ) b5 = a[i];
if ( a[i].indexOf('Number"')          > -1 ) b6 = a[i];
if ( a[i].indexOf('type="detail"')    > -1 ) b7 = a[i];
//if ( a[i].indexOf('mods:url')         > -1 ) b8 = a[i];//not passed
}

parent.U.document.UF.physical_location_repository.value     = getEntityData(b1);
parent.U.document.UF.physical_location_city.value           = getEntityData(b2);
parent.U.document.UF.physical_location_state.value          = getEntityData(b3);
parent.U.document.UF.physical_location_county.value         = getEntityData(b4);
parent.U.document.UF.physical_location_county_display.value = getTran(aVVcounty,parent.U.document.UF.physical_location_county.value);
parent.U.document.UF.collection_id_name.value               = getEntityData(b5);
if ( b6.length>0) {
	parent.U.document.UF.collection_id_number.value     = getEntityData(b6);
	NT = getType(b6);
	var ii = getCode(aCollection_id_num_type,NT);
	//alert("collection_id_number_type="+NT+"\nii="+ii);
	parent.U.document.UF.collection_id_num_type[ii].selected = true;
	}
parent.U.document.UF.physical_location_detail.value         = getEntityData(b7);
	
return;
}//end function process_location(str)


///========================================================================
function process_note(str) {

//alert("process_note str:\n"+str);
var s = new String(str);
    if ( s.length == 0 ) { return (""); }

parent.U.document.UF.museum_credit_line.value= getEntityData(s);

return;

}//end function process_note


///========================================================================
function process_recordInfo(str) {

//alert("process_recordInfo str:\n"+str);
var s = new String(str);

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");

var b1 = new String(''); // record_content_source (contribution institution)
var b2 = new String(''); // record_creation_date

for(i=0;i<a.length;i++) {
//alert('a['+i+']='+a[i]);
if ( a[i].indexOf('mods:recordContentSource')> -1 ) b1 = a[i];
if ( a[i].indexOf('mods:recordCreationDate')      > -1 ) b2 = a[i];
}

parent.U.document.UF.record_content_source.value = getEntityData(b1);
parent.U.document.UF.record_creation_date.value  = getEntityData(b2);

return;
}///end function process_recordInfo(str)



///========================================================================
///========================================================================
///========================================================================


