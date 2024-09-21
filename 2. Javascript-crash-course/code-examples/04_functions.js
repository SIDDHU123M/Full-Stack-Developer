// Function Declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Function Expression
const sayHello = function() {
  console.log("Hello!");
};

// Arrow Function
const add = (a, b) => a + b;

// Higher-Order Function
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

// Closure
const double = multiplyBy(2);

// Function Invocation
greet("John");
sayHello();
console.log(add(2, 3));
console.log(double(5));