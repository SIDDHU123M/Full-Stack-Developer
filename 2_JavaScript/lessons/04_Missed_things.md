# Debugging

Debugging is the process of identifying and removing errors from your code. Here are some essential techniques:

## Console Logging
- **Using `console.log()`**: Print variable values and flow of execution to the console.
  ```javascript
  console.log('Value of x:', x);
  ```

- **Other Console Methods**: 
  - `console.warn()`: Prints a warning message.
    ```javascript
    console.warn('This is a warning!');
    ```
  - `console.error()`: Prints an error message.
    ```javascript
    console.error('This is an error!');
    ```
  - `console.table()`: Displays data in a tabular format.
    ```javascript
    console.table([{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]);
    ```

## Browser Developer Tools
- **Accessing Developer Tools**: Right-click on a webpage and select "Inspect" or press F12.
- **Elements Tab**: Inspect and modify HTML/CSS in real-time.
- **Console Tab**: View logs and run JavaScript commands.
- **Sources Tab**: Set breakpoints and step through code execution line by line.

## Breakpoints
- **Setting Breakpoints**: Click on the line number in the Sources tab to pause execution.
- **Step Over / Step Into**: Navigate through code execution to inspect values.
- **Watch Expressions**: Monitor specific variables' values during execution.

## Error Handling
- **Try-Catch Blocks**: Handle errors gracefully to prevent crashes.
  ```javascript
  try {
      let result = riskyFunction();
  } catch (error) {
      console.error('Error occurred:', error);
  }
  ```

## Common Errors
- **Syntax Errors**: Mistakes in code structure.
- **Reference Errors**: Using variables that are not declared.
- **Type Errors**: Operations on incompatible types.

---

# Events

Events are actions or occurrences that happen in the browser, such as user interactions (clicks, key presses, etc.).

## Types of Events
- **Mouse Events**: `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove`.
- **Keyboard Events**: `keydown`, `keyup`, `keypress`.
- **Form Events**: `submit`, `change`, `focus`, `blur`.
- **Window Events**: `load`, `resize`, `scroll`.

---

# Event Handling

Event handling involves responding to user interactions with the webpage.

## Adding Event Listeners
Use `addEventListener()` to attach an event handler to a DOM element.
```javascript
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});
```

## Removing Event Listeners
Use `removeEventListener()` to detach an event handler.
```javascript
function handleClick() {
    alert('Button clicked!');
}
document.getElementById('myButton').addEventListener('click', handleClick);
// To remove:
document.getElementById('myButton').removeEventListener('click', handleClick);
```

## Event Object
Each event has an associated event object that contains details about the event.
```javascript
document.addEventListener('click', function(event) {
    console.log('Clicked element:', event.target);
});
```

## Event Delegation
Attach a single event listener to a parent element to manage events for multiple child elements.
```javascript
document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target.matches('.child')) {
        alert('Child clicked!');
    }
});
```

## Custom Events
Create and dispatch custom events to handle specific scenarios.
```javascript
let customEvent = new CustomEvent('myEvent', { detail: { key: 'value' } });
document.dispatchEvent(customEvent);
```

---

# DOM Manipulation

DOM (Document Object Model) manipulation allows you to dynamically change the content, structure, and style of a webpage.

## Selecting Elements
- **By ID**: Use `document.getElementById()`.
  ```javascript
  let element = document.getElementById('myElement');
  ```
- **By Class Name**: Use `document.getElementsByClassName()`.
  ```javascript
  let elements = document.getElementsByClassName('myClass');
  ```
- **By Tag Name**: Use `document.getElementsByTagName()`.
  ```javascript
  let divs = document.getElementsByTagName('div');
  ```
- **Using Query Selector**: Use `document.querySelector()` or `document.querySelectorAll()`.
  ```javascript
  let firstDiv = document.querySelector('div');
  ```

## Modifying Elements
- **Changing Text Content**: Use `textContent`.
  ```javascript
  element.textContent = 'New Text';
  ```
- **Changing HTML Content**: Use `innerHTML`.
  ```javascript
  element.innerHTML = '<strong>New HTML Content</strong>';
  ```
