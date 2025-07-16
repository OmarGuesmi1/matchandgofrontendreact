import React from 'react';
import { assets } from '../../assets/assets';
import './JobSection.css';

const JobSection = () => {
  return (
    <div className="job-section">
      <h2 className="job-section-title">Find a Job</h2>

      <div className="job-section-content">
        <div className="job-section-text">
          <h1>Discover Workplaces That Truly Fit You</h1>
          <p>
            <strong>Tired of faceless job boards</strong> and generic listings? We bring you closer to the heart
            of every opportunity. Explore companies through <em>real stories</em>, team spotlights, and
            behind-the-scenes videos — so you don't just find a job, you find where you <strong>belong</strong>.
          </p>
          <p>
            Your next career move should <em>feel right</em>. That's why we go beyond the job title to
            highlight each company's <strong>mission, values, and day-to-day life</strong>. From team rituals to
            leadership style, get the full picture and apply where you know you'll <strong>thrive</strong>.
          </p>
          <button className="find-job-button">Find Job</button>
        </div>

        <div className="job-section-images">
            <div className="decorated-image single-image">
            <img src={assets.jobsection} alt="Workplace 1" className="main-image" />
            <div className="rotating-circle circle-green"></div>
            <div className="rotating-circle circle-outline"></div>
            </div>
        </div>

         
        </div>
      </div>
  );
};

export default JobSection;
