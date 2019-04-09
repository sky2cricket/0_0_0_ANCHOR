/*
<!--
    This code is issued under the GNU General Public License, 
    version 3, 29 June 2007.

    The DLC-MODS Workbook provides a series of web pages to help you 
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

//vv_process.js

//page_lower.htm loaded once, never reloaded
//the arrays on this page are CONSTANTS




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


//=================================================================
function process_header() {
//check loading into upper frame
//header contains 26 form elements
alert("vv_process.js\nfunction process_header()");

for (i=0;i<26;i++) {
if (parent.U.document.UF.elements[i].value == "" ) return (0);//bad header
}

return (1); //good header

}



//==================================================================
//==================================================================
//==================================================================

///========================================================================



function process_title_non_sort(str){
var s = new String(str);
s = s.substring(s.indexOf("mods:nonSort>"));
s = getEntityData(s);
parent.U.document.UF.title_non_sort.value=s;
return;
}

function process_title(str){
var s = new String(str);
s = s.substring(s.indexOf("mods:title>"));
s = getEntityData(s);
parent.U.document.UF.title.value=s;
return;
}


function process_title_sub_title(str){
var s = new String(str);
s = s.substring(s.indexOf("mods:subTitle>"));
s = getEntityData(s);
parent.U.document.UF.title_sub_title.value=s;
return;
}

function process_title_part_number(str){
var s = new String(str);
s = s.substring(s.indexOf("mods:partNumber>"));
s = getEntityData(s);
parent.U.document.UF.title_part_number.value=s;
return;
}

function process_title_part_name(str){
var s = new String(str);
s = s.substring(s.indexOf("mods:partName>"));
s = getEntityData(s);
parent.U.document.UF.title_part_name.value=s;
return;
}

///========================================================================
/*-----------------------------------------------------------------------------*/
/////////dynamic name blocks are different so get custom function
/////////usage: something= getNameBlocks(chompStr);
/////////or     parent.L.getNameBlocks(chompStr);
/////////returns a string
function getNameBlocks( fromStr) {

//initialize empty string array
var A = new Array(
 "empty_string" //A[0]=mods:name type
,"empty_string" //A[1]=mods:name authority
,"empty_string" //A[2]=mods:name lastname
,"empty_string" //A[3]=mods:namePart type="given" given name
,"empty_string" //A[4]=mods:namePart type="termsOfAddress" toa
,"empty_string" //A[5]=mods:role
,"empty_string"+parent.U.split_token+"empty_string"
                //A[6]=mods:namePart type="date" dob::::::dod parsed above
,"empty_string" //A[7]=mods:end - imaginary delimiter END_NAME_BLOCK_0counter
);
var s0 = fromStr;
    s0 = s0.substring(s0.indexOf("<mods:name"));
    s0 = s0.substring(0, s0.indexOf("<mods:originInfo"));

//alert("now in vv_process.js\ns0=\n"+s0);
s0 = s0.replace(/<mods:roleTerm authority="marcrelator" type="text">/g,";");
s0 = s0.replace(/<\/mods:roleTerm>\r\n/g,"");
s0 = s0.replace(/<mods:role>\r\n/g,"<mods:role>");
s0 = s0.replace(/<mods:role>;/g,"<mods:role>");
s0 = s0.replace(/<\/mods:name>/g,"</mods:name><mods:end>END_NAME_BLOCK_0");

var numNameBlocks = new Number(parent.U.document.UF.numNameBlocks.value);
//alert("There are "+numNameBlocks+" name blocks.\n\n "+s0);


var M = new Array();
    M = s0.split("<mods:");
var Mmsg =  new String("Mmsg:");
var Amsg =  new String("");
var s = new String();
var temp = new String();
for (i=1;i<M.length;i++) {
        mmm=M[i];
        if (M[i].indexOf('type="date"')>-1) { //date parsing here
                M[i]=M[i].replace(/-/,parent.U.split_token);
                }
        M[i]="<mods:"+M[i];
        Mmsg += "\n M["+i+"]="+M[i];
        }
//alert(Mmsg);
var name_block_count=0;
/*-----------------------------------------------------------------*/
//Yes, this is clunky but how else to populate a sparse matrix?
        for(m=1;m<M.length;m++) {//check each M[m]
                //=== A[0], A[1] ============
                if (M[m].indexOf('type="personal"')>-1) {
                        A[0]="personal";
                        if(M[m].indexOf('authority="ULAN"')>-1) {
                                A[1]="ULAN";
                        }else if(M[m].indexOf('authority="LCNAF"')>-1) {
                                A[1]="LCNAF";
                        }
                }else if (M[m].indexOf('type="corporate"')>-1) {
                        A[0]="corporate";
                        if(M[m].indexOf('authority="LCNAF"')>-1) {
                                A[1]="LCNAF";
                        }
                }else if (M[m].indexOf('type="conference"')>-1){
                        A[0]="conference";
                }
                //=== A[2] =================
                if (M[m].indexOf("<mods:namePart>") >-1){
                            temp = M[m].substring(M[m].indexOf(">") );
                            temp = temp.substring(1,temp.indexOf("<"));
                        A[2]=temp;
                }else if (M[m].indexOf('<mods:namePart type="family"')>-1){
                            temp = M[m].substring(M[m].indexOf(">") );
                            temp = temp.substring(1,temp.indexOf("<"));
                        A[2]=temp;
                }
                //=== A[3] =================
                if (M[m].indexOf('<mods:namePart type="given"')>-1){
                            temp = M[m].substring(M[m].indexOf(">") );
                            temp = temp.substring(1,temp.indexOf("<"));
                        A[3]=temp;
                }
                //=== A[4] =================
                if (M[m].indexOf('<mods:namePart type="termsOfAddress"')>-1){
                            temp = M[m].substring(M[m].indexOf(">") );
                            temp = temp.substring(1,temp.indexOf("<"));
                        A[4]=temp;
                }
                //=== A[5] =================
                if (M[m].indexOf('<mods:role>')>-1){
                            temp = M[m].substring(M[m].indexOf(">") );
                            temp = temp.substring(1,temp.indexOf("<"));
                        A[5]=temp;
                }
                //=== A[6] =================
                if (M[m].indexOf('<mods:namePart type="date"')>-1){
                            temp = M[m].substring(M[m].indexOf(">") );
                            temp = temp.substring(1,temp.indexOf("<"));
                            A[6]=temp;
                }
                //=== A[7] =========================
                if (M[m].indexOf("END_NAME_BLOCK")>-1){
                        temp = M[m];
                        temp = temp.replace(/<mods:end>/g,"");
                        temp = temp.replace(/\r\n/g,"");
                        temp = temp + name_block_count;
                        A[7]=temp;
                        name_block_count++;
                        Amsg="Amsg:";
                        for(i=0;i<8;i++){
                        Amsg+="\n A["+i+"]="+A[i];
                        s += parent.U.split_token +A[i];
                        }
                        //alert("----------------------------------------------------\n"+Amsg);
                        for(i=0;i<9;i++) {
                        A[i]="empty_string";
                        } //reset array
                        A[6]= "empty_string"+parent.U.split_token+"empty_string";
                }      
        }//end for m


/*----------------------------------------------------------*/
s = s.substring(parent.U.split_token.length);
//alert("s=\n"+s);

//this is the final action
parent.U.document.UF.name_block_list.value=s;

var MEB = new String(s);

return (MEB);
}//end function getNameBlocks
/*-----------------------------------------------------------------------------*/






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

