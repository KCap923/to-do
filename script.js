const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo")

document.addEventListener("DOMContentLoaded", getLocalTodos);
todoButton.addEventListener("Click", deleteCheck);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

