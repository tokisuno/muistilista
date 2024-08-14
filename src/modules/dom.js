import { saveData, accessData } from './storage.js';

let z = accessData();
z.lists.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

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
z.lists.find(list => {
    drawAllLists(list);
});

function expandList(list, todoList) {
    let items = document.createElement('div');
    items.setAttribute('class', 'items');
    
    list.items.forEach(item => {
        let todoListItem = document.createElement('div');
        todoListItem.setAttribute('class', 'todoListItem');

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
            expandItem(item, todoListItem, items, todoList);
            expandItemButton.remove();
        });
        todoListItem.appendChild(expandItemButton);
        items.appendChild(todoListItem);
        todoList.appendChild(items);
    });
}

function expandItem(item, todoListItem, items, todoList) {
    let collapseItemButton = document.createElement('button');
    collapseItemButton.textContent = "Expand";
    collapseItemButton.setAttribute('id', 'expandItem');
    collapseItemButton.addEventListener('click', () => {
        collapseItem(item, todoListItem, items, todoList);
        collapseItemButton.remove();
    });
    todoListItem.appendChild(collapseItemButton);

    let description = document.createElement('div');
    description.textContent = `${item.description}`;
    description.setAttribute('class', 'itemDescription');
    todoListItem.appendChild(description); 

    let priority = document.createElement('div');
    priority.textContent = `${(item.priority === 0 ? "Normal" : "Urgent")}`;
    priority.setAttribute('class', 'itemPriority');
    todoListItem.appendChild(priority); 

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
}

function collapseItem(item, todoListItem, items, todoList) {
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

    let expandItemButton = document.createElement('button');
    expandItemButton.textContent = "Expand";
    expandItemButton.setAttribute('id', 'expandItem');
    expandItemButton.addEventListener('click', () => {
        expandItem(item, todoListItem, items, todoList);
        expandItemButton.remove();
    });

    todoListItem.appendChild(expandItemButton);
    items.appendChild(todoListItem);
    todoList.appendChild(items);
}

function collapseList() {
    document.querySelectorAll("div.listContainer").forEach(e => e.remove());
    z.lists.find(list => {
        drawAllLists(list);
    });
}

window.onbeforeunload = function() {
    saveData(z);
}
