import fs from 'fs'
import path from 'path'
import { Chunk, EmbeddedChunk, RetrievalResult, Retriever } from './types'
import { getEmbeddingService } from './embeddingService'

function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0
  let dot = 0
  let normA = 0
  let normB = 0
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }
  if (normA === 0 || normB === 0) return 0
  return dot / (Math.sqrt(normA) * Math.sqrt(normB))
}

export class TFIDFRetriever implements Retriever {
  private embeddedChunks: EmbeddedChunk[] = []
  private loaded = false

  async load(): Promise<void> {
    const embeddingsPath = path.join(process.cwd(), 'data', 'embeddings.json')
    if (!fs.existsSync(embeddingsPath)) {
      console.warn('embeddings.json not found. Run: npm run update-ai-context')
      return
    }
    const raw = JSON.parse(fs.readFileSync(embeddingsPath, 'utf-8'))
    this.embeddedChunks = raw.chunks as EmbeddedChunk[]

    // Re-fit embedding service from stored vocabulary
    const svc = getEmbeddingService()
    const texts = this.embeddedChunks.map(ec => ec.chunk.content)
    svc.fit(texts)
    this.loaded = true
  }

  async retrieve(query: string, k = 5, minScore = 0.05): Promise<RetrievalResult[]> {
    if (!this.loaded || this.embeddedChunks.length === 0) return []

    const svc = getEmbeddingService()
    const queryVec = svc.embed(query)

    const scored = this.embeddedChunks.map(ec => ({
      chunk: ec.chunk,
      score: cosineSimilarity(queryVec, ec.embedding),
    }))

    return scored
      .filter(r => r.score >= minScore)
      .sort((a, b) => b.score - a.score)
      .slice(0, k)
  }
}

let retrieverInstance: TFIDFRetriever | null = null

export async function getRetriever(): Promise<TFIDFRetriever> {
  if (!retrieverInstance) {
    retrieverInstance = new TFIDFRetriever()
    await retrieverInstance.load()
  }
  return retrieverInstance
}
