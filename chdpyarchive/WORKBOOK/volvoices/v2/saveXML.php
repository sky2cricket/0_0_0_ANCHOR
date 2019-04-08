<?php
$MYFILENAME = $_POST[myfilename];
header("Content-type: application/octet-stream");
header("Content-Disposition: attachment; filename=\"$MYFILENAME\"");



/*you need two empty lines in this file after the header calls*/
/*
saveXML.php
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



