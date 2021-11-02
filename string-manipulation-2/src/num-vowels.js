/* exported numVowels */
function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;

  for (let x = 0; x <= string.length - 1; x++) {
    if (vowels.includes(string[x].toLowerCase())) {
      count += 1;
    }

  }

  return count;
}
