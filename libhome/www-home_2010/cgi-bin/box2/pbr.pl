#!/usr/local/bin/perl5.00503 -w

#pbr.pl
#pass by ref

@theA = ("A", "B", 100, 0);

print "BEGIN  name=$theA[0] color=$theA[1]  number=$theA[2] index=$theA[3]\n";

@theA = &subINIT(\@theA);
print "after Init  name=$theA[0] color=$theA[1]  number=$theA[2] index=$theA[3]\n";


for ($i=0;$i<4;$i++) {
@theA=&subFUNC(\@theA);
print "\n";
print "FOR    name=$theA[0] color=$theA[1]  number=$theA[2] index=$theA[3]\n";

}
print "end pbr.pl\n"; 

exit(0);

sub subINIT {

@thisA=$_[0];
$thisA_[0]="John";
$thisA_[1]="blue";
$thisA_[2]=200;
$thisA_[3]=0;

return(@thisA);
}

sub subFUNC {

@color = ("red", "green", "yellow", "white");

@thisA=$_[0];
$index=$thisA[3];
$sum=$thisA[2];


$thisA[0]="John";
$thisA[1]=$color[$index];
$thisA[2]=$sum+11;
$thisA[3]=$index+1;

print "SUB   name=$thisA[0] color=$thisA[1]  number=$thisA[2] index=$thisA[3]\n";
return(@thisA);
}
