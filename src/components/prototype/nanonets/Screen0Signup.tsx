import { BrowserBar, PrimaryBtn } from './shared'

export default function Screen0Signup({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white border border-[#d4d4d4] rounded-[10px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,.09)]">
      <BrowserBar url="accounts.nanonets.com/signup" />
      <div className="flex" style={{ height: 460 }}>
        {/* Left: form */}
        <div className="flex-1 px-7 py-8 flex flex-col justify-center border-r border-[#f0f0f0]">
          {/* Logo */}
          <div className="flex items-center gap-1.5 mb-6">
            <span className="text-[#3b63f0] text-[17px]">⚡</span>
            <span className="text-[14px] font-bold text-[#0a0f1e]">nanonets</span>
          </div>

          <div className="text-[17px] font-extrabold text-[#0a0f1e] mb-4">
            Create your Nanonets account
          </div>

          {/* Google button */}
          <button className="flex items-center justify-center gap-2 bg-[#111827] text-white rounded-lg px-4 py-2.5 w-full text-[11.5px] font-semibold mb-3">
            <span className="w-[14px] h-[14px] bg-white rounded-full flex items-center justify-center text-[8px] font-black text-[#4285f4] italic flex-shrink-0">
              G
            </span>
            Sign up with Google →
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex-1 h-px bg-[#e5e7eb]" />
            <span className="text-[10px] text-[#9ca3af] whitespace-nowrap">Or, register with your email</span>
            <div className="flex-1 h-px bg-[#e5e7eb]" />
          </div>

          {/* Form */}
          <label className="text-[10.5px] font-semibold text-[#374151] mb-1 block">Work email</label>
          <input
            readOnly
            placeholder="(eg) shawn@company.com"
            className="w-full border border-[#d1d5db] rounded-md px-2.5 py-2 text-[11px] text-[#111] mb-2 outline-none font-[inherit] placeholder:text-[#9ca3af] bg-white"
          />
          <label className="text-[10.5px] font-semibold text-[#374151] mb-1 block">Password</label>
          <input
            readOnly
            type="password"
            placeholder="••••••••"
            className="w-full border border-[#d1d5db] rounded-md px-2.5 py-2 text-[11px] text-[#111] mb-0 outline-none font-[inherit] placeholder:text-[#9ca3af] bg-white"
          />
          <div className="text-[9px] text-[#9ca3af] mb-2">At least 8 characters</div>

          <div className="text-[9px] text-[#9ca3af] mb-2 leading-[1.4]">
            By signing up, you agree to Nanonets'{' '}
            <span className="text-[#3b63f0]">Terms of Service</span> and{' '}
            <span className="text-[#3b63f0]">Privacy Policy</span>
          </div>

          <PrimaryBtn onClick={onNext}>Create free account</PrimaryBtn>

          <div className="text-[10px] text-[#6b7280] mt-2.5">
            Already have an account?{' '}
            <span className="text-[#3b63f0]">Log in</span>
          </div>
        </div>

        {/* Right: social proof */}
        <div className="w-[42%] bg-[#f9fafb] px-5 flex flex-col justify-between py-8 flex-shrink-0">
          <div>
            <div className="text-[10px] font-bold text-[#374151] text-center mb-3">
              Trusted by 1,000+ businesses worldwide
            </div>

            {/* Logo strip */}
            <div className="flex flex-wrap gap-1.5 justify-center mb-4">
              {['Volkswagen', 'Roche', 'Ryanair', 'Schneider Electric', 'Mondelēz', 'Juniper Networks'].map(n => (
                <span
                  key={n}
                  className="bg-white border border-[#e5e7eb] rounded-[5px] px-2 py-1 text-[8.5px] font-bold text-[#374151]"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-2 mb-4">
            {[
              { val: '95%', lbl: 'Straight-through Processing' },
              { val: '80%', lbl: 'Reduction in Overhead Costs' },
              { val: '+32', lbl: 'External Apps Supported' },
            ].map(s => (
              <div
                key={s.val}
                className="flex-1 text-center bg-white border border-[#e5e7eb] rounded-[7px] px-1 py-3"
              >
                <div className="text-[20px] font-black text-[#3b63f0]">{s.val}</div>
                <div className="text-[8px] text-[#6b7280] leading-[1.3] mt-1">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Ratings */}
          <div className="flex gap-2">
            {[
              { rating: '4.9 on Capterra' },
              { rating: '4.9 on G2 Crowd' },
            ].map(r => (
              <div
                key={r.rating}
                className="flex-1 bg-white border border-[#e5e7eb] rounded-[6px] px-2 py-2 flex items-center gap-1.5"
              >
                <span className="text-[8px] text-[#f59e0b] tracking-[-0.3px]">★★★★★</span>
                <div className="text-[8.5px] font-bold text-[#111]">{r.rating}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
