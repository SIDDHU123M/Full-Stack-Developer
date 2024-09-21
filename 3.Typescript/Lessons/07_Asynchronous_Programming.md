# Asynchronous Programming in TypeScript

In this lesson, we will explore asynchronous programming in TypeScript. Asynchronous programming allows us to handle operations that may take some time to complete, such as fetching data from an API or reading from a file. TypeScript provides several mechanisms for working with asynchronous code, including Promises and Async/Await.

## Promises

Promises are a way to handle asynchronous operations and their results. A Promise represents a value that may not be available yet. It can be in one of three states: pending, fulfilled, or rejected. 

To create a Promise, we use the `new Promise()` constructor and pass a function with two parameters: `resolve` and `reject`. Inside this function, we perform the asynchronous operation and call `resolve` with the result when it is available, or `reject` with an error if something goes wrong.

Here's an example of using a Promise to fetch data from an API:

```typescript
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    fetch('https://api.example.com/data')
      .then(response => response.text())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

In this example, the `fetchData` function returns a Promise that resolves with the fetched data as a string. We can then use `.then()` to handle the resolved value and `.catch()` to handle any errors that occur during the fetch operation.

## Async/Await

Async/Await is a syntactic sugar on top of Promises that allows us to write asynchronous code in a more synchronous-looking style. It makes working with Promises easier and more readable.

To use Async/Await, we mark a function as `async` and use the `await` keyword before a Promise. The `await` keyword pauses the execution of the function until the Promise is resolved or rejected, and then it returns the resolved value or throws the rejected error.

Here's an example of using Async/Await to fetch data from an API:

```typescript
async function fetchData(): Promise<string> {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.text();
    return data;
  } catch (error) {
    throw error;
  }
}

async function main() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

main();
```

In this example, the `fetchData` function is marked as `async`, and we use `await` to pause the execution until the fetch operation is complete. The `main` function is also marked as `async` and uses `await` to call `fetchData` and handle the result.

## Error Handling

When working with asynchronous code, it's important to handle errors properly. In Promises, we can use `.catch()` to handle any errors that occur during the asynchronous operation. In Async/Await, we can use `try/catch` blocks to catch and handle errors.

It's a good practice to throw an error in the Promise's `reject` callback or in the `catch` block of an Async/Await function. This allows the caller of the function to handle the error appropriately.

## Practical Examples

Now that you understand the basics of asynchronous programming in TypeScript, let's look at some practical examples. We will write code to fetch data from an API using Promises and Async/Await, handle errors, and perform additional operations on the fetched data.

Exercise 1: Fetch Data and Log Length

Write a function called `fetchAndLogLength` that fetches data from an API using Promises, logs the length of the fetched data, and returns the data as a string.

Exercise 2: Fetch Data and Parse JSON

Write a function called `fetchAndParseJSON` that fetches data from an API using Async/Await, parses the fetched data as JSON, and returns the parsed data as an object.

Exercise 3: Fetch Data and Handle Errors

Write a function called `fetchAndHandleErrors` that fetches data from an API using Promises, handles any errors that occur during the fetch operation, and returns an appropriate error message.

Exercise 4: Fetch Data and Retry

Write a function called `fetchAndRetry` that fetches data from an API using Async/Await, retries the fetch operation a specified number of times if it fails, and returns the fetched data.

Feel free to modify the exercises or come up with your own examples to practice asynchronous programming in TypeScript.

## Conclusion

Asynchronous programming is an essential skill for full-stack development, and TypeScript provides powerful tools like Promises and Async/Await to handle asynchronous operations. By mastering these concepts, you'll be able to write efficient and reliable code that can handle complex asynchronous tasks.