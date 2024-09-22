// error-handling.js

// Example of error handling in Express.js

// Middleware to handle errors
function errorHandler(err, req, res, next) {
  // Log the error
  console.error(err);

  // Set the response status code
  res.status(500);

  // Send the error message as the response
  res.send({
    error: 'Internal Server Error',
    message: 'An error occurred while processing the request.',
  });
}

// Example route that throws an error
app.get('/example', (req, res, next) => {
  try {
    // Some code that may throw an error
    throw new Error('Something went wrong');
  } catch (err) {
    // Pass the error to the error handler middleware
    next(err);
  }
});

// Register the error handler middleware
app.use(errorHandler);