function run() {
// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdLength  //holds the password length
var lower = confirm("Would you like the password to include LOWERcase characters?");
var upper = confirm("Would you like the password to contain UPPERcase characters?");
var nums = confirm("Would you like the password to contain NUMBERS?");
var symbols = confirm("Would you like the password to contain SYMBOLS?");
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var numeric = "0123456789 ".split("");
var symbol = "!@#$%^&*".split("");
var pwdOptions = [];
var password = [];

var options  //holds the kinds of options
//lower is 1
//upper is 2
//number is 3
//symbol is 4

function collectPwdLength () {
    pwdLength = prompt("How long would you like the password to be?");
    while (pwdLength < 8 || pwdLength > 128) {
        alert("Sorry, the password length must be at least 8 characters and no more than 128 characters. Please select a valid length between 8 and 128.");
        pwdLength = prompt("How long would you like the password to be?");
    }
    alert("Password length will be " + pwdLength);
}

// function setOptionsArray (pwdLength) {
//     for (var g=0; g < .length; g++){

//     }
// }

collectPwdLength();

if (pwdLength < 8 || pwdLength > 128){
    alert("Sorry, the password length must be at least 8 characters and no more than 128 characters. Please select a valid length between 8 and 128.")
    prompt("How long would you like the password to be?");
}


// I added this loop just to see if it had any issues storing any of the symbold in the Array
for (var k=0; k < symbol.length; k++){
    console.log("The symbol is " + symbol[k] );
}

function generateChar (ar) {
    var num = Math.floor(Math.random() * ar.length);
    return ar[num];
}



console.log("Randomly generated Number " + generateChar (numeric));


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}