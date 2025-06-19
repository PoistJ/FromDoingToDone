import { addTaskToProject, displayNewProject, styleProject } from "./displayUI";

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
}

function addTask(task, project) {
    project.push(task);
};

class ListItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function addNewItem() {
    const title = prompt("Enter a title");
    const description = prompt("Enter a description");
    const dueDate = prompt("Enter a due date");
    const priority = prompt("Enter priority");
    const project = currentProject;
    
    const item = new ListItem(title, description, dueDate, priority);
    
    addTaskToProject(item, project.title);

    addTask(item, project.project);

    localStorage.setItem(project.title, JSON.stringify(project));
}

function createNewProject() {
    if (typeof defaultProject != "undefined") {
        const defaultProject = new Project("default");
        displayNewProject("default");
        setCurrentProject(defaultProject);

        localStorage.setItem("defaultProject", JSON.stringify(defaultProject));
    } else {
        const title = prompt("Please enter a title for the list");
        const newProject = new Project(title);
        displayNewProject(title);
        setCurrentProject(newProject);

        localStorage.setItem(title, JSON.stringify(newProject));
    };
}

function setCurrentProject(project) {
    currentProject = project;
}


// function moveTask(projectName)

export { addNewItem, createNewProject } 