// Arrays of possible characters

var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numerialsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialsArray = ['!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompts user for criteria and generates password
function generatePassword() {
  var passwordPool = []; // Array of possible characters for password to generate from
  var password = "";

  //Prompts user for each character type and creates pool of characters to generate from
  var passwordLength = prompt("Enter the password length (8 - 128 Characters):");
  if (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength)) {
    return "Not Valid Please Try Again";
  }

  var lowerCheck = confirm("Do you want lowercase letters in your password?");
  if (lowerCheck == true) {
    passwordPool = passwordPool.concat(lowercaseArray);
  }

  var upperCheck = confirm("Do you want uppercase letters in your password?");
  if (upperCheck == true) {
    passwordPool = passwordPool.concat(uppercaseArray);
  }

  var numerialCheck = confirm("Do you want numbers in your password?");
  if (numerialCheck == true) {
    passwordPool = passwordPool.concat(numerialsArray);
  }

  var specialCheck = confirm("Do you want special characters in your password?");
  if (specialCheck == true) {
    passwordPool = passwordPool.concat(specialsArray);
  }

  // Check if at least 1 criteria was added
  if (passwordPool.length == 0) {
    return "Please Select at least 1 criteria, Try Again";
  }

  passwordCriteriaCheck = 0;
  do {

    // Password generation
    for (var i = 0; i < passwordLength; i++) {
      password = password + passwordPool[Math.floor((Math.random() * passwordPool.length))];
    }

    // Validates that password contains at least one of each criteria
    var lowerValidation = false;
    var upperValidation = false;
    var numerialValidation = false;
    var specialValidation = false;

    // Checks each index of the password for existence of each type
    for (var x = 0; x < password.length; x++) {

      if (lowercaseArray.includes(password[x])) {
        lowerValidation = true;
      }
      if (uppercaseArray.includes(password[x])) {
        upperValidation = true;
      }
      if (numerialsArray.includes(password[x])) {
        numerialValidation = true;
      }
      if (specialsArray.includes(password[x])) {
        specialValidation = true;
      }
    }

    if (lowerValidation == lowerCheck && upperValidation == upperCheck && numerialValidation == numerialCheck && specialValidation == specialCheck) {
      passwordCriteriaCheck = 1;
    }


  }
  while (passwordCriteriaCheck == 0);

  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
