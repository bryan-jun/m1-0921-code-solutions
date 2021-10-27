/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var array = [];

  for (var x in words) {
    var newWord = words[x] + suffix;
    array.push(newWord);
  }

  return array;

}
