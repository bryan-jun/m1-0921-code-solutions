/* exported capitalizeWords */

function capitalizeWords(string) {
  var array = [];
  var nString = '';
  var fString = '';

  for (let x = 0; x <= string.length - 1; x++) {
    nString = nString + string[x].toLowerCase();

  }

  array = nString.split(' ');

  for (var i in array) {
    var newWord = array[i];
    newWord = newWord.replace(newWord[0], newWord[0].toUpperCase());

    fString = fString + ' ' + newWord;
  }

  return fString.substring(1);

}
