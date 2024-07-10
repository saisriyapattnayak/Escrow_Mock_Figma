let selects = document.querySelectorAll("select");
// let selectAc = document.getElementById("ANoption");
let subbtn = document.querySelector("button");
let table = document.querySelector("table");
let article = document.getElementsByClassName(".two");

subbtn.addEventListener("click", () => {
  event.preventDefault();
  let val = selects[0].value;
  let val2 = selects[1].value;
  let row1 = document.createElement("tr");
  let row2 = document.createElement("tr");
  let row3 = document.createElement("tr");
  let row4 = document.createElement("tr");
  let row5 = document.createElement("tr");

  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");

  let td6 = document.createElement("td");
  let td7 = document.createElement("td");
  let td8 = document.createElement("td");
  let td9 = document.createElement("td");
  let td10 = document.createElement("td");

  let td11 = document.createElement("td");
  let td12 = document.createElement("td");
  let td13 = document.createElement("td");
  let td14 = document.createElement("td");
  let td15 = document.createElement("td");

  let td16 = document.createElement("td");
  let td17 = document.createElement("td");
  let td18 = document.createElement("td");
  let td19 = document.createElement("td");
  let td20 = document.createElement("td");

  let td21 = document.createElement("td");
  let td22 = document.createElement("td");
  let td23 = document.createElement("td");
  let td24 = document.createElement("td");
  let td25 = document.createElement("td");

  td1.innerText = "07/05/2024 01:04 PM";
  td2.innerText = ` ₹ ${Math.floor(Math.random() * 100000)}`;
  td2.style.color = "green";
  td2.style.textAlign = "end";
  td3.innerText = `₹ ${Math.floor(Math.random() * 10000)}`;
  td3.style.textAlign = "end";
  td4.innerText = "CMS3938564916";
  td4.style.textAlign = "end";
  td5.innerText = "ACOCF7RRUY407QHU";
  td5.style.textAlign = "center";

  td6.innerText = "04/05/2024 12:38 PM";
  td7.innerText = ` ₹ ${Math.floor(Math.random() * 100000)}`;
  td7.style.color = "green";
  td7.style.textAlign = "end";
  td8.innerText = `₹ ${Math.floor(Math.random() * 100000)}`;
  td8.style.textAlign = "end";
  td9.innerText = "CMS3938534516";
  td9.style.textAlign = "end";
  td10.innerText = "ACOCF76G07QHU";
  td10.style.textAlign = "center";

  td11.innerText = "07/01/2024 05:09 PM";
  td12.innerText = ` ₹ ${Math.floor(
    Math.random() * 10000
  )}${Math.random().toFixed(2)}`;
  td12.style.color = "green";
  td12.style.textAlign = "end";
  td13.innerText = `₹ ${Math.floor(
    Math.random() * 10000
  )}${Math.random().toFixed(2)}`;
  td13.style.textAlign = "end";
  td14.innerText = "ERF393784916";
  td14.style.textAlign = "end";
  td15.innerText = "ACOCF7RGJN407QHU";
  td15.style.textAlign = "center";

  td16.innerText = "07/05/2023 06:13 PM";
  td17.innerText = ` ₹ ${Math.floor(
    Math.random() * 10000
  )}${Math.random().toFixed(2)}`;
  td17.style.color = "green";
  td17.style.textAlign = "end";
  td18.innerText = `₹ ${Math.floor(
    Math.random() * 10000
  )}${Math.random().toFixed(2)}`;
  td18.style.textAlign = "end";
  td19.innerText = "CMS3938564916";
  td19.style.textAlign = "end";
  td20.innerText = "ACOCF7RRUY407QHU";
  td20.style.textAlign = "center";

  td21.innerText = "27/04/2024 08:02 PM";
  td22.innerText = ` ₹ ${Math.floor(Math.random() * 100000)}`;
  td22.style.color = "green";
  td22.style.textAlign = "end";
  td23.innerText = `₹ ${Math.floor(Math.random() * 100000)}`;
  td23.style.textAlign = "end";
  td24.innerText = "CMS3938YJ4916";
  td24.style.textAlign = "end";
  td25.innerText = "ACOCF7RVH12Y407QHU";
  td25.style.textAlign = "center";

  row1.append(td1, td2, td3, td4, td5);
  row2.append(td6, td7, td8, td9, td10);
  row3.append(td11, td12, td13, td14, td15);
  row4.append(td16, td17, td18, td19, td20);
  row5.append(td21, td22, td23, td24, td25);
  table.append(row1, row2, row3, row4, row5);

  selects[0].value=""
  selects[1].value=""
});
