let domManip = (function () {
   'use strict';
    let mainDiv = document.getElementById('content');

    // create header
    let header = document.createElement('div');
    header.id = 'header';

    let headerText = document.createElement('h1');
    headerText.id = 'header-text';
    headerText.textContent = 'Todo List';

    header.appendChild(headerText);
    mainDiv.appendChild(header);

    // create div for left menu and todos list
    let outerDiv = document.createElement('div');
    outerDiv.classList.add('outer-div-style');

    // creating left menu
    let insideDivLeft = document.createElement('div');
    insideDivLeft.classList.add('inside-div-left');

    let allTodos = document.createElement('div');
    allTodos.textContent = 'all todos';
    allTodos.classList.add('left-menu-divs');
    insideDivLeft.appendChild(allTodos);

    // creating list with todos
    let insideDivRight = document.createElement('div');
    insideDivRight.classList.add('inside-div-right');

    let divForTasks = document.createElement('div');
    divForTasks.id = 'div-for-tasks';
    insideDivRight.appendChild(divForTasks);

    let createButton = document.createElement('div');
    createButton.innerHTML = 'create new task';
    createButton.id = 'create-button';
    insideDivRight.appendChild(createButton);

    // append main divs
    mainDiv.appendChild(outerDiv);
    outerDiv.appendChild(insideDivLeft);
    outerDiv.appendChild(insideDivRight);

    return {
         mainDiv: mainDiv,
         insideDivRight: insideDivRight,
         insideDivLeft: insideDivLeft,
         createButton: createButton,
         divForTasks: divForTasks
    }
})()

export {
    domManip
}
