# Python-for-CDF
Python scripts to support ingest of CDF collection (books).

CDF stands for Children's Defense Fund.

Archival files supporting this collecton are defined in Jira: DIT-263.

-------------------
bookprep_preview.py
-------------------

To ingest book objects into Islandora, we use bookprep.php written by Paul Cummins.

See: https://github.com/utkdigitalinitiatives/bookprep

The bookprep.php program puts files into the perfect structure for drush batch ingest into an Islandora book collection.

However, for bookprep.php to create these perfect structures, the data files that are processed must also be in perfect order.

And just to keep you on your toes, bookprep.php consumes its input to create the output.  An execution of bookprep.php that falters halfway through leaves you with a directory full of things that must be repaired before you try to run bookprep.php again.

I am not good at perfect.

I wrote bookprep_preview.py to prevent failed runs of bookprep.php.

The preview program has the same perfection requirements as bookprep.php. It writes a message about every single input file, but it DOES NOT CHANGE your input files.  All you have to do is fix the problem(s) and try again. 

Good files have a message that ends with "okay".
Bad files have a message that contains "mismatch".

This program is deliberately verbose.  You get more information than you could possibly need. Search on "mismatch" to find problems. 

This program is a dumb robot that does not judge.

All filenames are expected to be in a format xxxx_NNNN.ext

NNNN is expected to be all integers.
xxxx can be any prefix followed by underscore-digits.file_extension.

A file extension of ".txt" is bad and will cause bookprep.php to fail.

A filename of "MODS.xml" is bad and will cause bookprep.php to fail.  It  also indicates other problems.

And even if you are following expected filename conventions, bookprep_preview.py may give you mismatch messages that are not useful, such as if your numbering skips over the expected next filename.

For example, if you have a list of jp2s from xx_0001.jp2 to xx_0751.jp2 that is missing xx_234.jp2, you will get mismatch from xx_0235.jp2 to xx_0751.jp2.  It is up to you to interpret the data.

The way I use this program is to run it, fix the problems, run it again, fix the problems again, etc.  When I finally had an output that had no "mismatch", I was able to run bookprep.php successfully on a target directory containing files for 50 books.

commandline:

python /fullpath/bookprep_preview.php  /fullpath/target_directory > /fullpath/preview.txt

When perfect (or perfect enough) run bookprep.php:

php /fullpath/booprep.php /fullpath/target_directory  jp2|tiff

---------------------
bookprep_pagecount.py
---------------------

How many pages does your book object contain?

You can count at how many jp2 files are in your input directory.

But what about how many pages do all the books in your collection contain?

There are ways to do that on the command line, but what about having a nice text file you could print and hang on the wall?

I had to add data_state to the commandline because I wanted to run this before and after I ran bookprep.php

In this version, I take into account that I have a MODS.xml and a PDF.pdf file in the directory being counted.  You may have to adjust data_state for your own file set.

data_state = before | after

commandline:

python /fullpath/bookprep_pagecount.py /fullpath/source_dir  data_state >report.txt

-----------
add_pdfs.py
-----------

After preparing all the files for ingest to an Islandora Book collection, we did a test and discovered that we could ingest an existing pdf file as a datastream for each book.  The pdf files had to be named PDF.pdf in all cases and encased in the correct directory.  So I had a directory of pdf files that had been named to match the directory names for the book objects.

The add_pdfs.py copies the pdf files to the correct directory, renaming each one to PDF.pdf.   And the original directory containing all the pdf files with original names is left alone.  (I always program like it is all going to fail and I will have to start over from scratch.)

This program is actually a rip off from one of the other programs, because I am lazy and re-used code.


directory book_pdfs     -- all the pdf files

directory bookprep_done -- files after running bookprep.php

commandline:

python /fullpath/add_pdfs.py  /fullpath/book_pdfs  /fullpath/bookprep_done after

This can be revised to add other kinds of supplemental datastreams.

----------------------------
exec_ingest_book_digital.py, exec_ingest_book_dlwork.py
----------------------------

These two programs are the same except for the ingest target server.
drush commands are built from command line arguments to do islandora batch preprocess and batch ingest for books.
These are wrapped inside a timeing loop to provide a report at the end of each preprocess-ingest cycle on processing time.
Complete documentation inside the scripts.

commandline:

python /fullpath/exec_ingest_book_digital.py /fullpath/source_directory [LIVE]

python /fullpath/exec_ingest_book_dlwork.py  /fullpath/source_directory [LIVE]

The LIVE option is to go LIVE with the ingest.
I highly recommend running first without the LIVE option because the script will print out your drush command for review.

----------------------------
exec_ingest_video_digital.py, exec_ingest_video_dlwork.py
----------------------------

These two programs are the same except for the ingest target server.
drush commands are built from command line arguments to do islandora batch preprocess and batch ingest for videos.
These are wrapped inside a timeing loop to provide a report at the end of each preprocess-ingest cycle on processing time.
Complete documentation inside the scripts.

commandline:

python /fullpath/exec_ingest_video_digital.py /fullpath/source_directory [LIVE]

python /fullpath/exec_ingest_video_dlwork.py  /fullpath/source_directory [LIVE]

The LIVE option is to go LIVE with the ingest.
I highly recommend running first without the LIVE option because the script will print out your drush command for review.
