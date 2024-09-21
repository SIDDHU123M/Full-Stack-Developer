// filesystem_example.js

const fs = require('fs');

// Reading a file
fs.readFile('path/to/file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// Writing to a file
const content = 'This is the content to write to the file.';
fs.writeFile('path/to/file.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully.');
});

// Appending to a file
const additionalContent = '\nThis is additional content.';
fs.appendFile('path/to/file.txt', additionalContent, 'utf8', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Content appended to file.');
});

// Renaming a file
fs.rename('path/to/file.txt', 'path/to/newfile.txt', (err) => {
  if (err) {
    console.error('Error renaming file:', err);
    return;
  }
  console.log('File renamed successfully.');
});

// Deleting a file
fs.unlink('path/to/file.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully.');
});