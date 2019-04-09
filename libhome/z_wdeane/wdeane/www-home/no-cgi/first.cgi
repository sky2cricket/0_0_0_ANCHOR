#!/usr/local/bin/perl
print "content-type: text/html\n\n";
$MyDate = `date`;
chop $MyDate;

print <<"ending_print_tag";
<HTML>
<HEAD>
<TITLE>
CGI TIME
</TITLE>
</HEAD>
<BODY TEXT="FF0000">
<H1>
CGI TIME 
<P>
<HR SIZE=20>
<P>
The date and time is: $MyDate
</BODY>
</HTML>
ending_print_tag
