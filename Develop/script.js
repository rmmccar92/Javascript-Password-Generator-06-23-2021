// Assignment Code
var generateBtn = document.querySelector("#generate");

// These variables are left blank so that they can be filled by a later function
var pass = [];
var finalPass = ""

number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
symbol = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", ":", "'", "<", ">", ",", ".", "/", "?"]
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array will contain capitol letters
capital = [];
// Array will contain total combination of user choices
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
  // Uses the entered value from the length promt to determine password length 
  passLength = parseInt(prompt("Desired Password Length?")); {
    // stops the user from progressing without a value in the passLength prompt
    if (!passLength) {
      window.alert("Please enter a value.");
    }
    // Sets our limits from a minimum of 8 characters to a max of 128 characters
    else if (passLength < 8 || passLength > 128) {
      passLength = parseInt(prompt("Password must be between 8 and 128 characters."));
    }

    // Begins the choices check
    else {
      symbolPrompt = confirm("Would you like Special Characters?");
      upperPrompt = confirm("Would you like Capitol Letters?");
      lowerPrompt = confirm("Would you like Lowercase letters?");
      numberPrompt = confirm("Would you like Numbers?");
    };

    // None true

    if (!upperPrompt && !lowerPrompt && !numberPrompt && !symbolPrompt) {
      return window.alert("You must select at least one type of character.");
    }

    // All true
    else if (upperPrompt && lowerPrompt && numberPrompt && symbolPrompt) {
      choices = letters.concat(letters2, number, symbol);

    }

    // Just symcheck false

    else if (upperPrompt && lowerPrompt && numberPrompt && !symbolPrompt) {
      choices = letters.concat(number, letters2);

    }

    // Just Numbercheck false

    else if (upperPrompt && lowerPrompt && !numberPrompt && symbolPrompt) {
      choices = letters.concat(letters2, symbol);

    }

    // Just lowercheck false

    else if (upperPrompt && !lowerPrompt && numberPrompt && symbolPrompt) {
      choices = letters2.concat(number, symbol);

    }

    // Just UperCheck false

    else if (!upperPrompt && lowerPrompt && numberPrompt && symbolPrompt) {
      choices = letters.concat(number, symbol);

    }

    // Uppercheck and lowercheck false

    else if (!upperPrompt && !lowerPrompt && numberPrompt && symbolPrompt) {
      choices = number.concat(symbol);
    }

    // Uppercheck and numbercheck false

    else if (!upperPrompt && lowerPrompt && !numberPrompt && symbolPrompt) {
      choices = letters.concat(symbol);
    }

    // Uppercheck and symbolcheck false

    else if (!upperPrompt && lowerPrompt && numberPrompt && !symbolPrompt) {
      choices = letters.concat(number);
    }

    // lowercheck and numbercheck false

    else if (upperPrompt && !lowerPrompt && numberPrompt && !symbolPrompt) {
      choices = letters2.concat(symbol);
    }

    // lowercheck and symbolcheck false

    else if (upperPrompt && !lowerPrompt && numberPrompt && !symbolPrompt) {
      choices = letters2.concat(number);
    }

    // numbercheck and symbolcheck false

    else if (upperPrompt && lowerPrompt && !numberPrompt && !symbolPrompt) {
      choices = letters.concat(letters2);
    }

    // Uppercheck lowercheck and numbercheck false

    else if (!upperPrompt && !lowerPrompt && !numberPrompt && symbolPrompt) {
      choices = symbol;
    }

    // Uppercheck lowercheck and symbolcheck false

    else if (!upperPrompt && !lowerPrompt && numberPrompt && !symbolPrompt) {
      choices = number;
    }

    // Uppercheck numbercheck and symbolcheck false

    else if (!upperPrompt && lowerPrompt && !numberPrompt && !symbolPrompt) {
      choices = letters;
    }

    // lowercheck numbercheck and symbolcheck false

    else if (upperPrompt && !lowerPrompt && !numberPrompt && !symbolPrompt) {
      choices = capital.concat(letters2);
    };
    // using an array with our choices characters are randomly selected and then added to the empty array that is pass using the push method
    for (i = 0; i <= passLength; i++) {
      var randomize = choices[Math.floor(Math.random() * choices.length)];
      pass.push(randomize);
    }
    // finally the array of pass that was just made is converted back into a string using the join method. If we didn't specify ("") our password would be filled with unwanted commas 
    var finalPass = pass.join("");
    Input(finalPass);
    return finalPass;
  }
  // The password is sent to the textbox where the user can read it
  function Input(finalPass) {
    document.getElementById("password").textContent = finalPass
  }
}