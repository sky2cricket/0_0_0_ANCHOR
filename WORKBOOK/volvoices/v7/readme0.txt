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

And for the programmers who will be implementing this download,
I have provided a readme2.txt file with technical programming details.

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
		
Enjoy!                        

cheers!
cricket!

</pre>



