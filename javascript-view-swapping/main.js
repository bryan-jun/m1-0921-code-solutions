var tabContainer = document.querySelector('.tab-container');
var tabs = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');

tabContainer.addEventListener('click', containerFx, false);

function containerFx(event) {
  if (event.target && event.target.matches('.tab')) {
    for (let i = 0; i <= tabs.length - 1; i++) {
      if (tabs[i] === event.target) {
        tabs[i].className = 'tab active';
      } else {
        tabs[i].className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (let x = 0; x <= views.length - 1; x++) {
      if (views[x].getAttribute('data-view') === dataView) {
        views[x].className = 'view';
      } else {
        views[x].className = 'view hidden';
      }
    }
  }
}
