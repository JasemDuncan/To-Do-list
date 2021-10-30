import './style.css';
import * as statusUpdateAll from './completed';

const ToDoTask = [
  {
    description: 'Wash the dishes',
    completed: true,
    index: 3,
  },
  {
    description: 'Complete To Do list proyect',
    completed: true,
    index: 2,
  },
  {
    description: 'Check linters',
    completed: false,
    index: 1,
  },
];

ToDoTask.sort((a, b) => a.index - b.index);

function SaveLocalStorage(ToDoTask) {
  localStorage.setItem('ToDoList', JSON.stringify(ToDoTask));
}

function SaveLocalStoragePerElement(elementArray) {
  const PreToDoTask = localStorage.getItem('ToDoList');
  const array = JSON.parse(PreToDoTask);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].index === elementArray.index) {
      array[i].completed = elementArray.completed;
    }
  }
  SaveLocalStorage(array);
}

function iterateTask(ToDoTaskElement) {
  const lsHhtml = document.createElement('li');
  const chkHtml = document.createElement('input');
  const lblHtml = document.createElement('label');

  chkHtml.type = 'checkbox';
  chkHtml.checked = ToDoTaskElement.completed;
  chkHtml.addEventListener('change', () => {
    statusUpdateAll.statusUpdate(ToDoTaskElement);
    if (ToDoTaskElement.completed) {
      lblHtml.classList = 'line-through';
    } else {
      lblHtml.classList = 'no-line-through';
    }
    SaveLocalStoragePerElement(ToDoTaskElement);
  });

  if (ToDoTaskElement.completed) {
    lblHtml.classList = 'line-through';
  } else {
    lblHtml.classList = 'no-line-through';
  }

  lblHtml.innerHTML = ToDoTaskElement.description;

  lsHhtml.classList = 'lshtml';

  lsHhtml.appendChild(chkHtml);
  lsHhtml.appendChild(lblHtml);
  document.querySelector('.list-container').appendChild(lsHhtml);
}

function LoadData(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    iterateTask(arr[i]);
  }
}

function LoadLocalStorage() {
  const PreToDoTask = localStorage.getItem('ToDoList');
  const array = JSON.parse(PreToDoTask);
  LoadData(array);
  SaveLocalStorage(array);
}

window.onload = function Load() {
  if (localStorage.getItem('ToDoList')) {
    LoadLocalStorage();
  } else {
    LoadData(ToDoTask);
    SaveLocalStorage(ToDoTask);
  }
};
