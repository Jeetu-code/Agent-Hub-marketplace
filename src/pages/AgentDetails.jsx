import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { agents } from '../lib/mockData'

export default function AgentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const agent = agents.find(a => a.id === parseInt(id))
  const [purchased, setPurchased] = useState(false)

  if (!agent) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Agent Not Found</h1>
          <button
            onClick={() => navigate('/marketplace')}
            className="px-6 py-2 bg-cyan-500 text-slate-950 rounded-lg font-bold hover:bg-cyan-400"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-cyan-400 hover:text-cyan-300 transition flex items-center gap-2"
        >
          ← Back
        </button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-lg overflow-hidden mb-8 glow"
            >
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-96 object-cover"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl font-bold gradient-text mb-4">
                  {agent.name}
                </h1>
                <p className="text-xl text-slate-300 mb-6">
                  {agent.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex text-2xl">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < Math.floor(agent.rating) ? 'text-cyan-400' : 'text-slate-600'}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-lg text-slate-300">
                    {agent.rating} ({agent.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                {/* Creator Info */}
                <div className="glass p-6 rounded-lg mb-8">
                  <p className="text-slate-300 mb-2">Created by</p>
                  <p className="text-2xl font-bold text-cyan-400">{agent.creator}</p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  Key Features
                </h2>
                <div className="space-y-4">
                  {agent.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="glass p-4 rounded-lg flex items-center gap-4"
                    >
                      <div className="text-cyan-400 text-2xl">✓</div>
                      <div className="text-lg text-slate-200">{feature}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-800 text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-8 rounded-lg sticky top-24 glow"
            >
              <div className="text-4xl font-bold gradient-text mb-6 text-center">
                ${agent.price}
              </div>

              <button
                onClick={() => setPurchased(true)}
                className="w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition mb-4"
              >
                {purchased ? 'Purchased ✓' : 'Purchase Now'}
              </button>

              <button
                className="w-full py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition"
              >
                Add to Wishlist
              </button>

              {/* Stats */}
              <div className="mt-8 space-y-4">
                <div className="border-t border-cyan-500/20 pt-4">
                  <p className="text-slate-400 text-sm mb-1">Downloads</p>
                  <p className="text-2xl font-bold text-cyan-400">
                    {agent.downloads.toLocaleString()}
                  </p>
                </div>
                <div className="border-t border-cyan-500/20 pt-4">
                  <p className="text-slate-400 text-sm mb-1">Category</p>
                  <p className="text-xl font-bold text-cyan-400">
                    {agent.category}
                  </p>
                </div>
                <div className="border-t border-cyan-500/20 pt-4">
                  <p className="text-slate-400 text-sm mb-1">Rating</p>
                  <p className="text-xl font-bold text-cyan-400">
                    {agent.rating}/5.0
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
