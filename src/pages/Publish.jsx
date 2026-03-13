import { useState } from 'react'
import { agentCategories } from '../lib/mockData'

export default function Publish() {
  const [published, setPublished] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setPublished(true)
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-8 pt-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-white">Publish Agent</h1>
      <p className="mt-2 text-slate-300">List your AI agent in the AgentHub marketplace.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div>
          <label className="mb-1 block text-sm text-slate-200">Agent Name</label>
          <input className="w-full rounded-xl border border-white/20 bg-slate-950/60 px-3 py-2 text-sm text-white" required />
        </div>
        <div>
          <label className="mb-1 block text-sm text-slate-200">Short Description</label>
          <input className="w-full rounded-xl border border-white/20 bg-slate-950/60 px-3 py-2 text-sm text-white" required />
        </div>
        <div>
          <label className="mb-1 block text-sm text-slate-200">Category</label>
          <select className="w-full rounded-xl border border-white/20 bg-slate-900 px-3 py-2 text-sm text-slate-100" required>
            <option value="">Select category</option>
            {agentCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm text-slate-200">Prompt Template</label>
          <textarea className="min-h-28 w-full rounded-xl border border-white/20 bg-slate-950/60 px-3 py-2 text-sm text-white" required />
        </div>
        <div>
          <label className="mb-1 block text-sm text-slate-200">Tags</label>
          <input className="w-full rounded-xl border border-white/20 bg-slate-950/60 px-3 py-2 text-sm text-white" placeholder="e.g. career, hr, productivity" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-slate-200">Pricing</label>
          <select className="w-full rounded-xl border border-white/20 bg-slate-900 px-3 py-2 text-sm text-slate-100" required>
            <option value="">Select pricing</option>
            <option>Free</option>
            <option>Paid</option>
          </select>
        </div>

        <button type="submit" className="w-full rounded-xl bg-cyan-300 px-4 py-2 font-semibold text-slate-900 transition hover:scale-[1.01]">
          Publish Agent
        </button>

        {published && (
          <div className="rounded-xl border border-emerald-300/40 bg-emerald-400/10 p-3 text-sm text-emerald-200">
            Success! Your agent has been published (demo UI notification).
          </div>
        )}
      </form>
    </div>
  )
}
