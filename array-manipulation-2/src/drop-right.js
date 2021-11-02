/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];

  if (array.length === 0) {
    return newArray;
  }

  for (let x = 0; x <= array.length - count - 1; x++) {
    newArray.push(array[x]);

  }

  return newArray;

}
