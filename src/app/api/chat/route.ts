import { NextRequest } from 'next/server'
import { aiClient } from '@/lib/ai/client'
import { buildContext } from '@/lib/rag/contextBuilder'

const SYSTEM_PROMPT = `You are an AI assistant representing Sunil Hanamshetty, an experienced Product Manager.
Your role is to answer questions about Sunil's professional background, experience, product thinking, and case studies.

Guidelines:
- Be professional, concise, and helpful
- Only answer questions based on the provided context about Sunil
- If you don't have specific information, say so honestly and suggest connecting with Sunil directly
- Encourage visitors to connect with Sunil on LinkedIn or via email for deeper conversations
- Never fabricate specific metrics, companies, or experiences not in the context
- Keep responses conversational but substantive (2-4 paragraphs max)

Context about Sunil:
{context}`

export async function POST(req: NextRequest) {
  try {
    const { message, history = [] } = await req.json()

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid message' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const context = await buildContext(message)
    const systemPromptWithContext = SYSTEM_PROMPT.replace('{context}', context)

    const messages = [
      { role: 'system' as const, content: systemPromptWithContext },
      ...history.map((h: { role: 'user' | 'assistant'; content: string }) => ({
        role: h.role,
        content: h.content,
      })),
      { role: 'user' as const, content: message },
    ]

    const stream = await aiClient.chat.completions.create({
      model: process.env.SARVAM_MODEL ?? 'sarvam-m',
      messages,
      stream: true,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? ''
            if (text) {
              controller.enqueue(encoder.encode(text))
            }
          }
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process request. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
