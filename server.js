const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

import dotenv from 'dotenv'
dotenv.config({ path: path.join(__dirname, '.env') })
import { createReadStream, unlink } from 'fs'
import { promises as fsPromises } from 'fs'
import express from 'express'
import path from 'path'
import { join } from 'path'
import cors from 'cors'
import fs from 'fs/promises'
import { Buffer } from 'buffer'
import QRCode from 'qrcode'
import { fileURLToPath } from 'url'
import { readdirSync, statSync } from 'fs'
import { facebook } from './exports/download/facebook.js'
import { youtube } from './exports/download/youtube.js'
import { instagram } from './exports/download/instagram.js'
import { twitter } from './exports/download/twitter.js'
import { tiktok } from './exports/download/tiktok.js'
import { pinterest } from './exports/download/pinterest.js'
import { wikimedia } from './exports/search/wikimedia.js'
import { GoogleSearch } from './exports/search/google.js'
import { randomJoke } from './exports/fun/jokes.js'
import { fetchChatGPTData } from './exports/ai/chatGpt4.js'
import { Bing } from './exports/search/bing.js'
import { createAudioFileFromText } from './exports/ai/Elevenlabs.js'
import { wikipedia } from './exports/search/wikipedia.js'
import { apkSearch } from './exports/search/apk.js'
import { blackbox } from './exports/ai/blackbox.js'
import { youtmp3 } from './exports/download/youtubeMp3.js'
import { fetchScreenshot } from './exports/misc/ssweb.js'
import { fetchSpotifyData } from './exports/download/spotify.js'
import { getWeatherData } from './exports/search/weather.js'
import { gitStalk } from './exports/stalker/git.js'
import { instaStalk } from './exports/stalker/insta.js'
import { ipStalk } from './exports/stalker/ip.js'
import { npmStalk } from './exports/stalker/npm.js'
import { fetchNasaNews } from './exports/search/nasa.js'
import { techNews } from './exports/search/technews.js'
import { Telesticker } from './exports/download/telegram.js'
import { glossysilver } from './exports/logo/ephoto360.js'
import { writetext } from './exports/logo/ephoto360.js'
import { blackpinklogo } from './exports/logo/ephoto360.js'
import { glitchtext } from './exports/logo/ephoto360.js'
import { advancedglow } from './exports/logo/ephoto360.js'
import { typographytext } from './exports/logo/ephoto360.js'
import { pixelglitch } from './exports/logo/ephoto360.js'
import { neonglitch } from './exports/logo/ephoto360.js'
import { nigerianflag } from './exports/logo/ephoto360.js'
import { americanflag } from './exports/logo/ephoto360.js'
import { deletingtext } from './exports/logo/ephoto360.js'
import { blackpinkstyle } from './exports/logo/ephoto360.js'
import { glowingtext } from './exports/logo/ephoto360.js'
import { underwater } from './exports/logo/ephoto360.js'
import { logomaker } from './exports/logo/ephoto360.js'
import { cartoonstyle } from './exports/logo/ephoto360.js'
import { papercut } from './exports/logo/ephoto360.js'
import { watercolor } from './exports/logo/ephoto360.js'
import { effectclouds } from './exports/logo/ephoto360.js'
import { gradienttext } from './exports/logo/ephoto360.js'
import { summerbeach } from './exports/logo/ephoto360.js'
import { luxurygold } from './exports/logo/ephoto360.js'
import { multicolored } from './exports/logo/ephoto360.js'
import { sandsummer } from './exports/logo/ephoto360.js'
import { galaxy } from './exports/logo/ephoto360.js'
import { nineteenseventeen } from './exports/logo/ephoto360.js'
import { makingneon } from './exports/logo/ephoto360.js'
import { texteffect } from './exports/logo/ephoto360.js'
import { galaxystyle } from './exports/logo/ephoto360.js'
import { lighteffect } from './exports/logo/ephoto360.js'
const app = express()
const port = process.env.PORT
const startTime = new Date()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

app.enable('trust proxy')
app.set('json spaces', 2)

app.get('/status', (req, res) => {
  res.status(200).sendFile(__dirname + '/public/html/200.html')
})

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/public/html/api.html')
})

app.get('/docs', (req, res) => {
  res.sendFile(__dirname + '/public/html/docs.html')
})

app.get('/newsletter', (req, res) => {
  res.sendFile(__dirname + '/public/html/sub.html')
})

app.get('/runtime', (req, res) => {
  const uptime = Date.now() - startTime
  const runtime = new Date(uptime).toISOString().substr(11, 8)
  res.send(runtime)
})
app.get('/api/ephoto360/glossysilver', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await glossysilver(text)
    res.json({
      creator: 'Astro',
      status: 200,
      success: true,
      result,
    })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/writetext', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await writetext(text)
    res.json({
      creator: 'Astro',
      status: 200,
      success: true,
      result,
    })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})
