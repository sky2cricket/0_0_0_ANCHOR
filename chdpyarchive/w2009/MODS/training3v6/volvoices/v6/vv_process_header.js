//vv_process_header.js
//from vv_process.js
//needed in process_header
var DATE = new Date();

//LINE 107
//=================================================================
function new_process_header(str,strConstituents) {
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
//LINE 374

