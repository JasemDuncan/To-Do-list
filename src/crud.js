export function addNewTask(lblTask) {
    console.log("addd new tasssk");
    const PreToDoTask = localStorage.getItem('ToDoList');
    const array = JSON.parse(PreToDoTask);
    console.log(lblTask);
    console.log(array);
    array.push({description: lblTask, completed: false, index: array.length +1});
    console.log(array);
    localStorage.setItem('ToDoList', JSON.stringify(array));
};
  
export function updateTask(newtextinput,ToDoTaskElement) {
    console.log('change');
    console.log(newtextinput);
    console.log("ToDOTaskElement.index:    "+ToDoTaskElement.index);
 
    console.log('end');
    const PreToDoTask = localStorage.getItem('ToDoList');
    const arr = JSON.parse(PreToDoTask);
    console.log(arr);
    for(let i = 0; i < arr.length; i += 1){
        console.log('Jasem1');
        console.log(arr[i].index);
        if(arr[i].index===ToDoTaskElement.index){
            console.log('inside if');
            arr[i].description=newtextinput;
        }
    };
    console.log(arr);
    localStorage.setItem('ToDoList', JSON.stringify(arr));
};
//   export default addNewTask;