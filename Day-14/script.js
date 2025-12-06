// 1. Get the HTML elements we need to interact with
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// 2. Function to add a new task
function addTask() {
    // Get the text from the input and remove extra spaces
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return; // Stop the function if empty
    }

    // 3. Create the new list item element (<li>)
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">X</button>
    `;

    // 4. Attach event listeners to the new list item

    // A. Toggle completion on click (toggles the 'completed' CSS class)
    // The 'addEventListener' waits for an event (click) on the 'listItem'
    listItem.addEventListener('click', function(event) {
        // Only toggle if the click wasn't on the delete button
        if (event.target.className !== 'delete-btn') {
            listItem.classList.toggle('completed');
        }
    });

    // B. Delete the task
    // The querySelector finds the delete button inside the new list item
    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        // 'remove()' is a simple way to delete the element from the DOM
        listItem.remove();
    });

    // 5. Add the new list item to the main list
    taskList.appendChild(listItem);

    // 6. Clear the input field for the next task
    taskInput.value = "";
}

// OPTIONAL: Allow adding a task by pressing the 'Enter' key
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});