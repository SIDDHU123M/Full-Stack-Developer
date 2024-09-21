# Advanced DOM Manipulation

In this lesson, we will explore advanced DOM manipulation techniques using JavaScript. The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of objects, allowing us to interact with and manipulate the content and styles of a web page.

## Selecting Elements

To manipulate elements in the DOM, we first need to select them. There are several methods available for selecting elements:

- `getElementById(id)`: Selects an element by its unique ID.
- `getElementsByClassName(className)`: Selects elements by their class name.
- `getElementsByTagName(tagName)`: Selects elements by their tag name.
- `querySelector(selector)`: Selects the first element that matches the specified CSS selector.
- `querySelectorAll(selector)`: Selects all elements that match the specified CSS selector.

```javascript
// Selecting elements by ID
const elementById = document.getElementById('myElement');

// Selecting elements by class name
const elementsByClassName = document.getElementsByClassName('myClass');

// Selecting elements by tag name
const elementsByTagName = document.getElementsByTagName('div');

// Selecting elements using CSS selectors
const elementBySelector = document.querySelector('.myClass');
const elementsBySelectorAll = document.querySelectorAll('div');
```

## Creating and Updating Elements

Once we have selected an element, we can create new elements and update existing ones.

### Creating Elements

To create a new element, we can use the `createElement(tagName)` method. We can then set attributes and content for the new element before appending it to the DOM.

```javascript
// Create a new element
const newElement = document.createElement('div');

// Set attributes
newElement.setAttribute('class', 'myClass');
newElement.setAttribute('id', 'myId');

// Set content
newElement.textContent = 'Hello, world!';

// Append the new element to the DOM
document.body.appendChild(newElement);
```

### Updating Elements

To update an existing element, we can modify its attributes, content, and styles.

```javascript
// Select an existing element
const existingElement = document.getElementById('myElement');

// Update attributes
existingElement.setAttribute('class', 'newClass');
existingElement.setAttribute('id', 'newId');

// Update content
existingElement.textContent = 'Updated content';

// Update styles
existingElement.style.color = 'red';
existingElement.style.fontSize = '20px';
```

## Deleting Elements

To remove an element from the DOM, we can use the `remove()` method.

```javascript
// Select an element to remove
const elementToRemove = document.getElementById('myElement');

// Remove the element from the DOM
elementToRemove.remove();
```

## Event Handling

Event handling allows us to respond to user interactions, such as clicks and key presses. We can attach event listeners to elements to execute code when a specific event occurs.

```javascript
// Select an element
const button = document.getElementById('myButton');

// Attach an event listener
button.addEventListener('click', function() {
  // Code to execute when the button is clicked
  console.log('Button clicked!');
});
```

## Practical Examples

### Example 1: Creating a Todo List

```html
<!DOCTYPE html>
<html>
<head>
  <title>Todo List</title>
</head>
<body>
  <h1>Todo List</h1>
  <ul id="todoList">
    <li>Buy groceries</li>
    <li>Walk the dog</li>
    <li>Do laundry</li>
  </ul>
  <input type="text" id="newTodoInput">
  <button id="addTodoButton">Add Todo</button>

  <script src="script.js"></script>
</body>
</html>
```

```javascript
// Select elements
const todoList = document.getElementById('todoList');
const newTodoInput = document.getElementById('newTodoInput');
const addTodoButton = document.getElementById('addTodoButton');

// Add event listener to the button
addTodoButton.addEventListener('click', function() {
  // Get the value from the input
  const newTodo = newTodoInput.value;

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.textContent = newTodo;

  // Append the new list item to the todo list
  todoList.appendChild(listItem);

  // Clear the input
  newTodoInput.value = '';
});
```

### Example 2: Updating Styles on Hover

```html
<!DOCTYPE html>
<html>
<head>
  <title>Hover Example</title>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: blue;
      transition: background-color 0.3s;
    }

    .box:hover {
      background-color: red;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

## Exercises

1. Create a form with input fields for name and email. Add a button that, when clicked, displays an alert with the entered name and email.

2. Create a list of items. Add a button that, when clicked, removes the last item from the list.

3. Create a gallery of images. Add event listeners to the images so that when clicked, they display a larger version of the image in a modal.

## Additional Resources

- [MDN Web Docs: Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN Web Docs: Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [MDN Web Docs: EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN Web Docs: Element.remove()](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)
- [MDN Web Docs: CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [MDN Web Docs: CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)