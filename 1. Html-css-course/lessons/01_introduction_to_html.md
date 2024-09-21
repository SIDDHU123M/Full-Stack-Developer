# Introduction to HTML

In this lesson, we will cover the basics of HTML (Hypertext Markup Language), its role in web development, and the structure of an HTML document. We will also explore common HTML tags and their uses.

## Definition and Role of HTML

HTML is the standard markup language for creating web pages. It provides the structure and content of a webpage, defining the elements and their relationships. HTML is the backbone of the web, allowing us to create and organize content that can be rendered by web browsers.

## History of HTML

HTML has evolved over the years, with each version introducing new features and improvements. We will briefly explore the evolution from HTML1 to HTML5, highlighting the key changes and advancements.

## Structure of an HTML Document

An HTML document consists of several elements that define its structure and content. We will discuss the following elements:

- `<!DOCTYPE html>` declaration: This informs the browser that the document is written in HTML5.
- `<html>` element: This is the root element of an HTML document.
- `<head>` element: This contains metadata about the document, such as the title and character encoding.
- `<body>` element: This contains the visible content of the webpage.

## Common HTML Tags and Their Uses

HTML provides a wide range of tags that allow us to structure and format our content. We will explore the following common HTML tags and their uses:

- Headings (`<h1>` to `<h6>`): These are used to define the headings and subheadings of a webpage, with `<h1>` being the highest level and `<h6>` being the lowest.
- Paragraphs (`<p>`): These are used to define paragraphs of text, providing semantic meaning to the content.
- Links (`<a>`): These are used to create hyperlinks, allowing users to navigate between webpages.
- Images (`<img>`): These are used to display images on a webpage, with attributes like [`src`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fworkspaces%2FFull-Stack-Developer%2Fhtml-css-course%2Flessons%2F01_introduction_to_html.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A28%2C%22character%22%3A89%7D%7D%5D%2C%22becb93b0-704e-4a04-afa5-99cdcb51ef06%22%5D "Go to definition"), [`alt`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fworkspaces%2FFull-Stack-Developer%2Fhtml-css-course%2Flessons%2F01_introduction_to_html.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A28%2C%22character%22%3A96%7D%7D%5D%2C%22becb93b0-704e-4a04-afa5-99cdcb51ef06%22%5D "Go to definition"), and dimensions.
- Lists (`<ul>`, `<ol>`, `<li>`): These are used to create ordered and unordered lists, providing a structured way to present information.

## Linking JavaScript

JavaScript can be linked to an HTML document in several ways:

1. **Inline JavaScript**: Adding JavaScript directly within HTML tags using the `onclick`, `onload`, etc., attributes.
   ```html
   <button onclick="alert('Hello, World!')">Click Me</button>
   ```

2. **Internal JavaScript**: Placing JavaScript code within a `<script>` tag inside the HTML document.
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <title>Internal JavaScript Example</title>
     <script>
       function showMessage() {
         alert('Hello, World!');
       }
     </script>
   </head>
   <body>
     <button onclick="showMessage()">Click Me</button>
   </body>
   </html>
   ```

3. **External JavaScript**: Linking an external JavaScript file using the `<script>` tag with the [`src`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fworkspaces%2FFull-Stack-Developer%2Fhtml-css-course%2Flessons%2F01_introduction_to_html.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A28%2C%22character%22%3A89%7D%7D%5D%2C%22becb93b0-704e-4a04-afa5-99cdcb51ef06%22%5D "Go to definition") attribute.
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <title>External JavaScript Example</title>
     <script src="script.js"></script>
   </head>
   <body>
     <button onclick="showMessage()">Click Me</button>
   </body>
   </html>
   ```

   `script.js`:
   ```javascript
   function showMessage() {
     alert('Hello, World!');
   }
   ```

4. **Defer and Async Attributes**: These attributes can be used with the `<script>` tag to control the loading behavior of JavaScript files.
   - `defer`: Ensures the script is executed after the HTML document has been completely parsed.
   - `async`: Allows the script to be executed asynchronously as soon as it is available.

   ```html
   <script src="script.js" defer></script>
   <script src="script.js" async></script>
   ```

## Practical Examples

Let's create a simple personal webpage to apply what we've learned so far. We will include headings, paragraphs, links, images, and a JavaScript function to enhance interactivity.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>My Personal Webpage</title>
  <script>
    function showAlert() {
      alert('Welcome to my personal webpage!');
    }
  </script>
</head>
<body onload="showAlert()">
  <h1>Welcome to My Personal Webpage</h1>
  
  <h2>About Me</h2>
  <p>My name is John Doe and I'm a web developer.</p>
  
  <h2>My Projects</h2>
  <ul>
    <li><a href="project1.html">Project 1</a></li>
    <li><a href="project2.html">Project 2</a></li>
    <li><a href="project3.html">Project 3</a></li>
  </ul>
  
  <h2>Contact Me</h2>
  <p>You can reach me at <a href="mailto:john@example.com">john@example.com</a>.</p>
  
  <img src="profile.jpg" alt="My Profile Picture" width="200" height="200">
</body>
</html>
```

## Exercises

1. Build a webpage that includes a biography section with images and a list of hobbies.
2. Implement a navigation menu using unordered lists.
3. Add a JavaScript function that changes the background color of the webpage when a button is clicked.

## Additional Resources

- [HTML Introduction - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction)
- [HTML Tutorial - W3Schools](https://www.w3schools.com/html/)
- [JavaScript Guide - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript Tutorial - W3Schools](https://www.w3schools.com/js/)