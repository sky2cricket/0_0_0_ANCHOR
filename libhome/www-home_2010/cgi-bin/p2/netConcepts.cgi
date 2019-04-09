#!/usr/local/bin/perl5 -w
#netConcepts.cgi
#by Cricket! Haygood Deane, summer 98 
use CGI qw(:standard);

my $NetscapeHostChoice = param("NetscapeHost");


print header, start_html("Network Concepts I"), 
h1("Network Concepts I <br> Internet Browser Host Name"),hr,hr,hr,hr;
if($NetscapeHostChoice) {
  print p("Your Internet Browser Host Name is $NetscapeHostChoice.");
} else {
  print start_form;
  $NetscapeHostChoice=`hostname`;
  print p,h3("Your Internet Browser host is: ", 
  textfield("NetscapeHost",$NetscapeHostChoice));
  print end_form;
}
print hr,hr,hr,hr;
end_html;


