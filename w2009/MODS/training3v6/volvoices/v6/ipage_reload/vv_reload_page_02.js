//    vv_reload_page_02.js

/*----------------------------------------------------------------
MODS tags from page_02
<mods:originInfo> 
<mods:dateCreated keyDate="yes" encoding="w3cdtf">1815-03-15</mods:dateCreated> 
<mods:dateIssued qualifier="approximate" encoding="w3cdtf">2004</mods:dateIssued> 
<mods:place> 
<mods:placeTerm>Knoxville, TN</mods:placeTerm> 
</mods:place> 
<mods:publisher>UT PRESS, Knoxville, TN</mods:publisher> 
</mods:originInfo> 


<mods:originInfo> 
<mods:dateCreated qualifier="approximate" keyDate="yes" encoding="w3cdtf" point="start">1815-01-01</mods:dateCreated> 
<mods:dateCreated qualifier="inferred" encoding="w3cdtf" point="end">1820-07-01</mods:dateCreated> 
<mods:dateIssued qualifier="approximate" encoding="w3cdtf">2004</mods:dateIssued> 
<mods:place> 
<mods:placeTerm>Knoxville, TN</mods:placeTerm> 
</mods:place> 
<mods:publisher>UT PRESS, Knoxville, TN</mods:publisher> 
</mods:originInfo>

//CALL BUTTON on page_reload_REGEX.htm
<input type="button" name ="Regex_p02" onclick='reload_page_02();' value="reload_p02">&nbsp;

------------------------------------------------------------------*/

function page_02_init(){
alert("vv_reload_page_02.js\nfunction page_02_init()");

parent.U.document.UF.date_created.value = "";
parent.U.document.UF.date_createdQ.value = "";
parent.U.document.UF.date_created_begin.value = "";
parent.U.document.UF.date_created_beginQ.value = "";
parent.U.document.UF.date_created_end.value = "";
parent.U.document.UF.date_created_endQ.value = "";
parent.U.document.UF.prev_publish[2].selected=true;
parent.U.document.UF.publisher_name.value="";
parent.U.document.UF.publisher_address.value="";
parent.U.document.UF.date_issued.value="";
parent.U.document.UF.date_issuedQ.value="";
parent.U.document.UF.place_of_origin.value="";

}//end function page_02_init()

