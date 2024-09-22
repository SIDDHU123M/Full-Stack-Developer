// JavaScript Closures

// A closure is a function that has access to its own scope, the scope in which it was defined, and the global scope.
// It allows a function to access and manipulate variables from its outer (enclosing) scope even after the outer function has finished executing.

// Example 1: Basic Closure
function outerFunction() {
  const outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer scope
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: I am from the outer function

// In the above example, the innerFunction has access to the outerVariable even after the outerFunction has finished executing.
// This is possible because innerFunction forms a closure over the outer scope of outerFunction.

// Example 2: Closure with Parameters
function greet(name) {
  return function() {
    console.log(`Hello, ${name}!`);
  };
}

const greetJohn = greet('John');
greetJohn(); // Output: Hello, John!

// In the above example, the greet function returns an inner function that has access to the name parameter of the outer function.
// The returned function forms a closure over the name parameter, allowing us to greet different names using the same greet function.

// Example 3: Modifying Outer Variables
function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const incrementCounter = counter();
incrementCounter(); // Output: 1
incrementCounter(); // Output: 2

// In the above example, the inner function increments the count variable from the outer scope every time it is called.
// The count variable is preserved between function calls because of the closure formed by the inner function.

// Closures are commonly used in JavaScript for encapsulation, data privacy, and creating modules.
// They allow us to create functions with private variables that are inaccessible from outside the function scope.
// Closures are also used in event handling, callbacks, and asynchronous programming.

// This file intentionally left blank. Add your own code examples and explanations of closures in JavaScript.