/* Math Object */

var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max(num1, num2, num3);

console.log('maximum value is ', maximumValue);

var heroes = ['Iron Man', 'Spiderman', 'Batman', 'Dr. Strange'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex value is ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('random hero is ', randomHero);

/* Array Methods */

var library = [
  { title: 'Harry Potter', author: 'JK Rowling' },
  { title: 'Narnia', author: 'CS Lewis' },
  { title: 'Justice', author: 'Michael Sandel' }

];

var lastBook = library.pop();

console.log('last book is ', lastBook);

var firstBook = library.shift();
console.log('first book is ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('library list is ', library);

/* String Methods */

var fullName = 'Bryan Jun';

var firstAndLastName = fullName.split(' ');
console.log('first and last name are ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('my name is', sayMyName);
