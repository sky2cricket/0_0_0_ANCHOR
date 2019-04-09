#!/usr/local/bin/perl5.00503 -w

#mystrtest.pl

$mystr ="cricket";

$STRLEN=length($mystr);

print "before: mystr=$mystr";
for ($i=0;$i<$STRLEN;$i++) {
$alpha=substr($mystr,$i,1);
$num=ord($alpha);
print "\nmystr[$i]=$alpha  mynum[$i]=$num";
 
}
print "\nafter:  mystr=$mystr\n\n";
exit(0);

################################
#dsgy04/cricket> mystrtext.pl
#before: mystr=cricket
#mystr[0]=c  mynum[0]=99
#mystr[1]=r  mynum[1]=114
#mystr[2]=i  mynum[2]=105
#mystr[3]=c  mynum[3]=99
#mystr[4]=k  mynum[4]=107
#mystr[5]=e  mynum[5]=101
#mystr[6]=t  mynum[6]=116
#after:  mystr=cricket
