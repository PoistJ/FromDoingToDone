class Project {
    constructor(title) {
        this.title = title;
        this.project = [];
    }
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
}

function createNewProject () {
    const title = prompt("Please enter a title for the list");
}

export { addNewItem } 