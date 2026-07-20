import { BrowserBar, PrimaryBtn } from './shared'

const ROLES = [
  { emoji: '💼', title: 'Finance & Accounts', desc: 'AP/AR, invoices, reconciliation', selected: true },
  { emoji: '🏥', title: 'Healthcare & Insurance', desc: 'Claims, EOBs, patient records', selected: false },
  { emoji: '📦', title: 'Supply Chain & Ops', desc: 'POs, bills of lading, logistics', selected: false },
  { emoji: '⚙️', title: 'Developer / Other', desc: 'Custom workflows via API', selected: false },
]

export default function Screen1Role({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[10px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,.09)]">
      <BrowserBar url="agents.nanonets.com/onboarding/role" />
      <div className="bg-white flex flex-col items-center justify-center px-10 py-8" style={{ height: 460 }}>
        {/* Logo */}
        <div className="flex items-center gap-1.5 mb-7">
          <div className="w-[26px] h-[26px] rounded-[7px] bg-[#3b63f0] flex items-center justify-center text-[13px] text-white flex-shrink-0">
            ⚡
          </div>
          <span className="text-[14px] font-bold text-[#0a0f1e]">nanonets</span>
        </div>

        <div className="text-[18px] font-extrabold text-[#0a0f1e] text-center mb-2">
          What kind of documents do you work with?
        </div>
        <div className="text-[11px] text-[#9ca3af] text-center mb-6">
          We'll suggest the right workflow templates for your team.
        </div>

        {/* Role card grid */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-[480px] mb-4">
          {ROLES.map(r => (
            <div
              key={r.title}
              className={`rounded-[10px] p-3.5 cursor-pointer ${
                r.selected
                  ? 'border-2 border-[#3b63f0] shadow-[0_0_0_3px_rgba(59,99,240,.08)]'
                  : 'border border-[1.5px] border-[#e5e7eb]'
              } bg-white`}
            >
              <div className="text-[20px] mb-2">{r.emoji}</div>
              <div className="text-[11.5px] font-bold text-[#111] mb-0.5">{r.title}</div>
              <div className="text-[10px] text-[#9ca3af] leading-[1.4]">{r.desc}</div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-[480px]">
          <PrimaryBtn onClick={onNext}>Show me Finance automation →</PrimaryBtn>
          <button className="mt-2 w-full bg-transparent border-none text-[#6b7280] text-[10px] cursor-pointer underline">
            I'll explore on my own
          </button>
        </div>
      </div>
    </div>
  )
}
