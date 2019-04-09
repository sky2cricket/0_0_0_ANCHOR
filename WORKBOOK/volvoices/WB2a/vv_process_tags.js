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
if (s.indexOf("authority=")==-1) return("_zero");
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
if (s.indexOf('type="')==-1) {return("_zero");} 
if (s.length > 0) { 
	s = s.substring(s.indexOf('type="')); 
	s = s.substring(6); 
	s = s.substring(0, s.indexOf('"'));
    }
return(s);
}//end function getType

//================================================================= 
//================================================================= 
///just to make parsing easier for titleInfo attributes
/*
+'<option value="abbreviated_dnlm">type="abbreviated" authority="dnlm"</option>\r\n'
+'<option value="abbreviated_hlasja">type="abbreviated" authority="hlasja"</option>\r\n'
+'<option value="translated_no">type="translated" no authority</option>\r\n'
+'<option value="alternative_no">type="alternative" no authority</option>\r\n'
+'<option value="uniform_naf">type="uniform" authority="naf"</option>\r\n'
+'<option value="uniform_sanb">type="uniform" authority="sanb"</option>\r\n'

*/
function getTypeAuth(str) {

	if (str.indexOf("type=")== -1) {
		return("_zero");
	}else if (str.indexOf('authority="dnlm"') > -1){	
		return("abbreviated_dnlm");
	}else if (str.indexOf('authority="hlasja"') > -1){	
		return("abbreviated_hlasja");
	}else if (str.indexOf('type="translated"')>-1) {
		return("translated_no");
	}else if (str.indexOf('type="alternative"')>-1) {
		return("alternative_no");
	}else if (str.indexOf('authority="naf"') > -1){	
		return("uniform_naf");
	}else if (str.indexOf('authority="sanb"') > -1){	
		return("uniform_sanb");
	}

	return("_zero");
}//end function getTypeAuth

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
var msgA1 = new String("msgA1:");
var msgA2 = new String("msgA2:");
var msgB = new String("msgB:");

for (i=0;i<24;i++) {
        msgA += "\nA["+i+"]="+A[i];
        }
for (i=19;i<37;i++) {
        msgA1 += "\nA["+i+"]="+A[i];
        }
for (i=36;i<A.length;i++) {
        msgA2 += "\nA["+i+"]="+A[i];
        }
for (i=0;i<B.length;i++) {
        B[i] = "<"+B[i];
        msgB += "\nB["+i+"]= "+B[i];
        }

if(parent.reload_dev) {
/*
alert("A.length="+A.length+"\n\n"+msgA);
alert("A.length="+A.length+"\n\n"+msgA1);
alert("A.length="+A.length+"\n\n"+msgA2);
alert(msgB);
*/
}

var MEBindex1 =0;

var contributorName = new String();
    MEBindex1 = MEB.indexOf("CONTENT CONTRIBUTOR:")+21;
    contributorName = MEB.substring(MEBindex1);
    contributorName = contributorName.substring(0,contributorName.indexOf(" -->"));
    //alert("contributorName= >>"+contributorName+"<<");
var institutionName = new String();
    MEBindex1 = MEB.indexOf("INSTITUTION:")+13;
    institutionName = MEB.substring(MEBindex1);
    institutionName = institutionName.substring(0,institutionName.indexOf(" -->"));
    //alert("institutionName= >>"+institutionName+"<<");
var XMLoutput= new String();
    MEBindex1 = MEB.indexOf("FILENAME:")+10;
    XMLoutput = MEB.substring(MEBindex1);
    XMLoutput= XMLoutput.substring(0,XMLoutput.indexOf(" -->"));
    //alert("filemane= XMLoutput = >>"+XMLoutput+"<<");

parent.U.document.UF.contributorName.value    = contributorName;
parent.U.document.UF.institutionName.value    = institutionName;
parent.U.document.UF.XMLoutput.value   = XMLoutput;

