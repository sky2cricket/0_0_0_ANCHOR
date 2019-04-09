
/*
<!--
    This code is issued under the GNU General Public License, 
    version 3, 29 June 2007.

    The DLC-MODS Workbook provides a series of web pages to help you 
    generate a MODS metadata record that follows the Digital Library 
    Federation Implementation Guidelines for Shareable MODS Records, 
    as described in the DLF Aquifer Guidlines November 2006.  These 
    Guidelines and the specific MODS Profile are documented on the 
    MODS Profile Page of the DLC-MODS Workbook.

    Copyright (C) 2007 
    Christine Haygood Deane 
    University of Tennessee Libraries
    Digital Library Center
 

    This program is free software: you can redistribute it and/or modify    
    it under the terms of the GNU General Public License as published by    
    the Free Software Foundation, version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see http://www.gnu.org/licenses/
-->
*/


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

