//vv_regex.js
//for page_reload_REGEX.htm

//see cma_regex.txt in dlxs14/blnt

//sz=sz.replace(/-[^,],*/gi,"");
//before replacement
//sz="001-abc,002-1*3b,3,4-,5-alksj;lasdfk";
//after replacement
//sz="001,002,3,4,5";
//English wording of the replacement:
//Remove the dash and all that follows up to the next comma.


//show data inside a tag
//tname format:  mods:name
function tag_data_display(tname){

var t= new String(document.DF.chomp.value);
var s= new String();

//alert("vv_regex.js\ntag_data_display\ntext area data:\n"+t+"\ntname:\n"+tname);
//alert("vv_regex.js\ntag_data_display\ntext area data:\n"+t);

alert("before replace, t=\n"+t);//result: <mods:name>J Smith</mods:name>

//s=t.replace(/>[^<],*/gi,"");
//alert("after replace, s=\n"+s); //result:  <mods:name Smith</mods:name>
//s=t.replace(/<[^>],*/gi,"");
//alert("after replace, s=\n"+s); //result:  ods:name Smithmods:name>

//s=t.replace(/\<[^\>],*/gi,"");
//alert("after replace, s=\n"+s); //result:  ods:name Smithmods:name>

//s=t.replace(/<[^\>],*/gi,"");
//alert("after replace, s=\n"+s); //result:  ods:name>J Smithmods:name>

//s=t.replace(/<*[^\>],*/gi,"");
//alert("after replace, s=\n"+s); //result:  >>

//s=t.replace(/>[^<],*/gi,"");
//alert("after replace, s=\n"+s); //result:  <mods:name Smith</mods:name>

//s=t.replace(/>*[^<],*/gi,"");
//alert("after replace, s=\n"+s); //result: << 

//s=t.replace(/<*>[^<],*/gi,"");
//alert("after replace, s=\n"+s); //result: <mods:name Smith</mods:name
 
s=t.replace(/<*>/gi,"");
alert("after replace, s=\n"+s); //result: <mods:nameJ Smith</mods:name



/* this works for 
   <mods:name>J Smith</mods:name>
   when you call tag_data_display('mods:name')
*/
/*
var s0= new String(tname);
    s0= "<"+s0+">";
var s1= new String(tname);
    s1= "</"+s1+">";
alert ("s0="+s0+"\ns1="+s1);

s=t.replace(s0,"");
s=s.replace(s1,"");
alert("after replace, s=\n"+s); //result:  J Smith
*/

}// end function tag_data_display(tname){

function tag_data_display_01(tname){

var t= new String(document.DF.chomp.value);
var s= new String();

var s0= new String(tname);
    s0= "<"+s0+">";
var s1= new String(tname);
    s1= "</"+s1;
var i1= s1.indexOf(" ");
if (i1>-1){
	s1=s1.substring(0,i1);
	}
    s1=s1+">";

alert ("s0="+s0+"\ns1="+s1);

//s=t.replace(s0,"");
//s=s.replace(s1,"");
//alert("after replace, s=\n"+s); //result:  J Smith
}//end function tag_data_display_01(tname){

function tag_data_display_02(tname){
var t= new String(document.DF.chomp.value);
var s= new String();
var u= new String();
alert("before replace, t=\n"+t);//result: <mods:name>J Smith</mods:name>

//s=t.replace(/>[^<],*/gi,"");
//alert("after replace, s=\n"+s); //result:  <mods:name Smith</mods:name>
//s=t.replace(/">[^<],*"/gi,"");
//alert("after replace, s=\n"+s); //result: no change 
//s=t.replace(/">[^>],*"/gi,"");
//alert("after replace, s=\n"+s); //result: no change 

//s=t.replace(/<*mods:/gi,"");
//alert("after replace, s=\n"+s); //result: name>J Smith</name> 

//s=t.replace(/<mods:/gi,"");
//alert("after replace, s=\n"+s); //result: name>J Smith</name>  
 
//s=t.replace(/\<mods:/gi,"");
//alert("after replace, s=\n"+s); //result:   name>J Smith</mods:name> 

//s=t.replace(/<[^:]*/gi,"");
//alert("after replace, s=\n"+s); //result:   :name>J Smith:name>  

s=t.replace(/<[^>]*/gi,"");
alert("after replace, s=\n"+s); //result:   >J Smith>  

//s=s.replace(">","");
//alert("after replace, s=\n"+s); //result:    J Smith> 
s=s.replace(/>/gi,"");
alert("after replace, s=\n"+s); //result:    J Smith 


u=t+"\n\n"+s;
document.DF.chomp.value=u;

}//end function tag_data_display_02(tname){


