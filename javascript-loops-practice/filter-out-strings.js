/* exported filterOutStrings */
function filterOutStrings(values) {
  var array = [];

  for (var x in values) {
    if (typeof values[x] !== 'string') {
      array.push(values[x]);
    }

  } return array;
}
