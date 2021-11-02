/* exported reverseWords */

function reverseWords(string) {
  var newArray = string.split(' ');
  var stringF = '';
  for (var x in newArray) {
    var newWord = '';
    for (let y = newArray[x].length - 1; y >= 0; y--) {
      newWord = newWord + newArray[x][y];

    }
    stringF = stringF + ' ' + newWord;
  }
  return stringF.substring(1);
}
