# Express Framework

## Overview
In this lesson, we will explore the Express framework, a widely-used web application framework for Node.js. Express streamlines the development of web and mobile applications by offering a minimal and flexible set of features for building robust web applications and APIs. As a foundational component in many Node.js applications, understanding Express is crucial for full-stack developers.

## Learning Objectives
By the end of this lesson, you should be able to:
- Describe the purpose and advantages of using the Express framework.
- Install and set up an Express application.
- Create and define routes to handle various HTTP requests.
- Utilize middleware for added functionalities in your application.
- Implement error handling and logging for improved application robustness.

## Key Concepts

### 1. What is Express?
Express is a lightweight and unopinionated framework for building web applications on Node.js. It simplifies the process of developing server-side applications by providing:
- **Routing:** Easy management of URL routes and HTTP request handling.
- **Middleware:** A powerful system for handling requests, responses, and adding functionalities like logging, authentication, etc.
- **Integration:** Seamless integration with various templating engines, databases, and third-party middleware.

### 2. Advantages of Using Express
Using Express offers numerous benefits for developers:
- **Minimalist:** Express does not impose any particular structure or pattern on your application, allowing flexibility in how you organize your code.
- **Middleware Support:** With middleware, you can easily extend the functionality of your application by adding features such as logging, security checks, and error handling.
- **Community and Ecosystem:** A vibrant community means access to numerous plugins, middleware, and resources to enhance your application development.

## Installation

### 1. Install Node.js and npm
Before installing Express, ensure you have Node.js and npm (Node Package Manager) installed. You can verify their installation by running:

```bash
node -v
npm -v
```

If not installed, download and install Node.js from [nodejs.org](https://nodejs.org/).

### 2. Create a New Project Directory
Start by creating a new directory for your Express application:

```bash
mkdir my-express-app
cd my-express-app
```

### 3. Initialize npm
Initialize a new npm project in your directory:

```bash
npm init -y
```

This command creates a `package.json` file with default settings.

### 4. Install Express
To install Express, run the following command:

```bash
npm install express
```

This command installs Express and adds it as a dependency in your `package.json` file. You should see a new folder named `node_modules` created in your project directory.

## Creating a Basic Express Application

### 1. Setting Up Your Application
Create a new file named `app.js` in your project directory:

```bash
touch app.js
```

### 2. Write Your First Express Application
Open the `app.js` file in your code editor and add the following code:

```javascript
// app.js
const express = require('express'); // Importing the express module
const app = express(); // Creating an instance of express
const PORT = 3000; // Defining the port

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to the Express Application!'); // Sending a response to the client
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Logging the server status
});
```

### 3. Run Your Express Application
To run your Express application, use the following command in your terminal:

```bash
node app.js
```

You should see the message `Server is running on http://localhost:3000`. Open your web browser and navigate to `http://localhost:3000/` to see "Welcome to the Express Application!" displayed on the page.

### 4. Understanding the Code
- **`const express = require('express');`**: This line imports the Express module.
- **`const app = express();`**: Creates an instance of an Express application.
- **`app.get('/', ...)`**: Defines a route that listens for GET requests on the root URL (`/`).
- **`app.listen(PORT, ...)`**: Starts the server and listens on the specified port.

## Routing in Express

### 1. Defining Routes
Express allows you to define routes that respond to various HTTP methods such as GET, POST, PUT, and DELETE. Here’s how to define multiple routes:

```javascript
// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to the Express Application!');
});

// Define a route for the about page
app.get('/about', (req, res) => {
    res.send('About Us Page');
});

// Define a route for the contact page
app.get('/contact', (req, res) => {
    res.send('Contact Us Page');
});
```

### 2. Route Parameters
Express allows the use of route parameters for dynamic URLs. For example:

```javascript
// Define a route with a parameter
app.get('/users/:id', (req, res) => {
    const userId = req.params.id; // Accessing the route parameter
    res.send(`User ID: ${userId}`);
});
```

When you navigate to `/users/123`, the response will be "User ID: 123".

### 3. Query Parameters
You can also handle query parameters using `req.query`. For example:

```javascript
// Define a route with query parameters
app.get('/search', (req, res) => {
    const query = req.query.q; // Accessing the query parameter
    res.send(`Search query: ${query}`);
});
```

Accessing `/search?q=express` will respond with "Search query: express".

## Middleware in Express

### 1. What is Middleware?
Middleware functions are functions that have access to the request and response objects and the next middleware function in the request-response cycle. Middleware can perform a variety of tasks, including:
- Executing code.
- Modifying the request and response objects.
- Ending the request-response cycle.
- Calling the next middleware function in the stack.

### 2. Using Built-in Middleware
Express provides several built-in middleware functions, including:
- **`express.json()`**: Parses incoming JSON requests and puts the parsed data in `req.body`.
- **`express.urlencoded()`**: Parses incoming requests with URL-encoded payloads.

To use these middleware functions, add the following lines to your `app.js`:

```javascript
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
```

### 3. Creating Custom Middleware
You can create custom middleware functions for tasks such as logging requests or handling errors. Here’s an example of a simple logging middleware:

```javascript
// Custom logging middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`); // Log the request method and URL
    next(); // Call the next middleware or route handler
};

// Use the middleware in the application
app.use(logger);
```

Place `app.use(logger);` above your route definitions to ensure it logs every request before reaching the route handlers.

## Error Handling Middleware
Error handling middleware is defined with four arguments: `err`, `req`, `res`, and `next`. Here’s an example of an error-handling middleware function:

```javascript
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).send('Something broke!'); // Send a 500 response
});
```

This middleware catches any errors that occur in your application and responds with a 500 status code.

## Summary
In this lesson, you learned about the Express framework and its advantages for building web applications. You installed Express, set up a basic application, defined routes, and explored middleware. Understanding Express is essential for building efficient and scalable web applications in Node.js. 

## Suggested Next Steps
1. Explore routing in more depth by creating nested routes and using route groups.
2. Implement additional middleware for handling CORS, security, or authentication.
3. Study templating engines such as Pug or EJS to render dynamic content in your applications.

## Useful Resources
- [Express.js Official Documentation](https://expressjs.com/)
- [MDN Express Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/introduction)
- [FreeCodeCamp RESTful API Guide](https://www.freecodecamp.org/news/build-a-restful-api-with-node-and-express/)
- [YouTube: Express JS Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE)
- [Node.js, Express, MongoDB & More: Full-Stack JavaScript Development](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)
- [Express in Action](https://www.manning.com/books/express-in-action)
- [Middleware Guide](https://expressjs.com/en/guide/using-middleware.html)


## Navigation
- For further exploration, proceed to the next lesson: [File System Module](04_file_system_module.md).
- To return to the main topics, visit the [Node.js Key Topics](../README.md).
