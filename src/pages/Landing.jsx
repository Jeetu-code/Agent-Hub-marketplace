import { Link } from 'react-router-dom'
import AgentCard from '../components/AgentCard'
import { agents } from '../lib/mockData'

export default function Landing() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-cyan-950/30 p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
          AgentHub – AI Agents Discovery Platform
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold text-white md:text-6xl">
          Discover and Use Powerful AI Agents
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300 md:text-lg">
          Developers publish specialized AI agents, and users explore, evaluate, and run them from one modern marketplace.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            placeholder="Search agents by name, use case, or category..."
            className="w-full rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300"
          />
          <Link
            to="/marketplace"
            className="rounded-xl bg-cyan-300 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:scale-[1.02]"
          >
            Explore Agents
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white">Marketplace Highlights</h2>
          <Link to="/marketplace" className="text-sm text-cyan-200 hover:text-cyan-100">View all</Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agents.slice(0, 4).map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>
    </div>
  )
}
