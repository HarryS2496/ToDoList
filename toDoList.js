function addTask() {
  // Get input element and valuje
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  // Do nothing if input empty
  if (taskText === "") return;

  // New list item (li)
  let li = document.createElement("li");
  li.textContent = taskText; // Sets text of list item

  // Task Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X" 
  deleteBtn.onclick = function() {
    li.remove(); // Removes task when X button is clicked
  };

  // Delete button appends to list item
  li.appendChild(deleteBtn);
  
  // Adds new list item to task list
  document.getElementById("taskList").appendChild(li);

  // Clear input for next task
  taskInput.value = "";
}