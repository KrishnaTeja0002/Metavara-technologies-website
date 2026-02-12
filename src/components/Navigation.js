import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coreServicesOpen, setCoreServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setCoreServicesOpen(false);
    setAboutOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="main-nav">
      <div className="nav-content">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="/metavara-logo.png" alt="Metavara Logo" className="logo-image" />
          <span className="logo-text">
            <span className="logo-meta">META</span><span className="logo-vara">VARA</span>
            <span className="logo-technologies">TECHNOLOGIES</span>
          </span>
        </Link>
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <li className="nav-item">
            <span
              className="nav-link"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About
            </span>
            <div className={`dropdown-menu ${aboutOpen ? 'show' : ''}`}>
              <Link className={`dropdown-item ${isActive('/about')}`} to="/about" onClick={closeMobileMenu}>
                About Metavara
              </Link>
              <Link className={`dropdown-item ${isActive('/leadership')}`} to="/leadership" onClick={closeMobileMenu}>
                Leadership
              </Link>
              <Link className={`dropdown-item ${isActive('/our-people')}`} to="/our-people" onClick={closeMobileMenu}>
                Our People
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <span
              className="nav-link"
              onClick={() => setCoreServicesOpen(!coreServicesOpen)}
            >
              Core Services
            </span>
            <div className={`dropdown-menu ${coreServicesOpen ? 'show' : ''}`}>
              <Link className={`dropdown-item ${isActive('/application-development')}`} to="/application-development" onClick={closeMobileMenu}>
                Application Development
              </Link>
              <Link className={`dropdown-item ${isActive('/mobile-app-development')}`} to="/mobile-app-development" onClick={closeMobileMenu}>
                Mobile App Development
              </Link>
              <Link className={`dropdown-item ${isActive('/cyber-security')}`} to="/cyber-security" onClick={closeMobileMenu}>
                Cyber Security
              </Link>
              <Link className={`dropdown-item ${isActive('/ai-ml')}`} to="/ai-ml" onClick={closeMobileMenu}>
                AI & ML
              </Link>
              <Link className={`dropdown-item ${isActive('/digital-transformation')}`} to="/digital-transformation" onClick={closeMobileMenu}>
                Digital Transformation
              </Link>
              <Link className={`dropdown-item ${isActive('/it-consulting')}`} to="/it-consulting" onClick={closeMobileMenu}>
                IT Consulting
              </Link>
              <Link className={`dropdown-item ${isActive('/program-project-management')}`} to="/program-project-management" onClick={closeMobileMenu}>
                Program & Project Management
              </Link>
              <Link className={`dropdown-item ${isActive('/agile-services')}`} to="/agile-services" onClick={closeMobileMenu}>
                Agile Services
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/our-partners')}`} to="/our-partners" onClick={closeMobileMenu}>
              Partners
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/careers')}`} to="/careers" onClick={closeMobileMenu}>
              Careers
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/contact')}`} to="/contact" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

