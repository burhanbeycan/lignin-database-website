import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const stats = [
    { label: 'Lignin Structures', value: '5,000+', icon: '🧬', color: 'text-primary-600' },
    { label: 'Ionic Liquids', value: '2,000+', icon: '⚡', color: 'text-secondary-600' },
    { label: 'Hybrid Systems', value: '5,000+', icon: '🔬', color: 'text-purple-600' },
    { label: 'ML Predictions', value: '12,000+', icon: '🤖', color: 'text-orange-600' }
  ]

  const features = [
    {
      title: 'Browse Lignin Structures',
      description: 'Explore comprehensive database of lignin molecular structures with detailed properties',
      icon: '🧬',
      link: '/lignin',
      color: 'bg-primary-500'
    },
    {
      title: 'Explore Ionic Liquids',
      description: 'Discover ionic liquid combinations optimized for battery applications',
      icon: '⚡',
      link: '/ionic-liquids',
      color: 'bg-secondary-500'
    },
    {
      title: 'Hybrid Systems',
      description: 'Analyze lignin-ionic liquid hybrid formulations with performance predictions',
      icon: '🔬',
      link: '/hybrids',
      color: 'bg-purple-500'
    },
    {
      title: 'View Analytics',
      description: 'Interactive visualizations and statistical analysis of performance data',
      icon: '📊',
      link: '/analytics',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Lignin Materials Database
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Machine Learning-Driven Platform for Sustainable Energy Storage Materials Discovery
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/lignin"
            className="btn-primary text-lg px-8 py-3"
          >
            🚀 Explore Database
          </Link>
          <Link
            to="/about"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
          >
            📚 Learn More
          </Link>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card text-center hover:shadow-md transition-shadow duration-200">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Explore the Database</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access comprehensive datasets with advanced search, filtering, and visualization capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="card hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-200`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Research Applications */}
      <div className="card bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">🔬 Research Applications</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Advancing sustainable battery materials through lignin valorization and machine learning-guided optimization
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center space-y-2">
              <div className="text-2xl">🔋</div>
              <h3 className="font-semibold text-gray-900">Sustainable Batteries</h3>
              <p className="text-sm text-gray-600">Bio-based electrolytes for next-generation energy storage</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl">🌱</div>
              <h3 className="font-semibold text-gray-900">Lignin Valorization</h3>
              <p className="text-sm text-gray-600">Converting biomass waste into valuable materials</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl">🤖</div>
              <h3 className="font-semibold text-gray-900">ML Optimization</h3>
              <p className="text-sm text-gray-600">AI-driven materials discovery and screening</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">📚 Data Sources</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-500 pl-4 py-2">
            <div className="font-semibold text-gray-900">Lignin Database</div>
            <div className="text-sm text-gray-600">
              Eswaran, S.C.D. et al. <em>Scientific Data</em> <strong>9</strong>, 647 (2022)
            </div>
          </div>
          <div className="border-l-4 border-secondary-500 pl-4 py-2">
            <div className="font-semibold text-gray-900">Ionic Liquids</div>
            <div className="text-sm text-gray-600">
              Shobayo, O. et al. <em>Electrochimica Acta</em> <strong>441</strong>, 141824 (2023)
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900">Ready to Explore?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Start discovering optimal lignin-ionic liquid combinations for your sustainable energy applications
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/lignin"
            className="btn-primary text-lg px-8 py-3"
          >
            🧬 Browse Lignin Structures
          </Link>
          <Link
            to="/analytics"
            className="btn-secondary text-lg px-8 py-3"
          >
            📊 View Analytics
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage

