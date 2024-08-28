document.getElementById('toggle-mode').addEventListener('click', function () {
  const body = document.body
  body.dataset.theme = body.dataset.theme === 'dark' ? '' : 'dark'
})
