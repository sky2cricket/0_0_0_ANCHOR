#!/usr/bin/perl

# /www/aimtest/cgi-bin/parese.cgi

# Synopsis: to generate a list of possible references to a top-level window within
# a web browser using javascript and then eliminate those that don't make sense 
# and send the rest to the browser as links back to this file which when submitted
# to with a window reference will generate a web page with javascript designed to
# bust out of frames.

# First generate the list of possible top-level window references using the four
# basic window aliases: top, parent, window, and self.  With these four references
# there are 64 possible unique combination that do no involve repitition of any one
# of the aliases wihthin the same pattern.  Of these 64 there are 46 that reference
# the top-level window.  Let the four aliases be known as lexicons, or lex for short.
# The patterns to be considered are composed of the lexicons seperated by a period.
# There are 4 unique patterns 1 lex long (1/4).  There are 12 unique patterns 2 lex long 
# (1/4.1/3 = 1/12).  There are 24 unique patterns 3 lex long (1/4.1/3.1/2 = 1/24)  There
# are 24 unique patterns 4 lex long (1/4.1/3.1/2.1/1 = 1/24).  Of these the number that
# reference the top level window are 1-1 lex long, 3-2 lex long, 18-3 lex long, and 24-4
# lex long.  This gives 46 that reference the top-level window.  To generate the list
# define the four lexicons and then create an array of all possible unique non-self-
# repititive patterns using nested four loops. Four nested fo loops should provide
# the necessary patterns.

# Print html headers, do this early so errors will show up on page

print "Content-type:text/html\n\n";

# Setup requires and such

require "/www/aimtest/cgi-bin/atd.lib";

# Parse and name all data submitted to this script

&parse_and_name;

$window_reference=~s/\._//;

# Define the lexicons in array fashion.

@lex = ("top",
	"parent",
	"window",
	"self",
	);

# Initialize the array that holds all possible references

@patterns = 	(
		); 


# Outer for loop defines 1 lex length patterns

foreach $lone (0..$#lex){
	$patterns[$#patterns+1] = $lex[$lone];
	# Second level loop defines 2 lex length patterns
	foreach $ltwo (0..$#lex){
		if ($lex[$ltwo] ne $lex[$lone]){
			$patterns[$#patterns+1] = $lex[$lone] . "." . $lex[$ltwo];
		}
#		print "1:$lex[$lone]\n2:$lex[$ltwo]\n";
		# Third level loop defines 3 lex length patterns
		foreach $lthree (0..$#lex){
			if ( ($lex[$lthree] ne $lex[$ltwo]) && ($lex[$lthree] ne $lex[$lone]) && ($lex[$ltwo] ne $lex[$lone]) ){
				$patterns[$#patterns+1] = $lex[$lone] . "." . $lex[$ltwo] . "." . $lex[$lthree];
			}
			# Fourth level loop defines 4 lex length patterns
			foreach $lfour (0..$#lex){
				if ( ($lex[$lfour] ne $lex[$lthree]) && ($lex[$lfour] ne $lex[$ltwo]) && ($lex[$lfour] ne $lex[$lone]) && ($lex[$lthree] ne $lex[$ltwo]) && ($lex[$lthree] ne $lex[$lone]) && ($lex[$ltwo] ne $lex[$lone]) ){
					$patterns[$#patterns+1] = $lex[$lone] . "." . $lex[$ltwo] . "." . $lex[$lthree] . "." . $lex[$lfour];
				}
			} # end of loop four
		} # end of loop three
	} # end of loop two
} # end of loop one

# Initialize array to hold top-level window references only

@tops = 	(
		);

# Generate array of top-level window access only based on all possibilities

foreach $i (0..$#patterns){
	if ($patterns[$i]=~/^.*top.*$/){
		$tops[$#tops+1]=$patterns[$i];
	}
}

# Now that I have the top-level window references alphabatize them

foreach $i (0..$#tops){
	foreach $ii (0..$#tops){
		if ($tops[$ii] gt $tops[$i]){
			$temp=$tops[$i];
			$tops[$i]=$tops[$ii];
			$tops[$ii]=$temp;
		}
	}
}

$topnum=$#tops+1;
			

# There are two run conditions of this script, one involvles request without
# submission in which case a web page is generated containing links that
# will submit to this script.  When this script is submitted with a value for
# window_reference then generate a web-page containing javascript code to bust
# frames along with the links previously shown with the link reviously followed
# on the last page 'highlighted' in some way.

print<<WEB_PAGE;
<HTML>
<HEAD>
<TITLE>Javascript Frame Busting</TITLE>
WEB_PAGE

#$window_reference=1;
if ($window_reference){

print<<WEB_PAGE;
<SCRIPT LANGUAGE=JAVASCRIPT>

if ( ($window_reference.location!=self.location) && ($window_reference!=self) ){
        $window_reference.location=self.location;
}
</SCRIPT>
</HEAD>
<BODY>
<H2>$window_reference</H2>
Current Code:
<HR>
<PRE>
if ( ($window_reference.location!=self.location) && ($window_reference!=self) ){
        $window_reference.location=self.location;
}
 
</PRE>
<HR>

WEB_PAGE
} else {

print<<WEB_PAGE;
</HEAD>
<BODY>
<H2>Top-Level Window References</H2>
WEB_PAGE
}

print<<WEB_PAGE;
<PRE>
The links below show the unique non-self-repititive patterns that involve the four
window aliases (top, parent, window, self) that reference the top-level window of
the browser. Total number of top-level window references $topnum.
</PRE>

<TABLE BORDER=1 CELLSPACING=3 CELLPADDING=3>
<TH>Window Refernce</TH>
<TH>WIndow Location Refernce</TH>
<TH>Link to generate Javascript</TH>

WEB_PAGE

#print "$#tops\n";
foreach $i (0..$#tops){
if ($window_reference eq $tops[$i]){
	$bgcolor="BGCOLOR='#ffffcc'";
} else {
	$bgcolor ="";
}
print<<WEB_PAGE;
<TR>
<TD ALIGN=LEFT $bgcolor>
$tops[$i]
</TD>
<TD ALIGN=LEFT $bgcolor>
$tops[$i].location
</TD>
<TD ALIGN=LEFT $bgcolor>
<A HREF="http://aimtest.ntown.com/cgi-bin/parse.cgi?window_reference=$tops[$i]">$tops[$i]</A>
</TD>
</TR>

WEB_PAGE
sleep 0.5;
}

print<<WEB_PAGE;
</TABLE>
<BR>
<HR>
<TABLE>
<TR>
<TD ALIGN=CENTER>
Questions or comments?  Send email to <A HREF="mailto:adougherty\@ntown.com">adougherty\@ntown.com</A>
</TD>
</TR>
</TABLE>

</BODY>
</HTML>
WEB_PAGE

exit(0);
