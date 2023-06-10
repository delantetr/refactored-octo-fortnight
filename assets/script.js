// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_+<>?";
var result = "";




function generatePassword() {
  console.log( "Click Confirmed");

// 1. Prompt the user for the password criteria
  var userInput = parseInt(prompt("How many characters will your password be?", "Must be between 8 and 128 characters"));
  
// 2. Validate the input
  if (isNaN(userInput) || userInput <= 0) {
    console.log("Invalid input. Please select a number between 8 and 128.");
    return;
  }

  
// 3. Include lowercase, uppercase, numeric, special
    var lowerLetters = confirm("Would you like to include lower case characters?")
    var upperLetters = confirm("Would you like to include upperCase characters?")
    var numeric = confirm("Would you like to include numeric characters?")
    var specialConfirm = confirm("Would you like to use special characters? (i.e. $,%,&)")


      
    }
// 4. Generate password

// 5. Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







// 7. Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




