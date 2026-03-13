import { Link } from 'react-router-dom'

function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-300" aria-label={`Rated ${rating} out of 5`}>
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < Math.round(rating) ? '★' : '☆'}</span>
      ))}
    </div>
  )
}

export default function AgentCard({ agent }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:shadow-cyan-500/20">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-3xl">{agent.icon}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{agent.name}</h3>
        </div>
        <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-medium text-cyan-200">
          {agent.category}
        </span>
      </div>

      <p className="mb-4 text-sm text-slate-300">{agent.description}</p>

      <div className="mb-4 flex items-center justify-between text-sm text-slate-300">
        <span>by {agent.creator}</span>
        <RatingStars rating={agent.rating} />
      </div>

      <div className="flex items-center gap-2">
        <button className="flex-1 rounded-xl bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-900 transition group-hover:scale-[1.02]">
          Run Agent
        </button>
        <Link
          to={`/agent/${agent.id}`}
          className="flex-1 rounded-xl border border-white/20 px-4 py-2 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-200 hover:text-cyan-100"
        >
          View Details
        </Link>
      </div>
    </article>
  )
}
