/* exported pick */
// define function pick with source and keys as arguments
// loop through source and see if the keys are in keys
// push property and value into object
// retun the new object

function pick(source, keys) {
  var newO = {};

  for (var x in keys) {
    if (source[keys[x]] !== undefined) {
      newO[keys[x]] = source[keys[x]];

    }
  }
  return newO;

}

// define function pick with source and keys as arguments
// define newO as empty object variable
// loop through every element in keys
// if value of key property of source is not undefined
// set newO's key property to source's key property value
// return newO;
