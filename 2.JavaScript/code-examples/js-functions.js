// Function Declarations
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Function Expressions
const sayHello = function() {
  console.log("Hello!");
};

// Arrow Functions
const add = (a, b) => a + b;

// Higher-Order Functions
function multiplyByTwo(number) {
  return number * 2;
}

function applyOperation(number, operation) {
  return operation(number);
}

// Example usage
greet("John"); // Output: Hello, John!
sayHello(); // Output: Hello!
console.log(add(2, 3)); // Output: 5
console.log(applyOperation(4, multiplyByTwo)); // Output: 8