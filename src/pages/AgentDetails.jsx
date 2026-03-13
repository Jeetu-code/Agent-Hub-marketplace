import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { agents } from '../lib/mockData'

function RatingStars({ rating }) {
  return <span className="text-amber-300">{'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}</span>
}

export default function AgentDetails() {
  const { id } = useParams()
  const [prompt, setPrompt] = useState('')

  const agent = useMemo(
    () => agents.find((item) => item.id === id) || agents[0],
    [id],
  )

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-8 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8">
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="mb-4 text-4xl">{agent.icon}</div>
        <h1 className="text-3xl font-semibold text-white">{agent.name}</h1>
        <p className="mt-3 text-slate-300">{agent.description}</p>

        <div className="mt-6 space-y-3 text-sm text-slate-200">
          <p><span className="text-slate-400">Category:</span> {agent.category}</p>
          <p><span className="text-slate-400">Creator:</span> {agent.creator}</p>
          <p className="flex items-center gap-2"><span className="text-slate-400">Rating:</span> <RatingStars rating={agent.rating} /> {agent.rating}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {agent.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold text-white">Interactive Demo</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="mt-4 min-h-36 w-full rounded-xl border border-white/20 bg-slate-950/70 p-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-300"
          placeholder="Paste your resume or ask a question..."
        />
        <div className="mt-4 flex gap-2">
          <button className="rounded-xl bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]">
            Run Agent
          </button>
          <button
            onClick={() => setPrompt('')}
            className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100"
          >
            Clear Input
          </button>
        </div>

        <div className="mt-5 rounded-xl border border-white/10 bg-slate-900/70 p-4">
          <p className="mb-2 text-xs uppercase tracking-wide text-slate-400">AI Result</p>
          <p className="text-sm text-slate-200">
            {prompt
              ? `Demo output: ${agent.name} processed your input and generated a clean, structured response preview.`
              : 'Run the agent to see a styled response panel output.'}
          </p>
        </div>
      </section>
    </div>
  )
}
