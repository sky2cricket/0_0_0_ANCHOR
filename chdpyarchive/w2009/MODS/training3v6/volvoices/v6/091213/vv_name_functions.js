

/*
function populate_name_fields(N,ttype,aauth,W,H,CLN,CGN,YB,YD,ND,NR){
var sType = new String(ttype);
var sAuth = new String(aauth);
var sCLN  = new String(CLN);
var sCGN  = new String(CGN);
var sYB   = new String(YB);//year of birth
var sYD   = new String(YD);//year of death
var sND   = new String(ND);//name description
var sNR   = new String(NR);//role
//alert("sCLN="+sCLN);
//alert("sCGN="+sCGN);
*/


function populate_name_fields(N,ttype,aauth,W,H,CLN,CGN,FD,ND,NRa,NRaa,NRb,NRba,NRc,NRca){
//function populate_name_fields(N,ttype,aauth,W,H){
var sN    = new String(N); //"01", "02", "03", etc.
var sType = new String(ttype);
var sAuth = new String(aauth);
/**/
var sCLN  = new String(CLN);//last name
var sCGN  = new String(CGN);//given name
var sFD   = new String(FD); //full date
var sND   = new String(ND);//name description
var sNRa  = new String(NRa);//rolea
var sNRaa = new String(NRaa);//rolea auth
var sNRb  = new String(NRb);//roleb
var sNRba = new String(NRba);//roleb auth
var sNRc  = new String(NRc);//rolec
var sNRca = new String(NRca);//rolec auth

/**/


var sTarget = new String();
    sTarget = "vv_popupNames.htm?N="+sN+"&sType="+sType+"&sAuth="+sAuth+"&sCLN="+sCLN+"&sCGN="+sCGN+"&sFD="+sFD+"&sND="+sND+"&sNRa="+sNRa+"&sNRaa="+sNRaa+"&sNRb="+sNRb+"&sNRba="+sNRba+"&sNRc="+sNRc+"&sNRca="+sNRca;

    sTarget = "vv_popupNames.htm?N="+sN+"&sType="+sType+"&sAuth="+sAuth +"&sCLN="+sCLN+"&sCGN="+sCGN+"&sFD="+sFD+"&sND="+sND+"&sNRa="+sNRa+"&sNRaa="+sNRaa+"&sNRb="+sNRb+"&sNRba="+sNRba+"&sNRc="+sNRc+"&sNRca="+sNRca;
/*
alert("vv_name_functions.js: populate_name_fields(N,W,H,CLN,CGN,FD,ND,NRa,NRaa,NRb,NRba,NRc,NRca)\n\nname # "+sN+"\nwidth="+W+"\nheight="+H
+"\nsCLN="+sCLN
+"\nsCGN="+sCGN
+"\nsFD="+sFD
+"\nsND="+sND
+"\nsNRa="+sNRa
+"\nsNRaa="+sNRaa
+"\nsNRb="+sNRb
+"\nsNRba="+sNRba
+"\nsNRc="+sNRc
+"\nsNRca="+sNRca
+"\nsTarget="+sTarget);
*/

var w = new String(W);
var h = new String(H);

var wDef = new String();
    wDef = "width="+w+",height="+h;
    wDef += ",scrollbars=yes";
    wDef += ",resizable";
        
        
alert(sTarget+",\"helpNamesWindow\",\""+wDef+"\"");

window.open(sTarget,"helpNamesWindow",wDef);



}//end function


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

