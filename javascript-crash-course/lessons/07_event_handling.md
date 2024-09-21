# Event Handling in JavaScript

In web development, event handling is an essential concept that allows you to respond to user interactions with your web page. JavaScript provides powerful event handling capabilities that enable you to create interactive and dynamic web applications.

## Understanding Events

Events are actions or occurrences that happen in the browser, such as a button click, mouse movement, or keyboard input. JavaScript allows you to listen for these events and execute code in response.

## Event Handlers

Event handlers are functions that are executed when a specific event occurs. You can attach event handlers to HTML elements using JavaScript to define the behavior when the event is triggered.

### Inline Event Handlers

One way to attach an event handler is by using inline event handlers directly in the HTML markup. For example, you can use the `onclick` attribute to specify a function to be executed when a button is clicked:

```html
<button onclick="handleClick()">Click me</button>
```

### DOM Event Listeners

Another approach is to use DOM event listeners, which provide a more flexible and maintainable way to handle events. Event listeners allow you to attach multiple event handlers to an element and separate the JavaScript code from the HTML markup.

Here's an example of adding an event listener to a button element:

```javascript
const button = document.querySelector('button');

button.addEventListener('click', handleClick);

function handleClick() {
  // Code to be executed when the button is clicked
}
```

## Event Object

When an event occurs, JavaScript automatically passes an event object to the event handler function. This object contains information about the event, such as the target element, event type, and additional properties specific to the event.

You can access the event object within the event handler function and use its properties to perform actions based on the event details.

```javascript
function handleClick(event) {
  const target = event.target;
  const eventType = event.type;

  // Code to be executed based on the event details
}
```

## Event Propagation

Event propagation refers to the order in which events are handled when an event occurs on a nested element. There are two phases of event propagation: capturing and bubbling.

### Capturing Phase

During the capturing phase, the event is first captured by the outermost ancestor element and then propagated down to the target element. You can use the `addEventListener` method with the `capture` option to handle events during the capturing phase.

```javascript
element.addEventListener('click', handleClick, true);
```

### Bubbling Phase

After the capturing phase, the event is bubbled up from the target element to the outermost ancestor element. By default, event listeners attached with `addEventListener` without the `capture` option handle events during the bubbling phase.

```javascript
element.addEventListener('click', handleClick);
```

## Event Delegation

Event delegation is a technique that allows you to handle events on multiple elements using a single event listener. Instead of attaching an event listener to each individual element, you attach it to a common ancestor element and use event delegation to handle events on its descendants.

Event delegation is particularly useful when you have dynamically added or removed elements, as you don't need to attach or detach event listeners for each element.

```javascript
const parentElement = document.querySelector('.parent');

parentElement.addEventListener('click', function(event) {
  if (event.target.matches('.child')) {
    // Code to handle the event on the child element
  }
});
```

## Practical Examples

### Example 1: Toggle Button

```html
<button id="toggleButton">Toggle</button>
<div id="content" style="display: none;">Content to be toggled</div>

<script>
  const toggleButton = document.getElementById('toggleButton');
  const content = document.getElementById('content');

  toggleButton.addEventListener('click', function() {
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
</script>
```

### Example 2: Form Validation

```html
<form id="registrationForm">
  <input type="text" id="username" required>
  <input type="email" id="email" required>
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Perform form validation and submit data
  });
</script>
```

## Exercises

1. Create a button that changes the background color of a div element when clicked.
2. Implement a dropdown menu that shows/hides a list of options when clicked.
3. Build a form with validation for username, email, and password fields. Display appropriate error messages when the form is submitted with invalid data.

## Additional Resources

- [MDN Web Docs: Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info: Events](https://javascript.info/events)
- [W3Schools: JavaScript Events](https://www.w3schools.com/js/js_events.asp)
```

This is the contents of the `07_event_handling.md` file, covering event handling in JavaScript.