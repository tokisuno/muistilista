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

function drawAllItems(list) {
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
                collapse();
                break;
            case "expand":
                toggleAppearance.setAttribute('id', 'collapse');
                expand(list, todoList);
                break;
        }
    });
    todoList.appendChild(toggleAppearance);
    container.appendChild(todoList);
    body.append(container);
}
z.lists.find(list => {
    drawAllItems(list);
});

function expand(list, todoList) {
    let details = document.createElement('div');
    details.setAttribute('class', 'details');
    
    list.items.forEach(item => {
        let todoListItem = document.createElement('div');
        todoListItem.setAttribute('class', 'todoListItem');

        let title = document.createElement('div');
        title.textContent = `${item.title}`;
        title.setAttribute('class', 'itemTitle');
        todoListItem.appendChild(title); 

        let description = document.createElement('div');
        description.textContent = `${item.description}`;
        description.setAttribute('class', 'itemDescription');
        todoListItem.appendChild(description); 

        if (item.dueDate != null) {
            let dueDate = document.createElement('div');
            dueDate.textContent = `${item.dueDate}`;
            todoListItem.appendChild(dueDate);
        }

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
        details.appendChild(todoListItem);
        todoList.appendChild(details);
    });
}

function collapse() {
    document.querySelectorAll("div.listContainer").forEach(e => e.remove());
    z.lists.find(list => {
        drawAllItems(list);
    });
}

window.onbeforeunload = function() {
    saveData(z);
}
