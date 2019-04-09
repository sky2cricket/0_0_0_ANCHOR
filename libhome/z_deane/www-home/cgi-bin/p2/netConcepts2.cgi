#!/usr/local/bin/perl5 -w
#netConcepts2.cgi
#by Cricket! Haygood Deane, summer 98 
use CGI qw(:standard);

my $NetscapeHostChoice = param("NetscapeHost");
my $NetscapeHostNumChoice = param("NetscapeHostNum");
my $NetscapeHostDotChoice = param("NetscapeHostDot");
my $NetscapeHostEthChoice = param("NetscapeHostEth");
 
 
print header, start_html("Network Concepts II"),
h1("Network Concepts II <br>  Netscape Host Address Information"),hr,hr,hr,hr ;
           
$NetscapeHostChoice=`uname -n`;
print start_form;
print p,h4("Netscape Host name is: <br>", textfield("NetscapeHost","$NetscapeHostChoice"));
print end_form;

$NetscapeHostNumChoice=`hostid`;
print start_form;
print p,h4("Netscape Host ip address in hexadecimal format is: <br>",
textfield("NetscapeHostNum","$NetscapeHostNumChoice"));
print end_form;

open(ARPCOM2, "arp  $NetscapeHostChoice|"); 
@arpString = <ARPCOM2>;
chop(@arpString);
@arpWord = split (/[ ,\(,\)]/, $arpString[0]);
  
$NetscapeHostDotChoice=$arpWord[2];
print start_form;
print p,h4("Netscape Host ip address in dotted decimal format is: <br>",
textfield("NetscapeHostDot","$NetscapeHostDotChoice"));
print end_form;

$NetscapeHostEthChoice=$arpWord[5];                  
print start_form;
print p,h4("Netscape Host ethernet address in dotted hex format is: <br>",
textfield("NetscapeHostEth","$NetscapeHostEthChoice"));
print end_form, hr,hr,hr,hr;
end_html
