const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

const toDos = [];

function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  toDoList.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(span);

  delBtn.innerHTML = "del";
  span.innerHTML = text;
  li.id = newId;

  const todoObj = {
    text: text,
    id: newId,
  };
  toDos.push(todoObj);
  console.log(toDos);
  saveToDo();
}

function handleSubmit(event) {
  event.preventDefault();
  const toDoValue = toDoInput.value;
  toDoInput.value = ""; //iuput의 submit
  paintToDo(toDoValue);
}

function loadForm() {
  const loadToDos = localStorage.getItem(TODO_LS);
  if (loadToDos !== null) {
    const parseToDo = JSON.parse(loadToDos);
    parseToDo.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadForm();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
