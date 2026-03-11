import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Landing() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen pt-20 px-4 overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center py-20"
        >
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            AI Agents Marketplace
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            Discover, create, and deploy AI-powered agents. Build your digital workforce today.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/marketplace">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition glow"
              >
                Explore Agents
              </motion.button>
            </Link>

            <Link to="/publish">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition"
              >
                Publish Yours
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20"
        >
          {[
            { number: '500+', label: 'AI Agents' },
            { number: '50K+', label: 'Active Users' },
            { number: '1M+', label: 'Total Downloads' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-lg text-center glow"
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-slate-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <div className="py-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 gradient-text"
          >
            Why Choose AgentHub?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Easy Discovery',
                description: 'Browse thousands of AI agents across multiple categories',
                icon: '🔍',
              },
              {
                title: 'Quick Setup',
                description: 'Get started in minutes with simple configuration',
                icon: '⚡',
              },
              {
                title: 'Monetize',
                description: 'Start earning by creating and selling your own agents',
                icon: '💰',
              },
              {
                title: 'Community',
                description: 'Join a vibrant community of AI creators',
                icon: '👥',
              },
              {
                title: 'Analytics',
                description: 'Track performance with detailed insights',
                icon: '📊',
              },
              {
                title: 'Support',
                description: '24/7 support from our dedicated team',
                icon: '🤝',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="glass p-8 rounded-lg glow-pink"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">
                  {feature.title}
                </h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
