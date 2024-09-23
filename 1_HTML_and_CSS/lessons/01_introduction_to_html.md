# Introduction to HTML

## Overview
HTML (Hypertext Markup Language) is the standard markup language used to create web pages. It forms the skeleton of any web content and provides structure to the web documents. HTML defines the elements, attributes, and content that make up the page, allowing browsers to interpret and display the content to users.

In this lesson, we will cover the basics of HTML, its importance, and how to create a simple webpage. Understanding HTML is the first step to becoming a full-stack developer, as it forms the foundation upon which all web development rests.

## 1. What is HTML?
HTML is a markup language used to define the structure of web content. Each HTML document is made up of various HTML tags (or elements), which the browser reads and renders for the user.

- **Hypertext**: Refers to the ability to link to other web pages or resources.
- **Markup Language**: HTML uses tags to "mark up" content and give it meaning, like making a word bold or creating a list.

### Why is HTML Important?
- **Structure**: HTML provides the basic structure for a webpage.
- **Compatibility**: HTML is supported by all browsers, and learning HTML ensures your website is accessible to all users.
- **Foundation**: HTML is the starting point for learning CSS (styling), JavaScript (interactivity), and backend languages (server-side logic).

## 2. Basic Structure of an HTML Document

Every HTML document follows a standard structure. Below is a breakdown of the necessary parts of a typical HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to My Webpage</h1>
    <p>This is a simple paragraph on my webpage.</p>
</body>
</html>
```

### Explanation:
1. `<!DOCTYPE html>`: This declaration defines the document type and version of HTML being used (HTML5 in this case).
2. `<html>`: The root element of the HTML document.
3. `<head>`: Contains meta-information about the document, such as the title, character set, and viewport settings for responsive design.
    - **Meta Tags**: Provide metadata like the character encoding and viewport for responsive design.
    - **Title**: Defines the title that appears on the browser tab.
4. `<body>`: Contains the visible content of the webpage.
5. `<h1>`: A heading element used to display a main heading.
6. `<p>`: A paragraph element used for blocks of text.

### Additional Elements:
- **`<meta charset="UTF-8">`**: Specifies the character encoding (UTF-8 is the most common, covering most languages and special characters).
- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Ensures the website is responsive by controlling the viewport's dimensions on mobile devices.

### Tags and Attributes
- **Tags**: Enclosed within angle brackets (`< >`), they define the content. Example: `<p>` for paragraph, `<h1>` for a heading.
- **Attributes**: Provide additional information about elements. Example: `<img src="image.jpg" alt="A beautiful image">`. The `src` and `alt` attributes describe the image source and alternative text.

### Document Object Model (DOM)
Understanding the DOM (Document Object Model) is essential in HTML. The DOM represents the structure of the document as a tree of objects that can be manipulated by JavaScript.

- **HTML elements are nodes in the DOM**.
- Each tag (like `<body>`, `<p>`, `<div>`) is represented as a node in this tree structure, which JavaScript can interact with dynamically.

---

## 3. Practical Example: Creating a Simple Webpage

Now, let's create a simple webpage from scratch using what we have learned. Below is a basic HTML example that includes headings, paragraphs, links, and images:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
</head>
<body>
    <header>
        <h1>Welcome to My Portfolio</h1>
        <p>This is my personal webpage where you can learn about me and my projects.</p>
    </header>

    <section>
        <h2>About Me</h2>
        <p>I am a passionate web developer with experience in HTML, CSS, and JavaScript.</p>
        <img src="myphoto.jpg" alt="Photo of me">
    </section>

    <section>
        <h2>Projects</h2>
        <ul>
            <li><a href="project1.html">Project 1</a></li>
            <li><a href="project2.html">Project 2</a></li>
        </ul>
    </section>

    <footer>
        <p>© 2024 My Portfolio</p>
    </footer>
</body>
</html>
```

### Breakdown:
- **Header Section**: Contains the main heading and introductory paragraph.
- **About Me Section**: Includes an image and text about the user.
- **Projects Section**: Lists links to the user’s projects.
- **Footer Section**: Displays a copyright notice.

---

## 4. Common HTML Elements

HTML offers a wide range of elements to structure content. Here are some essential ones:

1. **Headings**: `<h1>` to `<h6>` tags for headings.
   ```html
   <h1>Main Heading</h1>
   <h2>Subheading</h2>
   ```

2. **Paragraphs**: Use `<p>` for blocks of text.
   ```html
   <p>This is a paragraph of text.</p>
   ```

3. **Links**: The `<a>` element for hyperlinks.
   ```html
   <a href="https://www.example.com">Visit Example</a>
   ```

4. **Images**: The `<img>` element for embedding images.
   ```html
   <img src="image.jpg" alt="Descriptive text about the image">
   ```

5. **Lists**: Organizing items using ordered (`<ol>`) or unordered lists (`<ul>`).
   ```html
   <ul>
       <li>Item 1</li>
       <li>Item 2</li>
   </ul>
   ```

### Additional Elements:
- **Forms**: Use the `<form>` element to collect user inputs.
- **Tables**: Structure tabular data using `<table>`, `<tr>`, and `<td>` elements.

---

## 5. Resources for Further Learning
To deepen your knowledge, explore the following resources:

- [MDN Web Docs - Introduction to HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML5 Specification](https://html.spec.whatwg.org/multipage/)

---

## Best Practices
- **Use Semantic Elements**: Always use appropriate semantic elements (e.g., `<header>`, `<section>`, `<footer>`) to structure content meaningfully.
- **Validate Your HTML**: Use tools like the [W3C HTML Validator](https://validator.w3.org/) to check for errors and ensure your code follows HTML standards.
- **Accessibility**: Ensure all images have alt attributes, and content is accessible for all users, including those with disabilities.
- **Consistent Indentation**: Keep your HTML code clean and readable with consistent indentation.
- **Responsive Design**: Always include a viewport meta tag for mobile responsiveness.

---

### Next Steps
Continue exploring the world of HTML by learning about **HTML Elements and Structure** in the next lesson. Next Lesson >> 
[Html ELements and Structure](02_html_elements_and_structure.md)