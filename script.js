

let add_btn = document.getElementById("add_btn");
let show_btn = document.getElementById("show_btn");
let todo_list = [];

add_btn.onclick = () => {
  document.getElementById("todoFormContainer").style.display = "block";
  document.getElementById("showAllTasks").style.display = "none";
}
show_btn.onclick = () => {
  document.getElementById("todoFormContainer").style.display = "none";
  document.getElementById("showAllTasks").style.display = "block";

  // for(let index = 0; index < todo_list.length; index++) {
  //   let individual_task = document.createElement("ol");
  //   let name = document.createElement("li");
  //   name.innerHTML = todo_list[index].name;
  //   let description = document.createElement("li");
  //   description.innerHTML = todo_list[index].description;
  //   let startDate = document.createElement("li");
  //   startDate.innerHTML = todo_list[index].startDate;
  //   let duration = document.createElement("li");
  //   duration.innerHTML = todo_list[index].duration;
  //   let reminder = document.createElement("li");
  //   reminder.innerHTML = todo_list[index].reminder;

  //   individual_task.appendChild(name);
  //   individual_task.appendChild(description);
  //   individual_task.appendChild(startDate);
  //   individual_task.appendChild(duration);
  //   individual_task.appendChild(reminder);
  //   document.getElementById("showAllTasks").appendChild(individual_task);
  // }
}

function addItem(event) {
  event.preventDefault();
  let name = document.getElementById("todo_name").value;
  let description = document.getElementById("todo_description").value;
  let startDate = document.getElementById("todo_startDate").value;
  let duration = document.getElementById("todo_duration").value;
  let reminder = document.getElementById("todo_reminder").value;

  let obj = {name, description, startDate, duration, reminder}
  todo_list.push(obj);
  console.log(todo_list);

  document.getElementById("todo_name").value = "";
  document.getElementById("todo_description").value = "";
  document.getElementById("todo_startDate").value = "";
  document.getElementById("todo_duration").value = "";
  document.getElementById("todo_reminder").value = "";


  let individual_task = document.createElement("ol");
  individual_task.innerHTML = `task ${todo_list.length}`
  let task_name = document.createElement("li");
  task_name.innerHTML = name;
  let task_description = document.createElement("li");
  task_description.innerHTML = description;
  let task_startDate = document.createElement("li");
  task_startDate.innerHTML = startDate;
  let task_duration = document.createElement("li");
  task_duration.innerHTML = duration;
  let task_reminder = document.createElement("li");
  task_reminder.innerHTML = reminder;
  let task_deleteButton = document.createElement("button");
  task_deleteButton.innerHTML = "Delete";

  individual_task.appendChild(task_name);
  individual_task.appendChild(task_description);
  individual_task.appendChild(task_startDate);
  individual_task.appendChild(task_duration);
  individual_task.appendChild(task_reminder);
  individual_task.appendChild(task_deleteButton);
  document.getElementById("showAllTasks").appendChild(individual_task);
}


function deleteItem(i) {
  let todo_list = todo_list.filter((item, index) => index != i);
}