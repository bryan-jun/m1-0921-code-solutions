/* exported union */
function union(first, second) {
  var array1 = [];
  var bad = [];

  for (let x = 0; x <= first.length - 1; x++) {
    array1.push(first[x]);
  }

  for (let y = 0; y <= second.length - 1; y++) {
    if (array1.includes(second[y])) {
      bad.push(second[y]);
    } else {
      array1.push(second[y]);
    }
  }

  return array1;
}
