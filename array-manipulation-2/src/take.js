/* exported take */

// define function take with two parameters array and count
// define a new empty array variable
// push n elements into new array

function take(array, count) {
  var newArray = [];

  if (array.length === 0) {
    return newArray;

  }

  for (let x = 0; x <= count - 1; x++) {
    newArray.push(array[x]);
  }
  return newArray;

}

// define function take with parameters array and count
// define variable newArray as empty array
// set if statement when length of array is 0
// return newArray
// define for loop starting from x = 0 up to count minus 1, incrementing by 1
// push x element of array into newArray
// return newArray
