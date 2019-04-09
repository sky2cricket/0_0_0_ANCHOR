#!/usr/local/bin/perl
push(@INC, "/a/kenner/green/homes/bdeane/www-home/cgi-bin");
require("cgi-lib.pl");

&ReadParse(*input);
open($PRICE_FILE, "cost.txt");
while (<$PRICE_FILE>)
{
 chop;
 ($item, $price) = split(/:/,$_,2);
 $price_list{$item} = $price; 
}

# select and price the computer
if ($input{'CPU'} eq "S333")
{
 $computer_name = "Septium 333";
}
elsif ($input{'CPU'} eq "S250")
{
 $computer_name = "Septium 250";
}
elsif ($input{'CPU'} eq "S200")
{
 $computer_name = "Septium 200";
}
$price = $price_list{$input{'CPU'}};

# all computers have the same cache
$cache = "1024 cache";

# select and price memory
if ($input{'Memory'} eq "96MEG")
{
 $memory = "96 MEG";
}
elsif ($input{'Memory'} eq "64MEG")
{
 $memory = "64 MEG";
}
elsif ($input{'Memory'} eq "32MEG")
{
 $memory = "32 MEG"; 
}
$price += $price_list{$input{'Memory'}}; 

# select and price hard disk
if ($input{'Disk'} eq "3.6GIGIDE")
{
 $disk = "3.6 GIG IDE";
}
elsif ($input{'Disk'} eq "2.4GIGIDE")
  {
 $disk = "2.4 GIG IDE";
}
elsif ($input{'Disk'} eq "1.2GIGIDE")
{
 $disk = "1.2 GIG IDE";
}
$price += $price_list{$input{'Disk'}};

# select and price video card
if ($input{'Video'} eq "8MEG")
{
 $video = "8 MEG PCI SVGA Video Card";
}
elsif ($input{'Video'} eq "6MEG")
{
 $video = "6 MEG PCI SVGA Video Card";
}
elsif ($input{'Video'} eq "4MEG")
{
 $video = "4 MEG PCI SVGA Video Card";
}
$price += $price_list{$input{'Video Card'}};

# select and price monitor
if ($input{'Monitor'} eq "24 INCH")
{
 $monitor = "24 Inch NIL SVGA Monitor"; 
}
elsif ($input{'Monitor'} eq "21 INCH")
{
 $monitor = "21 Inch NIL SVGA Monitor";
}
elsif ($input{'Monitor'} eq "19 INCH")
{
 $monitor = "19 Inch NIL SVGA Monitor";
}
$price += $price_list{$input{'Monitor'}};

# select and price CD-ROM
if ($input{'CD-ROM'} eq "8X CDROM")
{
 $cd = "8X CD-ROM MultiMedia System";
}
elsif ($input{'CD ROM'} eq "4X CDROM")
{
 $cd = "4X CD-ROM MultiMedia System";
}
elsif ($input{'CD ROM'} eq "CDNONE")
{
 $cd = "No MultiMedia System Selected";
}
$price += $price_list{$input{'CD-ROM'}};

# select and price modem 
if ($input{'Modem'} eq "44.4 MODEM")
{
 $modem = "44.4 MODEM";
}
elsif ($input{'Modem'} eq "36.6 MODEM")
{
 $modem = "36.6 MODEM";
  }
elsif ($input{'Modem'} eq "MODEMNONE")
{
 $modem = "No Modem Selected";
}
$price += $price_list{$input{'Modem'}};

print &PrintHeader;
print<<"print_tag";
<HTML>
<HEAD>
<TITLE>
CGI FORM ANSWER
</TITLE>
</HEAD>

<BODY BACKGROUND="clouds.jpg" TEXT="000000">
<CENTER>
<H1>
<BR>
<EM>
FLY-BY-NIGHT COMPUTER COMPANY, INC.
<HR SIZE=5 WIDTH=395 NOSHADE>
</H1>
<BR>
<BR>
<BR>
<TABLE BORDER=25>
<TH COLSPAN=2 ALIGN=CENTER>
<H1>
<BR>
${computer_name} for only \$$price
</H1>
<TR>
<TD>

<UL>
<BR>
<LI>$cache
<LI>$memory
<LI>$disk
<LI>$video
<LI>Enhanced IDE In/Out Controller
<LI>$monitor
<LI>$cd
<LI>$modem
</UL>

<TR>
<TD COLSPAN=2>
<H3>
<BR>
LIFETIME WARRANTY! (excludes parts, labor, shipping)
</H3>
<TR>
</TABLE>
</CENTER>

</BODY>
</HTML>
print_tag
