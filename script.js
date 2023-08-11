// Defines character sets
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number= "0123456789";
var specialChars = "!@#$%^&*()_-+=<>?";

// Prompts for character types
var includeLowercase = confirm("Do you want to include lowercase letters?");
var includeUppercase = confirm("Do you want to include uppercase letters?");
var includeNumbers = confirm("Do you want to include numbers?");
var includeSpecialChars = confirm("Do you want to include special characters? (ex. @#!$&*...)");


// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* steps

- create series of prompts for password criteria

1.  length? at least 8 no more than 128
2.  type of characters?
    -lowercase?
    -uppercase?
    -numbers?
    -special characters?

- validate input and at least one character type should be selected
- generate password that matches selected criteria
- display password with alert/written to the page
*/