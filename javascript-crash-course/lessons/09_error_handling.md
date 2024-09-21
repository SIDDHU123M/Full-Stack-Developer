# Error Handling and Debugging

In JavaScript, error handling is an essential part of writing robust and reliable code. Errors can occur due to various reasons, such as incorrect input, network issues, or programming mistakes. Proper error handling allows you to gracefully handle these errors and provide meaningful feedback to users.

## Types of Errors

JavaScript has several built-in error types, including:

- `Error`: The base error type from which other error types are derived.
- `SyntaxError`: Occurs when there is a syntax error in the code.
- `ReferenceError`: Occurs when an undefined variable is accessed.
- `TypeError`: Occurs when a value is of the wrong type.
- `RangeError`: Occurs when a value is out of the range of acceptable values.
- `CustomError`: You can also create custom error types by extending the `Error` class.

## Try/Catch Statement

The `try/catch` statement is used to catch and handle errors in JavaScript. The `try` block contains the code that might throw an error, and the `catch` block handles the error if one occurs.

```javascript
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}
```

You can catch specific types of errors by specifying the error type in the `catch` block:

```javascript
try {
  // Code that might throw an error
} catch (error) {
  if (error instanceof TypeError) {
    // Handle TypeError
  } else if (error instanceof RangeError) {
    // Handle RangeError
  } else {
    // Handle other errors
  }
}
```

## Throwing Errors

You can also manually throw errors using the `throw` statement. This allows you to create custom error messages and control the flow of your program.

```javascript
throw new Error('Something went wrong');
```

## Debugging Techniques

Debugging is the process of finding and fixing errors in your code. Here are some common debugging techniques:

- **Console Logging**: Use `console.log()` to print values and debug information to the console.
- **Debugger Statement**: Insert the `debugger` statement in your code to pause execution and open the browser's developer tools.
- **Step-by-Step Execution**: Use the browser's developer tools to step through your code line by line and inspect variables.
- **Error Messages**: Read error messages in the console to identify the cause of the error.
- **Code Review**: Review your code carefully to spot any logical or syntax errors.

## Practical Examples

### Example 1: Handling Division by Zero

```javascript
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  } catch (error) {
    console.error(error.message);
    return NaN;
  }
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Division by zero
```

### Example 2: Debugging with Console Logging

```javascript
function calculateSum(a, b) {
  console.log('Calculating sum...');
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  const sum = a + b;
  console.log(`Sum: ${sum}`);
  return sum;
}

calculateSum(5, 10);
```

## Exercises

1. Write a function that takes two numbers as parameters and returns their division. Handle the case when the second number is zero and display an appropriate error message.
2. Debug the following code snippet and fix any errors:

```javascript
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

const numbers = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers));
```

## Additional Resources

- [MDN Web Docs: Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [MDN Web Docs: try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [MDN Web Docs: Debugging JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
```

Please let me know if you need help with anything else.