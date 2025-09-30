import React, { useState, useEffect, useMemo } from 'react'

const LigninDatabase = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFamily, setSelectedFamily] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState('')
  const [sortDirection, setSortDirection] = useState('asc')
  const itemsPerPage = 20

  // Generate sample lignin data
  useEffect(() => {
    const generateSampleData = () => {
      const families = ['Guaiacyl', 'Syringyl', 'p-Hydroxyphenyl', 'Mixed']
      const sources = ['Hardwood', 'Softwood', 'Grass', 'Agricultural waste']
      
      const sampleData = Array.from({ length: 100 }, (_, i) => ({
        id: `LIG_${String(i + 1).padStart(4, '0')}`,
        smiles: generateRandomSMILES(),
        family: families[Math.floor(Math.random() * families.length)],
        source: sources[Math.floor(Math.random() * sources.length)],
        molecular_weight: (150 + Math.random() * 200).toFixed(2),
        logP: (Math.random() * 6 - 1).toFixed(2),
        tpsa: (40 + Math.random() * 100).toFixed(2),
        hbd: Math.floor(Math.random() * 8),
        hba: Math.floor(Math.random() * 10),
        rotatable_bonds: Math.floor(Math.random() * 15),
        aromatic_rings: Math.floor(Math.random() * 4) + 1,
        conductivity: (Math.random() * 20).toFixed(3),
        stability: (70 + Math.random() * 30).toFixed(1),
        solubility: (Math.random() * 100).toFixed(2)
      }))
      
      setData(sampleData)
      setLoading(false)
    }

    generateSampleData()
  }, [])

  const generateRandomSMILES = () => {
    const templates = [
      'COc1cc(C=O)ccc1O',
      'COc1cc(CCO)cc(OC)c1O',
      'COc1cc(C(=O)C)ccc1O',
      'COc1ccc(C=CC(=O)O)cc1O',
      'COc1cc(C=CC=O)ccc1O'
    ]
    return templates[Math.floor(Math.random() * templates.length)]
  }

  // Filter and search data
  const filteredData = useMemo(() => {
    let filtered = data.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.smiles.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.family.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.source.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesFamily = selectedFamily === 'all' || item.family === selectedFamily
      
      return matchesSearch && matchesFamily
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
  }, [data, searchTerm, selectedFamily, sortField, sortDirection])

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
    const csvContent = [
      Object.keys(filteredData[0] || {}).join(','),
      ...filteredData.map(row => Object.values(row).join(','))
    ].join('\n')
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', 'lignin_database_filtered.csv')
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const families = [...new Set(data.map(item => item.family))]

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center space-y-4">
          <div className="loading-spinner w-8 h-8 mx-auto"></div>
          <p className="text-gray-600">Loading lignin database...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-4xl">🧬</span>
          <h1 className="text-3xl font-bold text-gray-900">Lignin Database</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore {data.length.toLocaleString()} lignin structures with comprehensive molecular descriptors and properties
        </p>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search by ID, SMILES, family, or source..."
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
              value={selectedFamily}
              onChange={(e) => {
                setSelectedFamily(e.target.value)
                setCurrentPage(1)
              }}
              className="filter-select w-full"
            >
              <option value="all">All Families</option>
              {families.map(family => (
                <option key={family} value={family}>{family}</option>
              ))}
            </select>
          </div>
          
          <button
            onClick={exportData}
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <span>📥</span>
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>Showing {filteredData.length.toLocaleString()} structures</span>
            {searchTerm && (
              <span className="text-primary-600">
                Filtered by: "{searchTerm}"
              </span>
            )}
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
                Structure ID
                {sortField === 'id' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th>SMILES</th>
              <th 
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('family')}
              >
                Family
                {sortField === 'family' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th>Source</th>
              <th 
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('molecular_weight')}
              >
                MW (g/mol)
                {sortField === 'molecular_weight' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('logP')}
              >
                LogP
                {sortField === 'logP' && (
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
                onClick={() => handleSort('stability')}
              >
                Stability (%)
                {sortField === 'stability' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="font-mono text-sm">{item.id}</td>
                <td className="font-mono text-xs max-w-xs truncate" title={item.smiles}>
                  {item.smiles}
                </td>
                <td>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    item.family === 'Guaiacyl' ? 'bg-primary-100 text-primary-800' :
                    item.family === 'Syringyl' ? 'bg-secondary-100 text-secondary-800' :
                    item.family === 'p-Hydroxyphenyl' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.family}
                  </span>
                </td>
                <td>{item.source}</td>
                <td>{item.molecular_weight}</td>
                <td>{item.logP}</td>
                <td>
                  <span className={`font-medium ${
                    parseFloat(item.conductivity) > 10 ? 'text-primary-600' :
                    parseFloat(item.conductivity) > 5 ? 'text-yellow-600' :
                    'text-gray-600'
                  }`}>
                    {item.conductivity}
                  </span>
                </td>
                <td>
                  <span className={`font-medium ${
                    parseFloat(item.stability) > 85 ? 'text-primary-600' :
                    parseFloat(item.stability) > 70 ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {item.stability}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
              ←
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
                        ? 'bg-primary-600 text-white'
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
              →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LigninDatabase

