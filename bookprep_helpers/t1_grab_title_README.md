The best way to undestand what is happening with t1_grab_title.py processing is to have BEFORE and AFTER display.

All bookprep outputs have a page one (directory 1).  
The example is VANVACTOR/batch5d/0012_003979)000429/1/MODS.xml (page level header for page 1).

CORRECTED BY "grabbing" the book level title from VANVACTOR/batch5d/0012_003979_000429/MODS.xml
   <titleInfo>
      <title>Variationen über ein Thema von Beethoven für Flöte u Klavier</title>
   </titleInfo>


BEFORE
<?xml version="1.0" encoding="UTF-8"?>
<mods:mods xmlns:mods="http://www.loc.gov/mods/v3" xmlns="http://www.loc.gov/mods/v3">
  <mods:titleInfo>
    <mods:title>Variationen &uuml;ber ein Thema von Beethoven f&uuml;r Fl&ouml;te u Klavier : page 1</mods:title>
  </mods:titleInfo>
</mods:mods>

AFTER
<?xml version="1.0" encoding="UTF-8"?>
<mods:mods xmlns:mods="http://www.loc.gov/mods/v3" xmlns="http://www.loc.gov/mods/v3">
  <mods:titleInfo>
      <mods:title>Variationen über ein Thema von Beethoven für Flöte u Klavier</mods:title>
  </mods:titleInfo>
</mods:mods>

The code operates on all pages, but you may want to test on a single page.
