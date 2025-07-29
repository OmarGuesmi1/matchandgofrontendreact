// Remplacer tous les champs obsolètes par les bons noms de propriétés
// 🔁 Exemple : job.jobTitle ➜ job.title

import React, { useState } from 'react';
import './JobDetails.css';
import { useParams } from 'react-router-dom';
import { jobs, companies } from '../../assets/assets';
import ApplyJob from '../ApplyJob/ApplyJob.jsx';

const JobDetails = () => {
  const { id } = useParams();
  const jobId = parseInt(id);
  const job = jobs.find(j => j.id === jobId);
  const company = companies.find(c => c.id === job?.companyId);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  if (!job || !company) return <p>Job not found.</p>;

  const handleApplyNow = () => setShowApplicationForm(true);
  const handleCloseApplication = () => setShowApplicationForm(false);

  return (
    <div className="job-details-container">
      <img src={company.cover} alt={`${company.name} cover`} />

      <div className="job-details-content">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="company-header">
            <img src={company.logo} alt={`${company.name} logo`} />
            <h2>{company.name}</h2>
            <div className="company-info">
              <p>{company.location}</p>
              <p>{company.category}</p>
            </div>
          </div>

          <div className="job-summary-card">
            <h3>Job Summary</h3>
            <div className="summary-item">
              <span className="summary-label">Contract</span>
              <span className="summary-value">{job.type}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Location</span>
              <span className="summary-value">
                {job.location} {job.remote && "(Remote)"}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Salary</span>
              <span className="summary-value">
                {job.salary ? `${job.salary}/month` : 'N/A'}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Experience</span>
              <span className="summary-value">{job.experienceLevel}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Education</span>
              <span className="summary-value">{job.degrees?.join(', ')}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Posted</span>
              <span className="summary-value">
                {new Date(job.postedAt).toDateString()}
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Languages</span>
              <span className="summary-value">{job.languages?.join(', ')}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Sector</span>
              <span className="summary-value">{job.sector}</span>
            </div>
          </div>

          <div className="action-buttons">
            <button onClick={handleApplyNow}>Apply Now</button>
            <button>Save Job</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h1>{job.title}</h1>

          <section>
            <h3>Job Description</h3>
            <p>{job.description || 'No description available.'}</p>
          </section>

          <section>
            <h3>Technologies</h3>
            {job.technologies?.length ? (
              <div className="skills-container">
                {job.technologies.map((tech, index) => (
                  <span key={index} className="skill-tag">{tech}</span>
                ))}
              </div>
            ) : (
              <p className="no-data">No technologies listed.</p>
            )}
          </section>

          <section>
            <h3>Benefits</h3>
            {job.benefits?.length ? (
              <ul>
                {job.benefits.map((b, index) => (
                  <li key={index}>{b}</li>
                ))}
              </ul>
            ) : (
              <p className="no-data">No benefits listed.</p>
            )}
          </section>

          <section>
            <h3>Keywords</h3>
            {job.keywords?.length ? (
              <div className="skills-container">
                {job.keywords.map((kw, index) => (
                  <span key={index} className="skill-tag">{kw}</span>
                ))}
              </div>
            ) : (
              <p className="no-data">No keywords listed.</p>
            )}
          </section>
        </div>
      </div>

      {/* Application Form Modal */}
      <ApplyJob
        isOpen={showApplicationForm}
        onClose={handleCloseApplication}
        job={job}
        company={company}
      />
    </div>
  );
};

export default JobDetails;
