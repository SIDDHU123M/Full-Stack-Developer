# Middleware in Express.js

Middleware plays a crucial role in request processing in Express.js. It allows you to perform additional operations on the request and response objects before they reach the route handler. Express.js provides built-in middleware functions and allows you to create custom middleware.

## Built-in Middleware

Express.js provides several built-in middleware functions that you can use in your application:

- `express.json()`: Parses incoming requests with JSON payloads.
- `express.urlencoded()`: Parses incoming requests with URL-encoded payloads.
- `express.static()`: Serves static files from a directory.
- `express.Router()`: Creates modular route handlers.

## Creating Custom Middleware

You can create custom middleware functions in Express.js using the `app.use()` method. A middleware function takes three arguments: the request object, the response object, and the next function. It can perform operations on the request and response objects and then call the `next` function to pass control to the next middleware or route handler.

Here's an example of a custom middleware function that logs the request method and URL:

```javascript
const express = require('express');
const app = express();

// Custom middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Register the middleware
app.use(logger);

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In the above example, the `logger` middleware function logs the request method and URL to the console. It then calls the `next` function to pass control to the next middleware or route handler.

## Error Handling Middleware

Express.js also allows you to create error handling middleware functions. These functions have four arguments: the error object, the request object, the response object, and the next function. Error handling middleware functions are used to handle errors that occur during request processing.

Here's an example of an error handling middleware function:

```javascript
const express = require('express');
const app = express();

// Error handling middleware function
const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
};

// Register the error handling middleware
app.use(errorHandler);

// Route handler
app.get('/', (req, res) => {
  throw new Error('Something went wrong');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In the above example, the `errorHandler` middleware function logs the error to the console and sends a 500 Internal Server Error response. It is registered using `app.use()` to handle any errors that occur during request processing.

## Conclusion

Middleware is a powerful feature in Express.js that allows you to modify the request and response objects and handle errors. Understanding how to use built-in middleware and create custom middleware is essential for building robust and flexible Express.js applications.
```

Let me know if you need help with anything else.