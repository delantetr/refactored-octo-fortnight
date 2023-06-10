// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", '"', ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
var result = []
var characters = "";





function generatePassword() {
  console.log( "Click Confirmed");

  // 1. Prompt the user for the password criteria
  var userInput = parseInt(prompt("How many characters will your password be?", "Must be between 8 and 128 characters"));
  
  // 2. Validate the input
  if(userInput < 8 || userInput > 128) {
    alert("Please select a number between 8 and 128.");
  
    // 3. Include lowercase, uppercase, numeric, special
  } else {
    var lowerCase = confirm("Would you like to include lower case characters?")
      if(lowerCase) {
          var lowerLetter = Math.floor(Math.random() * lowerLetters.length);
          result.push(lowerLetters[lowerLetter])
        }
    var upperCase = confirm("Would you like to include upperCase characters?")
      if(upperCase) {
        var upperLetter = Math.floor(Math.random() * upperLetters.length);
        result.push(upperLetters[upperLetter])
        }
      var numeric = confirm("Would you like to include numeric characters?")
        if(numeric) {
        var numeral = Math.floor(Math.random() * numbers.length);
        result.push(numbers[numeral])
        }
      var specialConfirm = confirm("Would you like to use special characters? (i.e. $,%,&)")
        if(specialConfirm) {
        var special = Math.floor(Math.random() * specialChar.length);
        result.push(specialChar[special])
        }
    }
        
  
  
  
   

  // 4. Generate password
  for(var i = 0; i < userInput; i++ ) {
    Math.floor(Math.random() * result.length)
    }
  
  // 5. Display password on page
  return result;
}


// 6. Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// 7. Add event listener to generate button
generateBtn.addEventListener("click", writePassword);