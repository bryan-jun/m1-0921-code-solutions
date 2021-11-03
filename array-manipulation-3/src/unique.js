/* exported unique */

function unique(array) {
  var array1 = [];
  var trash = [];

  for (let x = 0; x <= array.length - 1; x++) {
    if (array1.includes(array[x])) {
      trash.push(array[x]);
    } else {

      array1.push(array[x])
      ;
    }
  }

  return array1;

}
