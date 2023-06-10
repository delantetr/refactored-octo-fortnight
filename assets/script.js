// Assignment Code
var generateBtn = document.querySelector("#generate");
// var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", '"', ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
// var options = []
// var result = []

function generatePassword() {
  console.log( "Click Confirmed");

//   // 1. Prompt the user for the password criteria
//   var userInput = parseInt(prompt("How many characters will your password be?", "Must be between 8 and 128 characters"));
// //    a. password length 8-128 characters
//   if(userInput < 8 || userInput > 128) {
//     alert("Please select a number between 8 and 128.");
//     //  b. include lowercase, uppercase, numeric, special
//   } else {

//   userInput = length
//       var lowerCase = confirm("Would you like to include lower case characters?")
//         if(lowerCase) {
//           options.push(...lowerLetters)
//         }
//       var upperCase = confirm("Would you like to include upperCase characters?")
//         if(upperCase) {
//         options.push(...upperLetters)
//         }
//       var numeric = confirm("Would you like to include numeric characters?")
//         if(numeric) {
//         options.push(numbers)
//         }
//       var specialConfirm = confirm("Would you like to use special characters? (i.e. $,%,&)")
//         if(specialConfirm) {
//         options.push(specialChar)
//         }
//     }
        

//   // 2. Validate the input
//   console.log("Number of characters selected by user--------------");
//   console.log(userInput);
//   console.log("Options for password selection----------------------");
//   console.log(options);

  // 3. Generate password
  


  // 
  //   console.log(lowerLetter[i])
    // result.push(lowerLetters[lowerLetter])
  // }
  // for(var i = 0; i < userInput; i++) {
    // var upperLetter = Math.floor(Math.random() * upperLetters.length);
    // result.push(upperLetters[upperLetter])
  // }
    // var numeral = Math.floor(Math.random() * numbers.length);
    // result.push(numbers[numeral])
    // var special = Math.floor(Math.random() * specialChar.length);
    // result.push(specialChar[special]) 
  


  // console.log(result)
  
  // 4. Display password on page
  // for(var i = 0; i < userInput; i++) {
  //   options = Math.floor(Math.random() * userInput.length)
  // }

  // return result;

}


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }






// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);