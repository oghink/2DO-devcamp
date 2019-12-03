let taskBaru = document.querySelector('#task-baru');
let addTaskBtn = document.querySelector('#tambahTask');
let toDoUl = document.querySelector(".item-list ul");
let completeUl =  document.querySelector(".setelah-ceklis ul");

// Buat item todo baru
const buatTaskBaru = function(task)
{  
  // Setting list item
  const listItem = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");
  
  label.textContent = task;
  checkBox.type = "checkbox";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  return listItem;    
};

// Tambah item baru
const addTask = function()
{
  const listItem = buatTaskBaru(taskBaru.value);
  toDoUl.appendChild(listItem); 
  taskBaru.value="";
  bindIncompleteItems(listItem, completeTask);
};

function saveList() {
  const html = addTask.innerHTML;
  localStorage.setItem("task-baru", html);
};

const completeTask = function(){
  const listItem = this.parentNode;
  // Tombol hapus
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText ="Delete"; 
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  // Pilih checkbox dan hapus
  const checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();
  // pindah item
  completeUl.appendChild(listItem); 
  bindCompleteItems(listItem, deleteTask);
};

// Hapus item
const deleteTask = function(){
  const listItem = this.parentNode;
  const ul = listItem.parentNode;
  ul.removeChild(listItem);  
};


const bindIncompleteItems = function(taskItem, checkBoxClick){  
  const checkBox = taskItem.querySelector("input[type=checkbox]");
  checkBox.onchange = checkBoxClick;  
}; 

const bindCompleteItems = function(taskItem, deleteButtonPress){
  const deleteButton = taskItem.querySelector(".delete");
  deleteButton.onclick = deleteButtonPress;  
};

for(let idx = 0; idx < toDoUl.children.length; idx++) {
  bindIncompleteItems(toDoUl.children[i], completeTask);
}

for(let idx = 0; idx < completeUl.children.length; idx++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

addTaskBtn.addEventListener("click", addTask);