function tag_data_display_03(tname){
var t= new String(document.DF.chomp.value);
var s= new String();
var u= new String();
alert("before replace, t=\n"+t);//result: <mods:name type="personal">J Smith</mods:name>

//also works for: <mods:name type="personal" authority="ULAN">J Smith</mods:name> 

s=t.replace(/<[^>]*/gi,"");
alert("after replace, s=\n"+s); //result:   >J Smith>  
s=s.replace(/>/gi,"");
alert("after replace, s=\n"+s); //result:    J Smith 
u=t+"\n\n"+s;
document.DF.chomp.value=u;

}//end function tag_data_display_03(tname){


function tag_data_display_04(tname){
var t= new String(document.DF.chomp.value);
var s= new String();
var u= new String();
alert("before replace, t=\n"+t);//result: <mods:name type="personal">J Smith</mods:name>

//also works for: <mods:name type="personal" authority="ULAN">J Smith</mods:name> 

s=t.replace(/<mods:[^>]*/gi,"");
alert("after replace 1, s=\n"+s); //result:   >J Smith</mods:name>  
s=s.replace(/<\/mods:[^>]*/gi,"");
alert("after replace 2, s=\n"+s); //result:   >J Smith>  
s=s.replace(/>/gi,"");
alert("after replace, s=\n"+s); //result:    J Smith 
u=t+"\n\n"+s;
document.DF.chomp.value=u;

}//end function tag_data_display_04(tname){

function tag_data_display_05(tname){
var t= new String(document.DF.chomp.value);
var s= new String();
var u= new String();
var v= new String();
var v2= new String();
var w= new String();
var x= new String();
alert("before replace, t=\n"+t);//result: <mods:name type="personal">J > Smith</mods:name>

v=t.replace(/>[^<]*/gi,"");
alert("after replace 1, v=\n"+v); //result: <mods:name type="personal" authority="ULAN"</mods:name

v2index=v.lastIndexOf("<");
v2 = v.substring(0,v2index);
alert("after replace 1, v2=\n"+v2); //result: mods:name type="personal" authority="ULAN"

w=v.replace(/<\/*/gi,"");
alert("after replace 2, w=\n"+w); //result: mods:name type="personal" authority="ULAN"mods:name


s=t.replace(/<mods:[^>]*/gi,"");
alert("after replace 1, s=\n"+s); //result:   >J > Smith</mods:name>  
s=s.replace(/<\/mods:[^>]*/gi,"");
alert("after replace 2, s=\n"+s); //result:   >J > Smith>  
s=s.replace(/>/i,"");
alert("after replace 3, s=s.replace(/>/i,'')\n s=\n"+s); //result:    J > Smith>
x=s;
xi=x.lastIndexOf(">");
x=x.substring(0,xi);
alert("after replace 4, \n x=\n"+x); //result:    J > Smith>
s=x;
u=t+"\n\n"+s;
document.DF.chomp.value=u;

}//end function tag_data_display_05(tname){

//Given input string
//<mods:name type="personal" authority="ULAN">J > < Smith</mods:name>
//harvest the data
//J > < Smith
function tag_data_display_06(tname){
var t= new String(document.DF.chomp.value);
var s= new String();
var u= new String();
alert("INITIAL chomp.value, t=\n"+t);//result: <mods:name type="personal">J > <  Smith</mods:name>
s=t.replace(/<mods:[^>]*/gi,"");
alert("after replace 1, s=\n"+s); //result:   >J > < Smith</mods:name>  
s=s.replace(/<\/mods:[^>]*/gi,"");
alert("after replace 2, s=\n"+s); //result:   >J > < Smith>  
s=s.substring(s.indexOf(">")+1,s.lastIndexOf(">"));
alert("after replace 3, s=\n"+s); //result:   >J > < Smith>  
u=t+"\n\n"+s;
document.DF.chomp.value=u;
}//end function tag_data_display_06(tname){

function store_comments(){
/*
<mods:name>J Smith</mods:name>
<mods:name type="personal" authority="ULAN">J Smith</mods:name> 


*/
}
