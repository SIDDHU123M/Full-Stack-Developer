// This file contains an example of project setup using npm.

// Importing a package
const express = require('express');

// Creating an Express application
const app = express();

// Setting up routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Starting the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});