import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [stats, setStats] = useState({
    ligninStructures: 0,
    ionicLiquids: 0,
    hybridSystems: 0,
    descriptors: 0
  })

  useEffect(() => {
    // Animate counters
    const targets = {
      ligninStructures: 5000,
      ionicLiquids: 2000,
      hybridSystems: 5000,
      descriptors: 272
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setStats({
        ligninStructures: Math.floor(targets.ligninStructures * progress),
        ionicLiquids: Math.floor(targets.ionicLiquids * progress),
        hybridSystems: Math.floor(targets.hybridSystems * progress),
        descriptors: Math.floor(targets.descriptors * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setStats(targets)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Lignin Materials Database
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Machine Learning-Driven Design of Lignin-Ionic Liquid Hybrid Electrolytes 
              for Sustainable Energy Storage Applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/lignin"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Database
              </Link>
              <Link
                to="/analytics"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View Analytics
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comprehensive Research Database
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stats.ligninStructures.toLocaleString()}
              </div>
              <div className="text-gray-700 font-medium">Lignin Structures</div>
              <div className="text-sm text-gray-500 mt-1">With molecular descriptors</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {stats.ionicLiquids.toLocaleString()}
              </div>
              <div className="text-gray-700 font-medium">Ionic Liquids</div>
              <div className="text-sm text-gray-500 mt-1">Electrochemical properties</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {stats.hybridSystems.toLocaleString()}
              </div>
              <div className="text-gray-700 font-medium">Hybrid Systems</div>
              <div className="text-sm text-gray-500 mt-1">ML-optimized formulations</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {stats.descriptors}
              </div>
              <div className="text-gray-700 font-medium">Descriptors</div>
              <div className="text-sm text-gray-500 mt-1">Molecular features</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Research Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🧬</div>
              <h3 className="text-xl font-semibold mb-3">Lignin Database</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive collection of lignin molecular structures with detailed 
                physicochemical and topological descriptors.
              </p>
              <Link to="/lignin" className="text-blue-600 font-medium hover:text-blue-700">
                Explore Structures →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Ionic Liquids</h3>
              <p className="text-gray-600 mb-4">
                Electrochemical properties and performance metrics for ionic liquid 
                combinations in battery applications.
              </p>
              <Link to="/ionic-liquids" className="text-blue-600 font-medium hover:text-blue-700">
                View Properties →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-3">Hybrid Systems</h3>
              <p className="text-gray-600 mb-4">
                ML-optimized lignin-ionic liquid combinations with predicted 
                performance and sustainability metrics.
              </p>
              <Link to="/hybrid-systems" className="text-blue-600 font-medium hover:text-blue-700">
                Analyze Systems →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Interactive visualizations, performance analysis, and statistical 
                insights across all databases.
              </p>
              <Link to="/analytics" className="text-blue-600 font-medium hover:text-blue-700">
                View Analytics →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">ML Optimization</h3>
              <p className="text-gray-600 mb-4">
                Multi-objective optimization results with Pareto-optimal solutions 
                for sustainable battery materials.
              </p>
              <Link to="/analytics" className="text-blue-600 font-medium hover:text-blue-700">
                See Results →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">Research Documentation</h3>
              <p className="text-gray-600 mb-4">
                Complete methodology, data sources, citations, and technical 
                documentation for reproducible research.
              </p>
              <Link to="/about" className="text-blue-600 font-medium hover:text-blue-700">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Results Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Research Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">25 mS/cm</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">Maximum Conductivity</div>
              <div className="text-sm text-gray-600">67% improvement over baseline electrolytes</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">280 mAh/g</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">Peak Capacity</div>
              <div className="text-sm text-gray-600">Optimal hybrid formulations</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">35.7%</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">Carbon Reduction</div>
              <div className="text-sm text-gray-600">vs conventional electrolyte systems</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Advance Sustainable Energy Storage Research
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our comprehensive database and contribute to the development of 
            environmentally friendly battery materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/lignin"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Exploring
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

