const { addNewItem } = require("./listfunction");

const newTaskBtn = document.getElementsByClassName("newTaskBtn")[0];
const defaultProject = document.getElementsByClassName("defaultProject")[0];

function setTaskBtn () {
    newTaskBtn.addEventListener("click", function() {
        addNewItem();
    });
};

function addTaskToProject (item) {
    const task = document.createElement("div");
    defaultProject.appendChild(task);

    const taskTitle = document.createElement("div");
    taskTitle.innerText = item.title;
    taskTitle.style.fontWeight = "bold";
    task.appendChild(taskTitle);

    const taskDescription = document.createElement("div");
    taskDescription.innerText = item.description;
    task.appendChild(taskDescription);

    const taskDue = document.createElement("div");
    taskDue.innerText = item.dueDate;
    task.appendChild(taskDue);

    const taskPriority = document.createElement("div");
    taskPriority.innerText = `Priority: ${item.priority}`;
    task.appendChild(taskPriority);
}

export { addTaskToProject, setTaskBtn }