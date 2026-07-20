import { BrowserBar, NanonetsSidebar, ConnectorPill, PrimaryBtn } from './shared'

export default function Screen9Complete({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[10px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,.09)]">
      <BrowserBar url="agents.nanonets.com/workflows/my-ap-template" />
      <div className="flex" style={{ height: 460 }}>
        <NanonetsSidebar active="add" />
        <div className="flex-1 bg-white px-5 py-5 flex flex-col items-center overflow-y-auto">

          {/* Success indicator */}
          <div className="w-11 h-11 bg-[#ecfdf5] rounded-full flex items-center justify-center mb-3 flex-shrink-0">
            <span className="text-[#059669] text-2xl">✓</span>
          </div>
          <div className="text-[15px] font-extrabold text-[#0a0f1e] mb-1 text-center">You're all set</div>
          <div className="text-[10px] text-[#9ca3af] text-center mb-5">
            Your workflow is live. Upload your first invoice to see it run.
          </div>

          {/* Template summary card */}
          <div className="w-full border border-[#e5e7eb] rounded-[10px] p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[11px] font-bold text-[#111]">My AP Template</div>
              <span className="text-[8px] font-bold bg-[#ecfdf5] text-[#065f46] border border-[#a7f3d0] px-2 py-0.5 rounded-full">
                Active
              </span>
            </div>
            <div className="flex gap-1 flex-wrap mb-2">
              {['Invoice No.', 'Vendor', 'Amount'].map(tag => (
                <span
                  key={tag}
                  className="text-[8px] bg-[#f0f9ff] text-[#0369a1] border border-[#bae6fd] px-1.5 py-0.5 rounded-full font-semibold"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[8px] bg-[#f0fdf4] text-[#059669] border border-[#bbf7d0] px-1.5 py-0.5 rounded-full font-bold">
                GL Code ✓
              </span>
              <span className="text-[8px] bg-[#f0f9ff] text-[#9ca3af] border border-[#e5e7eb] px-1.5 py-0.5 rounded-full">
                +10 more
              </span>
            </div>
            <div className="flex gap-2">
              <ConnectorPill name="SAP" />
              <ConnectorPill name="Tally" />
            </div>
          </div>

          {/* Habit loop */}
          <div className="w-full mb-4">
            <div className="text-[8.5px] font-bold text-[#9ca3af] uppercase tracking-[.06em] mb-2">
              What happens every time you upload:
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-[#f9fafb] border border-[#e5e7eb] rounded-[9px] px-2 py-2.5 text-center">
                <div className="text-[18px] mb-1">📤</div>
                <div className="text-[8px] font-semibold text-[#374151]">You upload</div>
                <div className="text-[7.5px] text-[#9ca3af] mt-px">any AP invoice</div>
              </div>
              <span className="text-[#d1d5db] flex-shrink-0">→</span>
              <div className="flex-1 bg-[#eff3ff] border border-[#c3d7fd] rounded-[9px] px-2 py-2.5 text-center">
                <div className="text-[16px] font-black text-[#3b63f0] mb-1">⚡</div>
                <div className="text-[8px] font-semibold text-[#374151]">Nanonets extracts</div>
                <div className="text-[7.5px] text-[#9ca3af] mt-px">14 fields, PO matched</div>
              </div>
              <span className="text-[#d1d5db] flex-shrink-0">→</span>
              <div className="flex-1 bg-[#f0fdf4] border border-[#bbf7d0] rounded-[9px] px-2 py-2.5 text-center">
                <div className="text-[18px] mb-1">🗄️</div>
                <div className="text-[8px] font-semibold text-[#374151]">Posts to SAP</div>
                <div className="text-[7.5px] text-[#9ca3af] mt-px">GL code auto-assigned</div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <PrimaryBtn onClick={onNext}>Upload an invoice →</PrimaryBtn>
            <div className="text-[9px] text-[#9ca3af] text-center mt-2">
              Want this to run automatically?{' '}
              <span className="text-[#3b63f0] font-semibold cursor-pointer">Set up an agent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
