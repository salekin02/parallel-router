import { Link } from 'parallel-router';

export function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">PR</div>
              <div className="hidden sm:block">
                <div className="text-lg font-semibold text-slate-900">Parallel Router</div>
                <div className="text-xs text-slate-500">Parallel routes made simple</div>
              </div>
            </Link>
            {/* primary nav links */}
            <div className="hidden md:flex items-center gap-3 ml-6">
              <Link to="/" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/features" className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">Features</Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/settings" target="parallel" className="text-slate-600 hover:text-slate-900 px-3 py-1 rounded-md text-sm">⚙️ Settings</Link>
            <Link to="/user/123" target="parallel" className="inline-flex items-center gap-2 btn btn-primary btn-shadow px-3 py-1.5 rounded-md text-sm shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20c0-2.21 3.58-4 8-4s8 1.79 8 4v1H4v-1z"/></svg>
              <span className="hidden sm:inline">Profile</span>
            </Link>
            {/* Buy Me a Coffee compact link */}
            <a
              href="https://buymeacoffee.com/salekin02"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 btn btn-primary btn-shadow px-3 py-1.5 rounded-md text-sm shadow-md text-slate-900 font-semibold"
              style={{ background: 'linear-gradient(180deg, #FFDD57, #FFC107)', color: '#1f2937' }}
            >
              ☕ Support
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
