let container = document.getElementById("container");

const addTask = ()=> {
  let input = document.getElementById("input").value;
  if (input !== "") {
    let todoList = document.createElement("div");
    todoList.setAttribute("class", "todo-list");

    let todoItem = document.createElement("p");
    todoItem.setAttribute("class", "todo-item");

    let taskText = document.createElement("div");
    taskText.innerText = input;

    let buttonGroup = document.createElement("div");

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.innerText = "Edit";

    editBtn.addEventListener("click",()=> {
      let newData = prompt("Enter new Task", taskText.innerText);
      if (newData !== "") {
        taskText.innerText = newData;
      } else {
        alert("Task cannot be empty.");
      }
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click",()=> {
      todoItem.remove();
    });

    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);
    todoItem.appendChild(taskText);
    todoItem.appendChild(buttonGroup);
    todoList.appendChild(todoItem);
    container.appendChild(todoList);

    document.getElementById("input").value = "";
  } else {
    alert("Please enter a task.");
  }
}