var b6role = new Array();
var b6roleCombo = new String(";");

b6="mods:roleTerm-----------------------------------\n";
for ( i=0;i<a.length;i++) {
	//alert("a["+i+"]="+a[i]);
	if ( a[i].indexOf('type="given"')>-1 )      b3 = a[i];
	if ( a[i].indexOf('type="date"')>-1)        b4 = a[i];
	if ( a[i].indexOf('mods:description') >-1)  b5 = a[i];
	if ( a[i].indexOf('authority="marcrelator"')>-1){ 
		b6 += a[i];
		b6rLen = b6role.length;
		b6role[b6role.length]=getEntityData(a[i]);
		//alert("b6role["+b6rLen+"]="+b6role[b6rLen]);
		b6roleCombo += ";" + b6role[b6rLen];
		}
	}

b6roleCombo = b6roleCombo.substring(2); //drop first two characters ";;"
//alert ("b6roleCombo="+b6roleCombo);

b6+="\nmods:roleTerm-----------------------------------\n";

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
				var ng_01 = new Array(); 
				ng_01 = b3.split(" ");
        			if (ng_01[0] != "undefined" ) {eval( 'parent.U.document.UF.creator_firstname_0'+N+'.value  = ng_01[0];'); }
        			if (ng_01[1] != "undefined" ) {eval( 'parent.U.document.UF.creator_middlename_0'+N+'.value = ng_01[1];'); }
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
		//eval('parent.U.document.UF.creator_role_0'+N+'.value = getEntityData(b6);');
		eval('parent.U.document.UF.creator_role_0'+N+'.value = b6roleCombo;');


