# DOM Manipulation

## Introduction

DOM (Document Object Model) manipulation is a fundamental concept in web development. It allows you to interact with the HTML structure of a web page and dynamically modify its content, styles, and behavior using JavaScript.

In this lesson, we will cover the basics of DOM manipulation, including selecting elements, modifying their properties, and handling events.

## Selecting Elements

To manipulate elements in the DOM, you first need to select them. There are several methods you can use to select elements:

1. `getElementById`: Selects an element by its unique ID.
2. `getElementsByClassName`: Selects elements by their class name.
3. `getElementsByTagName`: Selects elements by their tag name.
4. `querySelector`: Selects the first element that matches a CSS selector.
5. `querySelectorAll`: Selects all elements that match a CSS selector.

## Modifying Element Properties

Once you have selected an element, you can modify its properties, such as its text content, HTML content, attributes, and styles. Here are some common methods for modifying element properties:

1. `textContent`: Gets or sets the text content of an element.
2. `innerHTML`: Gets or sets the HTML content of an element.
3. `getAttribute`: Gets the value of an attribute.
4. `setAttribute`: Sets the value of an attribute.
5. `style`: Allows you to modify CSS styles of an element.

## Handling Events

Event handling is an essential part of DOM manipulation. It allows you to respond to user interactions, such as clicks, mouse movements, and keyboard input. Here are the basic steps for handling events:

1. Select the element you want to attach the event to.
2. Define a function that will be called when the event occurs.
3. Use the `addEventListener` method to attach the event listener to the element.

```javascript
// Example of event handling
const button = document.querySelector('#myButton');

function handleClick() {
  console.log('Button clicked!');
}

button.addEventListener('click', handleClick);
```

## Conclusion

DOM manipulation is a powerful technique that allows you to create dynamic and interactive web pages. By selecting elements, modifying their properties, and handling events, you can create engaging user experiences.

In the next lesson, we will dive deeper into event handling and explore more advanced techniques for manipulating the DOM.
```

Please note that the file is intentionally left blank as per your request.