- **Changing Attributes**: Use `setAttribute()`.
  ```javascript
  element.setAttribute('data-custom', 'value');
  ```

## Creating and Inserting Elements
- **Creating Elements**: Use `document.createElement()`.
  ```javascript
  let newDiv = document.createElement('div');
  ```
- **Appending Elements**: Use `appendChild()`.
  ```javascript
  document.body.appendChild(newDiv);
  ```
- **Inserting Before or After**: Use `insertBefore()`.
  ```javascript
  let referenceNode = document.getElementById('reference');
  document.body.insertBefore(newDiv, referenceNode);
  ```

## Removing Elements
- **Removing from DOM**: Use `remove()`.
  ```javascript
  element.remove();
  ```

## Cloning Elements
- **Clone an Element**: Use `cloneNode()`.
  ```javascript
  let clonedElement = element.cloneNode(true); // true for deep clone
  ```

## Modifying Styles
- **Changing CSS Styles**: Directly modify the `style` property.
  ```javascript
  element.style.color = 'red';
  ```

## Working with Child Nodes
- **Accessing Child Nodes**: Use properties like `childNodes`, `firstChild`, and `lastChild`.
  ```javascript
  let firstChild = parentElement.firstChild;
  ```
- **Appending Children**: Use `appendChild()`.
  ```javascript
  parentElement.appendChild(newChild);
  ```

## Replacing Elements
- **Replacing an Element**: Use `replaceChild()`.
  ```javascript
  parentElement.replaceChild(newElement, oldElement);
  ```

---

# 1. Arithmetic Operations

Arithmetic operations are the basic mathematical operations that you can perform on numbers in JavaScript. Here’s a closer look at each operation:

- **Addition (`+`)**: Combines two numbers or strings.
  ```javascript
  let sum = 5 + 3; // 8
  let concat = 'Hello' + ' ' + 'World'; // 'Hello World'
  ```
  
- **Subtraction (`-`)**: Finds the difference between two numbers.
  ```javascript
  let difference = 10 - 4; // 6
  ```

- **Multiplication (`*`)**: Multiplies two numbers.
  ```javascript
  let product = 6 * 7; // 42
  ```

- **Division (`/`)**: Divides one number by another.
  ```javascript
  let quotient = 20 / 5; // 4
  ```

- **Modulus (`%`)**: Returns the remainder of the division of two numbers.
  ```javascript
  let remainder = 10 % 3; // 1
  ```

---

# 2. Comparisons

Comparison operators are used to compare two values, returning a boolean (`true` or `false`).

- **Equality (`==`)**: Checks if two values are equal, performing type coercion if necessary.
  ```javascript
  let isEqual = (5 == '5'); // true
  ```

- **Strict Equality (`===`)**: Checks if two values are equal and of the same type.
  ```javascript
  let isStrictEqual = (5 === '5'); // false
  ```

- **Inequality (`!=`)**: Checks if two values are not equal, performing type coercion.
  ```javascript
  let isNotEqual = (5 != 3); // true
  ```

- **Strict Inequality (`!==`)**: Checks if two values are not equal and not of the same type.
  ```javascript
  let isStrictNotEqual = (5 !== '5'); // true
  ```

- **Greater Than (`>`)**: Checks if the left operand is greater than the right.
  ```javascript
  let isGreater = (10 > 5); // true
  ```

- **Less Than (`<`)**: Checks if the left operand is less than the right.
  ```javascript
  let isLess = (3 < 5); // true
  ```

- **Greater Than or Equal To (`>=`)**: Checks if the left operand is greater than or equal to the right.
  ```javascript
  let isGreaterOrEqual = (5 >= 5); // true
  ```

- **Less Than or Equal To (`<=`)**: Checks if the left operand is less than or

 equal to the right.
  ```javascript
  let isLessOrEqual = (3 <= 5); // true
  ```

---

# Conclusion

Debugging, event handling, DOM manipulation, arithmetic operations, and comparisons are crucial aspects of JavaScript that enable you to create interactive and dynamic web applications. Mastering these concepts will greatly enhance your web development skills.

---

## Next Steps

- Learn about objects and arrays in the next lesson.
- Next Lesson >> [Objects and Arrays](05_js_objects_and_arrays.md)