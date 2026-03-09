export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface ChatRequest {
  message: string
  history: Array<{ role: 'user' | 'assistant'; content: string }>
}

export interface ChatResponse {
  content: string
  error?: string
}
