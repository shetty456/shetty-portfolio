import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Document {
  id: string
  source: string
  metadata: Record<string, string | undefined>
  content: string
}

function scanDir(dir: string, extensions: string[]): string[] {
  const results: string[] = []
  if (!fs.existsSync(dir)) return results
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...scanDir(fullPath, extensions))
    } else if (extensions.some(ext => entry.name.endsWith(ext))) {
      results.push(fullPath)
    }
  }
  return results
}

export async function loadDocuments(contentDir: string): Promise<Document[]> {
  const docs: Document[] = []
  const files = scanDir(contentDir, ['.md', '.pdf'])

  for (const filePath of files) {
    const ext = path.extname(filePath)
    const relPath = path.relative(contentDir, filePath)
    const id = relPath.replace(/[/\\]/g, '-').replace(/\.[^.]+$/, '')

    if (ext === '.md') {
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      const meta: Record<string, string | undefined> = {}
      for (const [k, v] of Object.entries(data)) {
        meta[k] = typeof v === 'string' ? v : String(v)
      }
      docs.push({ id, source: relPath, metadata: meta, content })
    } else if (ext === '.pdf') {
      try {
        // pdf-parse v2 uses class-based API: { PDFParse }
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const { PDFParse } = require('pdf-parse')
        const buffer = fs.readFileSync(filePath)
        const parser = new PDFParse()
        const parsed = await parser.parse(buffer)
        docs.push({ id, source: relPath, metadata: {}, content: parsed.text })
      } catch {
        console.warn(`Skipping PDF ${filePath}: pdf-parse error`)
      }
    }
  }

  return docs
}
