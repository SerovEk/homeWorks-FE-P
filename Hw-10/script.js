function main() {
  const buttonF = document.getElementById("firstBtn");
  const elem = document.getElementById("element");
  const toDoList = document.getElementById("list");

  function toDo(value) {
    // create elements
    const li = document.createElement("li");
    const buttonS = document.createElement("button");
    const check = document.createElement("input");
    // li
    li.className = "li";
    li.textContent = value;
    toDoList.appendChild(li);
    // btn
    buttonS.textContent = "Delete";
    li.appendChild(buttonS);
    buttonS.addEventListener("click", () => {
      toDoList.removeChild(li);
    });
    // checkbox
    check.setAttribute("type", "checkbox");
    li.prepend(check);
    check.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
    });
  }

  buttonF.addEventListener("click", () => {
    if (elem.value === "") return;
    toDo(elem.value);
    console.log(elem.value);
    elem.value = "";
  });
}
main();
