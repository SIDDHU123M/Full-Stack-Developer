// This file contains an implementation of JWT authentication

// Import the necessary modules
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

// Set up a secret key for JWT
const secretKey = 'your-secret-key';

// Define a route for user authentication
app.post('/login', (req, res) => {
  // Get the username and password from the request body
  const { username, password } = req.body;

  // Check if the username and password are valid
  if (username === 'admin' && password === 'password') {
    // Generate a JWT token
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

    // Send the token as a response
    res.json({ token });
  } else {
    // Return an error if the username or password is incorrect
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Define a middleware to verify the JWT token
const verifyToken = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;

  // Check if the token is present
  if (token) {
    // Verify the token
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        // Return an error if the token is invalid
        res.status(401).json({ error: 'Invalid token' });
      } else {
        // Set the decoded token in the request object
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // Return an error if the token is missing
    res.status(401).json({ error: 'Token missing' });
  }
};

// Define a protected route that requires authentication
app.get('/protected', verifyToken, (req, res) => {
  // Access the decoded token from the request object
  const { username } = req.decoded;

  // Return a success message with the username
  res.json({ message: `Welcome, ${username}! This is a protected route.` });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});