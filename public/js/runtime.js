function updateRuntime() {
  fetch('/runtime')
    .then((response) => response.text())
    .then((runtime) => {
      const runtimeDisplay = document.getElementById('runtime')
      runtimeDisplay.textContent = `Server Runtime: ${runtime}`
    })
    .catch((error) => console.error('Error fetching runtime:', error))
}
updateRuntime()
setInterval(updateRuntime, 1000)
