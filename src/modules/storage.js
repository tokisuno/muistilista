import { Home, TodoList, TodoItem } from './app.js';
import { format } from 'date-fns';

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
      storage &&
      storage.length !== 0
    );
  }
}

export function saveData(todo) {
    todo.lists.forEach(list => {
        if (storageAvailable("localStorage")) {
            localStorage.setItem(`${list.name}`, JSON.stringify(list));
        } 
    });
}

export function accessData() {
    if (storageAvailable("localStorage")) {
        let newStorage = new Home();
        Object.keys(localStorage).forEach((list, iter) => {
            let data = JSON.parse(localStorage.getItem(list));
            newStorage.addList(new TodoList(data.name));
            data.items.forEach(item => {
                newStorage.lists[iter].addItem(new TodoItem(item.title, item.description, item.dueDate, item.priority, item.status, item.id));
            });
        });
        return newStorage;
    }
}


// THIS IS EXAMPLE DATA FOR TESTING.

//let td = new Home();
//td.addList(new TodoList());
//td.addList(new TodoList("second"));
//
//(td.lists.find((list) => list.name === "default"))
//    .addItem(new TodoItem("do homework", "doing homework time !", format(new Date(2024, 10, 11), "yyyy-MM-dd")));
//(td.lists.find((list) => list.name === "default"))
//    .addItem(new TodoItem("brush teeth", "teeth brushing time"));
//(td.lists.find((list) => list.name === "default"))
//    .addItem(new TodoItem("record video", "video recording time"));
//(td.lists.find((list) => list.name === "second"))
//    .addItem(new TodoItem("take photos", "taking photos with the lads"));
//
//saveData(td);
//
