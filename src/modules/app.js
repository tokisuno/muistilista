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
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.priority = 0;
        this.status = false;
	this.id = this.generateItemId();
        //this.id = Math.random().toString().slice(2,11);
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
}

// to populate the page
let todo = new Home();
todo.addList(new TodoList());
todo.addList(new TodoList("second"));

(todo.lists.find((list) => list.name === "default")).addItem(new TodoItem("do homework", "finish assignment"));
(todo.lists.find((list) => list.name === "default")).addItem(new TodoItem("brush teeth", "teeth brushing time"));
(todo.lists.find((list) => list.name === "default")).addItem(new TodoItem("record video", "video recording time"));
(todo.lists.find((list) => list.name === "second")).addItem(new TodoItem("take photos", "taking photos with the lads"));

// I hate storage
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
// saves to browser local storage
todo.lists.forEach(list => {
    if (storageAvailable("localStorage")) {
	localStorage.setItem(`${list.name}`, JSON.stringify(list));
	console.log(list);
    } 
});
