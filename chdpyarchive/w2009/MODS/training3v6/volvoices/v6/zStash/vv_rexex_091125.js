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

s=t.replace(/<[^>],*/gi,""):
alert("after replace, s=\n"+s); //result:  <mods:name Smith</mods:name>

/*
var s0= new String(tname);
    s0= "<"+s0;
var s1= new String(tname);
    s1= "</"+s1+">";
alert ("s0="+s0+"\ns1="+s1);
*/
}





