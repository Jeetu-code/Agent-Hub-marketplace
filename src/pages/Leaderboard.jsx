import { leaderboard } from '../lib/mockData'

const badgeByRank = {
  1: '🥇',
  2: '🥈',
  3: '🥉',
}

export default function Leaderboard() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-white">Top Agents Leaderboard</h1>
      <p className="mt-2 text-slate-300">Ranked by popularity and total runs.</p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm text-slate-200">
            <thead className="bg-slate-900/70 text-xs uppercase tracking-wide text-slate-300">
              <tr>
                <th className="px-4 py-3">Rank</th>
                <th className="px-4 py-3">Agent Name</th>
                <th className="px-4 py-3">Creator</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Total Runs</th>
                <th className="px-4 py-3">Rating</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((agent) => (
                <tr key={agent.id} className="border-t border-white/10 transition hover:bg-cyan-300/5">
                  <td className="px-4 py-3 font-semibold text-white">
                    {badgeByRank[agent.rank] ?? `#${agent.rank}`}
                  </td>
                  <td className="px-4 py-3">{agent.name}</td>
                  <td className="px-4 py-3">{agent.creator}</td>
                  <td className="px-4 py-3">{agent.category}</td>
                  <td className="px-4 py-3">{agent.totalRuns.toLocaleString()}</td>
                  <td className="px-4 py-3">{agent.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
