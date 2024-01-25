let task = [];
// add button from figma-add
let add = () => {
  let title = document.getElementById("title").value;
  let detail = document.getElementById("detail").value;
  tasks.push({ title, detail });
  render();
  document.getElementById("title").value = "";
  document.getElementById("detail").value = "";
};

let render = () => {
  let html = "";
  tasks.forEach((d) => {
    html += `<tr>
                      <td>${d.title}</td> 
                      <td>${d.detail}</td>    
               </tr>`;
  });
};
