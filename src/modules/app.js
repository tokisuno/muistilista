export class Home {
    constructor() {
        this.lists = [];
    }
    addList = (list) => {
        this.lists.push(list);
    }
}
export class TodoList {
    constructor(name = "default") {
        this.items = [];
        this.name = name;
    }
    addItem = (item) => {
        this.items.push(item);
    }
}
export class TodoItem {
    constructor(title, description, dueDate, priority, status, id) {
        this.title = title || "New item";
        this.description = description || "New item description";
        this.dueDate = dueDate || null;
        this.priority = priority || 0;
        this.status = status || false;
        this.id = id || this.generateItemId();
    }
    generateItemId = () => {
        const date = new Date();
        const year = date.getFullYear().toString();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        const hours = date.getHours().toString().padStart(2, "0");
        const mins = date.getMinutes().toString().padStart(2, "0");
        const secs = date.getSeconds().toString().padStart(2, "0");
        return `${year}${month}${day}${hours}${mins}${secs}`;
    }
    toggleStatus() {
        (this.status == false) ? this.status = true : this.status = false;
    }
}
