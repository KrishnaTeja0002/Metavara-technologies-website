import React, { useState } from 'react';
import '../styles/Pages.css';
import '../styles/Contact.css';
import apiService from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await apiService.submitLead(formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', reason: 'general', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Failed to submit lead:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="content-section">
      <h1>Contact Us</h1>
      <p>Get in touch with us. We'd love to hear from you!</p>


      <div className="contact-main-grid">

        <div className="contact-left-column">
          <div className="contact-info-box">
            <h2>Contact Information</h2>
            <p><strong>📞 Phone:</strong> <a href="tel:+919538027892" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9538027892</a></p>
            <p><strong>📧 Email:</strong> <a href="mailto:mvt.hr@metavaratechnologies.com" style={{ color: 'inherit', textDecoration: 'none' }}>mvt.hr@metavaratechnologies.com</a></p>
          </div>

          <div className="address-box">
            <h2>Our Address</h2>
            <p>HNO:01 SRIMAN NILAYAM</p>
            <p>MEENAKSHI LAYOUT</p>
            <p>SIDDAPURA</p>
            <p>Bangalore, Karnataka – 560066</p>
            <p>India</p>
          </div>
        </div>


        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          {submitted ? (
            <div className="success-message">
              <p>✓ Thank you! Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="reason">Reason *</label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="service">Request for Service</option>
                  <option value="career">Join Metavara Technologies</option>
                  <option value="vendor">Vendor Registration</option>
                  <option value="other">Other Requests</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
