import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Explore Agents', to: '/marketplace' },
  { label: 'Publish Agent', to: '/publish' },
  { label: 'Leaderboard', to: '/leaderboard' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition ${isActive ? 'text-cyan-300' : 'text-slate-200 hover:text-white'}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-bold tracking-tight text-white">
          Agent<span className="text-cyan-300">Hub</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:scale-105 md:block">
          Connect Wallet
        </button>

        <button
          aria-label="Toggle menu"
          className="rounded-md border border-white/20 p-2 text-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-900/95 px-4 py-4 md:hidden">
          <div className="space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="block text-sm font-medium text-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <button className="mt-2 w-full rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
