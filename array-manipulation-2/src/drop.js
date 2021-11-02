/* exported drop */

// define function with array and count as parameters
// define empty array to return
// if array is empty, return the empty new array
// define for loop to iterate from nth element

function drop(array, count) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }

  for (let x = count; x <= array.length - 1; x++) {
    newArray.push(array[x]);

  }

  return newArray;

}

// define function drop with parameters array and count
// define variable newArray as empty array
// define if statement when length of array is 0
// define for loop starting at x = count until x is less than or equal to legnth of array minus 1, incrementing by 1
// append xth element of array to newArray
// return newArray
