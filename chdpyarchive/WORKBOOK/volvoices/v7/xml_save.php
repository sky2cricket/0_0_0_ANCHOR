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

$MYFILENAME = $_POST[myfilename];
header("Content-type: application/octet-stream");
header("Content-Disposition: attachment; filename=\"$MYFILENAME\"");



/*you need two empty lines in this file after the header calls*/
/*
xml_save.php
*/

$headerR = $_POST[sHeader];
$page01R = $_POST[sPage_01];
$page02R = $_POST[sPage_02];
$page03R = $_POST[sPage_03];
$page04R = $_POST[sPage_04];
$page05R = $_POST[sPage_05];
$page06R = $_POST[sPage_06];
$closerR = $_POST[sCloser];

##remove backslash before double quotes 
$headerA = preg_replace('/(\\\")/','"',$headerR);
$page01 = preg_replace('/(\\\")/','"',$page01R);
$page02 = preg_replace('/(\\\")/','"',$page02R);
$page03 = preg_replace('/(\\\")/','"',$page03R);
$page04 = preg_replace('/(\\\")/','"',$page04R);
$page05 = preg_replace('/(\\\")/','"',$page05R);
$page06 = preg_replace('/(\\\")/','"',$page06R);
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
$PAGE .= $closer;

print "$PAGE";

?>



