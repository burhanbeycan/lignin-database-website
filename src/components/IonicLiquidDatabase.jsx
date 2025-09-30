import React, { useState, useMemo } from 'react'

const IonicLiquidDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCation, setSelectedCation] = useState('all')

  // Sample ionic liquid data
  const ionicLiquidData = useMemo(() => {
    const cations = ['Imidazolium', 'Pyrrolidinium', 'Ammonium', 'Phosphonium']
    const anions = ['BF4-', 'PF6-', 'Tf2N-', 'OTf-', 'Cl-']
    const data = []
    
    for (let i = 1; i <= 150; i++) {
      data.push({
        id: `IL_${i.toString().padStart(3, '0')}`,
        cation: cations[i % cations.length],
        anion: anions[i % anions.length],
        conductivity: (Math.random() * 20 + 5).toFixed(2),
        viscosity: (Math.random() * 100 + 10).toFixed(1),
        density: (1.0 + Math.random() * 0.5).toFixed(3),
        melting_point: Math.floor(Math.random() * 100 - 20),
        thermal_stability: Math.floor(Math.random() * 200 + 200),
        electrochemical_window: (Math.random() * 3 + 2).toFixed(1)
      })
    }
    return data
  }, [])

  const filteredData = useMemo(() => {
    return ionicLiquidData.filter(item => {
      const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.cation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.anion.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCation = selectedCation === 'all' || item.cation === selectedCation
      return matchesSearch && matchesCation
    })
  }, [ionicLiquidData, searchTerm, selectedCation])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="text-4xl">⚡</div>
            <h1 className="text-3xl font-bold text-gray-800">Ionic Liquid Database</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Electrochemical properties of {ionicLiquidData.length} ionic liquid combinations for battery applications
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Ionic Liquids
              </label>
              <input
                type="text"
                placeholder="Search by ID, cation, or anion..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Cation
              </label>
              <select
                value={selectedCation}
                onChange={(e) => setSelectedCation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Cations</option>
                <option value="Imidazolium">Imidazolium</option>
                <option value="Pyrrolidinium">Pyrrolidinium</option>
                <option value="Ammonium">Ammonium</option>
                <option value="Phosphonium">Phosphonium</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Search Results: {filteredData.length} ionic liquids
              </h2>
              <p className="text-gray-600">
                Showing electrochemical and physical properties
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
                    IL ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cation
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Anion
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Conductivity (mS/cm)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Viscosity (cP)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Density (g/cm³)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EC Window (V)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.slice(0, 20).map((item) => {
                  const performance = parseFloat(item.conductivity) > 15 ? 'High' : 
                                    parseFloat(item.conductivity) > 10 ? 'Medium' : 'Low'
                  return (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                        {item.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          item.cation === 'Imidazolium' ? 'bg-blue-100 text-blue-800' :
                          item.cation === 'Pyrrolidinium' ? 'bg-green-100 text-green-800' :
                          item.cation === 'Ammonium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {item.cation}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono">
                        {item.anion}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className={`font-semibold ${
                          parseFloat(item.conductivity) > 15 ? 'text-green-600' :
                          parseFloat(item.conductivity) > 10 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {item.conductivity}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.viscosity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.density}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.electrochemical_window}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          performance === 'High' ? 'bg-green-100 text-green-800' :
                          performance === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {performance}
                        </span>
                      </td>
                    </tr>
                  )
                })}
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

        {/* Performance Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {ionicLiquidData.filter(d => parseFloat(d.conductivity) > 15).length}
            </div>
            <div className="text-sm text-gray-600">High Performance ILs</div>
            <div className="text-xs text-gray-500 mt-1">&gt;15 mS/cm conductivity</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-2">
              {ionicLiquidData.filter(d => parseFloat(d.conductivity) > 10 && parseFloat(d.conductivity) <= 15).length}
            </div>
            <div className="text-sm text-gray-600">Medium Performance ILs</div>
            <div className="text-xs text-gray-500 mt-1">10-15 mS/cm conductivity</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">
              {(ionicLiquidData.reduce((sum, d) => sum + parseFloat(d.conductivity), 0) / ionicLiquidData.length).toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Average Conductivity</div>
            <div className="text-xs text-gray-500 mt-1">mS/cm across all ILs</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IonicLiquidDatabase

