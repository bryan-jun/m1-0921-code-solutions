/* exported capitalize */

function capitalize(word) {
  var wordArray = [];
  var newWord = '';

  for (var x in word) {
    wordArray.push(word[x]);
  }

  for (let l = 0; l < wordArray.length; l++) {
    wordArray[l] = wordArray[l].toLowerCase();

  }

  wordArray[0] = wordArray[0].toUpperCase();

  for (var s in wordArray) {
    newWord = newWord + wordArray[s];
  }

  return newWord;

}

// define a function named capitalize with one parameter "word"
// define a variable wordArray set to an empty array
// define a variable newWord set to an empty string
// define a for loop iterating through the letters in word
// push each letter into the wordArray
// define a for loop iterating through all the letters in wordArray
// update every letter in wordArray into lowercase
// update the first letter in the wordArray into uppercase
// define a for loop iterating through every letter in wordArray
// concatenate every letter in wordArray into newWord
// return newWord
