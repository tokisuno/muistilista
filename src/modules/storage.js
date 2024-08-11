import { Home, TodoList, TodoItem } from './app.js';

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


export let todo = new Home();
todo.addList(new TodoList());
todo.addList(new TodoList("second"));

(todo.lists.find((list) => list.name === "default")).addItem(new TodoItem("do homework", "finish assignment"));
(todo.lists.find((list) => list.name === "default")).addItem(new TodoItem("brush teeth", "teeth brushing time"));
(todo.lists.find((list) => list.name === "default")).addItem(new TodoItem("record video", "video recording time"));
(todo.lists.find((list) => list.name === "second")).addItem(new TodoItem("take photos", "taking photos with the lads"));

function saveData(todo) {
    todo.lists.forEach(list => {
        if (storageAvailable("localStorage")) {
            localStorage.setItem(`${list.name}`, JSON.stringify(list));
        } 
    });
    console.log(localStorage);
    Object.keys(localStorage).forEach(list => {
        console.log(JSON.parse(localStorage.getItem(list)));
    });
}

function accessData() {
    if (storageAvailable("localStorage")) {
    }
}

saveData(todo);

