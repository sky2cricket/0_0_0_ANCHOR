#!/usr/local/bn/perl5.00503 -w
#mysysread.pl

$tbf="T948731466.html";
$TBF ="SAMPLE_INPUT/$tbf";
open(FILE_TBF,"<$TBF") || die "1a. Can't open TBF file for reading\n";

sysread FILE_TBF,$buff,200;
close (FILE_TBF);
print "\$buff: $buff";

$pat="  ";
@A= split /$pat/,$buff;
for ($i=0;$i<6;$i++) {
print "\n \$A[$i]=$A[$i]"; 
}
print "\n end mysysread.pl \n";
exit(0);

