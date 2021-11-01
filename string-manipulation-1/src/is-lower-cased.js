/* exported isLowerCased */
function isLowerCased(word) {
  for (var x in word) {
    if (word[x] !== word[x].toLowerCase()) {
      return false;
    }
  }
  return true;
}
