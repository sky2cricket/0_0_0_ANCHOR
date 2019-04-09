#!/usr/local/bin/perl5.00503 -w

#t2.pl


@A=("name",100,"color","DANA");

print "\n";
for($i=0;$i<4;$i++) { print "  $A[$i]"; }

for ($j=0;$j<3;$j++) {
@A = &subFix (\@A,$j,"DANA","GREY");
print "\n FORa j=$j --- ";
for($i=0;$i<5;$i++) { print "  $A[$i]"; }
}

print "\n end \n";
exit(0);

sub subFix {

@name = ("Alice","Sarah","Nikki");
@color= ("green","red","yellow");

@B=$_[0];
$N=$_[1];


#print "\n\n SUBx N=$N --- ";
#for($i=0;$i<5;$i++) { print "  $_[$i]"; }

#print "\n\n  SUBb N=$N --- ";
#for($i=0;$i<5;$i++) { print "  $B[$i]"; }

$B[0]=$name[$N];
$B[1]=100+$N;
$B[2]=$color[$N];
$B[3]=$_[2];
$B[4]=$_[3];

@C=@B;
print "\n SUBc N=$N --- ";
for($i=0;$i<5;$i++) { print "  $C[$i]"; }

print "\n SUB_ N=$N --- ";
 print "\n \$_[0][0] =  $_[0][0]"; 
 print "\n \$_[0][1] =  $_[0][1]"; 
 print "\n \$_[0][2] =  $_[0][2]"; 
 print "\n \$_[0][3] =  $_[0][3]"; 
 print "\n \$_[0][4] =  $_[0][4]"; 
 print "\n \$_[1] =  $_[1]"; 
 print "\n \$_[2] =  $_[2]"; 
 print "\n \$_[3] =  $_[3]"; 
 print "\n \$_[4] =  $_[4]"; 

return(@B);
}


