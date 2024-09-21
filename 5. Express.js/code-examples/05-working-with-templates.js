// Example of working with templates in Express.js

// Import required modules
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, '../views'));

// Define a route that renders a dynamic HTML page using a template
app.get('/', (req, res) => {
  const data = {
    title: 'Express.js Crash Course',
    message: 'Welcome to the Express.js Crash Course!',
  };
  res.render('index', data);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});