import './style.css';
import * as statusUpdateAll from './completed';
import * as crud from './crud'
import { values } from 'lodash';

const ToDoTask = [];

ToDoTask.sort((a, b) => a.index - b.index);

function SaveLocalStorage(ToDoTask2) {
  localStorage.setItem('ToDoList', JSON.stringify(ToDoTask2));
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
  const lblHtml = document.createElement('input');
  const btnErase =document.createElement('button');

  chkHtml.type = 'checkbox';
  chkHtml.checked = ToDoTaskElement.completed;
  chkHtml.addEventListener('change', () => {
    statusUpdateAll.statusUpdate(ToDoTaskElement);
    if (ToDoTaskElement.completed) {
      lblHtml.classList = 'line-through';
      lblHtml.classList = 'notEditable'
      btnErase.classList='unHideEraseButton';
    } else {
      lblHtml.classList = 'no-line-through';
      lblHtml.classList = 'noEditableUnCheck';
      btnErase.classList='hideEraseButton';
    }
    SaveLocalStoragePerElement(ToDoTaskElement);
  });

  if (ToDoTaskElement.completed) {
    lblHtml.classList = 'line-through';
    lblHtml.classList = 'notEditable';
    btnErase.classList='unHideEraseButton';
  } else {
    console.log('Cargo sin estar checked');
    lblHtml.classList = 'no-line-through';
    lblHtml.classList = 'noEditableUnCheck';
    btnErase.classList='hideEraseButton';
  }
  
  btnErase.textContent='Erase'; 

  btnErase.addEventListener('click', ()=>{
    crud.deleteTask(ToDoTaskElement);
    location.reload();
  });

  lblHtml.value = ToDoTaskElement.description;
  

  lblHtml.addEventListener('change', () => {
    crud.updateTask(lblHtml.value,ToDoTaskElement);
  });
  lsHhtml.classList = 'lshtml';

  lsHhtml.appendChild(chkHtml);
  lsHhtml.appendChild(lblHtml);
  lsHhtml.appendChild(btnErase);  
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

// Implement CRUD
function eraseList(){
  document.querySelector('.chkHtml').remove();
  document.querySelector('.lblHtml').remove();
};

document.getElementById('btnIcon').addEventListener("click", 
  function(e){
    console.log("Jasem");
    console.log(document.getElementById('lblTask').value);
    crud.addNewTask(document.getElementById('lblTask').value);    
    location.reload();
    // LoadLocalStorage();

});