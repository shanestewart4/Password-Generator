
// Assignment code here
// variables

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var charNumber = "0123456789";
var charSpecial = "!@+?/|^];:'`~<,>.)_-&*#$%={}[(";
var passwordLength;
var pw = "";
var candidateString = "";

//Function for length of pw

function determineLength() {
    passwordLength = parseInt(prompt("How many characters do you want your password to contain? Password length bust be between 8 and 128."));
    // incorrect user input statement
    if (!passwordLength || passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
        passwordLength = null;
        window.alert("Please enter a Password Length numeric value between 8 and 128.");
        determineLength();
    }
    //correct user input statement
    else {
        alert("Thank you! Note: If you choose No for the following prompts, your password will consist only of lowercase letters.");
    }
    return passwordLength;
    
};


//Variables to include upper case letters, lower case letters, Numbers, and/or special characters (boolean true/false)

var confirmUpperCase = confirm("Do you want your password to include uppercase letters?")
var confirmLowerCase = confirm("Do you want your password to include lowercase letters?")
var confirmNumbers = confirm("Do you want your password to include numbers?")
var confirmSpecial = confirm("Do you want your password to include special characters?")

// combine true strings

function passString() {
    
    if (confirmUpperCase) {
        candidateString = candidateString + upperCase;
    }
    
    if (confirmLowerCase) {
        candidateString = candidateString + lowerCase;
    }
    
    if (confirmNumbers) {
        candidateString = candidateString + charNumber;
    }
    
    if (confirmSpecial) {
        candidateString = candidateString + charSpecial;
    }
    
    return candidateString;

};

// generate actual PW. referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random for the solution to this.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function generatePassword () {
    //loop that equals the character input
    for (var i = 0; i < passwordLength; i++) {
        var randIndex = getRandomInt(0, candidateString.length);
        pw = pw + candidateString[randIndex];
        console.log(randIndex);
    }
    //console.log(passwordLength);
    //console.log(candidateString);
    //console.log(pw);
    return pw;

};

determineLength();

passString();

generatePassword();






//---------------------v-DONT TOUCH-v-------------------------
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





