import { addTaskToProject } from "./displayUI";

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
    
    const item = new ListItem(title, description, dueDate, priority);
    
    addTaskToProject(item);
}

function createNewProject() {
    const title = prompt("Please enter a title for the list");
}

function createDefaultProject() {
    const defaultProject = new Project("default");
};

function moveTask(projectName) {

}

export { addNewItem, createDefaultProject } 