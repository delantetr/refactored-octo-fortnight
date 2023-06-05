// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  
  var userInput = prompt("How many characters will your password be?", "Must be between 8 and 128 characters");

  if(userInput < 8 || userInput > 128) {
    alert("Please select a number between 8 and 128.");
  } else {
      var lowerCase = confirm("Would you like to include lower case characters?")
      var upperCase = confirm("Would you like to include upperCase characters?")
      var numeric = confirm("Would you like to include numeric characters?")
      var specialConfirm = confirm("Would you like to use special characters? (i.e. $,%,&)")
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  
  var password = []

  if(userInput > 8 || userInput < 128) {
    password.push(...userInput)
  }
  if(lowerCase) {
    var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    password.push(...lowerLetters)
  }
  if(upperCase) {
    var upperLetters = lowerLetters.toUpperCase()
    password.push(...upperLetters)
  }
  
  password.textContent = password
}











  

//   function password(){
    
//     if(userInput > 8 || userInput < 128 && lowerCase && upperCase && numeric && specialConfirm) {
//     generatePassword();

//     }
//   }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
