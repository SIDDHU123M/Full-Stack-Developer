// Connecting to MongoDB using Mongoose
const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define a schema for a user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create a model for the user schema
const User = mongoose.model('User', userSchema);

// Create a new user
const newUser = new User({
  name: 'John Doe',
  email: 'john@example.com',
});

// Save the new user to the database
newUser.save()
  .then(() => {
    console.log('User saved to the database');
  })
  .catch((error) => {
    console.error('Error saving user to the database:', error);
  });