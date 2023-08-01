function validate(){
var email = document.forms["myForm"]["email"];
var password = document.forms["myForm"]["password"];
var error =document.getElementById("error");
  if(email.value.length < 15){
    error.style.display="block";
    email.focus();
    return false;
  }
  else{
    error.style.display="none";
  }
  if(password.value.length <6){
    errorpass.style.display="block";
    password.focus();
    return false;
  }
  else{
    errorpass.style.display="none";
  }
  if(email.value.length >= 15,password.value.length >=6)
  {
    error.style.display="none";
    errorpass.style.display="none";
    return true;
  }
  }