import puppeteer from 'puppeteer'

export async function Bing(query) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Construct the Bing search URL
  const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`

  // Go to the search URL
  await page.goto(searchUrl, { waitUntil: 'networkidle2' })

  // Extract and filter search results
  const results = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('li.b_algo'))
    return items
      .map((item) => {
        const title = item.querySelector('h2')?.innerText?.trim()
        const link = item.querySelector('a')?.href?.trim()
        const description = item.querySelector('p')?.innerText?.trim()
        return { title, link, description }
      })
      .filter((result) => result.title && result.link && result.description)
  })

  await browser.close()
  return results
}
