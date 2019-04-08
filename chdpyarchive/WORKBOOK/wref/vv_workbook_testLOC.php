
<html>
<head>
<title>WORKBOOK</title>
<?php

$input_str = $_POST[admindb_data];

$test_data = $_REQUEST[test];



print "<script language='javascript'>";
print "var dlc_software_id =\"University of Tennesse Libraries Digital Library Center Workbook Version 1.0\"; \n";
print "var mytest='$input_str';";
print "var admindb_data='$input_str';";
print "var check_test =  '$test_data';";
print "if ( check_test != 'NEW' ) { check_test = 'none'; } "; 
print "alert(check_test);";
print "Location_01= new String('<frameset cols=\"90,*\"  border=\"0\"> '
      		+'<frame name=\"T\" src=\"workbook/vv/page_links.htm\" > '
     	 	+'<frameset rows=\"0,*\" >'
		+'<frame name=\"U\" src=\"workbook/vv/page_upper.htm\"  > '
		+'<frame name=\"D\" src=\"workbook/vv/page_welcome.htm\" scrolling=\"yes\">'
		+'</frameset>'
		+'</frameset>' );" ;

print "Location_02= new String('<frameset cols=\"90,*\"  border=\"0\"> '
      		+'<frame name=\"T\" src=\"workbook/ww/page_links.htm\" > '
     	 	+'<frameset rows=\"0,*\" >'
		+'<frame name=\"U\" src=\"workbook/ww/page_upper.htm\"  > '
		+'<frame name=\"D\" src=\"workbook/ww/page_welcome.htm\" scrolling=\"yes\">'
		+'</frameset>'
		+'</frameset>' );" ;

print "Location_03= new String('<frameset cols=\"90,*\"  border=\"0\"> '
      		+'<frame name=\"T\" src=\"volvoices/vv/page_links.htm\" > '
      		+'<frameset rows=\"0,*\" >'
		+'<frame name=\"U\" src=\"volvoices/vv/page_upper.htm\"  > '
		+'<frame name=\"D\" src=\"volvoices/vv/page_welcome.htm\" scrolling=\"yes\">'
		+'</frameset>'
		+'</frameset>' );" ;

print "Location_04= new String('<frameset cols=\"90,*\"  border=\"0\"> '
      		+'<frame name=\"T\" src=\"volvoices/ww/page_links.htm\" > '
      		+'<frameset rows=\"0,*\" >'
		+'<frame name=\"U\" src=\"volvoices/ww/page_upper.htm\"  > '
		+'<frame name=\"D\" src=\"volvoices/ww/page_welcome.htm\" scrolling=\"yes\">'
		+'</frameset>'
		+'</frameset>' );" ;


print "</script>";

?>

</head>
<!---------------------------->

<?php
print "<script language='javascript'>";
print "if ( check_test == 'NEW' ) {";
print "document.write(Location_01); '
print "} else {";
print "document.write(Location_04); '
print "} ";
print "</script>";
?>

<!--------------------------->

<!----------------------------
<frameset cols="90,*"  border="0">
	<frame name="T" src="workbook/ww/page_links.htm" >
	<frameset rows="0,*" >

		<frame name="U" src="workbook/ww/page_upper.htm"  >
		<frame name="D" src="workbook/ww/page_welcome.htm" scrolling="yes">
	</frameset>
</frameset>

--------------------------->


<!----------------------------
<frameset cols="90,*"  border="0">
	<frame name="T" src="volvoices/vv/page_links.htm" >
	<frameset rows="0,*" >

		<frame name="U" src="volvoices/vv/page_upper.htm"  >
		<frame name="D" src="volvoices/vv/page_welcome.htm" scrolling="yes">
	</frameset>
</frameset>
--------------------------->


<!----------------------------
<frameset cols="90,*"  border="0">
	<frame name="T" src="volvoices/ww/page_links.htm" >
	<frameset rows="0,*" >

		<frame name="U" src="volvoices/ww/page_upper.htm"  >
		<frame name="D" src="volvoices/ww/page_welcome.htm" scrolling="yes">
	</frameset>
</frameset>
--------------------------->



</html>



