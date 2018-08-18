const form = document.querySelector("form");
const showUl = document.querySelector("ul.collection");
var input = form.querySelector("input");


//Add task
form.addEventListener("submit",function(e){
  e.preventDefault();
  let taskItemFromInput = input.value;
  let taskItem = document.createElement("li");

  taskItem.innerHTML = `<li class="collection-item">
        <div>${taskItemFromInput}<a href="#!" class="secondary-content"><i class="material-icons">delete</i></a></div>
        </li>`;
  if(taskItemFromInput != ""){
    showUl.appendChild(taskItem);
  }
  //Store task is localStorage
  storeTaskToLocalStorage(taskItemFromInput);
});

//Add taks to localStorage
function storeTaskToLocalStorage(valueToStore){
  let tasks;
  if(localStorage.getItem("todo") === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem("task"));
  }
  tasks.push(valueToStore);

  localStorage.setItem("todo", JSON.stringify(tasks));
}


//remove task
document.body.addEventListener("click", function(e){
  if (e.target.className === 'material-icons'){
    e.target.parentElement.parentElement.parentElement.remove();
  }
});


//Clear task
const clearBtn = document.querySelector("button.clear");


clearBtn.addEventListener("click",function(e){
  e.preventDefault();
  const allLi = document.querySelectorAll("li.collection-item");
  // allLi.remove();c
  allLi.forEach(function(item) {
    item.remove();
  });
});