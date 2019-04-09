#!/usr/local/bin/perl5.00503 -w


#parser.pl

 $innFile = $ARGV[0];      ##maps to FILE_N
 $outFile = $ARGV[1];

 $refStr="..\/..\/";
 $refDir="\"http://www.ntown.net/ntown/html";


 $dot=".";
 $slash="\/";
 $quote="\"";

 $refStr="$quote$dot$dot$slash$dot$dot";


 #$refStr="dog";
 #$refDir="cat";

 print "refStr=$refStr   refDir=$refDir\n"; 


 open(FILE_INN,"<$innFile") || die "Can't open $innFile file for reading\n";
 open(FILE_OUT,">$outFile") || die "Can't open $outFile file for reading\n";

 while (<FILE_INN>) {

 #chop;
 # 	$thisline= split/\\n/;
	$thisline=$_;
	print "Athisline= $thisline";

	s /$refStr/$refDir/g;
	$thisline=$_;
	print "Bthisline= $thisline";

	print FILE_OUT "$thisline";

        }

 close(FILE_INN);
 close(FILE_OUT);
 
 exit(0);

#testINN================================
#This is a dog. 
#<form name="form1" >
#<table width="520" border="0" cellspacing="0" cellpadding="0">
#<tr>
#<td width="142"><img src="../../images/spacer.gif" width="142" height="1"></td>
#<td width="233"><img src="../../images_grad/nhonor1.gif" width="235" height="45"></td>
#<td width="143"><img src="../../images/spacer.gif" width="143" height="1"></td>
#</tr>

#testOUT===============================
#This is a dog. 
#<form name="form1" >
#<table width="520" border="0" cellspacing="0" cellpadding="0">
#<tr>
#<td width="142"><img src="http://www.ntown.net/ntown/html/images/spacer.gif" width="142" height="1"http://www.ntown.net/ntown/html>
#<td width="233"><img src="http://www.ntown.net/ntown/html/images_grad/nhonor1.gif" width="235" height="45"http://www.ntown.net/ntown/html>
#<td width="143"><img src="http://www.ntown.net/ntown/html/images/spacer.gif" width="143" height="1"http://www.ntown.net/ntown/html>
#</tr>
