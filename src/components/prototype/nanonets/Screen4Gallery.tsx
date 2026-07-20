import { BrowserBar, NanonetsSidebar, PrimaryBtn } from './shared'

const TEMPLATES = [
  {
    title: 'AP Invoice Processing',
    companies: 'Roche · Reliance · Schneider',
    rating: '4.9',
    teams: '843',
    badge: 'MOST USED',
    selected: true,
    gradient: 'from-[#eef2ff] to-[#dde6ff]',
    headColor: 'text-[#6366f1]',
    table: [
      { v: 'ABC Corp', a: '₹4,24,800', s: '✓', sc: 'text-[#059669]' },
      { v: 'TCS Ltd', a: '₹1,12,000', s: '✓', sc: 'text-[#059669]' },
      { v: 'Infosys', a: '₹87,500', s: '⏳', sc: 'text-[#d97706]' },
    ],
  },
  {
    title: 'Bank Statement Recon',
    companies: 'EY · Deloitte · KPMG',
    rating: '4.8',
    teams: '521',
    gradient: 'from-[#ecfdf5] to-[#d1fae5]',
    headColor: 'text-[#059669]',
    table: [
      { v: '01 Sep', a: 'NEFT In', s: '+50,000', sc: 'text-[#059669]' },
      { v: '05 Sep', a: 'Vendor Pay', s: '−12,000', sc: 'text-[#dc2626]' },
      { v: '12 Sep', a: 'GST Out', s: '−8,400', sc: 'text-[#dc2626]' },
    ],
  },
  {
    title: 'PO Matching',
    companies: 'Toyota · Suzano · Unilever',
    rating: '4.7',
    teams: '318',
    gradient: 'from-[#fff7ed] to-[#fed7aa]',
    headColor: 'text-[#c2410c]',
    table: [
      { v: 'PO-001', a: 'ABC Corp', s: '✓ Exact', sc: 'text-[#059669]' },
      { v: 'PO-002', a: 'TCS Ltd', s: '✓ Exact', sc: 'text-[#059669]' },
      { v: 'PO-003', a: 'Wipro', s: '⚠ Review', sc: 'text-[#d97706]' },
    ],
  },
  {
    title: 'Expense Report OCR',
    companies: 'Mondelēz · Boston Scientific',
    rating: '4.6',
    teams: '240',
    gradient: 'from-[#f5f3ff] to-[#ede9fe]',
    headColor: 'text-[#7c3aed]',
    table: [
      { v: 'P. Sharma', a: 'Travel', s: '₹8,500', sc: 'text-[#374151]' },
      { v: 'R. Kumar', a: 'Meals', s: '₹2,100', sc: 'text-[#374151]' },
      { v: 'S. Patel', a: 'Lodging', s: '₹14,200', sc: 'text-[#374151]' },
    ],
  },
]

export default function Screen4Gallery({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[10px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,.09)]">
      <BrowserBar url="agents.nanonets.com/templates" />
      <div className="flex flex-col" style={{ height: 460 }}>
        <div className="flex flex-1 min-h-0">
          <NanonetsSidebar active="tree" />
          <div className="flex-1 bg-white flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-4 pt-3 pb-0 flex-shrink-0">
              <div className="text-[13px] font-extrabold text-[#0a0f1e] mb-3">Template Gallery</div>
              <div className="flex items-center gap-2 bg-[#f5f5f4] border border-[#e5e7eb] rounded-lg px-2.5 py-1.5 mb-2">
                <span className="text-[#9ca3af] text-sm">🔍</span>
                <span className="text-[10px] text-[#9ca3af]">Search 200+ templates…</span>
              </div>
              <div className="flex gap-2 pb-3 border-b border-[#f0f0f0]">
                {['Finance', 'Healthcare', 'Supply Chain', 'Legal'].map((t, i) => (
                  <div
                    key={t}
                    className={`rounded-full px-2.5 py-0.5 text-[8.5px] font-bold whitespace-nowrap cursor-pointer ${
                      i === 0
                        ? 'bg-[#0a0f1e] text-white'
                        : 'bg-[#f3f4f6] text-[#6b7280] font-semibold'
                    }`}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Card grid */}
            <div className="flex-1 px-4 py-3 grid grid-cols-2 gap-3 overflow-y-auto">
              {TEMPLATES.map(t => (
                <div
                  key={t.title}
                  className={`rounded-[10px] overflow-hidden cursor-pointer ${
                    t.selected
                      ? 'border-2 border-[#3b63f0] shadow-[0_0_0_3px_rgba(59,99,240,.07)]'
                      : 'border border-[1.5px] border-[#e5e7eb]'
                  }`}
                >
                  {/* Card preview */}
                  <div className={`bg-gradient-to-br ${t.gradient} px-3 pt-2 relative overflow-hidden`} style={{ height: 80 }}>
                    {t.badge && (
                      <div className="absolute top-2 right-2 bg-[#059669] text-white text-[6px] font-extrabold px-1.5 py-0.5 rounded-full tracking-[.03em]">
                        {t.badge}
                      </div>
                    )}
                    <table className="w-full border-collapse" style={{ fontSize: 7 }}>
                      <thead>
                        <tr className={`border-b border-opacity-20 ${t.headColor}`}>
                          {['Col A', 'Col B', 'Col C'].map(h => (
                            <th key={h} className={`text-left px-0.5 py-0.5 font-bold ${t.headColor}`} />
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {t.table.map((row, i) => (
                          <tr key={i}>
                            <td className="px-0.5 py-0.5 font-semibold text-[#1e1b4b] text-[7px]">{row.v}</td>
                            <td className="px-0.5 py-0.5 text-[#374151] text-[7px]">{row.a}</td>
                            <td className={`px-0.5 py-0.5 font-bold text-[7px] ${row.sc}`}>{row.s}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-3 bg-white">
                    <div className="text-[10px] font-bold text-[#111] mb-1">{t.title}</div>
                    <div className="text-[7.5px] text-[#9ca3af] mb-2">{t.companies}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] text-[#f59e0b] tracking-[-0.3px]">
                        ★★★★★ <span className="text-[#9ca3af]">{t.rating}</span>
                      </span>
                      <span className="text-[7.5px] text-[#9ca3af]">{t.teams} teams</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="px-4 py-3 border-t border-[#e5e7eb] bg-white flex-shrink-0">
              <PrimaryBtn onClick={onNext}>Continue with AP Invoice Processing →</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
