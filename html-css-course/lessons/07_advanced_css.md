# Advanced Selectors and Pseudo-classes

In this lesson, we will explore advanced selectors and pseudo-classes in CSS. These powerful features allow us to target specific elements and apply styles based on various conditions. We will cover advanced selectors such as attribute selectors, child selectors, and sibling selectors. We will also learn about pseudo-classes, which allow us to style elements based on their state or position within the document.

## Advanced Selectors

### Attribute Selectors

Attribute selectors allow us to select elements based on their attributes and attribute values. They provide a way to target elements that match specific criteria. Here are some examples of attribute selectors:

- `[attribute]`: Selects elements that have the specified attribute.
- `[attribute=value]`: Selects elements that have the specified attribute with a value equal to the specified value.
- `[attribute~=value]`: Selects elements that have the specified attribute with a value containing the specified value as a whole word.
- `[attribute^=value]`: Selects elements that have the specified attribute with a value starting with the specified value.
- `[attribute$=value]`: Selects elements that have the specified attribute with a value ending with the specified value.
- `[attribute*=value]`: Selects elements that have the specified attribute with a value containing the specified value.

### Child Selectors

Child selectors allow us to select elements that are direct children of another element. They are denoted by the `>` symbol. Here's an example:

```css
parent > child {
  /* Styles applied to direct children of parent */
}
```

### Sibling Selectors

Sibling selectors allow us to select elements that share the same parent and come after a specified element. They are denoted by the `~` symbol. Here's an example:

```css
element ~ sibling {
  /* Styles applied to siblings that come after element */
}
```

## Pseudo-classes

Pseudo-classes are keywords that can be added to selectors to style elements based on their state or position within the document. Here are some commonly used pseudo-classes:

- `:hover`: Styles applied when the element is being hovered over.
- `:focus`: Styles applied when the element has focus.
- `:active`: Styles applied when the element is being activated (e.g., clicked).
- `:visited`: Styles applied to visited links.
- `:first-child`: Styles applied to the first child of its parent.
- `:last-child`: Styles applied to the last child of its parent.
- `:nth-child(n)`: Styles applied to the nth child of its parent.
- `:not(selector)`: Styles applied to elements that do not match the specified selector.

## CSS Transitions and Animations

CSS transitions and animations allow us to create smooth and visually appealing effects on elements. Transitions define how a property should change over time, while animations define a series of keyframes that specify the property values at different points in time.

### Transitions

Transitions are defined using the `transition` property. Here's an example:

```css
.element {
  transition: property duration timing-function delay;
}
```

- `property`: Specifies the CSS property to transition.
- `duration`: Specifies the duration of the transition.
- `timing-function`: Specifies the timing function for the transition (e.g., ease, linear, ease-in-out).
- `delay`: Specifies a delay before the transition starts.

### Animations

Animations are defined using the `@keyframes` rule. Here's an example:

```css
@keyframes animation-name {
  0% {
    /* Styles at the start of the animation */
  }
  50% {
    /* Styles at the middle of the animation */
  }
  100% {
    /* Styles at the end of the animation */
  }
}

.element {
  animation-name: animation-name;
  animation-duration: duration;
  animation-timing-function: timing-function;
  animation-delay: delay;
  animation-iteration-count: iteration-count;
  animation-direction: direction;
  animation-fill-mode: fill-mode;
  animation-play-state: play-state;
}
```

- `animation-name`: Specifies the name of the animation defined with `@keyframes`.
- `animation-duration`: Specifies the duration of the animation.
- `animation-timing-function`: Specifies the timing function for the animation.
- `animation-delay`: Specifies a delay before the animation starts.
- `animation-iteration-count`: Specifies the number of times the animation should repeat.
- `animation-direction`: Specifies the direction of the animation (normal, reverse, alternate, alternate-reverse).
- `animation-fill-mode`: Specifies how the animation should apply styles before and after it is executed.
- `animation-play-state`: Specifies whether the animation is running or paused.

## Practical Examples

### Example 1: Hover Transition Effect

```css
.button {
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #ff0000;
}
```

In this example, we apply a transition effect to the background color of a button element. When the button is hovered over, the background color smoothly transitions to red.

### Example 2: Scroll Animation

```css
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.element {
  animation-name: fade-in;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
}
```

In this example, we define a fade-in animation using `@keyframes`. The element starts with an opacity of 0 and gradually fades in to an opacity of 1 over a duration of 1 second.

## Exercises

1. Create a button with a hover transition effect that changes the text color.
2. Animate an element to move from left to right when the page is scrolled.

Congratulations! You have learned about advanced selectors, pseudo-classes, and CSS transitions and animations. These techniques will allow you to create more dynamic and interactive web experiences. Keep practicing and experimenting with different styles and effects to enhance your web development skills.