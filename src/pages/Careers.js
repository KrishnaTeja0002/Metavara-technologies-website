import React, { useState, useEffect } from 'react';
import apiService from '../services/api';
import '../styles/Pages.css';

const Careers = () => {

  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);


  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiService.getPositions();
      setPositions(data);
    } catch (err) {
      setError('Failed to load job positions. Please try again later.');
      console.error('Error fetching positions:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: position.title
    });
    setResumeFile(null);
    setShowApplicationForm(true);
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF, DOC, or DOCX file');
        e.target.value = '';
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        e.target.value = '';
        return;
      }

      setResumeFile(file);
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitError('Please enter your name');
      return false;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setSubmitError('Please enter a valid email address');
      return false;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      setSubmitError('Please enter a valid phone number');
      return false;
    }

    if (!formData.position.trim()) {
      setSubmitError('Please select a position');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    try {
      setSubmitting(true);

      await apiService.submitApplication(formData, resumeFile);

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', position: '' });
      setResumeFile(null);

      setTimeout(() => {
        setShowApplicationForm(false);
        setSubmitSuccess(false);
      }, 3000);

    } catch (err) {
      setSubmitError(err.message || 'Failed to submit application. Please try again.');
      console.error('Error submitting application:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseForm = () => {
    setShowApplicationForm(false);
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  if (loading) {
    return (
      <div className="content-section">
        <h1>Careers</h1>
        <p>Loading positions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="content-section">
        <h1>Careers</h1>
        <p style={{ color: '#dc2626' }}>{error}</p>
        <button onClick={fetchPositions} style={{
          padding: '10px 20px',
          background: '#0ea5e9',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="content-section">
      <h1>Careers at Metavara</h1>
      <p>Join our team and help shape the future of technology</p>

      {positions.length === 0 ? (
        <p>No open positions at the moment. Check back soon!</p>
      ) : (
        <div style={{ marginTop: '30px' }}>
          {positions.map((position) => (
            <div key={position.id} className="person-card" style={{ marginBottom: '25px' }}>
              <h3>{position.title}</h3>
              <p><strong>📍 Location:</strong> {position.location}</p>
              <p><strong>Type:</strong> {position.job_type_display}</p>
              <p>{position.description}</p>
              {position.requirements && (
                <div style={{ marginTop: '15px' }}>
                  <strong>Requirements:</strong>
                  <p>{position.requirements}</p>
                </div>
              )}
              <button
                onClick={() => handleApplyClick(position)}
                style={{
                  marginTop: '15px',
                  padding: '10px 25px',
                  background: 'linear-gradient(135deg, #0ea5e9, #0369a1)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '500',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}


      {showApplicationForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={handleCloseForm}>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '12px',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ color: '#0369a1', margin: 0 }}>Apply for {selectedPosition?.title}</h2>
              <button
                onClick={handleCloseForm}
                disabled={submitting}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '28px',
                  cursor: 'pointer',
                  color: '#64748b'
                }}
              >
                ×
              </button>
            </div>

            {submitSuccess ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '60px', color: '#10b981', marginBottom: '20px' }}>✓</div>
                <h3 style={{ color: '#0369a1' }}>Application Submitted Successfully!</h3>
                <p>Thank you for your interest. We'll review your application and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {submitError && (
                  <div style={{
                    background: '#fee2e2',
                    color: '#dc2626',
                    padding: '12px',
                    borderRadius: '6px',
                    marginBottom: '20px'
                  }}>
                    {submitError}
                  </div>
                )}

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#334155' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#334155' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                    placeholder="john.doe@example.com"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#334155' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={submitting}
                    placeholder="+1 (555) 123-4567"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      fontSize: '16px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#334155' }}>
                    Resume (PDF, DOC, DOCX)
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    disabled={submitting}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #cbd5e1',
                      borderRadius: '6px',
                      fontSize: '14px',
                      boxSizing: 'border-box'
                    }}
                  />
                  {resumeFile && (
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '8px' }}>
                      Selected: {resumeFile.name} ({(resumeFile.size / 1024).toFixed(2)} KB)
                    </p>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: submitting ? '#94a3b8' : 'linear-gradient(135deg, #0ea5e9, #0369a1)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseForm}
                    disabled={submitting}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: '#e2e8f0',
                      color: '#334155',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;