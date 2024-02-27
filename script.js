// Select the generate button from the HTML document
var generateBtn = document.querySelector("#generate");

// Define character sets for different types of characters
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericChars = '0123456789';
var specialChars = '!@#$%^&*()-_+=~`[]{}|;:,.<>?';

// Function to generate a password
function writePassword() {
  // Prompt the user to enter the length of the password
  let length = parseInt(prompt('Enter the length of the password (8-128 characters):'));

  // Check if the entered length is valid
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Please enter a valid password length between 8 and 128 characters.');
    return;
  }

  // Confirm which types of characters to include in the password
  let includeLowercase = confirm('Include lowercase characters?');
  let includeUppercase = confirm('Include uppercase characters?');
  let includeNumeric = confirm('Include numeric characters?');
  let includeSpecial = confirm('Include special characters?');

  // Check if at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('Please select at least one character type.');
    return;
  }

  // Create a character pool based on selected character types
  let charPool = '';
  if (includeLowercase) charPool += lowercaseChars;
  if (includeUppercase) charPool += uppercaseChars;
  if (includeNumeric) charPool += numericChars;
  if (includeSpecial) charPool += specialChars;

  // Generate the password using the character pool
  let password = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  // Display the generated password in the password input field
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add an event listener to the generate button to trigger the password generation
generateBtn.addEventListener("click", writePassword);
