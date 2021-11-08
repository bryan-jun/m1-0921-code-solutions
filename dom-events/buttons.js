function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('target property: ', event.target);

}

var cbClass = document.querySelector('.click-button');

cbClass.addEventListener('click', handleClick, false);

function handleMousover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('target property: ', event.target);
}

var hbClass = document.querySelector('.hover-button');

hbClass.addEventListener('mouseover', handleMousover, false);

function handleDoublelick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('target property:', event.target);
}

var dcClass = document.querySelector('.double-click-button');

dcClass.addEventListener('dblclick', handleDoublelick, false);
