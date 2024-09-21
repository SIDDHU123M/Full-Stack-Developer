// Import Express
const express = require('express');

// Create an instance of the Express app
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.post('/users', (req, res) => {
  res.send('User created');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});