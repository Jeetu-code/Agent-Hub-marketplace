import { motion } from 'framer-motion'

export default function AgentCard({ agent }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass rounded-lg overflow-hidden group cursor-pointer glow-purple"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900">
        <img
          src={agent.image}
          alt={agent.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 bg-cyan-500 text-slate-950 px-3 py-1 rounded-full text-sm font-bold">
          ${agent.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-cyan-400 mb-2 line-clamp-1">
          {agent.name}
        </h3>

        <p className="text-sm text-slate-300 mb-4 line-clamp-2 h-10">
          {agent.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < Math.floor(agent.rating) ? 'text-cyan-400' : 'text-slate-600'}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-slate-300">
            {agent.rating} ({agent.reviews})
          </span>
        </div>

        {/* Creator & Downloads */}
        <div className="space-y-2 text-sm text-slate-400">
          <div>By: {agent.creator}</div>
          <div>{agent.downloads.toLocaleString()} downloads</div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {agent.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-800 text-cyan-400 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
