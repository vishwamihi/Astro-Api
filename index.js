const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import dotenv from 'dotenv'
dotenv.config({ path: path.join(__dirname, '.env') })

import express from 'express'
import path from 'path'
import http from 'http'
import { io } from 'socket.io-client'
import { fileURLToPath } from 'url'

//====================================================
import { facebook } from './exports/download/facebook.js'
import { youtube } from './exports/download/youtube.js'
import { instagram } from './exports/download/instagram.js'
import { twitter } from './exports/download/twitter.js'
import { tiktok } from './exports/download/tiktok.js'
import { pinterest } from './exports/download/pinterest.js'
import { wikimedia } from './exports/search/wikimedia.js'
import { GoogleSearch } from './exports/search/google.js'
import { fetchWeatherData } from './exports/search/weather.js'
import { randomJoke } from './exports/fun/jokes.js'
import { fetchChatGPTData } from './exports/ai/chatGpt4.js'
import { Bing } from './exports/search/bing.js'
import fetch from 'node-fetch'
//=====================================================

const app = express()
const port = process.env.PORT
const startTime = Date.now()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/runtime', (req, res) => {
  const uptime = Date.now() - startTime
  const runtime = new Date(uptime).toISOString().substr(11, 8)
  res.send(runtime)
})

app.get('/download/facebook', async (req, res) => {
  const { url } = req.query
  if (!url) {
    return res.status(400).json({
      creator: 'Astro',
      status: 400,
      success: false,
      message: 'URL parameter is missing',
    })
  }

  const result = await facebook(url)
  res.status(result.status).json(result)
})

app.get('/download/youtube', async (req, res) => {
  const { url } = req.query
  if (!url) {
    return res.status(400).json({
      creator: 'Astro',
      status: 400,
      success: false,
      message: 'URL parameter is missing',
    })
  }

  try {
    const result = await youtube(url)
    res.status(result.status).json({
      creator: 'Astro',
      status: result.status,
      success: result.status === 200,
      url: result.url,
    })
  } catch (error) {
    res.status(500).json({
      creator: 'Astro',
      status: 500,
      success: false,
      message: 'An error occurred while processing the YouTube URL',
      error: error.message,
    })
  }
})

app.get('/download/instagram', async (req, res) => {
  const { url } = req.query
  if (!url) {
    return res.status(400).json({
      creator: 'Astro',
      status: 400,
      success: false,
      message: 'URL parameter is missing',
    })
  }

  try {
    const result = await instagram(url)
    res.status(result.status).json({
      creator: 'Astro',
      status: result.status,
      success: result.status === 200,
      url: result.url,
    })
  } catch (error) {
    res.status(500).json({
      creator: 'Astro',
      status: 500,
      success: false,
      message: 'An error occurred while processing the Instagram URL',
      error: error.message,
    })
  }
})

app.get('/download/twitter', async (req, res) => {
  const { url } = req.query
  if (!url) {
    return res.status(400).json({
      creator: 'Astro',
      status: 400,
      success: false,
      message: 'URL parameter is missing',
    })
  }

  try {
    const result = await twitter(url)
    res.status(result.status).json({
      creator: 'Astro',
      status: result.status,
      success: result.status === 200,
      url: result.url,
    })
  } catch (error) {
    res.status(500).json({
      creator: 'Astro',
      status: 500,
      success: false,
      message: 'An error occurred while processing the Twitter URL',
      error: error.message,
    })
  }
})

app.get('/download/tiktok', async (req, res) => {
  const { url } = req.query
  if (!url) {
    return res.status(400).json({
      creator: 'Astro',
      status: 400,
      success: false,
      message: 'URL parameter is missing',
    })
  }

  try {
    const result = await tiktok(url)
    res.status(result.status).json({
      creator: 'Astro',
      status: result.status,
      success: result.status === 200,
      url: result.url,
    })
  } catch (error) {
    res.status(500).json({
      creator: 'Astro',
      status: 500,
      success: false,
      message: 'An error occurred while processing the TikTok URL',
      error: error.message,
    })
  }
})

app.get('/download/pinterest', async (req, res) => {
  const { query } = req.query
  if (!query) {
    return res.status(400).json({
      creator: 'Astro',
      status: 400,
      success: false,
      message: 'Query parameter is missing',
    })
  }

  try {
    const result = await pinterest(query)
    res.status(200).json({
      creator: 'Astro',
      status: 200,
      success: true,
      results: result,
    })
  } catch (error) {
    res.status(500).json({
      creator: 'Astro',
      status: 500,
      success: false,
      message: 'An error occurred while processing the Pinterest query',
      error: error.message,
    })
  }
})

