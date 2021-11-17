var letters = document.querySelectorAll('span');
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
    var percentage = correctCount / totalCount;
    letters[charCount].className = 'correct';
    window.alert('Your accuracy: ' + percentage.toFixed(2) + '%');
    if (confirm('Want to play again?')) {
      window.location.reload();
    }
  } else {
    letters[charCount].className = 'wrong';
  }

}
