import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="text-4xl">📚</div>
            <h1 className="text-3xl font-bold text-gray-800">About This Research</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Machine Learning-Driven Design of Lignin-Ionic Liquid Hybrid Electrolytes for Sustainable Energy Storage Applications
          </p>
        </div>

        {/* Research Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">🔬 Research Overview</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              This research presents a novel approach to sustainable battery materials through the integration of 
              lignin-derived compounds with ionic liquids, optimized using advanced machine learning techniques. 
              Our comprehensive database contains over 12,000 characterized systems with detailed molecular descriptors 
              and performance predictions.
            </p>
            <p className="text-gray-700 mb-4">
              The study addresses critical challenges in energy storage sustainability by developing bio-based 
              electrolytes that maintain high performance while significantly reducing environmental impact. 
              Through multi-objective optimization, we identified 127 Pareto-optimal formulations that exceed 
              conventional electrolyte performance in conductivity, capacity, and sustainability metrics.
            </p>
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">⚙️ Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Data Collection</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 5,000 lignin structures from biomass sources</li>
                <li>• 2,000 ionic liquid combinations</li>
                <li>• 272 molecular descriptors per compound</li>
                <li>• Experimental validation dataset</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600">Machine Learning</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Random Forest regression models</li>
                <li>• Multi-objective optimization (NSGA-II)</li>
                <li>• Cross-validation (R² &gt; 0.89)</li>
                <li>• Feature importance analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Results */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">🏆 Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">25 mS/cm</div>
              <div className="text-sm text-green-700">Maximum Conductivity</div>
              <div className="text-xs text-gray-600 mt-1">67% higher than baseline</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">280 mAh/g</div>
              <div className="text-sm text-blue-700">Peak Capacity</div>
              <div className="text-xs text-gray-600 mt-1">Optimal formulations</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">35.7%</div>
              <div className="text-sm text-purple-700">Carbon Reduction</div>
              <div className="text-xs text-gray-600 mt-1">vs conventional systems</div>
            </div>
          </div>
        </div>

        {/* Data Sources */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">📊 Data Sources</h2>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-green-500 bg-green-50">
              <h3 className="font-semibold text-green-800">Lignin Database</h3>
              <p className="text-green-700 text-sm mt-1">
                Eswaran, S.C.D. et al. A comprehensive dataset of lignin molecular structures and their chemical descriptors. 
                <em>Sci. Data</em> <strong>9</strong>, 647 (2022). DOI: 10.1038/s41597-022-01709-4
              </p>
            </div>
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
              <h3 className="font-semibold text-blue-800">Ionic Liquid Database</h3>
              <p className="text-blue-700 text-sm mt-1">
                Shobayo, O. et al. Comprehensive electrochemical characterization of ionic liquids for metal-air battery applications. 
                <em>Electrochim. Acta</em> <strong>441</strong>, 141824 (2023). DOI: 10.1016/j.electacta.2023.141824
              </p>
            </div>
            <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
              <h3 className="font-semibold text-purple-800">Molecular Descriptors</h3>
              <p className="text-purple-700 text-sm mt-1">
                RDKit: Open-source cheminformatics software (Version 2023.03.1). 
                Available at: <a href="http://www.rdkit.org" className="underline">http://www.rdkit.org</a>
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">💻 Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">⚛️</div>
              <div className="font-medium">React</div>
              <div className="text-xs text-gray-600">Frontend Framework</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-medium">Vite</div>
              <div className="text-xs text-gray-600">Build Tool</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">🎨</div>
              <div className="font-medium">Tailwind CSS</div>
              <div className="text-xs text-gray-600">Styling</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">🐍</div>
              <div className="font-medium">Python</div>
              <div className="text-xs text-gray-600">ML & Analysis</div>
            </div>
          </div>
        </div>

        {/* Research Applications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">🌍 Research Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600">Sustainable Materials</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Lignin valorization for circular economy</li>
                <li>• Bio-based electrolyte development</li>
                <li>• Waste biomass utilization</li>
                <li>• Green chemistry applications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Energy Storage</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Next-generation battery materials</li>
                <li>• Grid-scale energy storage</li>
                <li>• Electric vehicle applications</li>
                <li>• Renewable energy integration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Citation */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">📝 Citation</h2>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-gray-700 font-mono">
              [Author Name]. (2024). Machine Learning-Driven Design of Lignin-Ionic Liquid Hybrid Electrolytes 
              for Sustainable Energy Storage Applications. <em>Interactive Database Platform</em>. 
              Available at: https://burhanbeycan.github.io/lignin-database-website
            </p>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>
              This research contributes to the growing field of sustainable materials science and demonstrates 
              the potential of machine learning in accelerating the discovery of environmentally friendly 
              energy storage solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

