/////vv_load_UF_DF_page_02b.js

function load_UF_form() {


parent.U.document.UF.date_created.value = document.DF.date_created.value;
parent.U.document.UF.date_createdQ.value = document.DF.date_createdQ.value;
//parent.U.document.UF.date_created_radio[0].checked = document.DF.date_created_radio[0].checked;
//parent.U.document.UF.date_created_radio[1].checked = document.DF.date_created_radio[1].checked;
parent.U.document.UF.date_created_begin.value = document.DF.date_created_begin.value;
parent.U.document.UF.date_created_beginQ.value = document.DF.date_created_beginQ.value;
parent.U.document.UF.date_created_end.value = document.DF.date_created_end.value;
parent.U.document.UF.date_created_endQ.value = document.DF.date_created_endQ.value;

for(i=0;i<3;i++){
   parent.U.document.UF.prev_publish[i].selected = document.DF.prev_publish[i].selected;
}
parent.U.document.UF.publisher_name.value = document.DF.publisher_name.value;
parent.U.document.UF.publisher_address.value = document.DF.publisher_address.value;
parent.U.document.UF.date_issued.value = document.DF.date_issued.value;
parent.U.document.UF.date_issuedQ.value = document.DF.date_issuedQ.value;
parent.U.document.UF.place_of_origin.value = document.DF.place_of_origin.value;


return;
}

function load_DF_form() {

alert("ipage_02b/vv_load_UF_DF_page_02b.js\n function load_DF_form()");

/*---------------------------------------------
THIS SCREWS UP THE RELOAD OF PAGE_02b..........
because... when you reset parent.U.document.UF.date_created.value = "" 
	   to take care of date range, this statement block is triggered
	   and you have created a dead lock.
//first time set value
if ( parent.U.document.UF.date_created.value == "" ) {
	document.DF.date_created.value = parent.adb_itemdate;
}else{
	document.DF.date_created.value = parent.U.document.UF.date_created.value ;
}
---------------------------------------------------------------------------------------*/
document.DF.date_createdQ.value = parent.U.document.UF.date_createdQ.value ;
//document.DF.date_created_radio[0].checked = parent.U.document.UF.date_created_radio[0].checked ;
//document.DF.date_created_radio[1].checked = parent.U.document.UF.date_created_radio[1].checked ;
document.DF.date_created_begin.value = parent.U.document.UF.date_created_begin.value ;
document.DF.date_created_beginQ.value = parent.U.document.UF.date_created_beginQ.value ;
document.DF.date_created_end.value = parent.U.document.UF.date_created_end.value ;
document.DF.date_created_endQ.value = parent.U.document.UF.date_created_endQ.value ;

for(i=0;i<3;i++){
   document.DF.prev_publish[i].selected = parent.U.document.UF.prev_publish[i].selected;
}
document.DF.publisher_name.value = parent.U.document.UF.publisher_name.value ;
document.DF.publisher_address.value = parent.U.document.UF.publisher_address.value ;
document.DF.date_issued.value = parent.U.document.UF.date_issued.value ;
document.DF.date_issuedQ.value = parent.U.document.UF.date_issuedQ.value ;
document.DF.place_of_origin.value = parent.U.document.UF.place_of_origin.value ;

return;
}



