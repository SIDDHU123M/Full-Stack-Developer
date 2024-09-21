// Example of fetching data from an API using Async/Await

async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

async function displayData() {
  try {
    const data = await fetchData('https://api.example.com/data');
    console.log('Fetched data:', data);
    // Display the data on the webpage or perform further operations
  } catch (error) {
    console.error('Error displaying data:', error);
  }
}

displayData();