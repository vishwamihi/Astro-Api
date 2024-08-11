import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

// Function to fetch data from the API
async function facebook(url) {
  try {
    const response = await axios.get(`https://api.prabath-md.tech/api/fdown?url=${encodeURIComponent(url)}`);
    
    // Custom output formatting
    const output = {
      creator: 'Astro',
      status: response.data.status === 'success ✅' ? 200 : 'Error',
      data: response.data.data
    };

    return output;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Return a custom error message if an error occurs
    return {
      creator: 'Astro',
      status: 'Error',
      data: null
    };
  }
}

// Define a route for the API
app.get('/facebook', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({
      creator: 'Astro',
      status: 'Error',
      data: 'URL parameter is required'
    });
  }

  try {
    const result = await facebook(url);
    res.status(result.status === 200 ? 200 : 500).json(result);
  } catch (error) {
    res.status(500).json({
      creator: 'Astro',
      status: 'Error',
      data: 'Internal server error'
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
