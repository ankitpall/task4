// scripts.js
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskInput.value;
        
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.className = 'mark-done';
        doneButton.onclick = function() {
            markAsDone(li);
        };
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        li.appendChild(span);
        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        
        taskInput.value = '';
    }
}

function markAsDone(taskItem) {
    const completedTaskList = document.getElementById('completed-task-list');
    const doneButton = taskItem.querySelector('.mark-done');
    
    doneButton.remove();
    completedTaskList.appendChild(taskItem);
}
