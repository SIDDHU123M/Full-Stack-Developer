# JavaScript Scopes

In JavaScript, scopes determine the accessibility and visibility of variables, functions, and objects in your code. Understanding scopes is crucial for writing clean and maintainable code. This document provides a detailed guide to JavaScript scoping, covering function scope, block scope, and the global scope.

## Function Scope

In JavaScript, variables declared inside a function are only accessible within that function. This is known as function scope. Here's an example:

```javascript
function greet() {
  var message = 'Hello, world!';
  console.log(message);
}

greet(); // Output: Hello, world!
console.log(message); // Error: message is not defined
```

In the example above, the `message` variable is declared inside the `greet` function and can only be accessed within that function. Trying to access it outside the function will result in an error.

## Block Scope

Block scope was introduced in ES6 with the `let` and `const` keywords. Variables declared with `let` and `const` are block-scoped, meaning they are only accessible within the block of code where they are defined. Here's an example:

```javascript
function printNumbers() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i); // Error: i is not defined
}

printNumbers();
```

In the example above, the `i` variable is declared with `let` inside the `for` loop block. It is only accessible within the loop and trying to access it outside the loop will result in an error.

## Global Scope

Variables declared outside any function or block have global scope, meaning they are accessible from anywhere in your code. However, it is generally considered a best practice to limit the use of global variables to avoid naming conflicts and maintain code clarity. Here's an example:

```javascript
var name = 'John';

function sayHello() {
  console.log('Hello, ' + name + '!');
}

sayHello(); // Output: Hello, John!
console.log(name); // Output: John
```

In the example above, the `name` variable is declared outside any function and can be accessed from within the `sayHello` function as well as outside the function.

## Hoisting

JavaScript has a concept called hoisting, which means that variable and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations. Here's an example:

```javascript
console.log(message); // Output: undefined
var message = 'Hello, world!';
```

In the example above, the `message` variable is hoisted to the top of the scope, but its value is not initialized until the line where it is assigned `'Hello, world!'`. Therefore, accessing the variable before its initialization will result in `undefined`.

## Conclusion

Understanding JavaScript scopes is essential for writing clean and maintainable code. By properly managing scopes, you can avoid naming conflicts and improve the readability of your code. Remember to use function scope, block scope, and global scope appropriately based on your specific requirements.

For more information and examples, refer to the official JavaScript documentation.