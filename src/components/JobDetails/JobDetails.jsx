import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { jobs, companies } from '../../assets/assets';
import ApplyJob from '../ApplyJob/ApplyJob'; // ← Importation du composant
import './JobDetails.css';

const JobDetails = () => {
  const { id } = useParams();
  const [showApplyPanel, setShowApplyPanel] = useState(false);

  const job = jobs.find(j => j.id === parseInt(id));
  const company = companies.find(c => c.id === job?.companyId);

  if (!job) return <div className="job-not-found">Job not found</div>;

  return (
    <div className="job-details">
      {/* Company Banner */}
      <div className="company-banner">
        {company?.cover && (
          <img src={company.cover} alt="Company Cover" className="company-banner-img" />
        )}
        <div className="company-header-content">
          <img src={company.logo} alt="Company Logo" className="company-logo" />
          <div>
            <h1 className="company-namee">{company.name}</h1>
            <p className="company-location">{company.location}</p>
          </div>
        </div>
      </div>

      {/* Main Job Details */}
      <div className="job-main">
        <div className="job-info">
          <h2>{job.title}</h2>
          <p className="job-meta">
            {job.type} • {job.experienceLevel} • {job.remote ? 'Remote' : job.location}
          </p>
          <p className="job-salary">{job.salary}</p>

          <div className="job-description">
            <h3>Job Description</h3>
            <p>{job.description}</p>
          </div>

          {/* Apply Button */}
          <button className="apply-button" onClick={() => setShowApplyPanel(true)}>
            Apply Now
          </button>

          {/* Tags */}
          <div className="job-tags-grid">
            <div>
              <h4>Technologies</h4>
              {job.technologies.map((tech, i) => (
                <span key={i} className="job-tag">{tech}</span>
              ))}
            </div>
            <div>
              <h4>Languages</h4>
              {job.languages.map((lang, i) => (
                <span key={i} className="job-tag">{lang}</span>
              ))}
            </div>
            <div>
              <h4>Degrees</h4>
              {job.degrees.map((deg, i) => (
                <span key={i} className="job-tag">{deg}</span>
              ))}
            </div>
            <div>
              <h4>Benefits</h4>
              {job.benefits.map((b, i) => (
                <span key={i} className="job-tag">{b}</span>
              ))}
            </div>
          </div>

          <div className="job-dates">
            <p><strong>Sector:</strong> {job.sector}</p>
            <p><strong>Status:</strong> {job.status}</p>
            <p><strong>Posted:</strong> {job.postedAt}</p>
            <p><strong>Expires:</strong> {job.expiresAt}</p>
          </div>
        </div>

        {/* Company Profile */}
        {company && (
          <div className="company-profile">
            <h3>About {company.name}</h3>
            <p>{company.description}</p>
            <p><strong>Category:</strong> {company.category}</p>
            <p><strong>Open Positions:</strong> {company.jobSlots}</p>
          </div>
        )}
      </div>

      {/* Show ApplyJob panel if state is true */}
      {showApplyPanel && (
        <ApplyJob
          onClose={() => setShowApplyPanel(false)}
          jobTitle={job.title}
        />
      )}
    </div>
  );
};

export default JobDetails;
