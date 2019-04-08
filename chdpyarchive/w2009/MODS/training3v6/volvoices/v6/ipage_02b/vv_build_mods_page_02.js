/////vv_build_mods_page_02.js  



///returns the ps array  LINE 698
function buildTagsArray_page_02(N){
	//alert("buildTagsArray_page_02");


	//N=0 no red, use '<' in xml tag
	//N>0 insert red use '&#060;' (prev '&lt;')  in xml tag to make html viewable

	var NI = 0;
	if ( N == "0" ) { NI=0; } else { NI=1; }

	
	var bfont= new String(BFONT[NI]);
	var efont= new String(EFONT[NI]);
	var obrak= new String(OBRAK[NI]);

var ps=new Array();


/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n'); 




///////////////////////////////////////////////////// <mods:originInfo
///////////////////////////////////////////////////////////// <mods:dateCreated
///////////////////////////////////////////////////////////// <mods:place
///////////////////////////////////////////////////////////////////// <mods:placeTerm
///////////////////////////////////////////////////////////// <mods:publisher



ps[ps.length] = new String(obrak+'mods:originInfo>\r\n');


var keyDateDone=0;

if ( document.forms[0].date_created.value != "" ) {//use date_created
var str_date_createdQ = new String('');
if ( document.forms[0].date_createdQ.value != 'none' && document.forms[0].date_createdQ.value != "" ) {
    str_date_createdQ = 'qualifier="'+bfont+ document.forms[0].date_createdQ.value +efont+'"';
    }
keyDateDone++;
var str_date_created = new String();
    str_date_created = document.forms[0].date_created.value;
    str_date_created = str_date_created.replace(/[a-z]/gi,'');
ps[ps.length] = new String(obrak+'mods:dateCreated '+ str_date_createdQ+' keyDate="yes"  encoding="w3cdtf">'
	+ bfont + str_date_created + efont 
	+ obrak+'/mods:dateCreated>\r\n'
	);

}else{// date range tags


var str_date_created_begin = new String();
    str_date_created_begin = document.forms[0].date_created_begin.value;
    str_date_created_begin = str_date_created_begin.replace(/[a-z]/gi,'');
    str_date_created_begin = str_date_created_begin.replace(/ /gi,'');
if ( str_date_created_begin.length > 0 ) {
var str_date_created_beginQ = new String('');
if ( document.forms[0].date_created_beginQ.value != 'none' && document.forms[0].date_created_beginQ.value != "" ) {
    str_date_created_beginQ = 'qualifier="'+bfont+ document.forms[0].date_created_beginQ.value +efont +'"';
    }
keyDateDone++;
ps[ps.length] = new String(obrak+'mods:dateCreated '+ str_date_created_beginQ+'  keyDate="yes" encoding="w3cdtf" point="start">'
	+ bfont + str_date_created_begin + efont
	+ obrak+'/mods:dateCreated>\r\n'
	);
}



var str_date_created_end = new String();
    str_date_created_end = document.forms[0].date_created_end.value;
    str_date_created_end = str_date_created_end.replace(/[a-z]/gi,'');
    str_date_created_end = str_date_created_end.replace(/ /gi,'');
if ( str_date_created_end.length > 0 ) {
var str_date_created_endQ = new String('');
if ( document.forms[0].date_created_endQ.value != 'none' && document.forms[0].date_created_endQ.value != "" ) {
    str_date_created_endQ = 'qualifier="'+bfont+ document.forms[0].date_created_endQ.value +efont+'"';
    }
ps[ps.length] = new String(obrak+'mods:dateCreated '+ str_date_created_endQ+' encoding="w3cdtf" point="end">'
	+ bfont + str_date_created_end + efont 
	+ obrak+'/mods:dateCreated>\r\n'
	);
}

}//end date range tags


///is this a required field - only when radio button yes is clicked
if ( document.forms[0].date_issued.value.length > 0 ) {
var str_date_issuedQ = new String('');

if ( document.forms[0].date_issuedQ.value != 'none' && document.forms[0].date_issuedQ.value != "") {
    str_date_issuedQ = 'qualifier="'+bfont+ document.forms[0].date_issuedQ.value+efont +'"';
    }

var str_date_issued = new String();
    str_date_issued = document.forms[0].date_issued.value;
    str_date_issued = str_date_issued.replace(/[a-z]/gi,'');
var str_keyDate = new String("");
if ( keyDateDone == 0 ) {
	str_keyDate = ' keyDate="yes" ';
	}
ps[ps.length] = new String(obrak+'mods:dateIssued '+ str_date_issuedQ+str_keyDate+' encoding="w3cdtf">'
	+ bfont + str_date_issued + efont
	+ obrak+'/mods:dateIssued>\r\n'
	);
}


//do not make tag for empty form vars
if ( document.forms[0].place_of_origin.value != "" ) {
ps[ps.length]= new String(obrak+'mods:place>\r\n');


ps[ps.length]= new String(obrak+'mods:placeTerm>'
	+ bfont + replace_apos(document.forms[0].place_of_origin.value) + efont 
	+ obrak+'/mods:placeTerm>\r\n'
	);
	
ps[ps.length]= new String(obrak+'/mods:place>\r\n');
}
	


//do not make unneeded comma
var myComma =new String("");
var myPubName = new String(document.forms[0].publisher_name.value);
var myPubAddr = new String(document.forms[0].publisher_address.value);

myPubName = myPubName.replace(/ /g,'');
myPubAddr = myPubAddr.replace(/ /g,'');

if ( myPubName.length > 0 && myPubAddr.length > 0 ) {
	myComma = ", ";
	}


//do not make tag for empty form vars
if ( document.forms[0].publisher_name.value.length > 0 || document.forms[0].publisher_address.value.length > 0 ) {
var publisherNameAddress = new String();
    publisherNameAddress = document.forms[0].publisher_name.value+myComma+document.forms[0].publisher_address.value;
ps[ps.length]= new String(obrak+'mods:publisher>'
	+ bfont + replace_apos(publisherNameAddress) + efont
	+ obrak +'/mods:publisher>\r\n'
	);
}


ps[ps.length]= new String(obrak+'/mods:originInfo>\r\n');
	





///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// close mods


/////////////ps[ps.length]= new String(obrak+'/mods:mods>\r\n');

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


}///end function buildTagsArray_page_02() //LINE 885


