/***********************************************************************
 * catch_xmllint_errors
 * by Cricket Deane 
 * (https://github.com/orgs/utkdigitalinitiatives/people/cdeaneGit)
 * for UTK Digital Initiatives 
 * (https://github.com/utkdigitalinitiatives)
 *
 * catch_xmllint_errors.py
 * Python 2.7.5
 *
 * Purpose: detect all xml files that are not well-formed inside a single directory.
 *
 * Commandline: 
 *   python catch_xmllint_errors.py source_directory [ 2> std_err_file ]
 
 * Structure: 
 * Within a loop, process the file list:
 *	execute the command>> returnCode = xmllint --noout filename
 *	If returnCode > 0, print/save the filename.
 * A file named  REPORT_"+source_directory+".txt" is created.

 * If you added the redirect option, you will also have the std_err file.
 
 * Using the results:
 * There are instructions written at the top of the REPORT_ file
 * telling how to derive each dc:identifier from its poorly-formed xml file.
 
 * Requirements:
 * Python 2.7.5 or higher
 * The file catch_xmllint_errors.py should be on the same server as the source directory.
 * The source_directory should be a full path or a link to a full path.
 * The output file(s) will be created in the same directory as catch_xmllint_errors.py
 * The output file(s) will be overwritten each time you process the same source_directory.
 * Rename your files if you wish to keep them.

 * hint
 * Set up a small test directory for input and run this script several times.
 * Make sure you are getting the output you expect before you process a massive amount of files.


 ****************************************************************************/
