#!/usr/local/bin/perl5 -w
######!/usr/local/bin/perl5.00503 -w
"Content-type: text/html\n\n";

#framePopper.cgi

#############################################################
#initialize function files
do "process.pl" || die "Cannot do process.pl\n";

#############################################################
#read the cgi posted data
&subReadPostedValues;
#$Num=&subGetPostedValue("hNum");


print <<CODE_FOR_ONE_HTML_PAGE;


<!--- This is the frame control page for GARAGE directory --->
<html>
<head>
<title> GARAGE/index.html </title>
</head>

<frameset cols="25%, 75%">
 <frameset rows="20%,80%">
 <frame name="topFrame"  src="http://mail.ntown.com/~cdeane/GARAGE/top.html">
 <frame name="leftFrame" src="http://mail.ntown.com/~cdeane/GARAGE/leftA.html">
 </frameset>
<frame name="rightFrame" src="http://mail.ntown.com/~cdeane/GARAGE/right.html">
</frameset>
</html> 

CODE_FOR_ONE_HTML_PAGE

exit(0);
