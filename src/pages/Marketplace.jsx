import { useMemo, useState } from 'react'
import AgentCard from '../components/AgentCard'
import { agentCategories, agents } from '../lib/mockData'

export default function Marketplace() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const visibleAgents = useMemo(() => {
    return agents.filter((agent) => {
      const categoryMatch = category === 'All' || agent.category === category
      const text = `${agent.name} ${agent.description} ${agent.creator}`.toLowerCase()
      const searchMatch = text.includes(query.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [query, category])

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-white">Explore Agents</h1>
      <p className="mt-2 text-slate-300">Browse high-performance AI agents built by developers across categories.</p>

      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300"
          placeholder="Search agents..."
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-white/20 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-300"
        >
          <option value="All">All Categories</option>
          {agentCategories.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleAgents.map((agent) => <AgentCard key={agent.id} agent={agent} />)}
      </div>
    </div>
  )
}
