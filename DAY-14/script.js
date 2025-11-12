// DOM Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add Task Function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement('li');

    // Task text
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "✔";
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
    li.appendChild(completeBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "✖";
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    li.appendChild(deleteBtn);

    // Append task to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
