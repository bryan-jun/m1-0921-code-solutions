/* exported tail */
function tail(array) {
  var newArray = [];

  for (let i = 1; i <= array.length - 1; i++) {
    newArray.push(array[i]);

  }
  return newArray;
}

// define function tail with onen argument "array"
// define variable newArray and set it to an empty array
// define for loop iterating from 1 to length of the array minus one, incrementing by 1
// push ith element in array to newArray
// return newArray
