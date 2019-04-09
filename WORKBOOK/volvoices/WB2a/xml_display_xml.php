<?php

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

/*
//only want to display xml in new web page
*/
$MYFILENAME = $_POST[myfilename];
header("Content-type: text/xml");
/*
header("Content-type: application/octet-stream");
header("Content-Disposition: attachment; filename=\"$MYFILENAME\"");

*/


/*you need two empty lines in this file after the header calls*/
/*
xml_display_xml.php
*/

$headerR = $_POST[sHeader];
$page01R = $_POST[sPage_01];
$page02R = $_POST[sPage_02];
$page03R = $_POST[sPage_03];
$page04R = $_POST[sPage_04];
$page05R = $_POST[sPage_05];
$page06R = $_POST[sPage_06];
$page07R = $_POST[sPage_07];
$page08R = $_POST[sPage_08];
$page09R = $_POST[sPage_09];
$page10R = $_POST[sPage_10];
$page11R = $_POST[sPage_11];
$page12R = $_POST[sPage_12];
$page13R = $_POST[sPage_13];
$page14R = $_POST[sPage_14];
$closerR = $_POST[sCloser];

##remove backslash before double quotes 
$headerA = preg_replace('/(\\\")/','"',$headerR);
$page01 = preg_replace('/(\\\")/','"',$page01R);
$page02 = preg_replace('/(\\\")/','"',$page02R);
$page03 = preg_replace('/(\\\")/','"',$page03R);
$page04 = preg_replace('/(\\\")/','"',$page04R);
$page05 = preg_replace('/(\\\")/','"',$page05R);
$page06 = preg_replace('/(\\\")/','"',$page06R);
$page07 = preg_replace('/(\\\")/','"',$page07R);
$page08 = preg_replace('/(\\\")/','"',$page08R);
$page09 = preg_replace('/(\\\")/','"',$page09R);
$page10 = preg_replace('/(\\\")/','"',$page10R);
$page11 = preg_replace('/(\\\")/','"',$page11R);
$page12 = preg_replace('/(\\\")/','"',$page12R);
$page13 = preg_replace('/(\\\")/','"',$page13R);
$page14 = preg_replace('/(\\\")/','"',$page14R);

$closer = preg_replace('/(\\\")/','"',$closerR);

##replace \\ with \
$header = preg_replace('/(\\\\\\\\)/','\\\\',$headerA);

$PAGE  = $header;
$PAGE .= $page01; 
$PAGE .= $page02; 
$PAGE .= $page03; 
$PAGE .= $page04;
$PAGE .= $page05;
$PAGE .= $page06;
$PAGE .= $page07;
$PAGE .= $page08;
$PAGE .= $page09;
$PAGE .= $page10;
$PAGE .= $page11;
$PAGE .= $page12;
$PAGE .= $page13;
$PAGE .= $page14;
$PAGE .= $closer;

print "$PAGE";

?>



