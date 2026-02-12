import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import DigitalTransformation from './pages/DigitalTransformation';
import CyberSecurity from './pages/CyberSecurity';
import ITConsulting from './pages/ITConsulting';
import AIML from './pages/AIML';
import OurPeople from './pages/OurPeople';
import OurPartners from './pages/OurPartners';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ApplicationDevelopment from './pages/ApplicationDevelopment';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import ProgramProjectManagement from './pages/ProgramProjectManagement';
import AgileServices from './pages/AgileServices';
import Blogs from './pages/Blogs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import './styles/index.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/it-consulting" element={<ITConsulting />} />
          <Route path="/ai-ml" element={<AIML />} />
          <Route path="/application-development" element={<ApplicationDevelopment />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/program-project-management" element={<ProgramProjectManagement />} />
          <Route path="/agile-services" element={<AgileServices />} />
          <Route path="/our-people" element={<OurPeople />} />
          <Route path="/our-partners" element={<OurPartners />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
