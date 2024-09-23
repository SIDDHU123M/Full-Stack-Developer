# Asynchronous JavaScript

## Introduction

JavaScript is a single-threaded language, meaning it can execute one task at a time. However, modern web applications need to perform tasks like loading data from APIs, handling user input, or waiting for timers without blocking the main thread. Asynchronous JavaScript enables non-blocking operations by using **callbacks**, **promises**, and **async/await**.

Understanding how to handle asynchronous code is crucial to building responsive and efficient applications.

## Synchronous vs. Asynchronous Code

- **Synchronous code** executes line by line, waiting for each task to complete before moving on to the next one.
- **Asynchronous code** allows the program to continue executing other tasks while waiting for a time-consuming operation (e.g., fetching data) to complete.

Here’s a simple comparison:

### Synchronous Example
```javascript
console.log('Start');

function fetchData() {
    for (let i = 0; i < 1000000000; i++) {
        // Simulate a long-running task
    }
    return 'Data Loaded';
}

console.log(fetchData()); // Output: "Data Loaded"
console.log('End');       // Output: "End"
```

In this example, the entire code execution is blocked until `fetchData()` completes.

### Asynchronous Example
```javascript
console.log('Start');

setTimeout(() => {
    console.log('Data Loaded'); // Output after 3 seconds
}, 3000);

console.log('End'); // Output: "End"
```

In this case, `setTimeout()` allows the program to continue executing while waiting for 3 seconds to pass.

## Callbacks

A **callback** is a function that is passed as an argument to another function and is executed after some operation has been completed. It is one of the earliest ways to handle asynchronous code in JavaScript.

### Example of a Callback
```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback('Data Loaded');
    }, 2000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData); // Output: "Data Loaded" after 2 seconds
```

While callbacks are simple, they can lead to deeply nested and difficult-to-read code, often referred to as **callback hell**.

### Example of Callback Hell
```javascript
setTimeout(() => {
    console.log('Task 1');
    setTimeout(() => {
        console.log('Task 2');
        setTimeout(() => {
            console.log('Task 3');
        }, 1000);
    }, 2000);
}, 3000);
```

## Promises

To solve the issues with callback hell, **promises** were introduced in ES6. A promise is an object representing the eventual completion or failure of an asynchronous operation.

- **Pending**: The initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

### Creating a Promise

A promise takes a function with two arguments: `resolve` and `reject`. If the asynchronous task is successful, `resolve` is called; if it fails, `reject` is called.

```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data Loaded');
    }, 2000);
});

fetchData.then((data) => {
    console.log(data); // Output: "Data Loaded" after 2 seconds
}).catch((error) => {
    console.log(error);
});
```

### Chaining Promises

You can chain promises to perform a series of asynchronous tasks in sequence without creating deeply nested code.

```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data Loaded');
    }, 2000);
});

fetchData
    .then((data) => {
        console.log(data);  // Output: "Data Loaded"
        return 'Processed Data';
    })
    .then((processedData) => {
        console.log(processedData); // Output: "Processed Data"
    })
    .catch((error) => {
        console.log('Error:', error);
    });
```

## Async/Await

Introduced in ES2017, **async/await** is built on top of promises and allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.

### Using `async` and `await`

- `async`: Declares a function as asynchronous, meaning it will return a promise.
- `await`: Pauses the execution of the function until the promise is fulfilled or rejected.

```javascript
async function fetchData() {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data Loaded');
        }, 2000);
    });

    console.log(data); // Output: "Data Loaded" after 2 seconds
}

fetchData();
```

### Error Handling with `try...catch`

Async/await makes error handling easier by using `try...catch` blocks.

```javascript
async function fetchData() {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Failed to load data');
            }, 2000);
        });

        console.log(data);
    } catch (error) {
        console.log(error); // Output: "Failed to load data"
    }
}

fetchData();
```

## Parallel Execution with `Promise.all()`

Sometimes, you want to run multiple asynchronous tasks in parallel and wait for all of them to complete. This can be done using `Promise.all()`.

```javascript
const fetchData1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Data from API 1');
    }, 2000);
});

const fetchData2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Data from API 2');
    }, 1000);
});

Promise.all([fetchData1, fetchData2])
    .then((results) => {
        console.log(results); // Output: ["Data from API 1", "Data from API 2"]
    })
    .catch((error) => {
        console.log(error);
    });
```

## Key Concepts to Remember

1. **Event Loop**: JavaScript uses an event loop to manage asynchronous operations. The event loop allows JavaScript to handle asynchronous tasks while keeping the single-threaded execution model.
   
2. **Microtasks vs Macrotasks**: Promises are placed in the **microtask** queue, while `setTimeout` and similar functions are placed in the **macrotask** queue. Microtasks always have priority over macrotasks.

3. **Promise Combinators**:
   - **`Promise.all()`**: Waits for all promises to resolve or rejects if any promise fails.
   - **`Promise.race()`**: Resolves or rejects as soon as one promise resolves or rejects.
   - **`Promise.allSettled()`**: Waits for all promises to settle (either resolve or reject) and returns an array of results.

## Official Documentation and Resources

- [MDN Web Docs: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs: async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Event Loop Explained](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [JavaScript.info: Asynchronous JavaScript](https://javascript.info/async)

## Suggestions

- Start applying `async/await` for cleaner, more readable code.
- Use `Promise.all()` for parallel asynchronous operations when possible.
- Practice handling asynchronous code in real-world scenarios such as API calls or file operations.
  
## Next Steps

- In the next lesson, we will cover **Error Handling in JavaScript**, focusing on common error types, throwing exceptions, and working with `try...catch` blocks.
- Next Lesson >> [Error Handling](08_js_error_handling.md)
