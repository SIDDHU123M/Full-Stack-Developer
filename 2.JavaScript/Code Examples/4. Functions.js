// Regular function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Function expression
const sayHello = function() {
  console.log("Hello!");
};

// Arrow function
const add = (a, b) => {
  return a + b;
};

// Higher-order function
function calculate(operation, a, b) {
  return operation(a, b);
}

// Callback function
function multiply(a, b) {
  return a * b;
}

// Using the functions
greet("John"); // Output: Hello, John!
sayHello(); // Output: Hello!
console.log(add(2, 3)); // Output: 5

const result = calculate(multiply, 4, 5);
console.log(result); // Output: 20