'use strict';

const toDoContainer = document.querySelector('.container');
const inputTask = document.querySelector('.newtask');
const todo = document.querySelector('.todo__field');
const submitTask = document.querySelector('.add_task');
const taskContainer = document.querySelector('.tasks');
const todos = [];

const renderTodo = function (taskName) {
  taskContainer.innerHTML += `<div class="task">
  <span class="taskname"> ${taskName} </span>
  <button class="delete">
  <i class="material-icons">delete</i>
  </button>
  </div>
  `;

  todos.push(taskName);

  const allTasks = document.querySelectorAll('.delete');
  allTasks.forEach((_, i) =>
    allTasks[i].addEventListener('click', function () {
      this.parentNode.remove();
      todos.display = false;
      todos.splice(taskName, 1);
      persistTasks(todos);
    })
  );
};

let tasks = submitTask.addEventListener('click', function (e) {
  e.preventDefault();
  renderTodo(todo.value);
  todo.value = '';

  persistTasks(todos);
});

const persistTasks = function (array) {
  localStorage.setItem('tasks', JSON.stringify(array));
};

const init = function () {
  const storage = localStorage.getItem('tasks');
  if (storage) tasks = JSON.parse(storage);
  tasks.forEach(task => renderTodo(task));
  console.log(storage);
};
init();
