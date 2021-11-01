/* exported getWords */
function getWords(string) {
  if (string.length > 0) {
    var wordArray = string.split(' ');
    return wordArray;
  } else {
    var emptyArray = [];
    return emptyArray;
  }

}
