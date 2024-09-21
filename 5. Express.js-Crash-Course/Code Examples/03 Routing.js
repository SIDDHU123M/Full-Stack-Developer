// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/contact', (req, res) => {
  res.send('Contact page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});