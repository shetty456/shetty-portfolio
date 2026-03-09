// Plain JS embeddings script — minimal dependencies, no gray-matter
'use strict';
const path = require('path');
const fs = require('fs');

const CHUNK_SIZE = 500;
const OVERLAP = 50;

// Simple frontmatter stripper — no js-yaml/gray-matter needed
function stripFrontmatter(raw) {
  if (!raw.startsWith('---')) return raw;
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return raw;
  return raw.slice(end + 4).trim();
}

function scanDir(dir, extensions) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const sub = scanDir(fullPath, extensions);
      for (const s of sub) results.push(s);
    } else if (extensions.some(ext => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

function loadDocuments(contentDir) {
  const docs = [];
  const files = scanDir(contentDir, ['.md']);
  for (const filePath of files) {
    const relPath = path.relative(contentDir, filePath);
    const id = relPath.replace(/[/\\]/g, '-').replace(/\.[^.]+$/, '');
    const raw = fs.readFileSync(filePath, 'utf-8');
    const content = stripFrontmatter(raw);
    docs.push({ id, source: relPath, metadata: {}, content });
  }
  return docs;
}

function chunkDocument(doc) {
  const text = doc.content.trim();
  if (!text) return [];
  const chunks = [];
  let start = 0;
  let index = 0;
  while (start < text.length) {
    const end = Math.min(start + CHUNK_SIZE, text.length);
    const content = text.slice(start, end).trim();
    if (content.length > 20) {
      chunks.push({ id: doc.id + '-chunk-' + index, content, source: doc.source, metadata: doc.metadata });
      index++;
    }
    const nextStart = end - OVERLAP;
    start = nextStart > start ? nextStart : end;
    if (start >= text.length) break;
  }
  return chunks;
}

function tokenize(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(t => t.length > 2);
}

function buildEmbeddings(chunks) {
  // Build vocab and IDF
  const dfMap = new Map();
  const N = chunks.length;
  for (const chunk of chunks) {
    const tokenSet = new Set(tokenize(chunk.content));
    for (const token of tokenSet) {
      dfMap.set(token, (dfMap.get(token) || 0) + 1);
    }
  }
  const vocab = new Map();
  const idf = new Map();
  let idx = 0;
  for (const [token, df] of dfMap) {
    vocab.set(token, idx++);
    idf.set(token, Math.log((N + 1) / (df + 1)) + 1);
  }
  const vocabSize = vocab.size;

  // Embed each chunk
  const embeddedChunks = [];
  for (const chunk of chunks) {
    const tokens = tokenize(chunk.content);
    const tf = new Map();
    for (const t of tokens) tf.set(t, (tf.get(t) || 0) + 1);
    const vec = new Array(vocabSize).fill(0);
    for (const [token, count] of tf) {
      const i = vocab.get(token);
      if (i !== undefined) {
        vec[i] = (count / tokens.length) * (idf.get(token) || 1);
      }
    }
    let norm = 0;
    for (let j = 0; j < vec.length; j++) norm += vec[j] * vec[j];
    norm = Math.sqrt(norm);
    const embedding = norm > 0 ? vec.map(v => v / norm) : vec;
    embeddedChunks.push({ chunk, embedding });
  }
  return embeddedChunks;
}

function main() {
  console.log('Loading documents...');
  const contentDir = path.join(process.cwd(), 'content');
  const docs = loadDocuments(contentDir);
  console.log('Loaded ' + docs.length + ' documents');

  console.log('Chunking documents...');
  const chunks = [];
  for (const doc of docs) {
    const c = chunkDocument(doc);
    for (const ch of c) chunks.push(ch);
  }
  console.log('Created ' + chunks.length + ' chunks');

  console.log('Building embeddings...');
  const embeddedChunks = buildEmbeddings(chunks);

  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

  const outputPath = path.join(dataDir, 'embeddings.json');
  fs.writeFileSync(outputPath, JSON.stringify({ chunks: embeddedChunks, generatedAt: new Date().toISOString() }, null, 2));

  console.log('Saved embeddings to ' + outputPath);
  console.log('\nSummary:');
  console.log('   Documents: ' + docs.length);
  console.log('   Chunks: ' + chunks.length);
}

main();
