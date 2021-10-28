/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  for (var x in numbers) {
    sum += numbers[x];

  }
  return sum;
}
