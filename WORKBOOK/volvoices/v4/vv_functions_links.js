

var str_page_linksA = new String('');
    str_page_linksA ='<table border="0" cellpadding="1" cellspacing="1" bgcolor="99aabb">\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="http://diglib.lib.utk.edu/dlc/"  target="_blank" style="text-decoration:none">UTK<BR>DLC</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_welcome.htm"  target="D" style="text-decoration:none">Welcome</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_contents.htm"  target="D" style="text-decoration:none">Contents</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_begin.htm"  target="D" style="text-decoration:none">Begin</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_01.htm"  target="D" style="text-decoration:none">Page 1</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_02.htm"  target="D" style="text-decoration:none">Page 2</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_03.htm"  target="D" style="text-decoration:none">Page 3</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_04.htm"  target="D" style="text-decoration:none">Page 4</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_05.htm"  target="D" style="text-decoration:none">Page 5</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_06.htm"  target="D" style="text-decoration:none">Page 6</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_museum.htm"  target="D" style="text-decoration:none">Museum</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_final.htm"  target="D" style="text-decoration:none">Final</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_reload.htm"  target="D" style="text-decoration:none">Reload</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_documentation.htm"  target="D" style="text-decoration:none">Docs</a></td></tr>\r\n'
+'</table>\r\n');
;


function write_page_links() {
var str_page_links = new String('');
    str_page_links ='<table border="0" cellpadding="1" cellspacing="1" bgcolor="99aabb">\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="http://diglib.lib.utk.edu/dlc/"  target="_blank" style="text-decoration:none">UTK<BR>DLC</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_welcome.htm"  target="D" style="text-decoration:none">Welcome</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_contents.htm"  target="D" style="text-decoration:none">Contents</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_begin.htm"  target="D" style="text-decoration:none">Begin</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_01.htm"  target="D" style="text-decoration:none">Page 1</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_02.htm"  target="D" style="text-decoration:none">Page 2</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_03.htm"  target="D" style="text-decoration:none">Page 3</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_04.htm"  target="D" style="text-decoration:none">Page 4</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_05.htm"  target="D" style="text-decoration:none">Page 5</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_06.htm"  target="D" style="text-decoration:none">Page 6</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_museum.htm"  target="D" style="text-decoration:none">Museum</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_final.htm"  target="D" style="text-decoration:none">Final</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_reload.htm"  target="D" style="text-decoration:none">Reload</a></td></tr>\r\n'
+'<tr class="bgstandard"><td class="value14nou"><a href="page_documentation.htm"  target="D" style="text-decoration:none">Docs</a></td></tr>\r\n'
;

document.write(str_page_links);

if ( parent.adb_username == "cricket.deane"  ) {
document.write('<tr class="bgstandard"><td class="value14nou"><a href="page_internal_reload.htm"  target="D" style="text-decoration:none">int Reload</a></td></tr>');
}
document.write('</table>\r\n');
if ( parent.adb_username == "cricket.deane"  ) {
document.write('<p><font face="arial" size="2" color="000000" >'
	+'<a href="../v2/page_links_training2.htm" style="text-decoration:none; color:#000000; " target="_self">test v2</a>'
	+'<br><a href="../vv/page_links_training2.htm" style="text-decoration:none; color:#000000; " target="_self">test vv</a>'
	+'<hr>training<br>3v4'
	);
}

document.write('</body>\r\n</html');

return;
}//end function write_page_links()
