# JavaScript Asynchronous Programming

## Introduction

JavaScript is a single-threaded, non-blocking, asynchronous programming language. Asynchronous programming is essential in JavaScript because it allows your code to handle operations (like API calls or file I/O) that take time to complete without freezing the UI or blocking other operations.

In this lesson, we will explore:

- Synchronous vs Asynchronous programming
- Callbacks
- Promises
- `async`/`await`
- Error handling in asynchronous code

## Synchronous vs Asynchronous Programming

- **Synchronous**: In synchronous programming, operations are performed sequentially, one after another. If an operation takes time (like fetching data from a server), everything else in the program waits until the task completes.

- **Asynchronous**: In asynchronous programming, operations that take time are executed in the background. Meanwhile, other tasks can continue running, and the program doesn't freeze.

### Example:

**Synchronous code:**
```javascript
console.log("Start");
for (let i = 0; i < 1000000000; i++) {} // Simulates time-consuming task
console.log("End");

// Output:
// Start
// End (after delay)
```

**Asynchronous code:**
```javascript
console.log("Start");

setTimeout(() => {
    console.log("End");
}, 2000); // Delays the execution for 2 seconds

console.log("Continuing...");

// Output:
// Start
// Continuing...
// End (after 2 seconds)
```

In asynchronous code, the execution of certain tasks is deferred until later, without holding up the entire program.

## Callbacks

A **callback** is a function passed as an argument to another function, to be "called back" later. Callbacks are the original way to handle asynchronous behavior in JavaScript.

### Example:
```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John', age: 25 };
        callback(data);
    }, 1000); // Simulate network delay
}

fetchData((result) => {
    console.log(result); // Output after 1 second: { name: 'John', age: 25 }
});
```

### Callback Hell

Callbacks can lead to messy and difficult-to-read code, especially when multiple asynchronous operations are chained together. This is known as **callback hell**.

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 1000);
}

fetchData((result1) => {
    console.log(result1);
    fetchData((result2) => {
        console.log(result2);
        fetchData((result3) => {
            console.log(result3);
            // This nesting gets worse with more callbacks
        });
    });
});
```

## Promises

A **Promise** is a cleaner way to handle asynchronous code. It represents a value that may be available now, later, or never. A Promise can be in one of three states:

1. **Pending**: The operation is ongoing.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

### Creating and Using Promises

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
            resolve("Data received");
        } else {
            reject("Error fetching data");
        }
    }, 2000);
});

myPromise
    .then((result) => {
        console.log(result); // Output after 2 seconds: "Data received"
    })
    .catch((error) => {
        console.error(error); // If promise is rejected, output error
    });
```

### Chaining Promises

Promises can be chained together, making the code more readable than nested callbacks.

```javascript
fetchData()
    .then((data1) => {
        console.log(data1);
        return fetchMoreData();
    })
    .then((data2) => {
        console.log(data2);
        return fetchEvenMoreData();
    })
    .then((data3) => {
        console.log(data3);
    })
    .catch((error) => {
        console.error(error);
    });
```

## Async/Await

**`async`/`await`** is syntactic sugar built on Promises, making asynchronous code look more like synchronous code. It allows you to write asynchronous code with `await` in a cleaner, more readable manner.

### Example:
```javascript
async function fetchData() {
    try {
        const result1 = await fetch("https://api.example.com/data");
        const data1 = await result1.json();
        console.log(data1);

        const result2 = await fetch("https://api.example.com/moreData");
        const data2 = await result2.json();
        console.log(data2);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
```

### Benefits of `async`/`await`

- **Easier to read and write**: It looks more like synchronous code.
- **Handles errors using try/catch**: Unlike `.catch()` in Promises, `async`/`await` allows you to use `try/catch` blocks for error handling.

### Async/Await with Multiple Promises

You can also use `await` with multiple Promises that can execute concurrently.

```javascript
async function fetchData() {
    try {
        const [result1, result2] = await Promise.all([
            fetch("https://api.example.com/data1"),
            fetch("https://api.example.com/data2")
        ]);

        const data1 = await result1.json();
        const data2 = await result2.json();

        console.log(data1, data2);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();
```

## Error Handling in Asynchronous Code

Asynchronous code can lead to errors that are hard to track down. Here are some strategies for handling errors:

1. **Promises `.catch()` Method**: Use `.catch()` to handle any rejected Promise.
2. **Async/Await with `try/catch`**: Use `try/catch` blocks to handle errors in `async`/`await` functions.
3. **Global Promise Rejection Handling**: In Node.js or modern browsers, you can set a global handler for unhandled Promise rejections.

```javascript
window.addEventListener('unhandledrejection', (event) => {
    console.error("Unhandled rejection:", event.reason);
});
```

## Official Documentation and Resources

- [MDN Web Docs: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs: Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [JavaScript Info: Asynchronous Programming](https://javascript.info/async)
- [FreeCodeCamp: JavaScript Promises](https://www.freecodecamp.org/news/javascript-promises-explained/)

## Suggestions

- Practice chaining multiple Promises to handle complex asynchronous flows.
- Explore advanced use cases like **race conditions** using `Promise.race()`.
- Familiarize yourself with **error-first callbacks** for legacy codebases.

## Next Steps

- Next check out the projects made Using JS, lets apply what we have learned so far.
- Next Session >>> [Projects](../projects/)
