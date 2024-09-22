// routing-example.js

// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route for the '/about' URL
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Define a route for the '/contact' URL
app.get('/contact', (req, res) => {
  res.send('This is the Contact page.');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});