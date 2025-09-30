import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import LigninDatabase from './components/LigninDatabase'
import IonicLiquidDatabase from './components/IonicLiquidDatabase'
import HybridDatabase from './components/HybridDatabase'
import Analytics from './components/Analytics'
import About from './components/About'

function App() {
  return (
    <Router basename="/lignin-database-website">
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lignin" element={<LigninDatabase />} />
          <Route path="/ionic-liquids" element={<IonicLiquidDatabase />} />
          <Route path="/hybrid-systems" element={<HybridDatabase />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
