import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { facebook } from './exports/facebook.js' // Import the function
import http from 'http'

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

function keepalive(url, interval = 1000) {
 setInterval(() => {
  http
   .get(url, res => {
    if (res.statusCode === 200) {
     console.log(`${new Date().toISOString()} - Successfully pinged ${url}`)
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
