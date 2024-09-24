# Setting Up Node.js

## Overview
In this lesson, we will explore how to set up your Node.js development environment. This is a crucial step for developing server-side applications using JavaScript. By the end of this lesson, you will have Node.js installed on your machine and will be able to create and run a basic Node.js application.

## Learning Objectives
- Understand the purpose of Node.js and its architecture.
- Install Node.js on various operating systems.
- Set up a simple Node.js project structure.
- Create and run a basic Node.js application.

## Key Concepts

### 1. What is Node.js?
Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine and is designed to build scalable network applications. 

### 2. Node.js Architecture
Node.js uses an event-driven, non-blocking I/O model that makes it efficient and suitable for I/O-heavy applications. It allows developers to handle multiple connections concurrently without blocking the execution thread.

## Installation

### 1. Download and Install Node.js
To install Node.js, follow these steps:

#### Windows
1. Go to the [Node.js official website](https://nodejs.org/).
2. Download the Windows installer (LTS version recommended).
3. Run the installer and follow the installation prompts.
4. Verify the installation by opening Command Prompt and typing:
   ```bash
   node -v
   ```
   This command should return the installed Node.js version.

#### macOS
1. Go to the [Node.js official website](https://nodejs.org/).
2. Download the macOS installer (LTS version recommended).
3. Run the installer and follow the installation prompts.
4. Verify the installation by opening Terminal and typing:
   ```bash
   node -v
   ```

#### Linux
For most Linux distributions, you can install Node.js using a package manager.

**For Ubuntu:**
```bash
sudo apt update
sudo apt install nodejs npm
```

**For CentOS:**
```bash
sudo yum install epel-release
sudo yum install nodejs npm
```

Verify the installation by typing:
```bash
node -v
```

### 2. Setting Up a Basic Project Structure
Once Node.js is installed, create a directory for your first Node.js project.

1. Create a new folder for your project:
   ```bash
   mkdir my-node-app
   cd my-node-app
   ```

2. Initialize a new Node.js project using npm (Node Package Manager):
   ```bash
   npm init -y
   ```
   This command creates a `package.json` file with default settings.

3. Create an entry point file (e.g., `index.js`):
   ```bash
   touch index.js
   ```

## Creating a Basic Node.js Application

### 1. Write Your First Application
Open the `index.js` file in your favorite code editor and add the following code:

```javascript
// index.js
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
```

### 2. Run Your Application
To run your application, open your terminal, navigate to your project directory, and type:

```bash
node index.js
```

You should see the message `Server running at http://localhost:3000/`. Open your web browser and navigate to `http://localhost:3000/`, where you should see "Hello, World!" displayed on the page.

## Summary
In this lesson, you learned how to set up a Node.js development environment, create a basic project structure, and run your first Node.js application. This foundational knowledge is essential as you dive deeper into Node.js and start building more complex applications.

## Suggested Next Steps
- Explore more about Node.js modules and how to utilize third-party packages.
- Practice modifying the basic application to serve different content based on URL routes.

## Navigation
- For further exploration, proceed to the next lesson: [Express Framework](03_express_framework.md).
- To return to the main topics, visit the [Node.js Key Topics](../README.md).
