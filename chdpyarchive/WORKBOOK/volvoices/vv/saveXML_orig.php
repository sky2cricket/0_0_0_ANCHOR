<?php
header("Content-type: text/text");
header('Content-Dispposition: attachment; filename="save.xml"');


/*you need two empty lines after the header calls*/
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

//remove backslash before double quotes 
$headerS = preg_replace('/(\\\")/','"',$headerR);
$page01S = preg_replace('/(\\\")/','"',$page01R);
$page02S = preg_replace('/(\\\")/','"',$page02R);
$page03S = preg_replace('/(\\\")/','"',$page03R);
$page04S = preg_replace('/(\\\")/','"',$page04R);
$page05S = preg_replace('/(\\\")/','"',$page05R);
$page06S = preg_replace('/(\\\")/','"',$page06R);
$closerS = preg_replace('/(\\\")/','"',$closerR);

//remove space before tag openers < 
$header = preg_replace('/(< )/','<',$headerS);
$page01 = preg_replace('/(< )/','<',$page01S);
$page02 = preg_replace('/(< )/','<',$page02S);
$page03 = preg_replace('/(< )/','<',$page03S);
$page04 = preg_replace('/(< )/','<',$page04S);
$page05 = preg_replace('/(< )/','<',$page05S);
$page06 = preg_replace('/(< )/','<',$page06S);
$closer = preg_replace('/(< )/','<',$closerS);



echo "$header";
echo "$page01";
echo "$page02";
echo "$page03";
echo "$page04";
echo "$page05";
echo "$page06";
echo "$closer";
?>



