/* exported getValues */
function getValues(object) {
  var array = [];

  for (var x in object) {
    array.push(object[x]);
  }

  return array;
}
