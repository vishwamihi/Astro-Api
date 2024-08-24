import axios from 'axios'

class Download {
  constructor() {
    this.apiEndpoints = {
      facebook: 'https://graph.facebook.com/v11.0/{id}/videos',
      instagram: 'https://www.instagram.com/{id}/?__a=1',
      youtube: 'https://www.googleapis.com/youtube/v3/videos',
    }
  }

  async fetchJson(url) {
    try {
      const response = await axios.get(url, { responseType: 'json' })
      return response.data
    } catch (error) {
      throw new Error(`Failed to fetch from ${url}: ${error.message}`)
    }
  }

  async postJson(url, data) {
    try {
      const response = await axios.post(url, data, { headers: { 'Content-Type': 'application/json' } })
      return response.data
    } catch (error) {
      throw new Error(`Failed to post to ${url}: ${error.message}`)
    }
  }

  formatJson(data) {
    return JSON.stringify(data, null, 2)
  }

  async downloadFacebook(videoId, accessToken) {
    const url = `${this.apiEndpoints.facebook.replace('{id}', videoId)}?access_token=${accessToken}`
    const data = await this.fetchJson(url)
    return this.formatJson(data)
  }

  async downloadInstagram(postId) {
    const url = this.apiEndpoints.instagram.replace('{id}', postId)
    const data = await this.fetchJson(url)
    return this.formatJson(data)
  }

  async downloadYouTube(videoId, apiKey) {
    const url = `${this.apiEndpoints.youtube}?id=${videoId}&key=${apiKey}&part=snippet,contentDetails`
    const data = await this.fetchJson(url)
    return this.formatJson(data)
  }
}

export default Download
