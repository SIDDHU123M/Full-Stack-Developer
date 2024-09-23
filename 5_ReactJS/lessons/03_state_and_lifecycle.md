# State and Lifecycle

This lesson covers the concept of state and lifecycle in React.js.

## State

State is a built-in feature in React that allows components to manage and store data that can change over time. It represents the current state of a component and can be updated using the `setState` method.

To define and use state in a React component, follow these steps:

1. Initialize the state in the component's constructor using `this.state = { }`.
2. Access the state using `this.state`.
3. Update the state using `this.setState({ })`.

Example:

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

## Lifecycle Methods

Lifecycle methods are special methods that are automatically called at different stages of a component's lifecycle. They allow you to perform certain actions at specific points in the component's life, such as when it is mounted, updated, or unmounted.

Some commonly used lifecycle methods include:

- `componentDidMount`: Called after the component is rendered for the first time.
- `componentDidUpdate`: Called after the component is updated.
- `componentWillUnmount`: Called before the component is removed from the DOM.

Example:

```jsx
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <p>Seconds: {this.state.seconds}</p>
      </div>
    );
  }
}

export default Timer;
```

By using state and lifecycle methods, you can create dynamic and interactive components in React.

```

Please note that the file is intentionally left blank as per your request.