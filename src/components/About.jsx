import React from 'react'
import { Info, Database, Zap, Leaf, Users, BookOpen, Code, Mail } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Database,
      title: 'Comprehensive Database',
      description: 'Over 12,000 entries combining lignin structures, ionic liquids, and hybrid systems with detailed molecular descriptors.',
      color: 'text-primary-600',
      bg: 'bg-primary-50'
    },
    {
      icon: Zap,
      title: 'ML-Driven Predictions',
      description: 'Advanced machine learning models with R² > 0.9 for predicting electrochemical performance and optimization.',
      color: 'text-secondary-600',
      bg: 'bg-secondary-50'
    },
    {
      icon: Leaf,
      title: 'Sustainable Focus',
      description: 'Dedicated to advancing green chemistry and sustainable energy storage through lignin valorization.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: Code,
      title: 'Open Source',
      description: 'Built with modern web technologies and open-source principles to enable reproducible research.',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ]

  const technologies = [
    { name: 'React 18', description: 'Modern UI framework with hooks and concurrent features' },
    { name: 'Vite', description: 'Fast build tool with hot module replacement' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid styling' },
    { name: 'Plotly.js', description: 'Interactive scientific visualizations and charts' },
    { name: 'Papa Parse', description: 'Powerful CSV parsing and processing' },
    { name: 'React Router', description: 'Declarative routing for single-page applications' }
  ]

  const dataSources = [
    {
      title: 'Lignin Structural Database',
      authors: 'Eswaran, S.C.D. et al.',
      journal: 'Scientific Data',
      volume: '9',
      pages: '647',
      year: '2022',
      doi: '10.1038/s41597-022-01709-4',
      description: 'Comprehensive collection of lignin molecular structures with computed properties and descriptors.'
    },
    {
      title: 'Ionic Liquid Electrochemical Properties',
      authors: 'Shobayo, O. et al.',
      journal: 'Electrochimica Acta',
      volume: '441',
      pages: '141824',
      year: '2023',
      doi: '10.1016/j.electacta.2023.141824',
      description: 'Systematic study of ionic liquid properties for metal-air battery applications.'
    }
  ]

  const applications = [
    'Sustainable battery materials development',
    'Lignin valorization and utilization',
    'Ionic liquid electrolyte design',
    'Machine learning in materials science',
    'Green chemistry applications',
    'Renewable energy storage systems',
    'Biomass conversion technologies',
    'Electrochemical system optimization'
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <Info className="w-8 h-8 text-primary-600" />
          <h1 className="text-3xl font-bold text-gray-900">About the Project</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          The Lignin Materials Database is an interactive platform designed to accelerate research in sustainable energy storage 
          through machine learning-driven materials discovery and optimization.
        </p>
      </div>

      {/* Project Overview */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Project Overview</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            This platform represents a novel approach to sustainable materials research, combining comprehensive databases 
            of lignin structures and ionic liquids with advanced machine learning techniques. Our goal is to identify 
            optimal hybrid electrolyte formulations for next-generation energy storage applications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The database integrates over 5,000 lignin structures with 2,000 ionic liquid combinations, generating 
            5,000 hybrid systems with predicted performance metrics. Each entry includes detailed molecular descriptors, 
            electrochemical properties, and sustainability indices.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By leveraging machine learning models with exceptional predictive accuracy (R² &gt; 0.9), researchers can 
            rapidly screen potential formulations, reducing experimental time and costs while accelerating the development 
            of sustainable energy storage solutions.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🌟 Key Features</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Advanced tools and capabilities designed specifically for materials science research and sustainable energy applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="card hover:shadow-md transition-shadow duration-200">
                <div className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 Technical Implementation</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h3>
            <div className="space-y-3">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-gray-900">{tech.name}</div>
                    <div className="text-sm text-gray-600">{tech.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Database Architecture</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Molecular Descriptors</h4>
                <p className="text-sm text-gray-600">
                  Over 100 molecular descriptors calculated using RDKit, including topological, 
                  electronic, and physicochemical properties.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Performance Metrics</h4>
                <p className="text-sm text-gray-600">
                  Comprehensive electrochemical properties including conductivity, capacity, 
                  stability, and efficiency predictions.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">ML Models</h4>
                <p className="text-sm text-gray-600">
                  Advanced regression models with cross-validation and feature importance 
                  analysis for reliable predictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Data Sources & References</h2>
        
        <div className="space-y-6">
          {dataSources.map((source, index) => (
            <div key={index} className="border-l-4 border-primary-500 pl-6 py-4 bg-gray-50 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{source.title}</h3>
              <div className="text-sm text-gray-700 mb-2">
                <strong>{source.authors}</strong> <em>{source.journal}</em> <strong>{source.volume}</strong>, {source.pages} ({source.year})
              </div>
              <div className="text-sm text-primary-600 mb-3">
                DOI: <a href={`https://doi.org/${source.doi}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {source.doi}
                </a>
              </div>
              <p className="text-sm text-gray-600">{source.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research Applications */}
      <div className="card bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔬 Research Applications</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Primary Applications</h3>
            <div className="space-y-2">
              {applications.slice(0, 4).map((app, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">{app}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Extended Applications</h3>
            <div className="space-y-2">
              {applications.slice(4).map((app, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                  <span className="text-gray-700">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Usage Guidelines</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Use This Database</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm mt-0.5">1</div>
                <div>
                  <strong>Explore Individual Databases:</strong> Browse lignin structures, ionic liquids, or hybrid systems using the navigation menu.
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm mt-0.5">2</div>
                <div>
                  <strong>Search and Filter:</strong> Use the search functionality and filters to find specific compounds or properties of interest.
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm mt-0.5">3</div>
                <div>
                  <strong>Analyze Performance:</strong> Visit the Analytics section for visualizations and statistical insights.
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm mt-0.5">4</div>
                <div>
                  <strong>Export Data:</strong> Download filtered datasets in CSV format for further analysis in your preferred tools.
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Important Notes</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• All predictions are computational estimates and should be validated experimentally</li>
              <li>• Performance metrics are based on machine learning models trained on available literature data</li>
              <li>• Consider experimental conditions and limitations when interpreting results</li>
              <li>• Cite appropriate sources when using data from this platform in publications</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Citation */}
      <div className="card bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📄 Citation</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            If you use this database in your research, please cite:
          </p>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 font-mono text-sm">
            <div className="text-gray-800">
              @misc{'{'}lignin_database_2024,<br />
              &nbsp;&nbsp;title={'{'}Interactive Lignin Materials Database: ML-Driven Platform for Sustainable Energy Storage{'}'},<br />
              &nbsp;&nbsp;author={'{'}Burhan Beycan{'}'},<br />
              &nbsp;&nbsp;year={'{'}2024{'}'},<br />
              &nbsp;&nbsp;url={'{'}https://github.com/burhanbeycan/lignin-database-website{'}'},<br />
              &nbsp;&nbsp;note={'{'}Accessed: \today{'}'}<br />
              {'}'}
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📧 Contact & Support</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">Author</div>
                  <div className="text-gray-600">Burhan Beycan</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">Research Focus</div>
                  <div className="text-gray-600">Sustainable Materials Science</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Code className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">Repository</div>
                  <a href="https://github.com/burhanbeycan/lignin-database-website" 
                     target="_blank" rel="noopener noreferrer" 
                     className="text-primary-600 hover:underline">
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Involved</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                This project welcomes contributions from the research community. Whether you have 
                additional data, improvements to the models, or suggestions for new features, 
                we encourage collaboration.
              </p>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">Contact</div>
                  <div className="text-gray-600">Submit issues or suggestions via GitHub</div>
                </div>
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
        <p className="text-sm text-gray-500 mt-2">
          Advancing sustainable energy storage through machine learning and materials discovery
        </p>
      </div>
    </div>
  )
}

export default About

