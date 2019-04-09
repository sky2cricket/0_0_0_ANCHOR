#!/usr/local/bn/perl5.00503 -w


#### ! /usr/local/bin/perl5.00503 -w
#### ! /usr/local/bin/perl -w

print "Content-type: text/html\n\n";


#process.pl
#from readPost.pl
#program to parse posted data

#=========================================================================
#read STDIN once
#$postedLen and $postedInput are global values
#call by: &subReadPostedValues;
sub subReadPostedValues {
$postedLen=read(STDIN,$postedInput,200);
}


#=========================================================================
#extract $theValue from $postedInput
#theName must correspond to the postedName in name/value pair on form
#the return value will correspond to the postedValue in name/value pair on form  
#call by:  $theValue=&subGetPostedValue("theName");
#in the subroutine, theName is referenced by $_[0]; 
sub subGetPostedValue{

$i0=index($postedInput,$_[0]);    #index of first char of theName in $postedInput;
if ($i0 < 0) {return (""); }	  #in case theName is not there 
$i1=index($postedInput,"=",$i0);  #index of first "=" after $i0;
$i2=index($postedInput,"&",$i1);  #index of first "&" after $i1;
if ($i2 < 0){$i2=$postedLen;}     #take care of last value with no trailing "&" 
$iV=$i1+1;                        #index of first char in postedValue substring; 
$iLEN=$i2-$iV;                    #number of chars in the postedValue substring;
$theValue=substr($postedInput,$iV,$iLEN);
return($theValue);
}

#====================================================================
#open and lock the lockfile
#call with &sub_START_LOCK_FILE($lockfile);
#here use &sub_START_LOCK_FILE("../../../../htdocs/.pub/SUGpub/theLockFile");
#$pubDir="/www/cdeane/htdocs/.pub/SUGpub";
#$lockfile="$pubDir/theLockFile";

sub sub_START_LOCK_FILE {
 $fileLock = $_[0];      ##maps to FILE_L
 $LOCK_EX = 2;           ##exclusive lock  
 open(FILE_L,"<$fileLock") || die "Can't open LOCK file for reading\n";
 flock(FILE_L,$LOCK_EX);
 ##print FILE_L "This is the lockfile\n";
 return(1);#$LockState=1
}

#====================================================================
#when you are done, unlock and close the lockfile
#call with  &sub_END_LOCK_FILE($lockfile);
#here use &sub_END_LOCK_FILE("../../../../htdocs/.pub/theLockFile");

sub sub_END_LOCK_FILE {
 $fileLock = $_[0];      ##maps to FILE_L
 $LOCK_UN = 8;           ##polite folks always unlock 
 flock(FILE_L,$LOCK_UN);
 close FILE_L;
 return(0); #$LockState=0;

}


sub subParseRobot2 {
#call with $strM3=&subParseRobot($strMessage);
#you return a string with plusses substituted for whitespace 

$strM3 =$_[0];

#DO NOTget rid of plusses in $strM3 message strings
#$strM3=$strMessage;
#$strM3=~ s/\+/_/g;

#get rid of ENDLINE by changing to BBBRRR
#Do first part here, Second part after 
#fixing the < and > characters
#ENDLINE %250D%250A
$strM3=~ s/\%0D/BBB/g;
$strM3=~ s/\%0A/RRR/g;


#fix quotes

$strM3=~ s/\%21/\!/g;
$strM3=~ s/\%22/\"/g;
$strM3=~ s/\%23/\#/g;
$strM3=~ s/\%24/\$/g;
$strM3=~ s/\%26/\&/g;
$strM3=~ s/\%27/\'/g;
$strM3=~ s/\%28/\(/g;
$strM3=~ s/\%29/\)/g;
########### %2B is the PLUS sign, do at end
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


######make  BR tags from BBBRRR 
#This is the second part
$strM3=~ s/BBBRRR/\<BR\>/g;



######make + signs portable
$strM3=~ s/\%2B/___PLUS___/g;

######PERCENT MUST BE LAST
$strM3=~ s/\%25/\%/g;


#########ADD THREE FINISHING OPERATONS
#########FOR SUGGESTIONBOX
$strM3=~ s/\+/ /g;
$strM3=~ s/___PLUS___/\+/g;
$strM3=~ s/\<BR\>#/\\n/g;


return($strM3);

}




#====================================================================
#======subDeleteLinesWithMatch 
#======called by:
#======&subDeleteLinesWithMatch($strproto,$qfile);
#======This is an atomic operation done inside of locks

sub subDeleteLineWithMatch {

$strproto=$_[0];
$qfile   =$_[1];


#pubdir for Suggestion Box
#this directory must have world write permission
$pubDir="/www/cdeane/htdocs/.pub/SUGpub";
$temp="$pubDir/QlistTemp.html";
$temp2="$pubDir/QlistTemp2.html"; #a short file with just the header

#read Qlist.html, copy all non match lines to QlistTemp.html
open(FILE_IN,"<$qfile") || die " Can't open qfile for reading\n"; 
open(FILE_OUT,">$temp")|| die " Can't open TEMP  for writing\n"; 
while (<FILE_IN>) {
if ( (m /$strproto/ ) ==  0)  { print FILE_OUT; }
}
close (FILE_OUT); close (FILE_IN);

#copy the updated list from QlistTemp.html to Qlist.html
open(FILE_OUT,">$qfile") || die " Can't open qfile for writing\n"; 
open(FILE_IN,"<$temp")|| die " Can't open TEMP  for reading\n"; 

while (<FILE_IN>) { print FILE_OUT; }
close (FILE_OUT); close (FILE_IN);

#get rid of big tempfile by replacing with QlistTemp.txt
open(FILE_IN,"<$temp2") || die " Can't open temp2 for reading\n"; 
open(FILE_OUT,">$temp")|| die " Can't open TEMP  for writing\n"; 

while (<FILE_IN>) { print FILE_OUT; }
close (FILE_IN);    close (FILE_OUT);

return;
}

#=========================================================================
#delete a file if it exists, return 1
#if the file does not exist, return 0
#callwith N=&subDetectAndDelete("filename");

sub subDetectAndDelete {

$targetFile=$_[0];

open(F, "<$targetFile") || return(0);
close(F);

$COMMAND="rm -f $targetFile";
system($COMMAND);

return(1);
}


#=========================================================================
#if the file exists, return 1
#if the file does not exist, return 0
#callwith $Result=&subDetectFile("filename");
sub subDetectFile {

$targetFile=$_[0];

open(F, "<$targetFile") || return(0);
close(F);

return(1);
}

#THE END

