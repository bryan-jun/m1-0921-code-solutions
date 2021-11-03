/* exported difference */
function difference(first, second) {
  var array1 = [];
  var bad = [];

  for (let x = 0; x <= first.length - 1; x++) {
    if (second.includes(first[x])) {
      bad.push(first[x]);
    } else {
      array1.push(first[x]);
    }
  }

  for (let y = 0; y <= second.length - 1; y++) {
    if (first.includes(second[y])) {
      bad.push(first[y]);
    } else {
      array1.push(second[y]);
    }
  }

  return array1;

}
