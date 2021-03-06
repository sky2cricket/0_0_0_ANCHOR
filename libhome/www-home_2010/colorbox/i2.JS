////SCRIPT FILE i2.JS
////called by  t2.html
////copied from http://mail.ntown.com/~cdeane/website/i2.JS  
////SCRIPT LANGUAGE="Javascript"
///Note that the time and date things are calculated here
///rather than using available Javascript 1.2 functions.
///This is to take care of people who have older browsers
///that cannot handle Javascript 1.2 functions.

//the makeArray function adapted from page 164 of  Javascript by Flanagan
//this function declares space for a new array.
var length;
function makeArray (length) {
        this.size=length; //sets slot 0 in Javascript 1.0
 this[0]=length;          //sets slot 0 in other versions
 //slots 1 and up are used for actual array elements
 for(var i=1;i<=length;i++) this[i]=0;
 }

var MONTH = new makeArray(13);
    MONTH[1]="January"; MONTH[2]="February"; MONTH[3]="March";
    MONTH[4]="April";   MONTH[5]="May";      MONTH[6]="June";
    MONTH[7]="July";    MONTH[8]="August";   MONTH[9]="September";
    MONTH[10]="October";MONTH[11]="November";MONTH[12]="December";
var DAYOFWEEK = new makeArray(8);
    DAYOFWEEK[1]="Sunday";    DAYOFWEEK[2]="Monday"; DAYOFWEEK[3]="Tuesday";
    DAYOFWEEK[4]="Wednesday"; DAYOFWEEK[5]="Thursday";
    DAYOFWEEK[6]="Friday";    DAYOFWEEK[7]="Saturday";
 
//all time and day info from Date Object
d=new Date();
dm=d.getMinutes(d);  //minutes
dh=d.getHours(d);    //hours on mil 24 hr clock

////Create the greeting string
//use mil hours to determine greeting
//then convert to am/pm
//midnight is 12 a.m., noon is 12 p.m.
//then calculate CurrTime
 
if (dh<5)
 Greeting=" ... Hi there, night owl! ";
if( (dh>4) && (dh<12) )
 Greeting=" ... Good Morning!  ";
if( (dh>11) && (dh<18 ) )
 Greeting=" ... Good Afternoon! ";
if( (dh>17) )
 Greeting=" ... Good Evening! ";
 


////Create the CurrTime string.
// time expressed as:  dh +COLON + dm + meridian
COLON=":"; if(dm<10) COLON=":0";
meridian=" am ";
if(dh == 12) meridian=" pm ";
if(dh > 12 ) {dh=dh-12; meridian=" pm ";}
if(dh == 0 ) dh=12;
CurrTime= dh+COLON+dm+meridian

////Create the CurrDay string.
////Format:  Thursday, October 7, 1999
////note that d.getMonth, d.getDay need conversion to string
////          d.getDate needs no conversion
dMonth=d.getMonth();
themonth=MONTH[dMonth+1];
thedayofmonth=d.getDate();
dDay=d.getDay();
theday=DAYOFWEEK[dDay+1];
dYear= d.getYear();
theyear="19"+dYear;
 if(dYear<10)theyear="200"+dYear;//this fails on Jan. 1, 2010.
CurrDay=  theday+",  "+ themonth+ "  "+thedayofmonth+",  "+ theyear;
 
document.write(' <table border=2> '
 + ' <tr> <td >'
 + "&nbsp;"
 + '</td> <td >'
 + "&nbsp;"
 + '</td> <td >'
 + "&nbsp;"
 + '</td> '
 + '<td width="540"> <h4> <font color="000090" >'
 +'<center> Today is   ' +CurrDay+'  ...  The time is  '+CurrTime +"   " +Greeting
 +"<br><center>Thank you for visiting here with your "+navigator.appName+" Browser."
 + '</font> </td> </tr> </table>');
//////end script
