var letters = document.querySelectorAll('span');
var box = document.getElementById('modaal');
var stats = document.getElementById('stats');
var button1 = document.querySelector('.orange');
var charCount = 0;
var totalCount = 0;
var correctCount = 0;

document.addEventListener('keydown', keyPress, false);

function keyPress(event) {
  var key = event.key;
  totalCount += 1;
  if (key === letters[charCount].textContent && charCount !== letters.length - 1) {
    letters[charCount].className = 'correct';
    letters[charCount + 1].className = 'normal current';
    charCount += 1;
    correctCount += 1;

  } else if (key === letters[charCount].textContent && charCount === letters.length - 1) {
    correctCount += 1;
    var percentage = correctCount / totalCount;
    letters[charCount].className = 'correct';
    box.className = 'modal boxOn';
    stats.textContent = 'Your accuracy: ' + percentage.toFixed(2) * 100 + '%';

  } else {
    letters[charCount].className = 'wrong';
  }

}

button1.addEventListener('click', start, false);

function start(event) {
  box.className = 'modal boxOff';
  letters[0].className = 'normal current';
  for (let i = 1; i < letters.length; i++) {
    letters[i].className = 'normal';
  }
  charCount = 0;
  totalCount = 0;
  correctCount = 0;

}
