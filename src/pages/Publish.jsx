import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Publish() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Writing',
    price: 29,
    features: '',
    tags: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const categories = ['Writing', 'Data', 'Development', 'Design', 'Audio', 'Analytics', 'Image', 'Marketing']

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold gradient-text mb-4">
            Publish Your Agent
          </h1>
          <p className="text-xl text-slate-300">
            Share your creation with our community and start earning
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass p-8 rounded-lg space-y-6 glow"
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-lg font-bold text-cyan-400 mb-2">
              Agent Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., ContentMaster AI"
              required
              className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-lg font-bold text-cyan-400 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what your agent does..."
              required
              rows="4"
              className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition resize-none"
            />
          </motion.div>

          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-lg font-bold text-cyan-400 mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <label className="block text-lg font-bold text-cyan-400 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="1"
              className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
            />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-lg font-bold text-cyan-400 mb-2">
              Key Features (comma-separated)
            </label>
            <textarea
              name="features"
              value={formData.features}
              onChange={handleChange}
              placeholder="e.g., Real-time updates, Custom themes, Export options"
              rows="3"
              className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition resize-none"
            />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <label className="block text-lg font-bold text-cyan-400 mb-2">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="e.g., automation, productivity, ai"
              className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition glow text-lg"
          >
            {submitted ? 'Submitted! ✓' : 'Publish Agent'}
          </motion.button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-cyan-500/20 border border-cyan-500 rounded-lg text-center text-cyan-400"
            >
              Great! Your agent is being reviewed. We'll notify you soon!
            </motion.div>
          )}
        </motion.form>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 glass p-8 rounded-lg glow-pink"
        >
          <h3 className="text-xl font-bold text-cyan-400 mb-4">
            Before you publish:
          </h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">✓</span>
              <span>Ensure your agent is fully tested and working properly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">✓</span>
              <span>Provide clear, detailed descriptions of functionality</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">✓</span>
              <span>Include relevant documentation or examples</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">✓</span>
              <span>Set a competitive price for your market segment</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
