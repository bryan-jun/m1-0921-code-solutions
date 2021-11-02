/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];

  if (array.length === 0) {
    return newArray;
  }

  for (let x = array.length - count; x <= array.length - 1; x++) {
    newArray.push(array[x]);

  }

  return newArray;

}
