import {domManip} from "./skeleton";
import {createTask} from "./create-task";

let createModule = (function() {
    let formQuantity = 0;

    // main div for every input
    const createForm = document.createElement('div');
    createForm.id = 'create-form';

    // name input
    const nameDiv = document.createElement('div')
    nameDiv.classList.add('create-divs');

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');

    const nameLabel = document.createElement('p');
    nameLabel.textContent = 'name:';

    // status input
    const statusDiv = document.createElement('div');
    statusDiv.classList.add('create-divs');

    const status = document.createElement('input');
    status.setAttribute('type', 'checkbox');
    status.checked = true;
    status.setAttribute('value', 'important');
    status.addEventListener('click', () => {
        if (status.checked) {
            status.setAttribute('value', 'important');
        } else {
            status.setAttribute('value', '');
        }
    })

    const statusLabel = document.createElement('p');
    statusLabel.textContent = 'important';

    // date input
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('create-divs');

    const dateLabel = document.createElement('p');
    dateLabel.textContent = 'date:';

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');

    //description input
    const descrDiv = document.createElement('div');
    descrDiv.classList.add('create-divs');

    const descrLabel = document.createElement('p');
    descrLabel.textContent = 'description';

    const descrInput = document.createElement('input');
    descrInput.setAttribute('type', 'text');

    // create div for createForm div (to be able to delete form)
    const divForCreateForm = document.createElement('div');
    divForCreateForm.id = 'div-for-create-form';

    // add div for buttons
    const divForButtons = document.createElement('div');
    divForButtons.id = 'div-for-buttons';

    // add button to create task
    const createButton = document.createElement('button');
    createButton.textContent = 'create new task';
    createButton.addEventListener('click', () => {
        clearAndCreate();
    })

    // add button to close form
    const closeButton = document.createElement('button');
    closeButton.textContent = 'close form';
    closeButton.addEventListener('click', () => {
        closeCreateForm();
    })

    function clearTasksDivs() {
        while (domManip.divForTasks.firstChild) {
            domManip.divForTasks.removeChild(domManip.divForTasks.firstChild);
        }
    }

    function closeCreateForm() {
        while (divForCreateForm.firstChild) {
            divForCreateForm.removeChild(divForCreateForm.firstChild);
        }
        formQuantity = 0;
    }

    function clearAndCreate() {
        clearTasksDivs();
        createTask.workWithTasks();
        closeCreateForm();
    }

    function appendName() {
        nameDiv.appendChild(nameLabel);
        nameDiv.appendChild(nameInput);
        createForm.appendChild(nameDiv);
    }

    function appendStatus() {
        statusDiv.appendChild(status);
        statusDiv.appendChild(statusLabel);
        createForm.appendChild(statusDiv);
    }

    function appendDate() {
        dateDiv.appendChild(dateLabel);
        dateDiv.appendChild(dateInput);
        createForm.appendChild(dateDiv);
    }

    function appendDescr() {
        descrDiv.appendChild(descrLabel);
        descrDiv.appendChild(descrInput);
        createForm.appendChild(descrDiv);
    }

    function appendInputs() {
        appendName();
        appendStatus();
        appendDate();
        appendDescr();
    }

    function createCloseButton() {
        createForm.appendChild(closeButton);
    }

    function makeButtons() {
        divForButtons.appendChild(createButton);
        divForButtons.appendChild(closeButton);
        createForm.appendChild(divForButtons);
    }

    function appendMainDivs() {
        divForCreateForm.appendChild(createForm);
        domManip.mainDiv.appendChild(divForCreateForm);
    }

    function appendElements() {
        createTask.clearCreateButton();
        appendInputs();
        makeButtons();
        appendMainDivs();
    }

    domManip.createButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (formQuantity < 1) {
            appendElements();
        }
        formQuantity++;
    })

    return {
        nameInput: nameInput,
        status: status,
        dateInput: dateInput,
        descrInput: descrInput,
        formQuantity: formQuantity,
        createForm: createForm,
        closeButton: closeButton,

        clearAndCreate: clearAndCreate,
        clearTasksDivs: clearTasksDivs,
        appendInputs: appendInputs,
        appendMainDivs: appendMainDivs,
        createCloseButton: createCloseButton,
        closeCreateForm: closeCreateForm
    }
})()

export {
    createModule
}