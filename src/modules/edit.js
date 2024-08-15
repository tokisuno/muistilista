export function editItem(item) {
    const dialog = document.querySelector("dialog#dialog");

    const title = dialog.querySelector("input#title");
    const description = dialog.querySelector("input#description");
    const dueDate = dialog.querySelector("input#dueDate");

    spawnRadioItem(item);

    title.setAttribute('value', `${item.title}`);
    description.setAttribute('value', `${item.description}`);
    dueDate.setAttribute('value', `${item.dueDate}`);

    let submit = dialog.querySelector("input#submit");
    submit.addEventListener('click', (e) => {
        e.preventDefault(); 
        console.log(dialog.returnValue)
        item.title = title.value;
        item.description = description.value;
        item.dueDate = dueDate.value;
        item.priority = `${returnRadioResults()}`;
        dialog.close();
    });

    dialog.showModal();
    console.log(item);
}

function spawnRadioItem(item) {
    const opts = document.getElementsByName("priority");

    if (item.priority == '0') {
        opts[0].checked = true;
        return "0";
    } 

    if (item.priority == '1') {
        opts[1].checked = true;
        return "1";
    }
}

function returnRadioResults() {
    const opts = document.getElementsByName('priority');
    for (let i = 0; i < opts.length; i++) {
        if (opts[i].checked === true) {
            return opts[i].value;
        }
    }
}
