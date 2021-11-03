/* exported flatten */
// define function flatten with array as argument
// iterate through array and add it as an element to new array

function flatten(array) {
  var array1 = [];

  for (let x = 0; x <= array.length - 1; x++) {
    if (Array.isArray(array[x])) {
      for (let z = 0; z <= array[x].length - 1; z++) {
        array1.push(array[x][z]);
      }
    } else {
      array1.push(array[x]);
    }

  }

  return array1;

}

// define function flatten with array as argument
// define variable array1 as empty array
// run for loop starting at x = 0 to x is less than or equal to array length minus 1, incrementing by 1
// if array[x] is an array
// run loop from z =0 to z is less than or equal to length of xth element in array minus 1, incremeting by 1
// push z element of x element of array into array1
// else
// push xth element of array into array1
// return array1