/*
alert("process_name("+str+","+N+")" +"\n b1 = "+b1 +"\n b2 = "+b2 +"\n b3 = "+b3 +"\n b4 = "+b4 +"\n b5 = "+b5 
	+"\n b6 = "+b6+"\n b6roleCombo="+b6roleCombo);
*/

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
var b5 = new String(""); //place of origin-includes attributes
var b6 = new String(""); //dateIssued
var b7 = new String(""); //publisher

for ( i=0;i<a.length;i++) {
	///alert("a["+i+"]="+a[i]);
	if ( a[i].indexOf('mods:dateCreated')>-1 && a[i].indexOf('point=') == -1 )          b2 = a[i];
	if ( a[i].indexOf('mods:dateCreated')>-1 && a[i].indexOf('point="start"') > -1 )    b3 = a[i];
	if ( a[i].indexOf('mods:dateCreated')>-1 && a[i].indexOf('point="end"') > -1 )      b4 = a[i];
	if ( a[i].indexOf('mods:placeTerm')>-1  )                                           b5 = a[i];
	if ( a[i].indexOf('mods:dateIssued')>-1 )                                           b6 = a[i];
	if ( a[i].indexOf('mods:publisher')>-1  )         				    b7 = a[i];
	}


//alert("process_name("+str+")" +"\n b1 = "+b1 +"\n b2 = "+b2 +"\n b3 = "+b3 +"\n b4 = "+b4 +"\n b5 = "+b5 +"\n b6 = "+b6+"\nb7="+b7);

//alert("b5=\n"+b5+"\n\ngetEntityData(b5)\n"+getEntityData(b5));
parent.U.document.UF.date_created.value = getEntityData(b2);
parent.U.document.UF.date_createdQ.value = getDateQualifier(b2);
parent.U.document.UF.date_created_begin.value = getEntityData(b3);
parent.U.document.UF.date_created_beginQ.value = getDateQualifier(b3);
parent.U.document.UF.date_created_end.value = getEntityData(b4);
parent.U.document.UF.date_created_endQ.value = getDateQualifier(b4);
parent.U.document.UF.place_of_origin.value = getEntityData(b5)
//attributes on b5

var attr_text=-1;
var attr_code=-1;
var attr_marc=-1;
var attr_iso=-1;
var newb5 = new String(b5);
	//alert("newb5=\n"+newb5);
if (newb5.indexOf("type=")>-1) {
	//alert("newb5 type defined.");
	 if (newb5.indexOf("text") > -1) {
		//alert("new b5 type=text");
		attr_text=1;
	 }else{
		//alert("new b5 type=code");
		attr_code=1;
	 }

	if (newb5.indexOf("marccountry") >-1) {
		//alert("new b5 authority=marccountry");
		attr_marc=1;
	}else{
		//alert("new b5 authority=iso3166");
		attr_iso =1;
	}
}


