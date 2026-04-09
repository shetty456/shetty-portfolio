import { getRetriever } from './retriever'

export async function buildContext(query: string, k = 5): Promise<string> {
  const retriever = await getRetriever()
  const results = await retriever.retrieve(query, k)

  if (results.length === 0) {
    return "No specific information found for this query. Do NOT guess or fabricate details. Tell the user you don't have that information and suggest they contact Sunil directly at hanamshettysunil6@gmail.com"
  }

  const contextBlocks = results.map((r, i) => {
    const src = r.chunk.source
    return `[${i + 1}] Source: ${src}\n${r.chunk.content}`
  })

  return contextBlocks.join('\n\n---\n\n')
}
