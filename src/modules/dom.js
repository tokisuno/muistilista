import { todo, accessData } from './storage.js';

let z = accessData();

console.log('we in da dom now');
const body = document.querySelector('body');

const container = document.createElement('div');
container.setAttribute('class', 'container');

z.lists.find(list => {
    let todoList = document.createElement('div');
    todoList.setAttribute('class', 'listContainer');

    let todoListName = document.createElement('div');
    todoListName.setAttribute('class', 'todoListName');
    todoListName.textContent = `${list.name}`;
    todoList.append(todoListName);

    list.items.forEach(item => {
        let todoListItem = document.createElement('div');
        todoListItem.setAttribute('class', 'todoListItem');

        let title = document.createElement('div');
        title.textContent = `${item.title}`;
        title.setAttribute('class', 'itemTitle');

        let description = document.createElement('div');
        description.textContent = `${item.description}`;
        description.setAttribute('class', 'itemDescription');

        let priority = document.createElement('div');
        priority.textContent = `${item.priority}`;
        priority.setAttribute('class', 'itemPriority');

        let completeButton = document.createElement('button');
        completeButton.textContent = `${item.status}`;
        completeButton.setAttribute('class', 'toggleStatus');
        completeButton.addEventListener('click', () => {
            item.toggleStatus();
            completeButton.textContent = `${item.status}`;
            console.log(item);
        });

        todoListItem.appendChild(title); 
        todoListItem.appendChild(description); 
        todoListItem.appendChild(priority); 
        todoListItem.appendChild(completeButton); 

        todoList.appendChild(todoListItem);
    });
    container.appendChild(todoList);
});

body.append(container);
