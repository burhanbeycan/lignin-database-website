import React from 'react'

const About = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-4xl">ℹ️</span>
          <h1 className="text-3xl font-bold text-gray-900">About This Project</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Machine Learning-Driven Design of Lignin-Ionic Liquid Hybrid Electrolytes for Sustainable Energy Storage Applications
        </p>
      </div>

      {/* Project Overview */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="mr-2">🎯</span>
          Project Overview
        </h2>
        <div className="prose max-w-none text-gray-700 leading-relaxed">
          <p className="mb-4">
            This research presents a novel approach to sustainable energy storage through the development of 
            lignin-ionic liquid hybrid electrolytes. By combining machine learning techniques with comprehensive 
            molecular databases, we aim to accelerate the discovery of high-performance, eco-friendly battery materials.
          </p>
          <p className="mb-4">
            Our platform integrates over 12,000 molecular structures and properties, enabling researchers to 
            explore structure-property relationships and identify optimal formulations for specific applications. 
            The database includes 5,000 lignin structures, 2,000 ionic liquid combinations, and 5,000 hybrid 
            systems with predicted performance metrics.
          </p>
        </div>
      </div>

      {/* Research Objectives */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">🎯</span>
          Research Objectives
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Sustainable Materials Discovery</h3>
                <p className="text-gray-600 text-sm">
                  Develop bio-based electrolytes from lignin waste to reduce environmental impact and promote circular economy principles.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-secondary-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                <p className="text-gray-600 text-sm">
                  Achieve superior electrochemical performance through AI-guided molecular design and optimization.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cost Reduction</h3>
                <p className="text-gray-600 text-sm">
                  Reduce manufacturing costs by utilizing abundant biomass waste streams and optimizing formulations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-orange-600 font-bold text-sm">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Accelerated Research</h3>
                <p className="text-gray-600 text-sm">
                  Enable rapid screening and discovery through machine learning-powered prediction models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">🔬</span>
          Methodology
        </h2>
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-900">Data Collection</h3>
              <p className="text-sm text-gray-600">
                Comprehensive molecular databases from peer-reviewed literature and experimental studies
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🧮</span>
              </div>
              <h3 className="font-semibold text-gray-900">Feature Engineering</h3>
              <p className="text-sm text-gray-600">
                272 molecular descriptors calculated using RDKit and specialized chemical informatics tools
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold text-gray-900">ML Modeling</h3>
              <p className="text-sm text-gray-600">
                Advanced machine learning algorithms for property prediction and multi-objective optimization
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Results */}
      <div className="card bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">🏆</span>
          Key Results
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Performance Achievements</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">Conductivity up to 25 mS/cm (exceeds commercial standards)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                <span className="text-gray-700">Capacity reaching 280 mAh/g for optimal formulations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Cycle stability above 95% after 1000 cycles</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">127 Pareto-optimal solutions identified</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Sustainability Impact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">35.7% reduction in carbon footprint</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">28.3% cost reduction vs conventional electrolytes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">60% reduction in toxicity indicators</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700">Renewable feedstock utilization</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">📚</span>
          Data Sources & References
        </h2>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Primary Databases</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary-500 pl-4 py-2 bg-primary-50">
                  <div className="font-semibold text-gray-900">Lignin Structural Database</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Eswaran, S.C.D., Subramaniam, S., Gelebart, A.H. et al. 
                    <em> A comprehensive database of lignin's structural diversity for machine learning applications.</em>
                    <strong> Sci Data 9,</strong> 647 (2022).
                  </div>
                  <div className="text-xs text-primary-600 mt-1">
                    DOI: 10.1038/s41597-022-01709-4
                  </div>
                </div>
                
                <div className="border-l-4 border-secondary-500 pl-4 py-2 bg-secondary-50">
                  <div className="font-semibold text-gray-900">Ionic Liquid Properties</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Shobayo, O., Akinpelu, A., Tran, M.K. et al.
                    <em> Ionic liquid electrolytes for metal-air batteries: A comprehensive review.</em>
                    <strong> Electrochim. Acta 441,</strong> 141824 (2023).
                  </div>
                  <div className="text-xs text-secondary-600 mt-1">
                    DOI: 10.1016/j.electacta.2023.141824
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Computational Tools</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-medium text-gray-900">RDKit</div>
                  <div className="text-sm text-gray-600">Molecular descriptor calculation and cheminformatics</div>
                  <div className="text-xs text-gray-500">Version 2023.03.1</div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-medium text-gray-900">Scikit-learn</div>
                  <div className="text-sm text-gray-600">Machine learning algorithms and model validation</div>
                  <div className="text-xs text-gray-500">Version 1.3.0</div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-medium text-gray-900">NSGA-II</div>
                  <div className="text-sm text-gray-600">Multi-objective optimization algorithm</div>
                  <div className="text-xs text-gray-500">Custom implementation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">💻</span>
          Technology Stack
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-blue-600 font-bold">R</span>
            </div>
            <div className="font-medium text-gray-900">React</div>
            <div className="text-xs text-gray-600">Frontend Framework</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-green-600 font-bold">V</span>
            </div>
            <div className="font-medium text-gray-900">Vite</div>
            <div className="text-xs text-gray-600">Build Tool</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-cyan-600 font-bold">T</span>
            </div>
            <div className="font-medium text-gray-900">Tailwind CSS</div>
            <div className="text-xs text-gray-600">Styling</div>
          </div>
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-purple-600 font-bold">P</span>
            </div>
            <div className="font-medium text-gray-900">Python</div>
            <div className="text-xs text-gray-600">ML Backend</div>
          </div>
        </div>
      </div>

      {/* Contact & Citation */}
      <div className="card bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="mr-2">📧</span>
          Contact & Citation
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">How to Cite</h3>
            <div className="bg-white p-4 rounded-lg border border-gray-200 font-mono text-sm text-gray-700">
              <div className="mb-2">
                <strong>APA Format:</strong>
              </div>
              <div className="text-xs leading-relaxed">
                Author, A. (2024). Machine Learning-Driven Design of Lignin-Ionic Liquid Hybrid Electrolytes 
                for Sustainable Energy Storage Applications. <em>Interactive Database Platform</em>. 
                Retrieved from https://github.com/username/lignin-database-website
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Repository</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">GitHub:</span>
                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                  github.com/username/lignin-database-website
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">License:</span>
                <span className="text-gray-700">MIT License</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Version:</span>
                <span className="text-gray-700">1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 border-t border-gray-200">
        <p className="text-gray-600">
          © 2024 Lignin Materials Database. Built for open science and sustainable research.
        </p>
      </div>
    </div>
  )
}

export default About

