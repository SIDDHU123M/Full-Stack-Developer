# File System Module

## Overview
The File System (fs) module is a core module in Node.js that provides an API for interacting with the file system on your computer. This module enables developers to read from, write to, update, and delete files and directories, which is crucial for building applications that require file handling capabilities. In this lesson, we will delve deep into the functionality provided by the fs module, covering both synchronous and asynchronous operations.

## Learning Objectives
By the end of this lesson, you should be able to:
- Understand the structure and purpose of the File System module.
- Implement file reading operations using both asynchronous and synchronous methods.
- Perform file writing operations with various techniques.
- Create, read, and delete directories effectively.
- Handle errors gracefully while performing file operations.
- Utilize streams for efficient file handling.

## Key Concepts

### 1. Introduction to the File System Module
The File System module is a built-in module in Node.js that enables file and directory manipulation. It provides two types of methods:
- **Synchronous methods**: These methods block the event loop until the operation completes, which can lead to performance issues in I/O-heavy applications.
- **Asynchronous methods**: These methods allow Node.js to handle other operations while waiting for the file operation to complete, making them the preferred choice for performance.

### 2. Importing the File System Module
To utilize the File System module, you need to import it into your application. This is done using the `require` function:

```javascript
const fs = require('fs'); // Importing the File System module
```

### 3. Understanding the File System Hierarchy
Before working with the fs module, it’s essential to understand the structure of the file system. Each file and directory has a path, which can be absolute (starting from the root of the file system) or relative (starting from the current working directory). Understanding how to navigate this hierarchy is key to effective file management.

## Reading Files

### 1. Asynchronous File Reading
Asynchronous file reading is non-blocking and allows for efficient I/O operations. The `fs.readFile` method reads the contents of a specified file:

```javascript
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err); // Handle error
        return;
    }
    console.log('File contents:', data); // Display file contents
});
```

#### 1.1 Using Promises with fs.promises
You can also use the `fs.promises` API, which returns Promises instead of using callbacks, making your code cleaner and easier to read:

```javascript
const fsPromises = require('fs').promises;

async function readFileAsync() {
    try {
        const data = await fsPromises.readFile('example.txt', 'utf8');
        console.log('File contents:', data); // Display file contents
    } catch (err) {
        console.error('Error reading file:', err); // Handle error
    }
}

readFileAsync();
```

### 2. Synchronous File Reading
While synchronous reading is simpler, it blocks the event loop, which may not be ideal for high-performance applications. Use the `fs.readFileSync` method when synchronous behavior is necessary:

```javascript
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('File contents:', data); // Display file contents
} catch (err) {
    console.error('Error reading file:', err); // Handle error
}
```

## Writing Files

### 1. Asynchronous File Writing
To write data to a file asynchronously, you can use `fs.writeFile`. This method will create a new file or overwrite an existing one:

```javascript
fs.writeFile('output.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing to file:', err); // Handle error
        return;
    }
    console.log('File written successfully!'); // Confirm write operation
});
```

### 2. Synchronous File Writing
For synchronous writing, you can use `fs.writeFileSync`, but be cautious of its blocking behavior:

```javascript
try {
    fs.writeFileSync('output.txt', 'Hello, World!');
    console.log('File written successfully!'); // Confirm write operation
} catch (err) {
    console.error('Error writing to file:', err); // Handle error
}
```

### 3. Appending Data to Files
To append data to an existing file, use the `fs.appendFile` method:

```javascript
fs.appendFile('output.txt', '\nAppended text!', (err) => {
    if (err) {
        console.error('Error appending to file:', err); // Handle error
        return;
    }
    console.log('Data appended successfully!'); // Confirm append operation
});
```

### 4. Writing JSON Files
When working with JSON data, you may want to convert JavaScript objects into JSON strings before writing:

```javascript
const jsonData = { name: 'John', age: 30 };

fs.writeFile('data.json', JSON.stringify(jsonData), (err) => {
    if (err) {
        console.error('Error writing JSON to file:', err); // Handle error
        return;
    }
    console.log('JSON data written successfully!'); // Confirm write operation
});
```

## Creating and Deleting Files and Directories

