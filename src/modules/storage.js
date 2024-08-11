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

let asdf = false;
export let todo = new Home();

if (asdf === true) {
    todo.addList(new TodoList());
    todo.addList(new TodoList("second"));

    (todo.lists.find((list) => list.name === "default")).addItem(new TodoItem("do homework", "finish assignment"));
    (todo.lists.find((list) => list.name === "default")).addItem(new TodoItem("brush teeth", "teeth brushing time"));
    (todo.lists.find((list) => list.name === "default")).addItem(new TodoItem("record video", "video recording time"));
    (todo.lists.find((list) => list.name === "second")).addItem(new TodoItem("take photos", "taking photos with the lads"));
    saveData(todo);
} else {
    //accessData();
}

function saveData(todo) {
    todo.lists.forEach(list => {
        if (storageAvailable("localStorage")) {
            localStorage.setItem(`${list.name}`, JSON.stringify(list));
        } 
    });
    console.log(localStorage);
    Object.keys(localStorage).forEach(list => {
        let data = JSON.parse(localStorage.getItem(list));
        console.log(data.items);
    });
}

export function accessData() {
    if (storageAvailable("localStorage")) {
        let newStorage = new Home();
        Object.keys(localStorage).forEach(list => {
            let data = JSON.parse(localStorage.getItem(list));
            newStorage.addList(new TodoList(data.name));
        });
        Object.keys(newStorage.lists).forEach(list => {
             
            console.log(list);
        });
        //Object.keys(localStorage).forEach(list => {
        //    let items = data.items;
        //    items.forEach(item => {
        //        let title = item.title;
        //        let description = item.description;
        //        let priority = item.priority;
        //        let status = item.status;
        //        let id = item.id;
        //    });
        //    console.log(newStorage);
        //    //console.log(data, newStorage);
        //});
        return newStorage;
    }
}

//saveData(todo);

