export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Sunil Hanamshetty. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/sunilhanamshetty"
            className="text-slate-400 hover:text-white text-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hanamshettysunil6@gmail.com"
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
