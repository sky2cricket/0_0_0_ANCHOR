171201 -- chd

###############################
Documentation for unmerge.py  

commandline
          
python pgm.py         fullpath_BASE_dir                         
python merge01.py    /gwork/cdeane/test104c/utk_gradthes     

The BASE_dir will be modified by this program.
The BASE_dir holds sub-directories that are item level collection objects

BASE_dir example:
FULLPATH:  data.lib.utk.edu:/arc1/TRACE/TRACE/utk_gradthes
All of the directories under utk_gradthes are item level collection objects.

To relate the BASE_dir/item to the nested directory, we need to look at 
BASE_dir/BBBB/metadata.xml
specifically the line: <articleid>HOOK</articleid>

This program extracts the HOOK from the metadata.xml file and
deletes the entire item level BASE_dir/BBB/HOOK directory.

 In Robert's example, he starts with the BASE_dir 
 data.lib.utk.edu:/arc1/TRACE/TRACE/utk_gradthes

 The item level sub-directory is 1446.

 The tree at the item level looks like this before merge.py:
  /TRACE/TRACE/utk_gradthes/1446
  +-- fulltext.pdf
  +-- metadata.xml


 Note the HOOK is 2788.
 The tree at the item level looks like this after merge.py:
  /TRACE/TRACE/utk_gradthes/1446
  +-- fulltext.pdf
  +-- metadata.xml
  +-- 2788
      +-- text.pdf.1367952894
      +-- text.pdf.1367952894.stamped


 The tree at the item level looks like this after unmerge.py:
  /TRACE/TRACE/utk_gradthes/1446
  +-- fulltext.pdf
  +-- metadata.xml

 Error checking
 
   0. Incomplete command line
       result: error message, program exit
  1. No such directory BASE_dir (argv[1])
       result: error message, program exit
  2. Detect no "<articleid>" in metadata.xml
	result: Write message and move on to next item
  3. Detect no such directory in BASE_dir/BBBB/HOOK 
       could be caused by missing directory or misspelled HOOK
	result: Write message and move on to next item
  4. No check for detect no files in HOOK directory
