function addItem() {
    const newItemInput = document.getElementById("newItemInput");
    const todoList = document.getElementById("todoList");
    const newItem = document.createElement("li");
    newItem.innerHTML = `
        <input type="checkbox" onchange="markAsDone(this)">
        <span>${newItemInput.value}</span>
        <button class="delete" onclick="deleteItem(this)">
        <img src="https://www.svgrepo.com/show/21045/delete-button.svg" width=10px>
        </button>

        <button class="rewrite" onclick="rewriteItem(this)">
        <img src="https://illustoon.com/photo/3124.png" width=10px>
        </button>
    `;
    if(newItemInput.value === "") {
        alert("Please enter a task")
        return;
    }
    todoList.appendChild(newItem);
    newItemInput.value = "";
}

function markAsDone(checkbox) {
    const itemText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        itemText.style.textDecoration = "line-through";
    } else {
        itemText.style.textDecoration = "none";
    }
}

function deleteItem(button) {
    if(confirm("Are you sure you want to delete this task?") === false) {
        return;
    }
    const listItem = button.parentNode;
    listItem.remove();
}

function rewriteItem(button) {
    const listItem = button.parentNode;
    const itemText = listItem.querySelector("span");
    const newText = prompt("Edit task", itemText.innerText);
    if(newText === null) {
        return;
    }
    itemText.innerText = newText;
}