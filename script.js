function run() {
// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdLength  //holds the password length
var lower //set in collectPwdOptions.  = confirm("Would you like the password to include LOWERcase characters?");
var upper //set in collectPwdOptions.  = confirm("Would you like the password to contain UPPERcase characters?");
var nums //set in collectPwdOptions.  = confirm("Would you like the password to contain NUMBERS?");
var symbols //set in collectPwdOptions.  = confirm("Would you like the password to contain SYMBOLS?");
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var numeric = "0123456789 ".split("");
var symbol = "!@#$%^&*".split("");
var pwdOptions = [];
var password = [];
var optionNotChosen = true;

var options = [lower, upper, nums, symbols] //holds the kinds of options
for (var m=0; m <4; m++){
    pwdOptions[m]
}

function collectPwdLength () {
    pwdLength = prompt("How long would you like the password to be?");
    while (pwdLength < 8 || pwdLength > 128) {
        alert("Sorry, the password length must be at least 8 characters and no more than 128 characters. Please select a valid length between 8 and 128.");
        pwdLength = prompt("How long would you like the password to be?");
    }
    alert("Password length will be " + pwdLength);
}

function collectPwdOptions () {
    lower = confirm("Would you like the password to include LOWERcase characters?");
    if (lower){
        pwdOptions.push('l');
    }
    upper = confirm("Would you like the password to include UPPERcase characters?");
    if (upper){
        pwdOptions.push('u');
    }
    nums = confirm("Would you like the password to include Numbers?");
    if (nums){
        pwdOptions.push('n');
    }
    symbols = confirm("Would you like the password to include Symbols?");
    if (symbols){
        pwdOptions.push("s");
    }
    if (pwdOptions.length == 0){
        alert ("You must choose at least one type of character to be in your password. The options are Lowercase, Uppercase, Number and Symbol");
        collectPwdOptions();
    }
    
}
collectPwdLength();

// function setOptionsArray (pwdLength) {
//     for (var g=0; g < .length; g++){

//     }
// }

collectPwdOptions();

if (pwdLength < 8 || pwdLength > 128){
    alert("Sorry, the password length must be at least 8 characters and no more than 128 characters. Please select a valid length between 8 and 128.")
    prompt("How long would you like the password to be?");
}


// I added this loop just to see if it had any issues storing any of the symbold in the Array
for (var k=0; k < symbol.length; k++){
    console.log("The symbol is " + symbol[k] );
}

function selectOption () {

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