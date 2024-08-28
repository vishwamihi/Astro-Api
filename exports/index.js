import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const letters = express.Router()

// Serve static files from the public directory
letters.use(express.static(path.join(__dirname, 'public')))

letters.get('/newsletter', (req, res) => {
 res.sendFile(path.join(__dirname, '../public/html/sub.html'))
})

export default letters
