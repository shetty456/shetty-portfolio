export interface ContentChunk {
  id: string
  content: string
  source: string
  metadata: DocumentMeta
}

export interface DocumentMeta {
  title?: string
  category?: string
  date?: string
  [key: string]: string | undefined
}
