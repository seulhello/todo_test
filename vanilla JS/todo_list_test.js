const bxTodo = document.querySelector(".bx_todo"),
  todoInput = bxTodo.querySelector("input"),
  todoList = document.querySelector(".list_todo");

const TODO_LS = "todo_ls";
let todoCont = [];

function checkLocal() {
  const appLocal = localStorage.getItem(TODO_LS);
  if (appLocal !== null) {
    const parsedTodo = JSON.parse(appLocal);
    parsedTodo.forEach(function (todoContArr) {
      printList(todoContArr.cont);
    });
  }
}

function saveTodo() {
  const todoString = JSON.stringify(todoCont);
  localStorage.setItem(TODO_LS, todoString);
}

function printList(text) {
  const createLi = document.createElement("li"),
    createSpan = document.createElement("span"),
    createBtn = document.createElement("button"),
    newId = todoCont.length + 1;

  createSpan.innerText = text;
  createBtn.innerText = "❌";
  createBtn.addEventListener("click", removeBtn);  // 해당 이벤트 생성 이유 덜 파악됨
  createLi.appendChild(createBtn);
  createLi.appendChild(createSpan);
  todoList.appendChild(createLi);
  createLi.id = newId;
  const todoObj = {
    id: newId,
    cont: text
  }
  todoCont.push(todoObj);
  saveTodo();
}

function removeBtn(event) {
  const btnInfo = event.target;
  const currentLi = btnInfo.parentElement;
  todoList.removeChild(currentLi);  // li 삭제를 생각 안함
  const cleanArr = todoCont.filter(function (content) {
    return content.id !== parseInt(currentLi.id);
  });  // 해당 filter 부분을 따로 변수에 저장 안했음 
  todoCont = cleanArr;
  saveTodo();
}

function handleSubmit(e) {
  e.preventDefault();
  const inputValue = todoInput.value;
  printList(inputValue);
  todoInput.value = ""; // 초기화 부분 안함
}

function init() {
  checkLocal();
  bxTodo.addEventListener("submit", handleSubmit);
}

init();