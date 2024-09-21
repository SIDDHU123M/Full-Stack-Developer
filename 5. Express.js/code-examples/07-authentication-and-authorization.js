// Example of authentication and authorization in Express.js

// Import required modules
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Create an instance of the Express app
const app = express();

// Set up middleware for parsing JSON requests
app.use(express.json());

// Secret key for JWT
const secretKey = 'your-secret-key';

// Mock user data
const users = [
  { id: 1, username: 'user1', password: '$2b$10$1R7X3J8y5X7y8Z9y0Z1y2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w' }, // password: password1
  { id: 2, username: 'user2', password: '$2b$10$1R7X3J8y5X7y8Z9y0Z1y2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w' }, // password: password2
];

// Middleware for authenticating user
function authenticateUser(req, res, next) {
  try {
    // Get the authorization header
    const authHeader = req.headers.authorization;

    // Check if the authorization header is present
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }

    // Extract the token from the authorization header
    const token = authHeader.split(' ')[1];

    // Verify the token
    const decoded = jwt.verify(token, secretKey);

    // Check if the user exists
    const user = users.find((user) => user.id === decoded.id);
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Attach the user object to the request
    req.user = user;

    // Proceed to the next middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

// Route for user registration
app.post('/register', async (req, res) => {
  try {
    // Get the username and password from the request body
    const { username, password } = req.body;

    // Check if the username is already taken
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = { id: users.length + 1, username, password: hashedPassword };

    // Add the new user to the users array
    users.push(newUser);

    // Return a success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for user login
app.post('/login', async (req, res) => {
  try {
    // Get the username and password from the request body
    const { username, password } = req.body;

    // Find the user with the given username
    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id }, secretKey);

    // Return the token
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Protected route
app.get('/protected', authenticateUser, (req, res) => {
  res.json({ message: 'Protected route accessed successfully', user: req.user });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});