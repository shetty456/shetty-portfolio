import { BrowserBar, NanonetsSidebar, FieldRow, PrimaryBtn } from './shared'

const FIELDS = [
  { label: 'Invoice No', value: 'INV-2024-0891', confidence: '98%' },
  { label: 'Date', value: '15 Sep 2024', confidence: '99%' },
  { label: 'Vendor', value: 'ABC Corp', confidence: '97%' },
  { label: 'Total', value: '₹4,24,800', confidence: '99%' },
  { label: 'Due Date', value: 'Oct 15, 2024', confidence: '96%' },
  { label: 'Bank', value: 'HDFC 4821', confidence: '91%' },
]

export default function Screen3Extraction({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[10px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,.09)]">
      <BrowserBar url="agents.nanonets.com/tasks/demo-01" />
      <div className="flex" style={{ height: 460 }}>
        <NanonetsSidebar active="task" />
        {/* Task split */}
        <div className="flex flex-1 min-w-0">
          {/* Left: chat */}
          <div className="w-1/2 border-r border-[#e8e8e8] flex flex-col bg-white">
            <div className="px-2.5 py-1.5 text-[8.5px] text-[#bbb] border-b border-[#f0f0f0]">
              <span className="text-[#3b63f0]">Tasks</span> › Extract AP invoice fields
            </div>
            <div className="flex-1 flex flex-col gap-1.5 p-2.5 overflow-hidden">
              <div className="bg-[#f3f4f6] rounded-md px-2 py-1.5 text-[9.5px] text-[#333] self-end max-w-[92%]">
                Extract all fields from this AP invoice →
              </div>
              <div className="text-[9.5px] text-[#444]">
                <div className="flex items-center gap-1 text-[8.5px] text-[#aaa] py-px before:content-['›']">
                  Reading invoice_sept_2024.pdf
                </div>
                <div className="flex items-center gap-1 text-[8.5px] text-[#aaa] py-px before:content-['›']">
                  Extracting key data
                </div>
              </div>
              <div className="text-[9.5px] text-[#059669] font-bold">
                ✅ Done — 6 fields extracted, 100% confidence
              </div>
              <div className="text-[9.5px] text-[#555]">
                Vendor, invoice number, dates, amounts, and bank details captured. Results on the right.
              </div>
            </div>
            <div className="px-2.5 py-2 border-t border-[#f0f0f0]">
              <div className="bg-[#f5f5f5] rounded-[7px] px-2.5 py-1.5 text-[9.5px] text-[#bbb] italic">
                Ask follow-ups anytime — first, set up your workflow →
              </div>
            </div>
          </div>

          {/* Right: doc panel */}
          <div className="flex-1 flex flex-col bg-[#f5f5f4]">
            <div className="bg-white border-b border-[#e8e8e8] px-2.5 py-1.5 flex items-center justify-between">
              <div className="text-[10px] font-bold text-[#333]">invoice_sept_2024.pdf</div>
              <div className="flex gap-2 text-[11px] text-[#bbb]">⬇ ↗ ✕</div>
            </div>
            <div className="flex-1 p-2.5 overflow-hidden">
              <div className="flex items-center justify-between mb-1.5 text-[9px]">
                <span className="font-extrabold text-[#1a1a1a]">ABC CORPORATION</span>
                <span className="text-[#9ca3af]">
                  Invoice: <span className="bg-[rgba(59,99,240,.14)] rounded-sm px-0.5 text-[#3b63f0] font-semibold">INV-2024-0891</span>
                </span>
              </div>
              <div className="text-[8.5px] font-bold text-[#9ca3af] uppercase tracking-[.07em] mb-1">
                Extracted Fields
              </div>
              <div className="flex flex-col gap-1">
                {FIELDS.map(f => (
                  <FieldRow key={f.label} label={f.label} value={f.value} confidence={f.confidence} />
                ))}
              </div>
            </div>
            <div className="px-2.5 py-2 border-t border-[#e5e7eb] bg-white flex-shrink-0">
              <PrimaryBtn onClick={onNext}>Set up your AP workflow →</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
