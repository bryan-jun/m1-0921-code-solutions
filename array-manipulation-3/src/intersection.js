/* exported intersection */
function intersection(first, second) {
  var array1 = [];

  for (let x = 0; x <= first.length; x++) {
    if (second.includes(first[x])) {
      array1.push(first[x]);
    }

  }

  for (let y = 0; y <= second.length; y++) {
    if (first.includes(second[y]) && array1.includes(second[y]) === false) {
      array1.push(second[y]);

    }
  }

  return array1;

}
