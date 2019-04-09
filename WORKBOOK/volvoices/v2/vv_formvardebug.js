//vv_formvardebug.js
//place the line shown below inside <HEAD>...</HEAD> tags in .htm file
//<script language=javascript src="vv_formvardebug.js"></script>

//fdg();//function in vv_validation.js
//original at vv_fdg.js
//THIS IS THE WORKING COPY WITH CHANGES 091214 chd

/// function formvardebug()
/// re written 091214 to work in any file with form(s)
/// specifically for name popup window
//
//HOW TO USE
//at top of htm file add this line
//<script language=javascript src="vv_formvardebug.js"></script>
//
//after last form, within <script>...</script> tags
//formvardebug();

//This version does not refer to parents or siblings
//but does refer to window.opener info
//To see parent-sibling info, use vv_fdg.js




function formvardebug() {
//return;

var BEGINFORM = 0;
//var ENDFORM   = document.forms.length;
var ENDFORM   = document.forms.length;

document.write("<div id='formdebug' align='left'><font face='arial' size='1' color='a00000'>");
document.write("formvardebug version for popup windows - no parent information<br>");
document.write("BEGINFORM="+BEGINFORM+"<BR>ENDFORM="+ENDFORM+"<BR>");
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
document.write('document.location.href='+document.location.href+'<BR>');
if (window.opener){
document.write('window.opener.location.href='+window.opener.location.href+'<BR>');
}

/*------------------------------------------------------
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


for ( i=0; i<parent.parent.frames.length; i++ ) 
{
document.write(	" parent.parent.frames["+i+"] :: "
			+ " ------name: "+parent.parent.frames[i].name
			+ " ------location.href: "+ parent.parent.frames[i].location.href
			+ "<br>"
			);
			}

}
-----------------------------------------------------*/
document.write("</font></div>");

}///end function formvardebug()




