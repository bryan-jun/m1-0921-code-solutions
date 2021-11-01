/* exported isVowel */

function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var nChar = char.toLowerCase();
  if (vowels.includes(nChar)) {
    return true;
  }
  return false;
}
