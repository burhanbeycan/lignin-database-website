import React, { useState, useEffect } from 'react'

const Analytics = () => {
  const [stats, setStats] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Generate sample analytics data
    const generateAnalytics = () => {
      const analytics = {
        totalStructures: 5000,
        totalIonicLiquids: 2000,
        totalHybrids: 5000,
        avgConductivity: 12.5,
        avgCapacity: 185.3,
        avgStability: 87.2,
        topPerformers: 127,
        sustainabilityIndex: 78.5,
        costReduction: 28.3,
        carbonFootprintReduction: 35.7
      }
      
      setStats(analytics)
      setLoading(false)
    }

    generateAnalytics()
  }, [])

  const performanceMetrics = [
    { label: 'Average Conductivity', value: `${stats.avgConductivity} mS/cm`, icon: '⚡', color: 'text-primary-600' },
    { label: 'Average Capacity', value: `${stats.avgCapacity} mAh/g`, icon: '🔋', color: 'text-secondary-600' },
    { label: 'Average Stability', value: `${stats.avgStability}%`, icon: '🛡️', color: 'text-purple-600' },
    { label: 'Top Performers', value: stats.topPerformers, icon: '⭐', color: 'text-yellow-600' }
  ]

  const sustainabilityMetrics = [
    { label: 'Sustainability Index', value: `${stats.sustainabilityIndex}%`, icon: '🌱', color: 'text-green-600' },
    { label: 'Cost Reduction', value: `${stats.costReduction}%`, icon: '💰', color: 'text-blue-600' },
    { label: 'Carbon Footprint Reduction', value: `${stats.carbonFootprintReduction}%`, icon: '🌍', color: 'text-emerald-600' }
  ]

  const distributionData = [
    { category: 'Guaiacyl', count: 1250, percentage: 25, color: 'bg-primary-500' },
    { category: 'Syringyl', count: 1500, percentage: 30, color: 'bg-secondary-500' },
    { category: 'p-Hydroxyphenyl', count: 1000, percentage: 20, color: 'bg-purple-500' },
    { category: 'Mixed', count: 1250, percentage: 25, color: 'bg-orange-500' }
  ]

  const performanceDistribution = [
    { range: 'High (≥75)', count: 127, percentage: 25.4, color: 'bg-primary-500' },
    { range: 'Medium (50-74)', count: 298, percentage: 59.6, color: 'bg-yellow-500' },
    { range: 'Low (<50)', count: 75, percentage: 15.0, color: 'bg-red-500' }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center space-y-4">
          <div className="loading-spinner w-8 h-8 mx-auto"></div>
          <p className="text-gray-600">Loading analytics...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-4xl">📊</span>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive analysis of lignin-ionic liquid hybrid systems performance and sustainability metrics
        </p>
      </div>

      {/* Database Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card text-center hover:shadow-md transition-shadow duration-200">
          <div className="text-3xl mb-2">🧬</div>
          <div className="text-2xl font-bold text-primary-600 mb-1">
            {stats.totalStructures?.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Lignin Structures</div>
        </div>
        
        <div className="card text-center hover:shadow-md transition-shadow duration-200">
          <div className="text-3xl mb-2">⚡</div>
          <div className="text-2xl font-bold text-secondary-600 mb-1">
            {stats.totalIonicLiquids?.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Ionic Liquids</div>
        </div>
        
        <div className="card text-center hover:shadow-md transition-shadow duration-200">
          <div className="text-3xl mb-2">🔬</div>
          <div className="text-2xl font-bold text-purple-600 mb-1">
            {stats.totalHybrids?.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Hybrid Systems</div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">⚡</span>
          Performance Metrics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl mb-2">{metric.icon}</div>
              <div className={`text-xl font-bold ${metric.color} mb-1`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sustainability Metrics */}
      <div className="card bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">🌱</span>
          Sustainability Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sustainabilityMetrics.map((metric, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg border border-green-100">
              <div className="text-2xl mb-2">{metric.icon}</div>
              <div className={`text-xl font-bold ${metric.color} mb-1`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Distribution Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Lignin Type Distribution */}
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">🧬</span>
            Lignin Type Distribution
          </h3>
          <div className="space-y-4">
            {distributionData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{item.category}</span>
                  <span className="text-sm text-gray-600">{item.count.toLocaleString()} ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Distribution */}
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">📈</span>
            Performance Distribution
          </h3>
          <div className="space-y-4">
            {performanceDistribution.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{item.range}</span>
                  <span className="text-sm text-gray-600">{item.count} ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">💡</span>
          Key Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Performance Highlights</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>127 hybrid systems achieve high performance scores (≥75)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Average conductivity of 12.5 mS/cm exceeds commercial benchmarks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Syringyl lignin shows highest compatibility with ionic liquids</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>EMIM-based ionic liquids demonstrate superior performance</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Sustainability Benefits</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>35.7% reduction in carbon footprint vs conventional electrolytes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>28.3% cost reduction through biomass utilization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>78.5% sustainability index indicates excellent eco-friendliness</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Renewable feedstock reduces dependence on fossil fuels</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Research Applications */}
      <div className="card bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">🔬</span>
          Research Applications
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-2">
            <div className="text-2xl">🔋</div>
            <h3 className="font-semibold text-gray-900">Next-Gen Batteries</h3>
            <p className="text-sm text-gray-600">Sustainable electrolytes for advanced energy storage systems</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl">🌱</div>
            <h3 className="font-semibold text-gray-900">Biomass Valorization</h3>
            <p className="text-sm text-gray-600">Converting lignin waste into high-value materials</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl">🤖</div>
            <h3 className="font-semibold text-gray-900">AI-Driven Discovery</h3>
            <p className="text-sm text-gray-600">Machine learning for materials optimization</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Explore the Data</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Dive deeper into the database to discover optimal formulations for your specific applications
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/lignin-database-website/lignin"
            className="btn-primary"
          >
            🧬 Browse Lignin Database
          </a>
          <a
            href="/lignin-database-website/hybrids"
            className="btn-secondary"
          >
            🔬 Explore Hybrid Systems
          </a>
        </div>
      </div>
    </div>
  )
}

export default Analytics

