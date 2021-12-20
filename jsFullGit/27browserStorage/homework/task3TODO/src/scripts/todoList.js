
import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';


function initTodoListHandlers() {
  const createBtnElem = document.querySelector('.btn-сreate');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
};

export { initTodoListHandlers };