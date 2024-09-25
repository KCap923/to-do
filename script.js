const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo")

document.addEventListener("DOMContentLoaded", getLocalTodos);
todoButton.addEventListener("Click", deleteCheck);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

function addTodo(event) {
event.preventDefault();
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
//Add to local storage
saveLocalTodos(todoInput.value);

const completedButton = document.createElement("button");




}