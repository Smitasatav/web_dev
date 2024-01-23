let tasks = [];
let add = () => {
  let title = document.getElementById("title").value;
  let detail = document.getElementById("detail").value;
  tasks.push({ title, detail });
  render();
  document.getElementById("title").value = "";
  document.getElementById("detail").value = "";
  document.getElementById("customers").style.display = "block";
  document.getElementById("form").style.display = "none";
};

let showForm = () => {
  document.getElementById("customers").style.display = "none";
  document.getElementById("form").style.display = "block";
};
let render = () => {
  let html = "";
  tasks.forEach((d, i) => {
    html += `<tr>
            <td>${i + 1}</td>
            <td>${d.title}</td>
            <td>${d.detail}</td>
            <td><button onclick="deleteTask(${i})">X</button></td>
            </tr>`;
  });
  document.getElementById("task-table").innerHTML = html;
};

let deleteTask = (i) => {
  tasks.splice(i, 1);
  render();
};
