'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import ChatWindow from './ChatWindow'
import { Message } from '@/types/chat'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            messages={messages}
            setMessages={setMessages}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Open AI assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  )
}
