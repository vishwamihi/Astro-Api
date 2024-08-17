import { search } from 'aptoide-scraper'

export async function apkSearch(appName) {
  let results = await search(appName)
  return results
}
