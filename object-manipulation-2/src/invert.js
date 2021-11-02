/* exported invert */
function invert(source) {

  var newO = {};

  for (var x in source) {
    newO[source[x]] = x;

  }

  return newO;

}
