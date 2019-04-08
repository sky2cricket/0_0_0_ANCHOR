

function fdg() {
if (parent.workbook_debug == "false"){ 
	return;
	}

var BEGINFORM = 0;
var ENDFORM   = document.forms.length;

document.write("<div id='formdebug' align='left'><font face='arial' size='2' color='000080'>");
document.write(	"<hr> location.href = "+location.href+"<BR>");
for ( jj=BEGINFORM; jj<ENDFORM; jj++ ) {
document.write('<br> document.forms['+jj+'].name='+document.forms[jj].name+'<br>');
document.write(' '+document.forms[jj].name +'.method='+document.forms[jj].method+'<br>');
document.write(' '+document.forms[jj].name +'.action='+document.forms[jj].action+'<br>');

for(i=0;i<document.forms[jj].length;i++) {
	document.write(' '+ document.forms[jj].name+".elements["+i+"]::"
			  +' ------name: '+document.forms[jj].elements[i].name
			  +' ------type: '+document.forms[jj].elements[i].type
			  +' -----value: '+document.forms[jj].elements[i].value
			  )
	document.write('<br>')
	}//end for i
}//end for jj

document.write("<HR>");
document.write("</font></div>");

}///end function fdg()

