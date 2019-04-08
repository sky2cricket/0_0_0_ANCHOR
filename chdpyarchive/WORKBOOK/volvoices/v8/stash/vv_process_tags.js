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

//vv_process_tags.js
//The functions in this file support page_09_reload.htm.

//programmer's note
//The problem here is to correctly populate the input boxes on 
//workbook pages from an xml file that contains data from some 
//but not all of the input boxes.
//The functions for getting the attribute values ( getType, etc )
//need to be unified.


//=================================================================
//=================================================================
///just to make parsing easier
function getEntityData(str) {

var s = new String(str);
if (s.length > 0) {
    s = s.substring(s.indexOf(">"));
    s = s.substring(1);
    s = s.substring(0, s.indexOf("<"));
    }
return(s);
}//end function getEntityData

//=================================================================
//=================================================================
///just to make parsing easier
function getDateQualifier(str) {

var s = new String(str);
if (s.length == 0) return ("");
if (s.indexOf('qualifier="')== -1) return("none");
    s = s.substring(s.indexOf('qualifier="'));
    s = s.substring(11);
    s = s.substring(0, s.indexOf('"'));
return(s);
}//end function getQualifier

//=================================================================
//=================================================================
///just to make parsing easier
function getAuthority(str) {

var s = new String(str);
if (s.length > 0) {
    s = s.substring(s.indexOf('authority="'));
    s = s.substring(11);
    s = s.substring(0, s.indexOf('"'));
    }
return(s);
}//end function getAuthority

//================================================================= 
//================================================================= 
///just to make parsing easier 
function getType(str) { 
var s = new String(str); 
if (s.indexOf('type="')==-1) {return("");} 
if (s.length > 0) { 
	s = s.substring(s.indexOf('type="')); 
	s = s.substring(6); 
	s = s.substring(0, s.indexOf('"'));
    }
return(s);
}//end function getType

//================================================================= 
//================================================================= 
///just to make parsing easier 
function getAccess(str) { 
var s = new String(str); 
if (s.indexOf('access="')==-1) {return("_zero");} 
if (s.length > 0) { 
	s = s.substring(s.indexOf('access="')); 
	s = s.substring(8); 
	s = s.substring(0, s.indexOf('"'));
    }
return(s);
}//end function getAccess


//=================================================================
//=================================================================
///just to make parsing easier
function getDisplayLabel(str) {

var s = new String(str);
if (s.indexOf("displayLabel")==-1) {return ("");}
if (s.length > 0) {
    s = s.substring(s.indexOf('displayLabel="'));
    s = s.substring(14);
    s = s.substring(0, s.indexOf('"'));
    }
return(s);
}//end function getDisplayLabel

//=================================================================
//=================================================================
///just to make parsing easier
function getInvalid(str) {

var s = new String(str);
  if ( s.indexOf('invalid="yes"') > -1 ){
	return("yes");
  }else{
	return("no");
  }
}//end function getInvalid


//=================================================================
//=================================================================
///just to make parsing easier
function getURL(str) {

var s = new String(str);
if (s.indexOf("xlink:href")==-1) {return ("");}
if (s.length > 0) {
    s = s.substring(s.indexOf('xlink:href="'));
    s = s.substring(12);
    s = s.substring(0, s.indexOf('"'));
    }
return(s);
}//end function getURL


