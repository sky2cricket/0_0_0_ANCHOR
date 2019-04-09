#!/usr/local/bin/perl5

print "Content-type: text/html";
 
#closed.pl

sub subPrintClosedPage3 {

print " 
<!--- This is the frame control page for SECURE directory --->
<html>
<head>
<title> SECURE/index.html </title>
</head>

<frameset rows=\"99%, 1%\">
  <frame name=\"thisFrame\" src=\"this.html\">
  <frame name=\"thatFrame\" src=\"that.html\">
</frameset>
</html>     
";

return;
}

