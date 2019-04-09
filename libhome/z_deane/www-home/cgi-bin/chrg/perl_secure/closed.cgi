#!/usr/local/bin/perl5

#closed.cgi

do "readPost.pl" || die "Cannot do readPost.pl\n";
do "page.pl" || die "Cannot do page.pl\n";
&subReadPostedValues;

&subPrintClosedPage;

exit(0);


