const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

taskList.addEventListener("click", function (e) {
    const item = e.target;
    if (item.classList.contains("task")) {
        item.classList.toggle("done");
    } else if (item.classList.contains("delete")) {
        item.parentElement.remove();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `${taskText} <span class="delete">Delete</span>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}
