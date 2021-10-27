/* exported includesSeven */

function includesSeven(array) {
  var result = false;
  for (var x in array) {
    if (array[x] === 7) {
      result = true;
    }

  }
  return result;
}
