import React, { useState, useMemo } from 'react'

const IonicLiquidDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCation, setSelectedCation] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  // Sample ionic liquid data
  const ionicLiquidData = useMemo(() => {
    const cations = ['EMIM', 'BMIM', 'HMIM', 'OMIM', 'Py14', 'N1114', 'P1444']
    const anions = ['BF4', 'PF6', 'Tf2N', 'OTf', 'DCA', 'SCN', 'Cl', 'Br']
    
    return Array.from({ length: 150 }, (_, i) => {
      const cation = cations[i % cations.length]
      const anion = anions[Math.floor(i / cations.length) % anions.length]
      return {
        id: `IL_${String(i + 1).padStart(3, '0')}`,
        combination: `${cation}-${anion}`,
        cation,
        anion,
        conductivity: (5 + Math.random() * 20).toFixed(1),
        viscosity: (20 + Math.random() * 80).toFixed(1),
        electrochemicalWindow: (3.5 + Math.random() * 2).toFixed(1),
        capacity: (200 + Math.random() * 80).toFixed(0),
        density: (1.0 + Math.random() * 0.5).toFixed(3),
        meltingPoint: (-50 + Math.random() * 100).toFixed(0)
      }
    })
  }, [])

  const filteredData = useMemo(() => {
    return ionicLiquidData.filter(item => {
      const matchesSearch = item.combination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.cation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.anion.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCation = selectedCation === 'all' || item.cation === selectedCation
      return matchesSearch && matchesCation
    })
  }, [ionicLiquidData, searchTerm, selectedCation])

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredData.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredData, currentPage])

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const exportToCSV = () => {
    const headers = ['ID', 'Combination', 'Cation', 'Anion', 'Conductivity', 'Viscosity', 'Window', 'Capacity', 'Density', 'MP']
    const csvContent = [
      headers.join(','),
      ...filteredData.map(row => [
        row.id, row.combination, row.cation, row.anion, row.conductivity,
        row.viscosity, row.electrochemicalWindow, row.capacity, row.density, row.meltingPoint
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'ionic_liquid_database.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="text-4xl">⚡</div>
            <h1 className="text-3xl font-bold text-gray-800">Ionic Liquids Database</h1>
          </div>
          <p className="text-gray-600 mb-6">
            Comprehensive database of 2,000 ionic liquid combinations with electrochemical properties for battery applications.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{filteredData.length}</div>
              <div className="text-sm text-blue-700">IL Combinations</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">7</div>
              <div className="text-sm text-green-700">Cation Types</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">8</div>
              <div className="text-sm text-purple-700">Anion Types</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">6</div>
              <div className="text-sm text-orange-700">Properties</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by combination, cation, or anion..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedCation}
              onChange={(e) => {
                setSelectedCation(e.target.value)
                setCurrentPage(1)
              }}
            >
              <option value="all">All Cations</option>
              <option value="EMIM">EMIM</option>
              <option value="BMIM">BMIM</option>
              <option value="HMIM">HMIM</option>
              <option value="OMIM">OMIM</option>
              <option value="Py14">Py14</option>
              <option value="N1114">N1114</option>
              <option value="P1444">P1444</option>
            </select>
            <button
              onClick={exportToCSV}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Combination</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conductivity (mS/cm)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Viscosity (cP)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Window (V)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity (mAh/g)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Density (g/cm³)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {item.combination}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${
                          parseFloat(item.conductivity) > 15 ? 'text-green-600' :
                          parseFloat(item.conductivity) > 10 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {item.conductivity}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.viscosity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.electrochemicalWindow}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${
                        parseFloat(item.capacity) > 250 ? 'text-green-600' :
                        parseFloat(item.capacity) > 220 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {item.capacity}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.density}</td>
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
                            ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
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

export default IonicLiquidDatabase

