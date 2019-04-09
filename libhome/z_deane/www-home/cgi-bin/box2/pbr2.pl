#!/usr/local/bin/perl5.00503 -w

#pbr2.pl
#pass by ref

new theA;
@theA = { $A1, $A2, $A3, $A4};

#$theA->A1="John";
#$theA->A2="blue";
#$theA->A3=100;
#$theA->A4=0;

print "BEGIN  name=$theA->A1 color=$theA->A2  number=$theA->A3  index=$theA->A4\n";

@theA = &subINIT(\@theA);
print "INIT   name=$theA->A1 color=$theA->A2  number=$theA->A3  index=$theA->A4\n";


for ($i=0;$i<4;$i++) {
@theA=&subFUNC(@theA);
print "FOR    name=$theA->A1 color=$theA->A2  number=$theA->A3  index=$theA->A4\n";

}
print "end pbr.pl\n"; 

exit(0);

sub subINIT {

@thisA=$_[0];
$thisA->$A1="John";
$thisA->A2="blue2";
$thisA->A3=200;
$thisA->A4=0;

return(thisA);
}

sub subFUNC {

@color = ("red", "green", "yellow", "white");

@thisA=$_[0];
$index=$thisA->A4;
$sum=$thisA->A3;


$thisA->A1="John";
$thisA->A2=$color[$index];
$thisA->A3=$sum+11;
$thisA->A4=$index+1;

print "SUB    name=$thisA->A1 color=$thisA->A2  number=$thisA->A3  index=$thisA->A4\n";
return(thisA);
}
