<html>
<head>
<title>t000d</title>
<?php
#t000d.php
#include "test000.py";
?>
<SCRIPT SRC="./test000.js"></script>
<script language="javascript">
function alert_test000(){
var s= new String(document.form1.t1.value);
var t=func_val(s);
alert("alert_test000\ns="+s+"\nt="+t);
}
</script>
</head>
<body bgcolor="ccddff">
test000.php uses test000.py
<hr>
<form name="form1">
<input type="text" name="t1" size="6" value="test">
<br><input type="button" name="b1" value="alert_test" onclick="alert_test000()">
</form>
<hr>
</body>
</html>
