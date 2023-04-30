const inputBox = document.getElementById('input-box');
const addBtn = document.querySelector('button');
const listContainer = document.getElementById('list-container');

// Function to add a new task to the list
function addTask() {
  // Get the value of the input box
  const newTask = inputBox.value.trim();

  // Check if the input is not empty
  if (newTask !== '') {
    // Create a new list item with a delete button and append it to the list container
    const li = document.createElement('li');
    li.innerHTML = `${newTask}<button class="delete-btn">Delete</button>`;
    listContainer.appendChild(li);

    // Clear the input box
    inputBox.value = '';
  }
}

// Add event listener to the "Add" button
addBtn.addEventListener('click', addTask);

// Add event listener to the input box to add a task when the "Enter" key is pressed
inputBox.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Add event listener to the list container to toggle the checked state of a task when clicked
listContainer.addEventListener('click', function (event) {
  if (event.target.nodeName === 'LI') {
    event.target.classList.toggle('checked');
  } else if (event.target.classList.contains('delete-btn')) {
    event.target.parentNode.remove();
  }
});
