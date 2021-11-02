/* exported includes */

function includes(array, value) {
  var status = false;

  for (var x in array) {
    if (array[x] === value) {
      status = true;
    }
  }
  return status;
}
