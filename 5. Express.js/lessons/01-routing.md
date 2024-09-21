# Routing in Express.js

Routing is an essential part of building web applications with Express.js. It allows you to define different routes for handling different HTTP requests. In this lesson, we will explore the basics of routing in Express.js and learn how to create routes for various HTTP methods.

## Basic Routing

To create a route in Express.js, you need to define the HTTP method and the path for the route. Here's an example of a simple route that handles a GET request:

```javascript
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});
```

In the above code, we use the `app.get()` method to define a route for handling GET requests to the `/hello` path. When a GET request is made to this path, the callback function `(req, res)` is executed, and the response is sent back with the message "Hello, World!".

## Route Parameters

Express.js allows you to define dynamic routes by using route parameters. Route parameters are named segments of the URL that start with a colon (`:`). Here's an example:

```javascript
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Retrieve user data based on the userId
  // ...
  res.send(`User with ID ${userId}`);
});
```

In the above code, we define a route with a route parameter `:id`. When a GET request is made to a URL like `/users/123`, the value `123` will be available in `req.params.id`. You can then use this value to retrieve user data from a database or perform other operations.

## Handling Different HTTP Methods

Express.js provides methods for handling different HTTP methods like GET, POST, PUT, DELETE, etc. Here's an example of handling a POST request:

```javascript
app.post('/users', (req, res) => {
  // Create a new user based on the request body
  // ...
  res.send('User created successfully');
});
```

In the above code, we use the `app.post()` method to define a route for handling POST requests to the `/users` path. When a POST request is made to this path, the callback function `(req, res)` is executed, and the response is sent back with the message "User created successfully".

## Exercise

Now it's time for you to practice creating routes in Express.js. Here's an exercise for you:

1. Create a new route for handling a GET request to the path `/products`.
2. In the route handler, send back a JSON response with a list of products.
3. Test the route using a tool like Postman or by making a GET request to `http://localhost:3000/products`.

That's it for this lesson! In the next lesson, we will learn about middleware in Express.js.
```

I hope this helps you get started with routing in Express.js! Let me know if you need any further assistance.