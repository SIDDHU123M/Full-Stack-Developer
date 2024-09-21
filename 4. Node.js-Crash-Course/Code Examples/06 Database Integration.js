// Code Examples/06 Database Integration.js

// This file contains an example of performing CRUD operations with MongoDB.

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Create a new user
const newUser = new User({
  name: 'John Doe',
  email: 'john@example.com',
  age: 25,
});

// Save the user to the database
newUser.save()
  .then(() => {
    console.log('User saved to the database');
  })
  .catch((error) => {
    console.error('Failed to save user:', error);
  });

// Find all users
User.find()
  .then((users) => {
    console.log('All users:', users);
  })
  .catch((error) => {
    console.error('Failed to find users:', error);
  });

// Update a user
User.updateOne({ name: 'John Doe' }, { age: 30 })
  .then(() => {
    console.log('User updated');
  })
  .catch((error) => {
    console.error('Failed to update user:', error);
  });

// Delete a user
User.deleteOne({ name: 'John Doe' })
  .then(() => {
    console.log('User deleted');
  })
  .catch((error) => {
    console.error('Failed to delete user:', error);
  });