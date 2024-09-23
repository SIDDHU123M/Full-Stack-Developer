# Event Handling

## Introduction
Event handling is an important aspect of JavaScript programming. It allows you to respond to user interactions and perform actions based on those interactions. In this lesson, we will explore various event handling techniques in JavaScript.

## Adding Event Listeners
To handle events in JavaScript, you need to add event listeners to the HTML elements you want to track. An event listener is a function that gets executed when a specific event occurs. Here's an example of adding an event listener to a button element:

```javascript
const button = document.querySelector('#myButton');

button.addEventListener('click', function() {
  // Code to be executed when the button is clicked
});
```

In the example above, we select the button element using `querySelector` and then add an event listener for the `click` event. When the button is clicked, the function inside the event listener will be executed.

## Event Object
When an event occurs, JavaScript automatically passes an event object to the event handler function. This object contains information about the event, such as the target element, event type, and any additional data related to the event. You can access this object inside the event handler function using the `event` parameter. Here's an example:

```javascript
button.addEventListener('click', function(event) {
  console.log(event.target); // The element that triggered the event
  console.log(event.type); // The type of event (e.g., "click")
});
```

In the example above, we log the target element and event type to the console.

## Event Propagation
In JavaScript, events propagate through the DOM tree. This means that when an event occurs on an element, it also triggers the same event on all its parent elements. This process is called event propagation or event bubbling. By default, events bubble up from the target element to the root of the document.

You can control event propagation using the `stopPropagation` method of the event object. Calling this method inside an event handler will prevent the event from propagating further up the DOM tree. Here's an example:

```javascript
const parentElement = document.querySelector('#parentElement');

parentElement.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent event from propagating further
  console.log('Clicked on parent element');
});

button.addEventListener('click', function(event) {
  console.log('Clicked on button');
});
```

In the example above, when the button is clicked, the event handler for the parent element will also be triggered. However, calling `stopPropagation` inside the parent element's event handler will prevent the event from reaching the button's event handler.

## Conclusion
Event handling is a fundamental concept in JavaScript. By adding event listeners and handling events, you can create interactive and dynamic web applications. Understanding event propagation is also important for controlling how events propagate through the DOM tree.

In the next lesson, we will explore more advanced event handling techniques and dive deeper into specific types of events.
```

Please note that the file is intentionally left blank as per your request.