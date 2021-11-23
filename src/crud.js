export function addNewTask(lblTask) {
  const PreToDoTask = localStorage.getItem('ToDoList');
  const array = JSON.parse(PreToDoTask);
  const temp = [];
  array.forEach((el) => {
    temp.push(el.index);
  });
  const newIndex = array.length === 0 ? 1 : Math.max(...temp) + 1;
  array.push({ description: lblTask, completed: false, index: newIndex });
  localStorage.setItem('ToDoList', JSON.stringify(array));
}

export function updateTask(newtextinput, ToDoTaskElement) {
  const PreToDoTask = localStorage.getItem('ToDoList');
  const arr = JSON.parse(PreToDoTask);

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].index === ToDoTaskElement.index) {
      arr[i].description = newtextinput;
    }
  }

  localStorage.setItem('ToDoList', JSON.stringify(arr));
}

export function reorder(arrr) {
  const temp = [];
  arrr.forEach(
    (oldElement, index) => {
      let newElement = null;
      oldElement.index = index + 1;
      newElement = oldElement;
      temp.push(newElement);
    },
  );
  return temp;
}

export function deleteTask(index) {
  const PreToDoTask = localStorage.getItem('ToDoList');
  const arrr = JSON.parse(PreToDoTask);
  for (let i = 0; i < arrr.length; i += 1) {
    if (Number(arrr[i].index) === Number(index)) {
      arrr.splice(i, 1);
    }
  }
  localStorage.setItem('ToDoList', JSON.stringify(reorder(arrr)));
}

export function deleteAllSelected() {
  const PreToDoTask = localStorage.getItem('ToDoList');
  const arrr = JSON.parse(PreToDoTask);

  localStorage.setItem('ToDoList', JSON.stringify(reorder(arrr.filter((el) => el.completed === false))));
}
