


function populate_name_fields2(N,ttype,W,H){
var sN    = new String(N); //"01", "02", "03", etc.
    sN    = "0"+sN;
var sType = new String(ttype); //was a,b,c now 1,2,3

var sTarget = new String();
    sTarget = "vv_popupNames.htm?N="+sN+"&sType="+sType;


var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;
    wDef += ",scrollbars=yes";
    wDef += ",resizable";
        
        
alert(sTarget+",\"helpNamesWindow\",\""+wDef+"\"");

window.open(sTarget,"helpNamesWindow",wDef);



}//end function populate_name_fields2(N,ttype,W,H){


function selectOneOptionDate_for_popupNames(sbox,W,H) 
{
///alert("vv_functions.js: sBox.name="+sbox.name)
var sTarget = new String();
    sTarget = "vv_popupDates.htm?sbox_name="+sbox.name;

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;
    wDef += ",scrollbars=yes"
    wDef += ",resizable"

//alert(sTarget+",\"helpDatesWindow\",\""+wDef+"\"")

window.open(sTarget,"helpDatesWindow",wDef);



}//end function selectOneOptionDate_for_popupNames(sbox,W,H) 

