/* exported oddOrEven */
function oddOrEven(numbers) {
  var array1 = [];
  for (var x in numbers) {
    if (numbers[x] % 2 === 0) {
      var result = 'even';
      array1.push(result);
    } else {
      array1.push('odd');
    }
  }
  return array1;

}
