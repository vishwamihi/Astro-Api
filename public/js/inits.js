// Add this script to your runtime.js file
const loaderText = document.querySelector('.loader-text')
const words = ['Fetching data...', 'Connecting to API...', 'Authenticating...', 'Loading...', 'Processing request...', 'Retrieving data...', 'Parsing response...', 'Generating output...', 'Finalizing...', 'Complete!']

let wordIndex = 0

function updateLoaderText() {
  loaderText.textContent = words[wordIndex]
  wordIndex = (wordIndex + 1) % words.length
  setTimeout(updateLoaderText, 800) // Update every 500ms
}

updateLoaderText()

setTimeout(() => {
  window.location.href = '/home'
}, 8000)
