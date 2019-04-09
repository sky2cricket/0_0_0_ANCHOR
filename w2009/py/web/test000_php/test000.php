<html>
<head>
<title>test000</title>
<script language="javascript">
###test000.php uses test000.py
#include "test000.py";
function alert_test000(){
var s= new String(document.form1.t1.value);
alert("alert_test000\n"+s);
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
