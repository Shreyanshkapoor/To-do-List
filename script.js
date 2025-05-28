const addBtn = document.querySelector(".addbtn");
const input = document.querySelector(".titlebar");

// Create a container for the tasks
const taskContainer = document.createElement("div");
taskContainer.classList.add("task-container");
document.body.appendChild(taskContainer);

// Handle Add Button Click
addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task title.");
    return;
  }

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  const taskName = document.createElement("span");
  taskName.textContent = taskText;
  taskName.classList.add("task-name");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.classList.add("delete-btn");

  // Mark as complete on click
  taskName.addEventListener("click", () => {
    taskName.classList.toggle("completed");
  });

  // For Editing
  taskName.addEventListener("dblclick", () => {
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = taskName.textContent;
    editInput.classList.add("edit-input");

    taskItem.replaceChild(editInput, taskName);
    editInput.focus();

    editInput.addEventListener("blur", () => {
      const newText = editInput.value.trim();
      if (newText !== "") {
        taskName.textContent = newText;
      }
      taskItem.replaceChild(taskName, editInput); 
    });

    editInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        editInput.blur(); 
      }
    });
  });

  // Delete task
  deleteBtn.addEventListener("click", () => {
    taskContainer.removeChild(taskItem);
  });

  taskItem.appendChild(taskName);
  taskItem.appendChild(deleteBtn);
  taskContainer.appendChild(taskItem);

  input.value = "";
});
