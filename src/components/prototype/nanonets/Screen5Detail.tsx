import { BrowserBar, NanonetsSidebar, ConnectorPill, PrimaryBtn } from './shared'

export default function Screen5Detail({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[10px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,.09)]">
      <BrowserBar url="agents.nanonets.com/templates/ap-invoice" />
      <div className="flex flex-col" style={{ height: 460 }}>
        <div className="flex flex-1 min-h-0">
          <NanonetsSidebar active="tree" />
          <div className="flex-1 bg-white flex flex-col overflow-hidden">

            {/* Header */}
            <div className="px-4 py-3.5 border-b border-[#f0f0f0] flex-shrink-0 flex items-center justify-between gap-2.5">
              <div>
                <div className="text-[13px] font-extrabold text-[#0a0f1e] mb-0.5">AP Invoice Processing</div>
                <div className="text-[8.5px] text-[#f59e0b]">
                  ★★★★★{' '}
                  <span className="text-[#9ca3af]">4.9 · 843 teams · Roche · Reliance · Schneider</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                <button
                  onClick={onNext}
                  className="bg-[#111827] text-white border-none py-2 px-4 rounded-lg text-[10.5px] font-bold cursor-pointer whitespace-nowrap hover:bg-[#1f2937] transition-colors"
                >
                  Apply to sample invoice →
                </button>
                <div className="text-[7.5px] text-[#9ca3af]">We'll show you what this extracts from your demo</div>
              </div>
            </div>

            {/* Preview */}
            <div className="bg-gradient-to-br from-[#eef2ff] to-[#dde6ff] p-3.5 flex-shrink-0 border-b border-[#e5e7eb]">
              <div className="text-[8px] font-bold text-[#6366f1] mb-1.5 uppercase tracking-[.06em]">
                Preview — Extracted Output
              </div>
              <div className="bg-white rounded-md overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,.08)]">
                <table className="w-full border-collapse text-[8px]">
                  <thead>
                    <tr className="bg-[#f5f5f4] border-b border-[#e5e7eb]">
                      {['Vendor', 'Invoice #', 'Amount', 'Status'].map(h => (
                        <th key={h} className="text-left px-2 py-1.5 text-[#6b7280] font-bold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { v: 'ABC Corporation', i: 'INV-2024-0891', a: '₹4,24,800', s: '✓ Done', sc: 'green' },
                      { v: 'TCS Limited', i: 'INV-2024-0892', a: '₹1,12,000', s: '✓ Done', sc: 'green' },
                      { v: 'Infosys BPO', i: 'INV-2024-0893', a: '₹87,500', s: 'In review', sc: 'amber' },
                    ].map((r, i) => (
                      <tr key={i} className="border-b border-[#f3f4f6] last:border-0">
                        <td className="px-2 py-1.5 font-semibold text-[#111]">{r.v}</td>
                        <td className="px-2 py-1.5 text-[#374151]">{r.i}</td>
                        <td className="px-2 py-1.5 font-bold text-[#111]">{r.a}</td>
                        <td className="px-2 py-1.5">
                          <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-full ${
                            r.sc === 'green'
                              ? 'bg-[#ecfdf5] text-[#059669]'
                              : 'bg-[#fffbeb] text-[#d97706]'
                          }`}>
                            {r.s}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Connectors */}
            <div className="px-4 py-3 border-b border-[#f0f0f0]">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[8.5px] font-bold text-[#9ca3af] uppercase tracking-[.06em]">
                  Pre-configured for
                </div>
                <span className="text-[8px] font-bold text-[#059669]">✓ No setup needed</span>
              </div>
              <div className="flex gap-2">
                <ConnectorPill name="SAP" />
                <ConnectorPill name="Tally" />
                <ConnectorPill name="NetSuite" />
              </div>
            </div>

            {/* Schema overview */}
            <div className="px-4 py-3 flex-1">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[8.5px] font-bold text-[#9ca3af] uppercase tracking-[.06em]">
                  14-field extraction schema
                </div>
                <span className="text-[7.5px] text-[#9ca3af]">
                  <span className="inline-block w-2 h-2 rounded-sm bg-[#eff3ff] border border-[#c3d7fd] mr-1 align-middle" />
                  Template-added
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { label: 'Invoice No.', auto: false },
                  { label: 'GSTIN', auto: true },
                  { label: 'Vendor Name', auto: false },
                  { label: 'PO Match', auto: true },
                  { label: 'Total Amount', auto: false },
                  { label: 'GL Code', auto: true },
                  { label: 'Due Date', auto: false },
                  { label: '+7 more fields', auto: false, muted: true },
                ].map(f => (
                  <div
                    key={f.label}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-[8.5px] font-medium ${
                      f.auto
                        ? 'bg-[#eff3ff] text-[#3b63f0]'
                        : (f as { muted?: boolean }).muted
                        ? 'bg-transparent text-[#9ca3af]'
                        : 'bg-[#f9fafb] text-[#374151]'
                    }`}
                  >
                    {f.auto && (
                      <span className="text-[6px] font-black text-[#3b63f0] bg-[#c3d7fd] px-1 py-px rounded leading-tight flex-shrink-0">
                        AUTO
                      </span>
                    )}
                    {f.label}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
