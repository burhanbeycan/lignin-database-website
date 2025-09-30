import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [counters, setCounters] = useState({
    lignin: 0,
    ionic: 0,
    hybrid: 0,
    descriptors: 0
  })

  useEffect(() => {
    const targets = { lignin: 5000, ionic: 2000, hybrid: 5000, descriptors: 272 }
    const duration = 2000
    const steps = 60

    Object.keys(targets).forEach(key => {
      const increment = targets[key] / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= targets[key]) {
          current = targets[key]
          clearInterval(timer)
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, duration / steps)
    })
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Machine Learning-Driven Lignin Materials Discovery
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Comprehensive database of lignin-ionic liquid hybrid electrolytes for sustainable energy storage applications. 
            Accelerating materials discovery through AI-powered molecular design and optimization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-counter">
              <div className="text-3xl font-bold mb-2">{counters.lignin.toLocaleString()}</div>
              <div className="text-sm opacity-90">Lignin Structures</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-counter">
              <div className="text-3xl font-bold mb-2">{counters.ionic.toLocaleString()}</div>
              <div className="text-sm opacity-90">Ionic Liquids</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-counter">
              <div className="text-3xl font-bold mb-2">{counters.hybrid.toLocaleString()}</div>
              <div className="text-sm opacity-90">Hybrid Systems</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-counter">
              <div className="text-3xl font-bold mb-2">{counters.descriptors}</div>
              <div className="text-sm opacity-90">Descriptors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Database Explorer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🔍 Explore the Database</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive datasets with advanced search, filtering, and visualization capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/lignin" className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 card-hover">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Browse Lignin Structures</h3>
              <p className="text-green-700 mb-6">
                Explore 5,000 lignin molecular structures with detailed descriptors, families, and properties.
              </p>
              <div className="space-y-2 text-sm text-green-600">
                <div>• Guaiacyl, Syringyl, p-Hydroxyphenyl families</div>
                <div>• 54 molecular descriptors per structure</div>
                <div>• Hardwood, Softwood, Grass sources</div>
              </div>
            </Link>

            <Link to="/ionic" className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 card-hover">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Explore Ionic Liquids</h3>
              <p className="text-blue-700 mb-6">
                Discover 2,000 ionic liquid combinations with electrochemical properties and performance data.
              </p>
              <div className="space-y-2 text-sm text-blue-600">
                <div>• EMIM, BMIM, HMIM, OMIM cations</div>
                <div>• BF4, PF6, Tf2N, OTf anions</div>
                <div>• Conductivity, viscosity, capacity data</div>
              </div>
            </Link>

            <Link to="/hybrid" className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 card-hover">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-purple-800 mb-4">View Hybrid Systems</h3>
              <p className="text-purple-700 mb-6">
                Analyze 5,000 optimized lignin-IL formulations with ML-predicted performance metrics.
              </p>
              <div className="space-y-2 text-sm text-purple-600">
                <div>• Multi-objective optimization results</div>
                <div>• Performance predictions (R² &gt; 0.9)</div>
                <div>• Sustainability indicators</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🏆 Key Research Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Outstanding performance achievements through machine learning optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">25 mS/cm</div>
              <div className="text-gray-600">Max Conductivity</div>
              <div className="text-sm text-gray-500 mt-1">Exceeds commercial standards</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">280 mAh/g</div>
              <div className="text-gray-600">Peak Capacity</div>
              <div className="text-sm text-gray-500 mt-1">Optimal formulations</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">35.7%</div>
              <div className="text-gray-600">Carbon Reduction</div>
              <div className="text-sm text-gray-500 mt-1">vs conventional electrolytes</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">127</div>
              <div className="text-gray-600">Pareto Solutions</div>
              <div className="text-sm text-gray-500 mt-1">Multi-objective optimized</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

