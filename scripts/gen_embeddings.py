import os, json, math, re, sys, datetime
from pathlib import Path

CHUNK_SIZE = 500
OVERLAP = 50
content_dir = Path('/Users/sunilhanamshetty/Desktop/shetty-portfolio/content')

def strip_frontmatter(raw):
    if not raw.startswith('---'):
        return raw
    end = raw.find('\n---', 3)
    if end == -1:
        return raw
    return raw[end + 4:].strip()

def scan_dir(d, exts):
    results = []
    for entry in sorted(d.iterdir()):
        if entry.is_dir():
            results.extend(scan_dir(entry, exts))
        elif entry.suffix in exts:
            results.append(entry)
    return results

docs = []
for fp in scan_dir(content_dir, {'.md'}):
    rel = str(fp.relative_to(content_dir))
    doc_id = rel.replace('/', '-').replace('\\', '-')
    if doc_id.endswith('.md'):
        doc_id = doc_id[:-3]
    raw = fp.read_text(encoding='utf-8')
    content = strip_frontmatter(raw)
    docs.append({'id': doc_id, 'source': rel, 'content': content})

print(f'Loaded {len(docs)} documents', flush=True)

chunks = []
for doc in docs:
    text = doc['content'].strip()
    start = 0
    idx = 0
    while start < len(text):
        end = min(start + CHUNK_SIZE, len(text))
        content = text[start:end].strip()
        if len(content) > 20:
            chunks.append({
                'id': f"{doc['id']}-chunk-{idx}",
                'content': content,
                'source': doc['source'],
                'metadata': {}
            })
            idx += 1
        next_start = end - OVERLAP
        if next_start <= start:  # ensure forward progress
            next_start = end
        start = next_start
        if start >= len(text):
            break

print(f'Created {len(chunks)} chunks', flush=True)

def tokenize(text):
    return [t for t in re.sub(r'[^a-z0-9\s]', ' ', text.lower()).split() if len(t) > 2]

df_map = {}
N = len(chunks)
for chunk in chunks:
    for token in set(tokenize(chunk['content'])):
        df_map[token] = df_map.get(token, 0) + 1

vocab = {t: i for i, t in enumerate(df_map)}
idf_vals = {t: math.log((N + 1) / (df + 1)) + 1 for t, df in df_map.items()}
vocab_size = len(vocab)
print(f'Vocab size: {vocab_size}', flush=True)

def embed(text):
    tokens = tokenize(text)
    if not tokens:
        return [0.0] * vocab_size
    tf = {}
    for t in tokens:
        tf[t] = tf.get(t, 0) + 1
    vec = [0.0] * vocab_size
    for token, count in tf.items():
        if token in vocab:
            vec[vocab[token]] = (count / len(tokens)) * idf_vals.get(token, 1)
    norm = math.sqrt(sum(v*v for v in vec))
    return [v/norm for v in vec] if norm > 0 else vec

print('Building embeddings...', flush=True)
embedded = []
for c in chunks:
    embedded.append({'chunk': c, 'embedding': embed(c['content'])})

data_dir = Path('/Users/sunilhanamshetty/Desktop/shetty-portfolio/data')
data_dir.mkdir(exist_ok=True)
out = data_dir / 'embeddings.json'

out.write_text(json.dumps({'chunks': embedded, 'generatedAt': datetime.datetime.utcnow().isoformat()}, indent=2))
print(f'Saved to {out}', flush=True)
print(f'Documents: {len(docs)}, Chunks: {len(chunks)}', flush=True)
