var times = 0;

var hotButton = document.querySelector('.hot-button');

var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', clickCounter, false);

function clickCounter(event) {
  times++;
  clickCount.textContent = 'Clicks: ' + times;
  if (times < 4) {
    hotButton.className = 'hot-button cold';
  } else if (times >= 4 && times < 7) {
    hotButton.className = 'hot-button cool';
  } else if (times >= 7 && times < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (times >= 10 && times < 13) {
    hotButton.className = 'hot-button warm';
  } else if (times >= 13 && times < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
}
