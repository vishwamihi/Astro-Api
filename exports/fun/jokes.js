const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import { readFileSync } from 'fs'
import path, { join } from 'path'
import { fileURLToPath } from 'url'

function randomJoke() {
  // Path to the jokes.json file
  const filePath = join(__dirname, '../../lang', 'jokes.json')

  // Read the JSON file
  const data = readFileSync(filePath, 'utf-8')

  // Parse the JSON data
  const jokes = JSON.parse(data)

  // Get a random joke
  const randomIndex = Math.floor(Math.random() * jokes.length)
  return jokes[randomIndex]
}

export { randomJoke }
