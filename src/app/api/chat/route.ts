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
- If info is missing, say so and suggest contacting Sunil directly
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
      model: process.env.SARVAM_MODEL ?? 'sarvam-m',
      messages,
      stream: true,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        // sarvam-m puts its answer inside <think>…</think>.
        // State machine: strip the <think> opening tag, stream content, stop at </think>.
        let buf = ''
        let openConsumed = false  // have we removed the leading <think>?
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? ''
            if (!text) continue
            buf += text

            // Step 1: consume the opening <think> tag
            if (!openConsumed) {
              const openIdx = buf.indexOf('<think>')
              if (openIdx !== -1) {
                buf = buf.slice(openIdx + 7)
                openConsumed = true
              } else if (buf.length > 7) {
                // No <think> tag — output as-is
                openConsumed = true
              } else {
                continue  // still buffering
              }
            }

            // Step 2: stream content, stopping before </think>
            const closeIdx = buf.indexOf('</think>')
            if (closeIdx !== -1) {
              const out = buf.slice(0, closeIdx)
              buf = buf.slice(closeIdx + 8)
              if (out) controller.enqueue(encoder.encode(out))
              // Output anything that follows </think> (subsequent answer)
              if (buf) controller.enqueue(encoder.encode(buf))
              buf = ''
            } else {
              // Hold back 7 chars so </think> spanning chunks is caught
              const safeLen = buf.length - 7
              if (safeLen > 0) {
                controller.enqueue(encoder.encode(buf.slice(0, safeLen)))
                buf = buf.slice(safeLen)
              }
            }
          }
          // Flush remainder (strip any trailing </think>)
          if (buf) {
            const out = buf.replace(/<\/think>/g, '')
            if (out) controller.enqueue(encoder.encode(out))
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
