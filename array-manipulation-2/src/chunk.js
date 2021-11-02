/* exported chunk */
function chunk(array, size) {
  var newArray = [];

  if (array.length === 0) {
    return [];
  } else {
    for (let x = 0; x <= array.length - 1; x += size) {
      var subArray = [];

      for (let i = x; i <= x + size - 1 && i <= array.length - 1; i++) {
        subArray.push(array[i]);

      }
      newArray.push(subArray);

    }
    return newArray;

  }

}
