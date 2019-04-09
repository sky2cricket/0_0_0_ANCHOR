
<%@ Language="Javascript"%>
<%

var MAPLAT = Request('maplat');
var MAPLON = Request('maplon');
var MAPTITLE = Request('maptitle');

%>
<html>
<head>

<title>getmap.asp</title>
</head>
<body bgcolor="ffffee">
<font face= "arial" size="2">
<b>getmap.asp</b>
<p>
<form >
<input type="hidden" name="hMAPLAT" value="<%=MAPLAT%>" >
<input type="hidden" name="hMAPLON" value="<%=MAPLON%>" >
<input type="hidden" name="hMAPTITLE" value="<%=MAPTITLE%>" >
</form>
maplat=
<script Language="Javascript">document.forms[0].hMAPLAT.value</script>
<p>
maplon=
<script Language="Javascript">document.forms[0].hMAPLON.value</script>
<p>
maptitle=
<script Language="Javascript">document.forms[0].hMAPTITLE.value</script>
</body>
</html>
