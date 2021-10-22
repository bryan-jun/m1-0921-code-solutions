function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convert minutes to seconds result: ', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

console.log('greeting result: ', greet('Bryan'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('getArea result: ', getArea(3, 4));

function getFirstName(person) {
  return person.firstName;
}

var person1 = {
  firstName: 'Bryan',
  lastName: 'Jun'
};

console.log('get first name result: ', getFirstName(person1));

function getLastElement(array) {
  return array[array.length - 1];
}

var array1 = ['hello', 'my', 'name', 'is'];

console.log('get last element result: ', getLastElement(array1));
