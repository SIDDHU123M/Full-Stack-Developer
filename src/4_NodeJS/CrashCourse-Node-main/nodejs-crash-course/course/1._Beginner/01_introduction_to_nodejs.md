# Introduction to Node.js

## What is Node.js?

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code outside of a web browser, making it possible to build server-side applications using JavaScript. Node.js uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient.

### History of Node.js

Node.js was created by Ryan Dahl in 2009 and has since gained popularity among developers for its ability to handle large-scale, real-time applications. It was initially built to solve the problem of slow, blocking I/O operations in traditional web servers.

### Node.js Architecture

Node.js follows a single-threaded, event-driven architecture. It uses an event loop to handle multiple concurrent requests without blocking the execution of other code. This allows Node.js to handle a large number of concurrent connections efficiently.

### V8 Engine

Node.js is built on the V8 JavaScript engine, which is also used by the Google Chrome browser. The V8 engine compiles JavaScript code into machine code, making it highly performant. It also provides features like garbage collection and just-in-time (JIT) compilation.

## Why use Node.js?

### Asynchronous Programming

One of the key advantages of Node.js is its support for asynchronous programming. Asynchronous code allows multiple operations to be executed concurrently without blocking the execution of other code. This makes Node.js well-suited for handling I/O-intensive tasks, such as reading from a database or making API calls.

### Event-Driven Architecture

Node.js follows an event-driven architecture, where actions are triggered by events and handled by event handlers. This allows for efficient handling of concurrent requests and enables real-time applications, such as chat applications or streaming services.

### Single-Threaded Model

Node.js uses a single-threaded model, which means that it runs all JavaScript code in a single thread. However, it leverages non-blocking I/O operations and event-driven architecture to handle multiple concurrent requests efficiently. This makes Node.js highly scalable and capable of handling a large number of concurrent connections.

## Installing Node.js

To install Node.js, follow these steps:

1. Visit the official Node.js website at [https://nodejs.org](https://nodejs.org).
2. Download the appropriate installer for your operating system.
3. Run the installer and follow the installation instructions.
4. Verify the installation by opening a terminal or command prompt and running the following command:

   ```shell
   node --version
   ```

   This should display the installed version of Node.js.

## Setting up the Development Environment

To set up the development environment for Node.js, you can use Node Version Manager (NVM). NVM allows you to manage multiple versions of Node.js on your machine.

Follow these steps to install NVM:

1. Visit the NVM GitHub repository at [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).
2. Follow the installation instructions for your operating system.
3. Open a new terminal or command prompt and run the following command to install the latest LTS version of Node.js:

   ```shell
   nvm install --lts
   ```

   This will install the latest Long-Term Support (LTS) version of Node.js.

4. Verify the installation by running the following command:

   ```shell
   node --version
   ```

   This should display the installed version of Node.js.

## Hello World Program

To get started with Node.js, let's create a simple "Hello World" program. Open your favorite text editor and create a new file called `hello.js`. Add the following code to the file:

```javascript
console.log("Hello, Node.js!");
```

Save the file and open a terminal or command prompt. Navigate to the directory where you saved the `hello.js` file and run the following command:

```shell
node hello.js
```

You should see the following output:

```
Hello, Node.js!
```

Congratulations! You have successfully run your first Node.js program.

In the next lesson, we will explore working with modules and npm, which are essential for building Node.js applications.