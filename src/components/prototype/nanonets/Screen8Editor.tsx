import { BrowserBar, NanonetsSidebar, ConnectorPill, PrimaryBtn } from './shared'

const FIELDS = [
  { name: 'Invoice No.', type: 'Text' },
  { name: 'Vendor Name', type: 'Text' },
]

export default function Screen8Editor({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[10px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,.09)]">
      <BrowserBar url="agents.nanonets.com/workflows/ap-invoice/edit" />
      <div className="flex" style={{ height: 460 }}>
        <NanonetsSidebar active="tree" />
        <div className="flex-1 bg-white px-5 py-4 flex flex-col overflow-y-auto">

          {/* Header */}
          <div className="mb-3">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-[#9ca3af] text-xs">✏</span>
              <span className="text-[8.5px] text-[#9ca3af]">Customising: AP Invoice Processing</span>
            </div>
            <div className="text-[13px] font-extrabold text-[#0a0f1e] mb-0.5">Make it yours</div>
            <div className="text-[10px] text-[#9ca3af]">Add fields specific to your team, then save.</div>
          </div>

          {/* Fields section */}
          <div className="text-[8.5px] font-bold text-[#9ca3af] uppercase tracking-[.06em] mb-1.5">Fields</div>
          <div className="border border-[#e5e7eb] rounded-lg overflow-hidden mb-1.5">
            {FIELDS.map(f => (
              <div
                key={f.name}
                className="flex items-center px-3 py-1.5 border-b border-[#f0f0f0] bg-white last:border-0"
              >
                <span className="text-[#d1d5db] mr-2 flex-shrink-0 text-[13px]">⠿</span>
                <span className="flex-1 text-[10px] font-medium text-[#374151]">{f.name}</span>
                <span className="text-[8px] bg-[#f3f4f6] text-[#6b7280] px-2 py-0.5 rounded-md mr-2 flex-shrink-0">
                  {f.type}
                </span>
                <span className="text-[#d1d5db] text-[12px] cursor-pointer">✕</span>
              </div>
            ))}
            {/* GL Code — new, highlighted green */}
            <div className="px-3 py-1.5 bg-[#f0fdf4] border-b border-[#bbf7d0]">
              <div className="flex items-center">
                <span className="text-[#86efac] mr-2 flex-shrink-0 text-[13px]">⠿</span>
                <span className="flex-1 text-[10px] font-semibold text-[#059669]">
                  GL Code{' '}
                  <span className="text-[7.5px] font-bold bg-[#dcfce7] text-[#059669] px-1.5 py-px rounded-md ml-1">
                    New
                  </span>
                </span>
                <span className="text-[8px] bg-[#dcfce7] text-[#059669] px-2 py-0.5 rounded-md mr-2 flex-shrink-0">
                  Number
                </span>
                <span className="text-[#86efac] text-[12px] cursor-pointer">✕</span>
              </div>
              <div className="text-[8px] text-[#6ee7b7] mt-1 pl-5">Auto-syncs to SAP as GL 6200</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[9px] text-[#9ca3af] cursor-pointer mb-3 py-0.5">
            <span>+</span> Add another field
          </div>

          {/* Connectors */}
          <div className="text-[8.5px] font-bold text-[#9ca3af] uppercase tracking-[.06em] mb-1.5">Connectors</div>
          <div className="flex gap-2 flex-wrap mb-3">
            <ConnectorPill name="SAP" />
            <ConnectorPill name="Tally" />
            <div className="inline-flex items-center gap-1 text-[9px] font-semibold text-[#9ca3af] bg-transparent border border-dashed border-[#e5e7eb] px-2 py-1 rounded-full cursor-pointer">
              + Add
            </div>
          </div>

          <PrimaryBtn onClick={onNext}>Save template →</PrimaryBtn>
          <div className="text-[8.5px] text-[#9ca3af] text-center mt-2">
            Then you're ready to process live invoices
          </div>
        </div>
      </div>
    </div>
  )
}
