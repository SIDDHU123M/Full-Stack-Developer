// Error handling example in Node.js

// Example 1: Handling synchronous errors
try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
  console.error('An error occurred:', error.message);
}

// Example 2: Handling asynchronous errors with callbacks
function asyncFunction(callback) {
  // Simulate an asynchronous operation
  setTimeout(() => {
    try {
      // Code that may throw an error
      callback(null, result);
    } catch (error) {
      // Handle the error
      callback(error);
    }
  }, 1000);
}

asyncFunction((error, result) => {
  if (error) {
    console.error('An error occurred:', error.message);
  } else {
    console.log('Result:', result);
  }
});

// Example 3: Handling asynchronous errors with Promises
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      try {
        // Code that may throw an error
        resolve(result);
      } catch (error) {
        // Handle the error
        reject(error);
      }
    }, 1000);
  });
}

asyncFunction()
  .then((result) => {
    console.log('Result:', result);
  })
  .catch((error) => {
    console.error('An error occurred:', error.message);
  });

// Example 4: Handling uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('An uncaught exception occurred:', error);
  process.exit(1);
});

// Example 5: Handling unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('An unhandled promise rejection occurred:', error);
  process.exit(1);
});