const inputElement = document.querySelector("#new-task-input");
const taskButton = document.querySelector("#new-task-submit");
const taskListElement = document.querySelector("#tasks");

taskButton.addEventListener("click", (e) => {
    e.preventDefault(); 

    const task = inputElement.value.trim();

    if (!task) {
        alert("Please fill out the task");
        return;
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskContentElement = document.createElement("div");
    taskContentElement.classList.add("content");
    taskElement.appendChild(taskContentElement);

    const taskInputElement = document.createElement("input");
    taskInputElement.classList.add("text");
    taskInputElement.type = "text";
    taskInputElement.value = task;
    taskInputElement.setAttribute("readonly", "readonly");
    taskContentElement.appendChild(taskInputElement);

    const taskActionsElement = document.createElement("div");
    taskActionsElement.classList.add("actions");

    const taskEditButton = document.createElement("button");
    taskEditButton.classList.add("edit");
    taskEditButton.innerText = "Edit";

    const taskDeleteButton = document.createElement("button");
    taskDeleteButton.classList.add("delete");
    taskDeleteButton.innerText = "Delete";

    taskActionsElement.appendChild(taskEditButton);
    taskActionsElement.appendChild(taskDeleteButton);

    taskElement.appendChild(taskActionsElement);

    taskListElement.appendChild(taskElement);

    inputElement.value = "";

    taskEditButton.addEventListener("click", () => {
        if (taskEditButton.innerText.toLowerCase() == "edit") {
            taskInputElement.removeAttribute("readonly");
            taskInputElement.focus();
            taskEditButton.innerText = "Save";
        } else {
            taskInputElement.setAttribute("readonly", "readonly");
            taskEditButton.innerText = "Edit";
        }
    });

    taskDeleteButton.addEventListener("click", () => {
        taskListElement.removeChild(taskElement);
    });
});