# ASTRO API

A simple API to quickly access the data you need.

## Installation

1. Clone the repo: `git clone https://github.com/FXastro/Astro-Api.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Endpoints

- `/api/endpoint1` - Retrieves specific data
- `/api/endpoint2` - Fetches additional details

Here's an expanded example section with API requests in different programming languages:

## Example Requests

### Bash (cURL)

Request:

```bash
curl -X GET "http://localhost:3000/api/endpoint1"
```

Response:

```json
{ "message": "Here is your data!" }
```

### JavaScript (Fetch API)

```javascript
fetch('http://localhost:3000/api/endpoint1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Python (Requests)

```python
import requests

response = requests.get('http://localhost:3000/api/endpoint1')
print(response.json())
```

### Node.js (Axios)

```javascript
const axios = require('axios');

axios.get('http://localhost:3000/api/endpoint1')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

### PHP (cURL)

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://localhost:3000/api/endpoint1",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);
curl_close($curl);

echo $response;
```

### Ruby

```ruby
require 'net/http'
require 'json'

url = URI("http://localhost:3000/api/endpoint1")
response = Net::HTTP.get(url)
puts JSON.parse(response)
```
