<?php

#p1.php
#http://www.python.org/doc/2.5.2/ext/high-level-embedding.html
#need to find: PyRun_SimpleFile() 
#http://www.python.org/doc/2.5.2/ext/pure-embedding.html



include "Python.h";
include "p1.py";

print "hello from php\n";
Py_Initialize();
Py_funcval();
Py_finalize();


print "good-bye from php\n";
?>
