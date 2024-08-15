import { saveData, accessData } from './storage.js';
import { editItem } from './edit.js';

let todoData = accessData();
todoData.lists.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

const body = document.querySelector('body');

const newProject = document.createElement('button');
newProject.setAttribute('class', 'newProject');
newProject.textContent = "New Project";

body.appendChild(newProject);

const container = document.createElement('div');
container.setAttribute('class', 'container');

function drawAllLists(list) {
    let todoList = document.createElement('div');
    todoList.setAttribute('class', 'listContainer');

    let todoListName = document.createElement('div');
    todoListName.setAttribute('class', 'todoListName');
    todoListName.textContent = `${list.name}`;
    todoList.append(todoListName);

    let toggleAppearance = document.createElement('button');
    toggleAppearance.textContent = "Expand";
    toggleAppearance.setAttribute('id', 'expand');
    toggleAppearance.addEventListener('click', (e) => {
        toggleAppearance.textContent = `${toggleAppearance.textContent === "Expand" ? "Collapse" : "Expand"}`;
        switch (e.target.id) {
            case "collapse":
                toggleAppearance.setAttribute('id', 'expand');
                collapseList();
                break;
            case "expand":
                toggleAppearance.setAttribute('id', 'collapse');
                expandList(list, todoList);
                break;
        }
    });
    todoList.appendChild(toggleAppearance);
    container.appendChild(todoList);
    body.append(container);
}
todoData.lists.find(list => {
    drawAllLists(list);
});

function expandList(list, todoList) {
    let items = document.createElement('div');
    items.setAttribute('class', 'items');
    
    list.items.forEach(item => {
        let todoListItem = document.createElement('div');
        todoListItem.setAttribute('class', 'todoListItem');
        todoListItem.setAttribute('id', `${item.id}`);

        let title = document.createElement('div');
        title.textContent = `${item.title}`;
        title.setAttribute('class', 'itemTitle');
        todoListItem.appendChild(title); 

        if (item.dueDate != null) {
            let dueDate = document.createElement('div');
            dueDate.textContent = `${item.dueDate}`;
            todoListItem.appendChild(dueDate);
        }
        let expandItemButton = document.createElement('button');
        expandItemButton.textContent = "Expand";
        expandItemButton.setAttribute('id', 'expandItem');
        expandItemButton.addEventListener('click', () => {
            expandItem(item, todoListItem, items, todoList, list);
            expandItemButton.remove();
        });

        let status = document.createElement('div');
        status.textContent = `${(item.status === false ? "Incomplete" : "Complete")}`;
        todoListItem.appendChild(status);

        let completeButton = document.createElement('button');
        completeButton.textContent = "Toggle complete status";
        completeButton.setAttribute('class', 'toggleStatus');
        completeButton.addEventListener('click', () => {
            item.toggleStatus();
            status.textContent = `${(item.status === false ? "Incomplete" : "Complete")}`;
        });
        todoListItem.appendChild(completeButton); 
        todoListItem.appendChild(expandItemButton);

        items.appendChild(todoListItem);
        todoList.appendChild(items);

        let removeItemButton = document.createElement('button');
        removeItemButton.textContent = 'Remove';
        removeItemButton.setAttribute('id', "remove");
        removeItemButton.addEventListener('click', () => {
            removeItem(item, list); 
        });
        todoListItem.appendChild(removeItemButton);
    });
}

function expandItem(item, todoListItem, items, todoList, list) {
    let collapseItemButton = document.createElement('button');
    collapseItemButton.textContent = "Collapse";
    collapseItemButton.setAttribute('id', 'expandItem');
    collapseItemButton.addEventListener('click', () => {
        collapseItem(item, todoListItem, items, todoList, list);
        collapseItemButton.remove();
    });
    todoListItem.appendChild(collapseItemButton);

    let description = document.createElement('div');
    description.textContent = `${item.description}`;
    description.setAttribute('class', 'itemDescription');
    todoListItem.appendChild(description); 

    let priority = document.createElement('div');
    priority.textContent = `${(item.priority == 0 ? "Normal" : "Urgent")}`;
    priority.setAttribute('class', 'itemPriority');
    todoListItem.appendChild(priority); 

    let editItemButton = document.createElement('button');
    let editItemButtonStatus = false;
    editItemButton.textContent = "Edit";
    editItemButton.setAttribute('class', 'editItem');
    editItemButton.addEventListener('click', () => {
        editItemButtonStatus = (editItemButtonStatus == false ? editItemButtonStatus = true : editItemButtonStatus = false);
        editItemButton.setAttribute('id', `${editItemButtonStatus}`);

        editItem(item, editItemButtonStatus);
    });
    todoListItem.appendChild(editItemButton);
}

function collapseItem(item, todoListItem, items, todoList, list) {
    console.log(item, todoListItem)
    while (todoListItem.firstChild) {
        todoListItem.removeChild(todoListItem.lastChild);
    }

    let title = document.createElement('div');
    title.textContent = `${item.title}`;
    title.setAttribute('class', 'itemTitle');
    todoListItem.appendChild(title); 

    if (item.dueDate != null) {
        let dueDate = document.createElement('div');
        dueDate.textContent = `${item.dueDate}`;
        todoListItem.appendChild(dueDate);
    }

    let status = document.createElement('div');
    status.textContent = `${(item.status === false ? "Incomplete" : "Complete")}`;
    todoListItem.appendChild(status);

    let expandItemButton = document.createElement('button');
    expandItemButton.textContent = "Expand";
    expandItemButton.setAttribute('id', 'expandItem');
    expandItemButton.addEventListener('click', () => {
        expandItem(item, todoListItem, items, todoList);
        expandItemButton.remove();
    });
    todoListItem.appendChild(expandItemButton);

    let completeButton = document.createElement('button');
    completeButton.textContent = "Toggle complete status";
    completeButton.setAttribute('class', 'toggleStatus');
    completeButton.addEventListener('click', () => {
        item.toggleStatus();
        status.textContent = `${(item.status === false ? "Incomplete" : "Complete")}`;
    });
    todoListItem.appendChild(completeButton); 

    items.appendChild(todoListItem);
    todoList.appendChild(items);

    let removeItemButton = document.createElement('button');
    removeItemButton.textContent = 'Remove';
    removeItemButton.setAttribute('id', "remove");
    removeItemButton.addEventListener('click', () => {
        removeItem(item, list); 
    });
    todoListItem.appendChild(removeItemButton);

    items.appendChild(todoListItem);
    todoList.appendChild(items);
}

function collapseList() {
    document.querySelectorAll("div.listContainer").forEach(e => e.remove());
    todoData.lists.find(list => {
        drawAllLists(list);
    });
}

function removeItem(item, list) {
    let opt = document.getElementById(`${item.id}`);
    opt.remove();
    console.log(opt);
    let index = list.items.indexOf(item);
    if (index > -1) list.items.splice(index, 1);
    console.log(list.items[0]);
}

window.onbeforeunload = function() {
    saveData(todoData);
}
