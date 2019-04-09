<html>
<head>
<title>ex1.1</title>
<script language="VBScript">
<!---
Sub Button01_OnClick
	Dim TheForm
	Set TheForm = Document.BabyNameForm
	If Len(TheForm.B_F_Name.Value)<1 Then
	  MsgBox "Please enter Baby's first name in the text box."
        Else
          MsgBox "Baby's first name: "& TheForm.B_F_Name.Value 
        End If
End Sub 
''''''''Button01_OnClick

Sub Button02_OnClick
	Dim TheForm
	Set TheForm = Document.BabyNameForm
	If Len(TheForm.B_M_Name.Value)<1 Then
	  MsgBox "Please enter Baby's middle name in the text box."
        Else
          MsgBox "Baby's first name: "& TheForm.B_M_Name.Value 
        End If
End Sub
''''''''Button02_OnClick

Sub Button03_OnClick
	Dim TheForm
	Set TheForm = Document.BabyNameForm
	If Len(TheForm.B_L_Name.Value)<1 Then
	  MsgBox "Please enter Baby's last name in the text box."
        Else
          MsgBox "Baby's last name: "& TheForm.B_L_Name.Value 
        End If
End Sub
''''''''Button03_OnClick

'''see page 219 vbs book

''' see page 250 vbs book
Sub Button04_OnClick 
	Dim ThisForm
        Set ThisForm = Document.BorG
	Dim intLength, intSelected, intCtr
	Dim strResult     
        Dim TextResult(3)
	TextResult(0) = "None Selected Yet"
        TextResult(1) = "Boy" 
        TextResult(2) = "Girl"
	Dim CRLF	
	Dim objOption
	CRLF = Chr(13) & Chr(10) '''car ret and line feed 
	Set objSel = ThisForm.selGender
	strResult = "Gender:    "   
	strResult = strResult & TextResult(objSel.Options.SelectedIndex)
        strResult = strResult & CRLF
	
	MsgBox strResult 
End Sub 
''''''''End Sub Button04_OnClick

Sub Button05a_OnClick '''integer day of month
        Dim ThisForm
        Set ThisForm = Document.DateConv
        Dim intLength, intSelected, intCtr
        Dim strResult
        Dim D_O_MONTH(32)
        D_O_MONTH(0)  = "0"
        D_O_MONTH(1)  = "1"
        D_O_MONTH(2)  = "2"
        D_O_MONTH(3)  = "3"
        D_O_MONTH(4)  = "4"
        D_O_MONTH(5)  = "5"
        D_O_MONTH(6)  = "6"
        D_O_MONTH(7)  = "7"
        D_O_MONTH(8)  = "8"
        D_O_MONTH(9)  = "9"
        D_O_MONTH(10) = "10"
        D_O_MONTH(11) = "11"
        D_O_MONTH(12) = "12"
        D_O_MONTH(13) = "13"
        D_O_MONTH(14) = "14"
        D_O_MONTH(15) = "15"
        D_O_MONTH(16) = "16"
        D_O_MONTH(17) = "17"
        D_O_MONTH(18) = "18"
        D_O_MONTH(19) = "19"
        D_O_MONTH(20) = "20"
        D_O_MONTH(21) = "21"
        D_O_MONTH(22) = "22"
        D_O_MONTH(23) = "23"
        D_O_MONTH(24) = "24"
        D_O_MONTH(25) = "25"
        D_O_MONTH(26) = "26"
        D_O_MONTH(27) = "27"
        D_O_MONTH(28) = "28"
        D_O_MONTH(29) = "29"
        D_O_MONTH(30) = "30"
        D_O_MONTH(31) = "31"

        Set objSel = ThisForm.selDOM   
        strResult = "Day Of Month:    "
        strResult = strResult & D_O_MONTH(objSel.Options.SelectedIndex)

        MsgBox strResult
End Sub
''''''''End Sub Button05a_OnClick


Sub Button05b_OnClick '''integer month of year
        Dim ThisForm
        Set ThisForm = Document.DateConv
        Dim intLength, intSelected, intCtr
        Dim strResult
        Dim M_O_YEAR(13)
        M_O_YEAR(0)  = "0"
        M_O_YEAR(1)  = "1"
        M_O_YEAR(2)  = "2"
        M_O_YEAR(3)  = "3"
        M_O_YEAR(4)  = "4"
        M_O_YEAR(5)  = "5"
        M_O_YEAR(6)  = "6"
        M_O_YEAR(7)  = "7"
        M_O_YEAR(8)  = "8"
        M_O_YEAR(9)  = "9"
        M_O_YEAR(10) = "10"
        M_O_YEAR(11) = "11"
        M_O_YEAR(12) = "12"

        Set objSel = ThisForm.selMOY   
        strResult = "Month Of Year:    "

        strResult = strResult & M_O_YEAR(objSel.Options.SelectedIndex)

        MsgBox strResult
End Sub
''''''''End Sub Button05b_OnClick

Sub Button05c_OnClick '''integer 4digit year  
        Dim ThisForm
        Set ThisForm = Document.DateConv
        Dim intLength, intSelected, intCtr
        Dim strResult

        DIM YEAR_4DIG(12)
        YEAR_4DIG(0) ="1999"
        YEAR_4DIG(1) ="1999"
        YEAR_4DIG(2) ="2000"
        YEAR_4DIG(3) ="2001"
        YEAR_4DIG(4) ="2002"
        YEAR_4DIG(5) ="2003"
        YEAR_4DIG(6) ="2004"
        YEAR_4DIG(7) ="2005"
        YEAR_4DIG(8) ="2006"
        YEAR_4DIG(9) ="2007"
        YEAR_4DIG(10)="2008"
        YEAR_4DIG(11)="2009"
        
        Dim objSelYEAR
        Set objSelYEAR = ThisForm.selYEAR  

        strResult = "Four Digit Year:    "

        strResult = strResult & YEAR_4DIG(objSelYEAR.Options.SelectedIndex)

        MsgBox strResult
