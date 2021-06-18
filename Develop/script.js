// Assignment Code
var generateBtn = document.querySelector("#generate");

var pass = "";

var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxy0123456789~!@#$%^&*'";

var str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxy0123456789";

var specChar = prompt("Special Character? y/n");
// Allows us to use the user input at the password length I though I would have to convert it from a string to a number but it seems to work this way
var passLength = prompt("Password Length?");


// Write password to the #password input
function generatePassword() {
  // for loop is saying when this item is = 1 but < or equal to x increment by 1
  // in other words while this generated number is under x keep incrementing by one and then stop when you hit 10
  // this allows us to run the code for each letter in our password making it unique every time
  for (i = 1; i <= passLength; i++) {
// if the user types y it will pull from the string with special character if they type n it will pull from the string without special characters
    if (specChar === "y"){ 
// defines our variable of char randomly by using math functions
    var char = Math.floor(Math.random() * str.length + 1);
   pass += str.charAt(char);
}
   else if (specChar === "n") {
    var char2 = Math.floor(Math.random() * str2.length +1 );
    pass += str2.charAt(char2);
  }
// charAt returns the character at the specified location
//+= is the sane as saying pass = pass + string
// so by using these three arguments we are finding a random place in the string defined as char and then returning those values to the variable pass
 
  }
  return pass
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */