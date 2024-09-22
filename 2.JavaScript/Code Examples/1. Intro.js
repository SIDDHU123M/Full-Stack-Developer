// This file demonstrates basic DOM manipulation and JavaScript usage in an HTML page.

// Selecting an element by its ID
const heading = document.getElementById('heading');

// Modifying the text content of the element
heading.textContent = 'Hello, JavaScript!';

// Adding an event listener to a button
const button = document.getElementById('button');
button.addEventListener('click', () => {
  // Modifying the text content of the element on button click
  heading.textContent = 'Button clicked!';
});

// Appending a new element to the document
const paragraph = document.createElement('p');
paragraph.textContent = 'This is a dynamically added paragraph.';
document.body.appendChild(paragraph);