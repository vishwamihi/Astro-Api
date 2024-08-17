import https from 'https'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { v4 as uuidv4 } from 'uuid'
import { mkdir } from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const key = '0334ec'
const device = 'desktop'
const dimension = '1024x768'
const format = 'jpg'
const cacheLimit = 0
const delay = 0

export async function fetchScreenshot(url) {
  const apiUrl = `https://api.screenshotmachine.com/?key=${key}&url=${encodeURIComponent(url)}&device=${device}&dimension=${dimension}&format=${format}&cacheLimit=${cacheLimit}&delay=${delay}`

  return new Promise(async (resolve, reject) => {
    const publicDir = path.join(process.cwd(), 'public', 'screenshots')
    await mkdir(publicDir, { recursive: true })

    https
      .get(apiUrl, (res) => {
        const chunks = []
        res.on('data', (chunk) => {
          chunks.push(chunk)
        })
        res.on('end', () => {
          const buffer = Buffer.concat(chunks)
          const filename = `${uuidv4()}.${format}`
          const filepath = path.join(publicDir, filename)
          fs.writeFileSync(filepath, buffer)
          resolve(filepath) // Resolve with the full file path
        })
      })
      .on('error', (err) => {
        reject(err)
      })
  })
}
