/* exported equal */

// define function equal with arguments first and second
// compare indexed arrays through loop against each other
// moment it's off return false
// return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  } else {
    for (let x = 0; x <= first.length - 1; x++) {
      if (first[x] !== second[x]) {
        return false;
      }
    }
  }
  return true;
}

// define function equal with arguments first and second
// check if the length of both arrays are equal
// if they're not equal return false
// else
// loop from x=0 to length of first -1, incrementing by 1
// if xth element of first does not equal xth element of second
// return false
// return true
