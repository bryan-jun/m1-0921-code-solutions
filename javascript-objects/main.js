var student = {
  firstName: 'Bryan',
  lastName: 'Jun',
  age: 24

};

var fullName = student.firstName + ' ' + student.lastName;

console.log('fullname: ', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'banker';

console.log('lives in Irvine: ', student.livesInIrvine);
console.log('previous occupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Fiat',
  model: 'Abarth',
  year: 2018

};

vehicle['color'] = 'black';
vehicle['isConvertible'] = true;

console.log('color: ', vehicle['color']);
console.log('is convertible: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Shiny',
  type: 'Snake'

};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
