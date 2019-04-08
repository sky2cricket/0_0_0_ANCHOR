

function fdg() {
//return;

var BEGINFORM = 0;
var ENDFORM   = thisDocument.forms.length;

document.write("<div id='formdebug' align='left'><font face='arial' size='1' color='a00000'>");
for ( jj=BEGINFORM; jj<ENDFORM; jj++ ) {
document.write('<hr> thisDocument.forms['+jj+'].name='+thisDocument.forms[jj].name+'<br>');
document.write(' thisDocument.forms['+jj+'].method='+thisDocument.forms[jj].method+'<br>');
document.write(' thisDocument.forms['+jj+'].action='+thisDocument.forms[jj].action+'<br>');

for(i=0;i<thisDocument.forms[jj].length;i++)
{
document.write( 'thisDocument.forms['+jj+']::'+ thisDocument.forms[jj].name+".elements["+i+"]::"
			  +' ------name: '+thisDocument.forms[jj].elements[i].name
			  +' ------type: '+thisDocument.forms[jj].elements[i].type
			  +' -----value: '+thisDocument.forms[jj].elements[i].value
			  )
			  if ( typeof(thisDocument.forms[jj].elements[i].tabindex) != 'undefined') {
			  document.write( ' -----tabindex: '+ thisDocument.forms[jj].elements[i].tabindex )
			  }
			  if ( typeof(thisDocument.forms[jj].elements[i].onblur) != 'undefined') {
			  document.write( ' -----onblur: '+ thisDocument.forms[jj].elements[i].onblur )
			  }
			  if ( thisDocument.forms[jj].elements[i].type == 'button' ) {
			  document.write( ' -----onclick: '+ thisDocument.forms[jj].elements[i].onclick )
			  }
			  if ( thisDocument.forms[jj].elements[i].type == 'radio' ) {
			  document.write( ' -----checked: '+ thisDocument.forms[jj].elements[i].checked )
			  }
document.write('<br>')
			  
			  }}




document.write("<HR>");
document.write(	" location.href = "+location.href+"<BR>");
document.write('document.location.href='+document.location.href+'<BR>');
document.write(	" parent.location.href = "+parent.location.href+"<BR>");
document.write("<HR>");



for ( i=0; i<parent.frames.length; i++ ) 
{
document.write(	" parent.frames["+i+"] :: "
			+ " ------name: "+parent.frames[i].name
			+ " ------location.href: "+ parent.frames[i].location.href
			+ "<br>"
			);
			}

document.write("<HR>");
document.write("</font></div>");

}///end function fdg()

