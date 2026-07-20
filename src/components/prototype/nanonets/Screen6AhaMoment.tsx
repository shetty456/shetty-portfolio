import { BrowserBar, NanonetsSidebar, PrimaryBtn } from './shared'

export default function Screen6AhaMoment({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[10px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,.09)]">
      <BrowserBar url="agents.nanonets.com/tasks/template-demo-01" />
      <div className="flex" style={{ height: 460 }}>
        <NanonetsSidebar active="tree" />
        {/* Task split */}
        <div className="flex flex-1 min-w-0">
          {/* Left: agent thread */}
          <div className="w-[45%] border-r border-[#e8e8e8] flex flex-col bg-white">
            <div className="px-2.5 py-1.5 text-[8.5px] text-[#bbb] border-b border-[#f0f0f0]">
              <span className="text-[#3b63f0]">Tasks</span> › AP Invoice Processing
            </div>
            <div className="flex-1 flex flex-col gap-1.5 p-2.5 overflow-hidden">
              <div className="bg-[#f3f4f6] rounded-md px-2 py-1.5 text-[9.5px] text-[#333] self-end max-w-[92%]">
                Apply to sample invoice →
              </div>
              <div className="text-[9.5px] text-[#444] flex flex-col gap-0.5">
                {[
                  'Applying AP Invoice Processing schema',
                  'Running 14-field extraction',
                  'Matching against PO database',
                  'Suggesting GL codes',
                ].map(step => (
                  <div key={step} className="flex items-center gap-1 text-[8.5px] text-[#aaa] py-px">
                    <span>›</span> {step}
                  </div>
                ))}
              </div>
              <div className="text-[9.5px] text-[#059669] font-bold">
                ✅ Done — 14 fields · PO matched · ERP-ready
              </div>
              <div className="text-[9px] text-[#555]">
                GSTIN, PO matching, and GL code — added automatically by the template.
              </div>
            </div>
            <div className="px-2.5 py-2 border-t border-[#f0f0f0]">
              <div className="bg-[#f5f5f5] rounded-[7px] px-2.5 py-1.5 text-[9.5px] text-[#bbb] italic">
                Ask follow-ups anytime — first, see what this saves you →
              </div>
            </div>
          </div>

          {/* Right: 14-field structured output */}
          <div className="flex-1 flex flex-col bg-[#f5f5f4]">
            <div className="bg-white border-b border-[#e8e8e8] px-2.5 py-1.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="text-[10px] font-bold text-[#333]">invoice_sept_2024.pdf</div>
                <span className="text-[7.5px] font-bold bg-[#eff3ff] text-[#3b63f0] border border-[#c3d7fd] px-1.5 py-0.5 rounded-full">
                  AP Invoice Processing
                </span>
              </div>
              <div className="flex gap-2 text-[11px] text-[#bbb]">⬇ ↗ ✕</div>
            </div>
            <div className="flex-1 p-2.5 flex flex-col overflow-hidden">
              <div className="text-[8.5px] font-bold text-[#9ca3af] uppercase tracking-[.07em] mb-1.5">
                14 Structured Fields
              </div>
              <div className="flex flex-col gap-[3px] flex-1 overflow-y-auto pb-1">
                {[
                  { l: 'Invoice No.', v: 'INV-2024-0891', c: '98%' },
                  { l: 'Vendor', v: 'ABC Corporation', c: '99%' },
                  { l: 'GSTIN', v: '29AAKCK0418N1Z5', c: '95%' },
                  { l: 'Total', v: '₹4,24,800', c: '99%' },
                  { l: 'Due Date', v: 'Oct 15, 2024', c: '96%' },
                ].map(f => (
                  <div
                    key={f.l}
                    className="bg-white border border-[#e5e7eb] rounded-md px-2 py-1 flex items-center justify-between gap-2"
                  >
                    <span className="text-[8.5px] text-[#999] flex-shrink-0 whitespace-nowrap">{f.l}</span>
                    <span className="text-[9px] font-bold text-[#111] flex-1">{f.v}</span>
                    <span className="text-[9px] font-bold bg-[#dcfce7] text-[#15803d] border border-[#86efac] px-1.5 py-0.5 rounded-full flex-shrink-0">
                      {f.c}
                    </span>
                  </div>
                ))}
                {/* PO Match — green highlight */}
                <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-md px-2 py-1 flex items-center justify-between gap-2">
                  <span className="text-[8.5px] text-[#059669] flex-shrink-0">PO Match</span>
                  <span className="text-[9px] text-[#059669] flex-1 font-bold">✓ PO-2024-089</span>
                  <span className="text-[7.5px] font-bold bg-[#dcfce7] text-[#15803d] border border-[#86efac] px-1.5 py-0.5 rounded-full flex-shrink-0">
                    Matched
                  </span>
                </div>
                {/* GL Code — blue highlight */}
                <div className="bg-[#eff3ff] border border-[#c3d7fd] rounded-md px-2 py-1 flex items-center justify-between gap-2">
                  <span className="text-[8.5px] text-[#3b63f0] flex-shrink-0">GL Code</span>
                  <span className="text-[9px] text-[#3b63f0] flex-1 font-bold">6200 — Accounts Payable</span>
                  <span className="text-[7.5px] font-bold bg-[#eff3ff] text-[#3b63f0] border border-[#c3d7fd] px-1.5 py-0.5 rounded-full flex-shrink-0">
                    Auto
                  </span>
                </div>
                {/* Expander */}
                <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-md px-2 py-1 flex items-center gap-2">
                  <span className="text-[8.5px] text-[#999] flex-shrink-0">+7 more fields</span>
                  <span className="text-[8px] text-[#9ca3af]">Subtotal, GST, Bank, IFSC, PAN…</span>
                </div>
              </div>
            </div>
            <div className="px-2.5 py-2 border-t border-[#e5e7eb] bg-white flex-shrink-0">
              <PrimaryBtn onClick={onNext}>See what this saves you →</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
