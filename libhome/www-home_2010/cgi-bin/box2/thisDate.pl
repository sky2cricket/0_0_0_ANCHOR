#!/usr/local/bn/perl5.00503 -w

#thisDate.pl
#program to generate date string in format
# 03/21/00  mm/dd/yy
# A date -- begin Banner
# B date -- end Banner -- set at one month later.

$curtime=time;
$Localtime=localtime($curtime);
print "Localtime =$Localtime\n";

@A=" ";
@A=localtime($curtime);

#what is in the A array -- from perl in a nutshell page 110
#($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst)=localtime($curtime);

$twoDigitYear=        substr("0$A[5]",-2);
$twoDigitDayOfMonth=  substr("0$A[3]",-2);
$A[4]++;
$twoDigitMonthOfYearA=substr("0$A[4]",-2);
$A[4]++;
$twoDigitMonthOfYearB=substr("0$A[4]",-2);

print "--twoDigitDayOfMonth=$twoDigitDayOfMonth\n";
print "--twoDigitMonthOfYear=$twoDigitMonthOfYear\n";
print "--twoDigitYear=$twoDigitYear\n";

$slash="\/";
@retStr=" ";
$retStr[0]="$twoDigitMonthOfYearA$slash$twoDigitDayOfMonth$slash$twoDigitYear";
$retStr[1]="$twoDigitMonthOfYearB$slash$twoDigitDayOfMonth$slash$twoDigitYear";

print "retStr[0]=$retStr[0]\n";
print "retStr[1]=$retStr[1]\n";

exit(0);


