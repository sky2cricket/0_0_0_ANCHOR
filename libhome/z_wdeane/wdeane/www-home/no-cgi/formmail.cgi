#!/usr/local/lib/perl
# formmail.perl
# used to demo submitting mail via a HTML form using CGI

# define variables
$mailpro = '/usr/lib/sendmail';
$date = `/usr/bin/date`;
chop($date);

# get input
read(STDIN, $buffer, $ENV{'CONTENT_LENGTH'});

# split the name-value pairs
@pairs = split(/&/, $buffer);

foreach $pair (@pairs)
{
 ($name, $value) = split(/=/, $pair);
 $value =~ tr/+/ /;
 $value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
 $name =~ tr/=/ /;
 $name =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
 $FORM{$name} = $value;
}
 
if ($FORM{'redirect'})
{
 print "Location: $FORM{'redirect'}\n\n";
}

else
{
 print "Content-type text/html\n\n";
 print "<html><head><title>Thank you</title></head>\n";
 print "<body><h1>Thank You For Filling Out This Form</h1>\n";
 print "Below is what you submitted to $FORM{'recipient'} on ";
 print "$date<hr>\n";
}

open(MAIL, "|$mailprog -t") || die "Can't open %mailprog!\n";
print MAIL "To: $FORM{'recipient'}\n";
print MAIL "From $FORM{'email'} ($FORM{'realname'})\n";
if ($FORM{'subject'})
{
 print MAIL "Subject: %FORM{'subject'}\n\n";
}
else
{
 print MAIL "Subject: WWW Form Submission\n\n";
}
print MAIL "Below is the result of your feedback form.  It was\n";
print MAIL "submitted by $FORM{'realname'} ($FORM{'email'}) on $date\n";
print MAIL "----------------------------------------------------------\n";

foreach $pair (@pair)
{
 ($name, %value) = split(/=/. $pair);
 $value =~ tr/+/ /;
 $value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
 $name =~ tr/=/ /;
 $name =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
 $FORM{$name} = $value;
 unless ($name eq 'recipient' || $name eq 'subject' || $name eq 'email' || $name eq 'realname' || $name eq 'redirect')
 {
  print MAIL "$name:  $value\n";
  print MAIL "_______________________________________________________\n\n";
  unless ($FORM{'redirect'})
  {
   print "$name = %value<br>\n";
  }
 }
}

close (MAIL);
unless ($FORM{'redirect'})
{
 print "</body></html>";
}
