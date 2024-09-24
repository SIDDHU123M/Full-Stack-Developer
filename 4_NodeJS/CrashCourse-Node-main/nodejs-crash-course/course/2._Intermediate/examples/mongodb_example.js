// This file contains an example of working with MongoDB using Mongoose

// Import the required modules
const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Define the schema for the collection
    const userSchema = new mongoose.Schema({
      name: String,
      age: Number,
      email: String
    });

    // Create a model based on the schema
    const User = mongoose.model('User', userSchema);

    // Create a new user
    const newUser = new User({
      name: 'John Doe',
      age: 25,
      email: 'john@example.com'
    });

    // Save the user to the database
    newUser.save()
      .then(() => {
        console.log('User saved to the database');
        // Query the database for all users
        User.find()
          .then(users => {
            console.log('All users:', users);
            // Update a user
            User.updateOne({ name: 'John Doe' }, { age: 30 })
              .then(() => {
                console.log('User updated');
                // Delete a user
                User.deleteOne({ name: 'John Doe' })
                  .then(() => {
                    console.log('User deleted');
                    // Disconnect from the database
                    mongoose.disconnect()
                      .then(() => {
                        console.log('Disconnected from MongoDB');
                      })
                      .catch(error => {
                        console.error('Error disconnecting from MongoDB:', error);
                      });
                  })
                  .catch(error => {
                    console.error('Error deleting user:', error);
                  });
              })
              .catch(error => {
                console.error('Error updating user:', error);
              });
          })
          .catch(error => {
            console.error('Error querying users:', error);
          });
      })
      .catch(error => {
        console.error('Error saving user:', error);
      });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });