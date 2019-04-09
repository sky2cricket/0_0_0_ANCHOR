# Ahtml_list -- program to generate html files by section
#              for active web links using list of usernames from cheryl
#              input file: u.28707 
#              output file: section.28707.html
# usage:  awk -f Ahtml_list  u.28707   > section.28707.html

BEGIN {
   srcfile = ARGV[1]
   print "<html> "
   print "<body bgcolor="Q"aaeeff"Q" text="Q"000000"Q">"
   print "<hr>"
}   

{
   if(NR==1) { Q=$1; S=$2; T=$3;} 
   if(NR==2) { 
   print "<title> Student Home Pages for Section" $2 
   print  "</title>"
   print "<p>"
   print "<center>"
   print "<h1> Student Home Pages for Section" $2 
   print "</center>"
   print "</h1>"
   print "<p>"
   print "<h3>"
   print "<p>"
   }
   if(NR>2) {
   print "<A HREF=" Q "http:" S S "www.cs.utk.edu" S T $5 Q">"
   print "<IMG SRC="Q"red_bull.gif"Q"><" S "A>",$1,$3
   print "<p>"
}

}

END {
   print "<hr>"
   print "<A HREF="Q"TOP.html"Q">"
   print "<IMG SRC="Q"red_bull.gif"Q"></A> Return to CS100 Student Homepage Directory."  
   print "<p>"
   print "<A HREF="Q"http://www.cs.utk.edu/" T "cs100"Q">"
   print "<IMG SRC="Q"red_bull.gif"Q"></A> Return to CS100 Homepage."  
   print "<hr>"
   print "</html>"
}