### 1. Creating a New Directory
To create a new directory, use the `fs.mkdir` method. The `recursive` option allows you to create nested directories in one go:

```javascript
fs.mkdir('new-directory', { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err); // Handle error
        return;
    }
    console.log('Directory created successfully!'); // Confirm directory creation
});
```

### 2. Deleting a Directory
To delete an existing directory, use the `fs.rmdir` method. Note that the directory must be empty before it can be deleted:

```javascript
fs.rmdir('new-directory', (err) => {
    if (err) {
        console.error('Error deleting directory:', err); // Handle error
        return;
    }
    console.log('Directory deleted successfully!'); // Confirm directory deletion
});
```

### 3. Creating and Deleting Files
To create a file, you can simply write to it. To delete a file, use `fs.unlink`:

```javascript
fs.unlink('output.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err); // Handle error
        return;
    }
    console.log('File deleted successfully!'); // Confirm file deletion
});
```

### 4. Ensuring Directories Exist Before Writing
Before writing to a file, it’s often a good practice to ensure the target directory exists:

```javascript
const path = require('path');

const dirPath = path.join(__dirname, 'data');
fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err); // Handle error
        return;
    }

    fs.writeFile(path.join(dirPath, 'output.txt'), 'Hello, World!', (err) => {
        if (err) {
            console.error('Error writing to file:', err); // Handle error
            return;
        }
        console.log('File written successfully!'); // Confirm write operation
    });
});
```

## Working with Streams
Streams allow you to read and write files in chunks, which is particularly useful for handling large files efficiently.

### 1. Reading Files with Streams
To read a file using a stream, use `fs.createReadStream`:

```javascript
const readStream = fs.createReadStream('large-file.txt', 'utf8');
readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk); // Process each chunk
});
readStream.on('end', () => {
    console.log('Finished reading the file.'); // End of file
});
readStream.on('error', (err) => {
    console.error('Error reading stream:', err); // Handle error
});
```

### 2. Writing Files with Streams
To write to a file using a stream, use `fs.createWriteStream`:

```javascript
const writeStream = fs.createWriteStream('output-stream.txt');
writeStream.write('Hello, World!\n');
writeStream.write('Writing to a file using streams.\n');
writeStream.end(); // Close the stream
writeStream.on('finish', () => {
    console.log('Finished writing to the file.'); // Confirm write completion
});
```

### 3. Piping Streams
You can also pipe a readable stream to a writable stream, which simplifies copying files:

```javascript
const sourceStream = fs.createReadStream('source.txt');
const destinationStream = fs.createWriteStream('destination.txt');

sourceStream.pipe(destinationStream);
destinationStream.on('finish', () => {
    console.log('File copied successfully!'); // Confirm copy operation
});
```

## Watching for Changes
Node.js allows you to watch for changes in files and directories using the `fs.watch` method. This can be useful for applications that need to react to file changes in real time:

```javascript
fs.watch('data', (eventType, filename) => {
    if (filename) {
        console.log(`File ${filename} was changed: ${eventType}`);
    } else {
        console.log('A change occurred in the directory');
    }
});
```

## Error Handling
When working with the File System module, it’s crucial to handle errors properly. Common errors include:
- File or directory not found.
- Permission denied.
- Disk space issues.

Use try-catch blocks for synchronous methods and error callbacks for asynchronous methods to handle these errors gracefully.

## Summary
In this lesson, we explored the File System module in Node.js, covering how to read, write, create, and delete files and directories. We also learned about using streams for efficient file handling and how to watch for changes in the file system. The File System module is a powerful tool for managing files in Node.js applications, enabling developers to create robust applications that require file manipulation.

## Suggested Next Steps
- Experiment with different file operations to deepen your understanding.
- Explore additional methods in the fs module to handle other file types, such as symbolic links.
- Implement a simple file management application that uses the File System module.

## Useful Resources
- [Node.js File System Documentation](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html)
- [Node.js Streams Documentation](https://nodejs.org/api/stream.html)
- [JavaScript Promises Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## Navigation
- [Back to Node Lessons](../README.md)
- [Next Lesson: Asynchronous programming](05_asynchronous_programming.md)