//=================================================================
//=================================================================
//header gets its own function because it is so different
function process_MODS_header_block(){
var DATE = new Date();

var MEB = new String(parent.U.document.U2.mods_header.value);
if (MEB.length == 0) {return;}

var A = new Array();
    A = MEB.split(":");
var B = new Array();
    B = MEB.split("<");
var msgA = new String("msgA:");
var msgA2 = new String("msgA2:");
var msgB = new String("msgB:");

for (i=0;i<33;i++) {
        msgA += "\nA["+i+"]="+A[i];
        }
for (i=32;i<A.length;i++) {
        msgA2 += "\nA["+i+"]="+A[i];
        }
for (i=0;i<B.length;i++) {
        B[i] = "<"+B[i];
        msgB += "\nB["+i+"]= "+B[i];
        }

alert("A.length="+A.length+"\n\n"+msgA);
alert("A.length="+A.length+"\n\n"+msgA2);
alert(msgB);


var contributorName = new String(A[12]);
    contributorName = contributorName.substring(0,contributorName.indexOf(" -->"));
var institutionName = new String(A[13]);
    institutionName = institutionName.substring(0,institutionName.indexOf(" -->"));
var XMLmaster_simple= new String(A[20]);
    XMLmaster_simple= XMLmaster_simple.substring(0,XMLmaster_simple.indexOf(" -->"));

parent.U.document.UF.VVcomment_01.value   = B[8];//filename
parent.U.document.UF.VVcomment_02.value   = B[9];//number of related items
parent.U.document.UF.VVcomment_02a.value  = B[10];//number of identifiers
parent.U.document.UF.VVcomment_02b.value  = B[11];//number of subject blocks
parent.U.document.UF.VVcomment_02c.value  = B[12];//number of name blocks
parent.U.document.UF.VVcomment_02d.value  = B[13];//number of locationUrl blocks
parent.U.document.UF.VVcomment_02e.value  = B[14];//number of accessCondition blocks
/////parent.U.document.UF.VVcomment_03.value   = B[7];//reload date
parent.U.document.UF.VVcomment_03.value   = "<!-- Reload Date: "+DATE+" -->"; //reload date, regenerated for each time you reload
parent.U.document.UF.VVcomment_03c.value  = B[4];//Content Contributor
parent.U.document.UF.VVcomment_03p.value  = B[5];//Institution
parent.U.document.UF.VVcomment_03d.value  = B[6];//date of record creation
parent.U.document.UF.VVcomment_04.value   = B[16];//PAGE VALIDATION has to be below BLOCK ITERATION
parent.U.document.UF.VVcomment_05.value   = B[15];//BLOCK ITERATION
parent.U.document.UF.contributorName.value    = contributorName;
parent.U.document.UF.institutionName.value    = institutionName;
parent.U.document.UF.XMLmaster_simple.value   = XMLmaster_simple;

parent.U.document.UF.numRelatedItems.value    		= A[21];
parent.U.document.UF.numIdentifiers.value     		= A[23];
parent.U.document.UF.numSubjectBlocks.value   		= A[25];
parent.U.document.UF.numNameBlocks.value      		= A[27];
parent.U.document.UF.numLocationUrlBlocks.value      	= A[29];
parent.U.document.UF.numAccessConditionBlocks.value  	= A[31];

/*----------------------mark for deletion-----------------------
parent.U.document.UF.validate_page_header.value   	= A[49];
parent.U.document.UF.validate_page_titleInfo.value   	= A[50];
parent.U.document.UF.validate_page_name.value   	= A[51];
parent.U.document.UF.validate_page_typeOfResource.value = A[52];
parent.U.document.UF.validate_page_genre.value   	= A[53];
parent.U.document.UF.validate_page_originInfo.value   	= A[54];
parent.U.document.UF.validate_page_language.value   	= A[55];
parent.U.document.UF.validate_page_physicalDescription.value = A[56];
parent.U.document.UF.validate_page_abstract.value   	= A[57];
parent.U.document.UF.validate_page_subject.value   	= A[58];
parent.U.document.UF.validate_page_relatedItem.value   	= A[59];
parent.U.document.UF.validate_page_identifier.value   	= A[60];
parent.U.document.UF.validate_page_location.value   	= A[61];
parent.U.document.UF.validate_page_accessCondition.value= A[62];
parent.U.document.UF.validate_page_recordInfo.value   	= A[63];
----------------------mark for deletion-----------------------*/
return;
}

//=================================================================
//=================================================================

