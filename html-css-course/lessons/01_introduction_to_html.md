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
- Images (`<img>`): These are used to display images on a webpage, with attributes like `src`, `alt`, and dimensions.
- Lists (`<ul>`, `<ol>`, `<li>`): These are used to create ordered and unordered lists, providing a structured way to present information.

## Practical Examples

Let's create a simple personal webpage to apply what we've learned so far. We will include headings, paragraphs, links, and images to create a basic structure for our webpage.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>My Personal Webpage</title>
</head>
<body>
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

## Additional Resources

- [HTML Introduction - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction)
- [HTML Tutorial - W3Schools](https://www.w3schools.com/html/)