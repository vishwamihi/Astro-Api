import axios from 'axios'

export const shortenUrl = async (longUrl) => {
  const encodedUrl = encodeURIComponent(longUrl.trim())

  try {
    const response = await axios.post('https://cleanuri.com/api/v1/shorten', `url=${encodedUrl}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    if (response.data.result_url) {
      return { shortenedUrl: response.data.result_url }
    } else {
      return { error: response.data.error || 'Failed to shorten URL' }
    }
  } catch (error) {
    return { error: 'An error occurred while shortening the URL' }
  }
}
