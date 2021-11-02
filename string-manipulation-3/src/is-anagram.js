/* exported isAnagram */
// define function isAnagram with two parameters firstString and secondString
// add letters of both to separate arrays if they're not spaces
// see if every letter is in the other array

function isAnagram(firstString, secondString) {
  var array1 = [];
  var array2 = [];
  var status = true;
  for (var x in firstString) {
    if (firstString[x] !== ' ') {
      array1.push(firstString[x]);
    }
  }

  for (var y in secondString) {
    if (secondString[y] !== ' ') {
      array2.push(secondString[y]);
    }
  }

  array1.sort();
  array2.sort();

  for (var g in array1) {
    if (array1[g] === array2[g]) {
      status = true;
    } else {
      return false;
    }
  }
  return status;

}

// define function anagram with two arguments firstString and secondString
// def variable array1 as empty array
// def variable array2 as empty array
// def variable status as true boolean
// define for loop for x in firstString
// if xth element of firststring is not a space
// push to array1 the xth character of firstString
// define for loop for y in secondString
// if yth element of secondString is not a space
// push to array2 the yth character of secondString
// sort array1
// sort array2
// for every element in array1
// if gth element in array1 is equal to gth element in array2
// set status as true
// else
// return false
// return status
