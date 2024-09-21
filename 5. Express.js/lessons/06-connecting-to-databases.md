# Connecting to Databases

In Express.js applications, connecting to databases is a common requirement for storing and retrieving data. There are several databases you can use with Express.js, such as MongoDB, PostgreSQL, MySQL, and more. In this lesson, we will explore how to connect Express.js applications to databases using libraries like Mongoose and Sequelize.

## Connecting to MongoDB with Mongoose

[Mongoose](https://mongoosejs.com/) is a popular library for working with MongoDB in Node.js applications. To connect an Express.js application to MongoDB using Mongoose, follow these steps:

1. Install Mongoose as a dependency in your project:

   ```shell
   npm install mongoose
   ```

2. Create a `database.js` file in the `config` directory to configure the database connection:

   ```javascript
   // config/database.js

   const mongoose = require('mongoose');

   const connectDB = async () => {
     try {
       await mongoose.connect('mongodb://localhost/mydatabase', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
       });
       console.log('Connected to MongoDB');
     } catch (error) {
       console.error('Failed to connect to MongoDB', error);
     }
   };

   module.exports = connectDB;
   ```

3. Import and call the `connectDB` function in your `app.js` file to establish the database connection:

   ```javascript
   // src/app.js

   const express = require('express');
   const connectDB = require('./config/database');

   const app = express();

   // Connect to MongoDB
   connectDB();

   // Rest of the app configuration and routes
   // ...
   ```

With these steps, your Express.js application will be connected to MongoDB using Mongoose.

## Connecting to Relational Databases with Sequelize

[Sequelize](https://sequelize.org/) is a powerful ORM (Object-Relational Mapping) library for Node.js that supports multiple relational databases like PostgreSQL, MySQL, SQLite, and more. To connect an Express.js application to a relational database using Sequelize, follow these steps:

1. Install Sequelize and the database-specific driver as dependencies in your project. For example, to connect to PostgreSQL, install `sequelize` and `pg`:

   ```shell
   npm install sequelize pg
   ```

2. Create a `database.js` file in the `config` directory to configure the database connection:

   ```javascript
   // config/database.js

   const { Sequelize } = require('sequelize');

   const sequelize = new Sequelize('mydatabase', 'username', 'password', {
     host: 'localhost',
     dialect: 'postgres',
   });

   const connectDB = async () => {
     try {
       await sequelize.authenticate();
       console.log('Connected to the database');
     } catch (error) {
       console.error('Failed to connect to the database', error);
     }
   };

   module.exports = connectDB;
   ```

3. Import and call the `connectDB` function in your `app.js` file to establish the database connection:

   ```javascript
   // src/app.js

   const express = require('express');
   const connectDB = require('./config/database');

   const app = express();

   // Connect to the database
   connectDB();

   // Rest of the app configuration and routes
   // ...
   ```

With these steps, your Express.js application will be connected to the relational database using Sequelize.

## Conclusion

Connecting Express.js applications to databases is essential for building data-driven applications. In this lesson, we explored how to connect Express.js applications to MongoDB using Mongoose and to relational databases using Sequelize. By following these steps, you can establish a connection to the database and start performing database operations in your Express.js application.

Next, we will dive into authentication and authorization in Express.js, which are crucial for securing your application and managing user access.

---

**Exercise**: Implement database connection in your Express.js application. Choose either MongoDB with Mongoose or a relational database with Sequelize, depending on your project requirements. Test the connection and ensure that you can perform basic database operations.

---

[Previous Lesson: Working with Templates](05-working-with-templates.md) | [Next Lesson: Authentication and Authorization](07-authentication-and-authorization.md)
```

Please note that the above content is a template and may need to be customized based on your specific project requirements and database configuration.