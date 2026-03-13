import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 text-sm text-slate-300 sm:grid-cols-3 sm:px-6 lg:px-8">
        <div>
          <h4 className="mb-2 font-semibold text-white">About AgentHub</h4>
          <p>AgentHub is a discovery platform where developers publish AI agents and users run them instantly.</p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-white">Quick Links</h4>
          <div className="space-y-1">
            <Link to="/marketplace" className="block hover:text-cyan-200">Explore Agents</Link>
            <Link to="/publish" className="block hover:text-cyan-200">Publish Agent</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-white">Social</h4>
          <div className="flex gap-3 text-lg">
            <span>𝕏</span>
            <span>in</span>
            <span>◉</span>
          </div>
          <p className="mt-4 text-xs text-slate-400">© {new Date().getFullYear()} AgentHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
