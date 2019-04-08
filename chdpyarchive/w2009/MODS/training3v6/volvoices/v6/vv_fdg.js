//vv_fdg.js
//fdg();//function in vv_validation.js
//THIS IS THE ORIGINAL BEFORE CHANGES 091214 chd

/// function formvardebug()
/// re written 091214 to work in any file with form(s)
function forvardebug() {
//return;

var BEGINFORM = 0;
var ENDFORM   = parent.D.document.forms.length;

document.write("<div id='formdebug' align='left'><font face='arial' size='1' color='a00000'>");
for ( jj=BEGINFORM; jj<ENDFORM; jj++ ) {
document.write('<hr> parent.D.document.forms['+jj+'].name='+parent.D.document.forms[jj].name+'<br>');
document.write(' parent.D.document.forms['+jj+'].method='+parent.D.document.forms[jj].method+'<br>');
document.write(' parent.D.document.forms['+jj+'].action='+parent.D.document.forms[jj].action+'<br>');

for(i=0;i<parent.D.document.forms[jj].length;i++)
{
document.write( 'parent.D.document.forms['+jj+']::'+ parent.D.document.forms[jj].name+".elements["+i+"]::"
			  +' ------name: '+parent.D.document.forms[jj].elements[i].name
			  +' ------type: '+parent.D.document.forms[jj].elements[i].type
			  +' -----value: '+parent.D.document.forms[jj].elements[i].value
			  )
			  if ( typeof(parent.D.document.forms[jj].elements[i].tabindex) != 'undefined') {
			  document.write( ' -----tabindex: '+ parent.D.document.forms[jj].elements[i].tabindex )
			  }
			  if ( typeof(parent.D.document.forms[jj].elements[i].onblur) != 'undefined') {
			  document.write( ' -----onblur: '+ parent.D.document.forms[jj].elements[i].onblur )
			  }
			  if ( parent.D.document.forms[jj].elements[i].type == 'button' ) {
			  document.write( ' -----onclick: '+ parent.D.document.forms[jj].elements[i].onclick )
			  }
			  if ( parent.D.document.forms[jj].elements[i].type == 'radio' ) {
			  document.write( ' -----checked: '+ parent.D.document.forms[jj].elements[i].checked )
			  }
document.write('<br>')
			  
			  }}




document.write("<HR>");
document.write(	" location.href = "+location.href+"<BR>");
document.write('document.location.href='+document.location.href+'<BR>');
document.write(	" parent.location.href = "+parent.location.href+"<BR>");
if ( typeof( parent.parent) != 'undefined' ) {
document.write(	" parent.parent.location.href = "+parent.parent.location.href+"<BR>");
}
document.write("<HR>");
document.write('parent.name='+parent.name+'<BR>');

document.write('parent.frames.length='+parent.frames.length+'<BR>');
document.write(	" parent.location.href = "+parent.location.href+"<P>");


for ( i=0; i<parent.frames.length; i++ ) 
{
document.write(	" parent.frames["+i+"] :: "
			+ " ------name: "+parent.frames[i].name
			+ " ------location.href: "+ parent.frames[i].location.href
			+ "<br>"
			);
			}

document.write("<HR>");
if ( typeof(parent.parent) != 'undefined') {
document.write('parent.parent.name='+parent.parent.name+'<BR>');
document.write('parent.parent.frames.length='+parent.parent.frames.length+'<BR>');
document.write(	" parent.parent.location.href = "+parent.parent.location.href+"<P>");
//for popup windows see vv_formvardebug.js:
//document.write('window.opener.location.href='+window.opener.location.href+'<BR>');

document.write('window.opener.location.href='+window.opener.location.href+'<BR>');


for ( i=0; i<parent.parent.frames.length; i++ ) 
{
document.write(	" parent.parent.frames["+i+"] :: "
			+ " ------name: "+parent.parent.frames[i].name
			+ " ------location.href: "+ parent.parent.frames[i].location.href
			+ "<br>"
			);
			}

}
document.write("</font></div>");

}///end function formvardebug()




