export function addNewTask(lblTask) {
    
    const PreToDoTask = localStorage.getItem('ToDoList');
    const array = JSON.parse(PreToDoTask);
    let temp=[];
    array.forEach(el => {
        temp.push(parseInt(el.index));
    });    
    let newIndex= array.length== 0 ? 1: Math.max(...temp)+1;    
    array.push({description: lblTask, completed: false, index: newIndex});
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

export function reorder(arrr){
    let temp=[];
    arrr.forEach(
        (oldElement,index)=>{
            let newElement=null;  
            oldElement.index=index+1; 
            newElement=oldElement; 
            temp.push(newElement);
        });
    return temp;    
    
};

export function deleteTask(index){
    const PreToDoTask = localStorage.getItem('ToDoList');
    const arrr = JSON.parse(PreToDoTask);
    for(let i = 0; i < arrr.length; i += 1){  
        console.log(arrr[i].index);      
        if(parseInt(arrr[i].index)===parseInt(index)){
            console.log('inside if');
            arrr.splice(i,1);
        }
    };    
    localStorage.setItem('ToDoList', JSON.stringify(reorder(arrr)));
};

export function deleteAllSelected(){
    const PreToDoTask = localStorage.getItem('ToDoList');
    const arrr = JSON.parse(PreToDoTask);
        
    localStorage.setItem('ToDoList', JSON.stringify(reorder(arrr.filter((el)=>el.completed===false))));
};
//   export default addNewTask;