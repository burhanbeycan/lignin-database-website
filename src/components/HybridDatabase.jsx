import React, { useState, useMemo } from 'react'

const HybridDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [performanceFilter, setPerformanceFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  // Sample hybrid system data
  const hybridData = useMemo(() => {
    return Array.from({ length: 200 }, (_, i) => {
      const ligninId = `LIG_${String(Math.floor(Math.random() * 100) + 1).padStart(3, '0')}`
      const ilId = `IL_${String(Math.floor(Math.random() * 150) + 1).padStart(3, '0')}`
      const conductivity = (5 + Math.random() * 20).toFixed(1)
      const capacity = (180 + Math.random() * 100).toFixed(0)
      const sustainability = (60 + Math.random() * 40).toFixed(1)
      
      return {
        id: `HYB_${String(i + 1).padStart(3, '0')}`,
        ligninId,
        ilId,
        ratio: `${Math.floor(Math.random() * 30 + 10)}:${Math.floor(Math.random() * 30 + 10)}`,
        conductivity: parseFloat(conductivity),
        capacity: parseInt(capacity),
        sustainability: parseFloat(sustainability),
        carbonReduction: (15 + Math.random() * 25).toFixed(1),
        costReduction: (10 + Math.random() * 30).toFixed(1),
        performanceScore: ((parseFloat(conductivity) / 25 + parseInt(capacity) / 280 + parseFloat(sustainability) / 100) / 3 * 100).toFixed(1)
      }
    })
  }, [])

  const filteredData = useMemo(() => {
    return hybridData.filter(item => {
      const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.ligninId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.ilId.toLowerCase().includes(searchTerm.toLowerCase())
      
      let matchesPerformance = true
      if (performanceFilter === 'high') {
        matchesPerformance = parseFloat(item.performanceScore) >= 70
      } else if (performanceFilter === 'medium') {
        matchesPerformance = parseFloat(item.performanceScore) >= 50 && parseFloat(item.performanceScore) < 70
      } else if (performanceFilter === 'low') {
        matchesPerformance = parseFloat(item.performanceScore) < 50
      }
      
      return matchesSearch && matchesPerformance
    })
  }, [hybridData, searchTerm, performanceFilter])

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredData.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredData, currentPage])

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const exportToCSV = () => {
    const headers = ['ID', 'Lignin_ID', 'IL_ID', 'Ratio', 'Conductivity', 'Capacity', 'Sustainability', 'Carbon_Reduction', 'Cost_Reduction', 'Performance_Score']
    const csvContent = [
      headers.join(','),
      ...filteredData.map(row => [
        row.id, row.ligninId, row.ilId, row.ratio, row.conductivity,
        row.capacity, row.sustainability, row.carbonReduction, row.costReduction, row.performanceScore
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'hybrid_systems_database.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const getPerformanceColor = (score) => {
    if (score >= 70) return 'text-green-600 bg-green-100'
    if (score >= 50) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="text-4xl">🔬</div>
            <h1 className="text-3xl font-bold text-gray-800">Hybrid Systems Database</h1>
          </div>
          <p className="text-gray-600 mb-6">
            Optimized lignin-ionic liquid hybrid formulations with ML-predicted performance metrics for sustainable battery applications.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{filteredData.length}</div>
              <div className="text-sm text-purple-700">Hybrid Systems</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {filteredData.filter(item => parseFloat(item.performanceScore) >= 70).length}
              </div>
              <div className="text-sm text-green-700">High Performance</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {Math.max(...filteredData.map(item => item.conductivity)).toFixed(1)}
              </div>
              <div className="text-sm text-blue-700">Max Conductivity</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">
                {Math.max(...filteredData.map(item => item.capacity))}
              </div>
              <div className="text-sm text-orange-700">Max Capacity</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by hybrid ID, lignin ID, or IL ID..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={performanceFilter}
              onChange={(e) => {
                setPerformanceFilter(e.target.value)
                setCurrentPage(1)
              }}
            >
              <option value="all">All Performance</option>
              <option value="high">High (≥70%)</option>
              <option value="medium">Medium (50-70%)</option>
              <option value="low">Low (&lt;50%)</option>
            </select>
            <button
              onClick={exportToCSV}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Components</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ratio</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conductivity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sustainability</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        <div className="font-medium text-gray-900">{item.ligninId}</div>
                        <div className="text-gray-500">{item.ilId}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.ratio}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${
                        item.conductivity > 15 ? 'text-green-600' :
                        item.conductivity > 10 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {item.conductivity} mS/cm
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${
                        item.capacity > 250 ? 'text-green-600' :
                        item.capacity > 220 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {item.capacity} mAh/g
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.sustainability}%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPerformanceColor(parseFloat(item.performanceScore))}`}>
                        {item.performanceScore}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                  <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredData.length)}</span> of{' '}
                  <span className="font-medium">{filteredData.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = i + 1
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          currentPage === page
                            ? 'z-10 bg-purple-50 border-purple-500 text-purple-600'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  })}
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HybridDatabase

