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

//vv_tuple.js

//page_lower.htm loaded once, never reloaded
//the arrays on this page are CONSTANTS



//needed in process_header
var DATE = new Date();
//var reload_debug = false;//true;

//The purpose of this page is to simplify code maintainence.
//The fundamental unit  is the dataTuple object, built by the function dataTuple.
//Each dataTuple object has two parts
//         dataTuple.code : the code value
//         dataTuple.tran : the translation value


//All of the popups from vv_popupLists.htm have select boxes.
//These are built from predefined arrays of dataTuple objects by the functions
//          getSelectList
//          getSelectList2

//The code/tran values from these select boxes are
//populated into text inputs on workbook pages.
//Only the code values are saved to the final xml output.

//In the reload process, the file vv_deocompose_tags.js 
//derives the tran values from the code values using the function
//          getTran
//	    getCode


//If any array value has to be changed or added or deleted, it is done here once.
//This will take care of changes for popupLists and for reload.


///========================================================================
///The dataTuple object is the fundamental unit of all arrays on this page.
///code is a string
///tran is a string
function dataTuple ( code, tran ) {
	this.code = code;
	this.tran = tran;
	}

///========================================================================
///get the tran for the code
///aTupleArray - array of dataTuple objects
function getTran ( aTupleArray, code ){

var j =0;
for ( j=0; j<aTupleArray.length; j++) {
	if (aTupleArray[j].code == code ) {
		return(aTupleArray[j].tran);
		}
	}//end for
//if no match is found, return code
return(code);
}//end function getTran( aTupleArray, code )

///========================================================================
///get the code for the tran
///aTupleArray - array of dataTuple objects
function getCode ( aTupleArray, tran ){

var j =0;
for ( j=0; j<aTupleArray.length; j++) {
	if (aTupleArray[j].tran == tran ) {
		return(aTupleArray[j].code);
		}
	}//end for
//if no match is found, return tran
return(tran);
}//end function getCode( aTupleArray, code )


///========================================================================
//page 6: get index of radio button checked from pattern match from document.DF.record_content_source.value vs. aRecord_content_source_radio array 

function getIndexChecked ( aTupleArray, str ) {

var origStr = new String(str);
var match   = new String('');
var len = aTupleArray.length - 1;
var j = 0;
for ( j=0; j<len; j++) {
	match = aTupleArray[j].tran;
	if ( origStr.indexOf(match) > -1 ) { return j; }
	if ( match.indexOf(origStr) > -1 ) { return j; }
	}

return (len);//index of OTHER

}



///========================================================================
///get the county code from the tran and parent.adb_instcounty
///aTupleArray - array of dataTuple objects
///This is used on page 6
function getCountyCode ( aTupleArray, adb_instcounty ){


var CountyName = new String(adb_instcounty);
var countyTran = new String();
var j =0;
for ( j=0; j<aTupleArray.length; j++) {
	countyTran = aTupleArray[j].tran;
	if (countyTran.indexOf(CountyName) > -1 ) {
		return(aTupleArray[j].code);
		}
	}//end for
//if no match is found, return empty string
return("");
}//end function getCountyCode( aTupleArray, adb_instcounty )

///========================================================================
function getSelectList ( aTupleArray, indexOfSelected ) {

var n = new Number(indexOfSelected);
var r = new String(" ");
var s = new String("");

for (j=0; j<aTupleArray.length; j++ ) {
	if ( j != n ) {
	s = '<option value="'+aTupleArray[j].code+'">'+aTupleArray[j].tran+'</option>\r\n';
	}else{
	s = '<option value="'+aTupleArray[j].code+'" selected>'+aTupleArray[j].tran+'</option>\r\n';
	}
	r += s;
}//end for

return(r);
}//end getSelectList


///========================================================================
function getSelectList2 ( aTupleArray, strSelected ) {

var item = new String(strSelected);
var r = new String(" ");
var s = new String("");

for (j=0; j<aTupleArray.length; j++ ) {
	if ( aTupleArray[j].tran != item  ) { 
		s = '<option value="'+aTupleArray[j].code+'">'+aTupleArray[j].tran+'</option>\r\n';
	}else{
		s = '<option value="'+aTupleArray[j].code+'" selected>'+aTupleArray[j].tran+'</option>\r\n';
	}
	r += s;
}//end for

return(r);
}//end getSelectList2

///========================================================================


///========================================================================
///========================================================================
///========================================================================



///========================================================================
aCollection_id_num_type = new Array (//create the aCollection_id_num_type array
 new dataTuple(0,"none selected")
,new dataTuple(1,"manuscriptNumber")
,new dataTuple(2,"archiveNumber")
,new dataTuple(3,"callNumber")
,new dataTuple(4,"accessionNumber")
,new dataTuple(5,"otherIdentificationNumber")
);


///========================================================================
aGenre = new Array(//create the aGenre array of dataTuple objects
 new dataTuple('abstract or summary','abstract or summary')
,new dataTuple('art original','art original')
,new dataTuple('art reproduction','art reproduction')
,new dataTuple('atlas','atlas')
,new dataTuple('autobiography','autobiography')
,new dataTuple('bibliography','bibliography')
,new dataTuple('biography','biography')
,new dataTuple('book','book')
,new dataTuple('catalog','catalog')
,new dataTuple('chart','chart')
,new dataTuple('comic strip','comic strip')
,new dataTuple('conference publication','conference publication')
,new dataTuple('database','database')
,new dataTuple('dictionary','dictionary')
,new dataTuple('diorama','diorama')
,new dataTuple('directory','directory')
,new dataTuple('discography','discography')
,new dataTuple('drama','drama')
,new dataTuple('encyclopedia','encyclopedia')
,new dataTuple('essay','essay')
,new dataTuple('festschrift','festschrift')
,new dataTuple('fiction','fiction')
,new dataTuple('filmography','filmography')
,new dataTuple('filmstrip','filmstrip')
,new dataTuple('flash card','flash card')
,new dataTuple('folktale','folktale')
,new dataTuple('font','font')
,new dataTuple('game','game')
,new dataTuple('government publication','government publication')
,new dataTuple('graphic','graphic')
,new dataTuple('globe','globe')
,new dataTuple('handbook','handbook')
,new dataTuple('history','history')
,new dataTuple('humor, satire','humor, satire')
,new dataTuple('index','index')
,new dataTuple('instruction','instruction')
,new dataTuple('interview','interview')
,new dataTuple('kit','kit')
,new dataTuple('language instruction','language instruction')
,new dataTuple('law report or digest','law report or digest')
,new dataTuple('legal article','legal article')
,new dataTuple('legal case and case notes','legal case and case notes')
,new dataTuple('legislation','legislation')
,new dataTuple('letter','letter')
,new dataTuple('loose-leaf','loose-leaf')
,new dataTuple('map','map')
,new dataTuple('memoir','memoir')
,new dataTuple('microscope slide','microscope slide')
,new dataTuple('model','model')
,new dataTuple('motion picture','motion picture')
,new dataTuple('multivolume monograph','multivolume monograph')
,new dataTuple('newspaper','newspaper')
,new dataTuple('novel','novel')
,new dataTuple('numeric data','numeric data')
,new dataTuple('online system or service','online system or service')
,new dataTuple('patent','patent')
,new dataTuple('periodical','periodical')
,new dataTuple('picture','picture')
,new dataTuple('poetry','poetry')
,new dataTuple('programmed text','programmed text')
,new dataTuple('realia','realia')
,new dataTuple('rehearsal','rehearsal')
,new dataTuple('remote sensing image','remote sensing image')
,new dataTuple('reporting','reporting')
,new dataTuple('review','review')
,new dataTuple('series','series')
,new dataTuple('short story','short story')
,new dataTuple('slide','slide')
,new dataTuple('sound','sound')
,new dataTuple('speech','speech')
,new dataTuple('statistics','statistics')
,new dataTuple('survey of literature','survey of literature')
,new dataTuple('technical drawing','technical drawing')
,new dataTuple('technical report','technical report')
,new dataTuple('theses','theses')
,new dataTuple('toy','toy')
,new dataTuple('transparency','transparency')
,new dataTuple('treaty','treaty')
,new dataTuple('videorecording','videorecording')
,new dataTuple('web site','web site')
)//end aGenre


///========================================================================
aInstitutionList = new Array (//create the aInstitutionList array
 new dataTuple('0029','Belmont University')
,new dataTuple('0020','Blount County Public Library')
,new dataTuple('0023','C. M. McClung Historical Collection')
,new dataTuple('0018','Center for Popular Music')
,new dataTuple('0016','Cleveland State Community College')
,new dataTuple('0026','DLC Tech Group')
,new dataTuple('001','First Sample Institution')
,new dataTuple('0027','Jackson-Madison County Library')
,new dataTuple('0024','Knox County Archives')
,new dataTuple('0014','Memphis Public Library')
,new dataTuple('0025','Metropolitan Nashville Archives')
,new dataTuple('0028','Tennessee Historical Society')
,new dataTuple('0015','Tennessee State Library and Archives')
,new dataTuple('0021','test')
,new dataTuple('0022','University of Memphis Special Collections')
,new dataTuple('0012','University of Tennessee Special Collections Library')
,new dataTuple('0017','Vanderbilt University Library')
);


///========================================================================
aInternetmediatype = new Array (//create the aInstitutionList array
 new dataTuple('image/gif','image/gif : GIF image')
,new dataTuple('image/jpeg','image/jpeg : JPEG JFIF image')
,new dataTuple('image/png','image/png : Portable Network Graphics')
,new dataTuple('image/tiff/','image/tiff : Tag Image File Format')
,new dataTuple('image/vnd.microsoft.icon','image/vnd.micorsoft.icon : ICO image')
,new dataTuple('audio/mpeg','audio/mpeg MP3 or other MPEG audio')
,new dataTuple('audio/x-ms-wma', 'audio/x-ms-wma : Windows Media Audio')
,new dataTuple('audio/vnd.rn-realaudio', 'audio/vnd.rn-realaudio : RealAudio')
,new dataTuple('audio/x-wav','audio/x-wav : WAV audio')
,new dataTuple('video/mpeg','video/mpeg : MPEG-1 video with multiplexed audio')
,new dataTuple('video/mp4','video/mp4 : MP4 video')
,new dataTuple('vidoe/quicktime','video/quicktime : QuickTime video')
,new dataTuple('video/x-ms-wmv','video/x-ms-wmv: Windows Media Video')
);




///========================================================================
aLanguage = new Array(//create the aLanguage array of dataTuple objects
 new dataTuple('chr','Cherokee')
,new dataTuple('chi','Chinese')
,new dataTuple('eng','English')
,new dataTuple('fra','French')
,new dataTuple('ger','German')
,new dataTuple('gre','Greek')
,new dataTuple('heb','Hebrew')
,new dataTuple('ita','Italian')
,new dataTuple('jpn','Japanese')
,new dataTuple('lat','Latin')
,new dataTuple('por','Portuguese')
,new dataTuple('rus','Russian')
,new dataTuple('spa','Spanish')
,new dataTuple('yid','Yiddish')
,new dataTuple('zxx','No linguistic content')
)//end aLanguage

