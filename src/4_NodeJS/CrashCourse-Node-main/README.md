# Introduction to Node.js
What is Node.js? Why use it? Key features and architecture.



# Introduction to Node.js

## What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows developers to use JavaScript to write server-side code, enabling the creation of scalable and high-performance network applications.

## Why use Node.js?

- **JavaScript Everywhere**: Use the same language for both client-side and server-side development.
- **Non-blocking I/O**: Efficiently handle multiple operations concurrently without blocking the execution thread.
- **Large Ecosystem**: Access to a vast number of libraries and tools via npm (Node Package Manager).
- **Active Community**: Benefit from a large and active community that continuously contributes to the improvement of Node.js.

## Key Features and Architecture

### Event-Driven Architecture

Node.js uses an event-driven architecture, which means it operates on an event loop. This allows Node.js to handle multiple operations concurrently without blocking the execution thread.

### Non-blocking I/O

Node.js uses non-blocking, asynchronous I/O operations, which makes it highly efficient and suitable for I/O-heavy tasks.

### Single-Threaded

Node.js operates on a single-threaded event loop, but it can handle multiple connections simultaneously. This is achieved through its non-blocking I/O and event-driven architecture.

### V8 JavaScript Engine

Node.js is built on the V8 JavaScript engine, developed by Google. V8 compiles JavaScript code into machine code, making it fast and efficient.

### npm (Node Package Manager)

Node.js comes with npm, which is the largest ecosystem of open-source libraries in the world. It allows developers to easily manage and share packages.

### Example Code

Here is a simple example of a Node.js script that demonstrates its non-blocking, event-driven nature:

```javascript
const fs = require('fs');

// Asynchronous, non-blocking file read
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log('This will log first, before the file content is read.');
```

# Setting up Node.js environment
Installation, managing packages with npm, and using Node Version Manager (NVM).


```python
# Setting up Node.js environment

## Installation

To install Node.js, you can download the installer from the [official Node.js website](https://nodejs.org/). Follow the instructions for your operating system.

Alternatively, you can use a package manager:

### Windows

```powershell
choco install nodejs
```

# Node.js modules and package management
Core modules, creating and using custom modules, npm, package.json.


```python
const fs = require('fs');

// Reading a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

# Asynchronous programming in Node.js
Callbacks, Promises, async/await, event-driven architecture.


```python
// Asynchronous programming in Node.js

// Callbacks
const fs = require('fs');

// Reading a file using a callback
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content using callback:', data);
});

// Promises
const fsPromises = require('fs').promises;

// Reading a file using Promises
fsPromises.readFile('example.txt', 'utf8')
  .then(data => {
    console.log('File content using Promises:', data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });

// Async/Await
async function readFileAsync() {
  try {
    const data = await fsPromises.readFile('example.txt', 'utf8');
    console.log('File content using async/await:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileAsync();

// Event-Driven Architecture
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Define an event handler
eventEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
eventEmitter.emit('greet', 'World');
```

# Working with the File System
Reading, writing, and manipulating files using the `fs` module.


```python
const fs = require('fs');
const fsPromises = require('fs').promises;

// Reading a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content (async):', data);
});

// Writing to a file asynchronously
fs.writeFile('example.txt', 'Hello, Node.js!', 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File written successfully (async)');
});

// Appending to a file asynchronously
fs.appendFile('example.txt', '\nAppended content.', 'utf8', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Content appended successfully (async)');
});

// Deleting a file asynchronously
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully (async)');
});

// Reading a file using Promises
fsPromises.readFile('example.txt', 'utf8')
  .then(data => {
    console.log('File content (Promises):', data);
  })
  .catch(err => {
    console.error('Error reading file (Promises):', err);
  });

// Writing to a file using Promises
fsPromises.writeFile('example.txt', 'Hello, Node.js with Promises!', 'utf8')
  .then(() => {
    console.log('File written successfully (Promises)');
  })
  .catch(err => {
    console.error('Error writing to file (Promises):', err);
  });

// Appending to a file using Promises
fsPromises.appendFile('example.txt', '\nAppended content with Promises.', 'utf8')
  .then(() => {
    console.log('Content appended successfully (Promises)');
  })
  .catch(err => {
    console.error('Error appending to file (Promises):', err);
  });

// Deleting a file using Promises
fsPromises.unlink('example.txt')
  .then(() => {
    console.log('File deleted successfully (Promises)');
  })
  .catch(err => {
    console.error('Error deleting file (Promises):', err);
  });

// Reading a file using async/await
async function readFileAsync() {
  try {
    const data = await fsPromises.readFile('example.txt', 'utf8');
    console.log('File content (async/await):', data);
  } catch (err) {
    console.error('Error reading file (async/await):', err);
  }
}

readFileAsync();

// Writing to a file using async/await
async function writeFileAsync() {
  try {
    await fsPromises.writeFile('example.txt', 'Hello, Node.js with async/await!', 'utf8');
    console.log('File written successfully (async/await)');
  } catch (err) {
    console.error('Error writing to file (async/await):', err);
  }
}

writeFileAsync();

// Appending to a file using async/await
async function appendFileAsync() {
  try {
    await fsPromises.appendFile('example.txt', '\nAppended content with async/await.', 'utf8');
    console.log('Content appended successfully (async/await)');
  } catch (err) {
    console.error('Error appending to file (async/await):', err);
  }
}

appendFileAsync();

// Deleting a file using async/await
async function deleteFileAsync() {
  try {
    await fsPromises.unlink('example.txt');
    console.log('File deleted successfully (async/await)');
  } catch (err) {
    console.error('Error deleting file (async/await):', err);
  }
}

deleteFileAsync();
```

