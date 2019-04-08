//vv_reload_util.js 
//This file contains functions called by functions in
//    vv_reload_page_begin.js
//    vv_reload_page_01.js
//    vv_reload_page_02.js
//    vv_reload_page_03.js
//    vv_reload_page_04.js
//    vv_reload_page_05.js
//    vv_reload_page_06.js

var BXMLC = new String("<!-- ");//begin XML comment
var EXMLC = new String(" --->");//end   XML comment

function extract_tag_data(str,str1,str2){
var dataStr= new String(str);
var s1 = new String(str1);
var s2 = new String(str2);

//This first chop-off necessary to prevent result:
//dataStr=
//	"</mods:namePart> 
//       <mods:namePart type="given">"

dataStr=dataStr.substring(dataStr.indexOf(str1));

/*
alert("vv_reload_util.js\nfunction extract_tag_data(str)\nextract_tag_data\nstr=\n"+str
+"\n\ndataStr=\n"+dataStr
+"\n\nstr1=\n"+str1+"\n\nstr2="+str2);
*/


dataStr=dataStr.substring(dataStr.indexOf(s1)+s1.length,dataStr.indexOf(s2));

dataStr="\""+dataStr+"\"";
//alert("vv_reload_util.js function extract_tag_data:\n\nstr=\n"+str+"\n\ndataStr=\n"+dataStr);
return(dataStr);
}//end function extract_tag_data(str,str1,str2)


