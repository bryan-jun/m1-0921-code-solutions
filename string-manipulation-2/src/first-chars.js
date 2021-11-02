/* exported firstChars */
function firstChars(length, string) {
  var newS = '';

  if (length >= string.length) {
    for (let x = 0; x <= string.length - 1; x++) {
      newS = newS + string[x];
    }
  } else {
    for (let x = 0; x <= length - 1; x++) {
      newS = newS + string[x];
    }
  }
  return newS;
}