# Creating a basic HTTP server
Using the `http` module, handling requests and responses.


```python
// Creating a basic HTTP server

const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(3000, '127.0.0.1', () => {
  console.log('Node.js server is running at http://127.0.0.1:3000/');
});
```

# Express.js framework
Setting up Express, routing, middleware, building REST APIs.


```python
// Express.js framework

// Setting up Express
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic routing
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Route with URL parameters
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Route with query parameters
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Search query: ${query}`);
});

// Middleware example
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Building REST APIs
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET a user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// POST a new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT to update a user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  user.name = req.body.name;
  res.json(user);
});

// DELETE a user
app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send('User not found');

  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Express server is running at http://localhost:${port}/`);
});
```

# Working with databases
Introduction to MongoDB, Mongoose, connecting Node.js to databases.


```python
// Working with databases

// Introduction to MongoDB and Mongoose
// MongoDB is a NoSQL database that stores data in JSON-like documents. Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js, providing a higher-level abstraction for interacting with MongoDB.

// Install MongoDB and Mongoose
// You can install MongoDB from the official website and Mongoose using npm:
// npm install mongoose

// Connecting to MongoDB using Mongoose
const mongoose = require('mongoose');

// Replace the following with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a Mongoose schema and model
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);

// Create a new user
const createUser = async (name, email, age) => {
  try {
    const newUser = new User({ name, email, age });
    const savedUser = await newUser.save();
    console.log('User created:', savedUser);
  } catch (err) {
    console.error('Error creating user:', err);
  }
};

// Read users from the database
const getUsers = async () => {
  try {
    const users = await User.find();
    console.log('Users:', users);
  } catch (err) {
    console.error('Error getting users:', err);
  }
};

// Update a user by ID
const updateUser = async (id, updateData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
    console.log('User updated:', updatedUser);
  } catch (err) {
    console.error('Error updating user:', err);
  }
};

// Delete a user by ID
const deleteUser = async (id) => {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    console.log('User deleted:', deletedUser);
  } catch (err) {
    console.error('Error deleting user:', err);
  }
};

// Example usage
(async () => {
  await createUser('John Doe', 'john.doe@example.com', 30);
  await getUsers();
  await updateUser('some-user-id', { age: 31 });
  await deleteUser('some-user-id');
})();
```

# Error handling and debugging in Node.js
Common error patterns, best practices for handling errors.


```python
// Error handling and debugging in Node.js

// Common error patterns

// Synchronous code error handling
try {
  const data = fs.readFileSync('nonexistent.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error reading file (sync):', err);
}

// Asynchronous code error handling with callbacks
fs.readFile('nonexistent.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file (callback):', err);
    return;
  }
  console.log(data);
});

// Asynchronous code error handling with Promises
fsPromises.readFile('nonexistent.txt', 'utf8')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error('Error reading file (Promises):', err);
  });

// Asynchronous code error handling with async/await
async function readFileAsync() {
  try {
    const data = await fsPromises.readFile('nonexistent.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file (async/await):', err);
  }
}

readFileAsync();

// Best practices for handling errors

// Using a centralized error handler in Express
app.use((err, req, res, next) => {
  console.error('Centralized error handler:', err);
  res.status(500).send('Something went wrong!');
});

