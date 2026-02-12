import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="modern-footer-content">

        <div className="footer-top-row">

          <div className="footer-col footer-col-brand">
            <div className="footer-logo-block">
              <img
                src="/metavara-logo.png"
                alt="Metavara Technologies"
                className="footer-logo-img"
              />
              <div className="footer-logo-text-group">
                <span className="footer-meta">META</span>
                <span className="footer-vara">VARA</span>
                <span className="footer-technologies">TECHNOLOGIES</span>
              </div>
            </div>

            <p className="footer-slogan">
              Empowering CyberNova IT services and consulting solutions.
            </p>

            <div className="footer-social-icons">
              <a href="https://www.linkedin.com/company/109353301/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587819560688" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/metavaratechnologies/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>

            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Company</h3>
            <div className="footer-links-list">
              <Link to="/about">About</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/events">Events</Link>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Support</h3>
            <div className="footer-links-list">
              <Link to="/contact">Help Center</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>

          <div className="footer-col footer-col-contact">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact-info">

              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+919538027892">+91 9538027892</a>
              </div>

              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:mvt.hr@metavaratechnologies.com">
                  mvt.hr@metavaratechnologies.com
                </a>
              </div>

              <div className="contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>Bangalore, Karnataka, India</span>
              </div>

            </div>
          </div>

        </div>

        <div className="footer-bottom-row">
          © {new Date().getFullYear()} Metavara Technologies Pvt Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
