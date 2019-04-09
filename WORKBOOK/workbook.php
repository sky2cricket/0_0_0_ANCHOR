
<html>
<head>
<title>WORKBOOK</title>
<?php

$str = $_POST[mydata];

$test = "test_php";

print "<script language='javascript'>";
print "var mytest=$test";
print "</script>";

?>

</head>
<frameset cols="90,*"  border="0">
	<frame name="T" src="../workbook/ww/page_links.htm" >
	<frameset rows="0,*" >

		<frame name="U" src="../workbook/ww/page_upper.htm"  >
		<frame name="D" src="../workbook/ww/page_welcome.htm" scrolling="yes">
	</frameset>

</html>



