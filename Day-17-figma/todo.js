let tasks = [];
let listEle = document.getElementById("todo-list");
let containerEle = document.getElementById("todo-container");
let formEle = document.getElementById("todo-form");
let titleEle = document.getElementById("title");
let detailEle = document.getElementById("detail");
let addBtnEle = document.getElementById("add-btn-container");
let editBtnEle = document.getElementById("edit-btn-container");
let navTitleEle = document.getElementById("nav-title");
let calenderEle = document.getElementById("calender");
let turnBackEle = document.getElementById("turn-back");
let activeTask;
let editMode = false;
let show = (ele) => {
  ele.style.display = "flex";
};
let hide = (ele) => {
  ele.style.display = "none";
};
hide(turnBackEle);
let addTask = () => {
  let title = titleEle.value;
  let detail = detailEle.value;

  tasks.push({ title, detail });
  render();

  show(containerEle);
  hide(formEle);
  hide(turnBackEle);
};
let showForm = () => {
  editMode = false;
  navTitleEle.innerText = "Add Task";
  titleEle.value = "";
  detailEle.value = "";
  hide(containerEle);
  show(formEle);
  hide(editBtnEle);
  show(addBtnEle);
  hide(calenderEle);
  show(turnBackEle);
};

let render = () => {
  navTitleEle.innerText = "Todo App";
  show(calenderEle);
  hide(turnBackEle);
  let html = "";
  tasks.forEach((d, i) => {
    html += `<div class="todo-bar">
             <div class="todo-bar-left-section">
               <div class="title">${d.title}</div>
               <div class="sub-title">${d.detail}</div>
             </div>
             <div class="todo-bar-right-section">
                <img src="./icons/pencil.svg" onclick="showEditForm(${i})" />
               <img src="./icons/trash.svg" onclick="deleteTask(${i})" />
               <img src="./icons/check-circle.svg" />
             </div>
           </div>`;
  });
  listEle.innerHTML = html;
};

let deleteTask = (i) => {
  tasks.splice(i, 1);
  render();
};

// let undoTask = () => {};
let showEditForm = (i) => {
  editMode = true;
  navTitleEle.innerText = "Edit Task";
  hide(containerEle);
  show(formEle);
  activeTask = i;
  titleEle.value = tasks[i].title;
  detailEle.value = tasks[i].detail;
  hide(addBtnEle);
  show(editBtnEle);
  hide(calenderEle);
  show(turnBackEle);
};
let editTask = () => {
  tasks[activeTask].title = titleEle.value;
  tasks[activeTask].detail = detailEle.value;
  show(containerEle);
  hide(formEle);
  render();
};

let save = () => {
  if (editMode) editTask();
  else addTask();
  event.preventDefault();
};
