

function fdg() {
if (parent.workbook_debug == "false"){ 
	return;
	}

var BEGINFORM = 0;
var ENDFORM   = document.forms.length;

document.write("<div id='formdebug' align='left'><font face='arial' size='1' color='000080'>");
for ( jj=BEGINFORM; jj<ENDFORM; jj++ ) {
document.write('<hr> document.forms['+jj+'].name='+document.forms[jj].name+'<br>');
document.write(' document.forms['+jj+'].method='+document.forms[jj].method+'<br>');
document.write(' document.forms['+jj+'].action='+document.forms[jj].action+'<br>');

for(i=0;i<document.forms[jj].length;i++)
{
document.write( 'document.forms['+jj+']::'+ document.forms[jj].name+".elements["+i+"]::"
			  +' ------name: '+document.forms[jj].elements[i].name
			  +' ------type: '+document.forms[jj].elements[i].type
			  +' -----value: '+document.forms[jj].elements[i].value
			  )
			  if ( typeof(document.forms[jj].elements[i].tabindex) != 'undefined') {
			  document.write( ' -----tabindex: '+ document.forms[jj].elements[i].tabindex )
			  }
			  if ( typeof(document.forms[jj].elements[i].onblur) != 'undefined') {
			  document.write( ' -----onblur: '+ document.forms[jj].elements[i].onblur )
			  }
			  if ( document.forms[jj].elements[i].type == 'button' ) {
			  document.write( ' -----onclick: '+ document.forms[jj].elements[i].onclick )
			  }
			  if ( document.forms[jj].elements[i].type == 'radio' ) {
			  document.write( ' -----checked: '+ document.forms[jj].elements[i].checked )
			  }
document.write('<br>')
			  
			  }}



document.write("<HR>");
document.write(	" location.href = "+location.href+"<BR>");
document.write("<HR>");
document.write("</font></div>");

}///end function fdg()

