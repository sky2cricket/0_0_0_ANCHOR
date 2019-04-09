
<html>
<head>
<title>testServer</title>
</head>
<body bgcolor="ffffff" >
<table width="85%" cellpadding="5" cellspacing="0" border="1">
<tr><td width="25%"><b>Server Key</b></td>
    <td><b>Server Value</b></td>
</tr>
<?php
foreach ($_SERVER as $key => $value ) {
echo <<<EOT

<tr>
<td width="25%" align="top"><b>$key</b>
</td>
<td>$value &nbsp;
</td>
</tr>
EOT;
}
?>
</table>
<hr>
<table width="85%" cellpadding="5" cellspacing="0" border="1">
<tr><td width="25%"><b>Session Key</b></td>
    <td><b>Session Value</b></td>
</tr>
<?php

session_start();
 if (!isset($_SESSION['user_agent']))
{
	$_SESSION = $_SERVER['HTTP_USER_AGENT'];
}
foreach ($_SESSION as $key => $value ) {
echo <<<EOT

<tr>
<td width="25%" align="top"><b>$key</b>
</td>
<td>$value &nbsp;
</td>
</tr>
EOT;
}

?>
</table>
<hr>phpinfo()</hr>
<?php

phpinfo();

?>

<p>
</body>
</html>

