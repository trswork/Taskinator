var formEl = document.querySelector("#task-form");;
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput);


    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");

// give it a class name
listItemEl.className = "task-info";
// add HTML content to div
listItemEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

listItemEl.appendChild(taskInfoEl);

// add entire list item to list
tasksToDoEl.appendChild(listItemEl);
console.dir(listItemEl);
  };

  formEl.addEventListener("submit", createTaskHandler);