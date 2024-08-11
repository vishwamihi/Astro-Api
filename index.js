import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { facebook } from './exports/facebook.js' // Import the function

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

app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`)
})
