const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  console.log(li);
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDo();
}

function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  toDoList.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(span);

  delBtn.innerHTML = "✔";
  span.innerHTML = text;
  li.id = newId;

  const todoObj = {
    text: text,
    id: newId,
  };
  toDos.push(todoObj);
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
