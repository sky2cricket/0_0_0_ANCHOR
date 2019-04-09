

function elements() {
if (parent.workbook_debug == "false"){ 
	return;
	}

var BEGINFORM = 0;
var ENDFORM   = document.forms.length;
var dash = "--------";
var dash2 =  "------";
var t = new String();
    t = location.href;
    t = t.substring(t.lastIndexOf("/")+1);

document.write("<div id='elements' align='left'><font face='arial' size='3' color='000080'><b>");
document.write(	"<hr>"+t+"<BR>");
for ( jj=BEGINFORM; jj<ENDFORM; jj++ ) {
document.write('<br> document.forms['+jj+'].name='+document.forms[jj].name+'<p>');

for(i=0;i<document.forms[jj].length;i++) {
        if (i<10) { t = dash; }else{ t = dash2; }
	document.write(' '+ document.forms[jj].name+".elements["+i+"]::"
			  +' '+t +'name: '+document.forms[jj].elements[i].name
			  +' ------type: '+document.forms[jj].elements[i].type
			  )
	document.write('<br>')
	}//end for i
}//end for jj

document.write("<HR>");
document.write("</font></div>");

}///end function elements()

