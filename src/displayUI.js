const { addNewItem, createNewProject, deleteProject } = require("./listfunction");

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

        loadProject(JSON.parse(localStorage.getItem(listBtn.className)));
    });
};

function setDeleteBtn(deleteBtn, projectName) {
    deleteBtn.addEventListener("click", function () {
        deleteProject(projectName);
        deleteSideBarBtn(projectName);
        removeDisplayedProject();
        loadProject(JSON.parse(localStorage.getItem(localStorage.key(0))));
    })
}

function addTaskToProject (item, project) {
    const openProjectDiv = content.getElementsByClassName(project)[0];

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

    const projectLink = document.createElement("button");
    projectLink.innerText = title;
    sidebar.appendChild(projectLink);

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

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete List";
    deleteBtn.className = "deleteBtn";
    deleteBtn.style.position = "absolute";
    deleteBtn.style.top = "0";
    deleteBtn.style.right = "0";
    projectDiv.appendChild(deleteBtn);
    setDeleteBtn(deleteBtn, project.title);

    for (let task of project.project) {
        addTaskToProject(task, project.title);
    };
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

export { addTaskToProject, setTaskBtn, setProjBtn, displayNewProject, styleProject, loadPage }