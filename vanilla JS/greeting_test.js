const bxResult = document.querySelector(".result_txt"),
  txtSet = bxResult.querySelector("h4"),
  bxForm = document.querySelector(".bx_form"),
  txtInput = bxForm.querySelector("input");

const USER_LS = "currentUser";

function saveValue(value) {
  localStorage.setItem(USER_LS, value);
}

function printText(name) {
  txtSet.innerText = `hello ${name}`; // 우측에 텍스트 넣기 실패
}

function handleSubmit() {
  bxForm.addEventListener("submit", getValue);
}

function getValue(e) {
  e.preventDefault(); //이벤트 초기화 부분 위치 헷갈림
  const inputValue = txtInput.value;
  printText(inputValue);
  saveValue(inputValue);
}

function checkLocal() {
  const checkLS = localStorage.getItem(USER_LS);
  if (checkLS == null) {
    handleSubmit();
  } else {
    printText(checkLS);
  }
}

function init() {
  checkLocal();
}

init();
