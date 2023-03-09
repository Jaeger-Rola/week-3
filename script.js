//Variable Defintions
var length = 17;
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','#','$','%','^','&','*','(',')','-','_','+','='];

var thePassword = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompts and Results
function ask () {
  length = parseInt(prompt("Pick between 8 - 128 characters"));

  if (isNaN(length) || length < 8 || length > 128) { 
    console.log ("User input invalid value")
    alert("Character has to be between 8-12 characters");
    return false; 
  }

  if (confirm("Do you wanna include uppercase letters?")) {
  console.log("User is including uppercase letters")
  thePassword = thePassword.concat(upperCase); 
  } else console.log("User is not including uppercase letters")

  if (confirm("Do you wanna include lowercase letters?")) {
  console.log("User is including lowercase letters")
  thePassword = thePassword.concat(lowerCase); 
  } else console.log("User is not including lowercase letters")


  if (confirm("Do you wanna include numbers?")) {
  console.log("User is including numbers")
  thePassword = thePassword.concat(number); 
  } else console.log("User is not including numbers")

  if (confirm("Do you wanna include special characters?")) {
  console.log("User is including special characters")
  thePassword = thePassword.concat(special); 
  } else console.log("User is not including special characters")

  return true;
     
}

// Write password to the #password input
function writePassword() {
  console.log("User initiated password making process")
  var valid = ask ();
if (valid) {
  console.log ("Password created")
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}
  
function generatePassword() {
  var password ="";
  for(var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * thePassword.length);
    password = password + thePassword[random];
  }
  return password;
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

