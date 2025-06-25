const { addNewItem, createNewProject, deleteProject, deleteTask, updateCompletion, setCurrentProject } = require("./listfunction");

const newTaskBtn = document.getElementsByClassName("newTaskBtn")[0];
const newProjBtn = document.getElementsByClassName("newProjBtn")[0];
const content = document.getElementsByClassName("content")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];

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

function setListBtn(listBtn) {
    listBtn.addEventListener("click", function () {
        removeDisplayedProject();
        const thisProject = JSON.parse(localStorage.getItem(listBtn.className));
        loadProject(thisProject);
        setCurrentProject(thisProject);
    });
};

function setDeleteBtn(deleteBtn, projectName) {
    deleteBtn.addEventListener("click", function () {
        deleteProject(projectName);
        deleteSideBarBtn(projectName);
        removeDisplayedProject();
        loadProject(JSON.parse(localStorage.getItem(localStorage.key(0))));
    });
};

function setDeleteTaskBtn(deleteTaskBtn, taskName) {
    deleteTaskBtn.addEventListener("click", function () {
        deleteTask(taskName);
        removeSelectedTask(deleteTaskBtn.parentElement.parentElement, deleteTaskBtn.parentElement);
    });
};

function addTaskToProject (item, project) {
    const openProjectDiv = content.firstElementChild;

    const task = document.createElement("div");
    task.className = item.title;
    task.style.display = "flex";
    task.style.margin = "20px";
    openProjectDiv.appendChild(task);
    
    const taskCheck = document.createElement("input");
    taskCheck.type = "checkbox";
    taskCheck.value = item.title;
    taskCheck.id = "id";
    taskCheck.style.alignSelf = "start";
    task.appendChild(taskCheck);

    if (item.completion == true) {
        taskCheck.checked = true;
    };

    taskCheck.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            updateCompletion(project, item, true);
        } else {
            updateCompletion(project, item, false);
        };
    });

    const taskTextDiv = document.createElement("div");
    taskTextDiv.style.paddingLeft = "10px";
    task.appendChild(taskTextDiv);

    const taskTitle = document.createElement("div");
    taskTitle.innerText = item.title;
    taskTitle.style.fontWeight = "bold";
    taskTextDiv.appendChild(taskTitle);

    const taskDescription = document.createElement("div");
    taskDescription.innerText = item.description;
    taskTextDiv.appendChild(taskDescription);

    const taskDue = document.createElement("div");
    taskDue.innerText = `Due: ${item.dueDate}`;
    taskTextDiv.appendChild(taskDue);

    createDeleteTaskBtn(task, item.title);
}

function displayNewProject (title) {
    const projectDiv = document.createElement("div");
    projectDiv.className = title;
    projectDiv.style.position = "relative";
    content.appendChild(projectDiv);
    styleProject(projectDiv);

    const projectHeader = document.createElement("h2");
    projectHeader.innerText = title;
    projectDiv.appendChild(projectHeader);

    const projectLink = document.createElement("button");
    projectLink.innerText = title;
    projectLink.className = title;
    sidebar.appendChild(projectLink);

    createDeleteBtn(projectDiv, title);
    setListBtn(projectLink);
}

function styleProject(element) {
    element.style.width = "100%";
}

function loadPage() {
    for (let i = 0; i < localStorage.length; i++) { 
        const projLink = document.createElement("button");
        projLink.innerText = localStorage.key(i);
        projLink.className = localStorage.key(i);
        setListBtn(projLink);
        sidebar.append(projLink);
    };

    const firstProj = JSON.parse(localStorage.getItem(localStorage.key(0)));
    loadProject(firstProj);
};

function loadProject(project) {
    const projectDiv = document.createElement("div");
    projectDiv.className = project.title;
    projectDiv.style.position = "relative";
    content.appendChild(projectDiv);
    styleProject(projectDiv);

    const projectHeader = document.createElement("h2");
    projectHeader.innerText = project.title;
    projectDiv.appendChild(projectHeader);

    createDeleteBtn(projectDiv, project.title)

    for (let task of project.project) {
        addTaskToProject(task, project);
    };
};

function createDeleteBtn(div, title) {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.className = "deleteBtn";
    deleteBtn.style.position = "absolute";
    deleteBtn.style.top = "0";
    deleteBtn.style.right = "0";
    div.appendChild(deleteBtn);
    setDeleteBtn(deleteBtn, title);
};

function createDeleteTaskBtn(div, title) {
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.innerText = "X";
    deleteTaskBtn.className = "deleteTaskBtn";
    div.appendChild(deleteTaskBtn);
    setDeleteTaskBtn(deleteTaskBtn, title);
};

function deleteSideBarBtn(projectName) {
    const btn = document.getElementsByClassName(projectName)[0];
    sidebar.removeChild(btn);
};

function removeDisplayedProject() {
    while (content.firstChild) {
            content.removeChild(content.lastChild);
    };
};

function removeSelectedTask(parentDiv, taskDiv) {
    parentDiv.removeChild(taskDiv);
};

export { addTaskToProject, setTaskBtn, setProjBtn, displayNewProject, styleProject, loadPage, removeDisplayedProject }