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
        {message.content || (
          <span className="text-slate-400 italic">
            {message.role === 'assistant' ? '' : message.content}
          </span>
        )}
      </div>
    </div>
  )
}