function process_titleInfo() {
var t = new String(parent.U.document.U2.mods_titleInfo.value);
if (t.length==0) {return;}
var s = new String("");

s = t.substring(t.indexOf("mods:nonSort>"));
s = getEntityData(s);
parent.U.document.UF.title_non_sort.value=s;

s = t.substring(t.indexOf("mods:title>"));
s = getEntityData(s);
parent.U.document.UF.title.value=s;

s = t.substring(t.indexOf("mods:subTitle>"));
s = getEntityData(s);
parent.U.document.UF.title_sub_title.value=s;

s = t.substring(t.indexOf("mods:partNumber>"));
s = getEntityData(s);
parent.U.document.UF.title_part_number.value=s;

s = t.substring(t.indexOf("mods:partName>"));
s = getEntityData(s);
parent.U.document.UF.title_part_name.value=s;

}//end function process_titleInfo



//=================================================================
//=================================================================
/////////dynamic name blocks are different so get custom function
function process_name_group(){

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
var s0 = parent.U.document.U2.mods_name_group.value;
if (s0.length == 0) {return;}
    //s0 = s0.substring(s0.indexOf("<mods:name"));
    //s0 = s0.substring(0, s0.indexOf("<mods:originInfo"));

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
//-----------------------------------------------------------------
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


s = s.substring(parent.U.split_token.length);
//alert("s=\n"+s);

//this is the final action
parent.U.document.UF.name_block_list.value=s;

var MEB = new String(s);

return;
}//end function process_name_group() 

