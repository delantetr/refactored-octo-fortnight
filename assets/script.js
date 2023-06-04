// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
    var userInput = prompt("How many characters will your password be?", "Must be between 8 and 128 characters");
    if(userInput !=)
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
