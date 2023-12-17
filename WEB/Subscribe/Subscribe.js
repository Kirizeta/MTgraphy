function formValidation(){
var uname = document.registration.username;
var ucountry = document.registration.country;
var unumber = document.registration.number;
var uemail = document.registration.email;
{

if(val_name(uname))
{
if(countryselect(ucountry))
{
if(val_number(unumber))
{
if(val_email(uemail))
{
{
}
} 
}
} 
}
}

return false;
}

function val_name(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Name must have alphabet characters only');
uname.focus();
return false;
}
}

function val_email(uemail)
{ 
var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(uemail.value.match(email))
{
return true;
}
else
{
alert('Email must contain "@" and ".com" to proceed');
uemail.focus();
return false;
}
}

function val_number(unumber)
{ 
var numbers = /^[0-9]+$/;
if(unumber.value.match(numbers))
{
return true;
}
else
{
alert('Number must have numeric characters only');
unumber.focus();
return false;
}
}

function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}

