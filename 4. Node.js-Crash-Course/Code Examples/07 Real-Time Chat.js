// Import the necessary modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Create an Express application
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Set up event handlers for socket.io
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle chat messages
  socket.on('chat message', (msg) => {
    console.log('Message: ' + msg);
    io.emit('chat message', msg);
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Set up the Express routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});