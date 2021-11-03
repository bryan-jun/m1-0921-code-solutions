/* exported zip */
function zip(first, second) {
  var newArray = [];

  if (first.length === second.length) {
    for (let x = 0; x <= first.length - 1; x++) {
      var subArray = [];
      subArray.push(first[x]);
      subArray.push(second[x]);
      newArray.push(subArray);

    }
  } else if (first.length > second.length) {
    for (let y = 0; y <= second.length - 1; y++) {
      var subArray2 = [];
      subArray2.push(first[y]);
      subArray2.push(second[y]);
      newArray.push(subArray2);

    }

  } else {
    for (let z = 0; z <= first.length - 1; z++) {
      var subArray3 = [];
      subArray3.push(first[z]);
      subArray3.push(second[z]);
      newArray.push(subArray3);

    }
  }
  return newArray;
}
