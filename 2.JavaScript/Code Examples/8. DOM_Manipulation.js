// This file demonstrates DOM manipulation in JavaScript

// Selecting DOM elements
const element = document.getElementById('myElement');
const elements = document.querySelectorAll('.myElements');

// Modifying DOM elements
element.innerHTML = 'Hello, World!';
element.style.color = 'red';

// Adding new DOM elements
const newElement = document.createElement('div');
newElement.innerHTML = 'New Element';
document.body.appendChild(newElement);

// Event handling
element.addEventListener('click', function() {
  console.log('Element clicked!');
});

// Event propagation
const parentElement = document.getElementById('parentElement');
const childElement = document.getElementById('childElement');

parentElement.addEventListener('click', function() {
  console.log('Parent element clicked!');
});

childElement.addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('Child element clicked!');
});