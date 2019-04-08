<?php
$MYFILENAME = $_POST[myfilename];
header("Content-type: application/text");
header("Content-Disposition: attachment; filename=\"$MYFILENAME\"");



/*you need two empty lines in this file after the header calls*/

$page01R = $_POST[chomp2];
$page01S = trim($page01R);
print "$page01S";


?>



