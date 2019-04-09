#!/usr/local/bin/perl5

#display_00.pl

do "readPost.pl" || die "Cannot do readPost.pl\n";
&subReadPostedValues;

$Name=&subGetPostedValue("hName");
$favColor=&subGetPostedValue("hColor");

$Name    =~ s/\+/ /g;
$favColor=~ s/\+/ /g;

print "
<HTML><HEAD><TITLE>display_00</TITLE></HEAD>
<BODY BGCOLOR=\"ffffbb\" TEXT=\"000000\">

<a href=\"../../../chrg/perl_secure/firstForm.html\">firstForm.html</a>
<center>
<table cellpadding=10><tr>
<td>
<a href=\"http://www.cs.utk.edu/~deane/chrg/perl_secure/open.html\">
back to open code</a></td>
<td>
<a href=\"closed.cgi\">
back to closed code</a></td>
</tr>
</table>
<p> &nbsp;
<p> &nbsp;
<table border=2 bgcolor=\"ffffff\"> 
<tr>
<td> Your name is: </td>
<td> $Name </td>
</tr><tr>
<td> Your favorite color is: </td>
<td> $favColor </td>
</tr>
</table>
</body></html>
";
exit(0);