app.get('/api/ephoto360/blackpinklogo', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await blackpinklogo(text)
    res.json({
      creator: 'Astro',
      status: 200,
      success: true,
      result,
    })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/glitchtext', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await glitchtext(text)
    res.json({
      creator: 'Astro',
      status: 200,
      success: true,
      result,
    })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/advancedglow', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await advancedglow(text)
    res.json({
      creator: 'Astro',
      status: 200,
      success: true,
      result,
    })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/typographytext', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await typographytext(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/pixelglitch', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await pixelglitch(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/neonglitch', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await neonglitch(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/nigerianflag', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await nigerianflag(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/americanflag', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await americanflag(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/deletingtext', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await deletingtext(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/blackpinkstyle', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await blackpinkstyle(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/glowingtext', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await glowingtext(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/underwater', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await underwater(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/logomaker', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await logomaker(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/cartoonstyle', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await cartoonstyle(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/papercut', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await papercut(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/watercolor', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await watercolor(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/effectclouds', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await effectclouds(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/gradienttext', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await gradienttext(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/summerbeach', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await summerbeach(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/luxurygold', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await luxurygold(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/multicolored', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await multicolored(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/sandsummer', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await sandsummer(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/galaxy', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await galaxy(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/nineteenseventeen', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await nineteenseventeen(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/makingneon', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await makingneon(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/texteffect', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await texteffect(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/galaxystyle', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await galaxystyle(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
})

app.get('/api/ephoto360/lighteffect', async (req, res) => {
  const text = req.query.text
  if (!text) {
    return res.status(400).json({ creator: 'Astro', status: 400, success: false, error: 'Missing query parameter' })
  }

  try {
    const result = await lighteffect(text)
    res.json({ creator: 'Astro', status: 200, success: true, result })
  } catch (error) {
    console.error('Error fetching ephoto360 data:', error)
    res.status(500).json({ creator: 'Astro', status: 500, success: false, error: 'Internal Server Error' })
  }
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

app.get('/download/ytmp3', async (req, res) => {
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
    const result = await youtmp3(url)
    res.status(result.status).json({
      creator: 'Astro',
      status: result.status,
      success: result.status === 200,
      audio: result.url,
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

app.get('/download/spotify', async (req, res) => {
  const { url } = req.query

  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required.' })
  }

  try {
    const data = await fetchSpotifyData(url)
    return res.status(200).json({ creator: 'Astro', status: 200, success: true, data })
  } catch (error) {
    console.error('Error fetching data:', error)
    return res.status(500).json({ error: 'An error occurred while fetching data.' })
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

app.get('/download/telesticker', async (req, res) => {
  const { url } = req.query

  if (!url) {
    return res.status(400).json({ error: 'URL query parameter is required' })
  }

  try {
    const stickers = await Telesticker(url)
    res.json(stickers)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/search/weather', async (req, res) => {
  const { location } = req.query

  if (!location) {
    return res.status(400).json({ error: 'Location query parameter is required.' })
  }

  try {
    const weatherResult = await getWeatherData(location)
    return res.status(200).json({
      creator: 'Astro',
      data: weatherResult,
    })
  } catch (error) {
    console.error('Error fetching weather data:', error)
    return res.status(500).json({ error: 'Failed to fetch weather data.' })
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

app.get('/search/wikipedia', async (req, res) => {
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
    const results = await wikipedia(title)
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

app.get('/search/apk', async (req, res) => {
  const { appName } = req.query

  if (!appName) {
    return res.status(400).json({
      creator: 'Astro',
      status: 400,
      success: false,
      message: 'App name parameter is missing',
    })
  }

  try {
    const results = await apkSearch(appName)
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
      message: 'An error occurred while searching for the APK',
      error: error.message,
    })
  }
})

app.get('/search/nasa-news', async (req, res) => {
  const { date } = req.query

  try {
    const news = await fetchNasaNews(date)
    res.json(news)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.get('/search/tech-news', async (req, res) => {
  try {
    const news = await techNews()
    res.json(news)
  } catch (error) {
    res.status(500).json({ error: error.message })
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

app.get('/ai/chatgpt', async (req, res) => {
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
app.get('/ai/blackbox', async (req, res) => {
  const query = req.query.q
  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter' })
  }

  try {
    const result = await blackbox(query)
    res.json({
      creator: 'Astro',
      status: 200,
      success: true,
      result: result,
    })
  } catch (error) {
    console.log('Error Fetching BlackBox data:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
app.use(express.static(path.join(process.cwd(), 'public')))

app.get('/ai/generate-audio', async (req, res) => {
  try {
    const { text } = req.query
    if (!text) {
      return res.status(400).json({ error: 'Text query parameter is required' })
    }

    const audioPath = await createAudioFileFromText(text)
    const fullPath = path.join(process.cwd(), 'public', audioPath)

    // Set the appropriate headers
    res.setHeader('Content-Type', 'audio/mpeg')
    res.setHeader('Content-Disposition', `attachment; filename="${path.basename(audioPath)}"`)

    // Create a read stream and pipe it to the response
    const fileStream = createReadStream(fullPath)
    fileStream.pipe(res)

    // Delete the file after sending
    fileStream.on('end', () => {
      fsPromises.unlink(fullPath).catch((err) => {
        console.error('Error deleting file:', err)
      })
    })
  } catch (error) {
    console.error('Error generating audio:', error)
    res.status(500).json({ error: 'Failed to generate audio' })
  }
})

app.use(express.static(path.join(process.cwd(), 'public')))

app.get('/misc/screenshot', async (req, res) => {
  const url = req.query.url
  if (!url) {
    return res.status(400).json({ error: 'URL is required' })
  }

  try {
    const imagePath = await fetchScreenshot(url)

    // Set the appropriate headers
    res.setHeader('Content-Type', 'image/jpeg')

    // Create a read stream and pipe it to the response
    const fileStream = fs.createReadStream(imagePath)
    fileStream.pipe(res)

    // Delete the file after sending
    fileStream.on('end', () => {
      fs.unlink(imagePath, (err) => {
        if (err) console.error('Error deleting file:', err)
      })
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to generate screenshot' })
  }
})

app.get('/stalker/gituser', async (req, res) => {
  const username = req.query.username // Get username from query parameter

  if (!username) {
    return res.status(400).json({ status: 'error', message: 'Username query parameter is required.' })
  }

  try {
    const userDetails = await gitStalk(username)
    res.status(220).json({ status: 'success', data: userDetails })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ status: 'error', message: error.message })
  }
})

app.get('/stalker/instauser', async (req, res) => {
  const username = req.query.username // Get username from query parameter

  if (!username) {
    return res.status(400).json({ status: 'error', message: 'Username query parameter is required.' })
  }

  try {
    const userDetails = await instaStalk(username)

    if (userDetails) {
      res.status(220).json({ Creator: 'Astro', status: '200', data: userDetails })
    } else {
      res.status(500).json({ status: 'error', message: 'Failed to fetch user data from Instagram.' })
    }
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ status: 'error', message: error.message })
  }
})

app.get('/stalker/ip', async (req, res) => {
  const ipAddress = req.query.ip // Get IP address from query parameter

  if (!ipAddress) {
    return res.status(400).json({ status: 'error', message: 'IP address query parameter is required.' })
  }

  try {
    const ipDetails = await ipStalk(ipAddress)
    res.status(220).json({ status: 'success', data: ipDetails })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ status: 'error', message: error.message })
  }
})

app.get('/stalker/npm-package', async (req, res) => {
  const packageName = req.query.package // Get package name from query parameter

  if (!packageName) {
    return res.status(400).json({ status: 'error', message: 'Package name query parameter is required.' })
  }

  try {
    const packageDetails = await npmStalk(packageName)
    res.status(220).json({ status: 'success', data: packageDetails })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ status: 'error', message: error.message })
  }
})

app.get('/misc/base64/encode', (req, res) => {
  const { text } = req.query

  if (!text) {
    return res.status(400).json({ error: 'Text query parameter is required' })
  }

  try {
    const base64Encoded = Buffer.from(text).toString('base64')
    res.json({ result: base64Encoded })
  } catch (error) {
    console.error('Error encoding to base64:', error)
    res.status(500).json({ error: 'Failed to encode text to base64' })
  }
})

// Base64 decoding route
app.get('/misc/base64/decode', (req, res) => {
  const { text } = req.query

  if (!text) {
    return res.status(400).json({ error: 'Text query parameter is required' })
  }

  try {
    const decodedText = Buffer.from(text, 'base64').toString('utf-8')
    res.json({ result: decodedText })
  } catch (error) {
    console.error('Error decoding from base64:', error)
    res.status(500).json({ error: 'Failed to decode base64 to text' })
  }
})

app.get('/misc/qrcode', async (req, res) => {
  const { url } = req.query

  if (!url) {
    return res.status(400).json({ error: 'URL query parameter is required' })
  }

  try {
    const qrCodeDataURL = await QRCode.toDataURL(url)
    res.type('png')
    res.send(Buffer.from(qrCodeDataURL.split(',')[1], 'base64'))
  } catch (error) {
    console.error('Error generating QR code:', error)
    res.status(500).json({ error: 'Failed to generate QR code' })
  }
})

const animeDir = join(process.cwd(), 'exports', 'anime') 

const getRandomImage = (folder) => {
  const folderPath = join(animeDir, folder)
  const files = readdirSync(folderPath).filter((file) => statSync(join(folderPath, file)).isFile() && /\.(jpg|jpeg|png|gif)$/i.test(file))

  if (files.length === 0) {
    return null
  }

  const randomIndex = Math.floor(Math.random() * files.length)
  return join(folderPath, files[randomIndex])
}

app.get('/anime/:folder', (req, res) => {
  const folder = req.params.folder

  const validFolders = ['angry', 'calm-down', 'confused', 'dance', 'embarrassed-nervous', 'happy', 'lunch-break-time', 'misc', 'no', 'pre-exercise', 'sad', 'smug', 'surprised', 'thinking', 'yes']

  if (!validFolders.includes(folder)) {
    return res.status(404).send('Folder not found')
  }

  const imagePath = getRandomImage(folder)

  if (imagePath) {
    res.sendFile(imagePath)
  } else {
    res.status(404).send('No images found in the folder')
  }
})

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public/404/index.html'))
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
