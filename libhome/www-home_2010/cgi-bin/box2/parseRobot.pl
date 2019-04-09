#!/usr/local/bin/perl5.00503 -w

#parseRobot.pl


sub subParseRobot {
#call with $strM3=&subParseRobot($strMessage);
#you return a string with plusses substituted for whitespace 

$strM3 =$_[0];

#DO NOTget rid of plusses in $strM3 message strings
#$strM3=$strMessage;
#$strM3=~ s/\+/_/g;

#get rid of ENDLINE by changing to BBBRRR
#ENDLINE %250D%250A
$strM3=~ s/\%0D/BBB/g;
$strM3=~ s/\%0A/RRR/g;

#make  BR tags from BBBRRR 
$strM3=~ s/BBBRRR/\<BR\>/g;

#fix quotes

$strM3=~ s/\%21/\!/g;
$strM3=~ s/\%22/\"/g;
$strM3=~ s/\%23/\#/g;
$strM3=~ s/\%24/\$/g;
$strM3=~ s/\%26/\&/g;
$strM3=~ s/\%27/\'/g;
$strM3=~ s/\%28/\(/g;
$strM3=~ s/\%29/\)/g;
$strM3=~ s/\%2C/\,/g;
$strM3=~ s/\%2F/\//g;

$strM3=~ s/\%3A/\:/g;
$strM3=~ s/\%3B/\;/g;
$strM3=~ s/\%3C/\</g;
$strM3=~ s/\%3E/\>/g;

$strM3=~ s/\%3F/\?/g;

$strM3=~ s/\%40/\@/g;

$strM3=~ s/\%5B/\[/g;
$strM3=~ s/\%5C/\\/g;
$strM3=~ s/\%5D/\]/g;
$strM3=~ s/\%5E/\^/g;

$strM3=~ s/\%60/\`/g;

$strM3=~ s/\%7B/\{/g;
$strM3=~ s/\%7C/\|/g;
$strM3=~ s/\%7D/\}/g;
$strM3=~ s/\%3D/\=/g;
$strM3=~ s/\%7E/\~/g;
$strM3=~ s/\%40/\@/g;
$strM3=~ s/\%60/\`/g;

######make + signs portable
$strM3=~ s/\%2B/___PLUS___/g;

######PERCENT MUST BE LAST
$strM3=~ s/\%25/\%/g;



return($strM3);

}