for (i=0;i<5;i++) {
parent.U.document.UF.place_of_origin_option[i].selected = false;
}

if (attr_text >-1 && attr_marc >-1 ) { 
	parent.U.document.UF.place_of_origin_option[1].selected = true;
}else if (attr_code >-1 && attr_marc >-1 ) { 
	parent.U.document.UF.place_of_origin_option[2].selected = true;
}else if (attr_text > -1 && attr_iso > -1 ) {
	parent.U.document.UF.place_of_origin_option[3].selected = true;
}else if (attr_code > -1 && attr_iso > -1 ) {
	parent.U.document.UF.place_of_origin_option[4].selected = true;
}else {
	parent.U.document.UF.place_of_origin_option[0].selected = true;
}

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
if ( aTor.length > 4) aTor.length=4;

//initialize this array so all array elements have a value
var eTor = new Array(
new String('')
,new String('')
,new String('')
,new String('')
);

var strEtor = new String();

//put new values into eTor array elements 
//note first array element [0] is discarded
for (i=1;i<aTor.length;i++) {
aTor[i]='<mods'+aTor[i];
eTor[i]=getEntityData(aTor[i]);
strEtor += ";"+getEntityData(aTor[i]);
//alert('aTor['+i+']='+aTor +"\n\neTor["+i+"]="+eTor[i]);
}
strEtor = strEtor.substring(1); //get rid of first one

parent.U.document.UF.type_of_resource_all.value=strEtor;

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
///parent.L.getSubjectBlocks(chompStr);
function getSubjectBlocks(str){

var s = new String(str);
    s = s.substring(s.indexOf("<mods:internetMediaType"),s.indexOf("<mods:location"));
////<mods:subject tags can appear elsewhere
////use required fields to trim off excess

//if no subject tag in trimmed down input block, no processing
if (s.indexOf("<mods:subject") == -1) {return;}

var i= s.lastIndexOf("</mods:subject");
    i+= 15;
s= s.substring(s.indexOf("<mods:subject"),i);
//alert("vv_process.js\ngetSubjectBlocks\ns=\n"+s);

var A = new Array();
var B = new String("");
var Amsg = new String("Amsg:");


A = s.split("<mods:");

for(i=1;i<A.length;i++) {
	A[i] ="<mods:"+A[i];
	if (A[i].indexOf("<mods:subject")>-1) {
		A[i]=parent.U.split_token+A[i]+parent.U.split_token;
	}
	Amsg += "\nA["+i+"]= "+A[i];
	B += A[i];
}

B = B.replace(/<\/mods:subject>/g,parent.U.split_token+"</mods:subject>");
B = B.substring(parent.U.split_token.length);//get rid of first split_token
//alert("B=\n"+B);

//alert (Amsg);
parent.U.document.UF.subject_block_list.value =B;

}//end function  getSubjectBlocks


