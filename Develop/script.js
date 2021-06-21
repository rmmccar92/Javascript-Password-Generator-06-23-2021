// Assignment Code
var generateBtn = document.querySelector("#generate");

var pass = [];

var passLength;
var upperPrompt;
var lowerPrompt;
var numberPrompt;
var symbolPrompt;
var finalPass=""

number = ["0","1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9"]
symbol = ["~", "`", "!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" ,"(" , ")" , "_" , "+" , "-" , "=" , "[" , "]" , "{" ,"}" , ";" ,":" ,"'" ,"<" ,">" ,"," ,"." , "/" , "?"]
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x" , "y" ,"z"];
// Array will contain capitol letters
capital = [];
var choices = [];
// converts letters to uppercase 
var capitalize = function (x) {
  return x.toUpperCase();
};
letters2 = letters.map(capitalize);


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  passLength = parseInt(prompt("Password Length?"));{

    if(!passLength) {
      window.alert("Please enter a value.");
    }
  
   else if (passLength < 8 || passLength > 128) {
    passLength= parseInt(prompt("Password must be between 8 and 128 characters."));
  }
  

  else {
    symbolPrompt = confirm("Special Character? y/n");
    upperPrompt = confirm("Capitol Letters? y/n");
    lowerPrompt = confirm("Lowercase letters? y/n");
    numberPrompt = confirm("Numbers? y/n");
  };

console.log(passLength);
console.log(symbolPrompt);
console.log(upperPrompt);
console.log(lowerPrompt);
console.log(numberPrompt);



  // None true

  if (!upperPrompt && !lowerPrompt && !numberPrompt && !symbolPrompt) {
    return window.alert("You must select at least one type of character.");
  }

  // All true
  else if (upperPrompt && lowerPrompt && numberPrompt && symbolPrompt) {
    choices += letters.concat(letters2, number, symbol);
    
  }

  // Just symcheck false

  else if (upperPrompt && lowerPrompt && numberPrompt && !symbolPrompt) {
    choices += letters.concat(number, letters2);

  }

  // Just Numbercheck false

  else if (upperPrompt && lowerPrompt && !numberPrompt && symbolPrompt) {
    choices += letters.concat(letters2, symbol);
    
  }

  // Just lowercheck false

  else if (upperPrompt && !lowerPrompt && numberPrompt && symbolPrompt) {
    choices += letters2.concat(number, symbol);
    
  }

  // Just UperCheck false

  else if (!upperPrompt && lowerPrompt && numberPrompt && symbolPrompt) {
    choices += letters.concat(number, symbol);
    
  }

  // Uppercheck and lowercheck false

  else if (!upperPrompt && !lowerPrompt && numberPrompt && symbolPrompt) {
    choices += number.concat(symbol);
  }

  // Uppercheck and numbercheck false

  else if (!upperPrompt && lowerPrompt && !numberPrompt && symbolPrompt) {
    choices += letters.concat(symbol);
  }

  // Uppercheck and symbolcheck false

  else if (!upperPrompt && lowerPrompt && numberPrompt && !symbolPrompt) {
    choices += letters.concat(number);
  }

  // lowercheck and numbercheck false

  else if (upperPrompt && !lowerPrompt && numberPrompt && !symbolPrompt) {
    choices += letters2.concat(symbol);
  }

  // lowercheck and symbolcheck false

  else if (upperPrompt && !lowerPrompt && numberPrompt && !symbolPrompt) {
    choices += letters2.concat(number);
  }

  // numbercheck and symbolcheck false

  else if (upperPrompt && lowerPrompt && !numberPrompt && !symbolPrompt) {
    choices += letters.concat(letters2);
  }

  // Uppercheck lowercheck and numbercheck false

  else if (!upperPrompt && !lowerPrompt && !numberPrompt && symbolPrompt) {
    choices += symbol;
  }

  // Uppercheck lowercheck and symbolcheck false

  else if (!upperPrompt && !lowerPrompt && numberPrompt && !symbolPrompt) {
    choices += number;
  }

  // Uppercheck numbercheck and symbolcheck false

  else if (!upperPrompt && lowerPrompt && !numberPrompt && !symbolPrompt) {
    choices += letters;
  }

  // lowercheck numbercheck and symbolcheck false

  else if (upperPrompt && !lowerPrompt && !numberPrompt && !symbolPrompt) {
    choices += capital.concat(letters2);
  };

  for (i = 0; i<=passLength; i++) {
    var randomize = choices[Math.floor(Math.random() * choices.length)];
    pass.push(randomize);
  }

  var finalPass = pass.join("");
  Input(finalPass);
  return finalPass;
  }

  function Input(finalPass){
  document.getElementById("password").textContent= finalPass

  window.alert(finalpass)

}
}

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