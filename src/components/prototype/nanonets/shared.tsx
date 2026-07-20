import { Plus, Zap, CheckCircle2, Link2, FileText, GitBranch, BarChart2, BookOpen, Bug } from 'lucide-react'

export function BrowserBar({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-1.5 px-2.5 bg-[#ebebeb] border-b border-[#d8d8d8] h-[26px] flex-shrink-0">
      <div className="w-2 h-2 rounded-full bg-[#ff5f57] flex-shrink-0" />
      <div className="w-2 h-2 rounded-full bg-[#febc2e] flex-shrink-0" />
      <div className="w-2 h-2 rounded-full bg-[#28c840] flex-shrink-0" />
      <div className="flex-1 bg-white border border-[#d0d0d0] rounded px-2 py-px text-[9px] text-[#666] mx-2.5 text-center truncate">
        {url}
      </div>
    </div>
  )
}

const NAV_ICONS = [
  { key: 'add', Icon: Plus },
  { key: 'bolt', Icon: Zap },
  { key: 'task', Icon: CheckCircle2 },
  { key: 'hub', Icon: Link2 },
  { key: 'file', Icon: FileText },
  { key: 'tree', Icon: GitBranch },
  { key: 'chart', Icon: BarChart2 },
]

export function NanonetsSidebar({ active }: { active?: string }) {
  return (
    <div className="w-[46px] bg-white border-r border-[#e8e8e8] flex flex-col flex-shrink-0">
      <div className="flex items-center justify-center p-[10px] border-b border-[#f0f0f0]">
        <div className="w-[26px] h-[26px] rounded-[8px] bg-[#3b63f0] flex items-center justify-center text-[13px] text-white flex-shrink-0">
          ⚡
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center gap-0.5 py-1.5 px-1 overflow-hidden">
        {NAV_ICONS.map(({ key, Icon }) => (
          <div
            key={key}
            className={`w-[34px] h-[34px] rounded-[8px] flex items-center justify-center ${
              active === key ? 'bg-[#eff3ff] text-[#3b63f0]' : 'text-[#9ca3af]'
            }`}
          >
            <Icon className="w-[18px] h-[18px]" strokeWidth={1.8} />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-1 py-1.5 border-t border-[#f0f0f0]">
        <div className="flex items-center justify-center text-[#c5c5c5] w-[26px] h-[26px]">
          <BookOpen className="w-4 h-4" />
        </div>
        <div className="flex items-center justify-center text-[#c5c5c5] w-[26px] h-[26px]">
          <Bug className="w-4 h-4" />
        </div>
        <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#4f7df7] to-[#7c3aed] flex items-center justify-center text-[7.5px] font-bold text-white flex-shrink-0">
          PS
        </div>
      </div>
    </div>
  )
}

export function PrimaryBtn({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#111827] text-white border-none py-[11px] px-4 rounded-lg text-[11px] font-bold cursor-pointer text-center block hover:bg-[#1f2937] transition-colors"
    >
      {children}
    </button>
  )
}

export function FieldRow({
  label,
  value,
  confidence,
  variant,
}: {
  label: string
  value: string
  confidence?: string
  variant?: 'green' | 'blue' | 'gray' | 'default'
}) {
  const bgClass =
    variant === 'green'
      ? 'bg-[#f0fdf4] border-[#bbf7d0]'
      : variant === 'blue'
      ? 'bg-[#eff3ff] border-[#c3d7fd]'
      : variant === 'gray'
      ? 'bg-[#f9fafb]'
      : 'bg-white border-[#e5e7eb]'

  const labelClass =
    variant === 'green' ? 'text-[#059669]' : variant === 'blue' ? 'text-[#3b63f0]' : 'text-[#999]'

  const valueClass =
    variant === 'green'
      ? 'text-[#059669]'
      : variant === 'blue'
      ? 'text-[#3b63f0]'
      : 'text-[#111] font-bold'

  return (
    <div
      className={`flex items-center justify-between gap-2 border rounded-md px-2 py-1.5 ${bgClass}`}
    >
      <span className={`text-[8.5px] flex-shrink-0 whitespace-nowrap ${labelClass}`}>{label}</span>
      <span className={`text-[9.5px] flex-1 ${valueClass}`}>{value}</span>
      {confidence && (
        <span
          className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0 ${
            confidence.startsWith('9') || confidence === '100%'
              ? 'bg-[#dcfce7] text-[#15803d] border border-[#86efac]'
              : 'bg-[#fef3c7] text-[#b45309] border border-[#fcd34d]'
          }`}
        >
          {confidence}
        </span>
      )}
    </div>
  )
}

export function ConnectorPill({ name, confirmed = true }: { name: string; confirmed?: boolean }) {
  return (
    <div className="inline-flex items-center gap-1 text-[9px] font-semibold text-[#374151] bg-[#f3f4f6] border border-[#e5e7eb] px-2 py-1 rounded-full">
      <div className={`w-[5px] h-[5px] rounded-full flex-shrink-0 ${confirmed ? 'bg-[#22c55e]' : 'bg-[#9ca3af]'}`} />
      {name}
    </div>
  )
}
