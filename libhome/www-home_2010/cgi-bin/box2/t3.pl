#!/usr/local/bin/perl5.00503 -w
#t3.pl

@A=("name",100,"color","DANA");
print "\n BEGIN         "; for($i=0;$i<4;$i++) { print "  $A[$i]"; }

for ($j=0;$j<3;$j++) {
@A = &subFix (\@A,$j,"DANA","GREY");
print "\n FORa j=$j --- "; for($i=0;$i<5;$i++) { print "  $A[$i]"; }
}
print "\n end \n"; exit(0);

sub subFix {

@name = ("Alice","Sarah","Nikki");
@color= ("green","red","yellow");

@B=$_[0]; $N=$_[1];

$B[0]=$name[$N];
$B[1]=100+$N;
$B[2]=$color[$N];
$B[3]=$_[2];
$B[4]=$_[3];

@C=@B;
print "\n SUBc N=$N --- ";
for($i=0;$i<5;$i++) { print "  $C[$i]"; }
return(@B);
}


