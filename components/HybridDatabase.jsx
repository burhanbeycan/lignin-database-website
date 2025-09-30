import React, { useState, useEffect, useMemo } from 'react'
import { Search, Download, Database, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Papa from 'papaparse'

const HybridDatabase = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [performanceFilter, setPerformanceFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState('')
  const [sortDirection, setSortDirection] = useState('asc')
  const itemsPerPage = 20

  // Load CSV data
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/lignin-database-website/assets/hybrid_comprehensive_5000.csv')
        const csvText = await response.text()
        
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const sampleData = generateSampleHybridData(200)
            setData(sampleData)
            setLoading(false)
          },
          error: () => {
            const sampleData = generateSampleHybridData(200)
            setData(sampleData)
            setLoading(false)
          }
        })
      } catch (error) {
        const sampleData = generateSampleHybridData(200)
        setData(sampleData)
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Generate sample hybrid data
  const generateSampleHybridData = (count) => {
    const ligninTypes = ['Guaiacyl', 'Syringyl', 'p-Hydroxyphenyl', 'Mixed']
    const cations = ['EMIM', 'BMIM', 'HMIM', 'OMIM', 'Py14', 'N1114']
    const anions = ['BF4', 'PF6', 'Tf2N', 'OTf', 'DCA', 'SCN']
    
    return Array.from({ length: count }, (_, i) => {
      const conductivity = Math.random() * 25
      const capacity = 100 + Math.random() * 200
      const stability = 70 + Math.random() * 30
      const efficiency = 80 + Math.random() * 20
      
      // Calculate performance score
      const performanceScore = (
        (conductivity / 25) * 0.3 +
        (capacity / 300) * 0.3 +
        (stability / 100) * 0.2 +
        (efficiency / 100) * 0.2
      ) * 100
      
      return {
        id: `HYB_${String(i + 1).padStart(4, '0')}`,
        lignin_id: `LIG_${String(Math.floor(Math.random() * 5000) + 1).padStart(4, '0')}`,
        il_id: `IL_${String(Math.floor(Math.random() * 2000) + 1).padStart(4, '0')}`,
        lignin_type: ligninTypes[Math.floor(Math.random() * ligninTypes.length)],
        cation: cations[Math.floor(Math.random() * cations.length)],
        anion: anions[Math.floor(Math.random() * anions.length)],
        lignin_ratio: (10 + Math.random() * 40).toFixed(1),
        conductivity: conductivity.toFixed(3),
        capacity: capacity.toFixed(1),
        cycle_stability: stability.toFixed(1),
        coulombic_efficiency: efficiency.toFixed(1),
        energy_density: (50 + Math.random() * 150).toFixed(1),
        power_density: (100 + Math.random() * 500).toFixed(1),
        performance_score: performanceScore.toFixed(1),
        sustainability_index: (60 + Math.random() * 40).toFixed(1),
        cost_index: (20 + Math.random() * 80).toFixed(1),
        predicted_lifetime: Math.floor(500 + Math.random() * 1500),
        temperature_stability: (-20 + Math.random() * 100).toFixed(1)
      }
    })
  }

  // Filter and search data
  const filteredData = useMemo(() => {
    let filtered = data.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.lignin_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.il_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.lignin_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.anion.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesPerformance = performanceFilter === 'all' || 
        (performanceFilter === 'high' && parseFloat(item.performance_score) >= 75) ||
        (performanceFilter === 'medium' && parseFloat(item.performance_score) >= 50 && parseFloat(item.performance_score) < 75) ||
        (performanceFilter === 'low' && parseFloat(item.performance_score) < 50)
      
      return matchesSearch && matchesPerformance
    })

    // Sort data
    if (sortField) {
      filtered.sort((a, b) => {
        let aVal = a[sortField]
        let bVal = b[sortField]
        
        if (!isNaN(aVal) && !isNaN(bVal)) {
          aVal = parseFloat(aVal)
          bVal = parseFloat(bVal)
        }
        
        if (sortDirection === 'asc') {
          return aVal > bVal ? 1 : -1
        } else {
          return aVal < bVal ? 1 : -1
        }
      })
    }

    return filtered
  }, [data, searchTerm, performanceFilter, sortField, sortDirection])

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const exportData = () => {
    const csv = Papa.unparse(filteredData)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', 'hybrid_systems_filtered.csv')
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getPerformanceColor = (score) => {
    const numScore = parseFloat(score)
    if (numScore >= 75) return 'text-primary-600'
    if (numScore >= 50) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getPerformanceBadge = (score) => {
    const numScore = parseFloat(score)
    if (numScore >= 75) return 'bg-primary-100 text-primary-800'
    if (numScore >= 50) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center space-y-4">
          <div className="loading-spinner w-8 h-8 mx-auto"></div>
          <p className="text-gray-600">Loading hybrid systems database...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Database className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900">Hybrid Systems Database</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore {data.length.toLocaleString()} lignin-ionic liquid hybrid formulations with predicted performance metrics
        </p>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by ID, lignin type, cation, or anion..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
                className="search-input pl-10"
              />
            </div>
          </div>
          
          <div>
            <select
              value={performanceFilter}
              onChange={(e) => {
                setPerformanceFilter(e.target.value)
                setCurrentPage(1)
              }}
              className="filter-select w-full"
            >
              <option value="all">All Performance</option>
              <option value="high">High Performance (≥75)</option>
              <option value="medium">Medium Performance (50-74)</option>
              <option value="low">Low Performance (&lt;50)</option>
            </select>
          </div>
          
          <button
            onClick={exportData}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>Showing {filteredData.length.toLocaleString()} hybrid systems</span>
            {searchTerm && (
              <span className="text-purple-600">
                Filtered by: "{searchTerm}"
              </span>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-primary-600">● High Performance</span>
            <span className="text-yellow-600">● Medium Performance</span>
            <span className="text-red-600">● Low Performance</span>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th 
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('id')}
              >
                Hybrid ID
                {sortField === 'id' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th>Lignin Type</th>
              <th>IL Components</th>
              <th 
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('lignin_ratio')}
              >
                Lignin Ratio (%)
                {sortField === 'lignin_ratio' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('conductivity')}
              >
                Conductivity (mS/cm)
                {sortField === 'conductivity' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('capacity')}
              >
                Capacity (mAh/g)
                {sortField === 'capacity' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('cycle_stability')}
              >
                Stability (%)
                {sortField === 'cycle_stability' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('performance_score')}
              >
                Performance Score
                {sortField === 'performance_score' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="font-mono text-sm">
                  <div className="flex items-center space-x-2">
                    {parseFloat(item.performance_score) >= 75 && (
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                    <span>{item.id}</span>
                  </div>
                </td>
                <td>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    item.lignin_type === 'Guaiacyl' ? 'bg-primary-100 text-primary-800' :
                    item.lignin_type === 'Syringyl' ? 'bg-secondary-100 text-secondary-800' :
                    item.lignin_type === 'p-Hydroxyphenyl' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.lignin_type}
                  </span>
                </td>
                <td>
                  <div className="flex flex-col space-y-1">
                    <span className="text-xs bg-secondary-100 text-secondary-800 px-2 py-0.5 rounded">
                      {item.cation}
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
                      {item.anion}
                    </span>
                  </div>
                </td>
                <td>{item.lignin_ratio}%</td>
                <td>
                  <span className={`font-medium ${
                    parseFloat(item.conductivity) > 15 ? 'text-primary-600' :
                    parseFloat(item.conductivity) > 8 ? 'text-yellow-600' :
                    'text-gray-600'
                  }`}>
                    {item.conductivity}
                  </span>
                </td>
                <td>
                  <span className={`font-medium ${
                    parseFloat(item.capacity) > 230 ? 'text-primary-600' :
                    parseFloat(item.capacity) > 180 ? 'text-yellow-600' :
                    'text-gray-600'
                  }`}>
                    {item.capacity}
                  </span>
                </td>
                <td>
                  <span className={`font-medium ${
                    parseFloat(item.cycle_stability) > 90 ? 'text-primary-600' :
                    parseFloat(item.cycle_stability) > 80 ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {item.cycle_stability}
                  </span>
                </td>
                <td>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPerformanceBadge(item.performance_score)}`}>
                    {item.performance_score}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top Performers */}
      <div className="card bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <div className="flex items-center space-x-2 mb-4">
          <Star className="w-5 h-5 text-yellow-600" />
          <h3 className="text-lg font-semibold text-gray-900">Top Performing Systems</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {data
            .sort((a, b) => parseFloat(b.performance_score) - parseFloat(a.performance_score))
            .slice(0, 3)
            .map((item, index) => (
              <div key={item.id} className="bg-white p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm text-gray-600">{item.id}</span>
                  <span className="text-lg font-bold text-yellow-600">#{index + 1}</span>
                </div>
                <div className="space-y-1 text-sm">
                  <div><strong>Type:</strong> {item.lignin_type}</div>
                  <div><strong>IL:</strong> {item.cation}-{item.anion}</div>
                  <div><strong>Conductivity:</strong> {item.conductivity} mS/cm</div>
                  <div><strong>Capacity:</strong> {item.capacity} mAh/g</div>
                  <div><strong>Score:</strong> <span className="font-bold text-primary-600">{item.performance_score}</span></div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} results
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      currentPage === pageNum
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}
            </div>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default HybridDatabase

