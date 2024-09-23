### Project: To-Do List Application

**Objective**: Create a simple web-based To-Do List application using HTML, CSS, and JavaScript.

---

### Step 1: Set Up the Project Structure

1. **Create a folder for the project**. Name it `to_do_list`.

2. Inside the `to_do_list` folder, create the following files:
   - `index.html`
   - `style.css`
   - `script.js`

### Step 2: Write the HTML Structure

Open `index.html` and add the following code. This sets up the basic structure of the application:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <input type="text" id="taskInput" placeholder="Add a new task...">
        <button id="addTaskBtn">Add Task</button>
        <ul id="taskList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

#### Explanation:
- **DOCTYPE and html tags**: Declare the document type and language.
- **head section**: Contains metadata and links to the CSS file.
- **body section**: Contains the main content of the application, including:
  - A header (`h1`) for the title.
  - An input field (`input`) for users to enter tasks.
  - A button (`button`) to add the tasks.
  - An unordered list (`ul`) to display the tasks.

### Step 3: Add Basic Styles

Now, open `style.css` and add the following code for basic styling:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
}

input {
    width: calc(100% - 100px);
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #5cb85c;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #4cae4c;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li.completed {
    text-decoration: line-through;
    color: #aaa;
}

.removeBtn {
    background-color: #d9534f;
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.removeBtn:hover {
    background-color: #c9302c;
}
```

#### Explanation:
- **body**: Sets the font and background color.
- **container**: Centers the content with padding and shadow.
- **input and button**: Styles the input field and button.
- **ul and li**: Styles the task list, including hover effects for buttons.

### Step 4: Implement JavaScript Logic

Next, open `script.js` and add the following code. This will handle adding, removing, and completing tasks.

```javascript
// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('completeBtn');
    completeBtn.onclick = function () {
        li.classList.toggle('completed');
    };

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn');
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = ''; // Clear the input field
}

// Add event listener to the button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing Enter to add a task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
```

#### Explanation:
- **Select DOM elements**: Get references to the input field, button, and task list.
- **addTask function**: This function creates a new task element when the user clicks the button or presses Enter.
  - It checks if the input field is empty and alerts the user if it is.
  - It creates a new list item (`li`) and appends buttons for completing and removing tasks.
- **Event listeners**: The code adds an event listener to the button and also allows tasks to be added by pressing Enter.

### Step 5: Test the Application

Now that you’ve written the code, open `index.html` in your web browser. You should see the To-Do List application, where you can add tasks, mark them as complete, and remove them.

### Complete Code for the To-Do List Application

After following the steps above, your project files should look like this:

**1. `index.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <input type="text" id="taskInput" placeholder="Add a new task...">
        <button id="addTaskBtn">Add Task</button>
        <ul id="taskList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**2. `style.css`**
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
}

input {
    width: calc(100% - 100px);
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #5cb85c;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #4cae4c;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li.completed {
    text-decoration: line-through;
    color: #aaa;
}

.removeBtn {
    background-color: #d9534f;
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.removeBtn:hover {
    background-color: #c9302c;
}
```

**3. `script.js`**
```javascript
// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li

.textContent = taskText;

    // Create a complete button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('completeBtn');
    completeBtn.onclick = function () {
        li.classList.toggle('completed');
    };

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn');
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = ''; // Clear the input field
}

// Add event listener to the button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing Enter to add a task
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
```

---

### Conclusion

You now have a functional To-Do List application! This project helps reinforce concepts like DOM manipulation, event handling, and basic JavaScript functionality. 