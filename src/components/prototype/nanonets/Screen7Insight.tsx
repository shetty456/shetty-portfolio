import { BrowserBar, NanonetsSidebar, PrimaryBtn } from './shared'

export default function Screen7Insight({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[10px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,.09)]">
      <BrowserBar url="agents.nanonets.com/tasks/demo-01/insight" />
      <div className="flex" style={{ height: 460 }}>
        <NanonetsSidebar active="task" />
        <div className="flex-1 bg-white px-5 py-5 flex flex-col overflow-y-auto">

          {/* Meta chip */}
          <div className="inline-flex items-center gap-1.5 bg-[#eff3ff] border border-[#c3d7fd] rounded-full px-2.5 py-0.5 mb-3 self-start">
            <span className="text-[#3b63f0] text-[10px]">⊹</span>
            <span className="text-[8.5px] font-bold text-[#3b63f0]">AP Invoice Processing · 500 invoices/month</span>
          </div>

          <div className="text-[14px] font-extrabold text-[#0a0f1e] mb-1">
            Here's what this saves your team
          </div>
          <div className="text-[10px] text-[#9ca3af] mb-4">
            Industry average estimate, ~500 invoices/month —{' '}
            <span className="text-[#3b63f0] font-semibold cursor-pointer">adjust for your volume →</span>
          </div>

          {/* Hero stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { val: '66', sub: 'hrs saved', desc: 'per month' },
              { val: '₹18K', sub: 'errors avoided', desc: 'per month' },
              { val: '99%', sub: 'accuracy', desc: 'zero re-entry' },
            ].map(s => (
              <div
                key={s.val}
                className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[10px] px-2.5 py-3.5 text-center"
              >
                <div className="text-[26px] font-black text-[#059669] leading-[1.1]">{s.val}</div>
                <div className="text-[8.5px] font-bold text-[#047857] mt-0.5">{s.sub}</div>
                <div className="text-[7.5px] text-[#9ca3af] mt-px">{s.desc}</div>
              </div>
            ))}
          </div>

          {/* Before / After */}
          <div className="flex items-center gap-3 bg-[#f9fafb] rounded-lg px-4 py-3 mb-4">
            <div className="text-center flex-1">
              <div className="text-[22px] font-black text-[#dc2626] leading-[1.1]">8 min</div>
              <div className="text-[8px] text-[#9ca3af] mt-0.5">manual</div>
            </div>
            <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
              <span className="text-[#d1d5db] text-lg">→</span>
              <span className="text-[8px] font-bold text-[#3b63f0]">120×</span>
            </div>
            <div className="text-center flex-1">
              <div className="text-[22px] font-black text-[#3b63f0] leading-[1.1]">4 sec</div>
              <div className="text-[8px] text-[#9ca3af] mt-0.5">with Nanonets</div>
            </div>
          </div>

          {/* CFO quote */}
          <div className="border border-[#e5e7eb] rounded-lg px-4 py-3 mb-4">
            <div className="text-[8.5px] font-bold text-[#374151] mb-2">Share with your CFO</div>
            <div className="text-[9.5px] text-[#374151] leading-[1.7] italic border-l-[3px] border-[#3b63f0] pl-2.5 mb-2">
              "Nanonets saves us 66 hrs/month and ~₹18K in error corrections — on AP invoices alone."
            </div>
            <button className="bg-white text-[#374151] border border-[#d1d5db] px-2.5 py-1 rounded-md text-[9px] cursor-pointer">
              Copy
            </button>
          </div>

          <PrimaryBtn onClick={onNext}>Make this template yours →</PrimaryBtn>
        </div>
      </div>
    </div>
  )
}
