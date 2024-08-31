document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle')

  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode', themeToggle.checked)
  })
})
