// TF-IDF based embedding (no API key needed, works offline)
// Interface matches real embedding APIs — swap implementation without changing callers

export class EmbeddingService {
  private vocabulary: Map<string, number> = new Map()
  private idfWeights: Map<string, number> = new Map()
  private fitted = false

  tokenize(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length > 2)
  }

  fit(documents: string[]): void {
    // Build DF map in one pass — avoids O(vocab * docs) nested loop
    const dfMap = new Map<string, number>()
    for (const doc of documents) {
      const tokenSet = new Set(this.tokenize(doc))
      for (const token of tokenSet) {
        dfMap.set(token, (dfMap.get(token) ?? 0) + 1)
      }
    }

    let vocabIdx = 0
    const N = documents.length
    for (const [token, df] of dfMap) {
      this.vocabulary.set(token, vocabIdx++)
      this.idfWeights.set(token, Math.log((N + 1) / (df + 1)) + 1)
    }

    this.fitted = true
  }

  embed(text: string): number[] {
    if (!this.fitted) throw new Error('EmbeddingService not fitted. Call fit() first.')

    const tokens = this.tokenize(text)
    const tf = new Map<string, number>()
    for (const t of tokens) tf.set(t, (tf.get(t) ?? 0) + 1)

    const vec = new Array(this.vocabulary.size).fill(0)
    for (const [token, count] of tf) {
      const idx = this.vocabulary.get(token)
      if (idx !== undefined) {
        vec[idx] = (count / tokens.length) * (this.idfWeights.get(token) ?? 1)
      }
    }

    // L2 normalize
    const norm = Math.sqrt(vec.reduce((s, v) => s + v * v, 0))
    return norm > 0 ? vec.map(v => v / norm) : vec
  }
}

let instance: EmbeddingService | null = null
export function getEmbeddingService(): EmbeddingService {
  if (!instance) instance = new EmbeddingService()
  return instance
}
