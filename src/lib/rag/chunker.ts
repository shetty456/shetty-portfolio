import { Chunk } from './types'
import { Document } from './documentLoader'

const CHUNK_SIZE = 500
const OVERLAP = 50

export function chunkDocument(doc: Document): Chunk[] {
  const text = doc.content.trim()
  if (!text) return []

  const chunks: Chunk[] = []
  let start = 0
  let index = 0

  while (start < text.length) {
    const end = Math.min(start + CHUNK_SIZE, text.length)
    const content = text.slice(start, end).trim()
    if (content.length > 20) {
      chunks.push({
        id: `${doc.id}-chunk-${index}`,
        content,
        source: doc.source,
        metadata: doc.metadata,
      })
      index++
    }
    const nextStart = end - OVERLAP
    start = nextStart > start ? nextStart : end
    if (start >= text.length) break
  }

  return chunks
}

export function chunkDocuments(docs: Document[]): Chunk[] {
  return docs.flatMap(chunkDocument)
}
