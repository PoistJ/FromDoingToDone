import { addTaskToProject, closeModal, displayNewProject, removeDisplayedProject } from "./displayUI";

var currentProject = JSON.parse(localStorage.getItem(localStorage.key(0)));

class Project {
    constructor(title) {
        this.title = title;
        this.project = [];
    }

    addTask(task) {
        this.project.push(task);
    };

    removeTask(index) {
        this.project.splice(index, 1);
    };
};

function addTask(task, project) {
    project.push(task);
};

function removeTask(index, project) {
    project.splice(index, 1);
};

class ListItem {
    constructor(title, description, dueDate, priority, completion) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completion = completion;
    };
};

function addNewItem() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const dueDate = document.getElementById("taskDueDate").value;
    const priority = document.getElementById("taskPriority").value;
    const project = currentProject;

    const completion = false;
    const item = new ListItem(title, description, dueDate, priority, completion);
    
    addTaskToProject(item, project.title);

    addTask(item, project.project);

    localStorage.setItem(project.title, JSON.stringify(project));

    closeModal();
};

function createNewProject() {
    const title = prompt("Please enter a title for the list");
    const newProject = new Project(title);
    removeDisplayedProject();
    displayNewProject(title);
    localStorage.setItem(title, JSON.stringify(newProject));
    setCurrentProject(newProject);
};

function updateCompletion(project, item, status) {
    item.completion = status;

    updateStorage(project.title, project);
};

function updateStorage(title, project) {
    localStorage.setItem(title, JSON.stringify(project));
};

function setCurrentProject(project) {
    currentProject = project;
};

function deleteProject(project) {
    localStorage.removeItem(project);
};

function deleteTask(task) {
    const index = currentProject.project.map(o => o.title).indexOf(task);
    removeTask(index, currentProject.project);
    updateStorage(currentProject.title, currentProject);
};
// function moveTask(projectName)

export { addNewItem, createNewProject, deleteProject, updateCompletion, setCurrentProject, deleteTask } 