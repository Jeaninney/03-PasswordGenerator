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
var pwdOptionsArr = [];
var missingOptions = true;
var check;


function collectPwdLength () {
    pwdLength = prompt("How long would you like the password to be?");
    while (pwdLength < 4 || pwdLength > 128) {
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
function setPwdOptionsArr () {
        //This loop fills up my array with the options
        for (var q=0; q < pwdLength; q++){
        var nummy = Math.floor(Math.random() * pwdOptions.length); //selects the character address in the array
        pwdOptionsArr.push(pwdOptions[nummy]);
        }
        //This for loop is only for me to checkthat the array was written as expected
        for (var k=0; k < pwdOptionsArr.length; k++){
        console.log("The option in the array is " + pwdOptionsArr[k] );
        }
        console.log(pwdOptionsArr.indexOf("l"));
        console.log(pwdOptionsArr.indexOf("u"));
        console.log(pwdOptionsArr.indexOf("n"));
        console.log(pwdOptionsArr.indexOf("s"));
}
function checkForLower () {
    if ((lower) && pwdOptionsArr.indexOf("l")>-1) {
        return true;
    }
    else if (lower == false) {
        return true;
    }
    else {
        return false;
    }
}

function checkForUpper () {
    if ((upper) && pwdOptionsArr.indexOf("l")>-1) {
        return true;
    }
    else if (upper == false) {
        return true;
    }
    else {
        return false;
    }
}
function checkForNumber () {
    if ((nums) && pwdOptionsArr.indexOf("l")>-1) {
        return true;
    }
    else if (nums == false) {
        return true;
    }
    else {
        return false;
    }
}
function checkForSymbol () {
    if ((symbols) && pwdOptionsArr.indexOf("l")>-1) {
        return true;
    }
    else if (symbols == false) {
        return true;
    }
    else {
        return false;
    }
}

function setPassword () {
    for (y=0; y<pwdOptionsArr.length; y++){
        if (pwdOptionsArr[y] == "l"){
            password = password + alphabet[(Math.floor(Math.random() * alphabet.length))];
        }
        else if (pwdOptionsArr[y] == "u") {
            password = password + alphabet[(Math.floor(Math.random() * alphabet.length))].toUpperCase();
        }
        else if (pwdOptionsArr[y]=="n") {
            password = password + numeric[(Math.floor(Math.random() * numeric.length))];            
        }
        else {
            password = password + symbol[(Math.floor(Math.random() * symbol.length))];
        }
    }
    prompt(password);

}


collectPwdLength();
collectPwdOptions();
setPwdOptionsArr();

while (missingOptions) {
    if ((checkForLower)&&(checkForUpper)&&(checkForNumber)&&(checkForSymbol)){
    console.log("All good");
    missingOptions = false;
    }
    else {
    setPwdOptionsArr();
    missingOptions=true;
    }
}
setPassword();


// Write password to the #password input
function writePassword() {
//   var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}