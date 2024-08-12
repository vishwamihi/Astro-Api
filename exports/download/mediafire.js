import axios from 'axios'
import { Readable } from 'stream'

/**
 * Creates a readable stream from a MediaFire file URL.
 * @param {string} url - The URL of the MediaFire file.
 * @returns {Promise<Readable>} - A promise that resolves with a readable stream.
 */
export async function mediafireDl(url) {
  try {
    // Fetch the file from MediaFire
    const response = await axios.get(url, {
      responseType: 'stream', // Get the response as a stream
    })

    // Create a readable stream from the response data
    const fileStream = response.data

    // Create a readable stream that combines the file stream with metadata
    const combinedStream = new Readable({
      read() {
        this.push(`Creator: Astro\n`)
        this.push(`Status: 200\n`)
        this.push(`Download Link: ${url}\n\n`)
        fileStream.pipe(this) // Pipe the file stream to the combined stream
      },
    })

    return combinedStream
  } catch (error) {
    // Handle errors
    console.error('Error downloading file:', error)
    throw new Error('Failed to download file from MediaFire')
  }
}
