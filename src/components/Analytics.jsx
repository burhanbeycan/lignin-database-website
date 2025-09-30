import React, { useState, useEffect } from 'react'
import { BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react'

const Analytics = () => {
  const [data, setData] = useState({
    lignin: [],
    ionicLiquids: [],
    hybrids: []
  })
  const [loading, setLoading] = useState(true)

  // Generate sample data for analytics
  useEffect(() => {
    const generateAnalyticsData = () => {
      // Generate lignin data
      const ligninData = Array.from({ length: 100 }, (_, i) => ({
        molecular_weight: 150 + Math.random() * 200,
        logP: Math.random() * 6 - 1,
        conductivity: Math.random() * 20,
        stability: 70 + Math.random() * 30,
        family: ['Guaiacyl', 'Syringyl', 'p-Hydroxyphenyl', 'Mixed'][Math.floor(Math.random() * 4)]
      }))

      // Generate ionic liquid data
      const ilData = Array.from({ length: 100 }, (_, i) => ({
        molecular_weight: 200 + Math.random() * 400,
        conductivity: 0.1 + Math.random() * 15,
        viscosity: 10 + Math.random() * 200,
        electrochemical_window: 2.0 + Math.random() * 4.0,
        capacity: 100 + Math.random() * 150,
        cation: ['EMIM', 'BMIM', 'HMIM', 'OMIM'][Math.floor(Math.random() * 4)]
      }))

      // Generate hybrid data
      const hybridData = Array.from({ length: 100 }, (_, i) => ({
        conductivity: Math.random() * 25,
        capacity: 100 + Math.random() * 200,
        stability: 70 + Math.random() * 30,
        efficiency: 80 + Math.random() * 20,
        performance_score: Math.random() * 100,
        lignin_ratio: 10 + Math.random() * 40
      }))

      setData({
        lignin: ligninData,
        ionicLiquids: ilData,
        hybrids: hybridData
      })
      setLoading(false)
    }

    generateAnalyticsData()
  }, [])

  // Simple chart component using CSS and HTML (fallback for Plotly)
  const SimpleBarChart = ({ data, title, xLabel, yLabel, color = '#3b82f6' }) => {
    const maxValue = Math.max(...data.map(d => d.y))
    
    return (
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <div className="space-y-2">
          {data.slice(0, 8).map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-16 text-sm text-gray-600 truncate">{item.x}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                <div 
                  className="h-4 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${(item.y / maxValue) * 100}%`,
                    backgroundColor: color 
                  }}
                />
                <span className="absolute right-2 top-0 text-xs text-gray-700 leading-4">
                  {typeof item.y === 'number' ? item.y.toFixed(1) : item.y}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const SimpleScatterPlot = ({ data, title, xLabel, yLabel, color = '#10b981' }) => {
    const maxX = Math.max(...data.map(d => d.x))
    const maxY = Math.max(...data.map(d => d.y))
    const minX = Math.min(...data.map(d => d.x))
    const minY = Math.min(...data.map(d => d.y))
    
    return (
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <div className="relative bg-gray-50 rounded-lg p-4" style={{ height: '300px' }}>
          <div className="absolute bottom-0 left-0 w-full h-full">
            <svg width="100%" height="100%" className="overflow-visible">
              {data.slice(0, 50).map((point, index) => {
                const x = ((point.x - minX) / (maxX - minX)) * 90 + 5
                const y = 90 - ((point.y - minY) / (maxY - minY)) * 80
                return (
                  <circle
                    key={index}
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="3"
                    fill={color}
                    opacity="0.7"
                    className="hover:opacity-100 transition-opacity"
                  />
                )
              })}
            </svg>
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
            {xLabel}
          </div>
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-gray-600">
            {yLabel}
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center space-y-4">
          <div className="loading-spinner w-8 h-8 mx-auto"></div>
          <p className="text-gray-600">Loading analytics data...</p>
        </div>
      </div>
    )
  }

  // Prepare chart data
  const ligninFamilyData = data.lignin.reduce((acc, item) => {
    acc[item.family] = (acc[item.family] || 0) + 1
    return acc
  }, {})

  const cationDistribution = data.ionicLiquids.reduce((acc, item) => {
    acc[item.cation] = (acc[item.cation] || 0) + 1
    return acc
  }, {})

  const performanceDistribution = data.hybrids.reduce((acc, item) => {
    const range = item.performance_score < 30 ? 'Low' :
                  item.performance_score < 60 ? 'Medium' :
                  item.performance_score < 80 ? 'High' : 'Excellent'
    acc[range] = (acc[range] || 0) + 1
    return acc
  }, {})

  const ligninFamilyChartData = Object.entries(ligninFamilyData).map(([family, count]) => ({
    x: family,
    y: count
  }))

  const cationChartData = Object.entries(cationDistribution).map(([cation, count]) => ({
    x: cation,
    y: count
  }))

  const performanceChartData = Object.entries(performanceDistribution).map(([range, count]) => ({
    x: range,
    y: count
  }))

  const conductivityCapacityData = data.hybrids.map(item => ({
    x: item.conductivity,
    y: item.capacity
  }))

  const stabilityEfficiencyData = data.hybrids.map(item => ({
    x: item.stability,
    y: item.efficiency
  }))

  // Calculate statistics
  const avgConductivity = data.hybrids.reduce((sum, item) => sum + item.conductivity, 0) / data.hybrids.length
  const avgCapacity = data.hybrids.reduce((sum, item) => sum + item.capacity, 0) / data.hybrids.length
  const avgStability = data.hybrids.reduce((sum, item) => sum + item.stability, 0) / data.hybrids.length
  const avgPerformance = data.hybrids.reduce((sum, item) => sum + item.performance_score, 0) / data.hybrids.length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <BarChart3 className="w-8 h-8 text-primary-600" />
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Interactive visualizations and statistical analysis of lignin-ionic liquid hybrid systems
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Activity className="w-6 h-6 text-primary-600" />
          </div>
          <div className="text-2xl font-bold text-primary-600 mb-1">
            {avgConductivity.toFixed(2)}
          </div>
          <div className="text-sm text-gray-600">Avg Conductivity (mS/cm)</div>
        </div>

        <div className="card text-center">
          <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="w-6 h-6 text-secondary-600" />
          </div>
          <div className="text-2xl font-bold text-secondary-600 mb-1">
            {avgCapacity.toFixed(0)}
          </div>
          <div className="text-sm text-gray-600">Avg Capacity (mAh/g)</div>
        </div>

        <div className="card text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <PieChart className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-600 mb-1">
            {avgStability.toFixed(1)}%
          </div>
          <div className="text-sm text-gray-600">Avg Stability</div>
        </div>

        <div className="card text-center">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <BarChart3 className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-emerald-600 mb-1">
            {avgPerformance.toFixed(1)}
          </div>
          <div className="text-sm text-gray-600">Avg Performance Score</div>
        </div>
      </div>

      {/* Distribution Charts */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <SimpleBarChart
            data={ligninFamilyChartData}
            title="Lignin Family Distribution"
            xLabel="Lignin Family"
            yLabel="Count"
            color="#3b82f6"
          />
        </div>

        <div className="card">
          <SimpleBarChart
            data={cationChartData}
            title="Ionic Liquid Cation Distribution"
            xLabel="Cation Type"
            yLabel="Count"
            color="#10b981"
          />
        </div>

        <div className="card">
          <SimpleBarChart
            data={performanceChartData}
            title="Performance Score Distribution"
            xLabel="Performance Range"
            yLabel="Count"
            color="#8b5cf6"
          />
        </div>

        <div className="card">
          <SimpleScatterPlot
            data={conductivityCapacityData}
            title="Conductivity vs Capacity"
            xLabel="Conductivity (mS/cm)"
            yLabel="Capacity (mAh/g)"
            color="#f59e0b"
          />
        </div>
      </div>

      {/* Correlation Analysis */}
      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Performance Correlation Analysis</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <SimpleScatterPlot
              data={stabilityEfficiencyData}
              title="Stability vs Efficiency"
              xLabel="Cycle Stability (%)"
              yLabel="Coulombic Efficiency (%)"
              color="#ef4444"
            />
          </div>
          
          <div className="space-y-6">
            <h4 className="font-semibold text-gray-900">Key Insights</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                <div>
                  <strong>High Conductivity Systems:</strong> {data.hybrids.filter(h => h.conductivity > 15).length} systems show conductivity &gt; 15 mS/cm, indicating excellent ionic transport properties.
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2"></div>
                <div>
                  <strong>Optimal Capacity Range:</strong> {data.hybrids.filter(h => h.capacity > 200).length} systems achieve capacity &gt; 200 mAh/g, suitable for high-energy applications.
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <strong>Stability Performance:</strong> {data.hybrids.filter(h => h.stability > 90).length} systems maintain &gt; 90% stability after cycling, ensuring long-term reliability.
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                <div>
                  <strong>Top Performers:</strong> {data.hybrids.filter(h => h.performance_score > 80).length} systems achieve performance scores &gt; 80, representing the most promising candidates.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Recommendations */}
      <div className="card bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Optimization Recommendations</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">For High Conductivity:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Focus on EMIM and BMIM-based ionic liquids</li>
              <li>• Optimize lignin ratio between 15-25%</li>
              <li>• Consider Tf2N and BF4 anions for better mobility</li>
              <li>• Target molecular weight range 200-350 g/mol</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">For High Capacity:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Utilize mixed lignin types for enhanced performance</li>
              <li>• Optimize electrochemical window &gt; 4V</li>
              <li>• Balance viscosity and ionic conductivity</li>
              <li>• Consider temperature stability requirements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics

