//vv_tuple.js

//page_lower.htm loaded once, never reloaded
//the arrays on this page are CONSTANTS



//needed in process_header
var DATE = new Date();
//var reload_debug = false;//true;

//The purpose of this page is to simplify code maintainence.
//All of the popups from vv_popupLists.htm have select boxes.
//These are built from predefined arrays by the functions
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
///get the index for the SelectXMLPATH - from the filename comment 
//str parent.U.document.UF.VVcomment_01.value=comment_01Block;
///aTupleArray - array of dataTuple objects
function getFilenameDirectoryIndex ( aTupleArray, str ){

var s = new String(str);
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


aVVtopic = new Array(//create the aVVtopic array of dataTuple objects
 new dataTuple("0", "No value selected ccc")
,new dataTuple("B.1","1. Frontier migration/experiments in representative democracy, encounters with Native Americans")
,new dataTuple("B.2","2. Jacksonian democracy and Tennessee\'s leadership role in the Early Republic")  
,new dataTuple("B.3","3. Anti-democracy impulses: Slavery, free people of color, and Removal of Native Americans ")
,new dataTuple("B.4","4. Debate over slavery, the Secession Crisis, and the Civil War: Tennessee as a uniquely divided border state")
,new dataTuple("B.5","5. Reconstruction and the freedmen: appearance of hitherto undocumented people in legal records; the fastening of sharecropping on the countryside")
,new dataTuple("B.6","6. Taxation and the narrowing of the franchise: \"Jim Crow\" laws and the poll tax")
,new dataTuple("B.7","7. Utopian Impulses of the 19th century such as Nashoba, Ruskin, and Rugby ")     
,new dataTuple("B.8","8. New South period and the industrialization of Tennessee")
,new dataTuple("B.9","9. Women\'s Suffrage and Tennessee\'s pivotal role in passage of 19th Amendment") 
,new dataTuple("B.10","10. Boss Crump, prohibition, and machine politics in Tennessee")
,new dataTuple("B.11","11. Scopes trial, rise of fundamentalism, and public education")
,new dataTuple("B.12","12. Tennessee Valley Authority and \"grass roots democracy\"")
,new dataTuple("B.13","13. Oak Ridge and WWII effort in Tennessee")
,new dataTuple("B.14","14. Civil Rights movement in Tennessee")
,new dataTuple("B.15","15. Modern times in Tennessee")
)//end aVVtopic

      

aVVbroadtopic = new Array(//create the aVVbroadtopic array of dataTuple objects
 new dataTuple('D.1','1. African-Americans')
,new dataTuple('D.2','2. Architecture')
,new dataTuple('D.3','3. Arts and Literature')
,new dataTuple('D.4','4. Children and Childhood')
,new dataTuple('D.5','5. Civil and Human Rights')
,new dataTuple('D.6','6. Education')
,new dataTuple('D.7','7. Family Life and Gender Relations')
,new dataTuple('D.8','8. Farming and Agriculture')
,new dataTuple('D.9','9. Frontier Settlement and Migration')
,new dataTuple('D.10','10. Government and Politics')
,new dataTuple('D.11','11. Health and Medicine')
,new dataTuple('D.12','12. Immigrants and Immigration') 
,new dataTuple('D.13','13. Law and Legal Documents')
,new dataTuple('D.14','14. Music and Performing Arts')
,new dataTuple('D.15','15. Native Americans')
,new dataTuple('D.16','16. Nature and the Environment')
,new dataTuple('D.17','17. Popular Culture and Folklife')
,new dataTuple('D.18','18. Religion')
,new dataTuple('D.19','19. Science and Technology')
,new dataTuple('D.20','20. Social Reform')
,new dataTuple('D.21','21. Sports and Recreation')
,new dataTuple('D.22','22. Trade, Business and Industry')
,new dataTuple('D.23','23. Transportation and Internal Improvements')
,new dataTuple('D.24','24. Wars and Military')
,new dataTuple('D.25','25. Women')
)//end aVVbroadtopic

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


aVVtemporal = new Array(//create the aVVtemporal array of dataTuple objects
 new dataTuple('0','None Selected')
,new dataTuple('A.1','1. Three Worlds Meet(Beginnings to 1660)')
,new dataTuple('A.2','2. Colonization and Settlement(1585-1763)')
,new dataTuple('A.3','3. Revolution and the New Nation (1754-1820)')
,new dataTuple('A.4','4. Expansion and Reform (1801-1877)')
,new dataTuple('A.5','5. Civil War and Reconstruction (1850-1877)')
,new dataTuple('A.6','6. The Development of the Industrial United States(1870-1900)')
,new dataTuple('A.7','7. The Emergence of Modern America(1890-1930)')
,new dataTuple('A.8','8. The Great Depression and World War II(1929-1945)')
,new dataTuple('A.9','9. Postwar United States (1945-1970)')
,new dataTuple('A.10','10. Contemporary United States (1968-Present )')
)//end aVVtemporal


aSPCtopic = new Array(//create the aSPCtopic array of dataTuple objects
 new dataTuple('B.1','1. African-Americans')
,new dataTuple('B.2','2. Education')
,new dataTuple('B.3','3. Government and Politics')
,new dataTuple('B.4','4. Knoxville')
,new dataTuple('B.5','5. Native Americans')
,new dataTuple('B.6','6. Oak Ridge')
,new dataTuple('B.7','7. Religion')
,new dataTuple('B.8','8. Smoky Mountains')
,new dataTuple('B.9','9. Tennessee Authors')
,new dataTuple('B.10','10. TVA')
,new dataTuple('B.11','11. University Archives')
,new dataTuple('B.12','12. Women')
)//end aSPCtopic


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



aRole = new Array(//create the aRole array of dataTuple objects
 new dataTuple('Actor','Actor')
,new dataTuple('Adapter','Adapter')
,new dataTuple('Author of afterword, colophon, etc.','Author of afterword, colophon, etc.')
,new dataTuple('Annotator','Annotator')
,new dataTuple('Bibliographic antecedent','Bibliographic antecedent')
,new dataTuple('Applicant','Applicant')
,new dataTuple('Author in quotations or text abstracts','Author in quotations or text abstracts')
,new dataTuple('Architect','Architect')
,new dataTuple('Arranger','Arranger')
,new dataTuple('Artist','Artist')
,new dataTuple('Assignee','Assignee')
,new dataTuple('Associated name','Associated name')
,new dataTuple('Attributed name','Attributed name')
,new dataTuple('Auctioneer','Auctioneer')
,new dataTuple('Author of dialog','Author of dialog')
,new dataTuple('Author of introduction','Author of introduction')
,new dataTuple('Author of screenplay','Author of screenplay')
,new dataTuple('Author','Author')
,new dataTuple('Binding designer','Binding designer')
,new dataTuple('Bookjacket designer','Bookjacket designer')
,new dataTuple('Book designer','Book designer')
,new dataTuple('Book producer','Book producer')
,new dataTuple('Binder','Binder')
,new dataTuple('Bookplate designer','Bookplate designer')
,new dataTuple('Bookseller','Bookseller')
,new dataTuple('Conceptor','Conceptor')
,new dataTuple('Choreographer','Choreographer')
,new dataTuple('Collaborator','Collaborator')
,new dataTuple('Client','Client')
,new dataTuple('Calligrapher','Calligrapher')
,new dataTuple('Collotyper','Collotyper')
,new dataTuple('Commentator','Commentator')
,new dataTuple('Composer','Composer')
,new dataTuple('Compositor','Compositor')
,new dataTuple('Conductor','Conductor')
,new dataTuple('Censor','Censor')
,new dataTuple('Contestant-appellee','Contestant-appellee')
,new dataTuple('Collector','Collector')
,new dataTuple('Compiler','Compiler')
,new dataTuple('Contestant','Contestant')
,new dataTuple('Contestant-appellant','Contestant-appellant')
,new dataTuple('Copyright claimant','Copyright claimant')
,new dataTuple('Complainant-appellee','Complainant-appellee')
,new dataTuple('Copyright holder','Copyright holder')
,new dataTuple('Complainant','Complainant')
,new dataTuple('Complainant-appellant','Complainant-appellant')
,new dataTuple('Creator','Creator')
,new dataTuple('Correspondent','Correspondent')
,new dataTuple('Corrector','Corrector')
,new dataTuple('Consultant','Consultant')
,new dataTuple('Consultant to a project','Consultant to a project')
,new dataTuple('Costume designer','Costume designer')
,new dataTuple('Contributor','Contributor')
,new dataTuple('Contestee-appellee','Contestee-appellee')
,new dataTuple('Cartographer','Cartographer')
,new dataTuple('Contractor','Contractor')
,new dataTuple('Contestee','Contestee')
,new dataTuple('Contestee-appellant','Contestee-appellant')
,new dataTuple('Curator','Curator')
,new dataTuple('Commentator for written text','Commentator for written text')
,new dataTuple('Defendant','Defendant')
,new dataTuple('Defendant-appellee','Defendant-appellee')
,new dataTuple('Defendant-appellant','Defendant-appellant')
,new dataTuple('Degree grantor','Degree grantor')
,new dataTuple('Dissertant','Dissertant')
,new dataTuple('Delineator','Delineator')
,new dataTuple('Dancer','Dancer')
,new dataTuple('Donor','Donor')
,new dataTuple('Depositor','Depositor')
,new dataTuple('Draftsman','Draftsman')
,new dataTuple('Director','Director')
,new dataTuple('Designer','Designer')
,new dataTuple('Distributor','Distributor')
,new dataTuple('Dedicatee','Dedicatee')
,new dataTuple('Dedicator','Dedicator')
,new dataTuple('Dubious author','Dubious author')
,new dataTuple('Editor','Editor')
,new dataTuple('Engraver','Engraver')
,new dataTuple('Electrotyper','Electrotyper')
,new dataTuple('Engineer','Engineer')
,new dataTuple('Etcher','Etcher')
,new dataTuple('Expert','Expert')
,new dataTuple('Facsimilist','Facsimilist')
,new dataTuple('Film editor','Film editor')
,new dataTuple('Former owner','Former owner')
,new dataTuple('Funder','Funder')
,new dataTuple('Forger','Forger')
,new dataTuple('Graphic technician','Graphic technician')
,new dataTuple('Honoree','Honoree')
,new dataTuple('Host','Host')
,new dataTuple('Illustrator','Illustrator')
,new dataTuple('Illuminator','Illuminator')
,new dataTuple('Inscriber','Inscriber')
,new dataTuple('Inventor','Inventor')
,new dataTuple('Instrumentalist','Instrumentalist')
,new dataTuple('Interviewee','Interviewee')
,new dataTuple('Interviewer','Interviewer')
,new dataTuple('Librettist','Librettist')
,new dataTuple('Libelee-appellee','Libelee-appellee')
,new dataTuple('Libelee','Libelee')
,new dataTuple('Lender','Lender')
,new dataTuple('Libelee-appellant','Libelee-appellant')
,new dataTuple('Libelant-appellee','Libelant-appellee')
,new dataTuple('Libelant','Libelant')
,new dataTuple('Libelant-appellant','Libelant-appellant')
,new dataTuple('Landscape architect','Landscape architect')
,new dataTuple('Licensee','Licensee')
,new dataTuple('Licensor','Licensor')
,new dataTuple('Lithographer','Lithographer')
,new dataTuple('Lyricist','Lyricist')
,new dataTuple('Metadata contact','Metadata contact')
,new dataTuple('Moderator','Moderator')
,new dataTuple('Monitor','Monitor')
,new dataTuple('Metal-engraver','Metal-engraver')
,new dataTuple('Musician','Musician')
,new dataTuple('Narrator','Narrator')
,new dataTuple('Opponent','Opponent')
,new dataTuple('Originator','Originator')
,new dataTuple('Organizer of meeting','Organizer of meeting')
,new dataTuple('Other','Other')
,new dataTuple('Owner','Owner')
,new dataTuple('Patron','Patron')
,new dataTuple('Publishing director','Publishing director')
,new dataTuple('Publisher','Publisher')
,new dataTuple('Proofreader','Proofreader')
,new dataTuple('Photographer','Photographer')
,new dataTuple('Platemaker','Platemaker')
,new dataTuple('Printer of plates','Printer of plates')
,new dataTuple('Papermaker','Papermaker')
,new dataTuple('Process contact','Process contact')
,new dataTuple('Production personnel','Production personnel')
,new dataTuple('Performer','Performer')
,new dataTuple('Programmer','Programmer')
,new dataTuple('Producer','Producer')
,new dataTuple('Printer','Printer')
,new dataTuple('Patent applicant','Patent applicant')
,new dataTuple('Plaintiff-appellee','Plaintiff-appellee')
,new dataTuple('Plaintiff','Plaintiff')
,new dataTuple('Patent holder','Patent holder')
,new dataTuple('Plaintiff-appellant','Plaintiff-appellant')
,new dataTuple('Rubricator','Rubricator')
,new dataTuple('Recording engineer','Recording engineer')
,new dataTuple('Recipient','Recipient')
,new dataTuple('Redactor','Redactor')
,new dataTuple('Renderer','Renderer')
,new dataTuple('Researcher','Researcher')
,new dataTuple('Reviewer','Reviewer')
,new dataTuple('Respondent-appellee','Respondent-appellee')
,new dataTuple('Respondent','Respondent')
,new dataTuple('Respondent-appellant','Respondent-appellant')
,new dataTuple('Research team head','Research team head')
,new dataTuple('Research team member','Research team member')
,new dataTuple('Scientific advisor','Scientific advisor')
,new dataTuple('Scenarist','Scenarist')
,new dataTuple('Scribe','Scribe')
,new dataTuple('Sculptor','Sculptor')
,new dataTuple('Secretary','Secretary')
,new dataTuple('Signer','Signer')
,new dataTuple('Singer','Singer')
,new dataTuple('Speaker','Speaker')
,new dataTuple('Sponsor','Sponsor')
,new dataTuple('Surveyor','Surveyor')
,new dataTuple('Standards body','Standards body')
,new dataTuple('Stereotyper','Stereotyper')
,new dataTuple('Thesis advisor','Thesis advisor')
,new dataTuple('Transcriber','Transcriber')
,new dataTuple('Translator','Translator')
,new dataTuple('Type designer','Type designer')
,new dataTuple('Typographer','Typographer')
,new dataTuple('Vocalist','Vocalist')
,new dataTuple('Writer of accompanying material','Writer of accompanying material')
,new dataTuple('Woodcutter','Woodcutter')
,new dataTuple('Wood-engraver','Wood-engraver')
,new dataTuple('Witness','Witness')
)//end aRole


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

aNameAuthority = new Array (//create the aNameAuthority array of dataTuple objects
 new dataTuple(0,"NONE")
,new dataTuple(1,"LCNAF")
,new dataTuple(2,"ULAN")
);


aCollection_id_num_type = new Array (//create the aCollection_id_num_type array
 new dataTuple(0,"none selected")
,new dataTuple(1,"manuscriptNumber")
,new dataTuple(2,"archiveNumber")
,new dataTuple(3,"callNumber")
,new dataTuple(4,"accessionNumber")
,new dataTuple(5,"otherIdentificationNumber")
);

/*
aSelectXMLPATH = new Array(//create the aSelectXMLPATH array
 new dataTuple('99','No Value Selected')
,new dataTuple('S00','C:\Scan\00\xml\')
,new dataTuple('S01','C:\Scan\01\xml\')
,new dataTuple('S02','C:\Scan\02\xml\')
,new dataTuple('S03','C:\Scan\03\xml\')
,new dataTuple('S04','C:\Scan\04\xml\')
,new dataTuple('S05e','C:\Scan\05\xml\ead\')
,new dataTuple('S05m','C:\Scan\05\xml\mods\')
,new dataTuple('S05t','C:\Scan\05\xml\tei\')
,new dataTuple('R00','C:\Reworked\00\xml\')
,new dataTuple('R01','C:\Reworked\01\xml\')
,new dataTuple('R02','C:\Reworked\02\xml\')
,new dataTuple('R03','C:\Reworked\03\xml\')
,new dataTuple('R04','C:\Reworked\04\xml\')
,new dataTuple('R05e','C:\Reworked\05\xml\ead\')
,new dataTuple('R05m','C:\Reworked\05\xml\mods\')
,new dataTuple('R05t','C:\Reworked\05\xml\tei\')
);


aSelectXMLPATH = new Array(//create the aSelectXMLPATH array
 new dataTuple('99','No Value Selected')
,new dataTuple('S00','Scan\00\xml\')
,new dataTuple('S01','Scan\01\xml\')
,new dataTuple('S02','Scan\02\xml\')
,new dataTuple('S03','Scan\03\xml\')
,new dataTuple('S04','Scan\04\xml\')
,new dataTuple('S05e','Scan\05\xml\ead\')
,new dataTuple('S05m','Scan\05\xml\mods\')
,new dataTuple('S05t','Scan\05\xml\tei\')
,new dataTuple('R00','Reworked\00\xml\')
,new dataTuple('R01','Reworked\01\xml\')
,new dataTuple('R02','Reworked\02\xml\')
,new dataTuple('R03','Reworked\03\xml\')
,new dataTuple('R04','Reworked\04\xml\')
,new dataTuple('R05e','Reworked\05\xml\ead\')
,new dataTuple('R05m','Reworked\05\xml\mods\')
,new dataTuple('R05t','Reworked\05\xml\tei\')
);
*/


aSelectXMLPATH_index = new Array(//create the aSelectXMLPATH array
 new dataTuple(0,'No Value Selected')
,new dataTuple(1,'Scan\\00\\xml\\')
,new dataTuple(2,'Scan\\01\\xml\\')
,new dataTuple(3,'Scan\\02\\xml\\')
,new dataTuple(4,'Scan\\03\\xml\\')
,new dataTuple(5,'Scan\\04\\xml\\')
,new dataTuple(6,'Scan\\05\\xml\\ead\\')
,new dataTuple(7,'Scan\\05\\xml\\mods\\')
,new dataTuple(8,'Scan\\05\\xml\\tei\\')
,new dataTuple(9,'Reworked\\00\\xml\\')
,new dataTuple(10,'Reworked\\01\\xml\\')
,new dataTuple(11,'Reworked\\02\\xml\\')
,new dataTuple(12,'Reworked\\03\\xml\\')
,new dataTuple(13,'Reworked\\04\\xml\\')
,new dataTuple(14,'Reworked\\05\\xml\\ead\\')
,new dataTuple(15,'Reworked\\05\\xml\\mods\\')
,new dataTuple(16,'Reworked\\05\\xml\\tei\\')

);

//for XMLPATH
aSelectXMLPATH_index1 = new Array(//create the aSelectXMLPATH array
 new dataTuple(0,'No Value Selected')

,new dataTuple(1,'Scan/00/xml')
,new dataTuple(2,'Scan/01/xml')
,new dataTuple(3,'Scan/02/xml')
,new dataTuple(4,'Scan/03/xml')
,new dataTuple(5,'Scan/04/xml')
,new dataTuple(6,'Scan/05/xml/ead')
,new dataTuple(7,'Scan/05/xml/mods')
,new dataTuple(8,'Scan/05/xml/tei')
,new dataTuple(9,'Reworked/00/xml')
,new dataTuple(10,'Reworked/01/xml')
,new dataTuple(11,'Reworked/02/xml')
,new dataTuple(12,'Reworked/03/xml')
,new dataTuple(13,'Reworked/04/xml')
,new dataTuple(14,'Reworked/05/xml/ead')
,new dataTuple(15,'Reworked/05/xml/mods')
,new dataTuple(16,'Reworked/05/xml/tei')
);


//for XMLPATHFULL
aSelectXMLPATH_index2 = new Array(//create the aSelectXMLPATH array
 new dataTuple(0,'No Value Selected')
,new dataTuple(1,'C:/Scan/00/xml/')
,new dataTuple(2,'C:/Scan/01/xml/')
,new dataTuple(3,'C:/Scan/02/xml/')
,new dataTuple(4,'C:/Scan/03/xml/')
,new dataTuple(5,'C:/Scan/04/xml/')
,new dataTuple(6,'C:/Scan/05/xml/ead/')
,new dataTuple(7,'C:/Scan/05/xml/mods/')
,new dataTuple(8,'C:/Scan/05/xml/tei/')
,new dataTuple(9,'C:/Reworked/00/xml/')
,new dataTuple(10,'C:/Reworked/01/xml/')
,new dataTuple(11,'C:/Reworked/02/xml/')
,new dataTuple(12,'C:/Reworked/03/xml/')
,new dataTuple(13,'C:/Reworked/04/xml/')
,new dataTuple(14,'C:/Reworked/05/xml/ead/')
,new dataTuple(15,'C:/Reworked/05/xml/mods/')
,new dataTuple(16,'C:/Reworked/05/xml/tei/')
);

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


var allMarcChoices = new String();
    allMarcChoices ="|abstract or summary|art original|art reproduction|atlas|autobiography|bibliography|biography|book|catalog|chart|comic strip|conference publication|database|dictionary|diorama|directory|discography|drama|encyclopedia|essay|festschrift|abstract or summary|art original|art reproduction|atlas|autobiography|bibliography|biography|book|catalog|chart|comic strip|conference publication|database|dictionary|diorama|directory|discography|drama|encyclopedia|essay|festschrift|fiction|filmography|filmstrip|flash card|folktale|font|game|government publication|graphic|globe|handbook|history |humor, satire|index |instruction|interview|kit|language instruction|law report or digest|legal article|legal case and case notes|legislation|letter|loose-leaf|map|memoir|microscope slide |model|motion picture|multivolume monograph|newspaper|novel|numeric data|online system or service|patent|periodical|picture |poetry|programmed text|realia|rehearsal|remote sensing image|reporting|review|series|short story|slide|sound|speech|statistics|survey of literature|technical drawing|technical report|theses|toy|transparency|treaty|videorecording|web site|";



