'use client'

import ReactMarkdown from 'react-markdown'
import { Message } from '@/types/chat'

interface Props {
  message: Message
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-md'
            : 'bg-slate-50 text-slate-700 border border-slate-100 rounded-bl-md'
        }`}
      >
        {isUser ? (
          message.content
        ) : (
          <div className="chat-markdown">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="my-1">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-5 my-1 space-y-0.5">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-5 my-1 space-y-0.5">{children}</ol>,
                li: ({ children }) => <li className="my-0">{children}</li>,
                strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
                h3: ({ children }) => <h3 className="text-sm font-bold mt-2 mb-1">{children}</h3>,
              }}
            >
              {message.content || ''}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}