///========================================================================
///parent.L.getRIBlocks(chompStr);
function getRIBlocks(str){

var t = new String("");
var temp = new String("");
var s = new String(str);
    s = s.substring(s.indexOf("<mods:internetMediaType"),s.indexOf("<mods:location"));
////alert("getRIBlocks(chompStr)\ns=\n"+s);
////<mods:subject tags can appear elsewhere
////use required fields to trim off excess

//if no subject tag in trimmed down input block, no processing
if (s.indexOf("<mods:relatedItem") == -1) {return;}

if ( s.indexOf("<mods:identifier") > -1) {
	s = s.substring(s.indexOf("<mods:relatedItem"),s.indexOf("<mods:identifier"));
}else{
	s = s.substring(s.indexOf("<mods:relatedItem"));
}
//alert("trim s=\n"+s);

var M = new Array();
    M = s.split("<mods:");
var Mmsg = new String("Mmsg:");

var A = new Array();
var B = new Array(
 	 "empty_string"
	,"empty_string"
	,"empty_string"
	,"empty_string"
	);


var Amsg = new String("Amsg:");
var Bmsg = new String("Bmsg:");
var index = 0;

for (i=1;i<M.length;i++ ){
	M[i]="<mods:"+M[i];
	Mmsg += "\n M["+i+"]="+M[i];
	A = M[i].split("=");
	Amsg += "\n\n M["+i+"]= "+M[i];
	for (k=0;k<A.length;k++) {
		Amsg += "\n A["+k+"]= "+A[k];
		}
	for(k=0;k<4;k++){B[k]="empty_string";}
	
	if (A[0].indexOf("displayLabel") >-1) {
		B[0]=A[1].substring(1, A[1].lastIndexOf('"'));
	}else if(A[0].indexOf("type")    >-1) {
		B[1]=A[1].substring(1, A[1].lastIndexOf('"'));
	}else if(A[0].indexOf("href")>-1) {
		B[2]=A[1].substring(1, A[1].lastIndexOf('"'));
	}

	if (A[1].indexOf("type") > -1 ) {
		B[1]=A[2].substring(1, A[2].lastIndexOf('"'));
	}else if (A[1].indexOf("href")>-1) {
		B[2]=A[2].substring(1, A[2].lastIndexOf('"'));
	}

	if (typeof(A[2]) != "undefined") {
	if (A[2].indexOf("href")>-1) {
		B[2]=A[3].substring(1, A[3].lastIndexOf('"'));
	}}
	
	B[3] = "END_RI_BLOCK_0"+i;

	for (k=0;k<4;k++) {
		Bmsg += "\n B["+k+"]= "+B[k];
		t += parent.U.split_token +B[k];
		}

//alert(Amsg+"\n------------------------------------------------------\n"+Bmsg);

}//end for
//alert(Mmsg);

t = t.substring(parent.U.split_token.length);

parent.U.document.UF.ri_block_list.value = t;


///alert("vv_process.js\ngetRIBlocks\nt=\n"+t);

}//end function getRIBlocks


///========================================================================
///parent.L.getIDBlocks(chompStr);
function getIDBlocks(str){
////alert("getIDBlocks -return");return;

var s = new String(str);
    s = s.substring(s.indexOf("<mods:internetMediaType"),s.indexOf("<mods:location"));
////<mods:subject tags can appear elsewhere
////use required fields to trim off excess

//if no subject tag in trimmed down input block, no processing
if (s.indexOf("<mods:identifier") == -1) {return;}

s= s.substring(s.indexOf("<mods:identifier"));
alert("vv_process.js\ngetIDBlocks\ns=\n"+s);

var M = new Array();
    M = s.split("<mods:");
var Mmsg = new String("Mmsg:");

var A = new Array();
var B = new Array(
 	 "empty_string" //displayLabel
	,"no"           //invalid="yes" is written, ="no" is assumed
	,"empty_string" //type
	,"empty_string" //identifier <mods:identifier>identifier</mods:identifier> field value
	,"empty_string" //END_ID_BLOCK
	);
var C = new Array();


var Amsg = new String("Amsg:");
var Bmsg = new String("Bmsg:");
var Cmsg = new String("Cmsg:");
var index = 0;
var k=0;
var n=0;
var w = new String("");

for(b=0;b<B.length;b++) {
	Bmsg += "\nB["+b+"]= "+B[b];
	}

for (i=1;i<M.length;i++ ){
	for(c=0;c<B.length;c++){ C[c]=B[c]; }
	M[i]="<mods:"+M[i];
	Mmsg += "\n M["+i+"]="+M[i];
	A = M[i].split("=");
		for (j=1;j<A.length;j++) {
		k = j-1;
		n = j+1;
		Amsg += "\n A["+j+"]= "+A[j];
		//=====C[0] display label
		if (A[k].indexOf("displayLabel")>-1) {
			C[0] = A[j].substring(1, A[j].lastIndexOf('"'));
			}
		//====C[1] invalid=yes/no
		else if(A[k].indexOf("invalid")>-1) {
			C[1] = "yes";
			}
		//===C[2] type, C[3] identifier, C[4] END
		else if(A[k].indexOf("type")>-1) {
			C[2] = A[j].substring(1, A[j].lastIndexOf('"'));
			C[3] = A[j].substring(A[j].indexOf(">")+1,A[j].indexOf("<"));
			C[4] = "END_ID_BLOCK_0"+i;			}
		}//end for j
		for(b=0;b<C.length;b++) {
			Cmsg += "\nC["+b+"]= "+C[b];
			w+= parent.U.split_token + C[b];
			}
	/*
	alert(Mmsg
		+"\n------------------------------------------------------\n"+Bmsg
		+"\n------------------------------------------------------\n"+Amsg
		+"\n------------------------------------------------------\n"+Cmsg);
	*/
	}//end for i

w= w.substring(parent.U.split_token.length);
parent.U.document.UF.id_block_list.value = w;

alert(Mmsg);


}//end function getIDBlocks

