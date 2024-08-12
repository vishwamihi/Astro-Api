window.addEventListener('load', () => {
 setTimeout(() => {
  document.querySelector('.loader').style.display = 'none'
  document.querySelector('.content').style.display = 'block'

  // Update runtime every second
  const updateRuntime = () => {
   fetch('/runtime')
    .then(response => response.text())
    .then(data => {
     document.getElementById('runtime').textContent = data
    })
  }

  updateRuntime()
  setInterval(updateRuntime, 1000) // Update every second
 }, 5000) // 5 seconds loader
})
