// This is a simple "Hello World" program in Node.js

// Import the built-in 'http' module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, World!');
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});