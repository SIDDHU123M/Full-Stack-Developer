# 01 Introduction to Node.js

## Overview
This lesson introduces Node.js, a powerful JavaScript runtime that allows developers to execute JavaScript code server-side. Node.js leverages the V8 JavaScript engine developed by Google and has become essential in modern web development due to its efficiency and scalability. Understanding Node.js is crucial for full-stack developers who want to create robust and interactive web applications.

## Learning Objectives
By the end of this lesson, you will:
- Understand the core concepts of Node.js and its architecture.
- Recognize the benefits of using Node.js in web development.
- Set up a simple Node.js application.
- Familiarize yourself with the Node.js ecosystem and its package manager (npm).

## Key Concepts

### 1. What is Node.js?
Node.js is a server-side runtime environment for JavaScript that allows developers to build scalable and high-performance applications. It utilizes an event-driven, non-blocking I/O model, which makes it ideal for data-intensive real-time applications that run across distributed devices.

### 2. Features of Node.js
- **Asynchronous and Event-Driven:** Node.js uses a single-threaded model with event looping, allowing it to handle many connections simultaneously.
- **Fast Execution:** Thanks to the V8 engine, JavaScript code is executed quickly.
- **Cross-Platform:** Node.js can run on various platforms like Windows, Linux, and macOS.
- **Rich Ecosystem:** With npm, Node.js has access to a vast repository of libraries and frameworks, simplifying the development process.

### 3. Node.js Architecture
Node.js architecture is built on three main components:
- **Event Loop:** The heart of Node.js, allowing asynchronous processing.
- **Call Stack:** A stack data structure that manages function calls.
- **Node APIs:** A set of built-in libraries that provide functionality for various tasks, such as handling HTTP requests.

### 4. Use Cases of Node.js
- **Web Applications:** Real-time applications like chat applications and collaborative tools.
- **API Development:** Building RESTful APIs for web and mobile applications.
- **Microservices:** Developing microservices that can be independently deployed and managed.
- **Single Page Applications (SPAs):** Creating SPAs with frameworks like React or Angular on the front end and Node.js on the back end.

## Getting Started with Node.js

### 1. Installation
To start using Node.js, follow these steps to install it on your machine:

- **Windows and macOS:**
  - Visit the [Node.js official website](https://nodejs.org/) and download the installer for your operating system.
  - Follow the installation prompts, ensuring you include npm (Node Package Manager).

- **Linux:**
  - Use the following commands to install Node.js:
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```

### 2. Verifying Installation
After installation, you can verify if Node.js and npm are installed correctly by running the following commands in your terminal:
```bash
node -v
npm -v
```
You should see the version numbers of Node.js and npm printed in the terminal.

### 3. Creating Your First Node.js Application
To create a simple Node.js application, follow these steps:

- **Step 1:** Create a new directory for your application and navigate into it.
  ```bash
  mkdir my-node-app
  cd my-node-app
  ```

- **Step 2:** Initialize a new Node.js application using npm.
  ```bash
  npm init -y
  ```

- **Step 3:** Create a new file named `app.js` and open it in your text editor.
  
- **Step 4:** Add the following code to `app.js` to create a simple HTTP server:
  ```javascript
  const http = require('http');

  const hostname = '127.0.0.1';
  const port = 3000;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  ```

- **Step 5:** Run your application using the following command:
  ```bash
  node app.js
  ```

- **Step 6:** Open your web browser and navigate to `http://127.0.0.1:3000/`. You should see "Hello World" displayed in your browser.

## Summary
In this lesson, you learned about Node.js, its architecture, features, and use cases. You also set up a simple Node.js application and created a basic HTTP server. Node.js is a powerful tool for full-stack developers, enabling the development of efficient and scalable web applications.

## Suggested Next Steps
1. Explore more about Node.js modules and how to create your own.
2. Dive into asynchronous programming concepts in the next lesson.
3. Experiment with adding routes to your HTTP server to handle different requests.

## Useful Resources
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [JavaScript.info - The Modern JavaScript Tutorial](https://javascript.info/)

---

## Navigation
- For further exploration, proceed to the next lesson: [Setting up NodeJS](02_setting_up_nodejs.md).
- To return to the main topics, visit the [Node.js Key Topics](../README.md).
