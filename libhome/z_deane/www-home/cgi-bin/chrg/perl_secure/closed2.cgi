#!/usr/local/bin/perl5

#closed.cgi

do "readPost.pl" || die "Cannot do readPost.pl\n";
do "page2.pl" || die "Cannot do page2.pl\n";
&subReadPostedValues;

&subPrintClosedPage2;

exit(0);


