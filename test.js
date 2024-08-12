/*import fetch from 'node-fetch'

async function patch(url) {
 try {
  const BASE_URL = 'https://cobalt.tools'
  const BASE_API = 'https://api.cobalt.tools/api'

  await fetch(BASE_API + '/json', {
   method: 'OPTIONS',
   headers: {
    'access-control-request-method': 'POST',
    'access-control-request-headers': 'content-type',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    origin: BASE_URL,
    referer: BASE_URL,
   },
  })

  const res = await fetch(BASE_API + '/json', {
   method: 'POST',
   headers: {
    origin: BASE_URL,
    referer: BASE_URL,
    'user-agent': BASE_URL,
    'content-type': 'application/json',
    accept: 'application/json',
   },
   body: JSON.stringify({
    url: url,
    filenamePattern: 'basic',
   }),
  }).then(v => v.json())

  const stream = await fetch(res.url)

  return {
   status: stream.status,
   url: stream.url,
  }
 } catch (e) {
  throw e
 }
}

// Example usage
patch('https://www.threads.net/@wongmjane/post/C-in5Ncy5cd?xmt=AQGzGTSUuRW3T2FrP1ghpaDIoffAln36lyf7FeZ1FaikNw')
 .then(v => console.log(v))
 .catch(error => console.error('Error:', error))
*/

/*
import {pinterest} from './exports/pinterest.js'
// Usage
pinterest('books')
 .then(results => {
  console.log('Pinterest search results:')
  console.log(results)
 })
 .catch(error => {
  console.error('Error:', error)
 })

*/

/*
import axios from 'axios'
import { load } from 'cheerio'

async function wikimedia(title) {
 try {
  const response = await axios.get(`https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(title)}&title=Special:MediaSearch&go=Go&type=image`)
  const $ = load(response.data)

  const results = $('.sdms-search-results__list-wrapper > div > a')
   .map((_, element) => {
    const $element = $(element)
    return {
     title: $element.find('img').attr('alt'),
     source: new URL($element.attr('href'), 'https://commons.wikimedia.org').href,
     image: $element.find('img').attr('data-src') || $element.find('img').attr('src'),
    }
   })
   .get()

  return results
 } catch (error) {
  console.error('Error fetching Wikimedia data:', error.message)
  throw error
 }
}

// Test function
async function testWikimedia() {
 try {
  const searchTerm = 'cats'
  // console.log(`Searching Wikimedia Commons for: "${searchTerm}"`)

  const results = await wikimedia(searchTerm)

  console.log(`Found ${results.length} results:`)
  results.forEach((result, index) => {
   console.log(`\nResult ${index + 1}:`)
   console.log(`Title: ${result.title}`)
   console.log(`Source: ${result.source}`)
   console.log(`Image URL: ${result.image}`)
  })
 } catch (error) {
  console.error('Test failed:', error.message)
 }
}

// Run the test
testWikimedia()
*/

/*
import googleIt from 'google-it'

async function GoogleSearch(query) {
 try {
  const results = await googleIt({ query })
  console.log(results)
 } catch (error) {
  console.error('Error performing Google search:', error)
 }
}

// Example usage
GoogleSearch('Node.js tutorials')
*/

/*
import axios from "axios";

function fetchWeatherData(apiKey, location, days) {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
      params: {
        key: apiKey,
        q: location,
        days: days,
        aqi: 'no',
        alerts: 'no'
      }
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
  });
}

// Test example code
const apiKey = '10b55221b0384f88bc795327241208';
const location = 'Lagos';
const days = 1;

fetchWeatherData(apiKey, location, days)
  .then(data => {
    console.log('Weather data:', data);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
  */
/*
import { randomJoke } from './exports/jokes.js'

console.log("Here's a random joke for you:")
console.log(randomJoke())
*/
/*

import { fetchChatGPTData } from './exports/chatGpt4.js';

const query = 'What is the difference between Javascript and Python When it comes to simplicity and effeicency';
fetchChatGPTData(query)
  .then(result => console.log(result))
  .catch(error => console.error(error));
  */