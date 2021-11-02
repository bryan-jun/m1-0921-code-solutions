/* exported truncate */

// define function truncate with two parameters length and string and iterate through the entire string for length and add it to new string until the length limit is hit and then
// add ".."

function truncate(length, string) {
  var newW = '';

  if (length <= string.length) {

    for (let x = 0; x <= length - 1; x++) {
      newW = newW + string[x];
    }
  } else if (length > string.length) {
    for (let x = 0; x <= string.length - 1; x++) {
      newW = newW + string[x];
    }
  }

  newW = newW + '...';
  return newW;

}

// define function truncate with two parameters length and string
// define variable newW as an empty string
// define if statement where length is less than or equal to length of string
// iterate from x=0 to x is less than or equal to length - 1, incrementing by 1
// define newW as previous newW concatenated with x character in string
// define else if where length is greater than length of string
// iterate from x=0 to x is less than or equal to length of string minus 1, incrementing by 1
// define newW as previous newW concatenated with x character in string
// add ellipses to newW
// return newW
