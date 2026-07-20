import { BrowserBar, NanonetsSidebar, PrimaryBtn } from './shared'

export default function Screen2DemoReady({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[10px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,.09)]">
      <BrowserBar url="agents.nanonets.com" />
      <div className="flex flex-col" style={{ height: 460 }}>
        <div className="flex flex-1 min-h-0">
          <NanonetsSidebar active="add" />
          {/* Main area */}
          <div className="flex-1 bg-[#f9f9f9] flex flex-col overflow-hidden">
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-4">
              <div className="text-[14.5px] font-bold text-[#0a0f1e] text-center mb-3">
                Watch Nanonets extract your AP invoice
              </div>
              <div className="text-[9.5px] text-[#9ca3af] text-center mb-3 max-w-[380px]">
                We've loaded a real invoice — no upload needed. Takes 4 seconds.
              </div>

              {/* Search box */}
              <div className="w-full max-w-[400px] bg-white border-[1.5px] border-[#3b63f0] rounded-[10px] px-2.5 py-2 flex items-start gap-1.5 mb-2">
                <span className="text-[15px] text-[#bbb] mt-px flex-shrink-0">+</span>
                <div className="flex-1 text-[10.5px] text-[#111]">Extract all fields from this AP invoice →</div>
              </div>

              {/* Pre-loaded invoice card */}
              <div className="w-full max-w-[400px] bg-[#f0f5ff] border-[1.5px] border-[#c7d2fe] rounded-lg px-3 py-2 flex items-center gap-2 mb-4">
                <span className="text-[18px]">📄</span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold text-[#3b63f0]">invoice_sept_2024.pdf</div>
                  <div className="text-[8.5px] text-[#6b7280]">Sample invoice · ABC Corporation</div>
                </div>
              </div>

              <div className="w-full max-w-[400px]">
                <PrimaryBtn onClick={onNext}>Extract now →</PrimaryBtn>
              </div>
            </div>

            {/* What happens strip */}
            <div className="border-t border-[#ebebeb] bg-white px-6 py-3 flex items-center justify-center gap-4 flex-shrink-0">
              {[
                { icon: '📄', label: 'Invoice loaded', active: true },
                null,
                { icon: '⚡', label: 'AI extracts', active: false },
                null,
                { icon: '✓', label: 'Results ready', active: false },
              ].map((item, i) =>
                item === null ? (
                  <span key={i} className="text-[#d1d5db] text-[10px]">→</span>
                ) : (
                  <div key={i} className={`flex items-center gap-1.5 text-[8.5px] font-medium ${item.active ? 'text-[#3b63f0]' : 'text-[#9ca3af]'}`}>
                    <span className={`text-[14px] ${item.active ? '' : 'grayscale opacity-50'}`}>{item.icon}</span>
                    {item.label}
                    {item.active && <span className="w-1.5 h-1.5 rounded-full bg-[#3b63f0] animate-pulse" />}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
