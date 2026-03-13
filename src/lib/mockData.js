export const agentCategories = ['Productivity', 'Coding', 'Research', 'Marketing', 'Web3']

export const agents = [
  {
    id: 'resume-analyzer',
    icon: '📄',
    name: 'Resume Analyzer',
    description: 'Get actionable feedback on resume clarity, ATS score, and role-fit suggestions in seconds.',
    category: 'Productivity',
    creator: 'Nora Patel',
    rating: 4.8,
    totalRuns: 15420,
    tags: ['resume', 'career', 'ats'],
  },
  {
    id: 'startup-idea-validator',
    icon: '🚀',
    name: 'Startup Idea Validator',
    description: 'Validate startup concepts with market sizing, competitor landscape, and risk analysis.',
    category: 'Research',
    creator: 'Leo Zhang',
    rating: 4.7,
    totalRuns: 12380,
    tags: ['startup', 'market research', 'strategy'],
  },
  {
    id: 'research-paper-summarizer',
    icon: '🧠',
    name: 'Research Paper Summarizer',
    description: 'Turn long academic papers into concise summaries, highlights, and key takeaways.',
    category: 'Research',
    creator: 'Ava Kim',
    rating: 4.9,
    totalRuns: 19240,
    tags: ['academia', 'summary', 'science'],
  },
  {
    id: 'social-media-post-generator',
    icon: '📣',
    name: 'Social Media Post Generator',
    description: 'Generate platform-optimized post ideas and captions with brand-aligned tone.',
    category: 'Marketing',
    creator: 'Ethan Brooks',
    rating: 4.6,
    totalRuns: 21900,
    tags: ['content', 'social', 'growth'],
  },
  {
    id: 'smart-code-reviewer',
    icon: '💻',
    name: 'Smart Code Reviewer',
    description: 'Analyze pull requests for bugs, readability, and performance optimizations.',
    category: 'Coding',
    creator: 'Mia Singh',
    rating: 4.8,
    totalRuns: 17110,
    tags: ['code', 'review', 'quality'],
  },
  {
    id: 'defi-risk-scanner',
    icon: '🔐',
    name: 'DeFi Risk Scanner',
    description: 'Inspect smart contract and protocol risk factors with easy-to-read scoring.',
    category: 'Web3',
    creator: 'Kai Morgan',
    rating: 4.5,
    totalRuns: 9880,
    tags: ['defi', 'risk', 'security'],
  },
]

export const leaderboard = [...agents]
  .sort((a, b) => b.totalRuns - a.totalRuns)
  .map((agent, index) => ({
    ...agent,
    rank: index + 1,
  }))
