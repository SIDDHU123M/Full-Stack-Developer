# Error Handling in JavaScript

## Introduction

Errors are inevitable when writing code. Handling errors gracefully is an essential part of developing robust and reliable JavaScript applications. JavaScript provides mechanisms to handle runtime errors, allowing developers to respond to exceptional cases and ensure the program continues to function, or at least fails gracefully.

In this lesson, we will explore:

- Types of JavaScript errors
- Throwing exceptions
- Using `try...catch...finally`
- Custom error handling
- Best practices for error handling

## Types of JavaScript Errors

JavaScript has several built-in error types that can occur during code execution:

1. **SyntaxError**: Occurs when there’s a mistake in the syntax, preventing the code from being parsed.
   ```javascript
   // SyntaxError: Unexpected token {
   let x = {;
   ```

2. **ReferenceError**: Occurs when referencing a variable that has not been declared.
   ```javascript
   console.log(nonExistentVariable); // ReferenceError
   ```

3. **TypeError**: Occurs when a value is not of the expected type, such as trying to call something that is not a function.
   ```javascript
   let x = 42;
   x(); // TypeError: x is not a function
   ```

4. **RangeError**: Occurs when a number is outside its valid range.
   ```javascript
   let arr = new Array(-1); // RangeError: Invalid array length
   ```

5. **URIError**: Occurs when `encodeURI()` or `decodeURI()` is used incorrectly.
   ```javascript
   decodeURIComponent('%'); // URIError: URI malformed
   ```

## Throwing Exceptions

In JavaScript, you can manually throw errors using the `throw` statement. This allows you to create custom errors when certain conditions are not met.

### Throwing an Error
```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

try {
    console.log(divide(4, 0));
} catch (error) {
    console.log(error.message); // Output: Division by zero is not allowed
}
```

In the above code, we manually throw an error when attempting to divide by zero, and we use a `try...catch` block to handle the error.

### Throwing Custom Errors

You can create custom error types by extending the built-in `Error` object.

```javascript
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

function performOperation() {
    throw new CustomError('Something went wrong in the operation!');
}

try {
    performOperation();
} catch (error) {
    console.log(error.name);    // Output: CustomError
    console.log(error.message); // Output: Something went wrong in the operation!
}
```

## Try...Catch...Finally

The `try...catch` statement is used to handle errors that occur during the execution of code.

### Syntax:
```javascript
try {
    // Code that might throw an error
} catch (error) {
    // Handle the error
} finally {
    // Optional: Code that runs regardless of the error
}
```

- The `try` block contains the code that may throw an error.
- The `catch` block handles the error if one is thrown in the `try` block.
- The `finally` block, if present, executes whether an error was thrown or not.

### Example:
```javascript
function readFile() {
    try {
        console.log('Reading file...');
        throw new Error('File not found');
    } catch (error) {
        console.log('Error:', error.message); // Output: File not found
    } finally {
        console.log('Closing file...'); // This runs regardless of an error
    }
}

readFile();
```

The `finally` block is useful when you want to ensure that certain code runs regardless of whether an error occurs, such as closing a file or releasing resources.

## Error Propagation

If an error is not caught in the current function, it will propagate up to the calling function, and so on, until it is caught or results in an unhandled error that crashes the program.

```javascript
function levelOne() {
    levelTwo();
}

function levelTwo() {
    levelThree();
}

function levelThree() {
    throw new Error('Error in levelThree');
}

try {
    levelOne();
} catch (error) {
    console.log(error.message); // Output: Error in levelThree
}
```

In this example, the error thrown in `levelThree()` propagates back through `levelTwo()` to `levelOne()`, where it is caught by the `try...catch` block.

## Best Practices for Error Handling

- **Catch specific errors**: Use different error types to handle specific cases rather than using a generic `catch` block.
- **Fail fast, fail safely**: If an error occurs, fail as soon as possible to avoid further issues. Handle the error gracefully to avoid crashing the entire application.
- **Always use `finally` for cleanup**: If you're working with resources like files or database connections, ensure they are properly closed or released in the `finally` block.
- **Avoid catching JavaScript errors globally**: Catching all errors globally can make it harder to debug. Instead, handle errors as close to their origin as possible.
- **Use custom error types**: When appropriate, define your own error types to make error handling more meaningful.

## Official Documentation and Resources

- [MDN Web Docs: Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements)
- [MDN Web Docs: Error Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [Handling Errors in Asynchronous Code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#handling_errors)

## Suggestions

- Practice using `try...catch` for both synchronous and asynchronous operations.
- Use custom error types for clarity in large applications.
- Ensure resources are always cleaned up by using `finally`.

## Next Steps

- In the next lesson, we will explore **JavaScript Modules**, where you'll learn how to break down your code into manageable and reusable components.
- Next Lesson >> [JavaScript Modules](09_js_modules.md)