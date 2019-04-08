#!/usr/local/bin/perl

# okay, so lots of stuff to deal with re teso

    my $now = `date +"%Y-%m-%d"`; chop $now;
while (<>) {
    s,<FILEDESC>,,g;
    s,</FILEDESC>,,g;
    s,TITLESTMT>,B>,g;
    s,TITLE>,K>,g;
    s,<AUTHOR[^>]*>,<L>,g;
    s,</AUTHOR>,</L>,g;
    s,PUBLICATIONSTMT>,E>,g;
    s,PUBLISHER>,T>,g;
    s,PUBPLACE>,U>,g;
    s,<IDNO TYPE="([^"]*)">,<W A="$1">,g;
    s,IDNO>,W>,g;
    s,<IDNO[^>]*>,<W>,g;
    s,AVAILABILITY>,X>,g;
    s,DATE>,YR>,g;
    s,SERIESSTMT>,F>,g;
    s,SOURCEDESC>,H>,g;
    s,EDITOR>,M>,g;
    s,BIBL>,AB>,g;
    s,BIBLFULL>,AB>,g;
    s,EXTENT>,D>,g;
    s,<EDITION[^>]*>,<S>,g;
    s,</EDITION>,</S>,g;
    s,<EDITIONSTMT[^>]*>,<C>,g;
    s,</EDITIONSTMT>,</C>,g;
    s,<HI[^>]*>,<I>,g;
    s,</HI[^>]*>,</I>,g;
    s,<PROFILEDESC>,,g;
    s,</PROFILEDESC>,,g;
    s,TEXTCLASS>,I2>,g;
    s,<TERM[^>]*>,<AF>,g;
    s,</TERM>,</AF>,g;
    s,KEYWORDS>,KW>,g;
    s,<GUMSHEADER>,<A DT="$now">,g;
    s,</GUMSHEADER>,</A>,g;
    s,BIBLSCOPE>,AH>,g;
    s,<DATES[^>]*>,\, ,g;
    s,</DATES>,,g;
    s,NOTESSTMT>,G>,g;
    s,<NOTE[^>]*>,<AA>,g;
    s,</NOTE>,</AA>,g;
    s,<ENCODINGDESC.*</ENCODINGDESC>,,g;
    s,<ALIAS>, \[,g;
    s,</ALIAS>,\],g;
    s,<DESCRIP>, \[,g;
    s,</DESCRIP>,\],g;
    s,<FOREIGN LANG="grc">([^<]*)</FOREIGN>,<GRK>$1</GRK>,g;
    print;
}
