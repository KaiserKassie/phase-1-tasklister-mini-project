const listContainer = document.querySelector('#list')

document.querySelector('form').addEventListener("submit", function(e){
  e.preventDefault();
  const newTask = document.querySelector('#new-task-description').value;
   listContainer.append(newTask)
})

