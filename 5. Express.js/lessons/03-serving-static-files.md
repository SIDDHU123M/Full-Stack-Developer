# Serving Static Files in Express.js

In Express.js, you can serve static files such as CSS, JavaScript, and images to the client. This allows you to include static assets in your web application.

To serve static files in Express.js, you need to use the `express.static` middleware. This middleware takes the root directory of your static files as an argument and serves any files in that directory.

## Configuring Static File Serving

To configure static file serving in Express.js, follow these steps:

1. Create a `public` directory in your project root if it doesn't already exist.

2. Place your static files (CSS, JavaScript, images, etc.) inside the `public` directory.

3. In your Express.js application, add the following line of code before defining your routes:

   ```javascript
   app.use(express.static('public'));
   ```

   This tells Express.js to serve static files from the `public` directory.

## Serving CSS Files

To serve CSS files, create a `css` directory inside the `public` directory and place your CSS files inside it. For example, if you have a file named `styles.css`, the URL to access it would be `/css/styles.css`.

## Serving JavaScript Files

To serve JavaScript files, create a `js` directory inside the `public` directory and place your JavaScript files inside it. For example, if you have a file named `script.js`, the URL to access it would be `/js/script.js`.

## Serving Image Files

To serve image files, create an `images` directory inside the `public` directory and place your image files inside it. For example, if you have an image named `logo.png`, the URL to access it would be `/images/logo.png`.

## Exercise: Serving Static Files

1. Create a new directory named `public` in your project root.

2. Inside the `public` directory, create a `css` directory and place a CSS file named `styles.css` inside it.

3. Create a `js` directory inside the `public` directory and place a JavaScript file named `script.js` inside it.

4. Create an `images` directory inside the `public` directory and place an image file named `logo.png` inside it.

5. Add the necessary code to configure static file serving in your Express.js application.

6. Verify that the static files are being served correctly by accessing the CSS, JavaScript, and image files in your browser.

Congratulations! You have learned how to serve static files in Express.js.
```

I hope this helps! Let me know if you need any further assistance.