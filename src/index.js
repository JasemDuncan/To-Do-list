import './style.css';

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

function iterateTask(ToDoTask) {
  const lsHhtml = document.createElement('li');
  const chkHtml = document.createElement('input');
  const lblHtml = document.createElement('label');

  chkHtml.type = 'checkbox';
  chkHtml.checked = ToDoTask.completed;
  lblHtml.innerHTML = ToDoTask.description;

  lsHhtml.classList = 'lshtml';

  lsHhtml.appendChild(chkHtml);
  lsHhtml.appendChild(lblHtml);
  document.querySelector('.list-container').appendChild(lsHhtml);
}

for (let i = 0; i < ToDoTask.length; i += 1) {
  iterateTask(ToDoTask[i]);
}