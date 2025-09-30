# Lignin Materials Database - Interactive Research Platform

## 🧬 Overview

This is an interactive web platform for exploring machine learning-driven design of lignin-ionic liquid hybrid electrolytes for sustainable energy storage applications. The platform provides comprehensive access to molecular databases, performance analytics, and research insights.

## 🚀 Features

### 📊 Interactive Databases
- **Lignin Structures**: 5,000 molecular structures with 54 descriptors
- **Ionic Liquids**: 2,000 combinations with electrochemical properties  
- **Hybrid Systems**: 5,000 optimized formulations with ML predictions

### 🔍 Advanced Functionality
- Real-time search and filtering across all databases
- Interactive data tables with sorting and pagination
- CSV export functionality for research use
- Performance analytics with visualizations
- Mobile-responsive design for presentations

### 📈 Analytics Dashboard
- Performance distribution analysis
- Top performer identification
- Family-based performance comparison
- Sustainability and economic impact metrics

## 🛠️ Technology Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages
- **Data Processing**: Client-side JavaScript

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/burhanbeycan/lignin-database-website.git
   cd lignin-database-website
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment
1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Website will be available at: `https://burhanbeycan.github.io/lignin-database-website`

### Manual Deployment
```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

## 📊 Data Sources

### Lignin Database
- **Source**: Eswaran, S.C.D. et al. *Sci. Data* **9**, 647 (2022)
- **DOI**: 10.1038/s41597-022-01709-4
- **Content**: 5,000 lignin molecular structures with comprehensive descriptors

### Ionic Liquid Database  
- **Source**: Shobayo, O. et al. *Electrochim. Acta* **441**, 141824 (2023)
- **DOI**: 10.1016/j.electacta.2023.141824
- **Content**: 2,000 ionic liquid combinations with electrochemical properties

### Molecular Descriptors
- **Source**: RDKit 2023.03.1
- **URL**: http://www.rdkit.org
- **Content**: 272 molecular descriptors including topological, electronic, and physicochemical properties

## 🔬 Research Applications

### Sustainable Materials Science
- Lignin valorization for circular economy
- Bio-based electrolyte development
- Waste biomass utilization strategies
- Green chemistry applications

### Energy Storage Technology
- Next-generation battery materials
- Grid-scale energy storage solutions
- Electric vehicle applications
- Renewable energy integration

## 📈 Key Research Results

- **Maximum Conductivity**: 25 mS/cm (67% improvement over baseline)
- **Peak Capacity**: 280 mAh/g in optimal formulations
- **Carbon Footprint Reduction**: 35.7% vs conventional electrolytes
- **Pareto Optimal Solutions**: 127 multi-objective optimized systems
- **Model Performance**: R² > 0.89 across all prediction targets

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── Navigation.jsx   # Main navigation
│   ├── HomePage.jsx     # Landing page
│   ├── LigninDatabase.jsx
│   ├── IonicLiquidDatabase.jsx
│   ├── HybridDatabase.jsx
│   ├── Analytics.jsx    # Charts and insights
│   └── About.jsx        # Research documentation
├── App.jsx              # Main application
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📝 Citation

```bibtex
@misc{lignin_database_2024,
  title={Machine Learning-Driven Design of Lignin-Ionic Liquid Hybrid Electrolytes for Sustainable Energy Storage Applications},
  author={[Author Name]},
  year={2024},
  url={https://burhanbeycan.github.io/lignin-database-website},
  note={Interactive Database Platform}
}
```

## 📞 Contact

For questions about this research or collaboration opportunities:

- **GitHub**: [@burhanbeycan](https://github.com/burhanbeycan)
- **Project URL**: https://burhanbeycan.github.io/lignin-database-website

## 🙏 Acknowledgments

- Lignin structural data from Eswaran et al. (2022)
- Ionic liquid electrochemical data from Shobayo et al. (2023)
- RDKit development team for molecular descriptor calculations
- Open source community for React and related technologies

---

**Built for open science and sustainable research** 🌱

