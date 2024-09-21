// Example of error handling in Express.js

// Import required modules
const express = require('express');

// Create an instance of the Express app
const app = express();

// Define a route that throws an error
app.get('/error', (req, res, next) => {
  try {
    throw new Error('Something went wrong');
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});