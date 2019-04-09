
#!/usr/local/bn/perl5.00503 -w

#mycmp.pl

$A = "this";
$B = "thisStr";
$C = "that";
$D = "this";

$N = ($A cmp $B);
print " (\$A cmp \$B) == $N \n";
$N = ($A cmp $C);
print " (\$A cmp \$C) == $N \n";
$N = ($A cmp $D);
print " (\$A cmp \$D) == $N \n";

exit (0);
