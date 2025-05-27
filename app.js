const inputBox = document.querySelector(".input-box");
const addBtn = document.querySelector(".add-btn");
const Item = document.querySelector(".item");

let addTask = () => {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    let taskText = document.createTextNode(inputBox.value);
    li.appendChild(taskText);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    Item.appendChild(li);
    saveData();
  }
  inputBox.value = "";
};

addBtn.addEventListener("click", addTask);

Item.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      const firstChild = e.target.querySelector("i.fa-circle-check");
      if (firstChild) {
        firstChild.remove();
      } else {
        const icon = document.createElement("i");
        icon.className = "fa-solid fa-circle-check";
        icon.style.marginRight = "10px";
        e.target.insertBefore(icon, e.target.firstChild);
        saveData();
      }
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", Item.innerHTML);
}

const showList = () => {
  Item.innerHTML = localStorage.getItem("data");
}
showList();