app.get('/search/wikimedia', async (req, res) => {
  const { title } = req.query
  if (!title) {
    return res.status(400).json({
      creator: 'Astro',
      status: 400,
      success: false,
      message: 'Title parameter is missing',
    })
  }

  try {
    const results = await wikimedia(title)
    res.status(200).json({
      creator: 'Astro',
      status: 200,
      success: true,
      results,
    })
  } catch (error) {
    res.status(500).json({
      creator: 'Astro',
      status: 500,
      success: false,
      message: 'An error occurred while processing the Wikimedia search',
      error: error.message,
    })
  }
})

app.get('/search/search', async (req, res) => {
  const query = req.query.q

  if (!query) {
    return res.status(400).json({
      Creator: 'Astro',
      status: 400,
      error: 'Query parameter "q" is required',
    })
  }

  try {
    const results = await googleIt({ query })
    return res.json({
      Creator: 'Astro',
      status: 200,
      results,
    })
  } catch (error) {
    console.error('Error performing Google search:', error)
    return res.status(500).json({
      Creator: 'Astro',
      status: 500,
      error: 'Failed to perform search',
    })
  }
})

app.get('/search/google', async (req, res) => {
  const query = req.query.q

  if (!query) {
    return res.status(400).json({
      Creator: 'Astro',
      status: 400,
      error: 'Query parameter "q" is required',
    })
  }

  const searchResult = await GoogleSearch(query)
  res.status(searchResult.status).json(searchResult)
})

app.get('/search/weather', async (req, res) => {
  const { apiKey, location, days } = req.query

  if (!apiKey || !location || !days) {
    return res.status(400).json({
      creator: 'Astro',
      status: 400,
      success: false,
      message: 'API key, location, and days parameters are required',
    })
  }

  try {
    const result = await fetchWeatherData(apiKey, location, days)
    res.status(200).json({
      creator: 'Astro',
      status: 200,
      success: true,
      result,
    })
  } catch (error) {
    res.status(500).json({
      creator: 'Astro',
      status: 500,
      success: false,
      message: 'An error occurred while fetching weather data',
      error: error.message,
    })
  }
})

app.get('/search/bing', async (req, res) => {
  const { query } = req.query

  if (!query) {
    return res.status(400).json({
      creator: 'Astro',
      status: 400,
      success: false,
      message: 'Query parameter is required',
    })
  }

  try {
    const results = await Bing(query)
    res.status(200).json({
      creator: 'Astro',
      status: 200,
      success: true,
      results,
    })
  } catch (error) {
    res.status(500).json({
      creator: 'Astro',
      status: 500,
      success: false,
      message: 'An error occurred while fetching search results',
      error: error.message,
    })
  }
})

app.get('/fun/random-joke', (req, res) => {
  const joke = randomJoke()
  res.json({
    creator: 'Astro',
    status: 200,
    success: true,
    result: joke,
  })
})

app.get('/api/chatgpt', async (req, res) => {
  const query = req.query.q
  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter' })
  }

  try {
    const result = await fetchChatGPTData(query)
    res.json({
      creator: 'Astro',
      status: 200,
      success: true,
      result: result,
    })
  } catch (error) {
    console.error('Error fetching ChatGPT data:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

function keepalive(url, interval = 1000) {
  setInterval(() => {
    http
      .get(url, (res) => {
        if (res.statusCode === 200) {
     console.log(`${new Date().toISOString()} - Successfully pinged ${url}`)
        } else {
          console.warn(`${new Date().toISOString()} - Received status code ${res.statusCode} from ${url}`)
        }
      })
      .on('error', (err) => {
        console.error(`${new Date().toISOString()} - Failed to ping ${url}: ${err.message}`)
      })
  }, interval)
}

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public/404/index.html'))
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

const serverUrl = `http://localhost:${port}`
keepalive(serverUrl)

async function runProcesses(connect, getUsers = true) {
  async function connectSocket() {
    try {
      const serverUrl = 'https://socket-counter.onrender.com'
      const ws = io(serverUrl, { reconnection: true })
      ws.on('connect', () => console.log('Connected to server'))
      ws.on('disconnect', () => console.log('Disconnected from server'))
    } catch (error) {
      console.log('Error Connecting To User Database Server\n\n\n', error)
    }
  }
  connectSocket()
  async function isUser() {
    try {
      const response = await fetch('https://socket-counter.onrender.com/active-users')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log(`Joined ${data.activeUsers} Users`)
      return data.activeUsers
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }
  isUser()
}
runProcesses()
