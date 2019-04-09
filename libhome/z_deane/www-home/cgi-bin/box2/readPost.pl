#!/usr/local/bn/perl5.00503 -w


#### ! /usr/local/bin/perl5.00503 -w
#### ! /usr/local/bin/perl -w

print "Content-type: text/html\n\n";


#readPost.pl
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

#=========================================================================
#extract theURL from $theValue created by subGetPostedValue
#call by $theURL=&subGetPostedURL("theURLValue");
#need to change string #1 to string #3
#1. <a href="http%253A%252F%252Fcdeane.ntown.com%252Fimages%252Fbaby.jpg">
#2. <a href="http:    /    /    cdeane.ntown.com/    images/    baby.jpg"> 
#3. <a href="http://cdeane.ntown.com/images/baby.jpg"> 
#BABYURL2=http%3A%2F%2Fcdeane.ntown.com%2Fimages%2Fbaby.jpg 

sub subGetPostedURL {
$retURL = $_[0];
print "<p>== 1. retURL =$retURL";

#fix colon [%3A => : ]
$COLON="\:";
$retURL =~ s/\%3A/$COLON/g;
print "<p>== 2. retURL =$retURL";

#fix forward slash [%2F => / ]
$FSLASH="\/";
$retURL =~ s/\%2F/$FSLASH/g;
print "<p>== 3. retURL =$retURL";

#fix tilde [%7E => ~ ] 
$TILDE = "\&\#126\;";    #html code for tilde=&#126;
$retURL =~ s/\%7E/$TILDE/g;
print "<p>== 4. retURL =$retURL";

#remove whitespace
$retURL =~ s/ //g;
print "<p>== 5. retURL =$retURL";
 

return($retURL);
}



#====================================================================
#open and lock the lockfile
#call with $LockState=&subStartLockFile("filename");
#here use &subStartLockFile("../../../htdocs/.pub/myLockFile");

sub subStartLockFile {
 $fileLock = $_[0];      ##maps to FILE_L
 $LOCK_EX = 2;           ##exclusive lock  
 open(FILE_L,"<$fileLock") || die "Can't open LOCK file for reading\n";
 flock(FILE_L,$LOCK_EX);
 ##print FILE_L "This is the lockfile\n";
 return(1);#$LockState=1
}

#====================================================================
#when you are done, unlock and close the lockfile
#call with $LockState=&subEndLockFile("filename");
#here use &subEndLockFile("../../../htdocs/.pub/myLockFile");

sub subEndLockFile {
 $fileLock = $_[0];      ##maps to FILE_L
 $LOCK_UN = 8;           ##polite folks always unlock 
 flock(FILE_L,$LOCK_UN);
 close FILE_L;
 return(0); #$LockState=0;

}


