/* exported isPalindromic */

// define function isPalindromic with string argument
// create two separate strings and append to it from start to end and end to start
// compare and see if it's equal

function isPalindromic(string) {
  var string1 = '';
  var string2 = '';

  for (let x = string.length - 1; x >= 0; x--) {
    if (string[x] !== ' ') { string1 = string1 + string[x]; }

  }

  for (let x = 0; x <= string.length - 1; x++) {
    if (string[x] !== ' ') { string2 = string2 + string[x]; }

  }

  return string2 === string1;

}

// define function isPalindromic with string as argument
// define variable string1 as empty string
// define variable string2 as empty string
// define for loop starting with x equal to length of string minus one, iterating to x greater than or equal to 0, decrementing by 1;
// if xth character of string does not equal space, append to string1 the letter
// define for loop starting with x equal to 0, iterating to x greater than or equal to length of string minus 1, incrementing by 1;
// if xth character of string does not equal space, append to string 2 the letter
// return comparison result of string2 and string1
