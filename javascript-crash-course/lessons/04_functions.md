# Functions in JavaScript

In JavaScript, functions are an essential part of the language. They allow you to encapsulate reusable blocks of code and execute them whenever needed. Functions can take inputs, perform operations, and return results. They play a crucial role in organizing and structuring your code.

## Function Declaration vs. Function Expression

In JavaScript, there are two ways to define a function: function declaration and function expression.

### Function Declaration

A function declaration is defined using the `function` keyword, followed by the function name, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces.

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!
```

Function declarations are hoisted, which means they can be called before they are defined in the code.

### Function Expression

A function expression is defined by assigning a function to a variable. It starts with the `function` keyword, followed by an optional function name (known as a named function expression), a list of parameters enclosed in parentheses, and the function body enclosed in curly braces.

```javascript
const greet = function (name) {
  console.log(`Hello, ${name}!`);
};

greet("John"); // Output: Hello, John!
```

Function expressions are not hoisted, so they must be defined before they are called.

### Arrow Functions

Arrow functions are a concise way to define functions in JavaScript. They have a shorter syntax and automatically bind the `this` value to the surrounding context.

```javascript
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet("John"); // Output: Hello, John!
```

Arrow functions are especially useful when working with higher-order functions or when you want to preserve the value of `this` from the surrounding context.

## Higher-Order Functions

In JavaScript, functions can be passed as arguments to other functions and returned as values. Functions that accept other functions as arguments or return functions are called higher-order functions.

```javascript
function multiplyByTwo(number) {
  return number * 2;
}

function applyOperation(number, operation) {
  return operation(number);
}

const result = applyOperation(5, multiplyByTwo);
console.log(result); // Output: 10
```

Higher-order functions provide a powerful way to create reusable and composable code.

## Scope and Closures

In JavaScript, functions have access to variables defined in their outer scope. This concept is known as lexical scoping. Variables defined outside a function are accessible inside the function, but variables defined inside a function are not accessible outside the function.

```javascript
function outer() {
  const message = "Hello";

  function inner() {
    console.log(message);
  }

  inner(); // Output: Hello
}

outer();
```

Closures are a powerful feature of JavaScript that allows functions to retain access to variables from their outer scope even after the outer function has finished executing.

```javascript
function outer() {
  const message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;
}

const closure = outer();
closure(); // Output: Hello
```

In the example above, the `inner` function forms a closure with the `message` variable defined in the `outer` function. The `closure` variable holds a reference to the `inner` function, allowing it to access the `message` variable even after the `outer` function has returned.

## Practical Examples

### Example 1: Calculator

```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(multiply(5, 3)); // Output: 15
console.log(divide(5, 3)); // Output: 1.6666666666666667
```

### Example 2: Higher-Order Function

```javascript
function multiplyByTwo(number) {
  return number * 2;
}

function applyOperation(number, operation) {
  return operation(number);
}

const result = applyOperation(5, multiplyByTwo);
console.log(result); // Output: 10
```

## Exercises

1. Write a function `calculateArea` that takes the length and width of a rectangle as parameters and returns its area.
2. Write a function `capitalizeString` that takes a string as a parameter and returns the same string with the first letter capitalized.
3. Write a higher-order function `repeat` that takes a function and a number as parameters. It should call the function the specified number of times.
4. Write a function `createCounter` that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

## Additional Resources

- [MDN Web Docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN Web Docs: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN Web Docs: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)