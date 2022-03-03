const listContainer = document.querySelector('#list')

const taskForm = document.querySelector('form')




  taskForm.addEventListener("submit", function(e){
    e.preventDefault();
    const newTask = document.querySelector('#new-task-description').value;
    const newTaskContainer = document.createElement('div');

    taskForm.reset();
  
    const deleteBttn = document.createElement("button");
    deleteBttn.className = "delete-bttn";
    deleteBttn.textContent = "X";

    deleteBttn.addEventListener("click", function () {      
      newTaskContainer.remove();
    }); 

    listContainer.append(newTaskContainer)
    newTaskContainer.append(newTask, deleteBttn)
  })