///========================================================================
aLocsubject = new Array (//create the aLocsubject array of dataTuple objects
 new dataTuple('0','none selected') 
,new dataTuple('mods:cartographics','mods:cartographics')
,new dataTuple('mods:genre','mods:genre')
,new dataTuple('mods:geographic','mods:geographic')
,new dataTuple('mods:geographicCode','mods:geographicCode')
,new dataTuple('mods:hierarchicalGeographic','mods:hierarchicalGeographic')
,new dataTuple('mods:name type="corporate"','mods:name type="corporate"')
,new dataTuple('mods:name type="personal"','mods:name type="personal"')
,new dataTuple('mods:occupation','mods:occupation')
,new dataTuple('mods:temporal','mods:temporal')
,new dataTuple('mods:titleInfo','mods:titleInfo')
,new dataTuple('mods:topic','mods:topic')
)//end aLocsubject
 
///========================================================================
aLocsubjectCartographics = new Array (//create the aLocsubjectCartographics array of dataTuple objects
 new dataTuple('0','none selected') 
,new dataTuple('coordinates','coordinates')
,new dataTuple('scale','scale')
,new dataTuple('projection','projection')
);//end aLocsubject Cartographics

///========================================================================
aLocsubjectHGeographic = new Array (//create the aLocsubjectHGeographic (Hierarchical) array of dataTuple objects
 new dataTuple('0','none selected') 
,new dataTuple('continent','continent')
,new dataTuple('country','country')
,new dataTuple('province','province')
,new dataTuple('region','region')
,new dataTuple('state','state')
,new dataTuple('territory','territory')
,new dataTuple('county','county')
,new dataTuple('city','city')
,new dataTuple('island','island')
,new dataTuple('area','area')
);//end aLocsubjectHGeographic



///========================================================================
aNameAuthority = new Array (//create the aNameAuthority array of dataTuple objects
 new dataTuple(0,"NONE")
,new dataTuple(1,"LCNAF")
,new dataTuple(2,"ULAN")
);


///========================================================================
aRecord_content_source_radio = new Array(
 new dataTuple(0, "University of Tennessee Special Collections Library")
,new dataTuple(1, "Tennessee State Library and Archives")
,new dataTuple(2, "Memphis Public Library and Information Center")
,new dataTuple(3,"")
);


///========================================================================
aResource = new Array(//create the aResource array of dataTuple objects
 new dataTuple('text','text')
,new dataTuple('cartographic','cartographic')
,new dataTuple('notated music','notated music')
,new dataTuple('sound recording','sound recording')
,new dataTuple('sound recording-musical','sound recording-musical')
,new dataTuple('sound recording-nonmusical','sound recording-nonmusical')
,new dataTuple('still image','still image')
,new dataTuple('moving image','moving image')
,new dataTuple('three dimensional object','three dimensional object')
,new dataTuple('software, multimedia','software, multimedia')
)//end aResource


