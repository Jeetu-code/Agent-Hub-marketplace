import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { agents, categories } from '../lib/mockData'
import AgentCard from '../components/AgentCard'

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('downloads')

  const filteredAgents = useMemo(() => {
    let result = agents

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(agent => agent.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter(agent =>
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort
    if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating)
    } else if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price)
    } else {
      result = [...result].sort((a, b) => b.downloads - a.downloads)
    }

    return result
  }, [selectedCategory, searchTerm, sortBy])

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            AI Agent Marketplace
          </h1>
          <p className="text-slate-300 text-lg">
            Discover powerful AI agents tailored for your needs
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <input
            type="text"
            placeholder="Search agents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
          />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          {/* Category Filter */}
          <div className="flex-1 overflow-x-auto pb-2">
            <div className="flex gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-slate-950 font-bold glow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Sort Filter */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-slate-800 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="downloads">Most Downloaded</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </motion.div>

        {/* Agents Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
        >
          {filteredAgents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/agent/${agent.id}`}>
                <AgentCard agent={agent} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredAgents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-slate-300 mb-4">No agents found</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="px-6 py-2 bg-cyan-500 text-slate-950 rounded-lg hover:bg-cyan-400 transition font-bold"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
