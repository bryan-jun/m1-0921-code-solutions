/* exported isUpperCased */

function isUpperCased(word) {
  for (var x in word) {
    if (word[x] !== word[x].toUpperCase()) {
      return false;
    }
  }
  return true;
}
