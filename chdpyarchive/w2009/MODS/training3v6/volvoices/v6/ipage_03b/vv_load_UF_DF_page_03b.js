//////vv_load_UF_DF_page_03b.js

function load_UF_form() {

parent.U.document.UF.language.value = document.DF.language.value;
parent.U.document.UF.language_display.value = document.DF.language_display.value;
parent.U.document.UF.type_of_resource_01.value = document.DF.type_of_resource_01.value;
parent.U.document.UF.type_of_resource_02.value = document.DF.type_of_resource_02.value;
parent.U.document.UF.type_of_resource_03.value = document.DF.type_of_resource_03.value;

parent.U.document.UF.item_type.value = document.DF.item_type.value;

parent.U.document.UF.museum_form_type_technique.value = document.DF.museum_form_type_technique.value;
parent.U.document.UF.museum_form_type_medium.value = document.DF.museum_form_type_medium.value;

parent.U.document.UF.mods_genre_select[0].selected = document.DF.mods_genre_select[0].selected;
parent.U.document.UF.mods_genre_select[1].selected = document.DF.mods_genre_select[1].selected;
parent.U.document.UF.mods_genre_select[2].selected = document.DF.mods_genre_select[2].selected;

parent.U.document.UF.mods_genre_authority.value = document.DF.mods_genre_authority.value;
parent.U.document.UF.mods_genre.value = document.DF.mods_genre.value;

parent.U.document.UF.extent_pages.value = document.DF.extent_pages.value;
parent.U.document.UF.extent_number_of_objects.value = document.DF.extent_number_of_objects.value;
parent.U.document.UF.extent_dimensions.value = document.DF.extent_dimensions.value;

parent.U.document.UF.item_genre.value = document.DF.item_genre.value;
parent.U.document.UF.mods_genre_abstract.value = document.DF.mods_genre_abstract.value;

return;
}

function load_DF_form() {


document.DF.language.value = parent.U.document.UF.language.value;
document.DF.language_display.value = parent.U.document.UF.language_display.value;
document.DF.type_of_resource_01.value = parent.U.document.UF.type_of_resource_01.value;
document.DF.type_of_resource_02.value = parent.U.document.UF.type_of_resource_02.value;
document.DF.type_of_resource_03.value = parent.U.document.UF.type_of_resource_03.value;


document.DF.item_genre.value = parent.U.document.UF.item_genre.value;

document.DF.museum_form_type_technique.value = parent.U.document.UF.museum_form_type_technique.value;
document.DF.museum_form_type_medium.value = parent.U.document.UF.museum_form_type_medium.value;


document.DF.mods_genre_select[0].selected = parent.U.document.UF.mods_genre_select[0].selected;
document.DF.mods_genre_select[1].selected = parent.U.document.UF.mods_genre_select[1].selected;
document.DF.mods_genre_select[2].selected = parent.U.document.UF.mods_genre_select[2].selected;

document.DF.mods_genre_authority.value = parent.U.document.UF.mods_genre_authority.value;
document.DF.mods_genre.value = parent.U.document.UF.mods_genre.value;

document.DF.extent_pages.value = parent.U.document.UF.extent_pages.value;

//first time load set values
if ( parent.U.document.UF.extent_number_of_objects.value == "" ) {
	document.DF.extent_number_of_objects.value = parent.adb_collextent;
}else{
	document.DF.extent_number_of_objects.value = parent.U.document.UF.extent_number_of_objects.value;
}

//first time load set values
if ( parent.U.document.UF.extent_dimensions.value == "" ) {
	document.DF.extent_dimensions.value=parent.adb_itemdim;
}else{
	document.DF.extent_dimensions.value = parent.U.document.UF.extent_dimensions.value;
}

//first time load set values
if ( parent.U.document.UF.mods_genre_abstract.value == "" ) {
	var adb_abstract = new String(parent.adb_itemdescr);
	///adb_abstract = replace_apos(adb_abstract); 
	///adb_abstract = adb_abstract.replace(/%26/g,'&');//this works
	document.DF.mods_genre_abstract.value = adb_abstract;
}else{
	document.DF.mods_genre_abstract.value = parent.U.document.UF.mods_genre_abstract.value;
}


return;
}



