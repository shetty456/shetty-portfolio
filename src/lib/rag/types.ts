export interface Chunk {
  id: string
  content: string
  source: string
  metadata: Record<string, string | undefined>
}

export interface RetrievalResult {
  chunk: Chunk
  score: number
}

export interface Retriever {
  retrieve(query: string, k: number): Promise<RetrievalResult[]>
}

export interface EmbeddedChunk {
  chunk: Chunk
  embedding: number[]
}
