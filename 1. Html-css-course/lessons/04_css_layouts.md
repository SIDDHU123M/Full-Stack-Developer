# Understanding CSS Layouts

In this lesson, we will explore the different aspects of CSS layouts. Understanding CSS layouts is crucial for creating well-structured and visually appealing web pages. We will cover the following topics:

1. Positioning:
   - Static positioning
   - Relative positioning
   - Absolute positioning
   - Fixed positioning
   - Sticky positioning

2. The CSS Display Property:
   - Block-level elements
   - Inline-level elements
   - Inline-block elements
   - Flexbox

3. Flexbox:
   - Introduction to Flexbox
   - Flex container and flex items
   - Flex direction
   - Justify content
   - Align items

4. Practical Examples:
   - Creating a responsive layout using Flexbox

5. Exercises:
   - Design a two-column layout that adjusts based on screen size
   - Create a responsive navigation bar using Flexbox

## 1. Positioning

CSS positioning allows us to control the layout and placement of elements on a web page. There are several positioning options available:

- Static positioning: This is the default positioning for elements. Elements are positioned according to the normal flow of the document.

- Relative positioning: Elements with relative positioning are positioned relative to their normal position. This allows us to adjust the position of an element without affecting the layout of other elements.

- Absolute positioning: Elements with absolute positioning are positioned relative to their nearest positioned ancestor. If no ancestor is positioned, the element is positioned relative to the document body.

- Fixed positioning: Elements with fixed positioning are positioned relative to the browser window. They remain fixed in their position even when the page is scrolled.

- Sticky positioning: Elements with sticky positioning are positioned based on the user's scroll position. They behave like static elements until they reach a specified threshold, at which point they become fixed.

## 2. The CSS Display Property

The CSS display property allows us to control how elements are displayed on a web page. There are several display options available:

- Block-level elements: Block-level elements take up the full width of their parent container and start on a new line. Examples include `<div>`, `<p>`, and `<h1>` to `<h6>`.

- Inline-level elements: Inline-level elements do not start on a new line and only take up as much width as necessary. Examples include `<span>`, `<a>`, and `<strong>`.

- Inline-block elements: Inline-block elements are similar to inline elements but can have a width and height. They do not start on a new line. Examples include `<img>`, `<input>`, and `<button>`.

- Flexbox: Flexbox is a powerful layout system that allows us to create flexible and responsive layouts. It provides a way to distribute space among items in a container and align them in various ways.

## 3. Flexbox

Flexbox is a CSS layout module that provides a flexible way to distribute space among items in a container. It allows us to create responsive layouts that adapt to different screen sizes. Flexbox consists of a flex container and flex items.

- Flex container: The parent element that contains flex items. It is defined by setting the `display` property to `flex` or `inline-flex`. The flex container establishes a new flex formatting context for its children.

- Flex items: The child elements of a flex container. They can be aligned and distributed within the flex container using various properties such as `flex-direction`, `justify-content`, and `align-items`.

- Flex direction: Determines the direction in which flex items are laid out. It can be set to `row`, `row-reverse`, `column`, or `column-reverse`.

- Justify content: Defines how flex items are aligned along the main axis of the flex container. It can be set to `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, or `space-evenly`.

- Align items: Defines how flex items are aligned along the cross axis of the flex container. It can be set to `flex-start`, `flex-end`, `center`, `baseline`, or `stretch`.

## 4. Practical Examples

In this section, we will create a responsive layout using Flexbox. We will start with a simple layout and progressively enhance it to be responsive.

Example code: [code-examples/04_flexbox_layout.html](code-examples/04_flexbox_layout.html)

## 5. Exercises

1. Design a two-column layout that adjusts based on screen size. Use Flexbox to achieve the desired layout.

2. Create a responsive navigation bar using Flexbox. The navigation bar should collapse into a hamburger menu on smaller screens.

---

Congratulations! You have completed the lesson on CSS layouts. Understanding CSS layouts is essential for creating visually appealing and responsive web pages. In the next lesson, we will explore the principles of responsive web design.