parent.U.document.UF.VVcomment_01.value   = B[8];//filename
/////parent.U.document.UF.VVcomment_03.value   = B[7];//reload date
parent.U.document.UF.VVcomment_03.value   = "<!-- RECORD RELOAD DATE: "+DATE+" -->"; //reload date, regenerated for each time you reload
parent.U.document.UF.VVcomment_03c.value  = B[4];//Content Contributor
parent.U.document.UF.VVcomment_03p.value  = B[5];//Institution
parent.U.document.UF.VVcomment_03d.value  = B[6];//date of record creation
parent.U.document.UF.VVcomment_05.value   = B[9];//BLOCK ITERATION
parent.U.document.UF.VVcomment_04.value   = B[10];//PAGE VALIDATION has to be below BLOCK ITERATION

//alert("end process_MODS_header_block");
return;
}

//=================================================================
//=================================================================

//function process_titleInfo_group() {
//}

function process_titleInfo() {

var t = new String(parent.U.document.U2.mods_titleInfo.value);

var numTiBlocks = new Number( parent.L.get_block_iteration("titleInfo"));

if (t.length==0) {return;}

var temp = new String("");
var temp2= new String("");
var temp3= new String("");
var index2 = 0;
var N = new Array();
    N = t.split("</mods:titleInfo>");
var Nmsg = new String("Nmsg:");
for (i=0;i<N.length;i++){
	Nmsg += "\n N["+i+"]="+N[i]+"</mods:titleInfo>";
	}
//if (!confirm("continue??\n"+Nmsg)){return;}
var C = new Array();
var Cmsg = new String("Cmsg:");
var w = new String("");
var s = new String("");

/*
if (!confirm ("numTiBlocks=" + numTiBlocks + "\nt=\n" + t))
  {
    return;
  }
*/

var NlenMinusOne = N.length-1;
for(j=0;j<NlenMinusOne;j++){

temp = String(N[j]);
temp = temp+"</mods:titleInfo>";

///titleInfoTag
if(temp.indexOf("titleInfo")>-1){
	temp2 = temp.substring(temp.indexOf("mods:titleInfo"));
        temp2 = temp2.substring(0,temp2.indexOf("<mods:"));
//======C[0] display label
	if (temp2.indexOf("displayLabel")>-1) {
        C[0] = getDisplayLabel(temp2);
	}else{
	C[0]="empty_string";
	}
//======C[1] type_auth
	if (temp2.indexOf("type")>-1){
        C[1] = getTypeAuth(temp2);
	}else{
	C[1] = "_zero";
	}
}//end titleInfo tag


//======C[2] nonSort
	if (temp.indexOf("nonSort")> -1){
	temp2 = temp.substring(temp.indexOf("mods:nonSort"));
	index2 = temp2.indexOf("</mods:nonSort>")+15;
	temp2 = temp2.substring(0,index2);
	C[2] = getEntityData(temp2);
	}else{
	C[2]="empty_string";
	}//end nonSortTag

//======C[3] title
	temp3 = temp.substring(temp.indexOf("Info"));
	if (temp3.indexOf("mods:title>")> -1){
	temp2=temp3.substring(temp3.indexOf("mods:title>"));
	index2 = temp2.indexOf("</mods:title>")+13;
	temp2 = temp2.substring(0,index2);
	C[3] = getEntityData(temp2);
	}else{
	C[3]="empty_string";
	}
	//alert("temp=\n"+temp+"\n\ntemp2 for title tag=\n"+temp2);
//======C[4] subTitle 
	temp3 = temp.substring(temp.indexOf("</mods:title"));
	temp3 = temp3.substring(6);
	if (temp3.indexOf("subTitle>")> -1){
	temp2=temp3.substring(temp3.indexOf("mods:subTitle>"));
	index2 = temp2.indexOf("</mods:subTitle>")+6;
	temp2 = temp2.substring(0,index2);
	C[4] = getEntityData(temp2);
	}else{
	C[4]="empty_string";
	}

//======C[5] partNumber 
	if (temp.indexOf("partNumber>")> -1){
	temp2=temp.substring(temp.indexOf("mods:partNumber>"));
	index2 = temp2.indexOf("</mods:partNumber>")+18;
	temp2 = temp2.substring(0,index2);
	C[5] = getEntityData(temp2);
	}else{
	C[5]="empty_string";
	}
//======C[6] partName
	if (temp.indexOf("partName>")> -1){
	temp2=temp.substring(temp.indexOf("mods:partName>"));
	index2 = temp2.indexOf("</mods:partName>")+16;
	temp2 = temp2.substring(0,index2);
	C[6] = getEntityData(temp2);
	}else{
	C[6]="empty_string";
	}

Cmsg="i="+i +"   Cmsg:";
for(b=0;b<C.length;b++) {
    Cmsg += "\nC["+b+"]= "+C[b];
    w+= parent.U.split_token + C[b];
    }
//alert("temp=\n"+temp+"\n---------------------------------------------------\n"+Cmsg );
}//end for j


w = w.substring(parent.U.split_token.length);
parent.U.document.UF.ti_block_list.value = w;

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

s0 = s0.replace(/<\/mods:name>/g,"</mods:name><mods:end>END_NAME_BLOCK_0");

var numNameBlocks = new Number( parent.L.get_block_iteration("name"));

//alert("There are "+numNameBlocks+" name blocks.\n\n "+s0);


var M = new Array();
    M = s0.split("<mods:");
var Mmsg =  new String("<name> Mmsg:");
var Amsg =  new String("");
var s = new String();
var temp = new String();
var roleTermTemp = new String();
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
                if (M[m].indexOf('roleTerm')>-1){
	                    temp = getEntityData(M[m]);
			    roleTermTemp += "; " +temp;
                        A[5]=roleTermTemp.substring(2);
			//alert("roleTermTemp="+roleTermTemp+"\nA[5]="+A[5]);
                }
                //=== A[6] =================
                if (M[m].indexOf('<mods:namePart type="date"')>-1){
                            temp = M[m].substring(M[m].indexOf(">") );
                            temp = temp.substring(1,temp.indexOf("<"));
                            A[6]=temp;
                }
                //=== A[7] =========================
                if (M[m].indexOf("END_NAME_BLOCK")>-1){
			roleTermTemp="";//reset at end
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

var strAat  = new String("");
var strNmc  = new String("");
var strMarc = new String("");
var strOther = new String("");
var strOtherAuth = new String("");
var indexOther = 0;
var str_gt_block_list = new String("");
var t = new String(parent.U.document.U2.mods_genre.value);
var M = new Array();
    M = t.split("<mods:");
var Mmsg = new String("Mmsg:");
for (i=0; i<M.length; i++) {
        M[i]="<mods:"+M[i];
        Mmsg += "\n M["+i+"]="+M[i];
        if (M[i].indexOf('authority="aat"')>-1)          { strAat += "; " + getEntityData(M[i]);
        }else if (M[i].indexOf('authority="nmc"')>-1)    { strNmc += "; " + getEntityData(M[i]);
        }else if (M[i].indexOf('authority="marcgt"')>-1) { strMarc += "; " + getEntityData(M[i]);
        }else if (M[i].indexOf('authority="') >-1)  {
		//alert("M["+i+"]="+M[i]);
		indexOther=M[i].indexOf('authority="')+11;
		strOtherAuth=M[i].substring(indexOther);
		strOtherAuth=strOtherAuth.substring(0,strOtherAuth.indexOf('"'));
		strOther += "; " + getEntityData(M[i]);
		//alert("strOtherAuth="+strOtherAuth+"\nstrOther="+strOther);
	}
}//end for

//alert(Mmsg);

strAat = strAat.substring(2);
strNmc = strNmc.substring(2);
strMarc = strMarc.substring(2);
strOther = strOther.substring(2);

if (strAat ==  "" ) { strAat="empty_string";   }
if (strNmc ==  "" ) { strNmc="empty_string";   }
if (strMarc == "" ) { strMarc ="empty_string"; }
if (strOther == "" ) { strOther ="empty_string"; }
if (strOtherAuth == "" ) { strOtherAuth ="empty_string"; }

////if (! confirm(Mmsg +"\n\nstrAat="+strAat+"\nstrNmc="+strNmc+"\nstrMarc="+strMarc) ) {return;}


parent.U.document.UF.gt_block_list.value = strAat + parent.U.split_token
                                         + strNmc + parent.U.split_token
                                         + strMarc + parent.U.split_token
					 + strOtherAuth + parent.U.split_token
					 + strOther;


return;
}//end function process_genre


//=================================================================
//=================================================================
function process_originInfo(str) {

//alert("process_originInfo str:\n"+str);
var s = new String(parent.U.document.U2.mods_originInfo.value);
    if ( s.length == 0 ) { return (""); }
    s = s.replace(/<mods:/g,":::<mods:"); 
var Aoi = new Array();
    Aoi = s.split(":::");
var Amsg =" process_originInfo: Amsg:";

var M = new Array ( //default values
 "empty_string" //date_created
,"empty_string" //date_createdQ
,"empty_string" //date_created_begin
,"empty_string" //date_created_beginQ
,"empty_string" //date_created_end
,"empty_string" //date_created_endQ
,"none"        //place_of_origin_auth
,"empty_string" //place_of_origin
,"empty_string" //publisher_name_address
,"empty_string" //date_issued
,"empty_string" //date_issuedQ
);


//for (i=0;i<Aoi.length;i++){ Amsg += "\n Aoi["+i+"]="+Aoi[i]; }
//if (!confirm(Amsg)) return;


var temp= new String();
var w   = new String();

for ( i=0; i<Aoi.length; i++) {

temp=Aoi[i];

if (temp.indexOf("dateCreated") > -1 && temp.indexOf("point=")== -1) {
		M[0]=getEntityData(temp); //single creation date
		M[1]=getDateQualifier(temp);//Q
}else if (temp.indexOf("dateCreated") > -1 && temp.indexOf('point="start"') > -1) {
		M[2]=getEntityData(temp); //begin creation date
		M[3]=getDateQualifier(temp);//Q
}else if (temp.indexOf("dateCreated") > -1 && temp.indexOf('point="end"') > -1) {
		M[4]=getEntityData(temp); //end creation date
		M[5]=getDateQualifier(temp); //Q
}else if (temp.indexOf("dateIssued")>-1 ) {
		M[9]=getEntityData(temp); //date issued
		M[10]=getDateQualifier(temp); //Q
}else if (temp.indexOf("placeTerm")>-1 ) { //place of origin
		M[7]=getEntityData(temp);
		if (temp.indexOf('authority')== -1 ) {
			tempAuth = "_zero";
		}else if (temp.indexOf('authority="marccountry"') > -1) {
			tempAuth ="MarcCountry";
		}else if(temp.indexOf('authority="iso1366"')>-1) {
			tempAuth ="ISO1366";
		}
		if (temp.indexOf('type="code"') > -1 ){
			tempAuth +='Code';
		}else if (temp.indexOf('type="text"') > -1 ){
			tempAuth +='Text';
		}
		M[6]= tempAuth; //authority for placeTerm
}else if (temp.indexOf("publisher")>-1) {
		M[8] = getEntityData(temp);//publisher name_addr
}//end else

}//end for

for (i=0;i<M.length;i++) {
	w += parent.U.split_token + M[i];
	}
w=w.substring(parent.U.split_token.length);
//if (!confirm("w="+w)) return;
parent.U.document.UF.oi_block_list.value=w;

return;

}//end function process_originInfo()

//=================================================================
//=================================================================
function process_language(str) {


var t = new String(parent.U.document.U2.mods_language.value);
//alert ("t="+t);
var w = new String("");

var M = new Array();
      M = t.split("<mods:");
//for (i=0;i<M.length;i++) {
//	alert("M["+i+"]="+M[i]);
//	}

var Mmsg = new String("Mmsg:");
for (i=0; i<M.length; i++) {
        M[i]="<mods:"+M[i];
        Mmsg += "\n M["+i+"]="+M[i];
	if (M[i].indexOf("languageTerm")>-1) {
        	w += parent.U.split_token + getEntityData(M[i]);;
		}
}//end for

//alert(Mmsg);


w = w.substring(parent.U.split_token.length);
//alert("w="+w);


parent.U.document.UF.la_block_list.value = w;

return;
}//end function process_language


//=================================================================
//=================================================================
function process_physicalDescription() {

//alert("process_physicalDescription str:\n"+str);
var s = new String(parent.U.document.U2.mods_physicalDescription.value);
if (s.length==0) {return;}

var Mpd = new Array();//input from chomp
    Mpd = s.split("<mods:");
var Mmsg = new String("physicalDescription Mmsg:");

//initial values for Apd loaded
var Apd = new Array(//output to pd_block_list
 "_zero"
,"_zero"
,"empty_string"
,"_zero"
,"empty_string"
,"empty_string"
,"empty_string"
);

var w = new String();

/*
for (i=0;i<Mpd.length;i++) {
	Mpd[i] = "<mods:"+Mpd[i];
	Mmsg += "\n Mpd["+i+"]="+Mpd[i];
	}
alert("physicalDescription\n"+Mmsg);
*/


for (i=0;i<Mpd.length;i++) {

//===============Apd[0]===digitalOrigin
if (Mpd[i].indexOf("digitalOrigin")>-1) {
	Apd[0]=getEntityData(Mpd[i]);
	}


//===============Apd[1]===authority for type="technique"
//===============Apd[2]===value for type="technique"

if (Mpd[i].indexOf("technique")>-1) {
	Apd[2]=getEntityData(Mpd[i]);
	if (Mpd[i].indexOf('authority="aat"') >-1) {
		Apd[1] = "aat";
		}
	}
	
//===============Apd[3]===authority for type="medium"
//===============Apd[4]===value for type="medium"

if (Mpd[i].indexOf("medium")>-1) {
	Apd[4]=getEntityData(Mpd[i]);
	if (Mpd[i].indexOf('authority="aat"') >-1) {
		Apd[3] = "aat";
		}
	}

//===============Apd[5]===internetmediatype
if (Mpd[i].indexOf("internetMediaType")>-1) {
	Apd[5]=getEntityData(Mpd[i]);
	}

//===============Apd[6]===extent
if (Mpd[i].indexOf("mods:extent")>-1) {
	Apd[6]=getEntityData(Mpd[i]);
	}

//===============Apd[7]===note

if (Mpd[i].indexOf("mods:note")>-1) {
	Apd[7]=getEntityData(Mpd[i]);
	}


}///end for

for (i=0;i<Apd.length;i++) {
	w += parent.U.split_token + Apd[i];
	}

w = w.substring(parent.U.split_token.length);
//alert("pd_block_list w=\n"+w);

parent.U.document.UF.pd_block_list.value = w;

return;
}//end function process_physicalDescription


//=================================================================
//=================================================================
function process_abstract() {

//alert("process_abstract str:\n"+str);
var s = new String(parent.U.document.U2.mods_abstract.value);
var w = new String();
var M = new String();
var Mmsg = new String(" abstract Mmsg:");
var temp = new String();
if ( s.length == 0 ) { return (""); }

var Aab = new Array();
    Aab = s.split("<mods:");

for (i=1;i<Aab.length;i++) {
	M = "<mods:"+Aab[i];
	Mmsg += "\n Aab["+i+"]="+M;
	temp = getEntityData(M);
	if (temp.length == 0 ) { temp = "empty_string"; }
	w += parent.U.split_token + temp;
	}
//alert(Mmsg);
w = w.substring(parent.U.split_token.length);
parent.U.document.UF.ab_block_list.value = w;
	

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

}//end function process_ac_group


//=================================================================
//=================================================================
function process_recordInfo() {

//alert("process_recordInfo str:\n"+str);
var s = new String(parent.U.document.U2.mods_recordInfo.value);
if (s.length==0) {return;}

    s = s.replace(/<mods:/g,":::<mods:"); 
var Are = new Array();
    Are = s.split(":::");

//set initial values for re_block_list
var M = new Array(
 "_zero" 	//rcs_aughority
,"empty_string" //record_content_source
,"empty_string" //record_info_origin
,"empty_string" //record_creation_date
,"empty_string" //language_of_cataloging
,"empty_string" //language_of_cataloging_display
);

var w = new String();

for (i=0; i<Are.length; i++) {

//======== M[0] -- rcs authority
//======== M[1] -- record_content_source
if (Are[i].indexOf("recordContentSource")> -1) {
	if (Are[i].indexOf("marcorg") > -1) {
		M[0] = 'marcorg';
	}else if (Are[i].indexOf("oclcorg") > -1) {
		M[0] = 'oclcorg';
	}else {
		M[0] = "_zero";
	}
	M[1]=getEntityData(Are[i]);
}

//======== M[2] -- record_info_origin
if (Are[i].indexOf("recordOrigin")> -1) {
	M[2]=getEntityData(Are[i]);
}

//======== M[3] -- record_creation_date
if (Are[i].indexOf("recordCreationDate")> -1) {
	M[3]=getEntityData(Are[i]);
}


//======== M[4] -- language_of_cataloging
if (Are[i].indexOf('type="code"') >-1 ) {
	M[4]= getEntityData(Are[i]);
}
//======== M[5] -- language_of_cataloging_display
	if (Are[i].indexOf('type="text"') >-1 ) {
		M[5]= getEntityData(Are[i]);
	}else if (M[4] != 'empty_string') {
		M[5] = getTran(aLanguage,M[4]);
	}

}//end for

for (i=0;i<M.length;i++ ) {
	w += parent.U.split_token + M[i];
	}
w=w.substring(parent.U.split_token.length);

//alert ("recordInfo w=\n"+w);

parent.U.document.UF.re_block_list.value = w;

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
///alert( "got to here orig_parseData");

var temp = new String("");
var index = 0;
var index2 = 0;

var chompStr = new String(parent.U.document.U2.chomp.value);
    chompStr = clean_01(chompStr);//replace encodings for &amp;,&gt;,&lt;,&apos;,&quot;
    chompStr = chompStr.replace(/ >/g,">");
    chompStr = chompStr.replace(/  /g," ");

//mods_header
//<!-- BLOCK ITERATION :1:1:1:1:1:1:1:1:1:1:1:1:1:1:1: -->
//<!-- PAGE VALIDATION :a:b:c:d:e:f:g:h:i:j:k:l:m:n:o: -->
//note PAGE VALIDATION MUST BE LAST COMMENT, because BLOCK ITERATION can have :nn: repeat value, change char count on comment
index =0;
index2 = chompStr.indexOf("PAGE VALIDATION")+51;
parent.U.document.U2.mods_header.value = chompStr.substring(index,index2);

//mods_ti_group -- all titleInfo blocks together <mods:titleInfo>...</mods:titleInfo><mods:titleInfo>...repeats...</mods:titleInfo>
//mods_titleInfo <mods:titleInfo>...</mods:titleInfo>//old before titleInfo dynamic
index = chompStr.indexOf("<mods:titleInfo");
index2 = chompStr.lastIndexOf("</mods:titleInfo>") +17;
parent.U.document.U2.mods_titleInfo.value = chompStr.substring(index,index2);
//mods_ti_group
parent.U.document.U2.mods_ti_group.value = chompStr.substring(index,index2);

//mods_name_group -- all name blocks together <mods:name>...</mods:name><mods:name>...repeats...</mods:name>
//but the tag <mods:name can appear on page <subject> where name can be a subject
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
	index2 = chompStr.lastIndexOf("</mods:genre>")+13;
	parent.U.document.U2.mods_genre.value = chompStr.substring(index_gr,index2);
}else{
	parent.U.document.U2.mods_genre.value = "";
}

//mods_originInfo <mods:originInfo>...</mods:originInfo>
index = index2;
index2 = chompStr.indexOf("</mods:originInfo>")+18;
parent.U.document.U2.mods_originInfo.value = chompStr.substring(index,index2);

//mods_language -- mods:language, mods:typeOfResource, mods:genre
index = chompStr.indexOf("<mods:language>");
index2 = chompStr.lastIndexOf("</mods:language>")+16; 
parent.U.document.U2.mods_language.value = chompStr.substring(index,index2);

//mods_physicalDescription <mods:physicalDescription>...</mods:physicalDescription>
index = index2;
index2 = chompStr.indexOf("</mods:physicalDescription>") +27;
parent.U.document.U2.mods_physicalDescription.value = chompStr.substring(index,index2);


//mods_abstract
index = chompStr.indexOf("<mods:abstract");
index2 = chompStr.lastIndexOf("</mods:abstract>")+16;
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

//mods_ri_group -- <mods:relatedItem .../> repeatable, not required
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
//if (!confirm("end function orig_parseData continue?")){return;}
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
process_lu_group();
process_ac_group();
process_recordInfo();

if (parent.reload_dev){
endSuccess("finish processData");
}
}


//=================================================================
//=================================================================
//the end
