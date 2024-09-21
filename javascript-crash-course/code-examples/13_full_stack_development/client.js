// This is the client-side JavaScript file for the full-stack development lesson

// Import necessary modules
import { fetchData } from './server.js';

// Function to handle button click event
function handleClick() {
  // Fetch data from the server
  fetchData()
    .then((data) => {
      // Display the data on the webpage
      const resultElement = document.getElementById('result');
      resultElement.textContent = data;
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch request
      console.error('Error:', error);
    });
}

// Add event listener to the button
const buttonElement = document.getElementById('fetch-button');
buttonElement.addEventListener('click', handleClick);