///========================================================================
//This is from the MARC Relatorlist at: www.loc.gov
//alphabetized by Tiffani Conner
aRole = new Array(//create the aRole array of dataTuple objects
 new dataTuple('Actor','Actor')
,new dataTuple('Adapter','Adapter')
,new dataTuple('Annotator','Annotator')
,new dataTuple('Applicant','Applicant')
,new dataTuple('Architect','Architect')
,new dataTuple('Arranger','Arranger')
,new dataTuple('Artist','Artist')
,new dataTuple('Assignee','Assignee')
,new dataTuple('Associated name','Associated name')
,new dataTuple('Attributed name','Attributed name')
,new dataTuple('Auctioneer','Auctioneer')
,new dataTuple('Author','Author')
,new dataTuple('Author in quotations or text abstracts','Author in quotations or text abstracts')
,new dataTuple('Author of afterword, colophon, etc.','Author of afterword, colophon, etc.')
,new dataTuple('Author of dialog','Author of dialog')
,new dataTuple('Author of introduction','Author of introduction')
,new dataTuple('Author of screenplay','Author of screenplay')
,new dataTuple('Bibliographic antecedent','Bibliographic antecedent')
,new dataTuple('Binder','Binder')
,new dataTuple('Binding designer','Binding designer')
,new dataTuple('Book designer','Book designer')
,new dataTuple('Book producer','Book producer')
,new dataTuple('Bookjacket designer','Bookjacket designer')
,new dataTuple('Bookplate designer','Bookplate designer')
,new dataTuple('Bookseller','Bookseller')
,new dataTuple('Calligrapher','Calligrapher')
,new dataTuple('Cartographer','Cartographer')
,new dataTuple('Censor','Censor')
,new dataTuple('Choreographer','Choreographer')
,new dataTuple('Client','Client')
,new dataTuple('Collaborator','Collaborator')
,new dataTuple('Collector','Collector')
,new dataTuple('Collotyper','Collotyper')
,new dataTuple('Commentator','Commentator')
,new dataTuple('Commentator for written text','Commentator for written text')
,new dataTuple('Compiler','Compiler')
,new dataTuple('Complainant','Complainant')
,new dataTuple('Complainant-appellant','Complainant-appellant')
,new dataTuple('Complainant-appellee','Complainant-appellee')
,new dataTuple('Composer','Composer')
,new dataTuple('Compositor','Compositor')
,new dataTuple('Conceptor','Conceptor')
,new dataTuple('Conductor','Conductor')
,new dataTuple('Consultant','Consultant')
,new dataTuple('Consultant to a project','Consultant to a project')
,new dataTuple('Contestant','Contestant')
,new dataTuple('Contestant-appellant','Contestant-appellant')
,new dataTuple('Contestant-appellee','Contestant-appellee')
,new dataTuple('Contestee','Contestee')
,new dataTuple('Contestee-appellant','Contestee-appellant')
,new dataTuple('Contestee-appellee','Contestee-appellee')
,new dataTuple('Contractor','Contractor')
,new dataTuple('Contributor','Contributor')
,new dataTuple('Copyright claimant','Copyright claimant')
,new dataTuple('Copyright holder','Copyright holder')
,new dataTuple('Corrector','Corrector')
,new dataTuple('Correspondent','Correspondent')
,new dataTuple('Costume designer','Costume designer')
,new dataTuple('Creator','Creator')
,new dataTuple('Curator','Curator')
,new dataTuple('Dancer','Dancer')
,new dataTuple('Dedicatee','Dedicatee')
,new dataTuple('Dedicator','Dedicator')
,new dataTuple('Defendant','Defendant')
,new dataTuple('Defendant-appellant','Defendant-appellant')
,new dataTuple('Defendant-appellee','Defendant-appellee')
,new dataTuple('Degree grantor','Degree grantor')
,new dataTuple('Delineator','Delineator')
,new dataTuple('Depositor','Depositor')
,new dataTuple('Designer','Designer')
,new dataTuple('Director','Director')
,new dataTuple('Dissertant','Dissertant')
,new dataTuple('Distributor','Distributor')
,new dataTuple('Donor','Donor')
,new dataTuple('Draftsman','Draftsman')
,new dataTuple('Dubious author','Dubious author')
,new dataTuple('Editor','Editor')
,new dataTuple('Electrotyper','Electrotyper')
,new dataTuple('Engineer','Engineer')
,new dataTuple('Engraver','Engraver')
,new dataTuple('Etcher','Etcher')
,new dataTuple('Expert','Expert')
,new dataTuple('Facsimilist','Facsimilist')
,new dataTuple('Film editor','Film editor')
,new dataTuple('Forger','Forger')
,new dataTuple('Former owner','Former owner')
,new dataTuple('Funder','Funder')
,new dataTuple('Graphic technician','Graphic technician')
,new dataTuple('Honoree','Honoree')
,new dataTuple('Host','Host')
,new dataTuple('Illuminator','Illuminator')
,new dataTuple('Illustrator','Illustrator')
,new dataTuple('Inscriber','Inscriber')
,new dataTuple('Instrumentalist','Instrumentalist')
,new dataTuple('Interviewee','Interviewee')
,new dataTuple('Interviewer','Interviewer')
,new dataTuple('Inventor','Inventor')
,new dataTuple('Landscape architect','Landscape architect')
,new dataTuple('Lender','Lender')
,new dataTuple('Libelant','Libelant')
,new dataTuple('Libelant-appellant','Libelant-appellant')
,new dataTuple('Libelant-appellee','Libelant-appellee')
,new dataTuple('Libelee','Libelee')
,new dataTuple('Libelee-appellant','Libelee-appellant')
,new dataTuple('Libelee-appellee','Libelee-appellee')
,new dataTuple('Librettist','Librettist')
,new dataTuple('Licensee','Licensee')
,new dataTuple('Licensor','Licensor')
,new dataTuple('Lithographer','Lithographer')
,new dataTuple('Lyricist','Lyricist')
,new dataTuple('Metadata contact','Metadata contact')
,new dataTuple('Metal-engraver','Metal-engraver')
,new dataTuple('Moderator','Moderator')
,new dataTuple('Monitor','Monitor')
,new dataTuple('Musician','Musician')
,new dataTuple('Narrator','Narrator')
,new dataTuple('Opponent','Opponent')
,new dataTuple('Organizer of meeting','Organizer of meeting')
,new dataTuple('Originator','Originator')
,new dataTuple('Other','Other')
,new dataTuple('Owner','Owner')
,new dataTuple('Papermaker','Papermaker')
,new dataTuple('Patent applicant','Patent applicant')
,new dataTuple('Patent holder','Patent holder')
,new dataTuple('Patron','Patron')
,new dataTuple('Performer','Performer')
,new dataTuple('Photographer','Photographer')
,new dataTuple('Plaintiff','Plaintiff')
,new dataTuple('Plaintiff-appellant','Plaintiff-appellant')
,new dataTuple('Plaintiff-appellee','Plaintiff-appellee')
,new dataTuple('Platemaker','Platemaker')
,new dataTuple('Printer','Printer')
,new dataTuple('Printer of plates','Printer of plates')
,new dataTuple('Process contact','Process contact')
,new dataTuple('Producer','Producer')
,new dataTuple('Production personnel','Production personnel')
,new dataTuple('Programmer','Programmer')
,new dataTuple('Proofreader','Proofreader')
,new dataTuple('Publisher','Publisher')
,new dataTuple('Publishing director','Publishing director')
,new dataTuple('Recipient','Recipient')
,new dataTuple('Recording engineer','Recording engineer')
,new dataTuple('Redactor','Redactor')
,new dataTuple('Renderer','Renderer')
,new dataTuple('Research team head','Research team head')
,new dataTuple('Research team member','Research team member')
,new dataTuple('Researcher','Researcher')
,new dataTuple('Respondent','Respondent')
,new dataTuple('Respondent-appellant','Respondent-appellant')
,new dataTuple('Respondent-appellee','Respondent-appellee')
,new dataTuple('Reviewer','Reviewer')
,new dataTuple('Rubricator','Rubricator')
,new dataTuple('Scenarist','Scenarist')
,new dataTuple('Scientific advisor','Scientific advisor')
,new dataTuple('Scribe','Scribe')
,new dataTuple('Sculptor','Sculptor')
,new dataTuple('Secretary','Secretary')
,new dataTuple('Signer','Signer')
,new dataTuple('Singer','Singer')
,new dataTuple('Speaker','Speaker')
,new dataTuple('Sponsor','Sponsor')
,new dataTuple('Standards body','Standards body')
,new dataTuple('Stereotyper','Stereotyper')
,new dataTuple('Surveyor','Surveyor')
,new dataTuple('Thesis advisor','Thesis advisor')
,new dataTuple('Transcriber','Transcriber')
,new dataTuple('Translator','Translator')
,new dataTuple('Type designer','Type designer')
,new dataTuple('Typographer','Typographer')
,new dataTuple('Vocalist','Vocalist')
,new dataTuple('Witness','Witness')
,new dataTuple('Woodcutter','Woodcutter')
,new dataTuple('Wood-engraver','Wood-engraver')
,new dataTuple('Writer of accompanying material','Writer of accompanying material')
)//end aRole





