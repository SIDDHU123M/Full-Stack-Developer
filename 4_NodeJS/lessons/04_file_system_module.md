# File System Module

This lesson covers the File System module in Node.js, which provides an API for interacting with the file system on your computer.

## Introduction to the File System Module

The File System module in Node.js allows you to work with files and directories. It provides methods for creating, reading, updating, and deleting files, as well as for creating, reading, and deleting directories.

## Common File System Operations

### Reading a File

To read the contents of a file, you can use the `fs.readFile()` method. This method takes the file path and a callback function as arguments. The callback function is called with two arguments: an error object (if an error occurred) and the data read from the file.

```javascript
const fs = require('fs');

fs.readFile('path/to/file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
```

### Writing to a File

To write data to a file, you can use the `fs.writeFile()` method. This method takes the file path, the data to write, and a callback function as arguments. The callback function is called with an error object (if an error occurred).

```javascript
const fs = require('fs');

fs.writeFile('path/to/file.txt', 'Hello, world!', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('File written successfully!');
});
```

### Creating a Directory

To create a directory, you can use the `fs.mkdir()` method. This method takes the directory path and a callback function as arguments. The callback function is called with an error object (if an error occurred).

```javascript
const fs = require('fs');

fs.mkdir('path/to/directory', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Directory created successfully!');
});
```

### Deleting a File or Directory

To delete a file or directory, you can use the `fs.unlink()` or `fs.rmdir()` method, respectively. Both methods take the path of the file or directory to delete and a callback function as arguments. The callback function is called with an error object (if an error occurred).

```javascript
const fs = require('fs');

fs.unlink('path/to/file.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('File deleted successfully!');
});

fs.rmdir('path/to/directory', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Directory deleted successfully!');
});
```

## Conclusion

The File System module in Node.js provides a powerful API for working with files and directories. By using the methods provided by this module, you can easily perform common file system operations in your Node.js applications.
```

Please note that the file is intentionally left blank as per your request.