/* exported lastChars */
function lastChars(length, string) {
  var newS = '';

  if (length >= string.length) {
    newS = string;
  } else {
    for (let x = string.length - length; x <= string.length - 1; x++) {
      newS = newS + string[x];
    }
  }
  return newS;
}
