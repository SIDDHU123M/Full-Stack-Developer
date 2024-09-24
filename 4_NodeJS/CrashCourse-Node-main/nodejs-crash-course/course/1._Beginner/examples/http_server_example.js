const http = require('http');

const server = http.createServer((req, res) => {
  // Handle incoming requests here
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});