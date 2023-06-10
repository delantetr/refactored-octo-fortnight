// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_+<>?";
var result = "";




function generatePassword() {
  // Ensures click is being recieved.
  console.log( "Click Confirmed");

// 1. Prompt the user for the password criteria
  var userInput = parseInt(prompt("How many characters will your password be?", "Must be between 8 and 128 characters"));
  
// 2. Validate the input
  if (isNaN(userInput) || userInput < 8 || userInput > 128) {
    alert("Invalid input. Please select a number between 8 and 128.");
    return;
  }

  
// 3. Include lowercase, uppercase, numeric, special
    var lowerLetters = confirm("Would you like to include lower case characters?")
    var upperLetters = confirm("Would you like to include upperCase characters?")
    var numeric = confirm("Would you like to include numeric characters?")
    var specialConfirm = confirm("Would you like to use special characters? (i.e. $,%,&)")

    // Ensures at least one character is selected
  if (!lowerLetters && !upperLetters && !numeric && !specialConfirm) {
    alert("Please select at least one character type.");
  }
      
// 4. Generate password
  var allChars = "";
  if (lowerLetters) {
    allChars += lowerCase
  }
  if (upperLetters) {
    allChars += upperCase
  }
  if (numeric) {
    allChars += numbers
  }
  if (specialConfirm) {
    allChars += specialChar
  }
  console.log(allChars);

  for (var i = 0; i < userInput; i++) {
    var randomChar = Math.floor(Math.random() * allChars.length);
    result += allChars[randomChar];
  }

  return result;
}

// 5. Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

// 6. Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




