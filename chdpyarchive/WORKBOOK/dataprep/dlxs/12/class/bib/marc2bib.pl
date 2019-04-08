#!/l/local/bin/perl

#
#
# added better character support (borrowed from MARC.pm), 20000815, jpw

$count = "0";

# Set input file from command line or from default

if ( $#ARGV >= 0 )
   { $inputfile = $ARGV[0]; }
else
   { $inputfile = "records.marc"; }

open (NOTIS, $inputfile) or die "ERROR: Unable to open input file --";

# grab all the notis ids/ root paths extents and titles from the moa lists

while (<NOTIS>) {
        chop;
        
	local ($notis, $root, $pageextent, $moatitle)= split (/\|\|\|/, $_);
        
	$EXTENT{$notis} =$pageextent;
	$MOATITLE{$notis} = $moatitle;
	

}

#been running this on each separate file
$/ = "\035";
$field = "\036";
$subfield = "\037";

$index = 0;


while (<>) {

    chomp;

    my(%record);

    $record{'leader'} = substr($_, 0, 24);
    $record{'logical_record_length'} = substr($record{'leader'}, 0, 5);
    $record{'record_status'} = substr($record{'leader'}, 5, 1);
    $record{'type_of_record'} = substr($record{'leader'}, 6, 1);
    $record{'bibliographic_level'} = substr($record{'leader'}, 7, 1);
    $record{'type_of_control'} = substr($record{'leader'}, 8, 1);
    $record{'undefined'} = substr($record{'leader'}, 9, 1);
    $record{'indicator_count'} = substr($record{'leader'}, 10, 1);
    $record{'subfield_code_count'} = substr($record{'leader'}, 11, 1);
    $record{'base_address_of_data'} = substr($record{'leader'}, 12, 5);
    $record{'encoding_level'} = substr($record{'leader'}, 17, 1);
    $record{'descriptive_cataloging_form'} = substr($record{'leader'}, 18, 1);
    $record{'linked_record_requirement'} = substr($record{'leader'}, 19, 1);
    $record{'entry_map'} = substr($record{'leader'}, 20, 4);
    ## entry_map is more complicated by the standard, but apparently
    ## only ever holds default values so far...

    $record{'all_data'} = substr($_, $record{'base_address_of_data'});

    substr($_, 0, 24) = '';

    while ($_ =~ s,^(\d{12}),,) {
	my($entry) = $1;
	my($tag) = substr($entry, 0, 3);

        #this accomodates that fact that sometimes there are multiples of a single field

	foreach $oldtag (sort(keys (%record))) {
	    if ($tag eq $oldtag) {
		$tag="$tag" . "a";

	    }
	}
	my($field_length) = substr($entry, 3, 4);
	my($fl) = $field_length;
	$fl =~ s,^0+,,;
	my($starting_character_position) = substr($entry, 7, 5);
	my($scp) = $starting_character_position;
	$scp =~ s,^0+,,;
	$record{"$tag"}{"field_length"} = $field_length;
	$record{"$tag"}{"starting_character_position"} = 
	    $starting_character_position;
	$record{"$tag"}{"data"} = substr($record{'all_data'}, $scp, $fl);
	$record{"$tag"}{"data"} =~ s,$field,,;
# jpw       if (! ($tag =~ m,(260),) )
# jpw          { $record{"$tag"}{"data"} =~ s,$subfield([b-z]), ; ,g; }
        $record{"$tag"}{"data"} =~ s,$subfield(\w),|lesssubtag|M.\u$1|moresubtag|,g;
    }

    foreach $field (sort(keys (%record))) {


 	if ($field =~ m,(^\d{3}$|^\d{3}\w+$),) {

	    $inform = "$record{$field}{'data'}";
	    $inform =~ s,\&,\&amp;,g;
	    $inform =~ s,<,\&lt\;,g;
	    $inform =~ s,>,\&gt\;,g;
	    $inform =~ s,\|lesssubtag\|,<,g;
	    $inform =~ s,\|moresubtag\|,>,g;
	    $inform =~ s,<(M.\w)>([^<]*),<$1>$2</$1>,g;
	    $inform =~ s,<(M.\w)>([^<]*)$,<$1>$2</$1>,g;
	    $inform =~ s,^\s+,,g;
	    $inform =~ s,^\d+\s?<,<,g;
	    $inform =~ s,^\d+\?\s?<,<,g;
	    $inform =~ s,^\?+\s?<,<,g;
            
# jpw            if (!($field =~ m,(260),)) {
# jpw               $inform =~ s,<M.A>,,g;
# jpw               $inform =~ s,</M.A>,,g;
# jpw            }
            $inform =~ s,<M.[0-9]>[^<]*</M.[0-9]>,,g;
	    
	$inform =~ s,\x1b,\&esc;,g;	# escape
	$inform =~ s,\x24,\&dollar;,g;	# dollar sign
	$inform =~ s,\x5c,\&bsol;,g;	# back slash (reverse solidus)
	$inform =~ s,\x7b,\&lcub;,g;	# opening curly brace
	$inform =~ s,\x7d,\&rcub;,g;	# closing curly brace
	$inform =~ s,\x8d,\&joiner;,g;	# zero width joiner
	$inform =~ s,\x8e,\&nonjoin;,g;	# zero width non-joiner
	$inform =~ s,\xa1,\&Lstrok;,g;	# latin capital letter l with stroke
	$inform =~ s,\xa2,\&Ostrok;,g;	# latin capital letter o with stroke
	$inform =~ s,\xa3,\&Dstrok;,g;	# latin capital letter d with stroke
	$inform =~ s,\xa4,\&THORN;,g;	# latin capital letter thorn (icelandic)
	$inform =~ s,\xa5,\&AElig;,g;	# latin capital letter AE
	$inform =~ s,\xa6,\&OElig;,g;	# latin capital letter OE
	$inform =~ s,\xa7,\&softsign;,g;	# modifier letter soft sign
	$inform =~ s,\xa8,\&middot;,g;	# middle dot
	$inform =~ s,\xa9,\&flat;,g;	# musical flat sign
	$inform =~ s,\xaa,\&reg;,g;	# registered sign
	$inform =~ s,\xab,\&plusmn;,g;	# plus-minus sign
	$inform =~ s,\xac,\&Ohorn;,g;	# latin capital letter o with horn
	$inform =~ s,\xad,\&Uhorn;,g;	# latin capital letter u with horn
	$inform =~ s,\xae,\&mlrhring;,g;	# modifier letter right half ring (alif)
	$inform =~ s,\xb0,\&mllhring;,g;	# modifier letter left half ring (ayn)
	$inform =~ s,\xb1,\&lstrok;,g;	# latin small letter l with stroke
	$inform =~ s,\xb2,\&ostrok;,g;	# latin small letter o with stroke
	$inform =~ s,\xb3,\&dstrok;,g;	# latin small letter d with stroke
	$inform =~ s,\xb4,\&thorn;,g;	# latin small letter thorn (icelandic)
	$inform =~ s,\xb5,\&aelig;,g;	# latin small letter ae
	$inform =~ s,\xb6,\&oelig;,g;	# latin small letter oe
	$inform =~ s,\xb7,\&hardsign;,g;	# modifier letter hard sign
	$inform =~ s,\xb8,\&inodot;,g;	# latin small letter dotless i
	$inform =~ s,\xb9,\&pound;,g;	# pound sign
	$inform =~ s,\xba,\&eth;,g;	# latin small letter eth
	$inform =~ s,\xbc,\&ohorn;,g;	# latin small letter o with horn
	$inform =~ s,\xbd,\&uhorn;,g;	# latin small letter u with horn
	$inform =~ s,\xc0,\&deg;,g;	# degree sign
	$inform =~ s,\xc1,\&scriptl;,g;	# latin small letter script l
	$inform =~ s,\xc2,\&phono;,g;	# sound recording copyright
	$inform =~ s,\xc3,\&copy;,g;	# copyright sign
	$inform =~ s,\xc4,\&sharp;,g;	# sharp
	$inform =~ s,\xc5,\&iquest;,g;	# inverted question mark
	$inform =~ s,\xc6,\&iexcl;,g;	# inverted exclamation mark
	$inform =~ s,\xe0(.),\&$1hooka;,g;	# combining hook above
	$inform =~ s,\xe1(.),\&$1grave;,g;	# combining grave
	$inform =~ s,\xe2(.),\&$1acute;,g;	# combining acute
	$inform =~ s,\xe3(.),\&$1circ;,g;	# combining circumflex
	$inform =~ s,\xe4(.),\&$1tilde;,g;	# combining tilde
	$inform =~ s,\xe5(.),\&$1macr;,g;	# combining macron
	$inform =~ s,\xe6(.),\&$1breve;,g;	# combining breve
	$inform =~ s,\xe7(.),\&$1dot;,g;	# combining dot above
	$inform =~ s,\xe8(.),\&$1uml;,g;	# combining diaeresis (umlaut)
	$inform =~ s,\xe9(.),\&$1caron;,g;	# combining hacek
	$inform =~ s,\xea(.),\&$1ring;,g;	# combining ring above
	$inform =~ s,\xeb(.),\&$1llig;,g;	# combining ligature left half
	$inform =~ s,\xec(.),\&$1rlig;,g;	# combining ligature right half
	$inform =~ s,\xed(.),\&$1rcommaa;,g;	# combining comma above right
	$inform =~ s,\xee(.),\&$1dblac;,g;	# combining double acute
	$inform =~ s,\xef(.),\&$1candra;,g;	# combining candrabindu
	$inform =~ s,\xf0(.),\&$1cedil;,g;	# combining cedilla
	$inform =~ s,\xf1(.),\&$1ogon;,g;	# combining ogonek
	$inform =~ s,\xf2(.),\&$1dotb;,g;	# combining dot below
	$inform =~ s,\xf3(.),\&$1dbldotb;,g;	# combining double dot below
	$inform =~ s,\xf4(.),\&$1ringb;,g;	# combining ring below
	$inform =~ s,\xf5(.),\&$1dblunder;,g;	# combining double underscore
	$inform =~ s,\xf6(.),\&$1under;,g;	# combining underscore
	$inform =~ s,\xf7(.),\&$1commab;,g;	# combining comma below
	$inform =~ s,\xf8(.),\&$1rcedil;,g;	# combining right cedilla
	$inform =~ s,\xf9(.),\&$1breveb;,g;	# combining breve below
	$inform =~ s,\xfa(.),\&$1ldbltil;,g;	# combining double tilde left half
	$inform =~ s,\xfb(.),\&$1rdbltil;,g;	# combining double tilde right half
	$inform =~ s,\xfe(.),\&$1commaa;,g;	# combining comma above
# JPW's additions
	$inform =~ s,\xd4,<sub>4</sub>,g;	# subscript 4
	$inform =~ s,\xd2,<sub>2</sub>,g;	# subscript 2
	$inform =~ s,\xb0,\&lsquo\;,g;	# left single quote
	$inform =~ s,\xae,\&rsquo\;,g;	# right single quote
	$inform =~ s,\xca,+,g;	# from Liz's work
	    if ($field =~ m,245,) {
		push @titles, $inform;
	    }

# uncomment this and the pressing out of SGML if a Media Union title
            elsif ($field =~ m,035,) {
               push @dlpsID, $inform;
            }
            elsif ($field =~ m,099,) {
               push @mu_callnum, $inform;
            }

	    elsif ($field =~ m,(111|210|211|212|214|222|240|242|243|246|247),) {
		push @othernotes, $inform;

	    }
	    elsif  ($field =~ m,(100|110|130),) {
		push @author, $inform;
   	    }	
	    elsif ($field =~ m,(250|254|255|256|257|261|262|263|265),) {
		$inform ="$field--$inform";
		push @imprint, $inform;

	    }
            elsif ($field =~ m,(260),) {
		push @pubstmt, $inform;
	    }            
	    elsif ($field =~ m,(300|305|306|310|315|321|340|350|351|355|357|362),) {
		 push @extent, $inform;
            }
	    elsif ($field =~ m,(400|410|411|440|490),){
		push @series, $inform;
	    }
	    elsif ($field =~ m,^5,) {
		push @notes, $inform;

	    }
	    elsif ($field =~ m,(^6|830|810),) {
		push @subjects, $inform;

	    }
	    elsif ($field =~ m,^7,) {
		push @addentries, $inform;

	    }			# 
	    elsif ($field =~ m,^9,) {
		if (not $field =~ m,998,) {
		    push @XXentries, $inform;

	    }
        }
     }  
    }
	
	$notisid = $record{'001'}{'data'};
	$notisid =~ s,^UL,,;
	$notisid =~ s,\s,,g;
	if (-e "sgmlout/$notisid.bib") {
	    print "$notisid duplicate\n";
	}

	$digextent = $EXTENT{$notisid};
	$comtitle = $MOATITLE{$notisid};
	$count ++;
        
        &CreateTei;
}

    print $count;

    
sub CreateTei {
    $sgmfile = "sgmlout/$notisid.bib";
    my $now = `date +"%Y-%m-%d"`; chop $now;

    open (SGMDOC, ">$sgmfile") or die "ERROR: Unable to open output file --";
    print SGMDOC (qq{<A ID="$notisid" DT="$now">});

    print SGMDOC (qq{<B>});
    print SGMDOC (qq{<K>});
    if (@titles) {
	foreach $item (@titles) {
            $item =~ s,<M.A>,,g;
            $item =~ s,</M.A>,,g;
            $item =~ s,<M.B>, ,g;
            $item =~ s,</M.B>,,g;
            $item =~ s,<M.C>, / ,g;
            $item =~ s,</M.C>,,g;
	    $item =~ s,<M..>, ,g;
	    $item =~ s,</M..>,,g;
            print SGMDOC $item;
	}
	print SGMDOC (qq{</K>});
    }	



    if (@author) {
	foreach $item (@author) {
	    print SGMDOC (qq{<L>});
            $item =~ s,<M.A>,,g;
            $item =~ s,</M.A>,,g;
            $item =~ s,<M.Q>, ,g;
            $item =~ s,</M.Q>,,g;
            $item =~ s,<M..>, ,g;
            $item =~ s,</M..>,,g;
            print SGMDOC $item;
	    print SGMDOC (qq{</L>});
	}
    }


    print SGMDOC (qq{</B>});

    if (@extent) {
	foreach $item (@extent) {
            $item =~ s,<M.A>,,g;
            $item =~ s,<M..>, ; ,g;
            $item =~ s,</M..>,,g;
	    $item = '<D>' . $item . '</D>';
            print SGMDOC $item;
	}
    }

# not sure what we're losing here, but possibly edition statements. check with Jackie
# jpw, 20 Dec. 1999
#      if (@imprint) {
#          $typeitem = $item;
#          $typeitem =~ s,^([\d]{3})--.*,$1,;
#          $item =~ s,^[\d]{3}--(.*)$,$1,;
#          print SGMDOC (qq{<AG>});
#          print SGMDOC ($item);
#          print SGMDOC (qq{</AG>});
#      }

    print SGMDOC (qq{<E>});
    
    if (@pubstmt) {
       foreach $item (@pubstmt) {
           $item =~ s,<M.A>,<U>,g;
           $item =~ s,</M.A>,</U>,g;
           $item =~ s,<M.B>,<T>,g;
           $item =~ s,</M.B>,</T>,g;
           $item =~ s,<M.C>,<YR>,g;
           $item =~ s,</M.C>,</YR>,g;
           $item =~ s,<M.D>,<U>,g;
	   $item =~ s,</M.D>,</U>,g;
	   $item =~ s,<M.E>,<U>,g;
	   $item =~ s,</M.E>,</U>,g;
	   $item =~ s,<M.F>,<T>,g;
	   $item =~ s,</M.F>,</T>,g;
	   $item =~ s,<M.G>,<YR>,g;
	   $item =~ s,</M.G>,</YR>,g;
           print SGMDOC $item;
       }    
    }
    
    if (@dlpsID) {
	print SGMDOC (qq{<W A="DLPSID">});
	foreach $item (@dlpsID) {
	    $item =~ s,\(OCoLC\)[^\(]*,,g;
	    $item =~ s,<M.A>,,g;
	    $item =~ s,</M.A>,,g;
	    $item =~ s,\(DAAP\)ch,,g;
	    $item =~ s,\(AMPO\)chd,,g;
	    $item =~ s,\(EVD\)chd,,g;
	    $item =~ s, *,,g;
	    print SGMDOC $item;
	}
	print SGMDOC (qq{</W>});
    }
#    print SGMDOC (qq{<W A="NOTIS">$notisid</W>});
#    print SGMDOC (qq{<W A="CALLNO">@mu_callnum</W>});


    print SGMDOC (qq{<X>Publicly accessible text for non-commercial applications.</X>});
    print SGMDOC (qq{</E>});

 if (@series) {
	print SGMDOC (qq{<F>});
    print SGMDOC (qq{<K>});
    if (@titles) {
	foreach $item (@titles) {
            $item =~ s,<M.A>,,g;
            $item =~ s,</M.A>,,g;
            $item =~ s,<M.B>, ,g;
            $item =~ s,</M.B>,,g;
            $item =~ s,<M.C>, / ,g;
            $item =~ s,</M.C>,,g;
	    $item =~ s,<M..>, ,g;
	    $item =~ s,</M..>,,g;
            print SGMDOC $item;
	}
	print SGMDOC (qq{</K>});
	print SGMDOC (qq{</F>});
    }
} 
    
 
#  These multiples of NOTESSTMTs (the G's) should be made single
  	if (@notes) {
	    foreach $item (@notes) {
		$item =~ s,</?M.A>,,g;
		$item =~ s,<M..>, ,g;
		$item =~ s,</M..>,,g;
		$item = '<G><AA>' . $item . '</AA></G>';
		print SGMDOC $item;
	    }
      }
  	if (@othernotes) {
	    foreach $item (@othernotes) {
		$item =~ s,</?M.A>,,g;
		$item =~ s,<M..>, ,g;
		$item =~ s,</M..>,,g;
		$item = '<G><AA>' . $item . '</AA></G>';
		print SGMDOC $item;
	    }
      }
  	if (@XXentries) {
	    foreach $item (@XXentries) {
		$item =~ s,</?M.A>,,g;
		$item =~ s,<M..>, ,g;
		$item =~ s,</M..>,,g;
		$item = '<G><AA>' . $item . '</AA></G>';
		print SGMDOC $item;
	    }
      }

  	if (@addentries) {
	    foreach $item (@addentries) {
		$item =~ s,</?M.A>,,g;
		$item =~ s,<M..>, ,g;
		$item =~ s,</M..>,,g;
		$item = '<G><AA>' . $item . '</AA></G>';
		print SGMDOC $item;
	    }
      }	

    
	if (@subjects){
	    print SGMDOC (qq{<I2><SG>});
            foreach $item (@subjects) {
		$item =~ s,</?M.A>,,g;
                $item =~ s,<M..>,--,g;
		$item =~ s,</M..>,,g;
		$item = '<SU>' . $item . '</SU>';
                print SGMDOC $item;
	    }
	    print SGMDOC (qq{</SG></I2>});
	}	
	print SGMDOC (qq{<J><URL>http://ets.umdl.umich.edu/bin/FOO/FOO-idx?type=header\&id=BAR</URL></J>}); # MOA1 and MOA4
#	print SGMDOC (qq{<J><URL>http://www.hti.umich.edu/cgi/t/text/text-idx?c=moa\&idno=$notisid</URL></J>}); # MOA1 and MOA4
#	print SGMDOC (qq{<J><URL>http://moa.umdl.umich.edu/moa4/availability.html</URL></J>}); # MOA4
#	print SGMDOC (qq{<J><URL>http://www.hti.umich.edu/cgi/u/umr/pageviewer?id=$notisid</URL></J>}); # UMR
#	print SGMDOC (qq{<J><COLLS><COLL>moa</COLL></COLLS>}); # for MOA, need to alter to draw from colldb
				

    print SGMDOC (qq{</A>\n});
    
    close SGMDOC;
    @subjects = ();
    @titles = ();
    @mu_callnum = ();
    @imprint = ();
    @pubstmt = ();
    @author = ();
    @addentries =();
    @XXentries =();
    @othernotes = ();
    @extent = ();
    @series = ();
    @notes = ();
    $notisid ='';
}


#some error checking to make sure that we haven't mixed up materials

open (PROCESS, ">>processing");
$testtitle = $titles[0];
$testtitle =~ s,<\w>,,g;
$testtitle =~ s,</\w>,,g;
$testtitle =~ s,\n,,g;
$testtitle =~ s,^(\S+\s\S+\s\S+\s).*,$1,g;


$comtitle =~ s,^(\S+\s\S+\s\S+\s).*,$1,g;


if ($comtitle =~ m,$testtile,) {
}
else {
    print PROCESS (qq{MARC: $testtitle/ MOA: $comtitle - $notisid\n\n});
}

close PROCESS;







