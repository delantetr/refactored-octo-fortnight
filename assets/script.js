// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// Write password to the #password input
function writePassword() {
  
  var userInput = prompt("How many characters will your password be?", "Must be between 8 and 128 characters");
  console.log("User Input: " + userInput)

  if(userInput < 8 || userInput > 128) {
    alert("Please select a number between 8 and 128.");
  } else {
      var lowerCase = confirm("Would you like to include lower case characters?")
      console.log("Lower Case: " + lowerCase);
      var upperCase = confirm("Would you like to include upperCase characters?")
      console.log("Upper Case: " + upperCase);
      var numeric = confirm("Would you like to include numeric characters?")
      console.log("Numeric: " + numeric);
      var specialConfirm = confirm("Would you like to use special characters? (i.e. $,%,&)")
      console.log("Special Charac: " + specialConfirm);
  }

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//   var password = []

//   if(userInput > 8 || userInput < 128) {
//     password.push(...userInput)
//   }
//   if(lowerCase) {
    
//     password.push(...lowerLetters)
//   }
//   if(upperCase) {
//     var upperLetters = lowerLetters.toUpperCase()
//     password.push(...upperLetters)
//   }
  
//   password.textContent = password
// }

