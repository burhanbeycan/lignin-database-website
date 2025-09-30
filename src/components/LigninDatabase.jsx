import React, { useState, useMemo } from 'react'

const LigninDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFamily, setSelectedFamily] = useState('all')

  // Sample lignin data
  const ligninData = useMemo(() => {
    const families = ['Hardwood', 'Softwood', 'Grass', 'Agricultural']
    const data = []
    
    for (let i = 1; i <= 100; i++) {
      data.push({
        id: `LIG_${i.toString().padStart(3, '0')}`,
        smiles: `C${i}H${i*2}O${Math.floor(i/2)}`,
        family: families[i % families.length],
        mw: 150 + (i * 2.5),
        logp: (Math.random() * 4).toFixed(2),
        hbd: Math.floor(Math.random() * 8),
        hba: Math.floor(Math.random() * 12),
        tpsa: (Math.random() * 200).toFixed(1),
        rotatable_bonds: Math.floor(Math.random() * 15)
      })
    }
    return data
  }, [])

  const filteredData = useMemo(() => {
    return ligninData.filter(item => {
      const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.smiles.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFamily = selectedFamily === 'all' || item.family === selectedFamily
      return matchesSearch && matchesFamily
    })
  }, [ligninData, searchTerm, selectedFamily])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="text-4xl">🧬</div>
            <h1 className="text-3xl font-bold text-gray-800">Lignin Database</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Comprehensive collection of {ligninData.length} lignin molecular structures with detailed descriptors
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Structures
              </label>
              <input
                type="text"
                placeholder="Search by ID or SMILES..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Family
              </label>
              <select
                value={selectedFamily}
                onChange={(e) => setSelectedFamily(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Families</option>
                <option value="Hardwood">Hardwood</option>
                <option value="Softwood">Softwood</option>
                <option value="Grass">Grass</option>
                <option value="Agricultural">Agricultural</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Search Results: {filteredData.length} structures
              </h2>
              <p className="text-gray-600">
                Showing lignin structures with molecular descriptors
              </p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Export CSV
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Structure ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    SMILES
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Family
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    MW (g/mol)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    LogP
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    HBD
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    HBA
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TPSA
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.slice(0, 20).map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                      {item.smiles}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        item.family === 'Hardwood' ? 'bg-green-100 text-green-800' :
                        item.family === 'Softwood' ? 'bg-blue-100 text-blue-800' :
                        item.family === 'Grass' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {item.family}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.mw.toFixed(1)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.logp}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.hbd}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.hba}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.tpsa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredData.length > 20 && (
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
              <p className="text-sm text-gray-700">
                Showing 20 of {filteredData.length} results. Use search and filters to refine results.
              </p>
            </div>
          )}
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {ligninData.filter(d => d.family === 'Hardwood').length}
            </div>
            <div className="text-sm text-gray-600">Hardwood Structures</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {ligninData.filter(d => d.family === 'Softwood').length}
            </div>
            <div className="text-sm text-gray-600">Softwood Structures</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-2">
              {ligninData.filter(d => d.family === 'Grass').length}
            </div>
            <div className="text-sm text-gray-600">Grass Structures</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              {ligninData.filter(d => d.family === 'Agricultural').length}
            </div>
            <div className="text-sm text-gray-600">Agricultural Structures</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LigninDatabase

