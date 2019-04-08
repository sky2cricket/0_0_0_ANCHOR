/////vv_build_mods_page_03.js

///returns the ps array
function buildTagsArray_page_03(N){
//alert("buildTagsArray_page_03");


//N=0 no red, use '<' in xml tag
//N>0 insert red use '&#060;' (prev '&lt;')  in xml tag to make html viewable

var NI = 0;
if ( N == "0" ) { NI=0; } else { NI=1; }


var bfont= new String(BFONT[NI]);
var efont= new String(EFONT[NI]);
	var obrak= new String(OBRAK[NI]);

var ps=new Array();

//ps[ps.length] = new String("<-- page_03 -->");

/////////////////////////////////////////////////////header xml version="1.0"
///document.write('<?xml version="1.0"  ?>\r\n'); 


	

///////////////////////////////////////////////////// <mods:language
///////////////////////////////////////////////////////////// <mods:languageTerm


ps[ps.length]= new String(obrak+'mods:language>\r\n');


ps[ps.length]= new String(obrak+'mods:languageTerm type="code" authority="iso639-2b">'
	+ bfont +document.forms[0].language.value + efont 
	+ obrak +'/mods:languageTerm>\r\n'
	);

ps[ps.length]= new String(obrak+'/mods:language>\r\n');
	
///////////////////////////////////////////////////// <mods:typeOfResource

//type_of_resource_01 is required
ps[ps.length]= new String(obrak+'mods:typeOfResource>'
	+ bfont +document.forms[0].type_of_resource_01.value + efont 
	+ obrak +'/mods:typeOfResource>\r\n'
	);
 


//do not make empty tag for type_of_resource_02
if ( document.forms[0].type_of_resource_02.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:typeOfResource>'
	+ bfont +document.forms[0].type_of_resource_02.value + efont 
	+ obrak +'/mods:typeOfResource>\r\n'
	);
}

//do not make empty tag for type_of_resource_03
if ( document.forms[0].type_of_resource_03.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:typeOfResource>'
	+ bfont +document.forms[0].type_of_resource_03.value + efont 
	+ obrak +'/mods:typeOfResource>\r\n'
	);
}




///////////////////////////////////////////////////// <mods:subject
///////////////////////////////////////////////////////////// <mods:genre


var genre_authority_tag_display = new String("");

if (document.forms[0].mods_genre_select[0].selected== true) {
   	genre_authority_tag_display = 'authority="'+bfont+'aat'+efont+'" ';
}else if (document.forms[0].mods_genre_select[1].selected== true) {
   	genre_authority_tag_display = 'authority="'+bfont+'nmc'+efont+'" ';
}else if (document.forms[0].mods_genre_select[2].selected==true) {
	genre_authority_tag_display = 'authority="'+bfont+'marcgt'+efont+'" ';
}




ps[ps.length]= new String(obrak+'mods:genre '+ genre_authority_tag_display + '>'
	+ bfont + replace_apos(document.forms[0].mods_genre.value) + efont 
	+ obrak +'/mods:genre>\r\n'
	);

	




///////////////////////////////////////////////////// <mods:physicalDescription
///////////////////////////////////////////////////////////// <mods:form type="technique"
///////////////////////////////////////////////////////////// <mods:form type="medium"  
///////////////////////////////////////////////////////////// <mods:digitalOrigin
///////////////////////////////////////////////////////////// <mods:internetMediaType
///////////////////////////////////////////////////////////// <mods:extent (pages;dimensions)



ps[ps.length]= new String(obrak+'mods:physicalDescription>\r\n');



///form_type_technique
///input box on museum page, tag built on page 3
///do not build empty tag
if ( document.forms[0].museum_form_type_technique.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:form type="technique" authority="aat">'
	+ bfont + replace_apos(document.forms[0].museum_form_type_technique.value) + efont
	+ obrak+'/mods:form>\r\n'
	);

}///end if

///form_type_medium
///input box on museum page, tag built on page 3
///do not build empty tag
if ( document.forms[0].museum_form_type_medium.value.length > 0 ) {
ps[ps.length]= new String(obrak+'mods:form type="medium" authority="aat">'
	+ bfont + replace_apos(document.forms[0].museum_form_type_medium.value) + efont 
	+ obrak+'/mods:form>\r\n'
	);
}//end if

ps[ps.length]= new String(obrak+'mods:digitalOrigin>'
	+ bfont + document.forms[0].digital_origin.value + efont 
	+ obrak+'/mods:digitalOrigin>\r\n'
	);

////THIS IS A HIDDEN FIELD THAT DOES NOT DISPLAY ON THE WEB FORM
ps[ps.length]= new String(obrak+'mods:internetMediaType>'
	+ bfont + document.forms[0].internetmediatype.value + efont 
	+ obrak+'/mods:internetMediaType>\r\n'
	);


///////parse extent fields for correct display
var  strExtent =  new String("");
var  numExtent = 0;

if ( document.forms[0].extent_pages.value.length > 0 ) {
	strExtent = new String(document.forms[0].extent_pages.value);
	NstrExtent = new Number(strExtent);

	if ( NstrExtent == 1)  {
		strExtent = strExtent + " digital image";
	}else{
		strExtent = strExtent + " digital images";
	}
		
	document.forms[0].extent_pages.value = strExtent;
        
	numExtent++;
	}

if ( document.forms[0].extent_number_of_objects.value.length > 0 ) {
	strExtent += "; "+document.forms[0].extent_number_of_objects.value ;
	numExtent++;
	}


if ( document.forms[0].extent_dimensions.value.length > 0 ) {
	strExtent +=   "; " + document.forms[0].extent_dimensions.value;
	numExtent++;
	}


///////do not generate an empty tag for extent

if ( numExtent > 0 ) {

ps[ps.length]= new String(obrak+'mods:extent>'
	+ bfont + replace_apos(strExtent) + efont 
	+ obrak+'/mods:extent>\r\n'
	);

}
			
	
ps[ps.length]= new String(obrak+'/mods:physicalDescription>\r\n');


///////////////////////////////////////////////////// <mods:abstract


///////do not generate an empty tag for abstract
if ( document.forms[0].mods_genre_abstract.value != "" ) {

var strAbstract = new String(document.forms[0].mods_genre_abstract.value);
    strAbstract = strAbstract.replace(/\%0D\%0A/gi,"");
    document.forms[0].mods_genre_abstract.value=strAbstract;
ps[ps.length]= new String(obrak+'mods:abstract>'
	+ bfont + replace_apos(document.forms[0].mods_genre_abstract.value) + efont 
	+ obrak+'/mods:abstract>\r\n'
	);
	parent.U.document.UF.mods_genre_abstract.value = document.forms[0].mods_genre_abstract.value;
}
	



///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// 
///////////////////////////////////////////////////////////////////////////////////// close mods


//////////////ps[ps.length]= new String(obrak+'/mods:mods>\r\n');

return(ps);


}///end function buildTagsArray_page_03()




