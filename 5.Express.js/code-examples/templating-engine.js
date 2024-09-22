// This file provides sample code to demonstrate how templating engines work with Express.js.

// Import the necessary modules
const express = require('express');
const app = express();

// Set the view engine to use the templating engine of your choice (e.g., EJS, Pug)
app.set('view engine', 'ejs');

// Define a route that renders a template
app.get('/', (req, res) => {
  // Render the template and pass data to it
  res.render('index', { title: 'Express Templating Engine', message: 'Welcome to Express Templating Engine!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});