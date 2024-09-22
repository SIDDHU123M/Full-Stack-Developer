// This file contains examples of using popular JavaScript libraries.

// Lodash: Utility library for manipulating arrays, objects, and other data types.
// Usage: Simplifies complex data operations.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = _.map(numbers, (num) => num * 2);
console.log(doubledNumbers);

// Moment.js: Date manipulation library.
// Usage: Handling dates and times in JavaScript applications.
const today = moment();
console.log(today.format("YYYY-MM-DD"));

// Axios: Promise-based HTTP client for making AJAX requests.
// Usage: Fetch data from external APIs.
axios.get("https://api.example.com/data")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

// Jest: JavaScript testing framework.
// Usage: Write and run unit tests for JavaScript applications.
test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

// D3.js: Library for data visualization.
// Usage: Creating charts and interactive data visualizations.
const dataset = [1, 2, 3, 4, 5];
d3.select("body")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text((d) => `This is paragraph ${d}`);

// Three.js: Library for creating 3D graphics.
// Usage: Building 3D environments and visual effects in web applications.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);