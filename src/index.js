import _ from 'lodash';
import './style.css';


// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, now imported by this script 
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
  
//     return element;
//   }
  
//   document.body.appendChild(component());

  const ToDoTask=[
    {
      description: "Wash the dishes",
      completed: true,
      index: 3,
    },
    {
      description: "Complete To Do list proyect",
      completed: true,
      index: 2,
    },
    {
      description: "Check linters",
      completed: false,
      index: 1,
    },
  ];

  console.log(ToDoTask);
  
  ToDoTask.sort((a, b)=> { return a.index - b.index });

  function iterateTask(ToDoTask){
    const lsHhtml=document.createElement('li');
    const chkHtml=document.createElement('input')
    const lblHtml=document.createElement('label');

    chkHtml.type='checkbox';
    chkHtml.checked=ToDoTask.completed;
    lblHtml.innerHTML=ToDoTask.description;

    lsHhtml.classList='lshtml';

    lsHhtml.appendChild(chkHtml);
    lsHhtml.appendChild(lblHtml);
    document.querySelector('.list-container').appendChild(lsHhtml);


  };
  


  console.log(ToDoTask);

  for (let i=0; i<ToDoTask.length;i++){
    iterateTask(ToDoTask[i]);
  };

// // ToDoTask.forEach((e)=>{
// //   // console.log(`${e.description} ${e.index`)};
// //   iterateTask(ToDoTask);
// // });  

  

  