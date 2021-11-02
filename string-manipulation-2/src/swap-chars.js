/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var array = [];
  var firstC = string[firstIndex];
  var secondC = string[secondIndex];
  var newW = '';

  for (var x in string) {
    array.push(string[x]);
  }

  array[firstIndex] = secondC;
  array[secondIndex] = firstC;

  for (var y in array) {
    newW = newW + array[y];

  }
  return newW;

}