///========================================================================
function process_physicalDescription(str) {

//alert("process_physicalDescription str:\n"+str);
var s = new String(str);

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");

var b1 = new String(a[1]);//entity id required
var b2 = new String('');//mods:form type="technique" museum technique - add attribute from select box
var b3 = new String('');//mods:form type="medium" museum medium - add attribute from select box
var b4 = new String('');//mods:digital origin -fixed -do nothing- sorry now a select box
var b5 = new String('');//mods:internetMediaType -fixed -do nothing - now input box
var b6 = new String('');//extent
var b7 = new String('');//note

for(i=2;i<a.length;i++) {

if (a[i].indexOf('type="technique"')> -1 )      b2=a[i];
if (a[i].indexOf('type="medium"')> -1 )         b3=a[i];
if (a[i].indexOf('mods:digitalOrigin')> -1 )    b4=a[i];
if (a[i].indexOf('mods:internetMediaType')>-1 ) b5=a[i];
if (a[i].indexOf('mods:extent')>-1)             b6=a[i];
if (a[i].indexOf('mods:note')>-1)               b7=a[i];
}


//museum techinque
parent.U.document.UF.museum_form_type_technique.value =getEntityData(b2);
//alert("b2=\n"+b2+"\nb2 indexOf authority="+b2.indexOf('authority'));
if( b2.indexOf('authority')> -1 ) {
	parent.U.document.UF.technique_authority[0].selected = false;
	parent.U.document.UF.technique_authority[1].selected = true;
}else{
	parent.U.document.UF.technique_authority[0].selected = true;
	parent.U.document.UF.technique_authority[1].selected = false;
}

//museum medium
parent.U.document.UF.museum_form_type_medium.value    =getEntityData(b3);
//alert("b3=\n"+b3+"\nb3 indexOf authority="+b3.indexOf('authority'));
if( b3.indexOf('authority')> -1 ) {
	parent.U.document.UF.medium_authority[0].selected = false;
	parent.U.document.UF.medium_authority[1].selected = true;
}else{
	parent.U.document.UF.medium_authority[0].selected = true;
	parent.U.document.UF.medium_authority[1].selected = false;
}


b4 = getEntityData(b4);
//alert("mods_digital_origin: b4=\n"+b4);
for (i=0;i<5; i++){
	parent.U.document.UF.mods_digital_origin[i].selected = false;
	}
for (i=0;i<5;i++) {
	if (b4 == parent.U.document.UF.mods_digital_origin[i].value ) {
		parent.U.document.UF.mods_digital_origin[i].selected = true;
		break;
		}
	}
	
	
b5 = getEntityData(b5);
//alert("internetmediatype: b5=\n"+b5);	
parent.U.document.UF.internetmediatype.value= b5;


//mods_extent
b6 = getEntityData(b6);
parent.U.document.UF.mods_extent.value=b6;

//mods_note
b7 = getEntityData(b7);
parent.U.document.UF.mods_note_physdesc.value=b7;


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


