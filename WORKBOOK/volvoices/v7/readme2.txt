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

<pre>
July 6, 2007.

The purpose of this workbook is to make life easier for those people 
who enter the metadata that makes a digital library possible.  

I have provided three ways of using the web form.

1.  NORMAL WORKFLOW.  	This is how we use these web pages in Tennessee.
		      	The content contributor selects an item in the database,
                      	then pushes the "GO TO WORKBOOK" button.
		      	This brings up the WORKBOOK in a new window,
		      	with many server side variables in php POST format.
		      	These are passed along to appropriate pages.
                      	The final save is done with the file saveXML.php
                      	which will name the file and then you drop 		      
		      	the file in the directory of your choice.
		      	The file xREFworkbook.php is a fully functional
		      	copy of the target of the "GO TO WORKBOOK" button.
		      	I provide this so that if you are lucky enough to
 	              	have a database and php you can develop your
		      	own workbook.php file.  

2.  FAKE SERVERSIDE.  	This is for the person who wishes they had a
                      	database and a "GO TO WORKBOOK" button, but
		      	they don't.  I provide the Server Side Input Page
		      	(SS input), which is where you can input the 
			Server Side values that would have been passed 
			down from the server.  Once you click on the 
			"Enter Server Side Values" button, you are good to go.

		      	There are two reasons to have this SS Input Page.
			First, it will help you match the workbook to your
			own database and help with unravelling names, etc.
			Second, our Content Contributors work in places that
			do not have the Internet.  They will have their 
			laptop loaded with a copy of the workbook, but with
			no access to the database or the "GO TO WORKBOOK"
			button, there were limits to what they could accomplish.
			With the Fake Serverside Option, they can get more done.

3.  PURE CLIENTSIDE.	Some people do not have access to a server, but they still
			want to create metadata files.  No server?  No problem. 
			This user can start on the Begin Alt Page, fill in the 
			necessary values, and then proceed through the workbook in 
			normal fashion.  On the last page, to save the file, they will
			click on the "Display XML as HTML and use View Source to 
			retrieve the XML file" button.  This brings up XML as HTML in 
			the display frame.  Right clicking on the display frame brings 
			up the menu for the frame, with a "View Source" option.  When 
			you click on that, you bring up a notepad file that can be saved 
			as XML.
		
                        
---------------------------------------------------------------------------------------------
Programming notes.

a.  The WB directory contains the following files:

	1.    gnuLicense.txt
	2.    localRights.htm
	3.    modsProfile.xml
	4.    page_001_ss_input.htm
	5.    page_00_begin_alt.htm
	6.    page_00_begin.htm
	7.    page_01.htm
	8.    page_02.htm
	9.    page_03.htm
	10.   page_04.htm
	11.   page_05_alt.htm
	12.   page_05.htm
	13.   page_06.htm
	14.   page_07_museum.htm
	15.   page_08_final.htm
	16.   page_09_reload.htm
	17.   page_10_upper.htm
	18.   page_11_lower.htm
	19.   page_13_review.htm
	20.   page_14_contents.htm
	21.   page_gnuLicense.htm
	22.   page_links_debug.htm
	23.   page_links.htm
	24.   page_modsProfile.htm
	25.   page_readme.htm
	26.   page_welcome.htm
	27.   readme2.txt
	28.   readme.txt
	29.   saveXML.php
	30.   TSLA
	31.   vv_compose_tags.js
	32.   vv_decompose_tags.js
	33.   vv_functions.js
	34.   vv_functions_radio.js
	35.   vv_functions_tsla.js
	36.   vv_popupDates.htm
	37.   vv_popupLists.htm
	38.   vv_process.js
	39.   vv_test_server.php
	40.   vv_tuple.js
	41.   vv_validation.js
	42.   vv_workbook.css
	43.   workbook_debug.htm
	44.   workbook.htm
	45.   workbook.php
	46.   xREFworkbook.php

b. There are 2 versions of the workbook frame page,
   workbook.htm and workbook_debug.htm.  The debug
   frameset is shown below.

<!---------------------------->
<frameset cols="160,*"  border="01" name="P">
	<frame name="T" src="page_links_debug.htm" >
	<frameset rows="150,15,*" >
		<frame name="U" src="page_10_upper.htm"  >
		<frame name="L" src="page_11_lower.htm" >
		<frame name="D" src="page_welcome.htm" scrolling="yes">
	</frameset>
</frameset>
<!--------------------------->


   The debug frame exposes the hidden frames, 
   page_10_upper.htm and page_11_lower.htm.

   page_11_lower.htm carries all the arrays, functions, and
   constants that do not change as the form is being used.
   This slows down the first loading of the workbook, but
   then all pages have access to what they need immediately.
   I have added an alert button to page_11_lower.htm to
   prevent users from attempting to use a page before all
   the supporting files are loaded.  



</pre>



