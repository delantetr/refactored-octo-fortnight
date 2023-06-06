// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialConfirm = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", '"', ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

function generatePassword() {
  console.log( "Click Confirmed");

  // 1. Prompt the user for the password criteria
var userInput = parseInt(prompt("How many characters will your password be?", "Must be between 8 and 128 characters"));
//    a. password length 8-128 characters
  if(userInput < 8 || userInput > 128) {
    alert("Please select a number between 8 and 128.");
  //    b. include lowercase, uppercase, numeric, special
  } else {
      var lowerCase = confirm("Would you like to include lower case characters?")
      var upperCase = confirm("Would you like to include upperCase characters?")
      // var numeric = confirm("Would you like to include numeric characters?")
      // var specialConfirm = confirm("Would you like to use special characters? (i.e. $,%,&)")
  // 2. Validate the input

  var result = []
  for(var i = 0; i < userInput; i++ ) {
      // console.log(i);
      var lowerLetter = Math.floor(Math.random() * lowerLetters.length);
      result.push(lowerLetters[lowerLetter])
      console.log(lowerLetters[lowerLetter])
  }
  for(var i = 0; i < userInput; i++ ) {
      console.log(i);
      var upperLetter = Math.floor(Math.random() * upperLetters.length);
      result.push(upperLetters[upperLetter])
    };
  


  // 3. Generate password






  }
  // 4. Display password on page
  return result;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);