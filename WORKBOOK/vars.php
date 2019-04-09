<?php
/*
   vars.php
    2005-07-25
         retrieve global variables like "register_globals" did when it was turned on
         in the php.ini


*/

//-- new section to get globals
if (!empty($_GET)) {
   extract($_GET,EXTR_OVERWRITE);
} // end if

if (!empty($_POST)) {
    extract($_POST,EXTR_OVERWRITE);
} // end if


// the most common enviroment vars to get, others can be added
if (!empty($_SERVER)) {
    $server_vars = array('PHP_SELF', 'REMOTE_ADDR', 'SERVER_NAME', 'SERVER_PORT', 'PHP_AUTH_USER', 'PHP_AUTH_PW');
    foreach ($server_vars as $current) {
        if (isset($_SERVER[$current])) {
            $$current = $_SERVER[$current];
        } elseif (!isset($$current)) {
            $$current = '';
        }
    }
    unset($server_vars, $current);
} // end if

%>
