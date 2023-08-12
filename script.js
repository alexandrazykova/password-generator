// Define character sets
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

// Function to generate a random character from a string
function getRandomChar(charSet) {
  var randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet[randomIndex];
}

// Function to generate a password
function generatePassword() {
  var password = "";
  var selectedChars = "";

  // Prompt for password length
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters):"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  // Prompt for characters types
  var includeLowercase = confirm("Do you want to include lowercase letters?");
  var includeUppercase = confirm("Do you want to include uppercase letters?");
  var includeNumbers = confirm("Do you want to include numbers?");
  var includeSpecialChars = confirm("Do you want to include special characters? (ex. @#!$&*...)");

  // Build the selected character set based on user choice
  if (includeLowercase) {
    selectedChars += lowerCase;
  }
  if (includeUppercase) {
    selectedChars += upperCase;
  }
  if (includeNumbers) {
    selectedChars += number;
  }
  if (includeSpecialChars) {
    selectedChars += specialChars;
  }
  // Alert window asking user to follow instructions
  if (selectedChars === "") {
    alert("Please select at least one character type");
    return;
  }


  // Generate the password
  for (var i = 0; i < passwordLength; i++) {
    password += getRandomChar(selectedChars);
  }

  return password;
}

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