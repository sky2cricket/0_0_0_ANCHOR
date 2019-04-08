#!/l/local/bin/perl
#
# pfarber Thu Mar 23 14:23:07 2000
#
# Parse times data which conforms to the timesi DTD:
#
# <!DOCTYPE timesi [
# <!ELEMENT timesi - - (mh)+ >
# <!ELEMENT mh - - (mhead,rec+) +(hi) >
# <!ELEMENT mhead - - (#pcdata|g)+ >
# <!ELEMENT rec - - (k,(d190|d191|d192|d193|d194|d197|d198),e+) >
# <!ELEMENT (d190|d191|d192|d193|d194|d197|d198) - - (#pcdata) >
# <!ELEMENT k - - (#pcdata) >
# <!ELEMENT e - - (h,(h2)?,t,r) >
# 
# <!ELEMENT (h|h2) - - (#pcdata|g)+ >
# <!ELEMENT t - - (#pcdata,g?,(c|q)?)* > 
# <!ELEMENT g - - (#pcdata) > 
# <!ELEMENT (c|q) - - (#pcdata) >
# <!ELEMENT r - - ((c|q)?,(d|f)+,p,#pcdata,v?) >
# <!ELEMENT (d|f) - - (#pcdata) >
# <!ELEMENT p - - (#pcdata) >
# <!ELEMENT v - - (#pcdata) >
# 
# <!ELEMENT hi - - (#pcdata) > ]>
#
# emit the parsed data conforming to the bib DTD: /l1/lib/sgml/bib.dtd
#
# In the process, a data structure for each <rec> mirroring the
# timesi DTD is built: 
#
# %recHash = ( 'k' => pcdata. 'e' => [] )
# 
#   where e[0] = ( 'h' => pcdata stripped of <g></g>
# 		   'h2'=> pcdata stripped of <g></g>
# 		   't' => [pcdata, pcdata stripped of <g></g>, {-1-} etc. ]
#                       where -1- = ( 'c' => pcdata, possibly null
#                                     'q' => pcdata ) possibly null
# 		   'r' => () )
#

#       where r[0] = ( {-1-}, [-2-], {-3-}, pcdata, {-4-} )
#            where -1- = ( 'c' => pcdata, possibly null
# 			   'q' => pcdata ) possibly null
#            where -2-[0] = ( 'd' => pcdata, possibly null
# 			      'f' => pcdata ) possibly null
#            where -3- = ( 'p' => pcdata )
#            where -4- = ( 'v' => pcdata )

my %charEntHash;

($sec, $min, $hour, $mday, $mon, $year) = localtime(time);
my $date = $date = ($year+1900) . $mon . $mday;

# Grab the prefix of the filename arg to this program as a uniquifier
# for the ID across all files processed
my $idValPart = ( $ARGV[0] =~ m,(.+?)\..+, ? $1 : '');

my $id = 0;

$/ = "</mh>";

&InitCharEntHash;