// Example route that throws an error
app.get('/error', (req, res) => {
  throw new Error('This is a forced error.');
});

// Example route with async error handling
app.get('/async-error', async (req, res, next) => {
  try {
    const data = await fsPromises.readFile('nonexistent.txt', 'utf8');
    res.send(data);
  } catch (err) {
    next(err);
  }
});

// Debugging with Node.js

// Using console.log for simple debugging
console.log('Debugging message: Starting the server...');

// Using the built-in debugger
// Run the script with `node inspect script.js` and use Chrome DevTools or another debugger client
debugger;
console.log('This line will be hit by the debugger');

// Using the `debug` module for more advanced debugging
const debug = require('debug')('app');
debug('Debugging message: Server is running...');
```

# Real-time applications using WebSockets
Building real-time apps with `ws` module or Socket.IO.


```python
// Real-time applications using WebSockets

// Building real-time apps with `ws` module

// Install the `ws` module using npm
// npm install ws

const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  // Send a message to the client
  ws.send('Welcome to the WebSocket server!');

  // Handle incoming messages from the client
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Echo the message back to the client
    ws.send(`Server received: ${message}`);
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');

// Building real-time apps with Socket.IO

// Install the `socket.io` module using npm
// npm install socket.io

const http = require('http');
const socketIo = require('socket.io');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Socket.IO server\n');
});

// Attach Socket.IO to the HTTP server
const io = socketIo(server);

// Handle client connections
io.on('connection', (socket) => {
  console.log('New client connected');

  // Send a message to the client
  socket.emit('message', 'Welcome to the Socket.IO server!');

  // Handle incoming messages from the client
  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Broadcast the message to all connected clients
    io.emit('message', `Server received: ${message}`);
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start the HTTP server
server.listen(3000, () => {
  console.log('Socket.IO server is running on http://localhost:3000');
});
```

# Testing and deploying Node.js applications
Unit testing with Mocha/Chai, integration testing, CI/CD pipelines.


```python
// Testing and deploying Node.js applications

// Unit testing with Mocha and Chai

// Install Mocha and Chai using npm
// npm install mocha chai --save-dev

// Create a simple function to test
function add(a, b) {
  return a + b;
}

// Export the function for testing
module.exports = add;

// Create a test file `test/add.test.js`
const chai = require('chai');
const expect = chai.expect;
const add = require('../add');

describe('Addition', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('should return a number', () => {
    const result = add(2, 3);
    expect(result).to.be.a('number');
  });
});

// Run the tests using Mocha
// Add the following script to `package.json`
// "scripts": {
//   "test": "mocha"
// }
// Run the tests with `npm test`

// Integration testing

// Create a simple Express app to test
const express = require('express');
const app = express();
const port = 3000;

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const sum = add(Number(a), Number(b));
  res.json({ sum });
});

// Export the app for testing
module.exports = app;

// Create a test file `test/integration.test.js`
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../app');

describe('GET /add', () => {
  it('should return the sum of two numbers', (done) => {
    chai.request(app)
      .get('/add')
      .query({ a: 2, b: 3 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('sum', 5);
        done();
      });
  });
});

// Run the integration tests with `npm test`

// CI/CD pipelines

// Example GitHub Actions workflow for CI
// Create a file `.github/workflows/nodejs.yml`
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14, 16, 18]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm install
    - run: npm test
```

# Best practices and performance optimization
Memory management, non-blocking code, clustering, caching.


```python
// Best practices and performance optimization

// Memory Management

// Use the `v8` module to get heap statistics
const v8 = require('v8');

const heapStats = v8.getHeapStatistics();
console.log('Heap Statistics:', heapStats);

// Non-blocking Code

// Example of blocking code
const blockingCode = () => {
  const start = Date.now();
  while (Date.now() - start < 1000) {
    // Simulate blocking operation
  }
  console.log('Blocking code executed');
};

// Example of non-blocking code using setTimeout
const nonBlockingCode = () => {
  setTimeout(() => {
    console.log('Non-blocking code executed');
  }, 1000);
};

blockingCode();
nonBlockingCode();

// Clustering

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case, it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, World!\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}

// Caching

const express = require('express');
const app = express();
const port = 3000;

// Simple in-memory cache
const cache = {};

app.get('/data', (req, res) => {
  const key = 'someData';
  if (cache[key]) {
    console.log('Cache hit');
    res.send(cache[key]);
  } else {
    console.log('Cache miss');
    const data = { message: 'Hello, World!' };
    cache[key] = data;
    res.send(data);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```
