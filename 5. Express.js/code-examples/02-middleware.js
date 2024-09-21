// Example of middleware in Express.js

// Import required modules
const express = require('express');

// Create an instance of the Express app
const app = express();

// Define custom middleware function
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Use the custom middleware function
app.use(logger);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});