while ($mh = <>) 
{
    my @recElementArr;
    
    #
    #--- parse <!ELEMENT mh - - (mhead,rec+) +(hi) >

    # kill <mhead> </mhead> + content -- just skip 
    # $mh =~ s,<mhead>.*?</mhead>,,s;

    # kill <g> and </g> tags
    $mh =~ s,</?g>,,sg;

    # get each <rec> saving its content
    while ($mh =~ s,<rec>(.*?)</rec>,,s)
    {
	push(@recElementArr, $&);
    }

    #--- within a <rec>
    foreach $recElement (@recElementArr)
    {
	my %recHash;
	
	# rid <rec> of all \n to make parsing easier
	$recElement =~ s,\n,,gs;

	# map char ents to corresponding character
	# This is no handled by mungeents.pl pfarber Thu Aug 17 12:04:29 2000
	# $recElement =~s,\&([A-Za-z0-9]+?);,$charEntHash{$1},g;

	# kill e.g. <d191></d191> + content
	$recElement =~ s,<d1..>.*?</d1..>,,;

	# map <hi> -> <I>, </hi> -> </I> gobally
	$recElement =~ s,<hi>,<I>,g;
	$recElement =~ s,</hi>,</I>,g;
	
	# grab content of <k>
	($recHash{'k'}) = ($recElement =~ m,<k>(.*?)</k>,);

	#--- eat each <e> and process
	$recHash{'e'} = [];
	$eCount = 0;
	while ($recElement =~ s,<e>.*?</e>,,)
	{
	    my $eElement = $&;
	    
	    # print $eElement . "\n";
	    
	    $recHash{'e'}[$eCount] = {
				 'h' => "",
				 'h2' => "",
				 't' => {},
				 'r' => {},
				};
	    
	    # the content of <h>,<h2> within this <e>
	    ($recHash{'e'}[$eCount]{'h'}) = ($eElement =~ m,<h>(.*?)</h>,);
	    ($recHash{'e'}[$eCount]{'h2'}) = ($eElement =~ m,<h2>(.*?)</h2>,);
	    
	    #--- grab the <t> element within <e>
	    my ($tElement) = ($eElement =~ m,(<t>.*?</t>),);
	    # kill <g>, </g> within <t>
	    $tElement =~ s,</?g>,,;

	    my $temp;
		
	    #--- get content of <t> by parsing (#pcdata,g?,(c|q)?)*
	    $recHash{'e'}[$eCount]{'t'}{'t_pcdata'} = "";
	    while ($tElement ne "<t></t>")
	    {
		# grab <t> content until <c>, <q> or </t> and append
		($temp) = ($tElement =~ m,<t>(.*?)<(/t|c|q)>,);
		$recHash{'e'}[$eCount]{'t'}{'t_pcdata'} .= $temp;

		# eat leading pcdata (watch out for metacharacters in $temp)
		if ( $temp ) 
		{
		    $tElement =~ s,\Q$temp,,;
		}
		
		# get content of (c|q)?
		my ( $cElement, $cElementCont ) =  ( $tElement =~ m,(<c>(.*?)</c>),);		
		$recHash{'e'}[$eCount]{'t'}{'cq_pcdata'} = $cElementCont;
		$tElement =~ s,\Q$cElement,, if $cElement;
		my ( $qElement, $qElementCont ) =  ( $tElement =~ m,(<q>(.*?)</q>),);
		$recHash{'e'}[$eCount]{'t'}{'cq_pcdata'} = $qElementCont;
		$tElement =~ s,\Q$qElement,, if $qElement;


	    }
	    
	    #--- grab the <r> element within <e>
	    my ($rElement) = ($eElement =~ m,(<r>.*?</r>),);	    
	    
	    # get content of <r> by parsing ((c|q)?,(d|f)+,p,#pcdata,v?)
	    $rElement =~ s,<r>,,;	    
	    # (c|q)?
	    ($temp) = ($rElement =~ m,<c>(.*?)</c>|<q>(.*?)</q>,);
	    ($recHash{'e'}[$eCount]{'r'}{'cq_pcdata'}) = $temp;
	    $rElement =~ s,<c>.*?</c>|<q>.*?</q>,,;	    
	    # (d|f)+ we expect no more than one <d> or <f>
	    ($temp) = ($rElement =~ m,<d>(.*?)</d>|<f>(.*?)</f>,);
	    ($recHash{'e'}[$eCount]{'r'}{'df_pcdata'}) = $temp;
	    $rElement =~ s,<d>.*?</d>|<f>.*?</f>,,;
	    # p
	    ($temp) = ($rElement =~ m,<p>(.*?)</p>,);
	    $temp = "p\. $temp";
	    ($recHash{'e'}[$eCount]{'r'}{'p_pcdata'}) = $temp;
	    $rElement =~ s,<p>.*?</p>,,;
	    # grab pcdata up until <v> or </r>
	    ($temp) = ($rElement =~ m,(.*?)<(/r|v)>,);
	    $temp = "col\. $temp";
	    ($recHash{'e'}[$eCount]{'r'}{'r_pcdata'}) = $temp;
	    $rElement =~ s,\Q$temp,,;
	    # v?
	    ($temp) = ($rElement =~ m,<v>(.*?)</v>,);
	    ($recHash{'e'}[$eCount]{'r'}{'v_pcdata'}) = " $temp";
    
	    #--- Emit the data for each <e> transformed
	    
	    # apparently either <t> has (c|q)? or <r> has (c|q)?, exclusively
	    my $cqContent = $recHash{'e'}[$eCount]{'t'}{'cq_pcdata'};
	    if (! $cqContent )
	    {
		$cqContent = $recHash{'e'}[$eCount]{'r'}{'cq_pcdata'};
	    }
	    my $tContent = $recHash{'e'}[$eCount]{'t'}{'t_pcdata'};
	    my $dContent = $recHash{'e'}[$eCount]{'r'}{'df_pcdata'};
	    my $pContent = $recHash{'e'}[$eCount]{'r'}{'p_pcdata'};
	    my $rContent = $recHash{'e'}[$eCount]{'r'}{'r_pcdata'};
	    my $vContent = $recHash{'e'}[$eCount]{'r'}{'v_pcdata'};
	    my $kContent = $recHash{'k'};
	    my $hContent = $recHash{'e'}[$eCount]{'h'}; 
	    my $h2Content = $recHash{'e'}[$eCount]{'h2'};
	    $h2Content = $h2Content ? "<AF>" . $h2Content . "</AF>" : "";
	    
	    my $idVal = "TIMES" . $idValPart . $id;
	    
	    printf(
		   qq{<A ID=\"$idVal\" DT=\"%s\">} . 
		   qq{<B><K>%s</K></B>} .
		   qq{<F><K>The Times%s</K><Z><YR>%s</YR><PG>%s, %s%s</PG></Z></F>} .
		   qq{<H><P>%s</P></H>} .
		   qq{<I2><KW A=\"Times\"><AF>%s</AF>%s</KW></I2></A>\n}, 
		   $date,      # DT attval
		   $tContent,  # K within B
		   $cqContent, # K within F
		   $dContent,  # YR
		   $pContent,  # PG
		   $rContent,  # PG following <p> content
		   $vContent,  # PG following <r> content
		   $kContent,  # P
		   $hContent,  # AF
		   $h2Content  # another AF
		  );
	    
	    $eCount += 1;
	    $id +=1;
	}
    }
}


sub InitCharEntHash {
    %charEntHash = (
                    'AElig'    =>   "&AElig;;",   'Aacgr'     =>   "&Aacgr;",    'Aacute'   => "&Aacute;",
                    'Abar'     =>   "&Abar;",     'Acirc'     =>   "&Acirc;",    'Agr'      => "&Agr;",
                    'Agrave'   =>   "&Agrave;",   'Agvgr'     =>   "&Agvgr;",    'Atigr'    => "&Atigr;",
                    'Auml'     =>   "&Auml;",     'Bgr'       =>   "&Bgr;",      'Ccedil'   => "&Ccedil;",
                    'Dgr'      =>   "&Dgr;",      'EEacgr'    =>   "&EEacgr;",   'EEgr'     => "&EEgr;",
                    'EEgvgr'   =>   "&EEgvgr;",   'EEtigr'    =>   "&EEtigr;",   'Eacgr'    => "&Eacgr;",
                    'Eacute'   =>   "&Eacute;",   'Ebreve'    =>   "&Ebreve;",   'Ecirc'    => "&Ecirc;",
                    'Egr'      =>   "&Egr;",      'Egrave'    =>   "&Egrave;",   'Egvgr'    => "&Egvgr;",
                    'Etigr'    =>   "&Etigr;",    'Euml'      =>   "&Euml;",     'Ggr'      => "&Ggr;",
                    'Iacgr'    =>   "&Iacgr;",    'Icirc'     =>   "&Icirc;",    'Igr'      => "&Igr;",
                    'Igvgr'    =>   "&Igvgr;",    'Itigr'     =>   "&Itigr;",    'Iuml'     => "&Iuml;",
                    'KHgr'     =>   "&KHgr;",     'Kgr'       =>   "&Kgr;",      'Lgr'      => "&Lgr;",
                    'Mgr'      =>   "&Mgr;",      'Ngr'       =>   "&Ngr;",      'OElig'    => "&OElig;",
                    'OHacgr'   =>   "&OHacgr;",   'OHgr'      =>   "&OHgr;",     'OHgvgr'   => "&OHgvgr;",
                    'OHtigr'   =>   "&OHtigr;",   'Oacgr'     =>   "&Oacgr;",    'Obar'     => "&Obar;",
                    'Ocirc'    =>   "&Ocirc;",    'Ogr'       =>   "&Ogr;",      'Ogvgr'    => "&Ogvgr;",
                    'Otigr'    =>   "&Otigr;",    'Ouml'      =>   "&Ouml;",     'PHgr'     => "&PHgr;",
                    'PSgr'     =>   "&PSgr;",     'Pgr'       =>   "&Pgr;",      'Rgr'      => "&Rgr;",
                    'Sbreve'   =>   "&Sbreve;",   'Sgr'       =>   "&Sgr;",      'Slungr'   => "&Slungr;",
                    'THgr'     =>   "&THgr;",     'Tgr'       =>   "&Tgr;",      'Uacgr'    => "&Uacgr;",
                    'Ucirc'    =>   "&Ucirc;",    'Ugr'       =>   "&Ugr;",      'Ugvgr'    => "&Ugvgr;",
                    'Utigr'    =>   "&Utigr;",    'Uuml'      =>   "&Uuml;",     'Xgr'      => "&Xgr;",
                    'Zgr'      =>   "&Zgr;",      'aacdiagr'  =>   "&aacdiagr;", 'aacgr'    => "&aacgr;",
                    'aacute'   =>   "&aacute;",   'abar'      =>   "&abar;",     'acirc'    => "&acirc;",
                    'adiagr'   =>   "&adiagr;",   'adiagvgr'  =>   "&adiagvgr;", 'adiatigr' => "&adiatigr;",
                    'aelig'    =>   "&aelig;",    'agr'       =>   "&agr;",      'agrave'   => "&agrave;",
                    'agvgr'    =>   "&agvgr;",    'aposgr'   => "&aposgr;",
                    'aring'    =>   "&aring;",    'ashort'    =>   "&ashort;",   'ast'      => "&ast;",
                    'atigr'    =>   "&atigr;",    'atilde'    =>   "&atilde;",   'auml'     => "&auml;",
                    'bgr'      =>   "&bgr;",      'cacute'    =>   "&cacute;",   'cbreve'   => "&cbreve;",
                    'ccedil'   =>   "&ccedil;",   'colgr'     =>   "&colgr;",    'deg'      => "&#176",
                    'dgr'      =>   "d",          'dollar'    =>   "\$",         'eacgr'    => "&eacgr;",
                    'eacute'   =>   "&eacute;",   'ebar'      =>   "&ebar;",     'ebreve'   => "&ebreve;",
                    'ecirc'    =>   "&ecirc;",    'eeacgr'    =>   "&eeacgr;",   'eegr'     => "&eegr;",
                    'eegvgr'   =>   "&eegvgr;",   'eetigr'    =>   "&eetigr;",   'egr'      => "&egr;",
                    'egrave'   =>   "&egrave;",   'egvgr'     =>   "&egvgr;",    'equals'   => "=",
                    'etigr'    =>   "&etigr;",    'euml'      =>   "&euml;",     'frac12'   => "1/2",
                    'frac13'   =>   "1/3",        'frac14'    =>   "1/4",        'frac18'   => "1/8",
                    'frac34'   =>   "3/4",        'frac78'    =>   "7/8",        'fslash'   => "/",
                    'ggr'      =>   "&ggr;",      'gtigr'     =>   "&gtigr;",    'hyphen'   => "-",
                    'hyphgr'   =>   "&hyphgr;",   'iacdiagr'  =>   "&iacdiagr;", 'iacgr'    => "&iacgr;",
                    'iacute'   =>   "&iacute;",   'ibar'      =>   "&ibar;",     'icirc'    => "&icirc;",
                    'idiagr'   =>   "&idiagr;",   'idiagvgr'  =>   "&idiagvgr;", 'idiatigr' => "&idiatigr;",
                    'igr'      =>   "&igr;",      'igrave'    =>   "&igrave;",   'igvgr'    => "&igvgr;",
                    'ishort'   =>   "&ishort;",   'isubgr'    =>   "&isubgr;",   'itigr'    => "&itigr;",
                    'iuml'     =>   "&iuml;",     'kgr'       =>   "&kgr;",      'khgr'     => "&khgr;",
                    'ktigr'    =>   "&ktigr;",    'ldquo'     =>   '"',          'lgr'      => "&lgr;",
                    'lsquo'    =>   "'",           'mdash'    =>   "--",         'mgr'      => "&mgr;",
                    'minus'    =>   "-",          'naugr'     =>   "&naugr;",    'ndash'    => "-",
                    'ngr'      =>   "&ngr;",      'ntilde'    =>   "&ntilde;",   'oacgr'    => "&oacgr;",
                    'oacute'   =>   "&oacute;",   'obar'      =>   "&obar;",     'obreve'   => "&obreve;",
                    'ocirc'    =>   "&ocirc;",    'oelig'     =>   "&oelig;",    'ogr'      => "&ogr;",
                    'ograve'   =>   "&ograve;",   'ogvgr'     =>   "&ogvgr;",    'ohacgr'   => "&ohacgr;",
                    'ohgr'     =>   "&ohgr;",     'ohgvgr'    =>   "&ohgvgr;",   'ohmacrgr' => "&ohmacrgr;",
                    'ohtigr'   =>   "&ohtigr;",   'oshort'    =>   "&oshort;",   'oslash'   => "&oslash;",
                    'otigr'    =>   "&otigr;",    'otilde'    =>   "&otilde;",   'ouml'     => "&ouml;",
                    'percent'  =>   "%",          'pgr'       =>   "&pgr;",      'phgr'     => "&phgr;",
                    'pound'    =>   "&pound;",    'psgr'      =>   "&psgr;",     'qugr'     => "&qugr;",
                    'rb'       =>   "&rb;",       'rbAacgr'   =>   "&rbAacgr;",  'rbAgr'    => "&rbAgr;",
                    'rbAgvgr'  =>   "&rbAgvgr;",  'rbAtigr'   =>   "&rbAtigr;",  'rbEEacgr' => "&rbEEacgr;",
                    'rbEEgr'   =>   "&rbEEgr;",   'rbEEgvgr'  =>   "&rbEEgvgr;", 'rbEEtigr' => "&rbEEtigr;",
                    'rbEacgr'  =>   "&rbEacgr;",  'rbEgr'     =>   "&rbEgr;",    'rbEgvgr'  => "&rbEgvgr;",
                    'rbEtigr'  =>   "&rbEtigr;",  'rbIacgr'   =>   "&rbIacgr;",  'rbIgr'    => "&rbIgr;",
                    'rbIgvgr'  =>   "&rbIgvgr;",  'rbItigr'   =>   "&rbItigr;",  'rbOHacgr' => "&rbOHacgr;",
                    'rbOHgr'   =>   "&rbOHgr;",   'rbOHgvgr'  =>   "&rbOHgvgr;", 'rbOHtigr' => "&rbOHtigr;",
                    'rbOacgr'  =>   "&rbOacgr;",  'rbOgr'     =>   "&rbOgr;",    'rbOgvgr'  => "&rbOgvgr;",
                    'rbOtigr'  =>   "&rbOtigr;",  'rbRgr'     =>   "&rbRgr;",    'rbUacgr'  => "&rbUacgr;",
                    'rbUgr'    =>   "&rbUgr;",    'rbUgvgr'   =>   "&rbUgvgr;",  'rbUtigr'  => "&rbUtigr;",
                    'rbaacgr'  =>   "&rbaacgr;",  'rbagr'     =>   "&rbagr;",    'rbagvgr'  => "&rbagvgr;",
                    'rbatigr'  =>   "&rbatigr;",  'rbeacgr'   =>   "&rbeacgr;",  'rbeeacgr' => "&rbeeacgr;",
                    'rbeegr'   =>   "&rbeegr;",   'rbeegvgr'  =>   "&rbeegvgr;", 'rbeetigr' => "&rbeetigr;",
                    'rbegr'    =>   "&rbegr;",    'rbegvgr'   =>   "&rbegvgr;",  'rbetigr'  => "&rbetigr;",
                    'rbiacgr'  =>   "&rbiacgr;",  'rbigr'     =>   "&rbigr;",    'rbigvgr'  => "&rbigvgr;",
                    'rbitigr'  =>   "&rbitigr;",  'rboacgr'   =>   "&rboacgr;",  'rbogr'    => "&rbogr;",
                    'rbogvgr'  =>   "&rbogvgr;",  'rbohacgr'  =>   "&rbohacgr;", 'rbohgr'   => "&rbohgr;",
                    'rbohgvgr' =>   "&rbohgvgr;", 'rbohtigr'  =>   "&rbohtigr;", 'rbotigr'  => "&rbotigr;",
                    'rbreve'   =>   "&rbreve;",   'rbrgr'     =>   "&rbrgr;",    'rbuacgr'  => "&rbuacgr;",
                    'rbugr'    =>   "&rbugr;",    'rbugvgr'   =>   "&rbugvgr;",  'rbutigr'  => "&rbutigr;",
                    'rdquo'    =>   '"',          'rgr'       =>   "&rgr;",      'rsquo'    => "'",
                    'sb'       =>   "&sb;",       'sbAacgr'   =>   "&sbAacgr;",  'sbAgr'    => "&sbAgr;",
                    'sbAgvgr'  =>   "&sbAgvgr;",  'sbAtigr'   =>   "&sbAtigr;",  'sbEEacgr' => "&sbEEacgr;",
                    'sbEEgr'   =>   "&sbEEgr;",   'sbEEgvgr'  =>   "&sbEEgvgr;", 'sbEEtigr' => "&sbEEtigr;",
                    'sbEacgr'  =>   "&sbEacgr;",  'sbEgr'     =>   "&sbEgr;",    'sbEgvgr'  => "&sbEgvgr;",
                    'sbEtigr'  =>   "&sbEtigr;",  'sbIacgr'   =>   "&sbIacgr;",  'sbIdiagr' => "&sbIdiagr;",
                    'sbIgr'    =>   "&sbIgr;",    'sbIgvgr'   =>   "&sbIgvgr;",  'sbItigr'  => "&sbItigr;",
                    'sbOHacgr' =>   "&sbOHacgr;", 'sbOHgr'    =>   "&sbOHgr;",   'sbOHgvgr' => "&sbOHgvgr;",
                    'sbOHtigr' =>   "&sbOHtigr;", 'sbOacgr'   =>   "&sbOacgr;",  'sbOgr'    => "&sbOgr;",
                    'sbOgvgr'  =>   "&sbOgvgr;",  'sbOtigr'   =>   "&sbOtigr;",  'sbRgr'    => "&sbRgr;",
                    'sbUacgr'  =>   "&sbUacgr;",  'sbUgr'     =>   "&sbUgr;",    'sbUgvgr'  => "&sbUgvgr;",
                    'sbUtigr'  =>   "&sbUtigr;",  'sbaacgr'   =>   "&sbaacgr;",  'sbagr'    => "&sbagr;",
                    'sbagvgr'  =>   "&sbagvgr;",  'sbatigr'   =>   "&sbatigr;",  'sbeacgr'  => "&sbeacgr;",
                    'sbeeacgr' =>   "&sbeeacgr;", 'sbeegr'    =>   "&sbeegr;",   'sbeegvgr' => "&sbeegvgr;",
                    'sbeetigr' =>   "&sbeetigr;", 'sbegr'     =>   "&sbegr;",    'sbegvgr'  => "&sbegvgr;",
                    'sbetigr'  =>   "&sbetigr;",  'sbiacgr'   =>   "&sbiacgr;",  'sbigr'    => "&sbigr;",
                    'sbigvgr'  =>   "&sbigvgr;",  'sbitigr'   =>   "&sbitigr;",  'sboacgr'  => "&sboacgr;",
                    'sbogr'    =>   "&sbogr;",    'sbogvgr'   =>   "&sbogvgr;",  'sbohacgr' => "&sbohacgr;",
                    'sbohgr'   =>   "&sbohgr;",   'sbohgvgr'  =>   "&sbohgvgr;", 'sbohtigr' => "&sbohtigr;",
                    'sbotigr'  =>   "&sbotigr;",  'sbreve'    =>   "&sbreve;",   'sbrgr'    => "&sbrgr;",
                    'sbuacgr'  =>   "&sbuacgr;",  'sbugr'     =>   "&sbugr;",    'sbugvgr'  => "&sbugvgr;",
                    'sbutigr'  =>   "&sbutigr;",  'sfgr'      =>   "&sfgr;",     'sgr'      => "&sgr;",
                    'slungr'   =>   "&slungr;",   'tblank'    =>   "    ",       'tgr'      => "&tgr;",
                    'thgr'     =>   "&thgr;",     'uacdiagr'  =>   "&uacdiagr;", 'uacgr'    => "&uacgr;",
                    'uacute'   =>   "&uacute;",   'ubar'      =>   "&ubar;",     'ubreve'   => "&ubreve;",
                    'ucirc'    =>   "&ucirc;",    'udiagr'    =>   "&udiagr;",   'udiagvgr' => "&udiagvgr;",
                    'udiatigr' =>   "&udiatigr;", 'ugr'       =>   "&ugr;",      'ugrave'   => "&ugrave;",
                    'ugvgr'    =>   "&ugvgr;",    'ushort'    =>   "&ushort;",   'utigr'    => "&utigr;",
                    'uuml'     =>   "&uuml;",     'wblank'    =>   "&wblank;",   'xgr'      => "&xgr;",
                    'yacute'   =>   "&yacute;",   'ygrave'    =>   "&ygrave;",   'yuml'     => "&yuml;",
                    'z'        =>   "&#160;",     'zbreve'    =>   "z",          'zgr'      => "&zgr;",
		   )
} 
