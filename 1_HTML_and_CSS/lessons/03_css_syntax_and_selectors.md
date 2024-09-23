# CSS Syntax and Selectors

## Overview:
This lesson covers the basics of CSS syntax and the various types of selectors that allow developers to target specific HTML elements. CSS (Cascading Style Sheets) is used to style the visual presentation of a webpage, controlling everything from fonts and colors to layout and spacing. Understanding how to write CSS and apply it effectively is crucial for building visually appealing websites.

---

## CSS Syntax:

### 1. **CSS Rule Structure:**
   A CSS rule consists of a selector and a set of declarations.

   **Example:**
   ```css
   p {
     color: blue;
     font-size: 16px;
   }
   ```

   - **Selector:** Targets the HTML element (`p` in this example).
   - **Declarations:** Contain property-value pairs (`color` and `font-size`) that define how the element should be styled.

### 2. **CSS Declaration:**
   A CSS declaration is composed of:
   - **Property:** The aspect of the element to style (e.g., `color`, `font-size`, `margin`).
   - **Value:** The specific style to apply (e.g., `blue`, `16px`, `10px`).

   **Example:**
   ```css
   color: red;
   ```

### 3. **Multiple Declarations:**
   Separate multiple declarations using semicolons.

   **Example:**
   ```css
   h1 {
     color: green;
     font-family: Arial, sans-serif;
     text-align: center;
   }
   ```

---

## Types of CSS Selectors:

### 1. **Universal Selector (`*`):**
   - Selects all elements on the page.
   - **Example:**
     ```css
     * {
       margin: 0;
       padding: 0;
     }
     ```

### 2. **Type Selector (Element Selector):**
   - Targets all elements of a specific type (e.g., all `<p>` elements).
   - **Example:**
     ```css
     p {
       color: darkgray;
     }
     ```

### 3. **Class Selector (`.`):**
   - Targets elements by their `class` attribute.
   - **Example:**
     ```css
     .highlight {
       background-color: yellow;
     }
     ```

   **HTML:**
   ```html
   <p class="highlight">This text is highlighted.</p>
   ```

### 4. **ID Selector (`#`):**
   - Targets a single element by its `id` attribute (used once per page).
   - **Example:**
     ```css
     #main-header {
       background-color: lightblue;
     }
     ```

   **HTML:**
   ```html
   <h1 id="main-header">Welcome to My Website</h1>
   ```

### 5. **Attribute Selector:**
   - Targets elements based on attributes and their values.
   - **Example:**
     ```css
     input[type="text"] {
       border: 1px solid #333;
     }
     ```

   **HTML:**
   ```html
   <input type="text" name="username">
   ```

### 6. **Pseudo-Class Selectors:**
   - Target elements in a specific state (e.g., `:hover`, `:focus`).
   - **Example:**
     ```css
     a:hover {
       text-decoration: underline;
     }
     ```

### 7. **Pseudo-Element Selectors:**
   - Target specific parts of an element (e.g., `::before`, `::after`).
   - **Example:**
     ```css
     p::first-letter {
       font-size: 2em;
       color: red;
     }
     ```

   **HTML:**
   ```html
   <p>This is an example paragraph.</p>
   ```

---

## Combining Selectors:

### 1. **Grouping Selectors:**
   - Apply the same styles to multiple selectors by separating them with commas.
   - **Example:**
     ```css
     h1, h2, h3 {
       font-family: 'Arial', sans-serif;
       color: darkblue;
     }
     ```

### 2. **Descendant Selector:**
   - Select elements that are descendants of a specific element.
   - **Example:**
     ```css
     div p {
       color: green;
     }
     ```

   **HTML:**
   ```html
   <div>
     <p>This paragraph will be green.</p>
   </div>
   ```

### 3. **Child Selector (`>`):**
   - Select direct child elements of a parent.
   - **Example:**
     ```css
     ul > li {
       list-style-type: square;
     }
     ```

### 4. **Adjacent Sibling Selector (`+`):**
   - Select the next sibling immediately after an element.
   - **Example:**
     ```css
     h1 + p {
       font-style: italic;
     }
     ```

### 5. **General Sibling Selector (`~`):**
   - Select all siblings after an element.
   - **Example:**
     ```css
     h1 ~ p {
       color: gray;
     }
     ```

---

## Specificity in CSS:
CSS uses a specificity system to determine which styles are applied when multiple rules target the same element. Specificity is calculated based on the selectors used:
1. Inline styles have the highest specificity.
2. ID selectors are more specific than class selectors.
3. Class selectors are more specific than type selectors.

---

## Best Practices for CSS:

1. **Organize Your Styles:**
   - Group related styles together, and comment on sections where appropriate.

2. **Use Meaningful Class and ID Names:**
   - Avoid generic names like `div1` or `button1`; instead, use descriptive names like `nav-menu` or `footer-section`.

3. **Keep Your CSS DRY (Don’t Repeat Yourself):**
   - Reduce redundancy by grouping styles and using reusable classes.

4. **Minimize Specificity:**
   - Avoid high specificity in CSS, as it can make styles harder to override. Rely on class and type selectors.

5. **Use External Stylesheets:**
   - Keep CSS in separate `.css` files rather than embedding it directly within HTML for easier maintenance.

---

## Suggestions:

1. **Experiment with Pseudo-Classes:**
   - Try styling links using `:hover` and `:focus` states to improve interactivity and user experience.

2. **Understand Specificity:**
   - Test different combinations of selectors in your projects to understand how specificity affects the application of styles.

3. **CSS Preprocessors:**
   - Consider learning Sass or Less to streamline CSS development and introduce more powerful features like variables and nesting.

---

## Next Lesson:

[Layout Techniques](03_layout_techniques.md)

---

### Links for Further Learning:
- [MDN: CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS Tricks: CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)
- [W3Schools: CSS Syntax](https://www.w3schools.com/css/css_syntax.asp)
