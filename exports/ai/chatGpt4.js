import fetch from 'node-fetch'

function numGen(length = 13) {
  const min = Math.pow(10, length - 1)
  const max = Math.pow(10, length) - 1
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const number = numGen
const API_URL = 'https://gpt4.guruapi.tech/user?username=GURU_BOT_' + number + '&query='

export async function fetchChatGPTData(query) {
  return fetch(`${API_URL}${encodeURIComponent(query)}`)
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => {
      console.error('Error fetching ChatGPT data:', error)
      return null
    })
}

// const query = 'What is the meaning of life?'

// fetchChatGPTData(query)
//   .then((data) => {
//     console.log('Received data:', data)
//   })
//   .catch((error) => {
//     console.error('Error:', error)
//   })
