import OpenAI from 'openai'

const aiClient = new OpenAI({
  apiKey: process.env.GROQ_API_KEY ?? 'dummy-key',
  baseURL: process.env.GROQ_BASE_URL ?? 'https://api.groq.com/openai/v1',
})

export { aiClient }
