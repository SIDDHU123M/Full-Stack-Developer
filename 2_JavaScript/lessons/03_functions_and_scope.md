# Functions and Scope

## Introduction

In JavaScript, functions are an essential part of the language. They allow you to group and organize code into reusable blocks. Functions can take input, perform actions, and return output. In this lesson, we will explore the basics of functions and how they work in JavaScript.

## Function Declaration

A function declaration is a way to define a function in JavaScript. It consists of the `function` keyword, followed by the function name, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces.

Here is an example of a function declaration:

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

In this example, the `greet` function takes a `name` parameter and logs a greeting message to the console.

## Function Invocation

To execute a function and run its code, you need to invoke or call the function. You can do this by using the function name followed by parentheses, optionally passing arguments inside the parentheses.

Here is an example of invoking the `greet` function:

```javascript
greet("John");
```

This will output `Hello, John!` to the console.

## Function Return

Functions can also return values using the `return` keyword. The `return` statement ends the function execution and specifies the value to be returned.

Here is an example of a function that calculates the square of a number and returns the result:

```javascript
function square(number) {
  return number * number;
}
```

You can use the returned value in other parts of your code, like assigning it to a variable or using it in an expression.

```javascript
let result = square(5);
console.log(result); // Output: 25
```

## Function Scope

JavaScript has function scope, which means that variables defined inside a function are only accessible within that function. These variables are known as local variables.

Here is an example that demonstrates function scope:

```javascript
function sayHello() {
  let message = "Hello!";
  console.log(message);
}

sayHello(); // Output: Hello!
console.log(message); // Error: message is not defined
```

In this example, the `message` variable is defined inside the `sayHello` function and can only be accessed within that function. Trying to access it outside the function will result in an error.

## Conclusion

Functions are a fundamental concept in JavaScript. They allow you to encapsulate code into reusable blocks, pass data into and out of the function, and control variable scope. Understanding how functions work is essential for writing clean and modular JavaScript code.
```

Please note that the file is intentionally left blank as per your request.