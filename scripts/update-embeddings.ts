import path from 'path'
import fs from 'fs'
import { loadDocuments } from '../src/lib/rag/documentLoader'
import { chunkDocuments } from '../src/lib/rag/chunker'
import { EmbeddingService } from '../src/lib/rag/embeddingService'
import { EmbeddedChunk } from '../src/lib/rag/types'

async function main() {
  console.log('Loading documents...')
  const contentDir = path.join(process.cwd(), 'content')
  const docs = await loadDocuments(contentDir)
  console.log(`Loaded ${docs.length} documents`)

  console.log('Chunking documents...')
  const chunks = chunkDocuments(docs)
  console.log(`Created ${chunks.length} chunks`)

  console.log('Building embeddings...')
  const svc = new EmbeddingService()
  svc.fit(chunks.map(c => c.content))

  const embeddedChunks: EmbeddedChunk[] = chunks.map(chunk => ({
    chunk,
    embedding: svc.embed(chunk.content),
  }))

  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)

  const outputPath = path.join(dataDir, 'embeddings.json')
  fs.writeFileSync(
    outputPath,
    JSON.stringify({ chunks: embeddedChunks, generatedAt: new Date().toISOString() }, null, 2)
  )

  console.log(`Saved embeddings to ${outputPath}`)
  console.log(`\nSummary:`)
  console.log(`   Documents: ${docs.length}`)
  console.log(`   Chunks: ${chunks.length}`)
}

main().catch(err => {
  console.error('Error:', err)
  process.exit(1)
})
