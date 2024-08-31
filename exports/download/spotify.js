import fetch from 'node-fetch'

const API_BASE_URL = 'https://api.guruapi.tech/spotifydl?url='

export async function fetchSpotifyData(urlQuery) {
  try {
    const response = await fetch(API_BASE_URL + urlQuery)
    const responseData = await response.json()
    return responseData.data
  } catch (error) {
    console.error('Error fetching Spotify data:', error)
    throw error
  }
}
