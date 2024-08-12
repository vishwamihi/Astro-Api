import fetch from 'node-fetch'

const API_URL = 'https://api.maher-zubair.tech/ai/chatgpt4?q='

export async function fetchChatGPTData(query) {
  return fetch(`${API_URL}${encodeURIComponent(query)}`)
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => {
      console.error('Error fetching ChatGPT data:', error)
      return null
    })
}
