// Import required modules
const express = require('express');
const path = require('path');

// Create an instance of the Express app
const app = express();

// Configure static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});