//for XMLPATHFULL -- used in vvprocess for page_begin.htm
//use getFilenameDirectoryIndex ( aSelectXMLPATH_index2a, b5 ); in vv_process.js
//the function getFilenameDirectoryIndex is in this file vv_tuple.js

//var ii = 0;
//ii = getFilenameDirectoryIndex ( aSelectXMLPATH_index2a, b5 );
//parent.U.document.UF.XMLPATH.value = fixDoubleBackSlashes(aSelectXMLPATH_index2a[ii].tran);
//parent.U.document.UF.XMLPATHFULL.value = fixDoubleBackSlashes(aSelectXMLPATH_index2a[ii].tran);
//parent.U.document.UF.selectXMLPATH[aSelectXMLPATH_index2a[ii].code].selected = true;




///===========================================================  
aSubjectAuthority = new Array(//create the aSubjectAuthority array of dataTuple objects
 new dataTuple('none','none -- not recommended')
,new dataTuple('local','local -- Locally assigned term. ')
,new dataTuple('aass','aass -- "Asian American Studies Library subject headings" ')
,new dataTuple('aat','aat -- AAT: Art & architecture thesaurus ')
,new dataTuple('abne','abne -- Autoridades de la Biblioteca Nacional de Espana')
,new dataTuple('agrifors','agrifors -- AGRIFOREST-sanasto ')
,new dataTuple('agrovoc','agrovoc -- AGROVOC multilingual agricultural thesaurus. ')
,new dataTuple('agrovocf','agrovocf -- AGROVOC théurus agricole multilingue ')
,new dataTuple('agrovocs','agrovocs -- AGROVOC tesauro agríla multilingüma: APIMONDIA')
,new dataTuple('allars','allars -- Allä: allmätesaurus påvenska (HeHelskinki')
,new dataTuple('amg','amg -- Audiovisual material glossary Dublin, OH ')
,new dataTuple('apaist','apaist -- APAIS thesaurus: Australian Public Affairs Info Serv')
,new dataTuple('asft','asft -- Aquatic sciences and fisheries thesaurus ')
,new dataTuple('atla','atla -- Religion indexes : American Theological Library Association')
,new dataTuple('bella','bella -- Bella: specialtesaurus fökötteratur (Helsingfors: BTJ Kirjastopalvelu)')
,new dataTuple('bhammf','bhammf -- BHA, Bibliographie d&#x0027;histoire de l&#x0027;art, mots-matiè/françs Paris')
,new dataTuple('bhashe','bhashe -- BHA, Bibliography of the history of art, subject headings/English ')
,new dataTuple('bidex','bidex -- Bilindex: a bilingual Spanish-English subject heading list ')
,new dataTuple('blmlsh','blmlsh -- British Library - Map library subject headings ')
,new dataTuple('bt','bt -- Bioethics thesaurus. (Wash, DC: Kennedy Institute, Georgetown Univ.)')
,new dataTuple('cabt','cabt -- CAB thesaurus (Slough [England]: Commonwealth Agricultural Bureaux)')
,new dataTuple('cht','cht -- Chicano thesaurus for indexing chicano materials. ')
,new dataTuple('ciesiniv','ciesiniv -- CIESIN indexing vocabulary Earth Science Information Network')
,new dataTuple('cilla','cilla -- Cilla: specialtesaurus föusik (Helsingfors: BTJ Kirjastopalvelu)')
,new dataTuple('csahssa','csahssa -- "Controlled vocabulary" in Health and safety science Bethesda, MD')
,new dataTuple('csalsct','csalsct -- CSA life sciences collection thesaurus Bethesda, MD')
,new dataTuple('csapa','csapa -- "Controlled vocabulary" in Pollution abstracts Bethesda, MD')
,new dataTuple('csh','csh -- Kapsner, Oliver Leonard. Catholic subject headings. (Catholic Lib. Assoc.)')
,new dataTuple('cstud','cstud -- Classificatieschema&#x0027;s Bibliotheek TU Universiteit Delft, Bibliotheek')
,new dataTuple('ddcrit','ddcrit -- DDC retrieval and indexing terminology KWOC Defense Logistics Agency')
,new dataTuple('dissao','dissao -- "Dissertation abstracts online" in Search tools: the guide to UNI/Data Courier Online )')
,new dataTuple('dit','dit -- Defense intelligence thesaurus. (Washington, DC: Defense Intelligence Agency)')
,new dataTuple('drama','drama -- Drama: specialtesaurus föeater och dans (Helsingfors: BTJ Kirjastopalvelu)')
,new dataTuple('dtict','dtict -- Defense Technical Information Center thesaurus (Fort Belvoir, VA: DTIC)')
,new dataTuple('ebfem','ebfem -- Encabezamientos bilingü la Fundacióducativa Ana G. Mendez (PPuerto Rico')
,new dataTuple('eks','eks -- Eduskunnan kirjaston asiasanasto (Helsingfors: Eduskunnan kirasto)')
,new dataTuple('ericd','ericd -- Thesaurus of ERIC descriptors (U.S. Dept. of Education)')
,new dataTuple('est','est -- International energy: subject thesaurus. Paris')
,new dataTuple('fast','fast -- Faceted application of subject terminology (Dublin, Ohio: OCLC)')
,new dataTuple('fgtpcm','fgtpcm -- Form/genre terms for printed cartoon material (Bowling Green, OH)')
,new dataTuple('fmesh','fmesh -- Liste systétique et liste permutédes descripteurs françs MeSH France')
,new dataTuple('francis','francis -- Base de donné FRANCIS: plan de classement =')
,new dataTuple('gem','gem -- GEM controlled vocabularies (Syracuse, NY: ERIC  Gateway to Educational Materials)')
,new dataTuple('georeft','georeft -- GeoRef thesaurus (Alexandria, VA: American Geological Institute)')
,new dataTuple('helecon','helecon -- Asiasanasto HELECON-tietikantoihin (Helsinki: Helsingin Kauppakorkeakoulu)')
,new dataTuple('henn','henn -- Hennepin County Library cumulative authority list (Edina, MN: Hennepin Co. Library)')
,new dataTuple('hlasstg','hlasstg -- HLAS subject term glossary (Washington, DC: LOC, Hispanic Division)')
,new dataTuple('idas','idas -- ID-Archivschlü[Informationsdienst zur Verbreitung unterbliebener Nachrichten] Amsterdam ')
,new dataTuple('iest','iest -- International energy: subject thesaurus Paris')
,new dataTuple('ilot','ilot -- ILO thesaurus: labour, employment and training terminology Geneva')
,new dataTuple('ilpt','ilpt -- Index to legal periodicals: thesaurus. (New York, NY: H.W. Wilson)')
,new dataTuple('inist','inist -- INIS: thesaurus (Vienna: International Atomic Energy Agency)')
,new dataTuple('inspect','inspect -- INSPEC thesaurus. (London: Institution of Electrical Engineers)')
,new dataTuple('ipat','ipat -- IPA thesaurus and frequency list. Bethesda, MD')
,new dataTuple('ipsp','ipsp -- Defense intelligence production schedule. Wash, DC: Defense Intelligence Agency')
,new dataTuple('isis','isis -- "Classification scheme" in Isis. (Chicago, IL: University of Chicago Press)')
,new dataTuple('itoamc','itoamc -- Index terms for occupations in archival and manuscript collections Wash, DC: LOC')
,new dataTuple('jlabsh','jlabsh -- Kihon kenmei hyôuhyô[Japan Library Association] Basic subject headings Tokyo')
,new dataTuple('kaa','kaa -- Kasvatusalan asiasanasto (JyväyläKasvatustieteiden tutkimuslaitos)')
,new dataTuple('kaunokki','kaunokki -- Kaunokki: kaunokirjallisuuden asiasanasto (Helsinki: BTJ Kirjastopalvelu)')
,new dataTuple('kssbar','kssbar -- Klassifikationssystem for svenska bibliotek. Anesordregister. Alfabetisk del Lund')
,new dataTuple('ktpt','ktpt -- Kirjasto- ja tietopalvelualan tesaurus (Tampere: Tampereen yliopisto)')
,new dataTuple('ktta','ktta -- Kä- ja taideteollisuuden asiasanasto (uopio:')
,new dataTuple('kupu','kupu -- He puna kupu / Maori Wordnet (Wellington: National Library of New Zealand)')
,new dataTuple('larpcal','larpcal -- Lista de assuntos referente ao programa de cadastramento automatizado Univ SãPaulo')
,new dataTuple('lcsh','lcsh -- Library of Congress subject headings (Washington, DC: LC, Cataloging Distribution Service)')
,new dataTuple('lcshac','lcshac -- Library of Congress subject headings: Annotated Card Program., AC Subject headings ')
,new dataTuple('lctgm','lctgm -- Thesaurus for graphic materials: TGM I, Subject terms LOC')
,new dataTuple('lemb','lemb -- Lista de encabezamientos de materia para bibliotecas (Bogota)')
,new dataTuple('lnmmbr','lnmmbr -- Lietuvos nacionalines Martyno Mazvydo bibliotekos rubrikynas (Vilnius: LNMMB)')
,new dataTuple('local','local -- Locally assigned term. ')
,new dataTuple('ltcsh','ltcsh -- Land Tenure Center Library list of subject headings (Madison, WI)')
,new dataTuple('lua','lua -- Liikunnan ja urheilun asiasanasto')
,new dataTuple('masa','masa -- Museoalan asiasanasto (Helsinki: Museovirasto)')
,new dataTuple('mesh','mesh -- Medical subject headings (Bethesda, MD: National Library of Medicine)')
,new dataTuple('mipfesd','mipfesd -- Macrothesaurus for the field of economic and social development Paris')
,new dataTuple('mmm','mmm -- "Subject key" in Marxism and the mass media (New York : International General)')
,new dataTuple('mpirdes','mpirdes -- Macrothesaurus para informacióelativa al desarrollo econóo y social Paris ')
,new dataTuple('mtirdes','mtirdes -- Macrothéurus pour l déloppement énomique et social Paris')
,new dataTuple('musa','musa -- Musiikin asiasanasto: erikoissanasto (Helsinki: Kirjastopalvelu)')
,new dataTuple('nasat','nasat -- NASA thesaurus. (Washington: NASA, Scientific and Technical Information Office)')
,new dataTuple('ndllsh','ndllsh -- National Diet Library list of subject headings Tokyo')
,new dataTuple('nicem','nicem -- NICEM subject headings and classification system Albuquerque, NM')
,new dataTuple('nimacsc','nimacsc -- NIMA cartographic subject categories Bethesda, MD')
,new dataTuple('ntcpsc','ntcpsc -- "National Translations Center primary subject classification" LOC')
,new dataTuple('ntcsd','ntcsd -- "National Translations Center secondary descriptors" LOC')
,new dataTuple('pascal','pascal -- PASCAL database classification scheme Vandoeuvre')
,new dataTuple('peri','peri -- Perinnetieteiden asiasanasto (Helsinki: Kirjastopalvelu)')
,new dataTuple('pha','pha -- Puolostushallinnon asiasanasto (Helsinki: Kirjastopalvelu)')
,new dataTuple('poliscit','poliscit -- Political science thesaurus II University of Pittsburgh')
,new dataTuple('popinte','popinte -- POPIN thesaurus: population multilingual thesaurus Paris')
,new dataTuple('psychit','psychit -- Thesaurus of psychological index terms. (Wash: American Psychological Asso)')
,new dataTuple('qrma','qrma --  List of Arabic subject headings (al-Kuwayt: Dhat al-Salasil)')
,new dataTuple('qrmak','qrmak -- Arabîh al-kubráal-Duqqî al-Qârah: Maktabah al- Ak&aacirc;dîyah)')
,new dataTuple('ram','ram -- RAMEAU: rértoire d&#x0027;authoritée matiès encyclopéque unifiéParis')
,new dataTuple('rasuqam','rasuqam -- Rértoire d&#x0027;autoritésujet de l&#x0027;UQAM (Montré: Universitéu Quéc àontré)')
,new dataTuple('rero','rero -- Indexation matiès RERO (Martigny: Réau des bibliothèes de Suisse occidentale)')
,new dataTuple('rpe','rpe -- Rubrikator po ekonomike = Rubricator on economics Moskva')
,new dataTuple('rswk','rswk -- Regeln fü Schlagwortkatalog (Berlin: Deutsches Bibliotheksinstitut)')
,new dataTuple('rurkp','rurkp -- Predmetnye rubriki Rossiiskoi knizhnoi palaty. (Moskva: Rossiiskaíknizhnaípalata)')
,new dataTuple('sao','sao -- Svenska äesord (Stockholm: Kunglige Biblioteket, LIBRIS-avdelningen)')
,new dataTuple('scgdst','scgdst -- Subject categorization guide for defense science and technology Fort Belvoir, VA')
,new dataTuple('scisshl','scisshl -- SCIS subject heading list (Port Melbourne, Vic., Australia: D.W. Thorpe)')
,new dataTuple('sears','sears -- Sears list of subject headings (New York: H.W. Wilson)')
,new dataTuple('she','she -- SHE: subject headings for engineering. (New York: Engineering Index, inc.)')
,new dataTuple('sigle','sigle -- SIGLE [System for Information on Grey Literature in Europe] manual')
,new dataTuple('sk','sk -- "Zhong guo gu ji shan ban shu zong mu" fen lei biao [Si ku] Bei jing')
,new dataTuple('slem','slem -- Sears: lista de encabezamientos de materia (New York: H. W. Wilson)')
,new dataTuple('sosa','sosa -- Sociaalialan asiasanasto (Helsinki: BTJ Kirjastopalvelu)')
,new dataTuple('swd','swd -- Schlagwortnormdatei. (Frankfurt am Main: Die Deutsche Bibliothek)')
,new dataTuple('taika','taika -- Taideteollisuuden asiasanasto (Helsinki: Kirjastopalvelu)')
,new dataTuple('taxhs','taxhs -- A taxonomy or human services: a conceptual framework El Monte, CA')
,new dataTuple('test','test -- Thesaurus of engineering and scientific terms (Wash: U.S. Dept. of Defense)')
,new dataTuple('tgn','tgn -- Getty thesaurus of geographic names (Los Angeles, CA: Getty Research Institute)')
,new dataTuple('tlka','tlka -- Työnliikkeen kirjaston asiasanasto (Helsinki: Työnliikkeen kirjasto)')
,new dataTuple('tlsh','tlsh -- Subject heading authority list (Evanston, Ill.: Northwestern Transportation Library)')
,new dataTuple('trt','trt -- Transportation resource thesaurus (Silver Springs, MD: CDB Enterprises)')
,new dataTuple('trtsa','trtsa -- Teatterin ja tanssin asiasanasto (Helsinki: BTJ Kirjastopalvelu)')
,new dataTuple('tsht','tsht -- Thesaurus of subject headings for television (Phoenix, AZ: Oryx Press)')
,new dataTuple('ttka','ttka -- Teologisen tiedekunnan kirjaston asiasanasto (Helsinki: Helsingin yliopisto)')
,new dataTuple('unbisn','unbisn -- UNBIS name authority list (New York, NY: Dag HammarskjöLibrary, UN London')
,new dataTuple('unbist','unbist -- UNBIS thesaurus: trilingual list (English, French, Spanish) UN New York, NY')
,new dataTuple('unescot','unescot -- UNESCO thesaurus = Théurus de l&#x0027;UNESCO = Tesauro de la UNESCO (Paris')
,new dataTuple('usaidt','usaidt -- USAID thesaurus Wash, DC: U.S. Agency for International Development)')
,new dataTuple('watrest','watrest -- Thesaurus of water resources terms Wash: U.S. Bureau of Reclamation)')
,new dataTuple('wot','wot -- A Women&#x0027;s thesaurus. (New York: Harper & Row)')
,new dataTuple('wpicsh','wpicsh -- WPIC Library thesaurus of subject headings Univ Pittsburgh, School of Medicine')
,new dataTuple('ysa','ysa -- Yleinen suomalainen asiasanasto (Helsinki: Kirjastopalvelu)')
);

