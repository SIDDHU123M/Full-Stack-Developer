# JavaScript Promises and Async/Await

Promises and async/await are powerful features in JavaScript that allow you to handle asynchronous operations in a more readable and manageable way. In this module, we will explore how to use Promises and async/await effectively.

## Promises

A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. It has three states: pending, fulfilled, or rejected. Promises are commonly used for handling asynchronous operations such as fetching data from an API or reading a file.

### Creating a Promise

You can create a Promise using the `Promise` constructor. The constructor takes a function with two parameters: `resolve` and `reject`. Inside this function, you can perform your asynchronous operation and call `resolve` when it succeeds or `reject` when it fails.

Here's an example of creating a Promise that resolves after a delay of 1 second:

```javascript
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

delay(1000)
  .then(() => {
    console.log('Promise resolved after 1 second');
  })
  .catch((error) => {
    console.error('Promise rejected:', error);
  });
```

### Chaining Promises

Promises can be chained using the `.then()` method. Each `.then()` call returns a new Promise, allowing you to perform sequential asynchronous operations.

Here's an example of chaining Promises to fetch data from an API and process it:

```javascript
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => {
    // Process the data
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

### Handling Errors with Promises

You can handle errors in Promises using the `.catch()` method. If any Promise in the chain rejects, the control jumps to the nearest `.catch()` block.

```javascript
fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    // Process the data
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

## Async/Await

Async/await is a syntactic sugar built on top of Promises that allows you to write asynchronous code in a synchronous manner. It makes asynchronous code look and behave more like synchronous code, which can be easier to read and understand.

### Async Functions

An async function is a function that returns a Promise implicitly. Inside an async function, you can use the `await` keyword to pause the execution until a Promise is resolved or rejected.

Here's an example of an async function that fetches data from an API:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Process the data
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

### Error Handling with Async/Await

You can handle errors in async functions using try...catch blocks. If an error occurs inside the try block or any Promise inside it rejects, the control jumps to the catch block.

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // Process the data
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

## Conclusion

Promises and async/await are powerful tools for handling asynchronous operations in JavaScript. They provide a more readable and manageable way to work with asynchronous code. By understanding how Promises and async/await work, you can write more efficient and maintainable JavaScript code.