function reload_page_02(){
alert("vv_reload_page_02.js\nfunction reload_page_02()");
page_02_init();
if (!confirm("continue reload of page_02?"))return;
var t= new String(document.DF.chomp.value);

    var p2_begin= t.indexOf("<mods:originInfo");
    var p2_end  = t.indexOf("<mods:language>")
var t1= new String(t.substring(p2_begin,p2_end));
alert("vv_reload_page_02.js\nfunction reload_page_02()\n\n"
	+"t1=\n"+t1);

    var dc_begin = t1.indexOf("<mods:dateCreated");
    var dc_mid   = t1.indexOf("</mods:dateCreated>")+19;//middle
    var dc_end   = t1.lastIndexOf("mods:dateCreated")+17;
var s1= new String(t1.substring(dc_begin,dc_end));
var s2= new String(t1.substring(dc_begin,dc_mid));
var s3= new String(t1.substring(dc_mid,dc_end));
alert("vv_reload_page_02.js\nfunction reload_page_02()\n\n"
	+"\ns1.length="+s1.length
	+"\ns1=\n"+s1
	+"\ns2.length="+s2.length
	+"\ns2=\n"+s2
	+"\ns3.length="+s3.length
	+"\ns3=\n"+s3 
	);


var sd = new String();//start date
var sdQ = new String();//start date qualifier
var sd_begin = 0; //begin index for start date
var ed = new String();//end date
var edQ = new String();//end date qualifier
var ed_begin = 0; //begin index for end date
var od = new String();//only date
var odQ = new String();//only date qualifier
var od_begin = 0; //begin index for only date

if (s1.indexOf("point")>-1){
	//alert("date range");
	parent.U.document.UF.date_created.value="";
	parent.U.document.UF.date_createdQ.value="";

	if (s2.indexOf('point="start"')>-1){//date range start date
    		sd_begin=s2.indexOf('point="start">')+14;
    		sd      = s2.substring(sd_begin);
		if(s2.indexOf('qualifier="approx')>-1){
			sdQ ="approximate";
		}else if (s2.indexOf('qualifier="infer')>-1){
			sdQ = "inferred";
		}else if (s2.indexOf('qualifier="quest')>-1){
			sdQ = "questionable";
		}
	}else if(s3.indexOf('point="start"')>-1){
    		sd_begin=s3.indexOf('point="start">')+14;
    		sd      = s3.substring(sd_begin);
		if(s3.indexOf('qualifier="approx')>-1){
			sdQ ="approximate";
		}else if (s3.indexOf('qualifier="infer')>-1){
			sdQ = "inferred";
		}else if (s3.indexOf('qualifier="quest')>-1){
			sdQ = "questionable";
		}
	}else{
		alert("mods:dateCreated ERROR");
		return;
	}

	var sd_end  = sd.indexOf("</mods");
    	sd      = sd.substring(0,sd_end);
    	alert("sd=start date:\n"+sd);


	if (s2.indexOf('point="end"')>-1){//date range end date
    		ed_begin=s2.indexOf('point="end">')+12;
    		ed      = s2.substring(ed_begin);
		if(s2.indexOf('qualifier="approx')>-1){
			edQ ="approximate";
		}else if (s2.indexOf('qualifier="infer')>-1){
			edQ = "inferred";
		}else if (s2.indexOf('qualifier="quest')>-1){
			edQ = "questionable";
		}
	}else if(s3.indexOf('point="end"')>-1){
    		ed_begin=s3.indexOf('point="end">')+12;
    		ed      = s3.substring(ed_begin);
		if(s3.indexOf('qualifier="approx')>-1){
			edQ ="approximate";
		}else if (s3.indexOf('qualifier="infer')>-1){
			edQ = "inferred";
		}else if (s3.indexOf('qualifier="quest')>-1){
			edQ = "questionable";
		}
	}else{
		alert("mods:dateCreated ERROR");
		return;
	}
	
	var ed_end  = ed.indexOf("</mods");
    	ed      = ed.substring(0,sd_end);
    	alert("ed=end date:\n"+ed);

	parent.U.document.UF.date_created_begin.value = sd;
	parent.U.document.UF.date_created_beginQ.value = sdQ;
	parent.U.document.UF.date_created_end.value = ed;
	parent.U.document.UF.date_created_endQ.value = edQ;

}else{//single date only date
alert("single date - only date");
	parent.U.document.UF.date_created_begin.value = "";
	parent.U.document.UF.date_created_beginQ.value = "";
	parent.U.document.UF.date_created_end.value = "";
	parent.U.document.UF.date_created_endQ.value = "";

	od_begin = s1.indexOf(">") +1;
	od_end   = s1.indexOf("</mods:dateCreated>");
	od	 = s1.substring(od_begin,od_end);
	alert("od=only date=\n"+od);
                if(s1.indexOf('qualifier="approx')>-1){
                        odQ ="approximate";
                }else if (s1.indexOf('qualifier="infer')>-1){
                        odQ = "inferred";
                }else if (s1.indexOf('qualifier="quest')>-1){
                        odQ = "questionable";
                }

	parent.U.document.UF.date_created.value=od;
	parent.U.document.UF.date_createdQ.value=odQ;
}

//date issued
var s3 = new String();
	s3_begin = t1.indexOf("<mods:dateIssued");
	s3_end   = t1.indexOf("</mods:dateIssued>")+18;
	s3       = t1.substring(s3_begin,s3_end);
	//alert("t1=\n"+t1);
	//alert("s3=\n"+s3);
var di = new String(); //dateIssued
var diQ = new String(); //date Issued qualifier
	di_begin = s3.indexOf(">")+1;
	di_end   = s3.indexOf("</mods");
	di       = s3.substring(di_begin,di_end);
                if(s3.indexOf('qualifier="approx')>-1){
                        diQ ="approximate";
                }else if (s3.indexOf('qualifier="infer')>-1){
                        diQ = "inferred";
                }else if (s1.indexOf('qualifier="quest')>-1){
                        diQ = "questionable";
                }
	parent.U.document.UF.date_issued.value=di;
	parent.U.document.UF.date_issuedQ.value=diQ;

//publisher name

var s4 = new String();
        s4_begin = t1.indexOf("<mods:placeTerm");
        s4_end   = t1.indexOf("</mods:placeTerm>")+17;
        s4       = t1.substring(s4_begin,s4_end);
	alert("s4=\n"+s4);
var pn = new String();
	pn_begin = s4.indexOf(">")+1;
	pn_end   = s4.indexOf("</mods:placeTerm");
	pn       = s4.substring(pn_begin,pn_end);
	parent.U.document.UF.publisher_name.value=pn;

//publisher address
   
var s5 = new String();
        s5_begin = t1.indexOf("<mods:publisher");
        s5_end   = t1.indexOf("</mods:publisher>")+17;
        s5       = t1.substring(s5_begin,s5_end);
	alert("s5=\n"+s5);
var pa = new String();
	pa_begin = s5.indexOf(">")+1;
	pa_end   = s5.indexOf("</mods:publisher");
	pa       = s5.substring(pa_begin,pa_end);
	parent.U.document.UF.publisher_address.value=pa;

//prev pub
if (pn.length>0 || pa.length>0 || di.length > 0){
	parent.U.document.UF.prev_publish[0].selected=true;
}else{
	parent.U.document.UF.prev_publish[1].selected=true;
}

}//end function reload_page_02()
