interface Props {
  onSelect: (prompt: string) => void
}

const prompts = [
  'How did Sunil improve retention?',
  'What products has Sunil built?',
  'What experiments has Sunil run?',
  "What is Sunil's product philosophy?",
]

export default function SuggestedPrompts({ onSelect }: Props) {
  return (
    <div className="space-y-2">
      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider px-1">Suggested</p>
      {prompts.map(prompt => (
        <button
          key={prompt}
          onClick={() => onSelect(prompt)}
          className="w-full text-left text-sm text-slate-600 bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 rounded-xl px-4 py-2.5 transition-all"
        >
          {prompt}
        </button>
      ))}
    </div>
  )
}
