// postgres_example.js

// Import the required modules
const { Client } = require('pg');

// Create a new PostgreSQL client
const client = new Client({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // Default PostgreSQL port
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log('Connected to the PostgreSQL database');
    // Perform database operations here
  })
  .catch((error) => {
    console.error('Error connecting to the PostgreSQL database:', error);
  });

// Example: Querying the database
const query = 'SELECT * FROM users';

client.query(query)
  .then((result) => {
    console.log('Query result:', result.rows);
  })
  .catch((error) => {
    console.error('Error executing query:', error);
  });

// Example: Inserting data into the database
const insertQuery = 'INSERT INTO users (name, email) VALUES ($1, $2)';
const values = ['John Doe', 'john@example.com'];

client.query(insertQuery, values)
  .then(() => {
    console.log('Data inserted successfully');
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
  });

// Close the database connection
client.end()
  .then(() => {
    console.log('Disconnected from the PostgreSQL database');
  })
  .catch((error) => {
    console.error('Error disconnecting from the PostgreSQL database:', error);
  });