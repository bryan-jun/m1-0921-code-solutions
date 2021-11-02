/* exported ransomCase */
// define function ransomCase with one parameter string
// iterate through word and for every odd instance lowercase, even instance uppercased

function ransomCase(string) {
  var newW = '';
  for (let x = 0; x <= string.length - 1; x++) {
    if (x % 2 === 0) {
      newW = newW + string[x].toLowerCase();
    } else {
      newW = newW + string[x].toUpperCase();
    }
  }
  return newW;
}

// define function ransomCase with one parameter "string"
// define variable newW as empty string
// define for loop starting at x = 0 iterating to length of string minus one, incrementing by 1
// if x is even
// append to newW the lowercase version of the letter
// else
// append to newW the uppercase version of the letter
// return newW
