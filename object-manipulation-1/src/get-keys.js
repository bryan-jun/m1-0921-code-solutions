/* exported getKeys */
function getKeys(object) {
  var array = [];
  for (var x in object) {
    array.push(x);
  }
  return array;
}

// define function getKeys with parameter object
// define variable array as empty array
// define for loop for every x element in object
// push x element into array
// return array
