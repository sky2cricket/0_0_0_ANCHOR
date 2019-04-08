<?php
/*
 admindbconn.php
 db setup include
 must be custom and LOCAL to each project/user


*/
/*from paulc*/
/**************************/
$dbuser = "vvadminuser";
$dbpass = "K5q8UaRus";
$db = "vvadmin";
/*************************/

$link = mysql_connect( "localhost", $dbuser, $dbpass );
if ( ! $link )  die( "Couldn't connect to MySQL" );
mysql_select_db( $db, $link ) || die( "Could not open $db: , mysql_error()" );

?>
