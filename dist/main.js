/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,\nhtml {\n    margin: 0;\n}\n\nbutton {\n    padding: 5px;\n\n    border-radius: 10px;\n    border: none;\n    background-color: #C8E3D4;\n}\n\n.outer-div-style {\n    display: flex;\n\n    padding: 10px;\n    margin: 15px;\n}\n\n/* styling header */\n#header {\n    display: flex;\n    align-items: center;\n\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n    height: 80px;\n\n    font-size: larger;\n\n    margin: 20px 20px 0 20px;\n}\n\n#header-text {\n    margin: 0;\n    padding: 10px;\n}\n\n/* styling create form */\n#div-for-create-form {\n    display: flex;\n    justify-content: center;\n}\n\n#create-form {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n    justify-content: space-between;\n\n    position: fixed;\n    top: 100px;\n\n    border-radius: 10px;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n    background-color: white;\n\n    padding: 10px;\n    margin: 20px;\n\n    max-width: 800px;\n}\n\n#div-for-buttons {\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    width: 100%;\n}\n\n#div-for-edit-and-close-buttons {\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    width: 100%;\n}\n\n.create-divs {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n/* styling left bar */\n.inside-div-left {\n    padding: 10px;\n    margin-right: 20px;\n}\n\n.left-menu-divs {\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n\n    margin: 3px;\n    padding: 5px;\n\n    cursor: pointer;\n}\n\n/* styling right bar */\n.inside-div-right {\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n    flex-direction: column;\n\n    padding: 10px;\n\n    width: 100%;\n}\n\n/* styling tasks */\n#div-for-tasks{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.div-task {\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n    max-width: 1135.340px;\n\n    padding: 7px 10px;\n}\n\n.first-level {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#task-checkbox {\n    margin: 3px;\n}\n\n.second-level {\n    display: flex;\n    align-items: center;\n\n    padding-left: 41px;\n}\n\n#edit-delete-buttons {\n    display: flex;\n    gap: 5px;\n}\n\n#create-button {\n    border-radius: 10px;\n    background-color: white;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n    max-width: 1135.340px;\n\n    padding: 3px 10px;\n    margin: 1px;\n\n    cursor: pointer;\n}\n\n#html-div {\n    display: flex;\n    gap: 20px;\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domManip": () => (/* binding */ domManip)
/* harmony export */ });
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




/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createModule": () => (/* binding */ createModule)
/* harmony export */ });
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _create_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



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
        while (_skeleton__WEBPACK_IMPORTED_MODULE_0__.domManip.divForTasks.firstChild) {
            _skeleton__WEBPACK_IMPORTED_MODULE_0__.domManip.divForTasks.removeChild(_skeleton__WEBPACK_IMPORTED_MODULE_0__.domManip.divForTasks.firstChild);
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
        _create_task__WEBPACK_IMPORTED_MODULE_1__.createTask.workWithTasks();
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
        _skeleton__WEBPACK_IMPORTED_MODULE_0__.domManip.mainDiv.appendChild(divForCreateForm);
    }

    function appendElements() {
        _create_task__WEBPACK_IMPORTED_MODULE_1__.createTask.clearCreateButton();
        appendInputs();
        makeButtons();
        appendMainDivs();
    }

    _skeleton__WEBPACK_IMPORTED_MODULE_0__.domManip.createButton.addEventListener('click', (e) => {
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



/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _create_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);




let createTask = (function() {
    let myTasks = [];
    let task;

    function createNewTask() {
        task = new _todos__WEBPACK_IMPORTED_MODULE_0__.objectCreate.createTodo(_create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.nameInput.value, _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.status.value,
            _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.dateInput.value, _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.descrInput.value);
    }

    function pushTask() {
        myTasks.push(task);
    }

    function clearCreateButton() {
        while (_create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.createForm.firstChild) {
            _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.createForm.removeChild(_create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.createForm.firstChild);
        }
    }

    // delete button functionality
    function deleteTask() {
        let index = this.getAttribute("data-index");
        console.log(index);
        myTasks.splice(index, 1);
        _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.clearTasksDivs();
        printMyTasks();
        console.log(myTasks);
    }

    // edit button functionality
    let editIndex;

    function editTask() {
        clearCreateButton();
        _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.appendInputs();
        _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.appendMainDivs();

        createEditButton();
    }

    function editObject() {
        myTasks[editIndex].name = _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.nameInput.value;
        myTasks[editIndex].status = _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.status.value;
        myTasks[editIndex].date = _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.dateInput.value;
        myTasks[editIndex].description = _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.descrInput.value;

        _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.clearTasksDivs();
        printMyTasks();
    }

    function createEditButton() {
        const editButton = document.createElement('button');
        editButton.innerHTML = 'edit task';
        editButton.addEventListener('click', () => {
            editObject();
            _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.closeCreateForm();
        })

        const divForEditAndCloseButtons = document.createElement('div');
        divForEditAndCloseButtons.id = 'div-for-edit-and-close-buttons';
        divForEditAndCloseButtons.appendChild(editButton);
        divForEditAndCloseButtons.appendChild(_create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.closeButton);
        _create_form__WEBPACK_IMPORTED_MODULE_2__.createModule.createForm.appendChild(divForEditAndCloseButtons);
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

            _skeleton__WEBPACK_IMPORTED_MODULE_1__.domManip.divForTasks.appendChild(divTask);
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



/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectCreate": () => (/* binding */ objectCreate)
/* harmony export */ });
let objectCreate = (function() {
    class createTodo {
        constructor(name, status, date, description) {
            this.name = name;
            this.status = status;
            this.date = date;
            this.description = description;
        }
    }

    return {
        createTodo: createTodo
    }
})()



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _create_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);





})();

/******/ })()
;