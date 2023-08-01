function validateForm(){

var iname = document.forms["Fname"]["iname"].value;
var ename =  document.forms["Fname"]["ename"].value;
var nname =  document.forms["Fname"]["nname"].value;
var cname =  document.forms["Fname"]["cname"].value;
var yname =  document.forms["Fname"]["yname"].value;
var errorname = document.getElementById("errorname");
var erroremail = document.getElementById("erroremail");
var errornumber = document.getElementById("errornumber");
var errorcname = document.getElementById("errorcname");
var erroryname = document.getElementById("erroryname");
var errorfield = document.getElementById("errorfield");
var errordomain = document.getElementById("errordomain");
var field = document.getElementById("field").value;
var domain = document.getElementById("domain").value;
var returnval = true;
if(iname.length < 10){
   errorname.style.display="block";
   returnval = false;
   return returnval;
  }
  else if(iname.length >= 10){
   errorname.style.display="none";
  }
  if(ename.length < 15){
    erroremail.style.display="block";
    returnval = false;
   return returnval;
   }
   else{
      erroremail.style.display="none";
   }
   if(nname.length < 10){
      errornumber.style.display="block";
      returnval = false;
      return returnval;
     }
     else{
        errornumber.style.display="none";
     }
   if(cname.length < 10){
      errorcname.style.display="block";
      returnval = false;
      return returnval;
   }
   else{
      errorcname.style.display="none";
   }
   if(yname.length < 5){
      erroryname.style.display="block";
      returnval = false;
      return returnval;
   }
   else{
      erroryname.style.display="none";
   }
  
   if(field.length < 3){
    errorfield.style.display="block";
    returnval = false;
    return returnval;
   }
   else{
      errorfield.style.display="none";
   }
   if(field.length < 3){
    errorfield.style.display="block";
    returnval = false;
    return returnval;
   }
   else{
      errorfield.style.display="none";
   }
   if(domain.length < 3){
    errordomain.style.display="block";
    returnval = false;
    return returnval;
   }
   else{
    errordomain.style.display="none";
   }
   if(iname.length >= 10 && ename.value.length >= 15 && nname.value.length >= 10 && field.value.length >= 3 && domain.value.length >= 3){
      errorname.style.display="none";
      erroremail.style.display="none";
      errornumber.style.display="none";
      errordomain.style.display="none";
      errorfield.style.display="none";
      returnval = true;
      return returnval;
   }
}

