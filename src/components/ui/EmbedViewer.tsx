'use client'

import { useState } from 'react'
import { Maximize2, X } from 'lucide-react'

interface EmbedViewerProps {
  url: string
  height?: number
}

export default function EmbedViewer({ url, height = 520 }: EmbedViewerProps) {
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <div
      className={
        fullscreen
          ? 'fixed inset-0 z-50 bg-black'
          : 'relative rounded-xl overflow-hidden bg-slate-50 shadow-[0_0_0_1px_#e2e8f0]'
      }
    >
      <iframe
        src={url}
        className={fullscreen ? 'w-full h-full' : 'w-full'}
        style={fullscreen ? undefined : { height }}
        allowFullScreen
      />
      <button
        onClick={() => setFullscreen(f => !f)}
        className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 rounded-lg p-2 text-white transition-all shadow-md"
        title={fullscreen ? 'Exit fullscreen' : 'Expand'}
      >
        {fullscreen ? <X className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
      </button>
    </div>
  )
}
