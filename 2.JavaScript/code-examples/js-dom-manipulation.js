// js-dom-manipulation.js

// Example 1: Changing the text content of an element
const element = document.getElementById('myElement');
element.textContent = 'Hello, World!';

// Example 2: Adding a new element to the DOM
const newElement = document.createElement('div');
newElement.textContent = 'This is a new element';
document.body.appendChild(newElement);

// Example 3: Modifying element styles
const elementToStyle = document.getElementById('myElement');
elementToStyle.style.backgroundColor = 'blue';
elementToStyle.style.color = 'white';

// Example 4: Adding event listeners
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Example 5: Removing an element from the DOM
const elementToRemove = document.getElementById('elementToRemove');
elementToRemove.remove();