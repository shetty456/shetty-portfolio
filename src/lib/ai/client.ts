import OpenAI from 'openai'

const aiClient = new OpenAI({
  apiKey: process.env.SARVAM_API_KEY ?? 'dummy-key',
  baseURL: process.env.SARVAM_BASE_URL ?? 'https://api.sarvam.ai/v1',
})

export { aiClient }
