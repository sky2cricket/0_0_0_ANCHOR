#!/usr/local/bin/perl -w
#Howdy_program.cgi
#by Cricket! Haygood Deane, summer 98 
#This program adapted from Howdy program page 184 of Learning Perl
#by Schwartz and Christiansen, O'Reilly.

print <<END_of_Multiline_Text;
Content-Type: text/html

<html>
<head>
<title>Howdy_Program</title>
</head>
<body bgcolor="aaffff" text="000090">
<body bgcolor="f00000" text="afffff">
<h1>Howdy!</h1>
<hr>
<h3>
<p>
This is the first cgi program example.
It is adapted from page 184 of "Learning Perl, 2nd Edition" 
by Schwartz and Christiansen, O'Reilley Publications.
<p>
<hr>
<p>
This file is named Howdy_Program.cgi and is located in the cgi-bin directory. 
<br>The filename "Howdy_Program" without .cgi extension does not work.
<p>
<hr>
</body>
</html>

END_of_Multiline_Text
