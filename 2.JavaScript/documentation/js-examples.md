# JavaScript Examples

This document contains various JavaScript examples to help you understand different concepts and functionalities.

## Table of Contents
1. [Variables and Data Types](#variables-and-data-types)
2. [Functions](#functions)
3. [Loops](#loops)
4. [Arrays](#arrays)
5. [Objects](#objects)
6. [Promises and Async/Await](#promises-and-async-await)

## Variables and Data Types

### Example: Declaring Variables
```javascript
let name = 'John';
const age = 30;
var isStudent = true;
```

### Example: Data Types
```javascript
let number = 100; // Number
let text = 'Hello, World!'; // String
let isAvailable = false; // Boolean
let person = { firstName: 'Jane', lastName: 'Doe' }; // Object
let colors = ['red', 'green', 'blue']; // Array
let undefinedVar; // Undefined
let nullVar = null; // Null
```

## Functions

### Example: Function Declaration
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

### Example: Arrow Function
```javascript
const add = (a, b) => a + b;
```

## Loops

### Example: For Loop
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### Example: While Loop
```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

## Arrays

### Example: Array Methods
```javascript
let fruits = ['apple', 'banana', 'cherry'];
fruits.push('orange'); // Add to end
fruits.pop(); // Remove from end
fruits.shift(); // Remove from start
fruits.unshift('mango'); // Add to start
```

## Objects

### Example: Object Creation
```javascript
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    start: function() {
        console.log('Car started');
    }
};
```

## Promises and Async/Await

### Example: Using Promises
```javascript
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Promise resolved!');
    } else {
        reject('Promise rejected!');
    }
});

promise.then(message => {
    console.log(message);
}).catch(error => {
    console.log(error);
});
```

### Example: Using Async/Await
```javascript
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
```
