import React, { useState } from 'react';
import './ApplyJob.css';

const ApplyJob = ({ onClose, jobTitle }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentPosition: '',
    website: '',
    linkedin: '',
    resume: null,
    photo: null,
    coverLetter: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Your application has been submitted!');
    onClose();
  };

  return (
    <div className="apply-overlay">
      <div className="apply-panel">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="form-title">Apply for: <span>{jobTitle}</span></h2>
        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>First Name *</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Last Name *</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Current Position</label>
              <input type="text" name="currentPosition" value={formData.currentPosition} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input type="url" name="website" value={formData.website} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>LinkedIn</label>
              <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Resume (PDF) *</label>
              <input type="file" name="resume" accept=".pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Photo</label>
              <input type="file" name="photo" accept="image/*" onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label>Cover Letter</label>
            <textarea name="coverLetter" rows="4" value={formData.coverLetter} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Additional Message</label>
            <textarea name="message" rows="3" value={formData.message} onChange={handleChange} />
          </div>

          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
