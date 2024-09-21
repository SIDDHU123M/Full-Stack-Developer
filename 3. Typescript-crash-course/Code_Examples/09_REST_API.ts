// Import required modules
import express, { Request, Response } from 'express';

// Create an instance of Express
const app = express();

// Define routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});