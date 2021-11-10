var mainButton = document.querySelector('.mainB');
var box = document.querySelector('.container');
var orangeB = document.querySelector('.orange');

mainButton.addEventListener('click', update1, false);

function update1(event) {
  box.className = 'container boxOn';

}

orangeB.addEventListener('click', update2, false);

function update2(event) {
  box.className = 'container boxOff';

}
