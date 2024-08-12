import express from 'express'
import path from 'path'
import http from 'http'
import { fileURLToPath } from 'url'

//====================================================
import { facebook } from './exports/facebook.js'
import { youtube } from './exports/youtube.js'
import { instagram } from './exports/instagram.js'
import { twitter } from './exports/twitter.js'
import { tiktok } from './exports/tiktok.js'
import { pinterest } from './exports/pinterest.js'
//=====================================================
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = 3000
const startTime = Date.now()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/runtime', (req, res) => {
 const uptime = Date.now() - startTime
 const runtime = new Date(uptime).toISOString().substr(11, 8)
 res.send(runtime)
})

app.get('/facebook', async (req, res) => {
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

app.get('/youtube', async (req, res) => {
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

app.get('/instagram', async (req, res) => {
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

app.get('/twitter', async (req, res) => {
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

app.get('/tiktok', async (req, res) => {
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

// New Pinterest endpoint
app.get('/pinterest', async (req, res) => {
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

function keepalive(url, interval = 1000) {
 setInterval(() => {
  http
   .get(url, res => {
    if (res.statusCode === 200) {
     //   console.log(`${new Date().toISOString()} - Successfully pinged ${url}`)
    } else {
     console.warn(`${new Date().toISOString()} - Received status code ${res.statusCode} from ${url}`)
    }
   })
   .on('error', err => {
    console.error(`${new Date().toISOString()} - Failed to ping ${url}: ${err.message}`)
   })
 }, interval)
}

app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`)
})

const serverUrl = `http://localhost:${port}`
keepalive(serverUrl)
