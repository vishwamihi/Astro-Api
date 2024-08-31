import axios from 'axios'

export async function blackbox(message) {
  try {
    const response = await axios.post('https://www.blackbox.ai/api/chat', {
      messages: [{ id: null, content: message, role: 'user' }],
      id: null,
      previewToken: null,
      userId: null,
      codeModelMode: true,
      agentMode: {},
      trendingAgentMode: {},
      isMicMode: false,
      isChromeExt: false,
      githubToken: null,
    })
    let filteredResponse = response.data.replace(/\$@\$v=(v1\.21|v1\.22|undefined)-rv1\$@\$/g, '')

    filteredResponse = filteredResponse.trim()

    return filteredResponse
  } catch (error) {
    console.error('Error in blackbox function:', error)
    throw error
  }
}
