import axios from 'axios';

/**
 * Processes a request with the Cobalt API.
 *
 * @param {string} requestUrl - The URL to process with the Cobalt API.
 * @param {object} [options] - Optional parameters for the request.
 * @param {string} [options.vCodec='h264'] - Video codec.
 * @param {string} [options.vQuality='720'] - Video quality.
 * @param {string} [options.aFormat='mp3'] - Audio format.
 * @param {string} [options.filenamePattern='classic'] - Filename pattern.
 * @param {boolean} [options.isAudioOnly=false] - Whether to download audio only.
 * @param {boolean} [options.isTTFullAudio=false] - Whether to download full audio for TikTok.
 * @param {boolean} [options.isAudioMuted=false] - Whether to mute audio in video downloads.
 * @param {boolean} [options.dubLang=false] - Whether to use Accept-Language header for YouTube audio.
 * @param {boolean} [options.disableMetadata=false] - Whether to disable file metadata.
 * @param {boolean} [options.twitterGif=false] - Whether to convert Twitter GIFs.
 * @param {boolean} [options.tiktokH265=false] - Whether to prefer H265 format for TikTok videos.
 * @returns {Promise<void>} - A promise that resolves when the request is complete.
 */
async function processCobaltRequest(requestUrl, options = {}) {
  try {
    const apiUrl = 'https://api.cobalt.tools/api/json';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const requestBody = {
      url: requestUrl,
      vCodec: options.vCodec || 'h264',
      vQuality: options.vQuality || '720',
      aFormat: options.aFormat || 'mp3',
      filenamePattern: options.filenamePattern || 'classic',
      isAudioOnly: options.isAudioOnly || false,
      isTTFullAudio: options.isTTFullAudio || false,
      isAudioMuted: options.isAudioMuted || false,
      dubLang: options.dubLang || false,
      disableMetadata: options.disableMetadata || false,
      twitterGif: options.twitterGif || false,
      tiktokH265: options.tiktokH265 || false,
    };

    // Log the request details for debugging
    console.log('Sending request to Cobalt API:');
    console.log('URL:', apiUrl);
    console.log('Headers:', headers);
    console.log('Request Body:', requestBody);

    const response = await axios.post(apiUrl, requestBody, { headers });

    // Log the response details
    console.log('Response:', response.data);

    if (response.data) {
      if (response.data.status === 'success') {
        console.log('Download URL:', response.data.url);
      } else {
        console.log('Error:', response.data.text);
      }
    }
  } catch (error) {
    console.error('Error making request:', error.message);
  }
}

// Example usage
const url = 'https://youtu.be/aAZaY19tO80?si=PWqAgX7cVRUwdExi';
const options = {
  vCodec: 'vp9',
  vQuality: '1080',
  aFormat: 'wav',
  isAudioOnly: false,
};

processCobaltRequest(url, options);
