import { motion } from 'framer-motion'
import { leaderboard } from '../lib/mockData'
import { Link } from 'react-router-dom'

export default function Leaderboard() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  const getMedalColor = (rank) => {
    if (rank === 1) return 'text-yellow-400'
    if (rank === 2) return 'text-gray-300'
    if (rank === 3) return 'text-yellow-600'
    return 'text-slate-500'
  }

  const getMedalEmoji = (rank) => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    return `${rank}.`
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Top Agents Leaderboard
          </h1>
          <p className="text-xl text-slate-300">
            The most popular AI agents by downloads
          </p>
        </motion.div>

        {/* Top 3 Spotlight */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {leaderboard.slice(0, 3).map((agent, index) => (
            <motion.div
              key={agent.id}
              whileHover={{ y: -10 }}
              className={`glass p-6 rounded-lg text-center glow-purple ${
                index === 0 ? 'md:col-span-1 md:row-span-2 md:self-start' : ''
              }`}
            >
              <div className={`text-5xl mb-4 ${getMedalColor(agent.rank)}`}>
                {getMedalEmoji(agent.rank)}
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">
                {agent.name}
              </h3>
              <p className="text-sm text-slate-300 mb-4 line-clamp-2">
                {agent.description}
              </p>
              <div className="text-2xl font-bold gradient-text mb-2">
                {agent.downloads.toLocaleString()}
              </div>
              <p className="text-sm text-slate-400 mb-4">downloads</p>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < Math.floor(agent.rating) ? 'text-cyan-400' : 'text-slate-600'}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-400 mb-4">
                {agent.rating} • {agent.reviews} reviews
              </p>
              <Link to={`/agent/${agent.id}`}>
                <button className="w-full px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded hover:bg-cyan-400 transition">
                  View
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-lg overflow-hidden glow"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800 border-b border-cyan-500/20">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-cyan-400">
                    Rank
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-cyan-400">
                    Agent
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-cyan-400 hidden sm:table-cell">
                    Creator
                  </th>
                  <th className="px-6 py-4 text-right font-bold text-cyan-400">
                    Downloads
                  </th>
                  <th className="px-6 py-4 text-right font-bold text-cyan-400 hidden sm:table-cell">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {leaderboard.map((agent, index) => (
                    <motion.tr
                      key={agent.id}
                      variants={item}
                      whileHover={{ backgroundColor: 'rgba(0, 217, 255, 0.05)' }}
                      className="border-b border-cyan-500/10 hover:bg-slate-800/50 transition cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <Link
                          to={`/agent/${agent.id}`}
                          className="text-2xl font-bold"
                        >
                          <span className={getMedalColor(agent.rank)}>
                            {getMedalEmoji(agent.rank)}
                          </span>
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          to={`/agent/${agent.id}`}
                          className="font-bold text-cyan-400 hover:text-cyan-300 transition"
                        >
                          {agent.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-slate-300 hidden sm:table-cell">
                        {agent.creator}
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-slate-200">
                        {agent.downloads.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right hidden sm:table-cell">
                        <div className="flex items-center justify-end gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={i < Math.floor(agent.rating) ? 'text-cyan-400' : 'text-slate-600'}
                              style={{ fontSize: '0.875rem' }}
                            >
                              ★
                            </span>
                          ))}
                          <span className="ml-2 text-slate-400 text-sm">
                            {agent.rating}
                          </span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </motion.div>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              label: 'Total Downloads',
              value: leaderboard.reduce((sum, a) => sum + a.downloads, 0).toLocaleString(),
            },
            {
              label: 'Average Rating',
              value: (leaderboard.reduce((sum, a) => sum + a.rating, 0) / leaderboard.length).toFixed(2),
            },
            {
              label: 'Top Creator',
              value: leaderboard[0]?.creator || 'N/A',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-lg text-center glow-pink"
            >
              <p className="text-slate-400 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
