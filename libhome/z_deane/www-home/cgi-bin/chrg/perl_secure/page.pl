#!/usr/local/bin/perl5

print "Content-type: text/html";
 
#closed.pl

sub subPrintClosedPage {

print " 
<html><head><title>closed.cgi</title></head>
<body bgcolor=\"ffffbb\" text=\"000000\">
<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=-1>
<b>closed.cgi</b>
<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=-2>
<p>
<a href=\"firstForm.html\">firstForm.html</a>
<p>                                          
This page does not allow the user to view all html code
by pressing the \"view source\" button.
<p>
<center>
<FORM NAME=\"F1\" METHOD=POST
ACTION=\"display_00.cgi\">
<table border=1><tr>
<td> 
<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=-2>
Please enter your name.
</td> 
<td>
<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=-2>
<INPUT TYPE=TEXT NAME=\"hName\" VALUE=\"Your Name goes here\" size=32>
</td>
</tr><tr>
<td> 
<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=-2>
Please enter your favorite color.
</td> 
<td>
<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=-2>
<INPUT TYPE=TEXT NAME=\"hColor\" VALUE=\"Your favorite color goes here\" size=32>
</td>
</tr><tr>
<td>
<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=-2>
Please push button to submit.
</td>
<td>
<font face=\"Verdana, Arial, Helvetica, sans-serif\" size=-2>
<INPUT TYPE=SUBMIT VALUE=\"SUBMIT BUTTON\">
</td>
</tr></table>
</FORM>
</body></html>
";

return;
}

