# Modules and npm

This lesson covers the basics of modules and npm in Node.js.

## Modules

In Node.js, modules are reusable pieces of code that can be imported and used in other files. Modules help in organizing code and keeping it modular and maintainable.

### Creating a Module

To create a module in Node.js, you can define your code in a separate file and export the necessary functions, variables, or classes using the `module.exports` object.

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract,
};
```

### Importing a Module

To import a module in Node.js, you can use the `require` function and provide the path to the module file.

```javascript
// app.js
const math = require('./math');

console.log(math.add(2, 3)); // Output: 5
console.log(math.subtract(5, 2)); // Output: 3
```

## npm (Node Package Manager)

npm is the default package manager for Node.js. It allows you to easily install, manage, and share packages or libraries with other developers.

### Initializing a Project

To initialize a Node.js project with npm, you can use the `npm init` command. This will create a `package.json` file that contains information about your project and its dependencies.

```bash
npm init
```

### Installing Packages

To install packages using npm, you can use the `npm install` command followed by the package name.

```bash
npm install package-name
```

### Using Installed Packages

Once a package is installed, you can import and use it in your code just like any other module.

```javascript
const package = require('package-name');
```

### Managing Dependencies

The `package.json` file contains a list of dependencies required by your project. You can manually add dependencies to this file or use the `npm install` command with the `--save` flag to automatically add them.

```bash
npm install package-name --save
```

## Conclusion

Modules and npm are essential tools in Node.js development. They allow you to organize your code into reusable modules and easily manage dependencies. Understanding how to create and use modules, as well as how to install and manage packages with npm, is crucial for building Node.js applications.
```

Please note that the file is intentionally left blank as per your request.