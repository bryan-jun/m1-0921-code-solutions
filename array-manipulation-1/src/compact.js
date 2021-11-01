/* exported compact */
function compact(array) {
  var bad = [false, null, NaN, 0, -0, undefined, ''];
  var newArray = [];
  var badArray = [];

  for (var x in array) {
    if (bad.includes(array[x])) {
      badArray.push(array[x]);

    } else {
      newArray.push(array[x]);
    }
  }
  return newArray;

}
