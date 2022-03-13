// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// User preferences for password

window.alert("Welcome, please answer the following questions to create your randomly generated password. Click 'OK' to continue to first question.");

const lowerCase = window.confirm("Would you like lowercase letters? Click 'OK' to accept or click cancel if you would not like lowercase letters in your password." );

const upperCase = window.confirm("Would you like uppercase letters? Click 'OK' to accept or click cancel if you would not like uppercase letters in your password." );

const numbers = window.confirm("Would you like numbers? Click 'OK' to accept or click cancel if you would not like numbers in your password." );

const specialCharacters = window.confirm("Would you like special characters? (eg. ! & $ * =) Click 'OK' to accept or click cancel if you would not like special characters in your password." );

let passwordLength = window.prompt("Please enter length of password you would like. (8-128)");

//create generatePassword function

function generatePassword() {

// if statements to add user arrray choices to draw group

let drawGroup = [];

if (lowerCase === true) {
  drawGroup.push ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
}

if (upperCase === true) {
  drawGroup.push ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
}

if (numbers === true) {
  drawGroup.push ("0","1","2","3","4","5","6","7","8","9");
}

if (specialCharacters === true) {
  drawGroup.push (" ","!","''","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~")
}

// convert password length to integer

passwordLength = Number(passwordLength);

// random draw from drawGroup looped and added into final array

let finalArray = [];
  
function passwordCharacters () {
  return drawGroup[Math.floor(Math.random() * drawGroup.length)];
}

for (let index = 0; index < passwordLength; index++) {
   finalArray.push (passwordCharacters())
  }


// final array conversion to string
return finalArray = finalArray.join("");

};
