import fetch from 'node-fetch'
const BASE_API = `https://www.guruapi.tech/api/igstalk?username=`

export async function insta(query) {
  return fetch(`${BASE_API}${encodeURIComponent(query)}`)
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => {
      console.error('Error fetching Insta Stalk:', error)
      return null
    })
}