//=================================================================
//=================================================================
function process_typeOfResource(){
var strTor = new String(parent.U.document.U2.mods_typeOfResource.value);
if (strTor.length ==0) { return; }
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

//=================================================================
//=================================================================
function process_genre(str) {

//alert("process_genre str:\n"+str);
var s = new String(parent.U.document.U2.mods_genre.value);
if ( s.length == 0 ) return;

parent.U.document.UF.mods_genre_authority.value = getAuthority(s);
parent.U.document.UF.mods_genre.value = getEntityData(s);

return;
}//end function process_genre


//=================================================================
//=================================================================
function process_originInfo(str) {

//alert("process_originInfo str:\n"+str);
var s = new String(parent.U.document.U2.mods_originInfo.value);
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
parent.U.document.UF.place_of_origin.value = getEntityData(b5);
parent.U.document.UF.place_of_origin_authority.value = getAuthority(b5);
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
parent.U.document.UF.place_of_origin_authority[i].selected = false;
}

if (attr_text >-1 && attr_marc >-1 ) { 
	parent.U.document.UF.place_of_origin_authority[1].selected = true;
}else if (attr_code >-1 && attr_marc >-1 ) { 
	parent.U.document.UF.place_of_origin_authority[2].selected = true;
}else if (attr_text > -1 && attr_iso > -1 ) {
	parent.U.document.UF.place_of_origin_authority[3].selected = true;
}else if (attr_code > -1 && attr_iso > -1 ) {
	parent.U.document.UF.place_of_origin_authority[4].selected = true;
}else {
	parent.U.document.UF.place_of_origin_authority[0].selected = true;
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

}//end function process_originInfo()


//=================================================================
//=================================================================
function process_language() {

//alert("process_language str:\n"+str);
var s = new String(parent.U.document.U2.mods_language.value);
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


//=================================================================
//=================================================================
function process_physicalDescription() {

//alert("process_physicalDescription str:\n"+str);
var s = new String(parent.U.document.U2.mods_physicalDescription.value);
if (s.length==0) {return;}

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


//=================================================================
//=================================================================
function process_abstract() {

//alert("process_abstract str:\n"+str);
var s = new String(parent.U.document.U2.mods_abstract.value);
if ( s.length == 0 ) { return (""); }
parent.U.document.UF.mods_genre_abstract.value= getEntityData(s);

}//end function process_abstract


//=================================================================
//=================================================================
function process_subject_group() {

var s = new String(parent.U.document.U2.mods_subject_group.value);
if (s.length ==0) {return;}

//if no subject tag in trimmed down input block, no processing
if (s.indexOf("<mods:subject") == -1) {return;}

var i= s.lastIndexOf("</mods:subject>");
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


//=================================================================
//=================================================================
function process_ri_group() {

var t = new String("");
var temp = new String("");
var s = new String(parent.U.document.U2.mods_ri_group.value);
if ( s.length ==0 ) { return; }

var M = new Array();
    M = s.split("<mods:");
var Mmsg = new String("Mmsg:");
var C = new Array();
var Cmsg = new String("Cmsg:");
var w = new String("");

for (i=1;i<M.length;i++ ){
	M[i]="<mods:"+M[i];
	Mmsg += "\n M["+i+"]="+M[i];
		//======C[0] display label
			C[0] = getDisplayLabel(M[i]);
			if (C[0].length == 0) C[0]="empty_string";
		//======C[1] type
			C[1] = getType(M[i]);
			if (C[1].length == 0) C[1]="empty_string";
		//======C[2] URL
			C[2] = getURL(M[i]);
			if (C[2].length == 0) C[2]="empty_string";
		//======C[3] end block
			C[3] = "END_ID_BLOCK_0"+i;			

		for(b=0;b<C.length;b++) {
			Cmsg += "\nC["+b+"]= "+C[b];
			w+= parent.U.split_token + C[b];
			}
}//end for i
//alert(Mmsg+"\n------------------------------------------------------\n"+Cmsg
 //       +"\n\n------------------------------------------------------\n"+w);

w = w.substring(parent.U.split_token.length);

parent.U.document.UF.ri_block_list.value = w;

}//end function process_ri_group

//=================================================================
//=================================================================
function process_id_group() {

var s = new String(parent.U.document.U2.mods_id_group.value);
if ( s.length ==0){ return; }

//if no mods:identifier tag in trimmed down input block, no processing
if (s.indexOf("<mods:identifier") == -1) {return;}

s= s.substring(s.indexOf("<mods:identifier"));

var M = new Array();
    M = s.split("<mods:");
var Mmsg = new String("Mmsg:");

var C = new Array();
var Cmsg = new String("Cmsg:");
var w = new String("");

for (i=1;i<M.length;i++ ){
	M[i]="<mods:"+M[i];
	Mmsg += "\n M["+i+"]="+M[i];
		//======C[0] display label
			C[0] = getDisplayLabel(M[i]);
			if (C[0].length == 0) C[0]="empty_string";
		//======C[1] invalid=yes/no
			C[1] = getInvalid(M[i]);
		//======C[2] type
			C[2] = getType(M[i]);
			if (C[2].length == 0) C[2]="empty_string";
		//======C[3] identifier
			C[3] = getEntityData(M[i]);
			if (C[3].length == 0) C[3]="empty_string";
		//======C[4] end block
			C[4] = "END_ID_BLOCK_0"+i;			

		for(b=0;b<C.length;b++) {
			Cmsg += "\nC["+b+"]= "+C[b];
			w+= parent.U.split_token + C[b];
			}
	//alert(Mmsg +"\n------------------------------------------------------\n"+Cmsg);
}//end for i

w= w.substring(parent.U.split_token.length);
parent.U.document.UF.id_block_list.value = w;

}//end function process_id_group


//=================================================================
//=================================================================
function process_lu_group() {

var s = new String(parent.U.document.U2.mods_location.value);
if ( s.length ==0){ return; }

//if no mods:location tag in trimmed down input block, no processing
if (s.indexOf("<mods:location") == -1) {return;}

s= s.substring(s.indexOf("<mods:location"));
//alert("s=\n"+s);
s= s.substring(s.indexOf("<mods:url"),s.lastIndexOf("</mods:location"));
//alert("s=\n"+s);

var M = new Array();
    M = s.split("<mods:");
var Mmsg = new String("Mmsg:");



var C = new Array();
var Cmsg = new String("Cmsg:");
var w = new String("");

for (i=1;i<M.length;i++ ){
        M[i]="<mods:"+M[i];
        Mmsg += "\n M["+i+"]="+M[i];
                //======C[0] locationAccessType
                        C[0] = getAccess(M[i]);
                //======C[1] locationUrl
                        C[1] = getEntityData(M[i]);
                for(b=0;b<C.length;b++) {
                        Cmsg += "\nC["+b+"]= "+C[b];
                        w+= parent.U.split_token + C[b];
                        }
        //alert(Mmsg +"\n------------------------------------------------------\n"+Cmsg);
}//end for i

w= w.substring(parent.U.split_token.length);
parent.U.document.UF.lu_block_list.value = w;

}//end function process_lu_group



//=================================================================
//=================================================================
function process_location() {

//alert("process_location str:\n"+str);
var s = new String(parent.U.document.U2.mods_location.value);
if ( s.length ==0 ) { return; }

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");

Amsg = new String("Amsg:");

var B = new Array();
var Bmsg = new String("Bmsg:");
var bcount = 0;
for (k=0;k<a.length;k++) {
	Amsg+="\n a["+k+"]= "+a[k];
	if (a[k].indexOf("mods:url")>-1) { 
		B[bcount] = a[k]; 
		Bmsg+= "\n B["+bcount+"]="+B[bcount];
		bcount++;
		}
	}
alert("process_location()\n"+Amsg+"\n-------------------------------------------\n"+Bmsg);

/*
if (B[0].indexOf('access="preview"') >-1) { parent.U.document.UF.access_00.value = "preview"; }
else if (B[0].indexOf('access="raw object"') >-1) { parent.U.document.UF.access_00.value = "raw object"; }
else if (B[0].indexOf('access="object in context"') >-1) { parent.U.document.UF.access_00.value = "object in context"; }
else  { parent.U.document.UF.access_00.value = "none"; }
parent.U.document.UF.location_url_00.value = getEntityData(B[0]);



if (B[1].indexOf('access="preview"') >-1) { parent.U.document.UF.access_01.value = "preview"; }
else if (B[1].indexOf('access="raw object"') >-1) { parent.U.document.UF.access_01.value = "raw object"; }
else if (B[1].indexOf('access="object in context"') >-1) { parent.U.document.UF.access_01.value = "object in context"; }
else { parent.U.document.UF.access_01.value = "none"; }
parent.U.document.UF.location_url_01.value = getEntityData(B[1]);

if (B[2].indexOf('access="preview"') >-1) { parent.U.document.UF.access_02.value = "preview"; }
else if (B[2].indexOf('access="raw object"') >-1) { parent.U.document.UF.access_02.value = "raw object"; }
else if (B[2].indexOf('access="object in context"') >-1) { parent.U.document.UF.access_02.value = "object in context"; }
else { parent.U.document.UF.access_02.value = "none"; }
parent.U.document.UF.location_url_02.value = getEntityData(B[2]);

if (B[3].indexOf('access="preview"') >-1) { parent.U.document.UF.access_03.value = "preview"; }
else if (B[3].indexOf('access="raw object"') >-1) { parent.U.document.UF.access_03.value = "raw object"; }
else if (B[3].indexOf('access="object in context"') >-1) { parent.U.document.UF.access_03.value = "object in context"; }
else { parent.U.document.UF.access_03.value = "none"; }
parent.U.document.UF.location_url_03.value = getEntityData(B[3]);

*/

return;
}//end function process_location(str)


//=================================================================
//=================================================================
function process_ac_group() {
//get_block_iteration(str_blockname)

var s = new String(parent.U.document.U2.mods_ac_group.value);
if ( s.length ==0){ return; }

//if no mods:accessCondition tag in trimmed down input block, no processing
if (s.indexOf("<mods:accessCondition") == -1) {return;}

s= s.substring(s.indexOf("<mods:accessCondition"));

var M = new Array();
    M = s.split("<mods:");
var Mmsg = new String("Mmsg:");

var C = new Array();
var Cmsg = new String("Cmsg:");
var w = new String("");

for (i=1;i<M.length;i++ ){
        M[i]="<mods:"+M[i];
        Mmsg += "\n M["+i+"]="+M[i];
                //======C[0] accessConditionType
                        C[0] = getType(M[i]);
                //======C[1] accessConditionText
                        C[1] = getEntityData(M[i]);
                        if (C[1].length == 0) C[3]="empty_string";
                for(b=0;b<C.length;b++) {
                        Cmsg += "\nC["+b+"]= "+C[b];
                        w+= parent.U.split_token + C[b];
                        }
        //alert(Mmsg +"\naccessCondition------------------------------------------------------\n"+Cmsg);
}//end for i

w= w.substring(parent.U.split_token.length);
parent.U.document.UF.ac_block_list.value = w;
////////parent.L.populate_DF_from_UF_block_list("ac_block_list");

}//end function process_ac_group


//=================================================================
//=================================================================
function process_recordInfo() {

//alert("process_recordInfo str:\n"+str);
var s = new String(parent.U.document.U2.mods_recordInfo.value);
if (s.length==0) {return;}

    s = s.replace(/<mods:/g,":::<mods:"); 
var a = new Array();
    a = s.split(":::");

var b1 = new String(''); // record_content_source (contribution institution)
var b2 = new String(''); // record_creation_date
var b3 = new String(''); // record_info_origin

for(i=0;i<a.length;i++) {
//alert('a['+i+']='+a[i]);
if ( a[i].indexOf('mods:recordContentSource')> -1 ) 	 b1 = a[i];
if ( a[i].indexOf('mods:recordCreationDate')      > -1 ) b2 = a[i];
if ( a[i].indexOf('mods:recordOrigin') >-1)              b3 = a[i];
if ( a[i].indexOf('mods:languageTerm') >-1)		 b4 = a[i];
}

parent.U.document.UF.record_content_source.value = getEntityData(b1);
parent.U.document.UF.record_creation_date.value  = getEntityData(b2);
parent.U.document.UF.record_info_origin.value    = getEntityData(b3);
parent.U.document.UF.language_of_cataloging.value = getEntityData(b4);
parent.U.document.UF.language_of_cataloging_display.value = getTran(aLanguage,parent.U.document.UF.language_of_cataloging.value);

return;
}///end function process_recordInfo()


//=================================================================
//=================================================================
//undo encodings in chompStr
//these will be reinstated as hex-encoding in vv_compose_tags.js

function clean_01(str){


var retstr = new String(str);

var html_amp  = new RegExp("&amp;","g");   ///ampersand global
var html_apos = new RegExp("&apos;","g");  ///single quote global
var html_quot = new RegExp("&quot;","g");  ///double quote global
var html_lt   = new RegExp("&lt;","g");    ///less than global
var html_gt   = new RegExp("&gt;","g");    ///greater than global

retstr = retstr.replace(html_amp,"&");
retstr = retstr.replace(html_apos,"'");
retstr = retstr.replace(html_quot,'"');
retstr = retstr.replace(html_lt,"<");
retstr = retstr.replace(html_gt,">");


var ascii_amp  = new RegExp("&#038;","g");   ///ampersand global
var ascii_apos = new RegExp("&#039;","g");  ///single quote global
var ascii_quot = new RegExp("&#034;","g");  ///double quote global
var ascii_lt   = new RegExp("&#060;","g");    ///less than global
var ascii_gt   = new RegExp("&#062;","g");    ///greater than global

retstr = retstr.replace(ascii_amp,"&");
retstr = retstr.replace(ascii_apos,"'");
retstr = retstr.replace(ascii_quot,'"');
retstr = retstr.replace(ascii_lt,"<");
retstr = retstr.replace(ascii_gt,">");


var hex_amp  = new RegExp("&#x0026;","g");   ///ampersand global
var hex_apos = new RegExp("&#x0027;","g");  ///single quote global
var hex_quot = new RegExp("&#x0022;","g");  ///double quote global
var hex_lt   = new RegExp("&#x003C;","g");    ///less than global
var hex_gt   = new RegExp("&#x003E;","g");    ///greater than global

retstr = retstr.replace(hex_amp,"&");
retstr = retstr.replace(hex_apos,"'");
retstr = retstr.replace(hex_quot,'"');
retstr = retstr.replace(hex_lt,"<");
retstr = retstr.replace(hex_gt,">");

return(retstr);
}//end function clean_01(str)

function endSuccess(str){
alert(str);
}


//=================================================================
//=================================================================
//called from page_09_reload();
//The main purpose of this function is to divide and conquer the xml input file

//Also <mods:name>...</mods:name> can occur in 2 places
//     1. On page one as part of the "author-creator" tags
//     2. On page four encapsulated in <mods:subject>...<mods:subject> tags
//Before I added dynamic tags ( Add Another ) this code was much simpler.
//I am storing these xml blocks in the upper frame (parent.U.document.U2) 
//to make debug easier.
//Because reload is supposed to work on incomplete xml files,
//I try to make each block independent of the others and not
//rely on the existence of a supposed "next" tag.


//=================================================================
//=================================================================
function orig_parseData() {


var temp = new String("");
var index = 0;
var index2 = 0;

var chompStr = new String(parent.U.document.U2.chomp.value);
    chompStr = clean_01(chompStr);//replace encodings for &amp;,&gt;,&lt;,&apos;,&quot;
    chompStr = chompStr.replace(/ >/g,">");
    chompStr = chompStr.replace(/  /g," ");

//mods_header
//<!-- PAGE VALIDATION :a:b:c:d:e:f:g:h:i:j:k:l:m:n:o: -->
//<!-- BLOCK ITERATION :1:1:1:1:1:1:1:1:1:1:1:1:1:1:1: -->
index =0;
index2 = chompStr.indexOf("PAGE VALIDATION")+51;
parent.U.document.U2.mods_header.value = chompStr.substring(index,index2);

//mods_titleInfo <mods:titleInfo>...</mods:titleInfo>
index = chompStr.indexOf("<mods:titleInfo");
index2 = chompStr.indexOf("</mods:titleInfo>") +17;
parent.U.document.U2.mods_titleInfo.value = chompStr.substring(index,index2);

//mods_name_group -- all name blocks together <mods:name>...</mods:name><mods:name>...repeats...</mods:name>
//but the tag <mods:name can appear on page 4 where name can be a subject
//so use temp to cut chompStr at subject tags
temp = chompStr;
if ( chompStr.indexOf("<mods:subject") >-1 ) {
	temp = temp.substring(0, temp.indexOf("<mods:subject"));
}

index = temp.indexOf("<mods:name");//start nameInfo 
index2 = temp.lastIndexOf("</mods:name>")+12;
parent.U.document.U2.mods_name_group.value = temp.substring(index,index2);

//mods_typeOfResource
var index_ty = -1;
    index_ty = chompStr.indexOf("<mods:typeOfResource");
if (index_ty >-1) {
	index2 = chompStr.lastIndexOf("</mods:typeOfResource>")+22;
	parent.U.document.U2.mods_typeOfResource.value = chompStr.substring(index_ty,index2);
}else{
	parent.U.document.U2.mods_typeOfResource.value = "";
}
	
//mods_genre
var index_gr = -1;
    index_gr = chompStr.indexOf("<mods:genre");
if (index_gr >-1) {
	index2 = chompStr.indexOf("</mods:genre>")+13;
	parent.U.document.U2.mods_genre.value = chompStr.substring(index_gr,index2);
}else{
	parent.U.document.U2.mods_genre.value = "";
}

//mods_originInfo <mods:originInfo>...</mods:originInfo>
index = index2;
index2 = chompStr.indexOf("</mods:originInfo>")+18;
parent.U.document.U2.mods_originInfo.value = chompStr.substring(index,index2);

//mods_language -- mods:language, mods:typeOfResource, mods:genre
index = index2;
index2 = chompStr.indexOf("</mods:language>")+16; 
parent.U.document.U2.mods_language.value = chompStr.substring(index,index2);

//mods_physicalDescription <mods:physicalDescription>...</mods:physicalDescription>
index = index2;
index2 = chompStr.indexOf("</mods:physicalDescription>") +27;
parent.U.document.U2.mods_physicalDescription.value = chompStr.substring(index,index2);


//mods_abstract
index = chompStr.indexOf("<mods:abstract");
index2 = chompStr.indexOf("</mods:abstract>")+16;
parent.U.document.U2.mods_abstract.value = chompStr.substring(index,index2);

//mods_subject_group -- <mods:subject>...</mods:subject> repeatable, not required
var index_su = -1;
index_su = chompStr.indexOf("<mods:subject");
if (index_su>-1){
	index2 = chompStr.lastIndexOf("</mods:subject>") +15;
	parent.U.document.U2.mods_subject_group.value = chompStr.substring(index_su,index2);
}else{
	parent.U.document.U2.mods_subject_group.value = ""; 
}

//mods_ri__roup -- <mods:relatedItem .../> repeatable, not required
var index_ri = -1;
index_ri = chompStr.indexOf("<mods:relatedItem ");
if (index_ri>-1) {
	index2 = chompStr.lastIndexOf("/>")+2;
	parent.U.document.U2.mods_ri_group.value = chompStr.substring(index_ri,index2);
}else{
	parent.U.document.U2.mods_ri_group.value = "";
}


//mods_id_group -- <mods:identifier>...</mods:identifier repeatable, not required
var index_id=-1;
index_id = chompStr.indexOf("<mods:identifier ");
if (index_id>-1) {
	index2 = chompStr.lastIndexOf("</mods:identifier>") +18;
	parent.U.document.U2.mods_id_group.value = chompStr.substring(index_id,index2);
}else{
	parent.U.document.U2.mods_id_group.value = "";
}

//mods:location required
index = chompStr.indexOf("<mods:location>");
if (index == -1) {
	parent.U.document.U2.mods_location.value="";
}else{
	index2 = chompStr.indexOf("</mods:location>")+16;
	parent.U.document.U2.mods_location.value = chompStr.substring(index,index2);
}

//mods:accessCondition required
var index_ac = -1;
var index2_ac = 1;
index_ac = chompStr.indexOf("<mods:accessCondition ");

if (index_ac == -1) {
	parent.U.document.U2.mods_accessCondition.value="";
	parent.U.document.U2.mods_ac_group.value="";
}else{
	index2_ac = chompStr.lastIndexOf("</mods:accessCondition>")+23;
	parent.U.document.U2.mods_accessCondition.value = chompStr.substring(index_ac,index2_ac);
	parent.U.document.U2.mods_ac_group.value=chompStr.substring(index_ac,index2_ac);
}

//mods:recordInfo required
index = chompStr.indexOf("<mods:recordInfo>");
if (index == -1) {
	parent.U.document.U2.mods_recordInfo.value="";
}else{
	index2 = chompStr.indexOf("</mods:recordInfo>")+18;
	parent.U.document.U2.mods_recordInfo.value = chompStr.substring(index,index2);
}

//endSuccess("finish orig_parseData -- now call processData");
//if (!confirm("continue?")){return;}
processData();

}//end function orig_parseData()


//=================================================================
//=================================================================
function processData() {

process_MODS_header_block();
process_titleInfo();
process_name_group();
process_typeOfResource();
process_genre();
process_originInfo();
process_language();
process_physicalDescription();
process_abstract();
process_subject_group(); 
process_ri_group();
process_id_group();
//process_location();
process_lu_group();
process_ac_group();
process_recordInfo();

//endSuccess("finish processData");
}


//=================================================================
//=================================================================
//the end
