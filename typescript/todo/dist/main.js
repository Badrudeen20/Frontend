"use strict";
// const form  = document.querySelector<HTMLFormElement>("form")
const formId = document.getElementById("todoForm");
const input = document.querySelector("form input");
const list = document.querySelector("ul");
const tasks = [];
formId === null || formId === void 0 ? void 0 : formId.addEventListener('submit', (e) => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    const task = {
        id: uuid(100),
        name: input.value,
        complete: true,
        createdAt: new Date()
    };
    tasks.push(task);
    addList(task);
    input.value = "";
});
function addList(task) {
    const label = document.createElement("label");
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.checked = task.complete;
    label.append(checkbox, task.name);
    li.append(label);
    list === null || list === void 0 ? void 0 : list.append(li);
    return true;
}
function uuid(len) {
    return Math.floor(Math.random() * len);
}
