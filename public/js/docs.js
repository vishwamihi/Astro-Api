document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    const code = this.nextElementSibling.textContent
    navigator.clipboard.writeText(code).then(() => {
      const originalText = this.textContent
      this.textContent = 'Copied!'
      setTimeout(() => {
        this.textContent = originalText
      }, 2000)
    })
  })
})
