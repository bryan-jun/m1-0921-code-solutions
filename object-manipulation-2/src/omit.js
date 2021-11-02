/* exported omit */

// define function omit with source and keys as arguments
// loop through source and see if the keys are not in keys
// push property and value into object
// retun the new object

function omit(source, keys) {
  var newO = {};
  var wrong = {};

  for (var x in source) {
    if (keys.includes(x)) {
      wrong[x] = 0;
    } else {
      newO[x] = source[x];

    }
  }

  return newO;

}

// define function omit with source and keys as arguments
// define newO as empty object variable
// define wrong as empty object variable
// iterate through every property in source object
// if keys array includes the source property, add to wrong object
// if it doesn't, add property value to newO object
// return newO
