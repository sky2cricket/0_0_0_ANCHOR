# bookprep_helpers
Tools to help with bookprep.php before and after execution.

The https://github.com/utkdigitalinitiatives/bookprep is an excellent way to prepare data for ingest to the islandora platform as book objects.

The input to bookprep.php and output from bookprep.php follow a strict format as discussed in

https://github.com/cdeaneGit/bookprep/edit/master/README.md.

**Example of what it should look like before running Bookprep**
```terminal
example/
├── example-vol1-no1
│   ├── example-vol1-no1_0001.tif
│   ├── example-vol1-no1_0002.tif
│   ├── example-vol1-no1_0003.tif
│   └── example-vol1-no1_0004.tif
├── example-vol1-no1.xml
├── example-vol1-no2
│   ├── example-vol1-no2_0001.tif
│   ├── example-vol1-no2_0002.tif
│   └── example-vol1-no2_0003.tif
├── example-vol1-no2.xml
├── example-vol2-no1
│   ├── example-vol2-no1_0001.tif
│   ├── example-vol2-no1_0002.tif
│   ├── example-vol2-no1_0003.tif
│   ├── example-vol2-no1_0004.tif
│   └── example-vol2-no1_0005.tif
└── example-vol2-no1.xml
```

**Example of directory structure after bookprep**

This example is only displaying one of the 3 subdirectories. The others should look similar.
```terminal
example/
├── example-vol1-no1
│   ├── 1
│   │   ├── HOCR.html
│   │   ├── MODS.xml
│   │   ├── OBJ.tif
│   │   └── OCR.txt
│   ├── 2
│   │   ├── HOCR.html
│   │   ├── MODS.xml
│   │   ├── OBJ.tif
│   │   └── OCR.txt
│   ├── 3
│   │   ├── HOCR.html
│   │   ├── MODS.xml
│   │   ├── OBJ.tif
│   │   └── OCR.txt
│   ├── 4
│   │   ├── HOCR.html
│   │   ├── MODS.xml
│   │   ├── OBJ.tif
│   │   └── OCR.txt
│   └── MODS.xml
├── example-vol1-no1.xml
├── example-vol1-no2
│   └── ...
├── example-vol1-no2.xml
├── example-vol2-no1
│   └── ...
└── example-vol2-no1.xml
```

The tools presented here are lifted from scripts I wrote to

1. Put data into the correct format for input. (input_helpers)
2. Revise the output directories to include TRANSCRIPT.bin files and PDF.pdf files. (revise_helpers)
3. Extract the original data (xml and tifs/jp2) from the bookprep output directories. (extract_helpers)
4. Drush ingest notes. (drush_ingest_notes)
