# 🧬 Lignin Materials Database

Interactive ML-driven platform for exploring lignin-ionic liquid hybrid electrolytes for sustainable energy storage applications.

## 🌟 Features

- **5,000 Lignin Structures** with comprehensive molecular descriptors
- **2,000 Ionic Liquid Combinations** with electrochemical properties  
- **5,000 Hybrid Systems** with predicted performance metrics
- **Interactive Analytics** with real-time visualizations
- **Advanced Search & Filtering** capabilities
- **Mobile-Responsive Design**

## 🚀 Live Demo

**[View Live Website](https://burhanbeycan.github.io/lignin-database-website)**

## 🛠 Technologies Used

- **React 18** - Modern UI framework
- **Vite** - Fast build tool  
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Papa Parse** - CSV processing

## 📚 Data Sources

- **Lignin Database:** Eswaran, S.C.D. et al. *Sci. Data* **9**, 647 (2022) - DOI: 10.1038/s41597-022-01709-4
- **Ionic Liquids:** Shobayo, O. et al. *Electrochim. Acta* **441**, 141824 (2023) - DOI: 10.1016/j.electacta.2023.141824

## 🔬 Research Applications

This database supports research in:
- Sustainable battery materials
- Lignin valorization  
- Ionic liquid electrolytes
- Machine learning in materials science
- Green chemistry applications

## 💻 Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/burhanbeycan/lignin-database-website.git
cd lignin-database-website

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages (if configured)
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Website will be available at `https://your-username.github.io/lignin-database-website`

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy using gh-pages (if configured)
npm run deploy
```

## 📁 Project Structure

```
lignin-database-website/
├── .github/workflows/     # GitHub Actions workflows
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── HomePage.jsx
│   │   ├── LigninDatabase.jsx
│   │   ├── IonicLiquidDatabase.jsx
│   │   ├── HybridDatabase.jsx
│   │   ├── Analytics.jsx
│   │   ├── About.jsx
│   │   └── Navigation.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md           # This file
```

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize:

- **Colors**: Edit `tailwind.config.js` to change the color palette
- **Components**: Modify components in `src/components/`
- **Global styles**: Update `src/index.css`

### Data

- **CSV Files**: Place your data files in `public/assets/`
- **Sample Data**: Components generate sample data if CSV files are not available
- **API Integration**: Modify components to fetch data from APIs

### Features

- **Add new pages**: Create components and add routes in `App.jsx`
- **Modify analytics**: Update `Analytics.jsx` with your visualization needs
- **Extend search**: Enhance filtering logic in database components

## 🔧 Configuration

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Source: "GitHub Actions"
3. The workflow will handle deployment automatically

### Custom Domain (Optional)

1. Add your domain to `public/CNAME`
2. Configure DNS settings with your domain provider
3. Update the `base` path in `vite.config.js` if needed

### Environment Variables

Create `.env` file for environment-specific settings:

```env
VITE_API_BASE_URL=your-api-url
VITE_ANALYTICS_ID=your-analytics-id
```

## 📄 Citation

If you use this database in your research, please cite:

```bibtex
@misc{lignin_database_2024,
  title={Interactive Lignin Materials Database: ML-Driven Platform for Sustainable Energy Storage},
  author={Burhan Beycan},
  year={2024},
  url={https://github.com/burhanbeycan/lignin-database-website},
  note={Accessed: \today}
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Reporting Issues

Please use the GitHub Issues tab to report bugs or request features.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Research supported by the sustainable materials science community
- Data sources from published scientific literature
- Built with modern web technologies for open science
- Inspired by the need for sustainable energy storage solutions

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/burhanbeycan/lignin-database-website/issues)
- **Discussions**: [GitHub Discussions](https://github.com/burhanbeycan/lignin-database-website/discussions)
- **Documentation**: This README and inline code comments

---

**🌍 Advancing sustainable energy storage through machine learning and materials discovery**

