var lightbulb = document.querySelector('.lightbulb');
var background = document.querySelector('body');

lightbulb.addEventListener('click', mechanism, false);

function mechanism(event) {
  if (lightbulb.className === 'lightbulb off') {
    lightbulb.className = 'lightbulb on';
    background.className = 'backOn';
  } else {
    lightbulb.className = 'lightbulb off';
    background.className = 'backOff';
  }

}
