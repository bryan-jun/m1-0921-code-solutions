/* exported filterOutNulls */

function filterOutNulls(values) {
  var array = [];

  for (var x in values) {
    if (values[x] != null) {
      array.push(values[x]);
    }
  }
  return array;
}
