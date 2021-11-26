const button = document.getElementById("btn");
const el = document.getElementById("element");
button.onclick = function click() {
  console.log(el.value);
  el.value = "";
};
