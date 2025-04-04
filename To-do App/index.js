const toDoBar = document.getElementById("toDoBar");
const card = document.querySelector(".card");
const toDoList = document.getElementById("toDoList");


function addToList() {
    const toDo = toDoBar.value.trim();
    if (toDo === "") return;

    const li = document.createElement("li");
    const cbox = document.createElement("input");
    const deleteBtn = document.createElement("button");
    const textSpan = document.createElement("span");

    cbox.type = "checkbox";
    cbox.classList.add("checkboxes");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "🗑️";
    textSpan.textContent = toDo;
    li.classList.add("todo-item");


    const actionContainer = document.createElement("div");
    actionContainer.classList.add("actions");
    
    actionContainer.appendChild(cbox);
    actionContainer.appendChild(deleteBtn);
    
    li.appendChild(textSpan);
    li.appendChild(actionContainer);
    

    toDoList.appendChild(li);
    card.style.display = "block";

    cbox.addEventListener("change", () => {
        li.style.backgroundColor = cbox.checked ? "#d4edda" : "white";
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    toDoBar.value = "";
}