End Sub
''''''''End Sub Button05c_OnClick

</script>
</head>
<body bgcolor="88eeff" text="000000">
<p>
This is an asp file.  ex1.4b.asp
<p>
<hr>
<p>
<FORM NAME="BabyNameForm">
<br>
<table border=2 >

<td>
Please, enter the Baby's first name:
</td>
<td>
<INPUT TYPE="TEXT"     NAME="B_F_Name" SIZE=25>
</td>
</tr><tr>
<td>
Please check the spelling of the Baby's first name.  
</td>
<td>
<INPUT TYPE="BUTTON"   NAME="Button01" VALUE="Check Baby's First Name">
</td>
</tr>

<td>
Please, enter the Baby's middle name:
</td>
<td>
<INPUT TYPE="TEXT"     NAME="B_M_Name" SIZE=25>
</td>
</tr><tr>
<td>
Please check the spelling of the Baby's middle name.  
</td>
<td>
<INPUT TYPE="BUTTON"   NAME="Button02" VALUE="Check Baby's Middle Name">
</td>
</tr>

<td>
Please, enter the Baby's last name:
</td>
<td>
<INPUT TYPE="TEXT"     NAME="B_L_Name" SIZE=25>
</td>
</tr><tr>
<td>
Please check the spelling of the Baby's last name.  
</td>
<td>
<INPUT TYPE="BUTTON"   NAME="Button03" VALUE="Check Baby's Last Name">
</td>
</tr>



</table>
</FORM> </---Form is named "BabyNameForm">
<p>
<hr><hr><hr>
<p>

<p>
Using HTML Select Control
<p>
<Form Name="BorG">
<Select Name="selGender">
<Option Selected> Boy or Girl?
<Option> Boy
<Option> Girl
</Select>
<p>
<INPUT NAME="BUTTON04" TYPE="Button" Value="ShowBabyGender">
</FORM> </---Form is named "BorG">
<p>
<hr><hr><hr>

Enter Baby's birth date.
<FORM Name="DateConv">
<table border=2>

<tr><td>
Please select  Day-of-month
</td><td>
<Select Name="selDOM">
<OPTION SELECTED>Day-of-month
<OPTION> 1
<OPTION> 2
<OPTION> 3
<OPTION> 4
<OPTION> 5
<OPTION> 6
<OPTION> 7
<OPTION> 8
<OPTION> 9
<OPTION> 10
<OPTION> 11
<OPTION> 12
<OPTION> 13
<OPTION> 14
<OPTION> 15
<OPTION> 16
<OPTION> 17
<OPTION> 18
<OPTION> 19
<OPTION> 20
<OPTION> 21
<OPTION> 22
<OPTION> 23
<OPTION> 24
<OPTION> 25
<OPTION> 26
<OPTION> 27
<OPTION> 28
<OPTION> 29
<OPTION> 30
<OPTION> 31
</select>
</td><td>
<INPUT NAME="Button05a" TYPE="Button" Value="Check Day Of Month">
</td></tr>

<tr><td>
Please enter integer Month
</td><td>
<SELECT Name="selMOY">
<OPTION SELECTED> Month-of-year 
<OPTION>January
<OPTION>February
<OPTION>March
<OPTION>April    
<OPTION>May
<OPTION>June
<OPTION>July     
<OPTION>August
<OPTION>September
<OPTION>October  
<OPTION>November
<OPTION>December
</SELECT>
</td><td>
<INPUT NAME="Button05b" TYPE="Button" Value="Check Month">
</td></tr>

<tr><td>
Please enter 4-digit Year.<br>--aa--b--c
</td><td>
<SELECT NAME="selYEAR">
<OPTION SELECTED>1999
<OPTION>1999
<OPTION>2000
<OPTION>2001
<OPTION>2002
<OPTION>2003
<OPTION>2004
<OPTION>2005
<OPTION>2006
<OPTION>2007
<OPTION>2008
<OPTION>2009
</select>
&nbsp;&nbsp;
</td><td>
<INPUT NAME="Button05c" TYPE="Button" Value="Check Year">
</td></tr>

<tr><td>
Please check the final form of the Baby's Birthdate.
</td><td>
<INPUT NAME="Button05d" TYPE="Button" Value="Check Final Form Of BirthDate"></td
</td></tr>
</table>

</FORM></---Form is named "DateConv">
</body>
</html>




