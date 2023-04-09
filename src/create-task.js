import {objectCreate} from "./todos";
import {domManip} from "./skeleton";
import {createModule} from "./create-form";

let createTask = (function() {
    let myTasks = [];
    let task;

    function createNewTask() {
        task = new objectCreate.createTodo(createModule.nameInput.value, createModule.status.value,
            createModule.dateInput.value, createModule.descrInput.value);
    }

    function pushTask() {
        myTasks.push(task);
    }

    function clearCreateButton() {
        while (createModule.createForm.firstChild) {
            createModule.createForm.removeChild(createModule.createForm.firstChild);
        }
    }

    // delete button functionality
    function deleteTask() {
        let index = this.getAttribute("data-index");
        console.log(index);
        myTasks.splice(index, 1);
        createModule.clearTasksDivs();
        printMyTasks();
        console.log(myTasks);
    }

    // edit button functionality
    let editIndex;

    function editTask() {
        clearCreateButton();
        createModule.appendInputs();
        createModule.appendMainDivs();

        createEditButton();
    }

    function editObject() {
        myTasks[editIndex].name = createModule.nameInput.value;
        myTasks[editIndex].status = createModule.status.value;
        myTasks[editIndex].date = createModule.dateInput.value;
        myTasks[editIndex].description = createModule.descrInput.value;

        createModule.clearTasksDivs();
        printMyTasks();
    }

    function createEditButton() {
        const editButton = document.createElement('button');
        editButton.innerHTML = 'edit task';
        editButton.addEventListener('click', () => {
            editObject();
            createModule.closeCreateForm();
        })

        const divForEditAndCloseButtons = document.createElement('div');
        divForEditAndCloseButtons.id = 'div-for-edit-and-close-buttons';
        divForEditAndCloseButtons.appendChild(editButton);
        divForEditAndCloseButtons.appendChild(createModule.closeButton);
        createModule.createForm.appendChild(divForEditAndCloseButtons);
    }

    // putting tasks divs in DOM
    function printMyTasks() {
        let taskCounter = 0;
        myTasks.forEach((task) => {
            // frame for each task
            const divTask = document.createElement('div');
            divTask.classList.add('div-task');

            // first level of task (will include everything but status)
            const firstLevel = document.createElement('div');
            firstLevel.classList.add('first-level');

            // div for all object items that appear in the task frame
            const htmlDiv = document.createElement('div');
            htmlDiv.id = 'html-div';

            // checkbox for task
            const roundCheckbox = document.createElement('input');
            roundCheckbox.setAttribute('type', 'checkbox');
            roundCheckbox.id = 'task-checkbox';
            htmlDiv.appendChild(roundCheckbox);

            // main object items
            const nameDiv = document.createElement('div');
            nameDiv.innerHTML = `${task.name}`;
            htmlDiv.appendChild(nameDiv);

            const dateDiv = document.createElement('div');
            dateDiv.innerHTML = `${task.date}`;
            htmlDiv.appendChild(dateDiv);

            const descrDiv = document.createElement('div');
            descrDiv.innerHTML = `${task.description}`;
            htmlDiv.appendChild(descrDiv);

            firstLevel.appendChild(htmlDiv);

            // edit and delete buttons
            const buttonDiv = document.createElement('div');
            buttonDiv.id = 'edit-delete-buttons';

            // edit button
            const editButton = document.createElement('button');
            editButton.setAttribute("data-index", taskCounter);
            editButton.id = 'edit-button';
            editButton.textContent = 'edit';
            editButton.addEventListener('click', () => {
                editIndex = editButton.getAttribute("data-index");
                console.log(editIndex);

                editTask();
            });
            buttonDiv.appendChild(editButton);

            // delete button
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute("data-index", taskCounter);
            taskCounter++;
            deleteButton.id = 'delete-button';
            deleteButton.textContent = 'delete';
            deleteButton.addEventListener('click', deleteTask);
            buttonDiv.appendChild(deleteButton);

            firstLevel.appendChild(buttonDiv);

            // second level of task (includes status only)
            const secondLevel = document.createElement('div');
            secondLevel.classList.add('second-level');
            secondLevel.innerHTML = `${task.status}`;

            divTask.appendChild(firstLevel);
            divTask.appendChild(secondLevel);

            domManip.divForTasks.appendChild(divTask);
        })
    }

    function workWithTasks() {
        createNewTask();
        pushTask();
        printMyTasks();
    }

    return {
        workWithTasks: workWithTasks,
        clearCreateButton: clearCreateButton
    }
})()

export {
    createTask
}