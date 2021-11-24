var array1 = [
  {
    isbn: '12345',
    title: 'Bryan Jun the GOAT',
    author: 'Bryan Jun'
  },
  {
    isbn: '67891',
    title: 'Ba Ba Sheep',
    author: 'Ian Bro'
  },
  {
    isbn: '000000',
    title: 'I am Great',
    author: 'Brett Goat'
  }

];

console.log('book array: ', array1);
console.log('type of array1: ', typeof array1);

var json = JSON.stringify(array1);

console.log('json: ', json);
console.log('type of JSON: ', typeof json);

var jsonString = '{"id":12345, "name":"Bryan Jun"}';

console.log('jsonString: ', jsonString);
console.log('type of jsonString: ', typeof jsonString);

var jsonObj = JSON.parse(jsonString);

console.log('jasonObj: ', jsonObj);
console.log('type of jsonObj: ', typeof jsonObj);
