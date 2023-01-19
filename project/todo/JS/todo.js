const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODO_KEY = "todo";

let toDoArray = [];

toDoForm.addEventListener("submit", toDoFormSubmit);

function toDoFormSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDoArray.push(newToDoObj);
  showToDo(newToDoObj);
  saveStorage();
}

function showToDo(todo) {
  const list = document.createElement("li");
  list.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.addEventListener("click", deleteButton);
  button.innerText = "❌";
  list.appendChild(span);
  list.appendChild(button);
  toDoList.appendChild(list);
}

function deleteButton(event) {
  const list = event.target.parentElement;
  list.remove();
  toDoArray = toDoArray.filter((todo) => todo.id !== parseInt(list.id));
  saveStorage();
}

function saveStorage() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDoArray));
}

const bringLocalData = localStorage.getItem(TODO_KEY);

if (bringLocalData) {
  const savedData = JSON.parse(bringLocalData);
  toDoArray = savedData;
  savedData.forEach(showToDo);
}
