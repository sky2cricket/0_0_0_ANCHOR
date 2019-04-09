#!/usr/local/bin/perl5

#colorbox.cgi by cricket


do "readPost.pl" || die "Cannot do readPost.pl\n";
&subReadPostedValues;

#do "cgi-lib.pl" || die "Cannot do cgi-lib.pl\n";
#&ReadParse;


$BGcolor=&subGetPostedValue("hBGcolor");
$TXcolor=&subGetPostedValue("hTXcolor");
$randColor=&subGetRandHexStr();

$BGcolor=&subCheckForBad($BGcolor); 
$TXcolor=&subCheckForBad($TXcolor); 

print<<THISPAGE; 
<HTML><BODY BGCOLOR="$BGcolor" TEXT="$TXcolor"> 
<center>
<table>
<tr><td>
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2">
<p>
<table border=0 bgcolor="$BGcolor">
<tr><td>
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2">
<form NAME="FORM3a" METHOD=POST ACTION="colorbox.cgi">
<INPUT TYPE=SUBMIT VALUE="WHITE  BG"
style="width:105px;height:20px; font-size:9pt; font-face=arial">
<INPUT TYPE=HIDDEN NAME="hBGcolor" VALUE="ffffff" >
<INPUT TYPE=HIDDEN NAME="hTXcolor" VALUE=$TXcolor>
</form>
</td></tr>
<tr><td>
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2">
<form NAME="FORM4b" METHOD=POST ACTION="colorbox.cgi">
<INPUT TYPE=SUBMIT VALUE="BLACK BG"
style="width:105px;height:20px; font-size:9pt; font-face=arial">
<INPUT TYPE=HIDDEN NAME="hBGcolor" VALUE="000000">
<INPUT TYPE=HIDDEN NAME="hTXcolor" VALUE=$TXcolor >
</form>
</td></tr>
<tr><td>
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2">
<form NAME="FORM3" METHOD=POST ACTION="colorbox.cgi">
<INPUT TYPE=SUBMIT VALUE="RANDOM BG"
style="width:105px;height:20px; font-size:9pt; font-face=arial">
<INPUT TYPE=HIDDEN NAME="hBGcolor" VALUE="$randColor" >
<INPUT TYPE=HIDDEN NAME="hTXcolor" VALUE=$TXcolor>
</form>
</td></tr>
<tr><td>
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2">
<form NAME="FORM4" METHOD=POST ACTION="colorbox.cgi">
<INPUT TYPE=SUBMIT VALUE="RANDOM  TX"
style="width:105px;height:20px; font-size:9pt; font-face=arial">
<INPUT TYPE=HIDDEN NAME="hBGcolor" VALUE=$BGcolor>
<INPUT TYPE=HIDDEN NAME="hTXcolor" VALUE="$randColor" >
</form>
</td></tr>
<tr><td>
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2">
<form NAME="FORM3b" METHOD=POST ACTION="colorbox.cgi">
<INPUT TYPE=SUBMIT VALUE="WHITE  TX"
style="width:105px;height:20px; font-size:9pt; font-face=arial">
<INPUT TYPE=HIDDEN NAME="hBGcolor" VALUE=$BGcolor >
<INPUT TYPE=HIDDEN NAME="hTXcolor" VALUE="ffffff">
</form>
</td></tr>
<tr><td>
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2">
<form NAME="FORM4a" METHOD=POST ACTION="colorbox.cgi">
<INPUT TYPE=SUBMIT VALUE="BLACK TX"
style="width:105px;height:20px; font-size:9pt; font-face=arial">
<INPUT TYPE=HIDDEN NAME="hBGcolor" VALUE=$BGcolor>
<INPUT TYPE=HIDDEN NAME="hTXcolor" VALUE="000000" >
</form>
</td></tr></table>
</td><td>
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2">
<h3> Colorbox by Cricket Haygood Deane</h3> 
RR-GG-BB values must contain 6 hexadecimal symbols.
<br>[01234567689abcdefABCDEF] 

<form NAME="FORM1" METHOD=POST ACTION="colorbox.cgi">
<table border=0 cellspacing=0>
<tr>
<td bgcolor="ffffff"> 
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2" color="000000">
Current Background color:  $BGcolor </td>
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2" color="000000">
<td bgcolor="ffffff"> 
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2" color="000000">
Current Text color: $TXcolor </td>
</tr> <tr>
<td bgcolor="ffffff"> 
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2" color="000000">
New Background color:
<Input Type=TEXT NAME="hBGcolor" VALUE="$BGcolor" size=6 maxlength=6></td>
<td bgcolor="ffffff"> 
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2" color="000000">
New Text color:
<Input Type=TEXT NAME="hTXcolor" VALUE="$TXcolor" size=6 maxlength=6> </td>
</tr>
<tr><td bgcolor=$BGcolor>&nbsp;</td><td bgcolor=$BGcolor>&nbsp</td></tr>
<tr><td bgcolor=$BGcolor>
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2" color="000000">
<INPUT TYPE=SUBMIT VALUE="ENTER NEW COLORS"
style="width:145px;height:20px; font-size:9pt; font-face=arial"> </form> 
</td><td bgcolor=$BGcolor>
<font face="Verdana, Arial, Helvetica, sans-serif" size="-2" color="000000">
<form NAME="FORM2" METHOD=POST ACTION="colorbox.cgi">
<INPUT TYPE=SUBMIT VALUE=" SWAP THE COLORS  "
style="width:145px;height:20px; font-size:9pt; font-face=arial">

<INPUT TYPE=HIDDEN NAME="hBGcolor" VALUE=$TXcolor>
<INPUT TYPE=HIDDEN NAME="hTXcolor" VALUE=$BGcolor>
</form>
</td></tr></table>
</td></tr></table>
</body></html>
THISPAGE

exit(0);




#====GET=RANDOM=HEX=STR===============
#$hStr=&subGetRandHexStr();
#print " hStr: $hStr\n";

sub subGetRandHexStr {
$MAX=256;
$R1=int(rand $MAX);
$R2=int(rand $MAX);
$R3=int(rand $MAX);

$T=time%1000;
$R1 = ($R1 + $T) %256;
$R2 = ($R2 + $T) %256;
$R3 = ($R3 + $T) %256;

$hStr1=&subDec2Hex($R1);
$hStr2=&subDec2Hex($R2);
$hStr3=&subDec2Hex($R3);

$hStr="$hStr1$hStr2$hStr3";

return ($hStr);

}


sub subDec2Hex {

@hexSym=( "0","1","2","3","4","5","6","7",
          "8","9","a","b","c","d","e","f" );

$decNum0=$_[0]/16;
$decNum1=$_[0]%16;

$hexStr="$hexSym[$decNum0]$hexSym[$decNum1]";

return ($hexStr);

}


sub subCheckForBad {

$thisStr=$_[0];
@a=("0","0","0","0","0","0");

for($i=0;$i<6;$i++) {
  $a[$i]=substr($thisStr,$i,1);
  $a[$i]=~ s/[^a-fA-F0-9]/0/;
  }

$retStr="$a[0]$a[1]$a[2]$a[3]$a[4]$a[5]";
return($retStr);

#$BGcolor=~ s/[^a-fA-F0-9]/0/;
#$TXcolor=~ s/[^a-fA-F0-9]/0/;
 }
