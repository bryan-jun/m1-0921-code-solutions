function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);

}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var userName = document.getElementById('user-name');
var userEmail = document.getElementById('user-email');
var userMessage = document.getElementById('user-message');

userName.addEventListener('focus', handleFocus, false);
userName.addEventListener('blur', handleBlur, false);
userName.addEventListener('input', handleInput, false);
userEmail.addEventListener('focus', handleFocus, false);
userEmail.addEventListener('blur', handleBlur, false);
userEmail.addEventListener('input', handleInput, false);
userMessage.addEventListener('focus', handleFocus, false);
userMessage.addEventListener('blur', handleBlur, false);
userMessage.addEventListener('input', handleInput, false);
