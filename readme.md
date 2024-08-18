# Astro API

Welcome to the **Astro API** project! This API provides a robust set of endpoints for various functionalities, including real-time server runtime information, social media data, and weather data. Built with Node.js and Express, this API is designed to be both efficient and easy to use.

## Fetching Data From Api

**Set Base Link** [Click ME](https://astro-api-zb03.onrender.com)

```javascript
const base_uri = "https://astro-api-zb03.onrender.com"

// Using Class Constructor to fetch Data

/**
 * A class for downloading Facebook videos using the Astro API.
 */
class FacebookDownloader {
  /**
   * Creates a new instance of the FacebookDownloader class.
   * @param {string} url - The Facebook video URL to download.
   */
  constructor(url) {
    this.url = url;
    this.apiUrl = base_uri+'/download/facebook?url=';
  }

  /**
   * Fetches the video data from the Astro API.
   * @returns {Promise<object>} A promise that resolves with the video data.
   */
  async fetchData() {
    try {
      const response = await fetch(`${this.apiUrl}${this.url}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Downloads the Facebook video using the video URL.
   * @returns {Promise<void>} A promise that resolves when the video is downloaded.
   */
  async downloadVideo() {
    const data = await this.fetchData();
    if (data && data.data) {
      const videoUrl = data.data.hd;
      console.log(`Video URL: ${videoUrl}`);
      // You can add code here to download the video using the videoUrl
    } else {
      console.log('Error: Unable to fetch video data');
    }
  }
}

```

## Build Your Own

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FXastro/Astro-Api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Astro-Api
   ```

3. Install the dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running the Application

To start the server, use:

```bash
npm start
```

Or:

```bash
yarn start
```

The server will start and listen on the default port (3000). You can change the port by setting the `PORT` environment variable.

### API Endpoints

#### Runtime

- **Endpoint**: `/runtime`
- **Method**: GET
- **Description**: Returns the server's uptime and status information.

#### Social Media

- **Endpoint**: `/download/tiktok`
- **Method**: GET
- **Description**: Fetches a list of social media links with validation.

#### Weather

- **Endpoint**: `/search/weather`
- **Method**: GET
- **Description**: Retrieves the current weather data in JSON format.

## Contributing

We welcome contributions to the Astro API project! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push your branch to your fork.
5. Create a pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/FXastro/Astro-Api).
