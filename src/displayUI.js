const { addNewItem, createNewProject } = require("./listfunction");

const newTaskBtn = document.getElementsByClassName("newTaskBtn")[0];
const newProjBtn = document.getElementsByClassName("newProjBtn")[0];
const content = document.getElementsByClassName("content")[0];

function setTaskBtn () {
    newTaskBtn.addEventListener("click", function() {
        addNewItem();
    });
};

function setProjBtn() {
    newProjBtn.addEventListener("click", function() {
        createNewProject();
    });
};

function addTaskToProject (item, project) {
    const openProjectDiv = document.getElementsByClassName(project)[0];
    
    const task = document.createElement("div");
    openProjectDiv.appendChild(task);
    
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

function displayNewProject (title) {
    const projectDiv = document.createElement("div");
    projectDiv.className = title;
    content.appendChild(projectDiv);
    styleProject(projectDiv);

    const projectHeader = document.createElement("h2");
    projectHeader.innerText = title;
    projectDiv.appendChild(projectHeader);
}

function styleProject(element) {
    element.style.width = "100%";
}

export { addTaskToProject, setTaskBtn, setProjBtn, displayNewProject, styleProject }