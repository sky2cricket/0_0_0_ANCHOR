<?php
$MYFILENAME = $_POST[myfilename];
header("Content-type: application/octet-stream");
header("Content-Disposition: attachment; filename=\"$MYFILENAME\"");


///header("Location: $_POST[$myfilename]");


/*you need two empty lines after the header calls*/
/*
saveXML.php
*/

$twoEmptyLines ="\r\n\r\n";
$headerR = $_POST[sHeader];
$page01R = $_POST[sPage_01];
$page02R = $_POST[sPage_02];
$page03R = $_POST[sPage_03];
$page04R = $_POST[sPage_04];
$page05R = $_POST[sPage_05];
$page06R = $_POST[sPage_06];
$closerR = $_POST[sCloser];

//remove backslash before double quotes 
$header = preg_replace('/(\\\")/','"',$headerR);
$page01 = preg_replace('/(\\\")/','"',$page01R);
$page02 = preg_replace('/(\\\")/','"',$page02R);
$page03 = preg_replace('/(\\\")/','"',$page03R);
$page04 = preg_replace('/(\\\")/','"',$page04R);
$page05 = preg_replace('/(\\\")/','"',$page05R);
$page06 = preg_replace('/(\\\")/','"',$page06R);
$closer = preg_replace('/(\\\")/','"',$closerR);

$PAGE  = $twoEmptyLines;
$PAGE .= $header;
$PAGE .= $page01; 
$PAGE .= $page02; 
$PAGE .= $page03; 
$PAGE .= $page04;
$PAGE .= $page05;
$PAGE .= $page06;
$PAGE .= $closer;

print "$PAGE";

/*
echo "$header";
echo "$page01";
echo "$page02";
echo "$page03";
echo "$page04";
echo "$page05";
echo "$page06";
echo "$closer";
*/
?>



