
# Metavara Technologies - Corporate Website

Welcome to the official repository for the Metavara Technologies corporate website. This project is a modern, responsive web application built with React, designed to showcase our IT services, solutions, and company culture.

## Project Overview

Metavara Technologies is a next-generation IT services company specializing in:
- **Application Development**: Custom software solutions.
- **AI & ML**: Intelligent automation and predictive analytics.
- **Cyber Security**: Robust protection for digital assets.
- **Digital Transformation**: Modernizing business operations.
- **IT Consulting**: Strategic technology guidance.

This website serves as the primary digital presence for the company, featuring:
- **Dynamic Content**: Pages for services, leadership, and careers.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Modern UI**: Clean, professional aesthetics with interactive elements.

## Tech Stack

- **Frontend Framework**: React v18
- **Routing**: React Router DOM v6
- **Styling**: Custom CSS (responsive, modular)
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: React Scripts (Create React App)

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd metavara-technologies
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will run in development mode at [http://localhost:3000](http://localhost:3000).

## Building for Production

To create a production-ready build:

```bash
npm run build
```

This command bundles React in production mode and optimizes the build for the best performance. The build artifacts will be stored in the `build/` directory.

### Deployment

The `build` folder is ready to be deployed. You can deploy it to:
- **Static Hosting**: Netlify, Vercel, GitHub Pages.
- **Web Server**: Nginx, Apache (on a VPS).
- **Cloud Storage**: AWS S3, Google Cloud Storage.

## Project Structure

```
metavara-technologies/
├── public/                 # Static assets (images, index.html, favicon)
├── src/
│   ├── components/         # Reusable UI components (Navigation, Footer, Hero)
│   ├── pages/              # Individual page components (Home, About, Services)
│   ├── styles/             # Global and component-specific CSS files
│   ├── App.js              # Main application component and routing configuration
│   └── index.js            # Application entry point
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## License

This project is proprietary software of Metavara Technologies Private Limited. All rights reserved.
