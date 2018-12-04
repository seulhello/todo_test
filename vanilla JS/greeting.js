const form = document.querySelector('.js_form'),
  input = form.querySelector('input'),
  greeting = document.querySelector(".js_greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text) {
  greeting.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser == null) {

  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();