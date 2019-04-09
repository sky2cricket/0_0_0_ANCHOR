#!/usr/local/bin/perl5.00503 -w
#"Content-type: text/html\n\n";


#FindMatch.cgi
#test of using search on Qlist.html
#input a string named $curtime and look for a match
#in each line of Qlist.html

#############################################################
#initialize function files
#do "process.pl" || die "Cannot do process.pl\n";

#############################################################
#read the cgi posted data
#&subReadPostedValues;


#############################################################
#build the file names

#html extension
$HTML=".html"; 


#grab the time -- this is for the Q$curtime.html file
#$curtime = time; ##unix non leap seconds since 1/1/1970
#$loctime = localtime($curtime);

#test value for this program
$curtime=950202234;

#Qlist -- the file you are reading, 
#put in local dir for convenience
$Qlist="Qlist$HTML";


$TEMP="t2temp";


#############################################################

open(FILE_QL,"<$Qlist") || die " Can't open Qlist for reading\n"; 
open(FILE_T,">$TEMP")   || die " Can't open TEMP  for writing\n"; 

$myCount=0;
while (<FILE_QL>) {

if ( (s /$curtime/$curtime/) !=  0) 
      { print "THE LINE ABOVE IS the line for $curtime\n"; 
        $myCount++;}
else  { print FILE_T; }

}


close (FILE_T);
close (FILE_QL);

print "myCount=$myCount\n";
print "\n the end of FindMatch.cgi\n";
exit(0);
