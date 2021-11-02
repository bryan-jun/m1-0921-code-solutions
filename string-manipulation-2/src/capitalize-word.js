/* exported capitalizeWord */
// define function capitalizeWord with parameter word
// define a new word empty string, which concatenates lower case versions of each letter
// update first letter of the string as uppercase
// make separate if case where JavaScript is always Javascript

function capitalizeWord(word) {
  var newW = '';

  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    for (let x = 0; x <= word.length - 1; x++) {
      newW = newW + word[x].toLowerCase();

    }

  }
  newW = newW.replace(newW[0], newW[0].toUpperCase());

  return newW;
}

// define function capitalizeWord with parameter Word
// define variable newW set to empty string
// define if statement when lowercased word equals javascript
// return JavaScript in these instances
// define else statement
// define for loop iterating from x=0 to length of word, incrementing by 1
// set newW to newW concatenated with lowercased version of xth element in word
// replace first charactr of word with uppercased version of it
// return newW
