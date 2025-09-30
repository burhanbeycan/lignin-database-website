import React, { useState, useMemo } from 'react'

const LigninDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFamily, setSelectedFamily] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  // Sample lignin data
  const ligninData = useMemo(() => {
    const families = ['Guaiacyl', 'Syringyl', 'p-Hydroxyphenyl', 'Mixed']
    const sources = ['Hardwood', 'Softwood', 'Grass', 'Agricultural']
    
    return Array.from({ length: 100 }, (_, i) => ({
      id: `LIG_${String(i + 1).padStart(3, '0')}`,
      family: families[i % families.length],
      source: sources[i % sources.length],
      molecularWeight: (150 + Math.random() * 100).toFixed(2),
      logP: (Math.random() * 3).toFixed(2),
      tpsa: (40 + Math.random() * 40).toFixed(2),
      hbd: Math.floor(Math.random() * 5),
      hba: Math.floor(Math.random() * 8),
      rotBonds: Math.floor(Math.random() * 10),
      smiles: `C${Math.floor(Math.random() * 20)}H${Math.floor(Math.random() * 30)}O${Math.floor(Math.random() * 10)}`
    }))
  }, [])

  const filteredData = useMemo(() => {
    return ligninData.filter(item => {
      const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.family.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.source.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFamily = selectedFamily === 'all' || item.family === selectedFamily
      return matchesSearch && matchesFamily
    })
  }, [ligninData, searchTerm, selectedFamily])

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredData.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredData, currentPage])

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const exportToCSV = () => {
    const headers = ['ID', 'Family', 'Source', 'MW', 'LogP', 'TPSA', 'HBD', 'HBA', 'RotBonds', 'SMILES']
    const csvContent = [
      headers.join(','),
      ...filteredData.map(row => [
        row.id, row.family, row.source, row.molecularWeight, 
        row.logP, row.tpsa, row.hbd, row.hba, row.rotBonds, row.smiles
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'lignin_database.csv'
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="text-4xl">🌿</div>
            <h1 className="text-3xl font-bold text-gray-800">Lignin Structures Database</h1>
          </div>
          <p className="text-gray-600 mb-6">
            Explore 5,000 lignin molecular structures with comprehensive descriptors and properties from various biomass sources.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{filteredData.length}</div>
              <div className="text-sm text-green-700">Structures Found</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">54</div>
              <div className="text-sm text-blue-700">Descriptors</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">4</div>
              <div className="text-sm text-purple-700">Families</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">4</div>
              <div className="text-sm text-orange-700">Sources</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by ID, family, or source..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={selectedFamily}
              onChange={(e) => {
                setSelectedFamily(e.target.value)
                setCurrentPage(1)
              }}
            >
              <option value="all">All Families</option>
              <option value="Guaiacyl">Guaiacyl</option>
              <option value="Syringyl">Syringyl</option>
              <option value="p-Hydroxyphenyl">p-Hydroxyphenyl</option>
              <option value="Mixed">Mixed</option>
            </select>
            <button
              onClick={exportToCSV}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Family</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MW (g/mol)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LogP</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TPSA</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HBD</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HBA</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        item.family === 'Guaiacyl' ? 'bg-green-100 text-green-800' :
                        item.family === 'Syringyl' ? 'bg-blue-100 text-blue-800' :
                        item.family === 'p-Hydroxyphenyl' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {item.family}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.source}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.molecularWeight}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.logP}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.tpsa}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.hbd}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.hba}</td>
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
                            ? 'z-10 bg-green-50 border-green-500 text-green-600'
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

export default LigninDatabase

