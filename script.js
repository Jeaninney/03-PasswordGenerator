// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdLength = prompt("How long would you like the password to be?");
var lower = confirm("Would you like the password to include LOWERcase characters?");
var upper = confirm("Would you like the password to contain UPPERcase characters?");
var nums = confirm("Would you like the password to contain NUMBERS?");
var symbols = confirm("Would you like the password to contain SYMBOLS?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
