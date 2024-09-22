// Middleware Example

// Middleware functions in Express.js are functions that have access to the request and response objects,
// and the next middleware function in the application's request-response cycle.
// They can be used to perform tasks such as logging, authentication, data validation, and more.

// Example of a custom middleware function
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Example of using the custom middleware function in an Express.js application
const express = require('express');
const app = express();

app.use(logger);

// Other routes and middleware can be defined here

app.listen(3000, () => {
  console.log('Server started on port 3000');
});