///========================================================================
aVVcounty = new Array(//create the aVVcounty array of dataTuple objects
 new dataTuple('0','None Selected')
,new dataTuple('C.1','1. Anderson County')
,new dataTuple('C.2','2. Bedford County')
,new dataTuple('C.3','3. Benton County')
,new dataTuple('C.4','4. Bledsoe County')
,new dataTuple('C.5','5. Blount County')
,new dataTuple('C.6','6. Bradley County')
,new dataTuple('C.7','7. Campbell County')
,new dataTuple('C.8','8. Cannon County')
,new dataTuple('C.9','9. Carroll County')
,new dataTuple('C.10','10. Carter County')
,new dataTuple('C.11','11. Cheatham County')
,new dataTuple('C.12','12. Chester County')
,new dataTuple('C.13','13. Claiborne County')
,new dataTuple('C.14','14. Clay County')
,new dataTuple('C.15','15. Cocke County')
,new dataTuple('C.16','16. Coffee County')
,new dataTuple('C.17','17. Crockett County')
,new dataTuple('C.18','18. Cumberland County')
,new dataTuple('C.19','19. Davidson County')
,new dataTuple('C.20','20. Decatur County')
,new dataTuple('C.21','21. Dekalb County')
,new dataTuple('C.22','22. Dickson County')
,new dataTuple('C.23','23. Dyer County')
,new dataTuple('C.24','24. Fayette County')
,new dataTuple('C.25','25. Fentress County')
,new dataTuple('C.26','26. Franklin County')
,new dataTuple('C.27','27. Gibson County')
,new dataTuple('C.28','28. Giles County')
,new dataTuple('C.29','29. Grainger County')
,new dataTuple('C.30','30. Greene County')
,new dataTuple('C.31','31. Grundy County')
,new dataTuple('C.32','32. Hamblen County')
,new dataTuple('C.33','33. Hamilton County')
,new dataTuple('C.34','34. Hancock County')
,new dataTuple('C.35','35. Hardeman County')
,new dataTuple('C.36','36. Hardin County')
,new dataTuple('C.37','37. Hawkins County')
,new dataTuple('C.38','38. Haywood County')
,new dataTuple('C.39','39. Henderson County')
,new dataTuple('C.40','40. Henry County')
,new dataTuple('C.41','41. Hickman County')
,new dataTuple('C.42','42. Houston County')
,new dataTuple('C.43','43. Humphreys County')
,new dataTuple('C.44','44. Jackson County')
,new dataTuple('C.45','45. Jefferson County')
,new dataTuple('C.46','46. Johnson County')
,new dataTuple('C.47','47. Knox County')
,new dataTuple('C.48','48. Lake County')
,new dataTuple('C.49','49. Lauderdale County')
,new dataTuple('C.50','50. Lawrence County')
,new dataTuple('C.51','51. Lewis County')
,new dataTuple('C.52','52. Lincoln County')
,new dataTuple('C.53','53. Loudon County')
,new dataTuple('C.54','54. Macon County')
,new dataTuple('C.55','55. Madison County')
,new dataTuple('C.56','56. Marion County')
,new dataTuple('C.57','57. Marshall County')
,new dataTuple('C.58','58. Maury County')
,new dataTuple('C.59','59. McMinn County')
,new dataTuple('C.60','60. McNairy County')
,new dataTuple('C.61','61. Meigs County')
,new dataTuple('C.62','62. Monroe County')
,new dataTuple('C.63','63. Montgomery County')
,new dataTuple('C.64','64. Moore County')
,new dataTuple('C.65','65. Morgan County')
,new dataTuple('C.66','66. Obion County')
,new dataTuple('C.67','67. Overton County')
,new dataTuple('C.68','68. Perry County')
,new dataTuple('C.69','69. Pickett County')
,new dataTuple('C.70','70. Polk County')
,new dataTuple('C.71','71. Putnam County')
,new dataTuple('C.72','72. Rhea County')
,new dataTuple('C.73','73. Roane County')
,new dataTuple('C.74','74. Robertson County')
,new dataTuple('C.75','75. Rutherford County')
,new dataTuple('C.76','76. Scott County')
,new dataTuple('C.77','77. Sequatchie County')
,new dataTuple('C.78','78. Sevier County')
,new dataTuple('C.79','79. Shelby County')
,new dataTuple('C.80','80. Smith County')
,new dataTuple('C.81','81. Stewart County')
,new dataTuple('C.82','82. Sullivan County')
,new dataTuple('C.83','83. Sumner County')
,new dataTuple('C.84','84. Tipton County')
,new dataTuple('C.85','85. Trousdale County')
,new dataTuple('C.86','86. Unicoi County')
,new dataTuple('C.87','87. Union County')
,new dataTuple('C.88','88. Van Buren County')
,new dataTuple('C.89','89. Warren County')
,new dataTuple('C.90','90. Washington County')
,new dataTuple('C.91','91. Wayne County')
,new dataTuple('C.92','92. Weakley County')
,new dataTuple('C.93','93. White County')
,new dataTuple('C.94','94. Williamson County')
,new dataTuple('C.95','95. Wilson County')
)//end aVVcounty






var allMarcChoices = new String();
    allMarcChoices ="|abstract or summary|art original|art reproduction|atlas|autobiography|bibliography|biography|book|catalog|chart|comic strip|conference publication|database|dictionary|diorama|directory|discography|drama|encyclopedia|essay|festschrift|abstract or summary|art original|art reproduction|atlas|autobiography|bibliography|biography|book|catalog|chart|comic strip|conference publication|database|dictionary|diorama|directory|discography|drama|encyclopedia|essay|festschrift|fiction|filmography|filmstrip|flash card|folktale|font|game|government publication|graphic|globe|handbook|history |humor, satire|index |instruction|interview|kit|language instruction|law report or digest|legal article|legal case and case notes|legislation|letter|loose-leaf|map|memoir|microscope slide |model|motion picture|multivolume monograph|newspaper|novel|numeric data|online system or service|patent|periodical|picture |poetry|programmed text|realia|rehearsal|remote sensing image|reporting|review|series|short story|slide|sound|speech|statistics|survey of literature|technical drawing|technical report|theses|toy|transparency|treaty|videorecording|web site|";



