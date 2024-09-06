import axios from 'axios';

// Function to make a POST request to your locally hosted API
const testShortenUrl = async (longUrl) => {
  try {
    // Make a POST request to the locally hosted API
    const response = await axios.post('http://localhost:5000/shorten', {
      url: longUrl, // Pass the URL as JSON in the request body
    });

    // Check and print the response from the server
    if (response.data.shortenedUrl) {
      console.log(`Shortened URL: ${response.data.shortenedUrl}`);
    } else if (response.data.error) {
      console.error(`Error: ${response.data.error}`);
    } else {
      console.error('Unexpected response format:', response.data);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

// URL you want to shorten
const urlToShorten = 'https://www.google.com';

// Test the function
testShortenUrl(urlToShorten);
