import React, { useState, useEffect, useMemo } from 'react'

const IonicLiquidDatabase = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCation, setSelectedCation] = useState('all')
  const [selectedAnion, setSelectedAnion] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState('')
  const [sortDirection, setSortDirection] = useState('asc')
  const itemsPerPage = 20

  // Generate sample ionic liquid data
  useEffect(() => {
    const generateSampleData = () => {
      const cations = ['EMIM', 'BMIM', 'HMIM', 'OMIM', 'DMIM', 'Py14', 'N1114', 'P1444']
      const anions = ['BF4', 'PF6', 'Tf2N', 'OTf', 'DCA', 'SCN', 'Cl', 'Br', 'HSO4', 'MeSO4']
      
      const sampleData = Array.from({ length: 150 }, (_, i) => ({
        id: `IL_${String(i + 1).padStart(4, '0')}`,
        cation: cations[Math.floor(Math.random() * cations.length)],
        anion: anions[Math.floor(Math.random() * anions.length)],
        cation_smiles: generateCationSMILES(),
        anion_smiles: generateAnionSMILES(),
        molecular_weight: (200 + Math.random() * 400).toFixed(2),
        density: (1.0 + Math.random() * 0.5).toFixed(3),
        viscosity: (10 + Math.random() * 200).toFixed(1),
        conductivity: (0.1 + Math.random() * 15).toFixed(3),
        melting_point: (-50 + Math.random() * 150).toFixed(1),
        decomposition_temp: (250 + Math.random() * 200).toFixed(1),
        electrochemical_window: (2.0 + Math.random() * 4.0).toFixed(2),
        ionic_conductivity: (0.5 + Math.random() * 20).toFixed(3),
        capacity: (100 + Math.random() * 150).toFixed(1),
        cycle_stability: (80 + Math.random() * 20).toFixed(1)
      }))
      
      setData(sampleData)
      setLoading(false)
    }

    generateSampleData()
  }, [])

  const generateCationSMILES = () => {
    const cationSMILES = [
      'CCn1cc[n+](C)c1',
      'CCCCn1cc[n+](C)c1',
      'CCCCCCn1cc[n+](C)c1',
      'CCCCCCCCn1cc[n+](C)c1',
      'Cn1cc[n+](C)c1'
    ]
    return cationSMILES[Math.floor(Math.random() * cationSMILES.length)]
  }

  const generateAnionSMILES = () => {
    const anionSMILES = [
      'F[B-](F)(F)F',
      'F[P-](F)(F)(F)(F)F',
      'O=S(=O)([N-]S(=O)(=O)C(F)(F)F)C(F)(F)F',
      'CS(=O)(=O)[O-]',
      '[Cl-]'
    ]
    return anionSMILES[Math.floor(Math.random() * anionSMILES.length)]
  }

  // Filter and search data
  const filteredData = useMemo(() => {
    let filtered = data.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.anion.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCation = selectedCation === 'all' || item.cation === selectedCation
      const matchesAnion = selectedAnion === 'all' || item.anion === selectedAnion
      
      return matchesSearch && matchesCation && matchesAnion
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
  }, [data, searchTerm, selectedCation, selectedAnion, sortField, sortDirection])

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
    link.setAttribute('download', 'ionic_liquids_filtered.csv')
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const cations = [...new Set(data.map(item => item.cation))]
  const anions = [...new Set(data.map(item => item.anion))]

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center space-y-4">
          <div className="loading-spinner w-8 h-8 mx-auto"></div>
          <p className="text-gray-600">Loading ionic liquid database...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-4xl">⚡</span>
          <h1 className="text-3xl font-bold text-gray-900">Ionic Liquid Database</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore {data.length.toLocaleString()} ionic liquid combinations with electrochemical properties for battery applications
        </p>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="grid md:grid-cols-5 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search by ID, cation, or anion..."
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
              value={selectedCation}
              onChange={(e) => {
                setSelectedCation(e.target.value)
                setCurrentPage(1)
              }}
              className="filter-select w-full"
            >
              <option value="all">All Cations</option>
              {cations.map(cation => (
                <option key={cation} value={cation}>{cation}</option>
              ))}
            </select>
          </div>
          
          <div>
            <select
              value={selectedAnion}
              onChange={(e) => {
                setSelectedAnion(e.target.value)
                setCurrentPage(1)
              }}
              className="filter-select w-full"
            >
              <option value="all">All Anions</option>
              {anions.map(anion => (
                <option key={anion} value={anion}>{anion}</option>
              ))}
            </select>
          </div>
          
          <button
            onClick={exportData}
            className="btn-secondary flex items-center justify-center space-x-2"
          >
            <span>📥</span>
            <span>Export CSV</span>
          </button>
        </div>
        
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>Showing {filteredData.length.toLocaleString()} ionic liquids</span>
            {searchTerm && (
              <span className="text-secondary-600">
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
                IL ID
                {sortField === 'id' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th>Cation</th>
              <th>Anion</th>
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
                onClick={() => handleSort('conductivity')}
              >
                Conductivity (mS/cm)
                {sortField === 'conductivity' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('viscosity')}
              >
                Viscosity (cP)
                {sortField === 'viscosity' && (
                  <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('electrochemical_window')}
              >
                EC Window (V)
                {sortField === 'electrochemical_window' && (
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
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="font-mono text-sm">{item.id}</td>
                <td>
                  <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                    {item.cation}
                  </span>
                </td>
                <td>
                  <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {item.anion}
                  </span>
                </td>
                <td>{item.molecular_weight}</td>
                <td>
                  <span className={`font-medium ${
                    parseFloat(item.conductivity) > 10 ? 'text-primary-600' :
                    parseFloat(item.conductivity) > 5 ? 'text-yellow-600' :
                    'text-gray-600'
                  }`}>
                    {item.conductivity}
                  </span>
                </td>
                <td>{item.viscosity}</td>
                <td>
                  <span className={`font-medium ${
                    parseFloat(item.electrochemical_window) > 4 ? 'text-primary-600' :
                    parseFloat(item.electrochemical_window) > 3 ? 'text-yellow-600' :
                    'text-gray-600'
                  }`}>
                    {item.electrochemical_window}
                  </span>
                </td>
                <td>
                  <span className={`font-medium ${
                    parseFloat(item.capacity) > 200 ? 'text-primary-600' :
                    parseFloat(item.capacity) > 150 ? 'text-yellow-600' :
                    'text-gray-600'
                  }`}>
                    {item.capacity}
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
                        ? 'bg-secondary-600 text-white'
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

export default IonicLiquidDatabase

