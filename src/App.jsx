import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import AgentDetails from './pages/AgentDetails'
import Landing from './pages/Landing'
import Leaderboard from './pages/Leaderboard'
import Marketplace from './pages/Marketplace'
import Publish from './pages/Publish'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-900 text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/agent/:id" element={<AgentDetails />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
