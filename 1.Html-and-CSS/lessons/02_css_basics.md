# Introduction to CSS

In this lesson, we will cover the basics of CSS (Cascading Style Sheets). CSS is a stylesheet language used to describe the presentation of a document written in HTML. It allows you to style and format the elements of your web page, making it visually appealing and user-friendly.

## Role of CSS in Web Development

CSS plays a crucial role in web development by separating the content (HTML) from its presentation (CSS). It allows you to control the layout, colors, fonts, and other visual aspects of your web page. With CSS, you can create consistent styles across multiple pages, making it easier to maintain and update your website.

## CSS Syntax and Linking Methods

CSS consists of rules that define how HTML elements should be displayed. Each rule consists of a selector and a declaration block. The selector specifies which HTML elements the rule applies to, and the declaration block contains one or more property-value pairs that define the styles.

There are three ways to include CSS in your HTML document:

1. Inline CSS: You can apply CSS styles directly to HTML elements using the `style` attribute. For example:

```html
<p style="color: blue;">This is a blue paragraph.</p>
```

2. Internal CSS: You can define CSS styles within the `<style>` tags in the `<head>` section of your HTML document. For example:

```html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
<body>
  <p>This is a blue paragraph.</p>
</body>
```

3. External CSS: You can create a separate CSS file with a `.css` extension and link it to your HTML document using the `<link>` tag. For example:

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <p>This is a blue paragraph.</p>
</body>
```

## Selectors and Specificity

Selectors are used to target specific HTML elements and apply styles to them. There are different types of selectors in CSS:

- Element selectors: Select elements based on their tag name. For example, `p` selects all `<p>` elements.
- Class selectors: Select elements based on their class attribute. For example, `.highlight` selects all elements with the class "highlight".
- ID selectors: Select a single element based on its ID attribute. For example, `#header` selects the element with the ID "header".
- Attribute selectors: Select elements based on their attribute values. For example, `[type="submit"]` selects all elements with the attribute `type` set to "submit".

Specificity is a way to determine which styles should be applied when multiple rules target the same element. It is based on the type of selector used and the number of selectors in a rule. The more specific a selector is, the higher its specificity.

## The CSS Box Model

The CSS box model is a fundamental concept in CSS that describes how elements are rendered on the web page. It consists of four components:

- Content: The actual content of the element, such as text or images.
- Padding: The space between the content and the element's border.
- Border: The line that surrounds the element's padding and content.
- Margin: The space between the element and other elements.

Understanding the box model is important for controlling the layout and spacing of elements on your web page.

## Practical Examples

Now let's apply what we've learned to some practical examples:

1. Create a CSS file named `styles.css` and link it to your HTML document.
2. Use an element selector to set the font color of all paragraphs to red.
3. Use a class selector to set the background color of all elements with the class "highlight" to yellow.
4. Use an ID selector to set the font size of the element with the ID "header" to 24px.
5. Use an attribute selector to set the border color of all input elements with the attribute `type` set to "text" to green.

```css
/* styles.css */

p {
  color: red;
}

.highlight {
  background-color: yellow;
}

#header {
  font-size: 24px;
}

input[type="text"] {
  border-color: green;
}
```

## Exercises

1. Create a CSS file named `styles.css` and link it to your HTML document.
2. Use an element selector to set the font family of all headings to "Arial".
3. Use a class selector to set the background color of all elements with the class "box" to light blue.
4. Use an ID selector to set the font weight of the element with the ID "title" to bold.
5. Use an attribute selector to set the text color of all links with the attribute `target` set to "_blank" to red.

```css
/* styles.css */

h1, h2, h3, h4, h5, h6 {
  font-family: Arial;
}

.box {
  background-color: lightblue;
}

#title {
  font-weight: bold;
}

a[target="_blank"] {
  color: red;
}
```

Congratulations! You've learned the basics of CSS. In the next lesson, we will explore HTML forms and how to create and structure them.