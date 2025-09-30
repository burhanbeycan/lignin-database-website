import React from 'react'
import { Link } from 'react-router-dom'
import { Database, BarChart3, Beaker, Atom, ArrowRight, Search, Download, Zap } from 'lucide-react'

const HomePage = () => {
  const stats = [
    { number: '5,000', label: 'Lignin Structures', color: 'text-primary-600' },
    { number: '2,000', label: 'Ionic Liquids', color: 'text-secondary-600' },
    { number: '5,000', label: 'Hybrid Systems', color: 'text-purple-600' },
    { number: '100+', label: 'Descriptors', color: 'text-emerald-600' },
  ]

  const features = [
    {
      icon: Search,
      title: 'Advanced Search & Filtering',
      description: 'Real-time search across molecular structures, properties, and performance metrics with intelligent filtering capabilities.',
      color: 'text-primary-600',
      bg: 'bg-primary-50'
    },
    {
      icon: BarChart3,
      title: 'Interactive Analytics',
      description: 'Dynamic visualizations with Plotly.js showing performance relationships, distributions, and correlation analysis.',
      color: 'text-secondary-600',
      bg: 'bg-secondary-50'
    },
    {
      icon: Zap,
      title: 'ML-Driven Insights',
      description: 'Machine learning predictions for hybrid electrolyte performance with R² values >0.9 for key properties.',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: Download,
      title: 'Data Export',
      description: 'Export filtered datasets in CSV format for further analysis and integration with your research workflow.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    }
  ]

  const quickLinks = [
    {
      to: '/lignin',
      icon: Atom,
      title: 'Browse Lignin Structures',
      description: 'Explore 5,000 lignin structures with comprehensive molecular descriptors',
      color: 'bg-primary-600 hover:bg-primary-700'
    },
    {
      to: '/ionic-liquids',
      icon: Beaker,
      title: 'Explore Ionic Liquids',
      description: 'Discover 2,000 ionic liquid combinations with electrochemical properties',
      color: 'bg-secondary-600 hover:bg-secondary-700'
    },
    {
      to: '/analytics',
      icon: BarChart3,
      title: 'View Analytics',
      description: 'Interactive visualizations and performance analysis dashboard',
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            🧬 Lignin Materials Database
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Interactive ML-driven platform for exploring lignin-ionic liquid hybrid electrolytes for sustainable energy storage applications
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/lignin"
            className="btn-primary flex items-center space-x-2 px-6 py-3 text-lg"
          >
            <Database className="w-5 h-5" />
            <span>Explore Database</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/analytics"
            className="btn-secondary flex items-center space-x-2 px-6 py-3 text-lg"
          >
            <BarChart3 className="w-5 h-5" />
            <span>View Analytics</span>
          </Link>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card text-center">
            <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
              {stat.number}
            </div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Key Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced tools and capabilities designed for materials science research and sustainable energy applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="card hover:shadow-md transition-shadow duration-200">
                <div className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Links */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🚀 Explore the Database</h2>
          <p className="text-lg text-gray-600">
            Access comprehensive datasets with advanced search, filtering, and visualization capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Link
                key={index}
                to={link.to}
                className={`${link.color} text-white p-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Icon className="w-6 h-6" />
                  <h3 className="text-lg font-semibold">{link.title}</h3>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">{link.description}</p>
                <div className="flex items-center space-x-2 mt-4 text-white/80">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Data Sources */}
      <div className="card bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">📚 Data Sources</h3>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Lignin Database:</strong> Eswaran, S.C.D. et al. <em>Sci. Data</em> <strong>9</strong>, 647 (2022)
            </p>
            <p>
              <strong>Ionic Liquids:</strong> Shobayo, O. et al. <em>Electrochim. Acta</em> <strong>441</strong>, 141824 (2023)
            </p>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              <strong>🔬 Research Applications:</strong> Sustainable battery materials • Lignin valorization • Machine learning in materials science
            </p>
            <p className="text-gray-600 mt-2">
              <strong>💻 Technologies:</strong> React • Vite • Tailwind CSS • Plotly.js • Machine Learning
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

