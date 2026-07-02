import { NextRequest } from 'next/server'
import { aiClient } from '@/lib/ai/client'
import { buildContext } from '@/lib/rag/contextBuilder'

const SYSTEM_PROMPT = `You are an AI assistant representing Sunil Hanamshetty, an experienced Product Manager.
Your role is to answer questions about Sunil's professional background, experience, and product thinking.

Guidelines:
- Reply in markdown: use **bold** for key terms, always use "- " bullet lists (never bare newline-separated items)
- Be brief — 3-6 bullets or 2 short paragraphs max
- Lead with the most important point first
- Only answer from the provided context about Sunil
- If info is missing, tell the user you don't have that information and ask them to reach out to Sunil directly
- Sunil's contact details (always share when asked): Email: hanamshettysunil6@gmail.com | Phone: +91 9353129101 | LinkedIn: linkedin.com/in/sunilhanamshetty
- Never fabricate metrics, companies, or experiences not in the context

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
      model: process.env.GROQ_MODEL ?? 'llama-3.3-70b-versatile',
      messages,
      stream: true,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? ''
            if (text) controller.enqueue(encoder.encode(text))
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
