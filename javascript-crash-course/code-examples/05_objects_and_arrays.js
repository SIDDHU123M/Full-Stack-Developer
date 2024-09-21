// Todo List Application

// Define an array to store the todo items
const todos = [];

// Function to add a new todo item
function addTodoItem(title, completed = false) {
  const todo = {
    title,
    completed,
  };
  todos.push(todo);
}

// Function to mark a todo item as completed
function completeTodoItem(index) {
  if (index >= 0 && index < todos.length) {
    todos[index].completed = true;
  }
}

// Function to delete a todo item
function deleteTodoItem(index) {
  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);
  }
}

// Function to display all todo items
function displayTodoItems() {
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo.title} - ${todo.completed ? 'Completed' : 'Incomplete'}`);
  });
}

// Add some initial todo items
addTodoItem('Buy groceries');
addTodoItem('Finish homework');
addTodoItem('Go for a run');

// Mark the second todo item as completed
completeTodoItem(1);

// Delete the first todo item
deleteTodoItem(0);

// Display all todo items
displayTodoItems();