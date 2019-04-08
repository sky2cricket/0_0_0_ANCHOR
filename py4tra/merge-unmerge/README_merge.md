171201 -- chd

###############################
Documentation for merge.py

commandline
          
python pgm.py         fullpath_BASE_dir                       fullpath_ARCH_dir   
python merge.py    /gwork/cdeane/test104c/utk_gradthes     /gwork/cdeane/bpstuff/utk_gradthes

The BASE_dir will be modified by this program.
The BASE_dir holds sub-directories that are item level collection objects

BASE_dir example:
FULLPATH:  data.lib.utk.edu:/arc1/TRACE/TRACE/utk_gradthes
All of the directories under utk_gradthes are item level collection objects.

ARCH_dir example:
FULLPATH:  data.lib.utk.edu:/arch2/bpstuff/utk_gradthes/articles
All of the directories under utk_gradthes are item level reference objects.

To relate the BASE_dir/item to the ARCH_dir item, we need to look at 
BASE_dir/BBBB/metadata.xml
specifically the line: <articleid>HOOK</articleid>

This program extracts the HOOK from the metadata.xml file and
copies ARCH_dir/HOOK  into the item level BBBB directory.

 In Robert's example, he starts with the BASE_dir 
 data.lib.utk.edu:/arc1/TRACE/TRACE/utk_gradthes

 The item level sub-directory is 1446.
 The tree at the item level looks like this:


  /TRACE/TRACE/utk_gradthes/1446
  +-- fulltext.pdf
  +-- metadata.xml

 Note the metadata.xml file.
 It contains the reference:  <articleid>2788</articleid>
 The HOOK is 2788.

 The full path for the ARCH_dir is
 data.lib.utk.edu:/arc2/bpstuff/utk_gradthes/articles

 The item level reference sub-directory is 2788.
 The tree at the item level looks like this:

  /arc2/bpstuff/utk_gradthes/articles/2788
  +-- text.pdf.1367952894
  +-- text.pdf.1367952894.stamped

 The script below will work on each sub-directory in the BASE_dir and
   1. identify the HOOK in the metadata.xml file
   2. generate the full path to the corresponding ARCH_dir/HOOK location
   3. merge the information by copying the HOOK directory into the
      item level collection sub-directory.
      
 The resulting output for the merged item level data looks like this:
  /TRACE/TRACE/utk_gradthes/1446
  +-- fulltext.pdf
  +-- metadata.xml
  +-- 2788
      +-- text.pdf.1367952894
      +-- text.pdf.1367952894.stamped

 Error checking

  0. Incomplete command line
       result: error message, program exit
  1. No such directory BASE_dir (argv[1])
       result: error message, program exit
  2. No such directory ARCH_dir (argv[2])
       result: error message, program exit
  3. Detect no "<articleid>" in metadata.xml
	result: Write message and move on to next item
  4. Detect no HOOK directory in ARCH_dir 
       could be caused by missing directory or misspelled HOOK
	result: Write message and move on to next item
  5. No check for detect no files in HOOK directory      
      
