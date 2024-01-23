const multiply = () => {
  const input1 = parseInt(document.getElementById("input1").value);
  const input2 = parseInt(document.getElementById("input2").value);
  let arr = [];
  for (var i = 1; i <= input2; i++) {
    arr.push({ number: i, total: i * input1 });
  }
  let html = "";
  arr.forEach((d) => {
    html += `<tr><td>${input1}</td>
           <td>${d.number}</td>
           <td>${d.total}</td></tr>`;
  });
  document.getElementById("mul_table").innerHTML = html;
};
